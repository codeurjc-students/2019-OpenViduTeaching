import { Injectable, ElementRef } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { CanvasWhiteboardComponent } from 'ng2-canvas-whiteboard';

@Injectable()
export class WhiteboardServiceMock {
	private _isActive = <BehaviorSubject<boolean>>new BehaviorSubject(false);
	isWhiteBoardActiveObs: Observable<boolean>;

	constructor() {
		this.isWhiteBoardActiveObs = this._isActive.asObservable();
	}

	setWhiteboardCanvasRef(whiteboard: ElementRef) {}

	showWhiteboard() {}

	hideWhiteBoard() {}

	getWhiteboardOptions() {}

	setWhiteboardComponent(whiteboardComponent: CanvasWhiteboardComponent) {}
}
