import { RaiseHandService } from './../../services/raiseHand/raise-hand.service';
import { Component, OnInit, Input, EventEmitter, Output, HostListener, OnDestroy } from '@angular/core';
import { UtilsService } from '../../services/utils/utils.service';
import { VideoFullscreenIcon } from '../../types/icon-type';
import { OvSettingsModel } from '../../models/ovSettings';
import { Subscription } from 'rxjs/internal/Subscription';
import { MenuService } from '../../services/menu/menu.service';
import { UserModel } from '../../models/user-model';

@Component({
	selector: 'app-toolbar',
	templateUrl: './toolbar.component.html',
	styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit, OnDestroy {
	@Input() lightTheme: boolean;
	@Input() mySessionId: string;
	@Input() compact: boolean;
	@Input() ovSettings: OvSettingsModel;
	@Input() localUser: UserModel;

	@Input() isWebcamVideoEnabled: boolean;
	@Input() isWebcamAudioEnabled: boolean;
	@Input() isScreenEnabled: boolean;
	@Input() isAutoLayout: boolean;
	@Input() isConnectionLost: boolean;
	@Input() hasVideoDevices: boolean;
	@Input() hasAudioDevices: boolean;
	@Output() micButtonClicked = new EventEmitter<any>();
	@Output() camButtonClicked = new EventEmitter<any>();
	@Output() screenShareClicked = new EventEmitter<any>();
	@Output() layoutButtonClicked = new EventEmitter<any>();
	@Output() leaveSessionButtonClicked = new EventEmitter<any>();

	newMessagesNum: number;
	private menuServiceSubscription: Subscription;

	fullscreenIcon = VideoFullscreenIcon.BIG;
	logoUrl = 'https://raw.githubusercontent.com/OpenVidu/openvidu-call/master/openvidu-call-front/src/assets/images/';

	participantsNames: string[] = [];

	constructor(
		private utilsSrv: UtilsService,
		private menuService: MenuService,
		private raiseHandService: RaiseHandService,
	) {
		this.menuServiceSubscription = this.menuService.totalMessagesUnreadObs.subscribe((num) => {
			this.newMessagesNum = num;
		});
	}
	ngOnDestroy(): void {
		this.menuServiceSubscription.unsubscribe();
	}

	@HostListener('window:resize', ['$event'])
	sizeChange(event) {
		const maxHeight = window.screen.height;
		const maxWidth = window.screen.width;
		const curHeight = window.innerHeight;
		const curWidth = window.innerWidth;
		if (maxWidth !== curWidth && maxHeight !== curHeight) {
			this.fullscreenIcon = VideoFullscreenIcon.BIG;
		}
	}

	ngOnInit() {
		if (this.lightTheme) {
			this.logoUrl += 'openvidu_logo_grey.png';
			return;
		}
		this.logoUrl += 'openvidu_logo.png';
	}

	toggleMicrophone() {
		this.micButtonClicked.emit();
	}

	toggleCamera() {
		this.camButtonClicked.emit();
	}

	toggleScreenShare() {
		this.screenShareClicked.emit();
	}

	toggleSpeakerLayout() {
		this.layoutButtonClicked.emit();
	}

	leaveSession() {
		this.leaveSessionButtonClicked.emit();
	}

	toggleMenu() {
		this.menuService.toggleMenu();
	}

	toggleFullscreen() {
		this.utilsSrv.toggleFullscreen('videoRoomNavBar');
		this.fullscreenIcon = this.fullscreenIcon === VideoFullscreenIcon.BIG ? VideoFullscreenIcon.NORMAL : VideoFullscreenIcon.BIG;
	}

	raiseOrLowerHand() {
		if (this.localUser.getPositionInHandRaiseQueue() > 0) {
			this.raiseHandService.lowerHand(this.mySessionId, this.localUser);
		} else {
			this.raiseHandService.raiseHand(this.mySessionId, this.localUser);
		}
	}
}
