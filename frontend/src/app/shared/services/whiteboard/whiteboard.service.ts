import { OpenViduSessionService } from './../openvidu-session/openvidu-session.service';
import { UserService } from 'src/app/shared/services/user/user.service';
import { Injectable, ElementRef } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CanvasWhiteboardOptions } from 'ng2-canvas-whiteboard';

@Injectable({
  providedIn: 'root'
})
export class WhiteboardService {

  private isActive: boolean = true;
	private _isActive = <BehaviorSubject<boolean>>new BehaviorSubject(false);
  isWhiteBoardActiveObs: Observable<boolean>;

  constructor(
    private userService: UserService
  ) {
    this.isWhiteBoardActiveObs = this._isActive.asObservable();
  }

  getWhiteboardOptions(roomName: string): CanvasWhiteboardOptions {
    return {
      drawingEnabled: true,
      drawButtonEnabled: false,
      clearButtonEnabled: this.userService.canStream(roomName),
      clearButtonClass: "clearButtonClass",
      clearButtonText: "Clear",
      undoButtonText: "Undo",
      undoButtonEnabled: this.userService.canStream(roomName),
      redoButtonText: "Redo",
      redoButtonEnabled: this.userService.canStream(roomName),
      colorPickerEnabled: this.userService.canStream(roomName),
      saveDataButtonEnabled: true,
      saveDataButtonText: "Save",
      lineWidth: 5,
      shouldDownloadDrawing: true
    }
  }

  showWhiteboard() {
    this.isActive = true;
    this._isActive.next(this.isActive);
  }

  hideWhiteBoard() {
    this.isActive = false;
    this._isActive.next(this.isActive);
  }
}
