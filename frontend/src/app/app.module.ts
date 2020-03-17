import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
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
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
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
import { InviteComponent } from './invite/invite.component';
import { BasicAuthInterceptor } from 'src/interceptors/auth.interceptor';
import { ErrorInterceptor } from 'src/interceptors/error.interceptor';
import { AssistantsComponent } from './shared/components/menu/assistants/assistants.component';
import { UserService } from './shared/services/user.service';
import { LoginComponent } from './shared/components/login/login.component';
import { PopupMessageComponent } from './shared/components/popup/popup-message.component';

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
    LoginComponent,
    PopupMessageComponent
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
