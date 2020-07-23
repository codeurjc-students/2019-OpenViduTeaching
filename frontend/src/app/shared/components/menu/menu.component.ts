import { MenuService } from 'src/app/shared/services/menu/menu.service';
import { OpenViduSessionService } from './../../services/openvidu-session/openvidu-session.service';
import { UserService } from 'src/app/shared/services/user/user.service';
import { Component, OnInit, Input, ViewChild, AfterViewInit, HostBinding, ElementRef } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';
import { OvSettingsModel } from '../../models/ovSettings';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
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
    public menuService: MenuService,
    private elementRef: ElementRef
  ) {
    this.assistantMessagesSubscription = this.menuService.assistantMessagesUnreadObs.subscribe((num) => {
			this.newMessagesAssistants = num;
    });
    this.moderatorMessagesSubscription = this.menuService.moderatorMessagesUnreadObs.subscribe((num) => {
			this.newMessagesModerators = num;
    });
  }

  private setColors() {
    let headerColor: string;
    let inkBarColor: string;
    if(this.lightTheme) {
      headerColor = '#b8b8b8';
      inkBarColor = '#3d3d3d';
    } else {
      headerColor = '#dfdfdf';
      inkBarColor = '#000000';
    }
    this.elementRef.nativeElement.style.setProperty('--header-color', headerColor);
    this.elementRef.nativeElement.style.setProperty('--ink-bar-color', inkBarColor);
  }

  ngOnInit(): void {
    this.mySessionId = this.openviduSessionService.getSessionId();
  }

  ngAfterViewInit(): void {
    this.menuService.setMenuTabGroup(this.tabGroup);
    this.setColors();
  }
}
