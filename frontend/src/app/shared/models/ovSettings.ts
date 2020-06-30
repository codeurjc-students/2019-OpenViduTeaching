import { UserService } from './../services/user/user.service';
import { OvSettings } from '../types/ov-settings';

export class OvSettingsModel {
	private ovSettings: OvSettings;

	constructor() {
		this.ovSettings = {
			chat: true,
			autopublish: false,
			toolbarButtons: {
				video: true,
				audio: true,
				fullscreen: true,
				screenShare: true,
				layoutSpeaking: true,
				exit: true,
				raiseHand: true
			}
		};
	}

	public set(ovSettings: OvSettings) {
		this.ovSettings = ovSettings;
	}

	public isAutoPublish(): boolean {
		return this.ovSettings.autopublish;
	}

	public hasVideo(): boolean {
		return this.ovSettings.toolbarButtons.video;
	}

	public hasScreenSharing(): boolean {
		return this.ovSettings.toolbarButtons.screenShare;
	}

	public hasLayoutSpeaking(): boolean {
		return this.ovSettings.toolbarButtons.layoutSpeaking;
	}

	public hasFullscreen(): boolean {
		return this.ovSettings.toolbarButtons.fullscreen;
	}

	public hasAudio(): boolean {
		return this.ovSettings.toolbarButtons.audio;
	}

	public hasChat(): boolean {
		return this.ovSettings.chat;
	}

	public hasExit(): boolean {
		return this.ovSettings.toolbarButtons.exit;
	}

	public hasRaiseHand(): boolean {
		return this.ovSettings.toolbarButtons.raiseHand;
	}

	public setScreenSharing(screenShare: boolean) {
		this.ovSettings.toolbarButtons.screenShare = screenShare;
	}

	public setDefaultTeachingSettings(userService: UserService, roomName: string): OvSettingsModel {
		this.ovSettings = {
			chat: true,
			autopublish: false,
			toolbarButtons: {
				video: userService.canStream(roomName),
				audio: userService.canStream(roomName),
				fullscreen: true,
				screenShare: userService.canStream(roomName),
				layoutSpeaking: true,
				exit: true,
				raiseHand: true
			}
		};
		return this;
	}

	public setDefaultRecorderSettings(): OvSettingsModel {
		this.ovSettings = {
			chat: true,
			autopublish: false,
			toolbarButtons: {
				video: false,
				audio: false,
				fullscreen: false,
				screenShare: false,
				layoutSpeaking: false,
				exit: false,
				raiseHand: false
			}
		};
		return this;
	}
}
