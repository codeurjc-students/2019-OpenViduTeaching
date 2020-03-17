import { UserModel } from '../../models/user-model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'popup-message-component',
  templateUrl: './popup-message.component.html',
  styleUrls: ['./popup-message.component.css']
})
export class PopupMessageComponent implements OnInit {

  @Input() chatType: string;
  @Input() userName: string;
  @Input() userAvatar: string;
  @Input() content: string;

  constructor() { }

  ngOnInit() {
  }

}
