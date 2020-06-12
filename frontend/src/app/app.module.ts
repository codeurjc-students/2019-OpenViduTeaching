import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './/app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxLinkifyjsModule } from 'ngx-linkifyjs';
import { FlexLayoutModule } from '@angular/flex-layout';

// Angular Material
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';

// Pipes
import { LinkifyPipe } from './shared/pipes/linkfy';
import {
	HasChatPipe,
	HasAudioPipe,
	HasVideoPipe,
	IsAutoPublishPipe,
	HasScreenSharingPipe,
	HasFullscreenPipe,
	HasLayoutSpeakingPipe,
	HasExitPipe,
	HasRaiseHandPipe
} from './shared/pipes/ovSettings.pipe';
import { TooltipListPipe } from './shared/pipes/tooltipList.pipe';
import { SecurePipe } from './shared/pipes/secure.pipe';

// Components
import { StreamComponent } from './shared/components/stream/stream.component';
import { OpenViduVideoComponent } from './shared/components/stream/ov-video.component';
import { DialogErrorComponent } from './shared/components/dialog-error/dialog-error.component';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import { ToolbarLogoComponent } from './shared/components/toolbar/logo.component';
import { RoomConfigComponent } from './shared/components/room-config/room-config.component';
import { VideoRoomComponent } from './video-room/video-room.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { InviteComponent } from './invite/invite.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { ChatComponent } from './shared/components/menu/tabs/chat/chat.component';
import { VideoComponent } from './video/video.component';
import { LoginComponent } from './login/login.component';
import { InviteLinkComponent } from './invite/invite-link/invite-link.component';
import { SettingsComponent } from './shared/components/menu/tabs/settings/settings.component';
import { AssistantsComponent } from './shared/components/menu/tabs/assistants/assistants.component';
import { PopupComponent } from './shared/components/popup/popup.component';

// Services
import { NetworkService } from './shared/services/network/network.service';
import { OpenViduSessionService } from './shared/services/openvidu-session/openvidu-session.service';
import { UtilsService } from './shared/services/utils/utils.service';
import { DevicesService } from './shared/services/devices/devices.service';
import { RemoteStreamersService } from './shared/services/remote-streamers/remote-streamers.service';
import { ChatService } from './shared/services/chat/chat.service';
import { LoggerService } from './shared/services/logger/logger.service';
import { StorageService } from './shared/services/storage/storage.service';
import { UserService } from './shared/services/user/user.service';
import { RoomService } from './shared/services/room/room.service';
import { MenuService } from './shared/services/menu/menu.service';
import { RaiseHandService } from './shared/services/raiseHand/raise-hand.service';

// Interceptors
import { BasicAuthInterceptor } from 'src/interceptors/auth.interceptor';
import { ErrorInterceptor } from 'src/interceptors/error.interceptor';

@NgModule({
	declarations: [
		AppComponent,
		VideoRoomComponent,
		HomeComponent,
		StreamComponent,
		ChatComponent,
		OpenViduVideoComponent,
		DialogErrorComponent,
		RoomConfigComponent,
		ToolbarComponent,
		ToolbarLogoComponent,
		LinkifyPipe,
		HasChatPipe,
		HasAudioPipe,
		HasVideoPipe,
		IsAutoPublishPipe,
		HasScreenSharingPipe,
		HasFullscreenPipe,
		HasLayoutSpeakingPipe,
		HasExitPipe,
		HasRaiseHandPipe,
		TooltipListPipe,
		FooterComponent,
		InviteComponent,
		SecurePipe,
		LoginComponent,
		VideoComponent,
		InviteLinkComponent,
		InviteComponent,
		MenuComponent,
		AssistantsComponent,
		SettingsComponent,
		PopupComponent
	],
	imports: [
		FormsModule,
		ReactiveFormsModule,
		BrowserModule,
		BrowserAnimationsModule,
		MatButtonModule,
		MatCardModule,
		MatToolbarModule,
		MatIconModule,
		MatInputModule,
		MatFormFieldModule,
		MatDialogModule,
		MatTooltipModule,
		MatBadgeModule,
		MatGridListModule,
		MatSelectModule,
		MatOptionModule,
		MatProgressSpinnerModule,
		MatSliderModule,
		MatSidenavModule,
		MatSnackBarModule,
		MatListModule,
		MatTabsModule,
		AppRoutingModule,
		HttpClientModule,
		FlexLayoutModule,
		NgxLinkifyjsModule.forRoot()
	],
	entryComponents: [DialogErrorComponent],
	providers: [
		NetworkService,
		OpenViduSessionService,
		UtilsService,
		RemoteStreamersService,
		DevicesService,
		LoggerService,
		{ provide: 'assistantsChatService', useClass: ChatService },
		{ provide: 'moderatorsChatService', useClass: ChatService },
		StorageService,
		UserService,
		RoomService,
		MenuService,
		RaiseHandService,
    	{ provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
    	{ provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
	],
	bootstrap: [AppComponent]
})
export class AppModule {
	constructor() {
	}

	ngDoBootstrap() {}
}
