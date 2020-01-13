import { LoginComponent } from './shared/users/login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
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
  MatChipsModule,
  MatSnackBarModule,
  MatTabsModule,
  MatListModule
} from '@angular/material';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { VideoRoomComponent } from './video-room/video-room.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OpenViduService } from './shared/services/open-vidu.service';
import { StreamComponent } from './shared/components/stream/stream.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ChatComponent } from './shared/components/menu/chat/chat.component';
import { DialogExtensionComponent } from './shared/components/dialog-extension/dialog-extension.component';
import { OpenViduVideoComponent } from './shared/components/stream/ov-video.component';
import { createCustomElement } from '@angular/elements';
import { DialogErrorComponent } from './shared/components/dialog-error/dialog-error.component';
import { WebComponentComponent } from './web-component/web-component.component';
import { ElementZoneStrategyFactory } from 'elements-zone-strategy';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import { DialogChooseRoomComponent } from './shared/components/dialog-choose-room/dialog-choose-room.component';
import { ApiService } from './shared/services/api.service';
import { LinkifyPipe } from './shared/pipes/linkfy';
import { NgxLinkifyjsModule } from 'ngx-linkifyjs';
import { FlexLayoutModule } from '@angular/flex-layout';
import { InviteComponent } from './shared/components/invite/invite.component';
import { BasicAuthInterceptor } from 'src/interceptors/auth.interceptor';
import { ErrorInterceptor } from 'src/interceptors/error.interceptor';
import { AssistantsComponent } from './shared/components/menu/assistants/assistants.component';
import { UserService } from './shared/services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    VideoRoomComponent,
    DashboardComponent,
    StreamComponent,
    ChatComponent,
    DialogExtensionComponent,
    OpenViduVideoComponent,
    DialogErrorComponent,
    DialogChooseRoomComponent,
    WebComponentComponent,
    ToolbarComponent,
    LinkifyPipe,
    InviteComponent,
    AssistantsComponent,
    LoginComponent
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
    MatTabsModule,
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    MatChipsModule,
    MatSnackBarModule,
    MatListModule,
    NgxLinkifyjsModule.forRoot()
  ],
  entryComponents: [
    DialogErrorComponent,
    WebComponentComponent,
  ],
  providers: [OpenViduService, ApiService, UserService,
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {

  constructor(private injector: Injector) {
    const strategyFactory = new ElementZoneStrategyFactory(WebComponentComponent, this.injector);
    const element = createCustomElement(WebComponentComponent, { injector: this.injector, strategyFactory });
    customElements.define('openvidu-webcomponent', element);
  }

  ngDoBootstrap() {}
}
