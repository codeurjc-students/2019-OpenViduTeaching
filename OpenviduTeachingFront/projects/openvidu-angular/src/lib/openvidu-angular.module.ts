import { NgModule } from '@angular/core';
import { OpenviduSessionComponent } from './openvidu-angular.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
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
  MatChipsModule
} from '@angular/material';
import { AppRoutingModule } from '../../../../src/app/app-routing.module';

// Components
import { VideoRoomComponent } from '../../../../src/app/video-room/video-room.component';
import { StreamComponent } from '../../../../src/app/shared/components/stream/stream.component';
import { ChatComponent } from '../../../../src/app/shared/components/chat/chat.component';
import { DialogExtensionComponent } from '../../../../src/app/shared/components/dialog-extension/dialog-extension.component';
import { OpenViduVideoComponent } from '../../../../src/app/shared/components/stream/ov-video.component';
import { DialogErrorComponent } from '../../../../src/app/shared/components/dialog-error/dialog-error.component';
import { ToolbarComponent } from '../../../../src/app/shared/components/toolbar/toolbar.component';
import { OpenViduService } from '../../../../src/app/shared/services/open-vidu.service';
import { ApiService } from '../../../../src/app/shared/services/api.service';
import { LinkifyPipe } from '../../../../src/app/shared/pipes/linkfy';
import { NgxLinkifyjsModule } from 'ngx-linkifyjs';
import { DialogChooseRoomComponent } from '../../../../src/app/shared/components/dialog-choose-room/dialog-choose-room.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
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
    AppRoutingModule,
    MatChipsModule,
    NgxLinkifyjsModule.forRoot()
  ],
  declarations: [
    OpenviduSessionComponent,
    VideoRoomComponent,
    StreamComponent,
    ChatComponent,
    DialogExtensionComponent,
    OpenViduVideoComponent,
    DialogErrorComponent,
    DialogChooseRoomComponent,
    ToolbarComponent,
    LinkifyPipe
  ],
  entryComponents: [
    DialogErrorComponent,
  ],
  providers: [OpenViduService, ApiService],
  exports: [OpenviduSessionComponent],
})
export class OpenviduSessionModule {}
