import { MenuService } from 'src/app/shared/services/menu/menu.service';
import { OpenViduSessionService } from './../../services/openvidu-session/openvidu-session.service';
import { UserService } from 'src/app/shared/services/user/user.service';
import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';
import { OvSettingsModel } from '../../models/ovSettings';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, AfterViewInit {

  @ViewChild('tabGroup') tabGroup: MatTabGroup;

  @Input() ovSettings: OvSettingsModel;
  @Input() lightTheme: boolean;

  mySessionId: string;

  assistantMessagesSubscription: Subscription;
  newMessagesAssistants: number;
  moderatorMessagesSubscription: Subscription;
  newMessagesModerators: number;

  constructor(
    private openviduSessionService: OpenViduSessionService,
    public userService: UserService,
    public menuService: MenuService
  ) {
    this.assistantMessagesSubscription = this.menuService.assistantMessagesUnreadObs.subscribe((num) => {
			this.newMessagesAssistants = num;
    });
    this.moderatorMessagesSubscription = this.menuService.moderatorMessagesUnreadObs.subscribe((num) => {
			this.newMessagesModerators = num;
		});
  }

  ngOnInit(): void {
    this.mySessionId = this.openviduSessionService.getSessionId();
  }

  ngAfterViewInit(): void {
    this.menuService.setMenuTabGroup(this.tabGroup);
  }
}
