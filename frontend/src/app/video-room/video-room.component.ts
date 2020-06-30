import { Component, HostListener, OnDestroy, OnInit, ViewChild, Inject, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import {
	Publisher,
	Subscriber,
	Session,
	SignalOptions,
	StreamEvent,
	StreamPropertyChangedEvent,
	SessionDisconnectedEvent,
	PublisherSpeakingEvent,
	Connection,
	ConnectionEvent,
	SignalEvent
} from 'openvidu-browser';
import { OpenViduLayout, OpenViduLayoutOptions } from '../shared/layout/openvidu-layout';
import { UserModel } from '../shared/models/user-model';
import { OvSettingsModel } from '../shared/models/ovSettings';
import { ScreenType } from '../shared/types/video-type';
import { ILogger } from '../shared/types/logger-type';
import { LayoutType } from '../shared/types/layout-type';
import { trigger, transition, style, animate } from '@angular/animations';

// Services
import { DevicesService } from '../shared/services/devices/devices.service';
import { OpenViduSessionService } from '../shared/services/openvidu-session/openvidu-session.service';
import { NetworkService } from '../shared/services/network/network.service';
import { LoggerService } from '../shared/services/logger/logger.service';
import { RemoteStreamersService } from '../shared/services/remote-streamers/remote-streamers.service';
import { UtilsService } from '../shared/services/utils/utils.service';
import { MatSidenav } from '@angular/material/sidenav';
import { ChatService } from '../shared/services/chat/chat.service';
import { MenuService } from '../shared/services/menu/menu.service';
import { RemoteUsersService } from '../shared/services/remote-users/remote-users.service';
import { WhiteboardService } from './../shared/services/whiteboard/whiteboard.service';
import { RaiseHandService } from './../shared/services/raiseHand/raise-hand.service';
import { NotificationsService } from './../shared/services/notifications/notifications.service';
import { UserService } from './../shared/services/user/user.service';
import { CanvasWhiteboardOptions, CanvasWhiteboardUpdate, CanvasWhiteboardComponent } from 'ng2-canvas-whiteboard';

@Component({
	selector: 'app-video-room',
	templateUrl: './video-room.component.html',
	styleUrls: ['./video-room.component.css'],
	animations: [
		trigger('popup', [
			transition(':enter', [
				style({ transform: 'scale(0.1)', opacity: 0 }),
				animate('0.75s cubic-bezier(.8, -0.6, 0.26, 1.6)', style({ transform: 'scale(1)', opacity: 1 }))
			]),
			transition(':leave', [
				style({ transform: 'scale(1)', opacity: 1, height: '*' }),
				animate(
					'0.5s cubic-bezier(.8, -0.6, 0.2, 1.5)',
					style({
						transform: 'scale(0.1)',
						opacity: 0,
						height: '0px',
						margin: '0px'
					})
				)
			])
		])
	]
})
export class VideoRoomComponent implements OnInit, OnDestroy {
	@ViewChild('sidenav') menuSidenav: MatSidenav;
	@ViewChildren('popup', { read: ElementRef }) currentPopups: QueryList<ElementRef>;
	@ViewChild('raisedHands', { read: ElementRef }) set raisedHands(raisedHands: ElementRef) {
		if (raisedHands) {
			this.raisedHandsPopup = raisedHands;
			this.notificationsService.setRaiseHandsPopupRef(this.raisedHandsPopup);
		}
	}
	private raisedHandsPopup: ElementRef;
	@ViewChild('canvasWhiteboard', { read: ElementRef }) set canvasWhiteboardRef(canvasWhiteboard: ElementRef) {
		if (canvasWhiteboard) {
			this.whiteboard = canvasWhiteboard;
			this.updateOpenViduLayout();
			this.onToggleVideoSize({ element: this.whiteboard.nativeElement, resetAll: true });
			this.resize(200);
		} else {
			this.updateOpenViduLayout();
		}
	}
	private whiteboard: ElementRef;
	@ViewChild('canvasWhiteboard') set canvasWhiteboardComponent(whiteboardComponent: CanvasWhiteboardComponent) {
		this.whiteboardComponent = whiteboardComponent;
		this.whiteboardService.setWhiteboardComponent(this.whiteboardComponent);
	}
	private whiteboardComponent: CanvasWhiteboardComponent;

	ovSettings: OvSettingsModel;
	compact = false;
	sidenavMode: 'side' | 'over' = 'side';
	lightTheme: boolean;
	showConfigRoomCard = true;
	session: Session;
	sessionScreen: Session;
	connection: Connection;
	openviduLayout: OpenViduLayout;
	openviduLayoutOptions: OpenViduLayoutOptions;
	mySessionId: string;
	roomName: string;
	localUsers: UserModel[] = [];
	remoteStreamers: UserModel[] = [];
	remoteUsers: UserModel[] = [];
	modConnections: Connection[] = [];
	isConnectionLost: boolean;
	isAutoLayout = false;
	hasVideoDevices: boolean;
	hasAudioDevices: boolean;
	whiteboardActive: boolean;
	whiteboardOptions: CanvasWhiteboardOptions;
	private log: ILogger;
	private oVUsersSubscription: Subscription;
	private remoteUsersSubscription: Subscription;
	private remoteStreamersSubscription: Subscription;
	private menuToggleSubscription: Subscription;
	private modConnectionsSubscription: Subscription;
	private whiteboardActiveSubscription: Subscription;

	constructor(
		private networkSrv: NetworkService,
		private router: Router,
		private route: ActivatedRoute,
		private utilsSrv: UtilsService,
		private remoteStreamersService: RemoteStreamersService,
		private remoteUsersService: RemoteUsersService,
		public oVSessionService: OpenViduSessionService,
		private oVDevicesService: DevicesService,
		private loggerSrv: LoggerService,
		private menuService: MenuService,
		public notificationsService: NotificationsService,
		private raiseHandService: RaiseHandService,
		private whiteboardService: WhiteboardService,
		@Inject('assistantsChatService') private assistantsChatService: ChatService,
		@Inject('moderatorsChatService') private moderatorsChatService: ChatService,
		private userService: UserService
	) {
		this.log = this.loggerSrv.get('VideoRoomComponent');
	}

	@HostListener('window:beforeunload')
	beforeunloadHandler() {
		this.leaveSession();
	}

	@HostListener('window:resize')
	sizeChange() {
		if (this.openviduLayout) {
			this.updateOpenViduLayout();
			this.checkSizeComponent();
		}
	}

	@HostListener('window:keydown', ['$event'])
	onKeyDown(e: KeyboardEvent) {
		if (e.ctrlKey && e.keyCode == 90) {
			//Ctrl+Z
			const whiteboardHistory = this.whiteboardService.getDrawingHistory();
			this.onWhiteboardDraw('Undo', whiteboardHistory[whiteboardHistory.length - 1].UUID);
		}
		if (e.ctrlKey && e.keyCode == 89) {
			//Ctrl+Y
			const whiteboardHistory = this.whiteboardService.getDrawingHistory();
			this.onWhiteboardDraw('Redo', whiteboardHistory[whiteboardHistory.length - 1].UUID);
		}
	}

	async ngOnInit() {
		this.route.queryParamMap.subscribe((params) => {
			const userName = params.get('user');
			const password = params.get('pass');
			if (!!userName && !!password) {
				if(this.userService.user?.name != userName) {
					this.userService.logIn(userName, password).subscribe((_) => {
						window.location.reload();
					});
				} else {
					this.userService.getRecorderName().subscribe((recorderName) => {
						this.userService.setRecorderName(recorderName);
						if(this.userService.isRecorder()) {
							this.setupRecorder();
						}
					});
				}
			} else if (!this.userService.isLogged) {
				this.utilsSrv.showErrorMessage(
					'You need to be logged in to enter a room',
					'Rooms can only be accessed with an invite link'
				);
			}
			this.initSettings();
		});
	}

	ngOnDestroy() {
		// Reconnecting session is received in Firefox
		// To avoid 'Connection lost' message uses session.off()
		this.session?.off('reconnecting');
		this.remoteStreamersService.clean();
		this.remoteUsersService.clean();
		this.session = null;
		this.sessionScreen = null;
		this.connection = null;
		this.localUsers = [];
		this.remoteUsers = [];
		this.remoteStreamers = [];
		this.modConnections = [];
		this.openviduLayout = null;
		if (this.oVUsersSubscription) {
			this.oVUsersSubscription.unsubscribe();
		}
		if (this.remoteStreamersSubscription) {
			this.remoteStreamersSubscription.unsubscribe();
		}
		if (this.remoteUsersSubscription) {
			this.remoteUsersSubscription.unsubscribe();
		}
		if (this.menuToggleSubscription) {
			this.menuToggleSubscription.unsubscribe();
		}
		if (this.modConnectionsSubscription) {
			this.modConnectionsSubscription.unsubscribe();
		}
		if (this.whiteboardActiveSubscription) {
			this.whiteboardActiveSubscription.unsubscribe();
		}
	}

	initSettings() {
		this.route.paramMap.subscribe((params) => {
			this.roomName = params.get('roomName');
			this.lightTheme = false;
			this.ovSettings = new OvSettingsModel().setDefaultTeachingSettings(this.userService, this.roomName);
			this.ovSettings.setScreenSharing(this.ovSettings.hasScreenSharing() && !this.utilsSrv.isMobile());
			this.whiteboardOptions = this.whiteboardService.getWhiteboardOptions(this.roomName);
		});
	}

	setupRecorder() {
		this.route.paramMap.subscribe((params) => {
			this.roomName = params.get('roomName');
			this.lightTheme = false;
			this.ovSettings = new OvSettingsModel().setDefaultRecorderSettings();
			this.whiteboardOptions = this.whiteboardService.getWhiteboardOptions(this.roomName);

			this.oVSessionService.setSessionId(this.roomName);
			this.mySessionId = this.oVSessionService.getSessionId();

			this.hasVideoDevices = false;
			this.hasAudioDevices = false;

			this.subscribeToLocalUsers();
			this.subscribeToRemoteStreamers();
			this.subscribeToRemoteUsers();

			setTimeout(() => {
				this.openviduLayout = new OpenViduLayout();
				this.openviduLayoutOptions = this.utilsSrv.getOpenviduLayoutOptions();
				this.openviduLayout.initLayoutContainer(document.getElementById('layout'), this.openviduLayoutOptions);
				this.checkSizeComponent();
				this.joinToSession();
			}, 50);
		});
	}

	onConfigRoomJoin() {
		this.hasVideoDevices = this.oVDevicesService.hasVideoDeviceAvailable();
		this.hasAudioDevices = this.oVDevicesService.hasAudioDeviceAvailable();
		this.showConfigRoomCard = false;
		this.subscribeToLocalUsers();
		this.subscribeToRemoteStreamers();
		this.subscribeToRemoteUsers();
		this.mySessionId = this.oVSessionService.getSessionId();

		setTimeout(() => {
			this.openviduLayout = new OpenViduLayout();
			this.openviduLayoutOptions = this.utilsSrv.getOpenviduLayoutOptions();
			this.openviduLayout.initLayoutContainer(document.getElementById('layout'), this.openviduLayoutOptions);
			this.checkSizeComponent();
			this.joinToSession();
		}, 50);
	}

	joinToSession() {
		this.oVSessionService.initSessions();
		this.session = this.oVSessionService.getWebcamSession();
		this.sessionScreen = this.oVSessionService.getScreenSession();
		this.subscribeToConnectionCreated();
		this.subscribeToConnectionDestroyed();
		this.subscribeToStreamCreated();
		this.subscribeToStreamDestroyed();
		this.subscribeToStreamPropertyChange();
		this.subscribeToNicknameChanged();
		this.subscribeToFirstConnection();
		this.menuService.subscribeToChangeRecordingStatus();
		this.menuService.setMenuSidenav(this.menuSidenav);
		this.assistantsChatService.subscribeToChat('chat');
		if (this.userService.isModOfRoom(this.roomName)) {
			this.moderatorsChatService.subscribeToChat('chatMod');
		}
		this.raiseHandService.subscribeToHandRaiseSignal();
		this.raiseHandService.subscribedToLowerYourHand();
		this.subscribeToMenuToggle();
		this.subscribeToModConnections();
		this.subscribeToWhiteBoardActive();
		this.whiteboardService.subscribeToWhiteboardSignals();
		this.notificationsService.setPopupsRef(this.currentPopups);
		this.subscribeToReconnection();
		this.connectToSession();
	}

	leaveSession() {
		this.log.d('Leaving session...');
		if (!this.showConfigRoomCard) {
			this.networkSrv.keepaliveRemoveUser(this.roomName);
			if (this.localUsers[0].getPositionInHandRaiseQueue() > 0) {
				this.raiseHandService.keepaliveLowerHand(this.roomName, this.localUsers[0].getConnectionId());
			}
		}
		this.oVSessionService.disconnect();
		this.router.navigate(['']);
	}

	onNicknameUpdate(nickname: string) {
		this.oVSessionService.setWebcamName(nickname);
		this.sendNicknameSignal(nickname);
	}

	toggleMic() {
		if (this.oVSessionService.isWebCamEnabled()) {
			this.oVSessionService.publishWebcamAudio(!this.oVSessionService.hasWebcamAudioActive());
			return;
		}
		this.oVSessionService.publishScreenAudio(!this.oVSessionService.hasScreenAudioActive());
	}

	async toggleCam() {
		const isVideoActive = !this.oVSessionService.hasWebcamVideoActive();

		// Disabling webcam
		if (this.oVSessionService.areBothConnected()) {
			this.oVSessionService.publishVideo(isVideoActive);
			this.oVSessionService.disableWebcamUser();
			this.oVSessionService.unpublishWebcam();
			return;
		}
		// Enabling webcam
		if (this.oVSessionService.isOnlyScreenConnected()) {
			const hasAudio = this.oVSessionService.hasScreenAudioActive();

			await this.oVSessionService.publishWebcam();
			this.oVSessionService.publishScreenAudio(false);
			this.oVSessionService.publishWebcamAudio(hasAudio);
			this.oVSessionService.enableWebcamUser();
		}
		// Muting/unmuting webcam
		this.oVSessionService.publishVideo(isVideoActive);
	}

	async toggleScreenShare() {
		// Disabling screenShare
		if (this.oVSessionService.areBothConnected()) {
			this.removeScreen();
			return;
		}

		// Enabling screenShare
		if (this.oVSessionService.isOnlyWebcamConnected()) {
			const screenPublisher = this.initScreenPublisher();

			screenPublisher.once('accessAllowed', (event) => {
				// Listen to event fired when native stop button is clicked
				screenPublisher.stream
					.getMediaStream()
					.getVideoTracks()[0]
					.addEventListener('ended', () => {
						this.log.d('Clicked native stop button. Stopping screen sharing');
						this.toggleScreenShare();
					});
				this.log.d('ACCESS ALOWED screenPublisher');
				this.oVSessionService.enableScreenUser(screenPublisher);
				this.oVSessionService.publishScreen();
				if (!this.oVSessionService.hasWebcamVideoActive()) {
					// Disabling webcam
					this.oVSessionService.disableWebcamUser();
					this.oVSessionService.unpublishWebcam();
				}
			});

			screenPublisher.once('accessDenied', (event) => {
				this.log.w('ScreenShare: Access Denied');
			});

			return;
		}

		// Disabling screnShare and enabling webcam
		const hasAudio = this.oVSessionService.hasScreenAudioActive();
		await this.oVSessionService.publishWebcam();
		this.oVSessionService.publishScreenAudio(false);
		this.oVSessionService.publishWebcamAudio(hasAudio);
		this.oVSessionService.enableWebcamUser();
		this.removeScreen();
	}

	toggleSpeakerLayout() {
		if (!this.oVSessionService.isScreenShareEnabled()) {
			this.isAutoLayout = !this.isAutoLayout;

			this.log.d('Automatic Layout ', this.isAutoLayout ? 'Disabled' : 'Enabled');
			if (this.isAutoLayout) {
				this.subscribeToSpeechDetection();
				return;
			}
			this.log.d('Unsubscribe to speech detection');
			this.session.off('publisherStartSpeaking');
			this.resetAllBigElements();
			this.updateOpenViduLayout();
			return;
		}
		this.log.w('Screen is enabled. Speech detection has been rejected');
	}

	onReplaceScreenTrack(event) {
		this.oVSessionService.replaceScreenTrack();
	}

	checkSizeComponent() {
		this.compact = document.getElementById('room-container')?.offsetWidth <= 790;
		this.sidenavMode = this.compact ? 'over' : 'side';
	}

	onToggleVideoSize(event: { element: HTMLElement; connectionId?: string; resetAll?: boolean }) {
		const element = event.element;
		if (!!event.resetAll) {
			this.resetAllBigElements();
		}

		this.utilsSrv.toggleBigElementClass(element);

		// Has been mandatory change the user zoom property here because of
		// zoom icons and cannot handle publisherStartSpeaking event in other component
		if (!!event?.connectionId) {
			if (this.oVSessionService.isMyOwnConnection(event.connectionId)) {
				this.oVSessionService.toggleZoom(event.connectionId);
			} else {
				this.remoteStreamersService.toggleUserZoom(event.connectionId);
			}
		}
		this.updateOpenViduLayout();
		this.resize(200);
	}

	toolbarMicIconEnabled(): boolean {
		if (this.oVSessionService.isWebCamEnabled()) {
			return this.oVSessionService.hasWebcamAudioActive();
		}
		return this.oVSessionService.hasScreenAudioActive();
	}

	onWhiteboardDraw(type: string, update?: CanvasWhiteboardUpdate[] | string) {
		this.whiteboardService.onDraw(type, update);
	}

	private resize(timeout: number) {
		setTimeout(() => {
			window.dispatchEvent(new Event('resize'));
		}, timeout);
	}

	private async connectToSession(): Promise<void> {
		let webcamToken: string;
		let screenToken: string;

		webcamToken = await this.getToken();
		// Only get screentoken if screen sharing feature is available
		if (this.ovSettings?.hasScreenSharing()) {
			screenToken = await this.getToken();
		}

		if (webcamToken || screenToken) {
			await this.connectBothSessions(webcamToken, screenToken);

			if (this.oVSessionService.areBothConnected()) {
				this.oVSessionService.publishWebcam();
				this.oVSessionService.publishScreen();
			} else if (this.oVSessionService.isOnlyScreenConnected()) {
				this.oVSessionService.publishScreen();
			} else {
				this.oVSessionService.publishWebcam();
			}

			this.updateOpenViduLayout();
			this.sendFirstConnectionSignal();
			this.raiseHandService.updateHandRaisedUsers();
		}
	}

	private async connectBothSessions(webcamToken: string, screenToken: string) {
		try {
			await this.oVSessionService.connectWebcamSession(webcamToken);
			await this.oVSessionService.connectScreenSession(screenToken);

			this.localUsers[0].getStreamManager().on('streamPlaying', () => {
				(<HTMLElement>this.localUsers[0].getStreamManager().videos[0].video).parentElement.classList.remove('custom-class');
			});
		} catch (error) {
			this.log.e('There was an error connecting to the session:', error.code, error.message);
			this.utilsSrv.showErrorMessage('There was an error connecting to the session:', error?.error || error?.message);
		}
	}

	private subscribeToConnectionCreated() {
		this.session.on('connectionCreated', (event: ConnectionEvent) => {
			const connectionId = event.connection.connectionId;
			const cameraOrScreen: boolean = JSON.parse(event.connection.data.split('%/%')[0])?.cameraOrScreen;

			if (this.oVSessionService.getWebcamSession().connection.connectionId == connectionId) {
				this.localUsers[0].setConnectionId(connectionId);
				this.localUsers[0].setName(event.connection.data.split('%/%SERVER=')[1]);
				this.connection = event.connection;
				this.modConnections.push(this.connection);
				this.moderatorsChatService.setToConnections(this.modConnections);
				return;
			}
			if (this.oVSessionService.isMyOwnConnection(connectionId)) {
				return;
			}
			this.sendNicknameSignal(this.oVSessionService.getWebcamUserName(), event.connection);
			if (!cameraOrScreen) {
				return;
			}

			this.remoteUsersService.add(event);
		});
	}

	private subscribeToConnectionDestroyed() {
		this.session.on('connectionDestroyed', (event: ConnectionEvent) => {
			const connectionId = event.connection.connectionId;
			let user: UserModel = this.remoteUsersService.removeUserByConnectionId(connectionId);
			// event.preventDefault();
			if (!!user) {
				this.notificationsService.showConnectionPopup(user.getNickname(), false, user.getAvatar());
				setTimeout(() => {
					this.menuService.updateAssistants();
				}, 500);
			}
		});
	}

	private subscribeToStreamCreated() {
		this.session.on('streamCreated', (event: StreamEvent) => {
			const connectionId = event.stream.connection.connectionId;

			if (this.oVSessionService.isMyOwnConnection(connectionId)) {
				return;
			}

			const subscriber: Subscriber = this.session.subscribe(event.stream, undefined);
			this.remoteStreamersService.add(event, subscriber);
		});
	}

	private subscribeToStreamDestroyed() {
		this.session.on('streamDestroyed', (event: StreamEvent) => {
			const connectionId = event.stream.connection.connectionId;
			this.remoteStreamersService.removeStreamerByConnectionId(connectionId);
			// event.preventDefault();
		});
	}

	private subscribeToStreamPropertyChange() {
		this.session.on('streamPropertyChanged', (event: StreamPropertyChangedEvent) => {
			const connectionId = event.stream.connection.connectionId;
			if (this.oVSessionService.isMyOwnConnection(connectionId)) {
				return;
			}
			if (event.changedProperty === 'videoActive') {
				this.remoteStreamersService.updateStreamers();
			}
		});
	}

	private subscribeToNicknameChanged() {
		this.session.on('signal:nicknameChanged', (event: any) => {
			const connectionId = event.from.connectionId;
			if (this.oVSessionService.isMyOwnConnection(connectionId)) {
				return;
			}
			const nickname = JSON.parse(event.data).nickname;
			this.remoteStreamersService.updateNickname(connectionId, nickname);
			this.remoteUsersService.updateNickname(connectionId, nickname);
			this.notificationsService.updateNickname(connectionId, nickname);
		});
	}

	private subscribeToFirstConnection() {
		this.session.on('signal:firstConnection', (event: SignalEvent) => {
			const connectionId = event.from.connectionId;
			if (this.oVSessionService.isMyOwnConnection(connectionId)) {
				return;
			}
			const data = JSON.parse(event.from.data.split('%/%')[0]);
			this.notificationsService.showConnectionPopup(data?.clientData, true, data?.avatar);
			this.whiteboardService.sendWhiteboardHistorySignal(event.from);
			this.menuService.updateAssistants();
		});
	}

	private subscribeToSpeechDetection() {
		this.log.d('Subscribe to speech detection', this.session);
		// Has been mandatory change the user zoom property here because of
		// zoom icons and cannot handle publisherStartSpeaking event in other component
		this.session.on('publisherStartSpeaking', (event: PublisherSpeakingEvent) => {
			const someoneIsSharingScreen = this.remoteStreamersService.someoneIsSharingScreen();
			if (!this.oVSessionService.isScreenShareEnabled() && !someoneIsSharingScreen) {
				const elem = event.connection.stream.streamManager.videos[0].video;
				const element = this.utilsSrv.getHTMLElementByClassName(elem, LayoutType.ROOT_CLASS);
				this.resetAllBigElements();
				this.remoteStreamersService.setUserZoom(event.connection.connectionId, true);
				this.onToggleVideoSize({ element });
			}
		});
	}

	private removeScreen() {
		this.oVSessionService.disableScreenUser();
		this.oVSessionService.unpublishScreen();
	}

	private subscribeToReconnection() {
		this.session.on('reconnecting', () => {
			this.log.w('Connection lost: Reconnecting');
			this.isConnectionLost = true;
			this.utilsSrv.showErrorMessage('Connection Problem', 'Oops! Trying to reconnect to the session ...', true);
		});
		this.session.on('reconnected', () => {
			this.log.w('Connection lost: Reconnected');
			this.isConnectionLost = false;
			this.utilsSrv.closeDialog();
		});
		this.session.on('sessionDisconnected', (event: SessionDisconnectedEvent) => {
			if (event.reason === 'networkDisconnect') {
				this.utilsSrv.closeDialog();
				this.leaveSession();
			}
		});
	}

	private initScreenPublisher(): Publisher {
		const videoSource = ScreenType.SCREEN;
		const willThereBeWebcam = this.oVSessionService.isWebCamEnabled() && this.oVSessionService.hasWebcamVideoActive();
		const hasAudio = willThereBeWebcam ? false : this.oVSessionService.hasWebcamAudioActive();
		const properties = this.oVSessionService.createProperties(videoSource, undefined, true, hasAudio, false);

		try {
			return this.oVSessionService.initScreenPublisher(undefined, properties);
		} catch (error) {
			this.log.e(error);
			this.utilsSrv.handlerScreenShareError(error);
		}
	}

	private async getToken(): Promise<string> {
		this.log.d('Generating tokens...');
		try {
			return await this.networkSrv.getToken(this.mySessionId);
		} catch (error) {
			if (error.status === 200) {
				return error.error.text;
			}
			this.log.e('There was an error getting the token:', error.status, error.message);
			this.utilsSrv.showErrorMessage('There was an error getting the token:', error.error || error.message);
		}
	}

	private sendNicknameSignal(nickname: string, connection?: Connection) {
		const signalOptions: SignalOptions = {
			data: JSON.stringify({ nickname }),
			type: 'nicknameChanged',
			to: connection ? [connection] : undefined
		};
		this.session.signal(signalOptions);
	}

	private sendFirstConnectionSignal() {
		const signalOptions: SignalOptions = {
			data: '',
			type: 'firstConnection',
			to: undefined
		};
		this.session.signal(signalOptions);
	}

	private updateOpenViduLayout(timeout?: number) {
		if (!!this.openviduLayout) {
			if (!timeout) {
				this.openviduLayout.updateLayout();
				return;
			}
			setTimeout(() => {
				this.openviduLayout.updateLayout();
			}, timeout);
		}
	}

	private resetAllBigElements() {
		this.utilsSrv.removeAllBigElementClass();
		this.remoteStreamersService.resetUsersZoom();
		this.oVSessionService.resetUsersZoom();
	}

	private subscribeToLocalUsers() {
		this.oVUsersSubscription = this.oVSessionService.OVUsers.subscribe((users) => {
			this.localUsers = users;
			this.updateOpenViduLayout();
		});
	}

	private subscribeToRemoteStreamers() {
		this.remoteStreamersSubscription = this.remoteStreamersService.remoteStreamersObs.subscribe((users) => {
			const previoudsStreamers = this.remoteStreamers.length;
			this.remoteStreamers = [...users];
			if (!this.userService.canStream(this.roomName) && previoudsStreamers > 0 && this.remoteStreamers.length == 0) {
				this.whiteboardService.hideWhiteBoard();
			}
			this.updateOpenViduLayout();
		});
	}

	private subscribeToRemoteUsers() {
		this.remoteUsersSubscription = this.remoteUsersService.remoteUsersObs.subscribe((users) => {
			this.remoteUsers = [...users];
		});
	}

	private subscribeToModConnections() {
		this.modConnectionsSubscription = this.remoteStreamersService.moderatorConnectionsObs.subscribe((connections) => {
			this.modConnections = [...connections];
			if (this.connection) {
				this.modConnections.push(this.connection);
			}
			this.moderatorsChatService.setToConnections(this.modConnections);
		});
	}

	private subscribeToMenuToggle() {
		this.menuToggleSubscription = this.menuService.toggleMenuObs.subscribe((opened) => {
			const timeout = 0;
			this.updateOpenViduLayout(timeout);
			if (this.whiteboardActive) {
				this.resize(200);
			}
		});
	}

	private subscribeToWhiteBoardActive() {
		this.whiteboardActiveSubscription = this.whiteboardService.isWhiteBoardActiveObs.subscribe((active) => {
			this.whiteboardActive = active;
		});
	}
}
