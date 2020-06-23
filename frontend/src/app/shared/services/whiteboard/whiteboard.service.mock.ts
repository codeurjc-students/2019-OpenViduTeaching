import { Injectable, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class WhiteboardServiceMock {
	isWhiteBoardActiveObs: Observable<boolean>;

	constructor() {}

	setWhiteboardCanvasRef(whiteboard: ElementRef) {}

	setBigToggleCallback(callback: (event: { element: HTMLElement; connectionId?: string; resetAll?: boolean }) => void) {}

	showWhiteboard() {}

	hideWhiteBoard() {}
}
