import { InviteLinkComponent } from './invite/invite-link/invite-link.component';
import { UserService } from './shared/services/user/user.service';
import { RoomService } from './shared/services/room/room.service';
import { VideoComponent } from './video/video.component';
import { LoginComponent } from './login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { AppRoutingModule } from './/app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { createCustomElement } from '@angular/elements';
import { ElementZoneStrategyFactory } from 'elements-zone-strategy';
import { NgxLinkifyjsModule } from 'ngx-linkifyjs';
import { FlexLayoutModule } from '@angular/flex-layout';

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
	HasExitPipe
} from './shared/pipes/ovSettings.pipe';
import { TooltipListPipe } from './shared/pipes/tooltipList.pipe';

// Components
import { StreamComponent } from './shared/components/stream/stream.component';
import { ChatComponent } from './shared/components/chat/chat.component';
import { OpenViduVideoComponent } from './shared/components/stream/ov-video.component';
import { DialogErrorComponent } from './shared/components/dialog-error/dialog-error.component';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import { ToolbarLogoComponent } from './shared/components/toolbar/logo.component';
import { RoomConfigComponent } from './shared/components/room-config/room-config.component';
import { VideoRoomComponent } from './video-room/video-room.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/components/footer/footer.component';

// Services
import { NetworkService } from './shared/services/network/network.service';
import { OpenViduSessionService } from './shared/services/openvidu-session/openvidu-session.service';
import { UtilsService } from './shared/services/utils/utils.service';
import { DevicesService } from './shared/services/devices/devices.service';
import { RemoteUsersService } from './shared/services/remote-users/remote-users.service';
import { ChatService } from './shared/services/chat/chat.service';
import { LoggerService } from './shared/services/logger/logger.service';
import { NotificationService } from './shared/services/notifications/notification.service';
import { StorageService } from './shared/services/storage/storage.service';
import { InviteComponent } from './invite/invite.component';
import { SecurePipe } from './shared/pipes/secure.pipe';
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
		TooltipListPipe,
		FooterComponent,
		InviteComponent,
		SecurePipe,
		LoginComponent,
		VideoComponent,
		InviteLinkComponent,
		InviteComponent
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
		RemoteUsersService,
		DevicesService,
		LoggerService,
		ChatService,
		NotificationService,
		StorageService,
		UserService,
		RoomService,
    	{ provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
    	{ provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
	],
	bootstrap: [AppComponent]
})
export class AppModule {
	constructor(private injector: Injector) {
	}

	ngDoBootstrap() {}
}
