import { Injectable, ElementRef } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class WhiteboardServiceMock {
	private _isActive = <BehaviorSubject<boolean>>new BehaviorSubject(false);
	isWhiteBoardActiveObs: Observable<boolean>;

	constructor() {
		this.isWhiteBoardActiveObs = this._isActive.asObservable();
	}

	setWhiteboardCanvasRef(whiteboard: ElementRef) {}

	setBigToggleCallback(callback: (event: { element: HTMLElement; connectionId?: string; resetAll?: boolean }) => void) {}

	showWhiteboard() {}

	hideWhiteBoard() {}

	getWhiteboardOptions() {}
}
