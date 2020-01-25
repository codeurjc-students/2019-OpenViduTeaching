import { UserService } from './../../../services/user.service';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, HostListener } from '@angular/core';
import { UserModel } from '../../../models/user-model';
import { Session } from 'openvidu-browser';

@Component({
  selector: 'chat-component',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {

  @ViewChild('chatScroll', {static: false}) chatScroll: ElementRef;
  @ViewChild('chatInput', {static: false}) chatInput: ElementRef;

  @Input() signal: string;
  @Input() session: Session;
  @Input() sessionScreen: Session;
  @Input() user: UserModel;
  @Input() lightTheme: boolean;
  @Input() roomName: string;
  @Input()
  messageList: { connectionId: string; nickname: string; message: string; userAvatar: string }[] = [];

  _menuOpened: boolean;

  @Output() closeMenu = new EventEmitter<any>();

  message: string;

  constructor(
    private userSrv: UserService
  ) {}

  @HostListener('document:keydown.escape', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    console.log(event);
    if (this._menuOpened) {
      this.close();
    }
  }

  ngOnInit() {}

  @Input('menuOpened')
  set isDisplayed(display: boolean) {
    this._menuOpened = display;
    if (this._menuOpened) {
      this.scrollToBottom();
      setTimeout(() => {
        this.chatInput.nativeElement.focus();
      });
    }
  }

  eventKeyPress(event) {
    if (event && event.keyCode === 13) {
      // Press Enter
      this.sendMessage();
    }
  }

  sendMessage(): void {
    if (this.user && this.message) {
      this.message = this.message.replace(/ +(?= )/g, '');
      if (this.message !== '' && this.message !== ' ') {
        const data = {
          connectionId: this.user.getConnectionId(),
          message: this.message,
          nickname: this.user.getNickname(),
        };
        this.session.signal({
          data: JSON.stringify(data),
          type: this.signal,
        });
        this.message = '';
      }
    }
  }

  scrollToBottom(): void {
    setTimeout(() => {
      try {
        this.chatScroll.nativeElement.scrollTop = this.chatScroll.nativeElement.scrollHeight;
      } catch (err) {}
    }, 20);
  }

  close() {
    this.closeMenu.emit();
  }
}
