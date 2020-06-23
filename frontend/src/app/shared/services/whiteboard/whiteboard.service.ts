import { Injectable, ElementRef } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WhiteboardService {

  private isActive: boolean = true;
	private _isActive = <BehaviorSubject<boolean>>new BehaviorSubject(false);
	isWhiteBoardActiveObs: Observable<boolean>;

  constructor() {
    this.isWhiteBoardActiveObs = this._isActive.asObservable();
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
