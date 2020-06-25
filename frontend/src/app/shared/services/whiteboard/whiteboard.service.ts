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
	private history: CanvasWhiteboardUpdate[] = [];
	private undoHistory: CanvasWhiteboardUpdate[][] = [];

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
		this.updateHistory(type, update);
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
							if (this.whiteboardComponent.getDrawingHistory().some((e) => e.UUID == update)) {
								this.canvasWhiteboardService.redoCanvas(update);
							} else {
								const redoBatch = this.undoHistory.find((batch) => batch[0].UUID == update);
								this.canvasWhiteboardService.drawCanvas(redoBatch);
							}
							break;
						case 'Clear':
							this.canvasWhiteboardService.clearCanvas();
							break;
					}
					this.updateHistory(type, update);
				}
			}
		});
		session.on('signal:whiteboardHistory', (event: SignalEvent) => {
			if (event.from == undefined) {
				if (!this.receivedHistory) {
					this.receivedHistory = true;
					this.isActive = true;
					this._isActive.next(this.isActive);
					const data = JSON.parse(event.data);
					this.history = data.history;
					this.undoHistory = data.undoHistory;
					setTimeout(() => this.canvasWhiteboardService.drawCanvas(this.history), 250);
				}
			}
		});
	}

	getDrawingHistory(): CanvasWhiteboardUpdate[] {
		return this.history;
	}

	sendWhiteboardHistorySignal(connection: Connection) {
		if (this.isActive && this.userService.canStream(this.openviduSessionService.getSessionId())) {
			this.signalService
				.sendSignal(this.openviduSessionService.getSessionId(), 'whiteboardHistory', [connection.connectionId], {
					history: this.getDrawingHistory(),
					undoHistory: this.undoHistory
				})
				.subscribe((_) => {});
		}
	}

	setWhiteboardComponent(whiteboardComponent: CanvasWhiteboardComponent) {
		this.whiteboardComponent = whiteboardComponent;
	}

	private updateHistory(type: string, update?: CanvasWhiteboardUpdate[] | string) {
		switch (type) {
			case 'BatchUpdate':
				this.undoHistory = [];
				this.history = this.history.concat(update as CanvasWhiteboardUpdate[]);
				break;
			case 'Undo':
				const undo = this.history.filter((item) => item.UUID == this.history[this.history.length - 1].UUID);
				this.undoHistory.push(undo);
				this.history = this.history.filter((item) => item.UUID != this.history[this.history.length - 1].UUID);
				break;
			case 'Redo':
				const redo = this.undoHistory.pop();
				this.history = this.history.concat(redo as CanvasWhiteboardUpdate[]);
				break;
			case 'Clear':
				this.undoHistory = [];
				this.history = [];
				break;
		}
	}
}
