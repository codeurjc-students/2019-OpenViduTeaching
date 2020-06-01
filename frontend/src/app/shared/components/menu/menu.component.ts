import { OpenViduSessionService } from './../../services/openvidu-session/openvidu-session.service';
import { UserService } from 'src/app/shared/services/user/user.service';
import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { OvSettingsModel } from '../../models/ovSettings';
import { ChatService } from '../../services/chat/chat.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() ovSettings: OvSettingsModel;
  @Input() lightTheme: boolean;

  mySessionId: string;

  constructor(
    @Inject('assistantsChatService') public assistantsChatService: ChatService,
		@Inject('moderatorsChatService') public moderatorsChatService: ChatService,
    private openviduSessionService: OpenViduSessionService,
    public userService: UserService
  ) { }

  ngOnInit(): void {
    this.mySessionId = this.openviduSessionService.getSessionId();
  }

  tabChanged(tabChangeEvent: MatTabChangeEvent) {
    /* TODO
    if(tabChangeEvent.index===0) {
      this.newMessagesAssistants = 0;
      this.newMessages = this.newMessagesModerators;
    } else if (tabChangeEvent.index===1) {
      this.newMessagesModerators = 0;
      this.newMessages = this.newMessagesAssistants;
    }
    */
  }

}
