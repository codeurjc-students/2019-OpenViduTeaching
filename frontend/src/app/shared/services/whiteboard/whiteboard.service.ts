import { SignalService } from './../signal/signal.service';
import { OpenViduSessionService } from './../openvidu-session/openvidu-session.service';
import { UserService } from 'src/app/shared/services/user/user.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CanvasWhiteboardOptions, CanvasWhiteboardUpdate, CanvasWhiteboardService, CanvasWhiteboardComponent } from 'ng2-canvas-whiteboard';
import { SignalEvent, Connection } from 'openvidu-browser';

@Injectable({
	providedIn: 'root'
})
export class WhiteboardService {
	private isActive: boolean = false;
	private _isActive = <BehaviorSubject<boolean>>new BehaviorSubject(false);
	isWhiteBoardActiveObs: Observable<boolean>;

	private whiteboardComponent: CanvasWhiteboardComponent;

	private receivedHistory: boolean = false;

	constructor(
		private userService: UserService,
		private signalService: SignalService,
		private openviduSessionService: OpenViduSessionService,
		private canvasWhiteboardService: CanvasWhiteboardService
	) {
		this.isWhiteBoardActiveObs = this._isActive.asObservable();
	}

	getWhiteboardOptions(roomName: string): CanvasWhiteboardOptions {
		return {
			shapeSelectorEnabled: this.userService.canStream(roomName),
			drawingEnabled: this.userService.canStream(roomName),
			drawButtonEnabled: false,
			clearButtonEnabled: this.userService.canStream(roomName),
			clearButtonClass: 'clearButtonClass',
			clearButtonText: 'Clear',
			undoButtonText: 'Undo',
			undoButtonEnabled: this.userService.canStream(roomName),
			redoButtonText: 'Redo',
			redoButtonEnabled: this.userService.canStream(roomName),
			colorPickerEnabled: this.userService.canStream(roomName),
			saveDataButtonEnabled: true,
			saveDataButtonText: 'Save',
			lineWidth: 5,
			shouldDownloadDrawing: true
		};
	}

	showWhiteboard() {
		this.isActive = true;
		this._isActive.next(this.isActive);
		this.sendOpenWhiteBoardSignal(true);
	}

	hideWhiteBoard() {
		this.isActive = false;
		this._isActive.next(this.isActive);
		this.sendOpenWhiteBoardSignal(false);
	}

	onDraw(type: string, update?: CanvasWhiteboardUpdate[] | string) {
		this.signalService
			.sendSignal(this.openviduSessionService.getSessionId(), 'whiteboardDraw', [], {
				type: type,
				update: update,
				connectionId: this.openviduSessionService.getWebcamSession().connection.connectionId
			})
			.subscribe((_) => {});
	}

	private sendOpenWhiteBoardSignal(active: boolean) {
		this.signalService
			.sendSignal(this.openviduSessionService.getSessionId(), 'openWhiteBoard', [], { whiteboardActive: active })
			.subscribe((_) => {});
	}

	subscribeToWhiteboardSignals() {
		const session = this.openviduSessionService.getWebcamSession();
		session.on('signal:openWhiteBoard', (event: SignalEvent) => {
			if (event.from == undefined) {
				this.isActive = JSON.parse(event.data).whiteboardActive;
				this._isActive.next(this.isActive);
			}
		});
		session.on('signal:whiteboardDraw', (event: SignalEvent) => {
			if (event.from == undefined) {
				const data = JSON.parse(event.data);
				if (!this.openviduSessionService.isMyOwnConnection(data.connectionId)) {
					const type = data.type;
					const update = data.update;
					switch (type) {
						case 'BatchUpdate':
							this.canvasWhiteboardService.drawCanvas(update);
							break;
						case 'Undo':
							this.canvasWhiteboardService.undoCanvas(update);
							break;
						case 'Redo':
							this.canvasWhiteboardService.redoCanvas(update);
							break;
						case 'Clear':
							this.canvasWhiteboardService.clearCanvas();
							break;
					}
				}
			}
		});
		session.on('signal:whiteboardHistory', (event: SignalEvent) => {
			if (event.from == undefined) {
				if (!this.receivedHistory) {
					this.receivedHistory = true;
					this.isActive = true;
					this._isActive.next(this.isActive);
					const history: CanvasWhiteboardUpdate[] = JSON.parse(event.data).history;
					console.warn(history);
					setTimeout(() => this.canvasWhiteboardService.drawCanvas(history), 250);
				}
			}
		});
	}

	getDrawingHistory(): CanvasWhiteboardUpdate[] {
		return this.whiteboardComponent.getDrawingHistory();
	}

	sendWhiteboardHistorySignal(connection: Connection) {
		if (this.isActive && this.userService.canStream(this.openviduSessionService.getSessionId())) {
			this.signalService
				.sendSignal(this.openviduSessionService.getSessionId(), 'whiteboardHistory', [connection.connectionId], {
					history: this.getDrawingHistory()
				})
				.subscribe((_) => {});
		}
	}

	setWhiteboardComponent(whiteboardComponent: CanvasWhiteboardComponent) {
		this.whiteboardComponent = whiteboardComponent;
	}
}
