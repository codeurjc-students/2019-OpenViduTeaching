(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--The content below is only a placeholder and can be replaced.-->\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"section1\">\n\n  <mat-toolbar id=\"header\">\n    <a [routerLink]=\"['']\">\n      <img id=\"header_img\" alt=\"OpenVidu Logo\" src=\"assets/images/openvidu_logo.png\">\n    </a>\n    <div id=\"version\">\n      <span>{{version}}</span>\n    </div>\n  </mat-toolbar>\n\n  <div id=\"ov_info\">\n    <img id=\"ov_img\" alt=\"OpenVidu Logo\" src=\"assets/images/openvidu_vert_white_bg_trans_cropped.png\">\n  </div>\n\n  <login-component\n    (loggedIn)=\"getRooms()\">\n  </login-component>\n\n  <mat-spinner color=\"accent\" id=\"spinner\" *ngIf=\"loading\"></mat-spinner>\n\n  <div id=\"card_content\" *ngIf=\"this.userSrv.isLogged\n    && !loading\n    && ((this.moddedRooms!==undefined && this.moddedRooms.length>0)\n    || (this.presentedRooms!==undefined && this.presentedRooms.length>0)\n    || (this.participatedRooms!==undefined && this.participatedRooms.length>0))\">\n    <mat-card id=\"room_card\">\n      <mat-list>\n        <div *ngIf=\"this.moddedRooms!==undefined && this.moddedRooms.length>0\">\n          <h3 mat-subheader>MODDED ROOMS</h3>\n          <mat-list-item *ngFor=\"let mod of this.moddedRooms\">\n            <a mat-line mat-stroked-button routerLink=\"{{mod.name}}\">\n              {{mod.name}}\n            </a>\n            <button mat-icon-button (click)=\"getInviteURL(mod.name,'moderator')\">\n              <mat-icon color=\"accent\" matTooltip=\"Invite URL for moderators\">link</mat-icon>\n            </button>\n            <button mat-icon-button (click)=\"getInviteURL(mod.name,'participant')\">\n              <mat-icon matTooltip=\"Invite URL for participants\">link</mat-icon>\n            </button>\n          </mat-list-item>\n        </div>\n\n        <div *ngIf=\"this.presentedRooms!==undefined && this.presentedRooms.length>0\">\n          <h3 mat-subheader>PRESENTED ROOMS</h3>\n          <mat-list-item *ngFor=\"let pres of this.presentedRooms\">\n            <a mat-line mat-stroked-button routerLink=\"{{pres.name}}\">{{pres.name}}</a>\n          </mat-list-item>\n        </div>\n        \n        <div *ngIf=\"this.participatedRooms!==undefined && this.participatedRooms.length>0\">\n          <h3 mat-subheader>PARTICIPATED ROOMS</h3>\n          <mat-list-item *ngFor=\"let part of this.participatedRooms\">\n            <a mat-line mat-stroked-button routerLink=\"{{part.name}}\">{{part.name}}</a>\n          </mat-list-item>\n        </div>\n      </mat-list>\n\n      <button mat-flat-button class=\"addRoomButton\" matTooltip=\"Create a new room\" (click)=\"openAddRoomDialog()\" *ngIf=\"this.userSrv.isAdmin\">\n        <mat-icon>add</mat-icon>\n      </button>\n    </mat-card>\n  </div>\n</div>\n\n<ng-template #addRoomDialog let-dialogRef=\"dialogRef\" id=\"addRoomDialog\">\n  <mat-form-field appearance=\"outline\" color=\"primary\" class=\"dialogCentered\">\n    <mat-label>Room name</mat-label>\n      <input matInput [(ngModel)]=\"newRoom\"  (keypress)=\"eventKeyPress($event)\">\n  </mat-form-field>\n  <div>\n    <button mat-flat-button class=\"addRoomButton dialogCentered\" matTooltip=\"Create a new room\" (click)=\"createRoom()\">\n      <mat-icon>add</mat-icon>\n    </button>\n  </div>\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/invite/invite.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/invite/invite.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"background\">\n    <div id=\"component\">\n        <div id=\"ov_info\">\n            <a [routerLink]=\"['']\">\n                <img id=\"ov_img\" alt=\"OpenVidu Logo\" src=\"assets/images/openvidu_vert_white_bg_trans_cropped.png\">\n            </a>\n        </div>\n        <div id=\"roomName\">Joining \"{{roomName}}\"<span *ngIf=\"this.userSrv.isLogged\"> as {{this.userSrv.user.name}}</span></div>\n        <div>\n            <div *ngIf=\"!this.userSrv.isLogged\">\n                <login-component></login-component><p id=\"loginMsg\"> to enter the room</p>\n                <p>or create an account:</p>\n                <mat-form-field appearance=\"outline\" color=\"primary\">\n                    <mat-label>Username</mat-label>\n                    <input matInput [(ngModel)]=\"userName\" (keypress)=\"eventKeyPress($event)\">\n                    <mat-hint *ngIf=this.userErrorMsg id=\"userErrorMsg\">{{userErrorMsg}}</mat-hint>\n                </mat-form-field>\n                <div></div>\n                <mat-form-field appearance=\"outline\" color=\"primary\">\n                    <mat-label>Password</mat-label>\n                    <input matInput [(ngModel)]=\"password\" (keypress)=\"eventKeyPress($event)\" type=\"password\">\n                </mat-form-field>\n                <div></div>\n            </div>\n            <button mat-flat-button color=\"accent\" (click)=\"enterRoom()\" [disabled]=\"!userSrv.isLogged && (!userName || !password)\">Access room</button>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/dialog-choose-room/dialog-choose-room.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/dialog-choose-room/dialog-choose-room.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"dialogChooseRoom\" [ngStyle]=\"{ display: ovSettings.autopublish ? 'none' : 'block' }\">\n  <app-dialog-extension *ngIf=\"showDialogExtension\" [nickname]=\"localUsers[0].getNickname()\"\n    (cancel)=\"toggleDialogExtension()\"></app-dialog-extension>\n\n  <mat-card *ngIf=\"localUsers[0].getStreamManager()\">\n    <mat-card-title>\n      <div id=\"img_content\">\n        <img id=\"header_img\" alt=\"OpenVidu Logo\"\n          src=\"https://raw.githubusercontent.com/OpenVidu/openvidu-call/master/front/openvidu-call/src/assets/images/openvidu_logo_grey.png\" />\n      </div>\n      <h1 mat-dialog-title>Set up your room</h1>\n      <button mat-icon-button (click)=\"close()\" id=\"closeButton\">\n        <mat-icon color=\"warn\" matTooltip=\"Cancel\">close</mat-icon>\n      </button>\n    </mat-card-title>\n    <mat-card-content align=\"center\" id=\"card-content\">\n      <div class=\"\">\n        <div class=\"\" fxLayout=\"row\" fxLayout.sm=\"column\" fxLayout.lt-sm=\"column\" fxFlexFill>\n          <!--  left section -->\n          <div fxFlex=\"45\" fxFlex.sm=\"25\" fxFlex.lt-sm=\"25\" class=\"volume-theme\">\n            <h3 id=\"sessionInfo\">Session : {{ mySessionId }}</h3>\n\n            <div id=\"videoContainer\">\n              <mat-slider class=\"volumeSlider\" [max]=\"0\" [min]=\"100\" [color]=\"updateVolumeColor()\"\n                [ngModel]=\"volumeValue\" [vertical]=\"true\">\n              </mat-slider>\n              <ov-video *ngIf=\"localUsers[0] && localUsers[0].getStreamManager()\"\n                [streamManager]=\"localUsers[0].getStreamManager()\" id=\"ovVideo\"\n                [className]=\"localUsers[1] ? 'smallVideo' : ''\"></ov-video>\n              <ov-video *ngIf=\"localUsers[1] && localUsers[1].getStreamManager()\"\n                [streamManager]=\"localUsers[1].getStreamManager()\" id=\"ovVideoScreen\"></ov-video>\n            </div>\n            <div id=\"photoButton\">\n              <button mat-stroked-button (click)=\"takePhoto()\" id=\"avatarButton\">\n                <mat-icon matTooltip=\"Take Photo\">photo_camera</mat-icon>\n                <span style=\"margin-left: 5px\">Capture Avatar</span>\n              </button>\n            </div>\n          </div>\n          <!--  right section -->\n          <div fxFlex=\"55\" fxFlex.sm=\"65\" fxFlex.lt-sm=\"65\" class=\"sec3\">\n            <div fxLayout=\"row\" fxFill id=\"avatarSection\">\n              <div fxLayout fxFlex>\n                <div class=\"\" fxFlex=\"30\" fxLayoutAlign=\"center center\">\n                  <h3 style=\"margin: auto;\">Avatar</h3>\n                </div>\n                <div class=\"\" fxFlex=\"70\" fxLayoutAlign=\"center center\">\n                  <div id=\"avatarContainer\" (mouseover)=\"hover1 = true\" (click)=\"setAvatar('video')\"\n                    (mouseleave)=\"hover1 = false\"\n                    [ngStyle]=\"{ backgroundColor: videoAvatar && hover1 && avatarSelected !== 'video' ? 'lightgreen' : 'white' }\"\n                    [style.background]=\"avatarSelected === 'video' ? 'lightgreen' : 'transparent'\">\n                    <div id=\"imgText\" *ngIf=\"!videoAvatar\">\n                      <span>Press Avatar Button</span>\n                    </div>\n                    <img id=\"avatarImg\" *ngIf=\"videoAvatar\" [src]=\"videoAvatar\" />\n                  </div>\n                  <div id=\"avatarContainer\" (click)=\"setAvatar('random')\" (mouseover)=\"hover2 = true\"\n                    (mouseleave)=\"hover2 = false\" [ngStyle]=\"{\n                      backgroundColor: randomAvatar && hover2 && avatarSelected !== 'random' ? 'lightgreen' : 'white'\n                    }\" [style.background]=\"avatarSelected === 'random' ? 'lightgreen' : 'transparent'\">\n                    <mat-spinner id=\"imgText\" [diameter]=\"70\" *ngIf=\"!randomAvatar\" color=\"accent\"></mat-spinner>\n                    <img id=\"avatarImg\" *ngIf=\"randomAvatar\" [src]=\"randomAvatar\" />\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <!-- Devices section / Microphone-->\n            <div fxLayout=\"row\" fxFill id=\"devicesSection\" *ngIf=\"ovSettings && ovSettings.toolbarButtons.audio\">\n              <div fxLayout fxFlex>\n                <div class=\"one\" fxFlex=\"20\" fxLayoutAlign=\"center center\">\n                  <button mat-stroked-button (click)=\"toggleMic()\" id=\"micDeviceButton\">\n                    <mat-icon *ngIf=\"isAudioActive\" matTooltip=\"Microphone Enabled\">mic</mat-icon>\n                    <mat-icon *ngIf=\"!isAudioActive\" color=\"warn\" matTooltip=\"Microphone Disabled\">mic_off</mat-icon>\n                  </button>\n                </div>\n                <div class=\"two\" fxFlex=\"80\" fxLayoutAlign=\"center center\">\n                  <mat-form-field class=\"alternate-theme\">\n                    <mat-select placeholder=\"Microphone Options\"\n                      [ngModel]=\"isAudioActive && micValue ? micValue.label : 'None'\"\n                      (selectionChange)=\"micChanged($event.value)\">\n                      <mat-option *ngFor=\"let microphone of microphones\" [value]=\"microphone.label\">{{\n                        microphone.label\n                      }}</mat-option>\n                    </mat-select>\n                  </mat-form-field>\n                </div>\n              </div>\n            </div>\n            <!-- Devices section / Camera-->\n            <div fxLayout=\"row\" fxFill id=\"devicesSection\" *ngIf=\"ovSettings && ovSettings.toolbarButtons.video\">\n              <div fxLayout fxFlex>\n                <div class=\"one\" fxFlex=\"20\" fxLayoutAlign=\"center center\">\n                  <button mat-stroked-button (click)=\"toggleCam()\" id=\"camDeviceButton\">\n                    <mat-icon *ngIf=\"isVideoActive\" matTooltip=\"Camera Enabled\">videocam</mat-icon>\n                    <mat-icon *ngIf=\"!isVideoActive\" color=\"warn\" matTooltip=\"Camera Disabled\">videocam_off</mat-icon>\n                  </button>\n                </div>\n                <div class=\"two\" fxFlex=\"80\" fxLayoutAlign=\"center center\">\n                  <mat-form-field class=\"alternate-theme\">\n                    <mat-select placeholder=\"Camera Options\"\n                      [ngModel]=\"isVideoActive && camValue ? camValue.label : 'None'\"\n                      (selectionChange)=\"camChanged($event.value)\">\n                      <mat-option *ngFor=\"let camera of cameras\" [value]=\"camera.label\">{{ camera.label }}</mat-option>\n                    </mat-select>\n                  </mat-form-field>\n                </div>\n              </div>\n            </div>\n\n            <!-- Devices section / ScreenShare-->\n            <div fxLayout=\"row\" fxFill id=\"devicesSection\" *ngIf=\"ovSettings && ovSettings.toolbarButtons.screenShare\">\n              <div fxLayout fxFlex>\n                <div class=\"one\" fxFlex=\"20\" fxLayoutAlign=\"center center\">\n                  <button mat-stroked-button (click)=\"toggleScreenShare()\" id=\"screenShareButton\">\n                    <mat-icon *ngIf=\"isScreenShareActive\" matTooltip=\"Screen Share Enabled\">screen_share</mat-icon>\n                    <mat-icon *ngIf=\"!isScreenShareActive\" color=\"warn\" matTooltip=\"Screen Share Disabled\">\n                      stop_screen_share</mat-icon>\n                  </button>\n                </div>\n                <div class=\"two\" fxFlex=\"80\" fxLayoutAlign=\"center center\">\n                  <mat-form-field class=\"alternate-theme\">\n                    <input matInput disabled placeholder=\"Screen Pages\" [ngModel]=\"screenActive\">\n\n                  </mat-form-field>\n                </div>\n              </div>\n            </div>\n\n            <!-- Devices section / Nickname-->\n            <div fxLayout=\"row\" fxFill id=\"devicesSection\">\n              <div fxLayout fxFlex>\n                <div class=\"one\" fxFlex=\"20\" fxLayoutAlign=\"center center\">\n                  <button mat-stroked-button (click)=\"generateNickname()\" id=\"nicknameButton\">\n                    <mat-icon matTooltip=\"Nickname\">person</mat-icon>\n                  </button>\n                </div>\n                <div class=\"two\" fxFlex=\"80\" fxLayoutAlign=\"center center\">\n                  <form id=\"nicknameDialog\" class=\"alternate-theme\">\n                    <mat-form-field>\n                      <input matInput placeholder=\"Nickname\" [formControl]=\"nicknameFormControl\"\n                        [errorStateMatcher]=\"matcher\" (keypress)=\"eventKeyPress($event)\" autocomplete=\"off\" />\n                      <mat-error *ngIf=\"nicknameFormControl.hasError('required')\">\n                        Nickname is <strong>required</strong>\n                      </mat-error>\n                      <mat-error *ngIf=\"nicknameFormControl.hasError('maxlength')\">\n                        Nickname is <strong>too long!</strong>\n                      </mat-error>\n                    </mat-form-field>\n                  </form>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </mat-card-content>\n\n    <mat-card-footer>\n      <div id=\"joinButtonDiv\">\n        <button mat-stroked-button (click)=\"accept()\" id=\"joinButton\">JOIN</button>\n      </div>\n    </mat-card-footer>\n\n  </mat-card>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/dialog-error/dialog-error.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/dialog-error/dialog-error.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>{{data.message}}</h1>\n<p>\n  {{data.messageError}}\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/dialog-extension/dialog-extension.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/dialog-extension/dialog-extension.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"dialogExtension\">\n\n  <mat-card>\n    <mat-card-content>\n      <h1 mat-dialog-title>Hello {{nickname}}</h1>\n      <div mat-dialog-content>\n        <p>You need install this chrome extension and refresh the browser for can share your screen.</p>\n      </div>\n    </mat-card-content>\n    <mat-card-actions align=\"center\">\n      <button mat-button (click)=\"onNoClick()\" id=\"cancelButton\">Cancel</button>\n      <button mat-button (click)=\"goToChromePage()\" cdkFocusInitial id=\"installButton\">Install</button>\n      <button mat-button *ngIf=\"this.isInstalled\" (click)=\"refreshBrowser()\">Refresh</button>\n    </mat-card-actions>\n  </mat-card>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/login/login.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/login/login.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container id=\"component\">\n    <ng-container *ngIf=\"!userService.isLogged\">\n        <span>\n            <button mat-flat-button color=\"accent\" (click)='openLoginDialog()'>\n                Login\n            </button>\n        </span>\n    </ng-container>\n    \n    <ng-container *ngIf=\"userService.isLogged\">\n        <span id=\"username\">\n            {{userService.user.name}}\n        </span>\n        <span>\n            <button mat-flat-button color=\"warn\" (click)='logOut()'>\n                Logout\n            </button>\n        </span>\n    </ng-container>\n    \n    <ng-template #loginDialog let-dialogRef=\"dialogRef\" id=\"loginDialog\">\n        <mat-card>\n            <mat-card-content>\n                <form>\n                    <div layout=\"column\">\n                        <div>\n                            <mat-form-field appearance=\"outline\" color=\"primary\" class=\"centered\">\n                                <mat-label>User</mat-label>\n                                <input #user matInput placeholder=\"User\" (keypress)=\"eventKeyPress($event, user.value, pass.value)\">\n                            </mat-form-field>\n                        </div>\n                        <div>\n                            <mat-form-field appearance=\"outline\" color=\"primary\" class=\"centered\">\n                                <mat-label>Password</mat-label>\n                                <input #pass matInput placeholder=\"Password\" type=\"password\" (keypress)=\"eventKeyPress($event, user.value, pass.value)\">\n                            </mat-form-field>\n                        </div>\n                    </div>\n                </form>\n            </mat-card-content>\n            <mat-card-actions>\n                <div layout=\"column\">\n                    <a mat-flat-button (click)=\"logIn($event, user.value, pass.value)\" class=\"text-upper centered\" color=\"primary\">\n                        <span>Login</span>\n                    </a>\n                </div>\n            </mat-card-actions>\n        </mat-card>\n    </ng-template>\n</ng-container>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/menu/assistants/assistants.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/menu/assistants/assistants.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card *ngIf=\"!loading\" id=\"connected\">\n    <div>\n        <h4>\n            {{assistantsConnectedCount}} assistant<span *ngIf=\"this.assistantsConnectedCount!==1\">s</span> online\n        </h4>\n    </div>\n\n    <mat-list>\n        <div *ngIf=\"this.moderatorsConnected.length>0\">\n            <h1 mat-subheader>Moderators</h1>\n            <mat-list-item *ngFor=\"let mod of this.moderatorsConnected\">\n                <mat-icon matListIcon *ngIf=\"mod===userName\">person</mat-icon>\n                <b *ngIf=\"mod===userName\">{{mod}}</b>\n                <mat-icon matListIcon *ngIf=\"mod!==userName\">person_outline</mat-icon>\n                <p *ngIf=\"mod!==userName\">{{mod}}</p>\n            </mat-list-item>\n        </div>\n\n        <mat-divider *ngIf=\"this.moderatorsConnected.length>0 && this.presentersConnected.length>0\"></mat-divider>\n\n        <div *ngIf=\"this.presentersConnected.length>0\">\n            <h1 mat-subheader>Presenters</h1>\n            <mat-list-item *ngFor=\"let pres of this.presentersConnected\">\n                <mat-icon matListIcon *ngIf=\"pres===userName\">person</mat-icon>\n                <b *ngIf=\"pres===userName\">{{pres}}</b>\n                <mat-icon matListIcon *ngIf=\"pres!==userName\">person_outline</mat-icon>\n                <p *ngIf=\"pres!==userName\">{{pres}}</p>\n            </mat-list-item>\n        </div>\n\n        <mat-divider\n            *ngIf=\"(this.presentersConnected.length>0 || this.moderatorsConnected.length>0) && this.participantsConnected.length>0\">\n        </mat-divider>\n\n        <div *ngIf=\"this.participantsConnected.length>0\">\n            <h1 mat-subheader>Participants</h1>\n            <mat-list-item *ngFor=\"let part of this.participantsConnected\">\n                <mat-icon matListIcon *ngIf=\"part===userName\">person</mat-icon>\n                <b *ngIf=\"part===userName\">{{part}}</b>\n                <mat-icon matListIcon *ngIf=\"part!==userName\">person_outline</mat-icon>\n                <p *ngIf=\"part!==userName\">{{part}}</p>\n            </mat-list-item>\n        </div>\n    </mat-list>\n</mat-card>\n\n<mat-card id=\"disconnected\" *ngIf=\"this.assistantsDisconnectedCount>0 && !loading\">\n    <div>\n        <h4>\n            {{assistantsDisconnectedCount}} assistant<span *ngIf=\"this.assistantsDisconnectedCount!==1\">s</span> offline\n        </h4>\n    </div>\n\n    <mat-list>\n        <div *ngIf=\"this.moderatorsDisconnected.length>0\">\n            <h1 mat-subheader>Moderators</h1>\n            <mat-list-item *ngFor=\"let mod of this.moderatorsDisconnected\">\n                <mat-icon matListIcon>person_outline</mat-icon>\n                {{mod}}\n            </mat-list-item>\n        </div>\n\n        <mat-divider *ngIf=\"this.moderatorsDisconnected.length>0 && this.presentersDisconnected.length>0\">\n        </mat-divider>\n\n        <div *ngIf=\"this.presentersDisconnected.length>0\">\n            <h1 mat-subheader>Presenters</h1>\n            <mat-list-item *ngFor=\"let pres of this.presentersDisconnected\">\n                <mat-icon matListIcon>person_outline</mat-icon>\n                {{pres}}\n            </mat-list-item>\n        </div>\n\n        <mat-divider\n            *ngIf=\"(this.presentersDisconnected.length>0 || this.moderatorsDisconnected.length>0) && this.participantsDisconnected.length>0\">\n        </mat-divider>\n\n        <div *ngIf=\"this.participantsDisconnected.length>0\">\n            <h1 mat-subheader>Participants</h1>\n            <mat-list-item *ngFor=\"let part of this.participantsDisconnected\">\n                <mat-icon matListIcon>person_outline</mat-icon>\n                {{part}}\n            </mat-list-item>\n        </div>\n    </mat-list>\n</mat-card>\n\n<mat-spinner id=\"spinner\" *ngIf=\"loading\"></mat-spinner>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/menu/chat/chat.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/menu/chat/chat.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"chatContainer\">\n  <div id=\"chatComponent\" [class.chatComponentLight]=\"lightTheme\">\n    <div id=\"chatToolbar\">\n      <span *ngIf=\"!userSrv.isModOfRoom(roomName) && signal==='chat'\"> CHAT</span>\n      <span *ngIf=\"userSrv.isModOfRoom(roomName) && signal==='chat'\"> ASSITANTS CHAT</span>\n      <span *ngIf=\"signal==='chatMod'\"> MODERATORS CHAT</span>\n      <button mat-icon-button (click)=\"close()\" id=\"closeButton\">\n        <mat-icon matTooltip=\"Close\" color=\"warn\">highlight_off</mat-icon>\n      </button>\n    </div>\n    <div class=\"message-wrap\" #chatScroll>\n      <div\n        *ngFor=\"let data of messageList\"\n        class=\"message\"\n        [class.right]=\"\n          data.connectionId === session.connection.connectionId ||\n          (sessionScreen && sessionScreen.connection && data.connectionId === sessionScreen.connection.connectionId)\n        \"\n        [class.left]=\"\n          !(\n            data.connectionId === session.connection.connectionId ||\n            (sessionScreen && sessionScreen.connection && data.connectionId === sessionScreen.connection.connectionId)\n          )\n        \"\n      >\n        <img class=\"user-img\" [src]=\"data.userAvatar\" />\n        <div class=\"msg-detail\">\n          <div class=\"msg-info\">\n            <p>{{ data.nickname }}</p>\n          </div>\n          <div class=\"msg-content\">\n            <span class=\"triangle\"></span>\n            <p class=\"text\" [innerHTML]=\"data.message | linkify\"></p>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div id=\"messageInput\">\n      <input\n        #chatInput\n        placeholder=\"Send a message\"\n        autocomplete=\"off\"\n        (keypress)=\"eventKeyPress($event)\"\n        [(ngModel)]=\"message\"\n        id=\"chatInput\"\n      />\n      <button mat-mini-fab id=\"sendButton\" (click)=\"sendMessage()\">\n        <mat-icon matTooltip=\"Send\">send</mat-icon>\n      </button>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/stream/stream.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/stream/stream.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"OT_widget-container\" [id]=\"'container-' + this.user.getStreamManager().stream.streamId\">\n\n    <app-toolbar *ngIf=\"isFullscreen\" \n    [lightTheme]=\"lightTheme\"\n    [newMessagesNum]=\"newMessagesNum\"\n    [mySessionId]=\"localUser.getStreamManager().stream.session.sessionId\"\n    [localUser]=\"localUser\"\n    [compact]=\"compact\"\n    (camButtonClicked)=\"toggleCam()\"\n    (micButtonClicked)=\"toggleMic()\"\n    (exitButtonClicked)=\"exitSession()\"\n    (menuButtonClicked)=\"toggleMenu()\"\n    (screenShareClicked)=\"screenShare()\"\n    (stopScreenSharingClicked)=\"stopScreenSharing()\">\n</app-toolbar>\n\n    <mat-chip-list class=\"nickname\" [class.fullscreen]=\"isFullscreen\" >\n       \n        <mat-chip (click)=\"toggleNicknameForm()\" [color]=\"canEditNickname ? 'accent' : 'primary'\" selected *ngIf=\"!toggleNickname\">\n            <span id=\"nickname\">{{this.user.getNickname()}}</span>\n            <span *ngIf=\"user.isScreen()\">_SCREEN</span>\n            <span *ngIf=\"canEditNickname\"> (edit)</span>\n        </mat-chip>\n        <div *ngIf=\"toggleNickname && canEditNickname\" [class.fullscreen]=\"isFullscreen\" id=\"dialogNickname\">\n            <button mat-icon-button (click)=\"toggleNicknameForm()\" id=\"closeButton\">\n                <mat-icon matTooltip=\"Close\">highlight_off</mat-icon>\n            </button>\n            <form id=\"nicknameForm\" class=\"alternate-theme\">\n                <mat-form-field color=\"primary\">\n                    <input matInput #nicknameInput placeholder=\"Nick: {{user.getNickname()}}\" [formControl]=\"nicknameFormControl\" [errorStateMatcher]=\"matcher\"\n                        (keypress)=\"eventKeyPress($event)\" autocomplete=\"off\">\n                    <mat-error *ngIf=\"nicknameFormControl.hasError('required')\">\n                        Nickname is <strong>required</strong>\n                    </mat-error>\n                    <mat-error *ngIf=\"nicknameFormControl.hasError('maxlength')\">\n                        Nickname is <strong>too long!</strong>\n                    </mat-error>\n                </mat-form-field>\n            </form>\n        </div>\n    </mat-chip-list>\n\n    <ov-video [streamManager]=\"user.getStreamManager()\" [mutedSound]=\"mutedSound\"></ov-video>\n    <div class=\"statusIcons\">\n        <div id=\"statusMic\" *ngIf=\"!this.user.isAudioActive()\">\n            <mat-icon>mic_off</mat-icon>\n        </div>\n        <div id=\"statusCam\" *ngIf=\"!this.user.isVideoActive()\">\n            <mat-icon>videocam_off</mat-icon>\n        </div>\n    </div>\n    <button mat-icon-button id=\"fullscreenButton\" class=\"streamButtons\" (click)=\"toggleFullscreen()\">\n        <mat-icon>{{this.fullscreenIcon}}</mat-icon>\n    </button>\n    <button mat-icon-button id=\"volumeButton\" class=\"streamButtons\" *ngIf=\"this.user.isRemote()\" (click)=\"toggleSound()\">\n        <mat-icon *ngIf=\"!mutedSound\" matTooltip=\"Mute sound\">volume_up</mat-icon>\n        <mat-icon *ngIf=\"mutedSound\" color=\"warn\" matTooltip=\"Unmute sound\">volume_off</mat-icon>\n    </button>\n    <button mat-icon-button (click)=\"screenShare()\" class=\"streamButtons\" id=\"changeScreenButton\" *ngIf=\"this.user.isRemote() && canEditNickname \">\n        <mat-icon matTooltip=\"Choose screen\" >picture_in_picture</mat-icon>\n    </button>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/toolbar/toolbar.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/toolbar/toolbar.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar id=\"header\" role=\"heading\" [class.headerLight]=\"lightTheme\">\n\n    <div id=\"navSessionInfo\">\n        <a>\n            <img id=\"header_img\" *ngIf=\"!lightTheme\" alt=\"OpenVidu Logo\" src=\"https://raw.githubusercontent.com/OpenVidu/openvidu-call/master/front/openvidu-call/src/assets/images/openvidu_logo.png\">\n            <img id=\"header_img\" *ngIf=\"lightTheme\" alt=\"OpenVidu Logo\" src=\"https://raw.githubusercontent.com/OpenVidu/openvidu-call/master/front/openvidu-call/src/assets/images/openvidu_logo_grey.png\">\n        </a>\n        <div id=\"titleContent\" *ngIf=\"!compact && mySessionId\" [class.titleContentLight]=\"lightTheme\">\n            <span id=\"session-title\">{{mySessionId}}</span>\n        </div>\n    </div>\n\n    <div id=\"navButtons\" align=\"center\">\n      <button mat-icon-button (click)=\"micStatusChanged()\" id=\"navMicButton\" *ngIf=\"(!this.ovSettings || (this.ovSettings && this.ovSettings.toolbarButtons.audio))\">\n        <mat-icon *ngIf=\"localUser && localUser.isAudioActive()\" matTooltip=\"Mute your audio\">mic</mat-icon>\n        <mat-icon *ngIf=\"localUser && !localUser.isAudioActive()\" color=\"warn\" matTooltip=\"Unmute your audio\">mic_off</mat-icon>\n      </button>\n      <button mat-icon-button (click)=\"camStatusChanged()\" id=\"navCamButton\" *ngIf=\"(!this.ovSettings || (this.ovSettings && this.ovSettings.toolbarButtons.video))\">\n        <mat-icon *ngIf=\"localUser && localUser.isLocal() && localUser.isVideoActive()\" matTooltip=\"Mute your cam\">videocam</mat-icon>\n        <mat-icon *ngIf=\"(localUser && localUser.isLocal() && !localUser.isVideoActive()) || localUser && localUser.isScreen()\" color=\"warn\" matTooltip=\"Unmute your cam\">videocam_off</mat-icon>\n      </button>\n      <button mat-icon-button (click)=\"screenShare()\" id=\"navScreenButton\" *ngIf=\"(localUser && !localUser.isScreenShareActive() && (!this.ovSettings || (this.ovSettings && this.ovSettings.toolbarButtons.screenShare))) && this.userService.isModOfRoom(this.mySessionId)\">\n        <mat-icon matTooltip=\"Screen share\" color=\"warn\">stop_screen_share</mat-icon>\n      </button>\n      <button mat-icon-button (click)=\"stopScreenSharing()\" *ngIf=\"(localUser && localUser.isScreenShareActive())\">\n        <mat-icon matTooltip=\"Stop sharing\">screen_share</mat-icon>\n      </button>\n      <button mat-icon-button (click)=\"toggleFullscreen()\" *ngIf=\"localUser && (!this.ovSettings || (this.ovSettings && this.ovSettings.toolbarButtons.fullscreen))\">\n        <mat-icon matTooltip=\"Fullscreen\">{{fullscreenIcon}}</mat-icon>\n      </button>\n      <button mat-icon-button (click)=\"exitSession()\" id=\"navLeaveButton\" *ngIf=\"!this.ovSettings || (this.ovSettings && this.ovSettings.toolbarButtons.exit)\">\n        <mat-icon color=\"warn\" matTooltip=\"Leave the session\">power_settings_new</mat-icon>\n      </button>\n      <button mat-icon-button (click)=\"getInviteURL('moderator')\" *ngIf=\"localUser && this.userService.isModOfRoom(this.mySessionId)\">\n        <mat-icon color=\"accent\" matTooltip=\"Invite URL for moderators\">link</mat-icon>\n      </button>\n      <button mat-icon-button (click)=\"getInviteURL('participant')\" *ngIf=\"localUser && this.userService.isModOfRoom(this.mySessionId)\">\n        <mat-icon matTooltip=\"Invite URL for participants\">link</mat-icon>\n      </button>\n      <button mat-icon-button id=\"navMenuButton\" (click)=\"toggleMenu()\" *ngIf=\"!this.ovSettings || (this.ovSettings && this.ovSettings.chat)\">\n          <mat-icon matBadge=\"{{newMessagesNum}}\" [matBadgeHidden]=\"newMessagesNum === 0\"  matBadgePosition=\"above before\" matTooltip=\"Menu\" matBadgeColor=\"accent\">menu</mat-icon>\n      </button>\n    </div>\n</mat-toolbar>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/video-room/video-room.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/video-room/video-room.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"!!ovSettings\" id=\"videoRoomNavBar\" [class.boundsLight]=\"lightTheme\">\n  <app-dialog-choose-room\n    *ngIf=\"showDialogChooseRoom && this.userService.isLogged\"\n    [userNickname]=\"userService.user.name\"\n    [sessionName]=\"sessionName\"\n    [ovSettings]=\"ovSettings\"\n    (join)=\"toggleDialogChooseRoom($event)\"\n    (leaveSession)=\"exitSession()\"\n  ></app-dialog-choose-room>\n\n  <div *ngIf=\"localUsers && localUsers[0]\">\n    <app-toolbar\n      [lightTheme]=\"lightTheme\"\n      [newMessagesNum]=\"newMessages\"\n      [compact]=\"compact\"\n      [localUser]=\"localUsers[0]\"\n      [mySessionId]=\"mySessionId\"\n      [ovSettings]=\"ovSettings\"\n      (camButtonClicked)=\"toggleCam()\"\n      (micButtonClicked)=\"toggleMic()\"\n      (screenShareClicked)=\"screenShareAndChangeScreen()\"\n      (stopScreenSharingClicked)=\"stopScreenSharing()\"\n      (exitButtonClicked)=\"exitSession()\"\n      (menuButtonClicked)=\"toggleMenu()\"\n    ></app-toolbar>\n\n    <app-dialog-extension\n      *ngIf=\"showDialogExtension\"\n      [nickname]=\"localUsers[0].getNickname()\"\n      (cancel)=\"toggleDialogExtension()\"\n    ></app-dialog-extension>\n    <mat-sidenav-container class=\"sidenav-container\" id=\"room-container\" [class.boundsLight]=\"lightTheme\" fullscreen>\n      <mat-sidenav\n        #sidenav\n        mode=\"{{sidenavMode}}\"\n        position=\"end\"\n        class=\"sidenav-menu\"\n        [class.boundsLight]=\"lightTheme\"\n        fixedInViewport=\"true\"\n        fixedTopGap=\"40\"\n        fixedBottomGap=\"0\"\n        *ngIf=\"localUsers && (localUsers[0].getStreamManager())\"\n      >\n      \n        <mat-tab-group class=\"tab-group\" backgroundColor=\"primary\" animationDuration=\"0ms\">\n\n          <mat-tab class=\"tab\" *ngIf=\"!this.ovSettings || (this.ovSettings && this.ovSettings.chat)\">\n            <ng-template mat-tab-label>\n              <mat-icon>chat</mat-icon>\n              <span *ngIf=\"userService.canStream(mySessionId)\">Assistants chat</span>\n              <span *ngIf=\"!userService.canStream(mySessionId)\">Chat</span>\n            </ng-template>\n            <chat-component\n              #chatComponent\n              [signal]=\"'chat'\"\n              [session]=\"this.session\"\n              [sessionScreen]=\"this.sessionScreen\"\n              [user]=\"this.localUsers[0]\"\n              [menuOpened]=\"menuOpened\"\n              [lightTheme]=\"lightTheme\"\n              [messageList]=\"messageList\"\n              [roomName]=\"roomName\"\n              [connections]=\"[]\"\n              (closeMenu)=\"toggleMenu()\"\n            ></chat-component>\n          </mat-tab>\n\n          <mat-tab class=\"tab\" *ngIf=\"(!this.ovSettings || (this.ovSettings && this.ovSettings.chat)) && userService.canStream(mySessionId)\">\n            <ng-template mat-tab-label>\n              <mat-icon>chat_bubble</mat-icon>\n              Moderators chat\n            </ng-template>\n            <chat-component\n              #modChatComponent\n              [signal]=\"'chatMod'\"\n              [session]=\"this.session\"\n              [sessionScreen]=\"this.sessionScreen\"\n              [user]=\"this.localUsers[0]\"\n              [menuOpened]=\"menuOpened\"\n              [lightTheme]=\"lightTheme\"\n              [messageList]=\"messageListMod\"\n              [roomName]=\"roomName\"\n              [connections]=\"modConnections\"\n              (closeMenu)=\"toggleMenu()\"\n            ></chat-component>\n          </mat-tab>\n\n          <mat-tab class=\"tab\">\n            <ng-template mat-tab-label>\n              <mat-icon>people</mat-icon>\n              Assistants\n            </ng-template>\n            <ng-template matTabContent>\n              <assistants-component\n                #assistants\n                [session]=\"session\"\n                [userName]=\"userService.user.name\">\n              </assistants-component>\n            </ng-template>\n          </mat-tab>\n\n        </mat-tab-group>\n      </mat-sidenav>\n\n      <mat-sidenav-content class=\"sidenav-main\">\n        <div id=\"layout\" class=\"bounds\" [class.boundsLight]=\"lightTheme\">\n          <ng-container *ngIf=\"userService.canStream(mySessionId)\">\n            <div\n              class=\"OT_root OT_publisher custom-class\"\n              id=\"localUser\"\n              *ngFor=\"let localUser of localUsers\"\n              (dblclick)=\"enlargeElement($event)\">\n              <stream-component\n                *ngIf=\"localUser.getStreamManager()\"\n                #videoStream\n                [user]=\"localUser\"\n                [localUser]=\"localUsers[0]\"\n                [lightTheme]=\"lightTheme\"\n                [newMessagesNum]=\"newMessages\"\n                [compact]=\"compact\"\n                [menuOpened]=\"menuOpened\"\n                [canEditNickname]=\"true\"\n                (nicknameClicked)=\"nicknameChanged($event)\"\n                (camButtonClicked)=\"toggleCam()\"\n                (micButtonClicked)=\"toggleMic()\"\n                (exitButtonClicked)=\"exitSession()\"\n                (menuButtonClicked)=\"toggleMenu()\"\n                (screenShareClicked)=\"screenShareAndChangeScreen()\"\n                (stopScreenSharingClicked)=\"stopScreenSharing()\">\n              </stream-component>\n            </div>\n          </ng-container>\n\n          <div\n            *ngFor=\"let user of this.remoteStreamers\"\n            class=\"OT_root OT_publisher custom-class\"\n            id=\"remoteStreamers\"\n            (dblclick)=\"enlargeElement($event)\"\n          >\n            <stream-component\n              #videoStream\n              [user]=\"user\"\n              [localUser]=\"localUsers[0]\"\n              [lightTheme]=\"lightTheme\"\n              [newMessagesNum]=\"newMessages\"\n              [compact]=\"compact\"\n              [menuOpened]=\"menuOpened\"\n              [canEditNickname]=\"false\"\n              (camButtonClicked)=\"toggleCam()\"\n              (micButtonClicked)=\"toggleMic()\"\n              (exitButtonClicked)=\"exitSession()\"\n              (menuButtonClicked)=\"toggleMenu()\"\n              (screenShareClicked)=\"screenShareAndChangeScreen()\"\n              (stopScreenSharingClicked)=\"stopScreenSharing()\"\n            ></stream-component>\n          </div>\n        </div>\n      </mat-sidenav-content>\n    </mat-sidenav-container>\n  </div>\n</div>\n");

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: dependencies, devDependencies, name, private, scripts, version, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"dependencies\":{\"@angular/animations\":\"8.0.3\",\"@angular/cdk\":\"8.0.1\",\"@angular/common\":\"8.0.3\",\"@angular/compiler\":\"8.0.3\",\"@angular/core\":\"8.0.3\",\"@angular/elements\":\"8.0.3\",\"@angular/flex-layout\":\"8.0.0-beta.26\",\"@angular/forms\":\"8.0.3\",\"@angular/http\":\"7.2.15\",\"@angular/material\":\"8.0.1\",\"@angular/platform-browser\":\"8.0.3\",\"@angular/platform-browser-dynamic\":\"8.0.3\",\"@angular/router\":\"8.0.3\",\"concat\":\"1.0.3\",\"core-js\":\"3.1.4\",\"document-register-element\":\"1.13.2\",\"elements-zone-strategy\":\"8.0.0\",\"fs-extra\":\"8.1.0\",\"hammerjs\":\"2.0.8\",\"jquery\":\"3.4.1\",\"ngx-linkifyjs\":\"1.3.0\",\"openvidu-browser\":\"2.11.0\",\"rxjs\":\"^6.5.3\",\"rxjs-compat\":\"^6.5.3\",\"wolfy87-eventemitter\":\"5.2.6\",\"zone.js\":\"0.9.1\"},\"devDependencies\":{\"@angular-devkit/build-angular\":\"^0.803.24\",\"@angular-devkit/build-ng-packagr\":\"0.800.6\",\"@angular/cli\":\"8.0.6\",\"@angular/compiler-cli\":\"8.0.3\",\"@angular/language-service\":\"8.0.3\",\"@types/jasmine\":\"3.3.13\",\"@types/jasminewd2\":\"2.0.6\",\"@types/jquery\":\"3.3.30\",\"@types/node\":\"12.0.10\",\"@webcomponents/webcomponentsjs\":\"2.2.10\",\"codelyzer\":\"5.1.0\",\"jasmine-core\":\"3.4.0\",\"jasmine-spec-reporter\":\"4.2.1\",\"karma\":\"4.1.0\",\"karma-chrome-launcher\":\"2.2.0\",\"karma-coverage-istanbul-reporter\":\"2.0.5\",\"karma-jasmine\":\"2.0.1\",\"karma-jasmine-html-reporter\":\"1.4.2\",\"ng-packagr\":\"5.3.0\",\"protractor\":\"5.4.2\",\"ts-node\":\"8.3.0\",\"tsickle\":\"0.35.0\",\"tslib\":\"1.10.0\",\"tslint\":\"5.18.0\",\"typedoc\":\"0.15.0\",\"typescript\":\"3.4.5\"},\"name\":\"openvidu-teaching\",\"private\":true,\"scripts\":{\"build\":\"./node_modules/@angular/cli/bin/ng build\",\"build:openvidu-angular\":\"node openvidu-angular-build.js && ./node_modules/@angular/cli/bin/ng build openvidu-angular --prod\",\"build:openvidu-webcomponent\":\"node -e \\\"require('./openvidu-webcomponent-build.js').prepareWebcomponent()\\\" && ./node_modules/@angular/cli/bin/ng build --prod --output-hashing none && node -e \\\"require('./openvidu-webcomponent-build.js').buildWebcomponent()\\\"\",\"e2e\":\"ng e2e\",\"lint\":\"ng lint\",\"ng\":\"ng\",\"pack:openvidu-angular\":\"cd dist/openvidu-angular && npm pack\",\"start\":\"ng serve --proxy-config proxy.conf.json\",\"test\":\"ng test\"},\"version\":\"2.11.0\"}");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _invite_invite_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invite/invite.component */ "./src/app/invite/invite.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _video_room_video_room_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./video-room/video-room.component */ "./src/app/video-room/video-room.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var routes = [
    { path: '', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] },
    { path: ':roomName', component: _video_room_video_room_component__WEBPACK_IMPORTED_MODULE_4__["VideoRoomComponent"] },
    { path: 'invite/:code', component: _invite_invite_component__WEBPACK_IMPORTED_MODULE_0__["InviteComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'OpenVidu-teaching';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _video_room_video_room_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./video-room/video-room.component */ "./src/app/video-room/video-room.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _shared_services_open_vidu_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/services/open-vidu.service */ "./src/app/shared/services/open-vidu.service.ts");
/* harmony import */ var _shared_components_stream_stream_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/components/stream/stream.component */ "./src/app/shared/components/stream/stream.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_components_menu_chat_chat_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/components/menu/chat/chat.component */ "./src/app/shared/components/menu/chat/chat.component.ts");
/* harmony import */ var _shared_components_dialog_extension_dialog_extension_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/components/dialog-extension/dialog-extension.component */ "./src/app/shared/components/dialog-extension/dialog-extension.component.ts");
/* harmony import */ var _shared_components_stream_ov_video_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/components/stream/ov-video.component */ "./src/app/shared/components/stream/ov-video.component.ts");
/* harmony import */ var _angular_elements__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/elements */ "./node_modules/@angular/elements/fesm5/elements.js");
/* harmony import */ var _shared_components_dialog_error_dialog_error_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/components/dialog-error/dialog-error.component */ "./src/app/shared/components/dialog-error/dialog-error.component.ts");
/* harmony import */ var _web_component_web_component_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./web-component/web-component.component */ "./src/app/web-component/web-component.component.ts");
/* harmony import */ var elements_zone_strategy__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! elements-zone-strategy */ "./node_modules/elements-zone-strategy/fesm5/elements-zone-strategy.js");
/* harmony import */ var _shared_components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shared/components/toolbar/toolbar.component */ "./src/app/shared/components/toolbar/toolbar.component.ts");
/* harmony import */ var _shared_components_dialog_choose_room_dialog_choose_room_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shared/components/dialog-choose-room/dialog-choose-room.component */ "./src/app/shared/components/dialog-choose-room/dialog-choose-room.component.ts");
/* harmony import */ var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shared/services/api.service */ "./src/app/shared/services/api.service.ts");
/* harmony import */ var _shared_pipes_linkfy__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./shared/pipes/linkfy */ "./src/app/shared/pipes/linkfy.ts");
/* harmony import */ var ngx_linkifyjs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-linkifyjs */ "./node_modules/ngx-linkifyjs/esm5/ngx-linkifyjs.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _invite_invite_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./invite/invite.component */ "./src/app/invite/invite.component.ts");
/* harmony import */ var src_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! src/interceptors/auth.interceptor */ "./src/interceptors/auth.interceptor.ts");
/* harmony import */ var src_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! src/interceptors/error.interceptor */ "./src/interceptors/error.interceptor.ts");
/* harmony import */ var _shared_components_menu_assistants_assistants_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./shared/components/menu/assistants/assistants.component */ "./src/app/shared/components/menu/assistants/assistants.component.ts");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _shared_components_login_login_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./shared/components/login/login.component */ "./src/app/shared/components/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};































var AppModule = /** @class */ (function () {
    function AppModule(injector) {
        this.injector = injector;
        var strategyFactory = new elements_zone_strategy__WEBPACK_IMPORTED_MODULE_18__["ElementZoneStrategyFactory"](_web_component_web_component_component__WEBPACK_IMPORTED_MODULE_17__["WebComponentComponent"], this.injector);
        var element = Object(_angular_elements__WEBPACK_IMPORTED_MODULE_15__["createCustomElement"])(_web_component_web_component_component__WEBPACK_IMPORTED_MODULE_17__["WebComponentComponent"], { injector: this.injector, strategyFactory: strategyFactory });
        customElements.define('openvidu-webcomponent', element);
    }
    AppModule.prototype.ngDoBootstrap = function () { };
    AppModule.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
    ]; };
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _video_room_video_room_component__WEBPACK_IMPORTED_MODULE_7__["VideoRoomComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"],
                _shared_components_stream_stream_component__WEBPACK_IMPORTED_MODULE_10__["StreamComponent"],
                _shared_components_menu_chat_chat_component__WEBPACK_IMPORTED_MODULE_12__["ChatComponent"],
                _shared_components_dialog_extension_dialog_extension_component__WEBPACK_IMPORTED_MODULE_13__["DialogExtensionComponent"],
                _shared_components_stream_ov_video_component__WEBPACK_IMPORTED_MODULE_14__["OpenViduVideoComponent"],
                _shared_components_dialog_error_dialog_error_component__WEBPACK_IMPORTED_MODULE_16__["DialogErrorComponent"],
                _shared_components_dialog_choose_room_dialog_choose_room_component__WEBPACK_IMPORTED_MODULE_20__["DialogChooseRoomComponent"],
                _web_component_web_component_component__WEBPACK_IMPORTED_MODULE_17__["WebComponentComponent"],
                _shared_components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_19__["ToolbarComponent"],
                _shared_pipes_linkfy__WEBPACK_IMPORTED_MODULE_22__["LinkifyPipe"],
                _invite_invite_component__WEBPACK_IMPORTED_MODULE_25__["InviteComponent"],
                _shared_components_menu_assistants_assistants_component__WEBPACK_IMPORTED_MODULE_28__["AssistantsComponent"],
                _shared_components_login_login_component__WEBPACK_IMPORTED_MODULE_30__["LoginComponent"]
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_24__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                ngx_linkifyjs__WEBPACK_IMPORTED_MODULE_23__["NgxLinkifyjsModule"].forRoot()
            ],
            entryComponents: [
                _shared_components_dialog_error_dialog_error_component__WEBPACK_IMPORTED_MODULE_16__["DialogErrorComponent"],
                _web_component_web_component_component__WEBPACK_IMPORTED_MODULE_17__["WebComponentComponent"],
            ],
            providers: [_shared_services_open_vidu_service__WEBPACK_IMPORTED_MODULE_9__["OpenViduService"], _shared_services_api_service__WEBPACK_IMPORTED_MODULE_21__["ApiService"], _shared_services_user_service__WEBPACK_IMPORTED_MODULE_29__["UserService"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HTTP_INTERCEPTORS"], useClass: src_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_26__["BasicAuthInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HTTP_INTERCEPTORS"], useClass: src_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_27__["ErrorInterceptor"], multi: true }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#header {\n  background-color: transparent;\n  color: #ffffff;\n}\n#header_img {\n  max-width: 200px;\n  margin-right: 10px;\n  margin-top: 10px;\n}\n#version {\n  position: absolute;\n  right: 5px;\n  font-size: 16px;\n}\n#section1 {\n  background-image: url('/assets/images/land2_bg.jpg');\n  background-size: cover;\n  height: 100%;\n  text-align: center;\n  position: relative;\n}\n#ov_info {\n  color: #ffffff;\n}\n#ov_img {\n  max-width: 50%;\n  margin: auto;\n}\nlogin-component {\n  max-width: 200%;\n  max-height: 200%;\n}\n#card_content {\n  height: 50%;\n  margin-top: 10px;\n}\n#room_card {\n  color: #303030;\n  position: inherit;\n  max-width: 700px;\n  width: 75%;\n  margin: auto;\n  background: rgba(221, 221, 221, 0.856);\n}\n#room_card mat-form-field {\n  margin: auto;\n  padding: 0px 5px;\n}\n@media (max-width: 700px) {\n  #header_img {\n    visibility: hidden;\n  }\n  #ov_img {\n    max-width: 65%;\n  }\n}\n#spinner {\n  margin:5% auto;\n}\n.addRoomButton {\n  background-color: rgb(6, 211, 98);\n}\n.dialogCentered {\n  left: 50%;\n  transform: translate(-50%, 0);\n}\n::ng-deep .mat-form-field-appearance-outline .mat-form-field-outline {\n  color: #dfdfdf;\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkJBQTZCO0VBQzdCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGVBQWU7QUFDakI7QUFFQTtFQUNFLG9EQUFxRDtFQUNyRCxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0FBQ2Q7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixZQUFZO0VBQ1osc0NBQXNDO0FBQ3hDO0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRTtJQUNFLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsY0FBYztFQUNoQjtBQUNGO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7QUFFQTtFQUNFLFNBQVM7RUFDVCw2QkFBNkI7QUFDL0I7QUFFQTtFQUNFLGNBQWM7RUFDZCxVQUFVO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuI2hlYWRlcl9pbWcge1xuICBtYXgtd2lkdGg6IDIwMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbiN2ZXJzaW9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNXB4O1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbiNzZWN0aW9uMSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnfi9hc3NldHMvaW1hZ2VzL2xhbmQyX2JnLmpwZycpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4jb3ZfaW5mbyB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuI292X2ltZyB7XG4gIG1heC13aWR0aDogNTAlO1xuICBtYXJnaW46IGF1dG87XG59XG5cbmxvZ2luLWNvbXBvbmVudCB7XG4gIG1heC13aWR0aDogMjAwJTtcbiAgbWF4LWhlaWdodDogMjAwJTtcbn1cblxuI2NhcmRfY29udGVudCB7XG4gIGhlaWdodDogNTAlO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4jcm9vbV9jYXJkIHtcbiAgY29sb3I6ICMzMDMwMzA7XG4gIHBvc2l0aW9uOiBpbmhlcml0O1xuICBtYXgtd2lkdGg6IDcwMHB4O1xuICB3aWR0aDogNzUlO1xuICBtYXJnaW46IGF1dG87XG4gIGJhY2tncm91bmQ6IHJnYmEoMjIxLCAyMjEsIDIyMSwgMC44NTYpO1xufVxuXG4jcm9vbV9jYXJkIG1hdC1mb3JtLWZpZWxkIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nOiAwcHggNXB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gICNoZWFkZXJfaW1nIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIH1cbiAgI292X2ltZyB7XG4gICAgbWF4LXdpZHRoOiA2NSU7XG4gIH1cbn1cblxuI3NwaW5uZXIge1xuICBtYXJnaW46NSUgYXV0bztcbn1cblxuLmFkZFJvb21CdXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNiwgMjExLCA5OCk7XG59XG5cbi5kaWFsb2dDZW50ZXJlZCB7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XG59XG5cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHtcbiAgY29sb3I6ICNkZmRmZGY7XG4gIG9wYWNpdHk6IDE7XG59Il19 */");

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _shared_services_room_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared/services/room.service */ "./src/app/shared/services/room.service.ts");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(router, userSrv, roomSrv, urlSnackBar, dialog) {
        this.router = router;
        this.userSrv = userSrv;
        this.roomSrv = roomSrv;
        this.urlSnackBar = urlSnackBar;
        this.dialog = dialog;
        this.version = __webpack_require__(/*! ../../../package.json */ "./package.json").version;
        this.moddedRooms = [];
        this.presentedRooms = [];
        this.participatedRooms = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        if (this.userSrv.isLogged) {
            this.getRooms();
        }
    };
    DashboardComponent.prototype.getRooms = function () {
        var _this = this;
        this.loading = true;
        this.userSrv.getRoomsForUser().subscribe(function (rooms) {
            _this.moddedRooms = rooms.modded;
            _this.presentedRooms = rooms.presented;
            _this.participatedRooms = rooms.participated;
            _this.loading = false;
        }, function (error) { return console.log(error); });
    };
    DashboardComponent.prototype.getInviteURL = function (roomName, role) {
        var _this = this;
        this.roomSrv.getRoomCode(roomName, role).subscribe(function (code) {
            var url = window.location.origin + '/#/invite/' + code;
            _this.urlSnackBar.open(url, 'Close');
        }, function (error) { return console.error(error); });
    };
    DashboardComponent.prototype.openAddRoomDialog = function () {
        this.dialogRef = this.dialog.open(this.addRoomDialog, {
            width: '50%',
            height: '60%',
        });
    };
    DashboardComponent.prototype.eventKeyPress = function (event) {
        if (event && event.keyCode === 13) {
            // Press Enter
            this.createRoom();
        }
    };
    DashboardComponent.prototype.createRoom = function () {
        var _this = this;
        this.roomSrv.createRoom(this.newRoom).subscribe(function (room) {
            _this.dialogRef.close("Room created");
            _this.userSrv.user.moddedRooms.push(room);
            _this.router.navigate([room.name]);
        }, function (error) { return console.error(error); });
        this.newRoom;
    };
    DashboardComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _shared_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] },
        { type: _shared_services_room_service__WEBPACK_IMPORTED_MODULE_0__["RoomService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('addRoomDialog', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"])
    ], DashboardComponent.prototype, "addRoomDialog", void 0);
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-dashboard',
            template: __importDefault(__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _shared_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _shared_services_room_service__WEBPACK_IMPORTED_MODULE_0__["RoomService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/invite/invite.component.css":
/*!*********************************************!*\
  !*** ./src/app/invite/invite.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#background {\n    background-color: #333333;\n    width: 100%;\n    height: 100%;\n}\n\n#component {\n    position: fixed;\n    top: 30%;\n    left: 50%;\n    transform: translate(-50%, -30%);\n    text-align: center;\n    color: #dfdfdf;\n}\n\n#ov_info {\n    color: #ffffff;\n    padding-bottom: 15%;\n}\n\n#ov_img {\n    max-width: 80%;\n}\n\n#roomName {\n    display: inline-block;\n    font-family: 'Ubuntu', sans-serif;\n    background-color: #494949;\n    font-size: 200%;\n    margin-bottom: 5%;\n    padding-right: 2%;\n    padding-left: 2%;\n}\n\n#loginMsg {\n    display: inline;\n}\n\np {\n    font-family: 'Ubuntu', sans-serif;\n    font-size: 120%;\n}\n\n#userErrorMsg {\n    color: red;\n}\n\n::ng-deep .mat-form-field-appearance-outline .mat-form-field-outline {\n    color: #dfdfdf;\n    opacity: 1;\n}\n\n.ng-star-inserted {\n    color: #dfdfdf;\n}\n\nmat-hint {\n    font-size: 110%;\n}\n\nbutton {\n    margin-top: 2%;\n    padding-right: 10%;\n    padding-left: 10%;\n    display: inline-block;\n    font-family: 'Ubuntu', sans-serif;\n    font-size: 120%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW52aXRlL2ludml0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFFBQVE7SUFDUixTQUFTO0lBQ1QsZ0NBQWdDO0lBQ2hDLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsaUNBQWlDO0lBQ2pDLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsaUNBQWlDO0lBQ2pDLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9pbnZpdGUvaW52aXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYmFja2dyb3VuZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbiNjb21wb25lbnQge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDMwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTMwJSk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjZGZkZmRmO1xufVxuXG4jb3ZfaW5mbyB7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgcGFkZGluZy1ib3R0b206IDE1JTtcbn1cblxuI292X2ltZyB7XG4gICAgbWF4LXdpZHRoOiA4MCU7XG59XG5cbiNyb29tTmFtZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtZmFtaWx5OiAnVWJ1bnR1Jywgc2Fucy1zZXJpZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk0OTQ5O1xuICAgIGZvbnQtc2l6ZTogMjAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDIlO1xufVxuXG4jbG9naW5Nc2cge1xuICAgIGRpc3BsYXk6IGlubGluZTtcbn1cblxucCB7XG4gICAgZm9udC1mYW1pbHk6ICdVYnVudHUnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTIwJTtcbn1cblxuI3VzZXJFcnJvck1zZyB7XG4gICAgY29sb3I6IHJlZDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUge1xuICAgIGNvbG9yOiAjZGZkZmRmO1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbi5uZy1zdGFyLWluc2VydGVkIHtcbiAgICBjb2xvcjogI2RmZGZkZjtcbn1cblxubWF0LWhpbnQge1xuICAgIGZvbnQtc2l6ZTogMTEwJTtcbn1cblxuYnV0dG9uIHtcbiAgICBtYXJnaW4tdG9wOiAyJTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMCU7XG4gICAgcGFkZGluZy1sZWZ0OiAxMCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtZmFtaWx5OiAnVWJ1bnR1Jywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDEyMCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/invite/invite.component.ts":
/*!********************************************!*\
  !*** ./src/app/invite/invite.component.ts ***!
  \********************************************/
/*! exports provided: InviteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InviteComponent", function() { return InviteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_room_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/room.service */ "./src/app/shared/services/room.service.ts");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var InviteComponent = /** @class */ (function () {
    function InviteComponent(roomSrv, userSrv, route, router) {
        this.roomSrv = roomSrv;
        this.userSrv = userSrv;
        this.route = route;
        this.router = router;
        this.nameTaken = false;
    }
    InviteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            _this.code = params.get("code");
        });
        this.checkRoom();
    };
    InviteComponent.prototype.enterRoom = function () {
        var _this = this;
        if (this.userSrv.isLogged) { //User is logged
            this.userName = this.userSrv.user.name;
            if (this.userSrv.isModOfRoom(this.roomName)) { //Direct access if already a mod
                this.router.navigate(['/', this.roomName]);
            }
            else {
                this.roomSrv.enterRoom(this.code).subscribe(//Update user if they are not in the room or mod
                function (//Update user if they are not in the room or mod
                user) {
                    _this.userSrv.saveUser(user);
                    _this.router.navigate(['/', _this.roomName]);
                }, function (error) {
                    console.log(error);
                });
            }
        }
        else { //User is not logged
            if (this.userName == null || this.userName == '') {
                this.userErrorMsg = 'You must enter a username';
            }
            else if (this.password == null) {
                this.userErrorMsg = 'You must enter a password';
            }
            else {
                this.userSrv.register(this.userName, this.password).subscribe(function (_) {
                    _this.roomSrv.enterRoom(_this.code).subscribe(function (user) {
                        var auth = window.btoa(_this.userName + ':' + _this.password);
                        _this.userSrv.saveUser(user, auth);
                        _this.router.navigate(['/', _this.roomName]);
                    }, function (error) {
                        console.log(error);
                    });
                }, function (error) {
                    _this.userErrorMsg = 'Username already taken';
                });
            }
        }
    };
    InviteComponent.prototype.checkRoom = function () {
        var _this = this;
        this.roomSrv.checkRoom(this.code).subscribe(function (roomName) {
            _this.roomName = roomName;
        }, function (error) {
            _this.router.navigate(['/']);
            console.log(error);
        });
    };
    InviteComponent.prototype.eventKeyPress = function (event) {
        if (event && event.keyCode === 13) {
            // Press Enter
            this.enterRoom();
        }
    };
    InviteComponent.ctorParameters = function () { return [
        { type: _shared_services_room_service__WEBPACK_IMPORTED_MODULE_2__["RoomService"] },
        { type: _shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    InviteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-invite',
            template: __importDefault(__webpack_require__(/*! raw-loader!./invite.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/invite/invite.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./invite.component.css */ "./src/app/invite/invite.component.css")).default]
        }),
        __metadata("design:paramtypes", [_shared_services_room_service__WEBPACK_IMPORTED_MODULE_2__["RoomService"],
            _shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], InviteComponent);
    return InviteComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/dialog-choose-room/dialog-choose-room.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/shared/components/dialog-choose-room/dialog-choose-room.component.css ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1,\nh3,\n#imgText,\nmat-select,\nmat-option,\ninput,\nbutton {\n  font-family: 'Ubuntu', sans-serif;\n}\n\n#dialogChooseRoom {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n\n#dialogChooseRoom h1 {\n  text-align: center;\n}\n\n#card-content {\n  max-width: 95%;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin: auto;\n  overflow-y: auto;\n  padding-right: 8px;\n}\n\n#videoContainer {\n  position: relative;\n}\n\n#closeButton {\n  position: absolute;\n  top: 0;\n  right: 7px;\n}\n\n.volumeSlider {\n  position: absolute;\n  height: 60%;\n  z-index: 99999;\n  bottom: 0;\n  pointer-events: none;\n}\n\n#ovVideoScreen,\n#ovVideo {\n  display: inline-block;\n}\n\n.smallVideo {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  width: 50%;\n  border: 1px solid;\n  border-color: #ffffff;\n}\n\n#img_content {\n  position: absolute;\n  top: 3px;\n  left: 0;\n}\n\n#header_img {\n  max-width: 165px;\n}\n\n#sessionInfo {\n  margin-top: 0;\n}\n\n#camDeviceButton,\n#micDeviceButton,\n#nicknameButton {\n  margin: 0px 10px;\n}\n\n#joinButtonDiv {\n  text-align: center\n}\n\n#joinButton {\n  margin: 15px;\n  width: 80%;\n}\n\n#photoButton {\n  margin: 10px;\n  text-align: center;\n}\n\n#avatarContainer {\n  border: 1px solid;\n  border-color: rgb(182, 182, 182);\n  width: 100px;\n  height: 100px;\n  margin: 10px;\n  position: relative;\n  cursor: pointer;\n  display: inline-block;\n}\n\n#devicesSection {\n  margin: 15px 0px;\n}\n\n#avatarSection,\n#devicesSection {\n  height: -webkit-fit-content !important;\n  height: -moz-fit-content !important;\n  height: fit-content !important;\n  min-height: auto !important;\n}\n\n#imgText {\n  display: table;\n}\n\n#avatarImg,\n#imgText {\n  position: absolute;\n  margin: auto;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n#avatarImg {\n  height: 88%;\n  width: 88%;\n}\n\n#avatarContainer,\n#avatarImg {\n  border-radius: 50%;\n}\n\n#optionsContent {\n  position: initial;\n}\n\nmat-form-field,\n#nicknameDialog {\n  width: 100%;\n}\n\nmat-card {\n  max-width: 85% !important;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  max-height: 90%;\n  margin: auto;\n  padding: 20px;\n  overflow-y: auto;\n  border: 2px solid #ffffff;\n  border-right: 4px solid #ffffff;\n}\n\n@media only screen and (max-width: 959px) {\n  mat-card {\n    max-width: 80% !important;\n    max-height: 80% !important;\n  }\n}\n\n::ng-deep .mat-option-text {\n  color: black !important;\n}\n\n::ng-deep .mat-slider-thumb {\n  visibility: hidden;\n}\n\n::ng-deep .mat-slider-vertical .mat-slider-track-fill,\n::ng-deep .mat-slider-vertical .mat-slider-track-background,\n::ng-deep .mat-slider-vertical .mat-slider-track-wrapper {\n  width: 10px !important;\n}\n\n::-webkit-scrollbar {\n  width: 8px;\n}\n\n::-webkit-scrollbar-thumb {\n  background: #b8afaf;\n  border-radius: 4px;\n}\n\n::-webkit-scrollbar-thumb:hover {\n  background: #888888;\n}\n\n::-webkit-scrollbar-track {\n  background: #e1e1e1;\n  border-radius: 4px;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZGlhbG9nLWNob29zZS1yb29tL2RpYWxvZy1jaG9vc2Utcm9vbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0VBT0UsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsMkJBQW1CO0VBQW5CLHdCQUFtQjtFQUFuQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsY0FBYztFQUNkLFNBQVM7RUFDVCxvQkFBb0I7QUFDdEI7O0FBRUE7O0VBRUUscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0VBQ1IsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLE9BQU87QUFDVDs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTs7O0VBR0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0U7QUFDRjs7QUFDQTtFQUNFLFlBQVk7RUFDWixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdDQUFnQztFQUNoQyxZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxzQ0FBOEI7RUFBOUIsbUNBQThCO0VBQTlCLDhCQUE4QjtFQUM5QiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOztFQUVFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztBQUNYOztBQUVBO0VBQ0UsV0FBVztFQUNYLFVBQVU7QUFDWjs7QUFFQTs7RUFFRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsV0FBVztBQUNiOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0VBQ1IsZUFBZTtFQUNmLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRTtJQUNFLHlCQUF5QjtJQUN6QiwwQkFBMEI7RUFDNUI7QUFDRjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTs7O0VBR0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9kaWFsb2ctY2hvb3NlLXJvb20vZGlhbG9nLWNob29zZS1yb29tLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSxcbmgzLFxuI2ltZ1RleHQsXG5tYXQtc2VsZWN0LFxubWF0LW9wdGlvbixcbmlucHV0LFxuYnV0dG9uIHtcbiAgZm9udC1mYW1pbHk6ICdVYnVudHUnLCBzYW5zLXNlcmlmO1xufVxuXG4jZGlhbG9nQ2hvb3NlUm9vbSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuI2RpYWxvZ0Nob29zZVJvb20gaDEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNjYXJkLWNvbnRlbnQge1xuICBtYXgtd2lkdGg6IDk1JTtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgbWFyZ2luOiBhdXRvO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG59XG5cbiN2aWRlb0NvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuI2Nsb3NlQnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiA3cHg7XG59XG5cbi52b2x1bWVTbGlkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogNjAlO1xuICB6LWluZGV4OiA5OTk5OTtcbiAgYm90dG9tOiAwO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuI292VmlkZW9TY3JlZW4sXG4jb3ZWaWRlbyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnNtYWxsVmlkZW8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiA1MCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBib3JkZXItY29sb3I6ICNmZmZmZmY7XG59XG5cbiNpbWdfY29udGVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzcHg7XG4gIGxlZnQ6IDA7XG59XG5cbiNoZWFkZXJfaW1nIHtcbiAgbWF4LXdpZHRoOiAxNjVweDtcbn1cblxuI3Nlc3Npb25JbmZvIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuI2NhbURldmljZUJ1dHRvbixcbiNtaWNEZXZpY2VCdXR0b24sXG4jbmlja25hbWVCdXR0b24ge1xuICBtYXJnaW46IDBweCAxMHB4O1xufVxuXG4jam9pbkJ1dHRvbkRpdiB7XG4gIHRleHQtYWxpZ246IGNlbnRlclxufVxuI2pvaW5CdXR0b24ge1xuICBtYXJnaW46IDE1cHg7XG4gIHdpZHRoOiA4MCU7XG59XG5cbiNwaG90b0J1dHRvbiB7XG4gIG1hcmdpbjogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jYXZhdGFyQ29udGFpbmVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIGJvcmRlci1jb2xvcjogcmdiKDE4MiwgMTgyLCAxODIpO1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIG1hcmdpbjogMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuI2RldmljZXNTZWN0aW9uIHtcbiAgbWFyZ2luOiAxNXB4IDBweDtcbn1cblxuI2F2YXRhclNlY3Rpb24sXG4jZGV2aWNlc1NlY3Rpb24ge1xuICBoZWlnaHQ6IGZpdC1jb250ZW50ICFpbXBvcnRhbnQ7XG4gIG1pbi1oZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbn1cblxuI2ltZ1RleHQge1xuICBkaXNwbGF5OiB0YWJsZTtcbn1cblxuI2F2YXRhckltZyxcbiNpbWdUZXh0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW46IGF1dG87XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbn1cblxuI2F2YXRhckltZyB7XG4gIGhlaWdodDogODglO1xuICB3aWR0aDogODglO1xufVxuXG4jYXZhdGFyQ29udGFpbmVyLFxuI2F2YXRhckltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuI29wdGlvbnNDb250ZW50IHtcbiAgcG9zaXRpb246IGluaXRpYWw7XG59XG5cbm1hdC1mb3JtLWZpZWxkLFxuI25pY2tuYW1lRGlhbG9nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbm1hdC1jYXJkIHtcbiAgbWF4LXdpZHRoOiA4NSUgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1heC1oZWlnaHQ6IDkwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nOiAyMHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmZmZmO1xuICBib3JkZXItcmlnaHQ6IDRweCBzb2xpZCAjZmZmZmZmO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk1OXB4KSB7XG4gIG1hdC1jYXJkIHtcbiAgICBtYXgtd2lkdGg6IDgwJSAhaW1wb3J0YW50O1xuICAgIG1heC1oZWlnaHQ6IDgwJSAhaW1wb3J0YW50O1xuICB9XG59XG5cbjo6bmctZGVlcCAubWF0LW9wdGlvbi10ZXh0IHtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubWF0LXNsaWRlci10aHVtYiB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuOjpuZy1kZWVwIC5tYXQtc2xpZGVyLXZlcnRpY2FsIC5tYXQtc2xpZGVyLXRyYWNrLWZpbGwsXG46Om5nLWRlZXAgLm1hdC1zbGlkZXItdmVydGljYWwgLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZCxcbjo6bmctZGVlcCAubWF0LXNsaWRlci12ZXJ0aWNhbCAubWF0LXNsaWRlci10cmFjay13cmFwcGVyIHtcbiAgd2lkdGg6IDEwcHggIWltcG9ydGFudDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA4cHg7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiAjYjhhZmFmO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjODg4ODg4O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogI2UxZTFlMTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4iXX0= */");

/***/ }),

/***/ "./src/app/shared/components/dialog-choose-room/dialog-choose-room.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/shared/components/dialog-choose-room/dialog-choose-room.component.ts ***!
  \**************************************************************************************/
/*! exports provided: DialogChooseRoomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogChooseRoomComponent", function() { return DialogChooseRoomComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/user-model */ "./src/app/shared/models/user-model.ts");
/* harmony import */ var _forms_matchers_nickname__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../forms-matchers/nickname */ "./src/app/shared/forms-matchers/nickname.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/shared/services/api.service.ts");
/* harmony import */ var openvidu_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! openvidu-browser */ "./node_modules/openvidu-browser/lib/index.js");
/* harmony import */ var openvidu_browser__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(openvidu_browser__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







var DialogChooseRoomComponent = /** @class */ (function () {
    function DialogChooseRoomComponent(route, router, apiSrv) {
        this.route = route;
        this.router = router;
        this.apiSrv = apiSrv;
        this.join = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.leaveSession = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cameras = [{ label: 'None', device: null, type: '' }];
        this.microphones = [{ label: 'None', device: null, type: '' }];
        this.screenActive = 'None';
        this.isVideoActive = true;
        this.isAudioActive = true;
        this.isScreenShareActive = false;
        this.volumeValue = 100;
        this.showDialogExtension = false;
        this.localUsers = [];
        this.nicknameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(25), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.matcher = new _forms_matchers_nickname__WEBPACK_IMPORTED_MODULE_3__["NicknameMatcher"]();
    }
    DialogChooseRoomComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.OV = new openvidu_browser__WEBPACK_IMPORTED_MODULE_5__["OpenVidu"]();
        this.localUsers.push(new _models_user_model__WEBPACK_IMPORTED_MODULE_2__["UserModel"]());
        this.generateNickname();
        this.setSessionName();
        this.initPublisher().then(function (publisher) {
            _this.setDevicesValue(publisher);
        }).catch(function (error) { return console.log(error); });
        this.getRandomAvatar();
        this.columns = (window.innerWidth > 900) ? 2 : 1;
    };
    DialogChooseRoomComponent.prototype.toggleCam = function () {
        this.isVideoActive = !this.isVideoActive;
        if (this.localUsers.length === 2) {
            this.destroyPublisher(0);
            this.userCamDeleted = this.localUsers.shift();
            this.setAudio(this.isAudioActive);
            this.subscribeToVolumeChange(this.localUsers[0].getStreamManager());
        }
        else if (this.localUsers[0].isScreen()) {
            this.setAudio(false);
            this.localUsers[0].getStreamManager().off('streamAudioVolumeChange');
            this.localUsers.unshift(this.userCamDeleted);
            this.initPublisher();
        }
        else {
            this.localUsers[0].setVideoActive(this.isVideoActive);
            this.localUsers[0].getStreamManager().publishVideo(this.isVideoActive);
        }
    };
    DialogChooseRoomComponent.prototype.camChanged = function (label) {
        var initPublisherRequired = this.camValue.label !== 'None' && label !== 'None';
        var option = this.cameras.filter(function (opt) { return opt.label === label; })[0];
        this.camValue = option;
        this.isVideoActive = this.camValue.label === 'None' ? false : true;
        if (this.localUsers[0].isLocal()) {
            this.localUsers[0].setVideoActive(this.isVideoActive);
            this.localUsers[0].getStreamManager().publishVideo(this.isVideoActive);
            if (initPublisherRequired) {
                this.launchNewPublisher(0);
            }
        }
        else {
            this.localUsers.unshift(this.userCamDeleted);
            this.initPublisher();
        }
    };
    DialogChooseRoomComponent.prototype.toggleScreenShare = function () {
        if (this.isScreenShareActive) {
            if (this.localUsers[0].isScreen()) {
                this.localUsers.unshift(this.userCamDeleted);
                this.initPublisher();
            }
            this.destroyPublisher(1);
            this.localUsers.pop();
            this.localUsers[0].setScreenShareActive(false);
            this.screenActive = 'None';
            this.isScreenShareActive = !this.isScreenShareActive;
            this.localUsers[0].setScreenShareActive(this.isScreenShareActive);
        }
        else {
            this.initScreenPublisher();
        }
    };
    DialogChooseRoomComponent.prototype.toggleMic = function () {
        var _this = this;
        this.isAudioActive = !this.isAudioActive;
        this.localUsers.forEach(function (user) {
            user.setAudioActive(_this.isAudioActive);
            user.getStreamManager().publishAudio(_this.isAudioActive);
        });
    };
    DialogChooseRoomComponent.prototype.micChanged = function (label) {
        var _this = this;
        var initPublisherRequired = this.micValue.label !== 'None' && label !== 'None';
        var option = this.microphones.filter(function (opt) { return opt.label === label; })[0];
        this.micValue = option;
        this.isAudioActive = this.micValue.label === 'None' ? false : true;
        this.localUsers[0].setAudioActive(this.isAudioActive);
        this.localUsers.forEach(function (user) {
            user.getStreamManager().publishAudio(_this.isAudioActive);
        });
        if (initPublisherRequired) {
            this.launchNewPublisher(0);
        }
    };
    DialogChooseRoomComponent.prototype.subscribeToVolumeChange = function (publisher) {
        var _this = this;
        publisher.on('streamAudioVolumeChange', function (event) {
            _this.volumeValue = Math.round(Math.abs(event.value.newValue));
        });
    };
    DialogChooseRoomComponent.prototype.setAvatar = function (option) {
        if ((option === 'random' && this.randomAvatar) || (option === 'video' && this.videoAvatar)) {
            this.avatarSelected = option;
            if (option === 'random') {
                this.localUsers[0].setUserAvatar(this.randomAvatar);
            }
        }
    };
    DialogChooseRoomComponent.prototype.takePhoto = function () {
        this.localUsers[0].setUserAvatar();
        this.videoAvatar = this.localUsers[0].getAvatar();
        this.setAvatar('video');
    };
    DialogChooseRoomComponent.prototype.generateNickname = function () {
        var nickname = this.userNickname ? this.userNickname : 'OpenVidu_User' + Math.floor(Math.random() * 100);
        this.nicknameFormControl.setValue(nickname);
    };
    DialogChooseRoomComponent.prototype.eventKeyPress = function (event) {
        if (event && event.keyCode === 13 && this.nicknameFormControl.valid) {
            this.accept();
        }
    };
    DialogChooseRoomComponent.prototype.onResize = function (event) {
        this.columns = (event.target.innerWidth > 900) ? 2 : 1;
    };
    DialogChooseRoomComponent.prototype.updateVolumeColor = function () {
        // max = 0 / min = 100
        if (this.volumeValue <= 20) {
            return 'warn';
        }
        else if (this.volumeValue > 20 && this.volumeValue <= 35) {
            return 'accent';
        }
        else if (this.volumeValue > 35) {
            return 'primary';
        }
    };
    DialogChooseRoomComponent.prototype.accept = function () {
        var _this = this;
        if (this.nicknameFormControl.valid) {
            this.localUsers.forEach(function (user) {
                user.getStreamManager().off('streamAudioVolumeChange');
                user.setNickname(_this.nicknameFormControl.value);
            });
            if (this.avatarSelected === 'random') {
                this.localUsers[0].removeVideoAvatar();
            }
            if (this.localUsers[1]) {
                this.localUsers[1].setUserAvatar(this.localUsers[0].getAvatar());
            }
            this.join.emit({ localUsers: this.localUsers, sessionId: this.mySessionId });
        }
    };
    DialogChooseRoomComponent.prototype.toggleDialogExtension = function () {
        this.showDialogExtension = !this.showDialogExtension;
    };
    DialogChooseRoomComponent.prototype.close = function () {
        var _this = this;
        this.localUsers.forEach(function (user, index) {
            _this.destroyPublisher(index);
        });
        this.localUsers = [];
        this.leaveSession.emit();
        this.router.navigate(['']);
    };
    DialogChooseRoomComponent.prototype.setDevicesValue = function (publisher) {
        var _this = this;
        this.OV.getDevices().then(function (devices) {
            console.log('Devices: ', devices);
            var defaultDeviceId = publisher.stream.getMediaStream().getVideoTracks()[0].getSettings().deviceId;
            devices.forEach(function (device) {
                if (device.kind === 'audioinput') {
                    _this.microphones.push({ label: device.label, device: device.deviceId, type: '' });
                }
                else {
                    var element = { label: device.label, device: device.deviceId, type: '' };
                    if (device.deviceId === defaultDeviceId) {
                        element.type = 'FRONT';
                        _this.camValue = element;
                    }
                    else {
                        element.type = 'BACK';
                    }
                    _this.cameras.push(element);
                }
            });
            _this.camValue = _this.camValue ? _this.camValue : _this.cameras[0];
            _this.micValue = _this.microphones[1] ? _this.microphones[1] : _this.microphones[0];
        }).catch(function (error) { return console.error(error); });
    };
    DialogChooseRoomComponent.prototype.setSessionName = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.mySessionId = _this.sessionName ? _this.sessionName : params.roomName;
        });
    };
    DialogChooseRoomComponent.prototype.getRandomAvatar = function () {
        var _this = this;
        this.apiSrv.getRandomAvatar().then(function (avatar) {
            _this.randomAvatar = avatar;
            _this.setAvatar('random');
        })
            .catch(function (err) { return console.error(err); });
    };
    DialogChooseRoomComponent.prototype.initPublisher = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.OV.initPublisherAsync(undefined, {
                audioSource: _this.micValue ? _this.micValue.device : undefined,
                videoSource: _this.camValue ? _this.camValue.device : undefined,
                publishAudio: _this.isAudioActive,
                publishVideo: _this.isVideoActive,
                mirror: _this.camValue && _this.camValue.type === 'FRONT'
            }).then(function (publisher) {
                _this.subscribeToVolumeChange(publisher);
                _this.localUsers[0].setStreamManager(publisher);
                if (_this.ovSettings.autopublish) {
                    _this.accept();
                }
                resolve(publisher);
            }).catch(function (error) { return reject(error); });
        });
    };
    DialogChooseRoomComponent.prototype.initScreenPublisher = function () {
        var _this = this;
        var videoSource = navigator.userAgent.indexOf('Firefox') !== -1 ? 'window' : 'screen';
        var hasAudio = this.localUsers[0].isLocal() && this.localUsers[0].isVideoActive() ? false : this.isAudioActive;
        var publisherProperties = {
            videoSource: videoSource,
            publishAudio: hasAudio,
            publishVideo: true,
            mirror: false,
        };
        this.OV.initPublisherAsync(undefined, publisherProperties)
            .then(function (publisher) {
            _this.localUsers.push(new _models_user_model__WEBPACK_IMPORTED_MODULE_2__["UserModel"]());
            _this.localUsers[1].setStreamManager(publisher);
            _this.localUsers[1].setScreenShareActive(true);
            _this.localUsers[1].setAudioActive(hasAudio);
            _this.localUsers[1].setType('screen');
            _this.localUsers[1].setUserAvatar(_this.randomAvatar);
            _this.isScreenShareActive = !_this.isScreenShareActive;
            _this.screenActive = 'Screen';
            _this.localUsers[0].setScreenShareActive(_this.isScreenShareActive);
            if (_this.localUsers[0].isLocal() && !_this.localUsers[0].isVideoActive()) {
                _this.setAudio(true);
                _this.destroyPublisher(0);
                _this.userCamDeleted = _this.localUsers.shift();
                _this.subscribeToVolumeChange(publisher);
            }
        }).catch(function (error) {
            if (error && error.name === 'SCREEN_EXTENSION_NOT_INSTALLED') {
                _this.toggleDialogExtension();
            }
            else {
                _this.apiSrv.handlerScreenShareError(error);
            }
        });
    };
    DialogChooseRoomComponent.prototype.launchNewPublisher = function (index) {
        this.destroyPublisher(index);
        this.initPublisher();
    };
    DialogChooseRoomComponent.prototype.destroyPublisher = function (index) {
        this.localUsers[index].getStreamManager().off('streamAudioVolumeChange');
        this.localUsers[index].getStreamManager().stream.disposeWebRtcPeer();
        this.localUsers[index].getStreamManager().stream.disposeMediaStream();
    };
    DialogChooseRoomComponent.prototype.setAudio = function (value) {
        this.localUsers[0].setAudioActive(value);
        (this.localUsers[0].getStreamManager()).publishAudio(value);
    };
    DialogChooseRoomComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DialogChooseRoomComponent.prototype, "userNickname", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DialogChooseRoomComponent.prototype, "sessionName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DialogChooseRoomComponent.prototype, "ovSettings", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DialogChooseRoomComponent.prototype, "join", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DialogChooseRoomComponent.prototype, "leaveSession", void 0);
    DialogChooseRoomComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dialog-choose-room',
            template: __importDefault(__webpack_require__(/*! raw-loader!./dialog-choose-room.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/dialog-choose-room/dialog-choose-room.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./dialog-choose-room.component.css */ "./src/app/shared/components/dialog-choose-room/dialog-choose-room.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]])
    ], DialogChooseRoomComponent);
    return DialogChooseRoomComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/dialog-error/dialog-error.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/shared/components/dialog-error/dialog-error.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1{\n    color: #a30101;\n}\n\n::ng-deep .mat-dialog-container {\n    background-color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZGlhbG9nLWVycm9yL2RpYWxvZy1lcnJvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2RpYWxvZy1lcnJvci9kaWFsb2ctZXJyb3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxe1xuICAgIGNvbG9yOiAjYTMwMTAxO1xufVxuXG46Om5nLWRlZXAgLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/shared/components/dialog-error/dialog-error.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/dialog-error/dialog-error.component.ts ***!
  \**************************************************************************/
/*! exports provided: DialogErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogErrorComponent", function() { return DialogErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var DialogErrorComponent = /** @class */ (function () {
    function DialogErrorComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DialogErrorComponent.prototype.ngOnInit = function () {
    };
    DialogErrorComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"],] }] }
    ]; };
    DialogErrorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dialog-error',
            template: __importDefault(__webpack_require__(/*! raw-loader!./dialog-error.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/dialog-error/dialog-error.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./dialog-error.component.css */ "./src/app/shared/components/dialog-error/dialog-error.component.css")).default]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], DialogErrorComponent);
    return DialogErrorComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/dialog-extension/dialog-extension.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/shared/components/dialog-extension/dialog-extension.component.css ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#dialogExtension {\n    position: absolute;\n    z-index: 99999999999999;\n    width: 100%;\n    height: 100%;\n}\n\n#dialogExtension mat-card{\n    position: absolute;\n    z-index: 99999999999999;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    max-width: -webkit-fit-content;\n    max-width: -moz-fit-content;\n    max-width: fit-content;\n    max-height: -webkit-fit-content;\n    max-height: -moz-fit-content;\n    max-height: fit-content;\n    margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZGlhbG9nLWV4dGVuc2lvbi9kaWFsb2ctZXh0ZW5zaW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixNQUFNO0lBQ04sU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0lBQ1IsOEJBQXNCO0lBQXRCLDJCQUFzQjtJQUF0QixzQkFBc0I7SUFDdEIsK0JBQXVCO0lBQXZCLDRCQUF1QjtJQUF2Qix1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2RpYWxvZy1leHRlbnNpb24vZGlhbG9nLWV4dGVuc2lvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2RpYWxvZ0V4dGVuc2lvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDk5OTk5OTk5OTk5OTk5O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuI2RpYWxvZ0V4dGVuc2lvbiBtYXQtY2FyZHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogOTk5OTk5OTk5OTk5OTk7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgbWF4LWhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgbWFyZ2luOiBhdXRvO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/shared/components/dialog-extension/dialog-extension.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/dialog-extension/dialog-extension.component.ts ***!
  \**********************************************************************************/
/*! exports provided: DialogExtensionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogExtensionComponent", function() { return DialogExtensionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var DialogExtensionComponent = /** @class */ (function () {
    function DialogExtensionComponent() {
        this.nickname = '';
        this.cancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.openviduExtensionUrl = 'https://chrome.google.com/webstore/detail/openvidu-screensharing/lfcgfepafnobdloecchnfaclibenjold';
    }
    DialogExtensionComponent.prototype.ngOnInit = function () { };
    DialogExtensionComponent.prototype.onNoClick = function () {
        this.cancel.emit();
    };
    DialogExtensionComponent.prototype.goToChromePage = function () {
        window.open(this.openviduExtensionUrl);
        this.isInstalled = true;
    };
    DialogExtensionComponent.prototype.refreshBrowser = function () {
        window.location.reload();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DialogExtensionComponent.prototype, "nickname", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DialogExtensionComponent.prototype, "cancel", void 0);
    DialogExtensionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dialog-extension',
            template: __importDefault(__webpack_require__(/*! raw-loader!./dialog-extension.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/dialog-extension/dialog-extension.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./dialog-extension.component.css */ "./src/app/shared/components/dialog-extension/dialog-extension.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], DialogExtensionComponent);
    return DialogExtensionComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/login/login.component.css":
/*!*************************************************************!*\
  !*** ./src/app/shared/components/login/login.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#component{\n    font-family: 'Ubuntu', sans-serif;\n}\n\n#username {\n    color: #ffffff;\n}\n\n.mat-card {\n    background-color: #696969;\n}\n\n::ng-deep .mat-dialog-container {\n    background-color: #494949;\n    height: -webkit-fit-content !important;\n    height: -moz-fit-content !important;\n    height: fit-content !important;\n    width: -webkit-fit-content !important;\n    width: -moz-fit-content !important;\n    width: fit-content !important;\n    margin: auto auto;\n}\n\n::ng-deep .mat-focused .mat-form-field-label {\n    color: #ffffff !important;\n}\n\n::ng-deep.mat-form-field-underline {\n    background-color: #ffffff !important;\n}\n\n::ng-deep.mat-form-field-ripple {\n    background-color: #ffffff !important;\n}\n\nmat-card-content {\n    margin-bottom: 0px;\n}\n\n.centered {\n    left: 50%;\n    transform: translate(-50%, 0);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsc0NBQThCO0lBQTlCLG1DQUE4QjtJQUE5Qiw4QkFBOEI7SUFDOUIscUNBQTZCO0lBQTdCLGtDQUE2QjtJQUE3Qiw2QkFBNkI7SUFDN0IsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVDO0lBQ0csb0NBQW9DO0FBQ3hDOztBQUVDO0lBQ0csb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksU0FBUztJQUNULDZCQUE2QjtBQUNqQyIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29tcG9uZW50e1xuICAgIGZvbnQtZmFtaWx5OiAnVWJ1bnR1Jywgc2Fucy1zZXJpZjtcbn1cblxuI3VzZXJuYW1lIHtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLm1hdC1jYXJkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjk2OTY5O1xufVxuXG46Om5nLWRlZXAgLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk0OTQ5O1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQgIWltcG9ydGFudDtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQgIWltcG9ydGFudDtcbiAgICBtYXJnaW46IGF1dG8gYXV0bztcbn1cblxuOjpuZy1kZWVwIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG59XG5cbiA6Om5nLWRlZXAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG59XG5cbiA6Om5nLWRlZXAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG59XG5cbm1hdC1jYXJkLWNvbnRlbnQge1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLmNlbnRlcmVkIHtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XG59Il19 */");

/***/ }),

/***/ "./src/app/shared/components/login/login.component.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/components/login/login.component.ts ***!
  \************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/shared/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(dialog, snackBar, userService, router) {
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.userService = userService;
        this.router = router;
        this.loggedIn = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    LoginComponent.prototype.openLoginDialog = function () {
        this.dialogRef = this.dialog.open(this.loginDialog, {
            width: '50%',
            height: '50%',
        });
    };
    LoginComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    };
    LoginComponent.prototype.logIn = function (event, user, pass) {
        var _this = this;
        event.preventDefault();
        this.userService.logIn(user, pass).subscribe(function (_) {
            _this.dialogRef.close();
            _this.loggedIn.emit();
        }, function (error) { return alert('Invalid user or password'); });
    };
    LoginComponent.prototype.logOut = function () {
        var _this = this;
        this.userService.logOut().subscribe(function (_) {
            _this.router.navigate(['/']);
        }, function (error) { return console.log('Error when trying to log out: ' + error); });
    };
    LoginComponent.prototype.eventKeyPress = function (event, user, pass) {
        if (event && event.keyCode === 13) {
            // Press Enter
            this.logIn(event, user, pass);
        }
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('loginDialog', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], LoginComponent.prototype, "loginDialog", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], LoginComponent.prototype, "loggedIn", void 0);
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'login-component',
            template: __importDefault(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/login/login.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./login.component.css */ "./src/app/shared/components/login/login.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/menu/assistants/assistants.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/menu/assistants/assistants.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-card {\n    margin: 2%;\n}\n\n.mat-subheader {\n    padding-top: 15px;\n    font-size: 120%;\n    color: rgb(100, 100, 100);\n}\n\n#spinner {\n    margin:30% auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbWVudS9hc3Npc3RhbnRzL2Fzc2lzdGFudHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL21lbnUvYXNzaXN0YW50cy9hc3Npc3RhbnRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWNhcmQge1xuICAgIG1hcmdpbjogMiU7XG59XG5cbi5tYXQtc3ViaGVhZGVyIHtcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICBmb250LXNpemU6IDEyMCU7XG4gICAgY29sb3I6IHJnYigxMDAsIDEwMCwgMTAwKTtcbn1cblxuI3NwaW5uZXIge1xuICAgIG1hcmdpbjozMCUgYXV0bztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/shared/components/menu/assistants/assistants.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/shared/components/menu/assistants/assistants.component.ts ***!
  \***************************************************************************/
/*! exports provided: AssistantsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssistantsComponent", function() { return AssistantsComponent; });
/* harmony import */ var _services_room_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/room.service */ "./src/app/shared/services/room.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var openvidu_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! openvidu-browser */ "./node_modules/openvidu-browser/lib/index.js");
/* harmony import */ var openvidu_browser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(openvidu_browser__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var AssistantsComponent = /** @class */ (function () {
    function AssistantsComponent(roomSrv) {
        this.roomSrv = roomSrv;
        this.moderatorsConnected = [];
        this.participantsConnected = [];
        this.presentersConnected = [];
        this.moderatorsDisconnected = [];
        this.participantsDisconnected = [];
        this.presentersDisconnected = [];
    }
    AssistantsComponent.prototype.ngOnInit = function () {
        this.getAssistants();
    };
    AssistantsComponent.prototype.getAssistants = function () {
        var _this = this;
        this.loading = true;
        this.roomSrv.getAssistants(this.session.sessionId).subscribe(function (assistants) {
            _this.moderatorsConnected = [];
            _this.participantsConnected = [];
            _this.presentersConnected = [];
            _this.moderatorsDisconnected = [];
            _this.participantsDisconnected = [];
            _this.presentersDisconnected = [];
            for (var _i = 0, _a = assistants.moderators; _i < _a.length; _i++) {
                var moderator = _a[_i];
                if (moderator.connected) {
                    _this.moderatorsConnected.push(moderator.name);
                }
                else {
                    _this.moderatorsDisconnected.push(moderator.name);
                }
            }
            for (var _b = 0, _c = assistants.participants; _b < _c.length; _b++) {
                var participant = _c[_b];
                if (participant.connected) {
                    _this.participantsConnected.push(participant.name);
                }
                else {
                    _this.participantsDisconnected.push(participant.name);
                }
            }
            for (var _d = 0, _e = assistants.presenters; _d < _e.length; _d++) {
                var presenter = _e[_d];
                if (presenter.connected) {
                    _this.presentersConnected.push(presenter.name);
                }
                else {
                    _this.presentersDisconnected.push(presenter.name);
                }
            }
            _this.assistantsConnectedCount = _this.moderatorsConnected.length + _this.participantsConnected.length + _this.presentersConnected.length;
            _this.assistantsDisconnectedCount = _this.moderatorsDisconnected.length + _this.participantsDisconnected.length + _this.presentersDisconnected.length;
            _this.loading = false;
        }, function (error) { return console.log(error); });
    };
    AssistantsComponent.ctorParameters = function () { return [
        { type: _services_room_service__WEBPACK_IMPORTED_MODULE_0__["RoomService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", openvidu_browser__WEBPACK_IMPORTED_MODULE_2__["Session"])
    ], AssistantsComponent.prototype, "session", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", String)
    ], AssistantsComponent.prototype, "userName", void 0);
    AssistantsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'assistants-component',
            template: __importDefault(__webpack_require__(/*! raw-loader!./assistants.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/menu/assistants/assistants.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./assistants.component.css */ "./src/app/shared/components/menu/assistants/assistants.component.css")).default]
        }),
        __metadata("design:paramtypes", [_services_room_service__WEBPACK_IMPORTED_MODULE_0__["RoomService"]])
    ], AssistantsComponent);
    return AssistantsComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/menu/chat/chat.component.css":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/menu/chat/chat.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#chatContainer {\n  position: absolute;\n  z-index: 0;\n  width: 100%;\n  height: 100%;\n}\n\ninput {\n  font-family: 'Ubuntu', sans-serif;\n}\n\n#chatToolbar {\n  height: 30px;\n  background-color: #3d3d3d;\n  box-sizing: border-box;\n  font-weight: bold;\n  font-size: 14px;\n  text-align: center;\n  padding-top: 4px;\n  border-top-left-radius: 6px;\n  border-top-right-radius: 6px;\n  color: #ffffff;\n}\n\n#closeButton {\n  position: absolute;\n  right: 0;\n  top: -5px;\n}\n\n#chatComponent {\n  background-color: #b8b8b8;\n  position: absolute;\n  z-index: 99999;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  height: calc(100% - 30px);\n  width: calc(100% - 30px);\n  border-radius: 20px;\n}\n\n.message-wrap {\n  padding: 0 15px;\n  height: calc(100% - 80px);\n  overflow: auto;\n}\n\n.message {\n  position: relative;\n  padding: 7px 0;\n}\n\n.user-img {\n  position: absolute;\n  border-radius: 45px;\n  width: 60px;\n  height: 60px;\n  top: 15px;\n}\n\n.msg-detail {\n  width: calc(100% - 65px);\n  display: inline-block;\n}\n\n.msg-detail p {\n  margin: 0;\n  font-size: 15px;\n}\n\n.msg-info p {\n  font-size: 0.8em;\n  color: #000000;\n  font-style: italic;\n}\n\n.msg-content {\n  position: relative;\n  margin-top: 5px;\n  border-radius: 5px;\n  padding: 8px;\n  color: #000000;\n  width: auto;\n  max-width: 95%;\n}\n\nspan.triangle {\n  border-radius: 2px;\n  height: 8px;\n  width: 8px;\n  top: 12px;\n  display: block;\n  transform: rotate(45deg);\n  position: absolute;\n}\n\n.text {\n  word-break: break-all;\n}\n\n/* Start message from other user */\n\n.message.left .msg-detail .msg-info {\n  text-align: left;\n}\n\n.message.left .msg-detail {\n  padding-left: 65px;\n}\n\n.message.left .user-img {\n  left: -5px;\n  border: 1px solid #f0f0f094;\n}\n\n.message.left .msg-detail .msg-content {\n  background-color: #f0f0f0;\n  float: left;\n}\n\n.message.left .msg-detail .msg-content span.triangle {\n  background-color: #f0f0f0;\n  border-bottom-width: 0;\n  border-left-width: 0;\n  left: -5px;\n}\n\n/* End message from other user */\n\n/* Start my messages */\n\n.message.right .msg-detail .msg-info {\n  text-align: right;\n}\n\n.message.right .user-img {\n  right: -5px;\n  border: 1px solid #c8ffe8ab;\n}\n\n.message.right .msg-detail .msg-content {\n  background-color: #c8ffe8;\n  float: right;\n}\n\n.message.right .msg-detail .msg-content span.triangle {\n  background-color: #c8ffe8;\n  border-bottom-width: 0;\n  border-left-width: 0;\n  right: -5px;\n}\n\n/* End my messages */\n\n#messageInput {\n  position: absolute;\n  bottom: 0px;\n  width: 100%;\n  background-color: #ffffff;\n  text-align: center;\n  padding: 10px 0px;\n  height: 30px;\n  border-bottom-left-radius: 6px;\n  border-bottom-right-radius: 6px;\n}\n\n#messageInput input {\n  width: 90%;\n  height: 100%;\n  border: none;\n  outline: none;\n  font-size: 14px;\n  margin-left: -6%;\n}\n\n#sendButton {\n  background-color: #81e9b0;\n  position: absolute;\n  right: 10px;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  border: 1px solid #7ae2a9;\n  box-shadow: none !important;\n}\n\n#sendButton mat-icon {\n  margin-left: 3px !important;\n  margin-bottom: 2px !important;\n}\n\n::-webkit-scrollbar {\n  width: 8px;\n}\n\n::-webkit-scrollbar-thumb {\n  background-color: #6b6b6b;\n}\n\n.chatComponentLight ::-webkit-scrollbar-thumb {\n  background-color: #eeeeee !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbWVudS9jaGF0L2NoYXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7QUFDWDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVCxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLHdCQUF3QjtFQUN4QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7RUFDWixTQUFTO0FBQ1g7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsU0FBUztFQUNULGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixjQUFjO0VBQ2QsV0FBVztFQUNYLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFVBQVU7RUFDVixTQUFTO0VBQ1QsY0FBYztFQUVkLHdCQUF3QjtFQUN4QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUEsa0NBQWtDOztBQUVsQztFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7RUFDViwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztBQUNiOztBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsVUFBVTtBQUNaOztBQUVBLGdDQUFnQzs7QUFFaEMsc0JBQXNCOztBQUV0QjtFQUNFLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLFdBQVc7RUFDWCwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsV0FBVztBQUNiOztBQUVBLG9CQUFvQjs7QUFFcEI7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osOEJBQThCO0VBQzlCLCtCQUErQjtBQUNqQzs7QUFDQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsTUFBTTtFQUNOLFNBQVM7RUFDVCxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLDJCQUEyQjtBQUM3Qjs7QUFDQTtFQUNFLDJCQUEyQjtFQUMzQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEMiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9tZW51L2NoYXQvY2hhdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NoYXRDb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmlucHV0IHtcbiAgZm9udC1mYW1pbHk6ICdVYnVudHUnLCBzYW5zLXNlcmlmO1xufVxuXG4jY2hhdFRvb2xiYXIge1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZDNkM2Q7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDRweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNnB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNnB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuI2Nsb3NlQnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAtNXB4O1xufVxuXG4jY2hhdENvbXBvbmVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiOGI4Yjg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk5OTk7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbWFyZ2luOiBhdXRvO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDMwcHgpO1xuICB3aWR0aDogY2FsYygxMDAlIC0gMzBweCk7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi5tZXNzYWdlLXdyYXAge1xuICBwYWRkaW5nOiAwIDE1cHg7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gODBweCk7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4ubWVzc2FnZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogN3B4IDA7XG59XG4udXNlci1pbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1yYWRpdXM6IDQ1cHg7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIHRvcDogMTVweDtcbn1cblxuLm1zZy1kZXRhaWwge1xuICB3aWR0aDogY2FsYygxMDAlIC0gNjVweCk7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLm1zZy1kZXRhaWwgcCB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4ubXNnLWluZm8gcCB7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi5tc2ctY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDhweDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIHdpZHRoOiBhdXRvO1xuICBtYXgtd2lkdGg6IDk1JTtcbn1cblxuc3Bhbi50cmlhbmdsZSB7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgaGVpZ2h0OiA4cHg7XG4gIHdpZHRoOiA4cHg7XG4gIHRvcDogMTJweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLnRleHQge1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG59XG5cbi8qIFN0YXJ0IG1lc3NhZ2UgZnJvbSBvdGhlciB1c2VyICovXG5cbi5tZXNzYWdlLmxlZnQgLm1zZy1kZXRhaWwgLm1zZy1pbmZvIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLm1lc3NhZ2UubGVmdCAubXNnLWRldGFpbCB7XG4gIHBhZGRpbmctbGVmdDogNjVweDtcbn1cblxuLm1lc3NhZ2UubGVmdCAudXNlci1pbWcge1xuICBsZWZ0OiAtNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjBmMGYwOTQ7XG59XG5cbi5tZXNzYWdlLmxlZnQgLm1zZy1kZXRhaWwgLm1zZy1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4ubWVzc2FnZS5sZWZ0IC5tc2ctZGV0YWlsIC5tc2ctY29udGVudCBzcGFuLnRyaWFuZ2xlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDA7XG4gIGxlZnQ6IC01cHg7XG59XG5cbi8qIEVuZCBtZXNzYWdlIGZyb20gb3RoZXIgdXNlciAqL1xuXG4vKiBTdGFydCBteSBtZXNzYWdlcyAqL1xuXG4ubWVzc2FnZS5yaWdodCAubXNnLWRldGFpbCAubXNnLWluZm8ge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5tZXNzYWdlLnJpZ2h0IC51c2VyLWltZyB7XG4gIHJpZ2h0OiAtNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzhmZmU4YWI7XG59XG5cbi5tZXNzYWdlLnJpZ2h0IC5tc2ctZGV0YWlsIC5tc2ctY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjOGZmZTg7XG4gIGZsb2F0OiByaWdodDtcbn1cbi5tZXNzYWdlLnJpZ2h0IC5tc2ctZGV0YWlsIC5tc2ctY29udGVudCBzcGFuLnRyaWFuZ2xlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M4ZmZlODtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDA7XG4gIHJpZ2h0OiAtNXB4O1xufVxuXG4vKiBFbmQgbXkgbWVzc2FnZXMgKi9cblxuI21lc3NhZ2VJbnB1dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHggMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDZweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDZweDtcbn1cbiNtZXNzYWdlSW5wdXQgaW5wdXQge1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tbGVmdDogLTYlO1xufVxuXG4jc2VuZEJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4MWU5YjA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBtYXJnaW46IGF1dG87XG4gIGJvcmRlcjogMXB4IHNvbGlkICM3YWUyYTk7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cbiNzZW5kQnV0dG9uIG1hdC1pY29uIHtcbiAgbWFyZ2luLWxlZnQ6IDNweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAycHggIWltcG9ydGFudDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA4cHg7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmI2YjZiO1xufVxuXG4uY2hhdENvbXBvbmVudExpZ2h0IDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlICFpbXBvcnRhbnQ7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/shared/components/menu/chat/chat.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/components/menu/chat/chat.component.ts ***!
  \***************************************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/user-model */ "./src/app/shared/models/user-model.ts");
/* harmony import */ var openvidu_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! openvidu-browser */ "./node_modules/openvidu-browser/lib/index.js");
/* harmony import */ var openvidu_browser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(openvidu_browser__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var ChatComponent = /** @class */ (function () {
    function ChatComponent(userSrv) {
        this.userSrv = userSrv;
        this.messageList = [];
        this.closeMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ChatComponent.prototype.onKeydownHandler = function (event) {
        console.log(event);
        if (this._menuOpened) {
            this.close();
        }
    };
    ChatComponent.prototype.ngOnInit = function () { };
    Object.defineProperty(ChatComponent.prototype, "isDisplayed", {
        set: function (display) {
            var _this = this;
            this._menuOpened = display;
            if (this._menuOpened) {
                this.scrollToBottom();
                setTimeout(function () {
                    _this.chatInput.nativeElement.focus();
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    ChatComponent.prototype.eventKeyPress = function (event) {
        if (event && event.keyCode === 13) {
            // Press Enter
            this.sendMessage();
        }
    };
    ChatComponent.prototype.sendMessage = function () {
        if (this.user && this.message) {
            this.message = this.message.replace(/ +(?= )/g, '');
            if (this.message !== '' && this.message !== ' ') {
                var data = {
                    connectionId: this.user.getConnectionId(),
                    message: this.message,
                    nickname: this.user.getNickname(),
                };
                this.session.signal({
                    data: JSON.stringify(data),
                    to: this.connections,
                    type: this.signal,
                });
                this.message = '';
            }
        }
    };
    ChatComponent.prototype.scrollToBottom = function () {
        var _this = this;
        setTimeout(function () {
            try {
                _this.chatScroll.nativeElement.scrollTop = _this.chatScroll.nativeElement.scrollHeight;
            }
            catch (err) { }
        }, 20);
    };
    ChatComponent.prototype.close = function () {
        this.closeMenu.emit();
    };
    ChatComponent.ctorParameters = function () { return [
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('chatScroll', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ChatComponent.prototype, "chatScroll", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('chatInput', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ChatComponent.prototype, "chatInput", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", String)
    ], ChatComponent.prototype, "signal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", openvidu_browser__WEBPACK_IMPORTED_MODULE_3__["Session"])
    ], ChatComponent.prototype, "session", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", openvidu_browser__WEBPACK_IMPORTED_MODULE_3__["Session"])
    ], ChatComponent.prototype, "sessionScreen", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", _models_user_model__WEBPACK_IMPORTED_MODULE_2__["UserModel"])
    ], ChatComponent.prototype, "user", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Boolean)
    ], ChatComponent.prototype, "lightTheme", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", String)
    ], ChatComponent.prototype, "roomName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Array)
    ], ChatComponent.prototype, "connections", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Array)
    ], ChatComponent.prototype, "messageList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", Object)
    ], ChatComponent.prototype, "closeMenu", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:keydown.escape', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], ChatComponent.prototype, "onKeydownHandler", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('menuOpened'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], ChatComponent.prototype, "isDisplayed", null);
    ChatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'chat-component',
            template: __importDefault(__webpack_require__(/*! raw-loader!./chat.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/menu/chat/chat.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./chat.component.css */ "./src/app/shared/components/menu/chat/chat.component.css")).default]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"]])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/stream/ov-video.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/stream/ov-video.component.ts ***!
  \****************************************************************/
/*! exports provided: OpenViduVideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenViduVideoComponent", function() { return OpenViduVideoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var openvidu_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! openvidu-browser */ "./node_modules/openvidu-browser/lib/index.js");
/* harmony import */ var openvidu_browser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(openvidu_browser__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var OpenViduVideoComponent = /** @class */ (function () {
    function OpenViduVideoComponent() {
    }
    OpenViduVideoComponent.prototype.ngAfterViewInit = function () {
        if (this._streamManager) {
            this._streamManager.addVideoElement(this.elementRef.nativeElement);
        }
    };
    Object.defineProperty(OpenViduVideoComponent.prototype, "streamManager", {
        set: function (streamManager) {
            this._streamManager = streamManager;
            if (!!this.elementRef && this._streamManager) {
                if (this._streamManager.stream.typeOfVideo === 'SCREEN') {
                    this.elementRef.nativeElement.style.objectFit = 'contain';
                    this.elementRef.nativeElement.style.background = '#878787';
                }
                else {
                    this.elementRef.nativeElement.style.objectFit = 'cover';
                }
                this._streamManager.addVideoElement(this.elementRef.nativeElement);
            }
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('videoElement', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], OpenViduVideoComponent.prototype, "elementRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], OpenViduVideoComponent.prototype, "mutedSound", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", openvidu_browser__WEBPACK_IMPORTED_MODULE_1__["StreamManager"]),
        __metadata("design:paramtypes", [openvidu_browser__WEBPACK_IMPORTED_MODULE_1__["StreamManager"]])
    ], OpenViduVideoComponent.prototype, "streamManager", null);
    OpenViduVideoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ov-video',
            template: "\n    <video\n      #videoElement\n      [attr.id]=\"streamManager && _streamManager.stream ? 'video-' + _streamManager.stream.streamId : 'video-undefined'\"\n      [muted]=\"mutedSound\"\n    ></video>\n  ",
            styles: [__importDefault(__webpack_require__(/*! ./stream.component.css */ "./src/app/shared/components/stream/stream.component.css")).default]
        })
    ], OpenViduVideoComponent);
    return OpenViduVideoComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/stream/stream.component.css":
/*!***************************************************************!*\
  !*** ./src/app/shared/components/stream/stream.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".nickname {\n  padding: 5px !important;\n  position: absolute;\n  z-index: 999;\n  border-radius: 5px; \n  color: #313131;\n  font-family: 'Ubuntu', sans-serif;\n}\n\n#dialogNickname {\n  background-color:  #fffffffb;\n  border-radius: 8px;\n}\n\n#closeButton {\n  position: absolute;\n  top: -3px;\n  right: 0;\n  z-index: 999;\n}\n\n#nicknameForm {\n  padding: 10px;\n}\n\n.fullscreen {\n  top: 40px;\n}\n\nmat-error {\n  text-align: center;\n  color: #353535;\n}\n\nvideo {\n  -o-object-fit: cover;\n  object-fit: cover;\n  width: 100%;\n  height: 100%;\n  color: #ffffff;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n}\n\n.statusIcons {\n  bottom: 0;\n  left: 5px;\n  width: 40px;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  position: absolute;\n  color: #ffffff;\n}\n\n.statusIcons mat-icon {\n  padding: 8px;\n}\n\n#camStatus {\n  bottom: 43px;\n}\n\n#statusCam, #statusMic { \n  border-radius: 50%;\n  background: #c71100;\n  margin: 5px 0px;\n}\n\n.streamButtons {\n  position: absolute;\n  z-index: 1000;\n  background-color: #000000c4;\n  right: 1px;\n}\n\n#fullscreenButton {\n  bottom: 1px;\n}\n\n#volumeButton {\n  bottom: 45px;\n}\n\n/* Contains the video element, used to fix video letter-boxing */\n\n.OT_widget-container {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  overflow: hidden;\n}\n\n::ng-deep .mat-form-field-appearance-legacy .mat-form-field-label {\n  color: #696969;\n}\n\n::ng-deep .mat-form-field-appearance-legacy .mat-form-field-underline{\n  background-color: #444444 !important;\n}\n\n::ng-deep .mat-form-field.mat-focused .mat-form-field-ripple{\n  background-color: #696969 !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc3RyZWFtL3N0cmVhbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0VBQ1IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUNBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztFQUNkLFNBQVM7RUFDVCxVQUFVO0VBQ1YsU0FBUztFQUNULGVBQWU7QUFDakI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsU0FBUztFQUNULFdBQVc7RUFDWCwyQkFBbUI7RUFBbkIsd0JBQW1CO0VBQW5CLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFDQTtFQUNFLFlBQVk7QUFDZDs7QUFDQSxnRUFBZ0U7O0FBQ2hFO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLG9DQUFvQztBQUN0QyIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3N0cmVhbS9zdHJlYW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uaWNrbmFtZSB7XG4gIHBhZGRpbmc6IDVweCAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk5OTtcbiAgYm9yZGVyLXJhZGl1czogNXB4OyBcbiAgY29sb3I6ICMzMTMxMzE7XG4gIGZvbnQtZmFtaWx5OiAnVWJ1bnR1Jywgc2Fucy1zZXJpZjtcbn1cblxuI2RpYWxvZ05pY2tuYW1lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogICNmZmZmZmZmYjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4jY2xvc2VCdXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTNweDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDk5OTtcbn1cblxuI25pY2tuYW1lRm9ybSB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uZnVsbHNjcmVlbiB7XG4gIHRvcDogNDBweDtcbn1cblxubWF0LWVycm9yIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzM1MzUzNTtcbn1cblxudmlkZW8ge1xuICAtby1vYmplY3QtZml0OiBjb3ZlcjtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbiAgZm9udC1zaXplOiAxMDAlO1xufVxuXG4uc3RhdHVzSWNvbnMge1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDVweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5zdGF0dXNJY29ucyBtYXQtaWNvbiB7XG4gIHBhZGRpbmc6IDhweDtcbn1cblxuI2NhbVN0YXR1cyB7XG4gIGJvdHRvbTogNDNweDtcbn1cblxuI3N0YXR1c0NhbSwgI3N0YXR1c01pYyB7IFxuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICNjNzExMDA7XG4gIG1hcmdpbjogNXB4IDBweDtcbn1cblxuLnN0cmVhbUJ1dHRvbnMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDEwMDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDBjNDtcbiAgcmlnaHQ6IDFweDtcbn1cblxuI2Z1bGxzY3JlZW5CdXR0b24ge1xuICBib3R0b206IDFweDtcbn1cbiN2b2x1bWVCdXR0b24ge1xuICBib3R0b206IDQ1cHg7XG59XG4vKiBDb250YWlucyB0aGUgdmlkZW8gZWxlbWVudCwgdXNlZCB0byBmaXggdmlkZW8gbGV0dGVyLWJveGluZyAqL1xuLk9UX3dpZGdldC1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgY29sb3I6ICM2OTY5Njk7XG59XG5cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZXtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDQ0NCAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1yaXBwbGV7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2OTY5NjkgIWltcG9ydGFudDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/shared/components/stream/stream.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/stream/stream.component.ts ***!
  \**************************************************************/
/*! exports provided: StreamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StreamComponent", function() { return StreamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/user-model */ "./src/app/shared/models/user-model.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _forms_matchers_nickname__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../forms-matchers/nickname */ "./src/app/shared/forms-matchers/nickname.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/shared/services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var StreamComponent = /** @class */ (function () {
    function StreamComponent(apiSrv) {
        this.apiSrv = apiSrv;
        this.fullscreenIcon = 'fullscreen';
        this.nicknameClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.micButtonClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.camButtonClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.screenShareClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.stopScreenSharingClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.exitButtonClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.menuButtonClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    StreamComponent.prototype.sizeChange = function (event) {
        var maxHeight = window.screen.height;
        var maxWidth = window.screen.width;
        var curHeight = window.innerHeight;
        var curWidth = window.innerWidth;
        if (maxWidth !== curWidth && maxHeight !== curHeight) {
            this.isFullscreen = false;
            this.fullscreenIcon = 'fullscreen';
        }
    };
    StreamComponent.prototype.ngOnInit = function () {
        this.nicknameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.user.getNickname(), [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(25), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.matcher = new _forms_matchers_nickname__WEBPACK_IMPORTED_MODULE_3__["NicknameMatcher"]();
    };
    StreamComponent.prototype.toggleFullscreen = function () {
        var state = this.apiSrv.toggleFullscreen('container-' + this.user.getStreamManager().stream.streamId);
        if (state === 'fullscreen') {
            this.isFullscreen = true;
            this.fullscreenIcon = 'fullscreen_exit';
            if (this.menuOpened) {
                this.menuButtonClicked.emit();
            }
        }
        else {
            this.isFullscreen = false;
            this.fullscreenIcon = 'fullscreen';
        }
    };
    StreamComponent.prototype.toggleSound = function () {
        this.mutedSound = !this.mutedSound;
    };
    StreamComponent.prototype.toggleNicknameForm = function () {
        var _this = this;
        if (this.canEditNickname) {
            this.toggleNickname = !this.toggleNickname;
            setTimeout(function () {
                if (_this.nicknameInput.nativeElement) {
                    _this.nicknameInput.nativeElement.focus();
                }
            });
        }
    };
    StreamComponent.prototype.eventKeyPress = function (event) {
        if (event && event.keyCode === 13 && this.nicknameFormControl.valid) {
            this.nicknameClicked.emit(this.nicknameFormControl.value);
            this.toggleNicknameForm();
        }
    };
    StreamComponent.prototype.toggleMic = function () {
        this.micButtonClicked.emit();
    };
    StreamComponent.prototype.toggleCam = function () {
        this.camButtonClicked.emit();
    };
    StreamComponent.prototype.screenShare = function () {
        this.screenShareClicked.emit();
    };
    StreamComponent.prototype.stopScreenSharing = function () {
        this.stopScreenSharingClicked.emit();
    };
    StreamComponent.prototype.exitSession = function () {
        this.exitButtonClicked.emit();
    };
    StreamComponent.prototype.toggleMenu = function () {
        this.toggleFullscreen();
        if (!this.menuOpened) {
            this.menuButtonClicked.emit();
        }
    };
    StreamComponent.ctorParameters = function () { return [
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_user_model__WEBPACK_IMPORTED_MODULE_1__["UserModel"])
    ], StreamComponent.prototype, "user", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_user_model__WEBPACK_IMPORTED_MODULE_1__["UserModel"])
    ], StreamComponent.prototype, "localUser", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], StreamComponent.prototype, "lightTheme", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], StreamComponent.prototype, "compact", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], StreamComponent.prototype, "menuOpened", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], StreamComponent.prototype, "newMessagesNum", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], StreamComponent.prototype, "canEditNickname", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], StreamComponent.prototype, "nicknameClicked", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], StreamComponent.prototype, "micButtonClicked", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], StreamComponent.prototype, "camButtonClicked", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], StreamComponent.prototype, "screenShareClicked", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], StreamComponent.prototype, "stopScreenSharingClicked", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], StreamComponent.prototype, "exitButtonClicked", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], StreamComponent.prototype, "menuButtonClicked", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('videoReference', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], StreamComponent.prototype, "htmlVideoElement", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('nicknameInput', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], StreamComponent.prototype, "nicknameInput", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], StreamComponent.prototype, "sizeChange", null);
    StreamComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'stream-component',
            template: __importDefault(__webpack_require__(/*! raw-loader!./stream.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/stream/stream.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./stream.component.css */ "./src/app/shared/components/stream/stream.component.css")).default]
        }),
        __metadata("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]])
    ], StreamComponent);
    return StreamComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/toolbar/toolbar.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/shared/components/toolbar/toolbar.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#header {\n    color: #ffffff;\n    height: 40px;\n    background-color: #333333;\n    padding: 0 14px 0 0;\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: 999999;\n    min-width: 400px !important;\n}\n\n.headerLight {\n    color: #706969 !important;\n    background-color: #eeeeee !important;\n}\n\n#navSessionInfo {\n    height: 100%;\n    display: inline-flex;\n}\n\n#navChatButton .mat-badge-medium.mat-badge-overlap.mat-badge-before .mat-badge-content {\n    left: -17px;\n}\n\n#navChatButton .mat-badge-medium.mat-badge-above .mat-badge-content {\n    top: -6px;\n}\n\n.mat-icon-button[disabled] {\n    color: #fff;\n}\n\n#navButtons {\n    position: absolute;\n    left: 0;\n    right: 0;\n    min-width: 400px;\n}\n\n#navMenuButton {\n    position: absolute;\n    right: 10px;\n    top: none;\n}\n\n#titleContent {\n    font-family: 'Ubuntu', sans-serif;\n    max-width: 100px;\n    background-color: #494949;\n    margin: 5px -18px;\n    padding: 0px 15px;\n    font-size: 16px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n.titleContentLight {\n    background-color: #dfdfdf !important;\n    color: #000;\n}\n\n#header_img {\n    max-width: 135px;\n    margin-right: 10px;\n    margin-top: -3px;\n}\n\n#point {\n    width: 10px;\n    height: 10px;\n    position: absolute;\n    top: 12px;\n    right: 33px;\n    border-radius: 50%;\n    background-color: #ffa600;\n    border: 1px solid #000;\n    z-index: 99999;\n}\n\n.pointLight {\n    border: 1px solid #ffffff !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdG9vbGJhci90b29sYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsZUFBZTtJQUNmLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxRQUFRO0lBQ1IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdG9vbGJhci90b29sYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaGVhZGVyIHtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcbiAgICBwYWRkaW5nOiAwIDE0cHggMCAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiA5OTk5OTk7XG4gICAgbWluLXdpZHRoOiA0MDBweCAhaW1wb3J0YW50O1xufVxuXG4uaGVhZGVyTGlnaHQge1xuICAgIGNvbG9yOiAjNzA2OTY5ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZSAhaW1wb3J0YW50O1xufVxuXG4jbmF2U2Vzc2lvbkluZm8ge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbn1cblxuI25hdkNoYXRCdXR0b24gLm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgIGxlZnQ6IC0xN3B4O1xufVxuXG4jbmF2Q2hhdEJ1dHRvbiAubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2UtYWJvdmUgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICB0b3A6IC02cHg7XG59XG5cbi5tYXQtaWNvbi1idXR0b25bZGlzYWJsZWRdIHtcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuI25hdkJ1dHRvbnMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIG1pbi13aWR0aDogNDAwcHg7XG59XG5cbiNuYXZNZW51QnV0dG9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgdG9wOiBub25lO1xufVxuXG4jdGl0bGVDb250ZW50IHtcbiAgICBmb250LWZhbWlseTogJ1VidW50dScsIHNhbnMtc2VyaWY7XG4gICAgbWF4LXdpZHRoOiAxMDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk0OTQ5O1xuICAgIG1hcmdpbjogNXB4IC0xOHB4O1xuICAgIHBhZGRpbmc6IDBweCAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4udGl0bGVDb250ZW50TGlnaHQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZmRmZGYgIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzAwMDtcbn1cblxuI2hlYWRlcl9pbWcge1xuICAgIG1heC13aWR0aDogMTM1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IC0zcHg7XG59XG5cbiNwb2ludCB7XG4gICAgd2lkdGg6IDEwcHg7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEycHg7XG4gICAgcmlnaHQ6IDMzcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmE2MDA7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbiAgICB6LWluZGV4OiA5OTk5OTtcbn1cblxuLnBvaW50TGlnaHQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmYgIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/shared/components/toolbar/toolbar.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/toolbar/toolbar.component.ts ***!
  \****************************************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var _services_room_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/room.service */ "./src/app/shared/services/room.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/user-model */ "./src/app/shared/models/user-model.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/shared/services/api.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






var ToolbarComponent = /** @class */ (function () {
    function ToolbarComponent(apiSrv, userService, roomSrv, urlSnackBar) {
        this.apiSrv = apiSrv;
        this.userService = userService;
        this.roomSrv = roomSrv;
        this.urlSnackBar = urlSnackBar;
        this.fullscreenIcon = 'fullscreen';
        this.micButtonClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.camButtonClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.screenShareClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.exitButtonClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.menuButtonClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.stopScreenSharingClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    ToolbarComponent.prototype.sizeChange = function (event) {
        var maxHeight = window.screen.height;
        var maxWidth = window.screen.width;
        var curHeight = window.innerHeight;
        var curWidth = window.innerWidth;
        if (maxWidth !== curWidth && maxHeight !== curHeight) {
            this.fullscreenIcon = 'fullscreen';
        }
    };
    ToolbarComponent.prototype.ngOnInit = function () { };
    ToolbarComponent.prototype.micStatusChanged = function () {
        this.micButtonClicked.emit();
    };
    ToolbarComponent.prototype.camStatusChanged = function () {
        this.camButtonClicked.emit();
    };
    ToolbarComponent.prototype.screenShare = function () {
        this.screenShareClicked.emit();
    };
    ToolbarComponent.prototype.stopScreenSharing = function () {
        this.stopScreenSharingClicked.emit();
    };
    ToolbarComponent.prototype.exitSession = function () {
        this.exitButtonClicked.emit();
    };
    ToolbarComponent.prototype.toggleMenu = function () {
        this.menuButtonClicked.emit();
    };
    ToolbarComponent.prototype.getInviteURL = function (role) {
        var _this = this;
        this.roomSrv.getRoomCode(this.mySessionId, role).subscribe(function (code) {
            var url = window.location.origin + '/#/invite/' + code;
            _this.urlSnackBar.open(url, 'Close');
        }, function (error) { return console.error(error); });
    };
    ToolbarComponent.prototype.toggleFullscreen = function () {
        var state = this.apiSrv.toggleFullscreen('videoRoomNavBar');
        if (state === 'fullscreen') {
            this.fullscreenIcon = 'fullscreen_exit';
        }
        else {
            this.fullscreenIcon = 'fullscreen';
        }
    };
    ToolbarComponent.ctorParameters = function () { return [
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] },
        { type: _services_room_service__WEBPACK_IMPORTED_MODULE_0__["RoomService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", Boolean)
    ], ToolbarComponent.prototype, "lightTheme", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", String)
    ], ToolbarComponent.prototype, "mySessionId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", _models_user_model__WEBPACK_IMPORTED_MODULE_3__["UserModel"])
    ], ToolbarComponent.prototype, "localUser", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", Boolean)
    ], ToolbarComponent.prototype, "compact", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", Boolean)
    ], ToolbarComponent.prototype, "showNotification", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", Number)
    ], ToolbarComponent.prototype, "newMessagesNum", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", Object)
    ], ToolbarComponent.prototype, "ovSettings", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        __metadata("design:type", Object)
    ], ToolbarComponent.prototype, "micButtonClicked", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        __metadata("design:type", Object)
    ], ToolbarComponent.prototype, "camButtonClicked", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        __metadata("design:type", Object)
    ], ToolbarComponent.prototype, "screenShareClicked", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        __metadata("design:type", Object)
    ], ToolbarComponent.prototype, "exitButtonClicked", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        __metadata("design:type", Object)
    ], ToolbarComponent.prototype, "menuButtonClicked", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        __metadata("design:type", Object)
    ], ToolbarComponent.prototype, "stopScreenSharingClicked", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ToolbarComponent.prototype, "sizeChange", null);
    ToolbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-toolbar',
            template: __importDefault(__webpack_require__(/*! raw-loader!./toolbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/toolbar/toolbar.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./toolbar.component.css */ "./src/app/shared/components/toolbar/toolbar.component.css")).default]
        }),
        __metadata("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _services_room_service__WEBPACK_IMPORTED_MODULE_0__["RoomService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
    ], ToolbarComponent);
    return ToolbarComponent;
}());



/***/ }),

/***/ "./src/app/shared/forms-matchers/nickname.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/forms-matchers/nickname.ts ***!
  \***************************************************/
/*! exports provided: NicknameMatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NicknameMatcher", function() { return NicknameMatcher; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
/** Error when invalid control is dirty, touched, or submitted. */
var NicknameMatcher = /** @class */ (function () {
    function NicknameMatcher() {
    }
    NicknameMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return NicknameMatcher;
}());



/***/ }),

/***/ "./src/app/shared/layout/openvidu-layout.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/layout/openvidu-layout.ts ***!
  \**************************************************/
/*! exports provided: OpenViduLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenViduLayout", function() { return OpenViduLayout; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var OpenViduLayout = /** @class */ (function () {
    function OpenViduLayout() {
    }
    /**
     * Update the layout container
     */
    OpenViduLayout.prototype.updateLayout = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.layoutContainer.style.display === 'none') {
                return;
            }
            var id = _this.layoutContainer.id;
            if (!id) {
                id = 'OT_' + _this.cheapUUID();
                _this.layoutContainer.id = id;
            }
            var HEIGHT = _this.getHeight(_this.layoutContainer) -
                _this.getCSSNumber(_this.layoutContainer, 'borderTop') -
                _this.getCSSNumber(_this.layoutContainer, 'borderBottom');
            var WIDTH = _this.getWidth(_this.layoutContainer) -
                _this.getCSSNumber(_this.layoutContainer, 'borderLeft') -
                _this.getCSSNumber(_this.layoutContainer, 'borderRight');
            var availableRatio = HEIGHT / WIDTH;
            var offsetLeft = 0;
            var offsetTop = 0;
            var bigOffsetTop = 0;
            var bigOffsetLeft = 0;
            var bigOnes = Array.prototype.filter.call(_this.layoutContainer.querySelectorAll('#' + id + '>.' + _this.opts.bigClass), _this.filterDisplayNone);
            var smallOnes = Array.prototype.filter.call(_this.layoutContainer.querySelectorAll('#' + id + '>*:not(.' + _this.opts.bigClass + ')'), _this.filterDisplayNone);
            if (bigOnes.length > 0 && smallOnes.length > 0) {
                var bigWidth = void 0, bigHeight = void 0;
                if (availableRatio > _this.getVideoRatio(bigOnes[0])) {
                    // We are tall, going to take up the whole width and arrange small
                    // guys at the bottom
                    bigWidth = WIDTH;
                    bigHeight = Math.floor(HEIGHT * _this.opts.bigPercentage);
                    offsetTop = bigHeight;
                    bigOffsetTop = HEIGHT - offsetTop;
                }
                else {
                    // We are wide, going to take up the whole height and arrange the small
                    // guys on the right
                    bigHeight = HEIGHT;
                    bigWidth = Math.floor(WIDTH * _this.opts.bigPercentage);
                    offsetLeft = bigWidth;
                    bigOffsetLeft = WIDTH - offsetLeft;
                }
                if (_this.opts.bigFirst) {
                    _this.arrange(bigOnes, bigWidth, bigHeight, 0, 0, _this.opts.bigFixedRatio, _this.opts.bigMinRatio, _this.opts.bigMaxRatio, _this.opts.animate);
                    _this.arrange(smallOnes, WIDTH - offsetLeft, HEIGHT - offsetTop, offsetLeft, offsetTop, _this.opts.fixedRatio, _this.opts.minRatio, _this.opts.maxRatio, _this.opts.animate);
                }
                else {
                    _this.arrange(smallOnes, WIDTH - offsetLeft, HEIGHT - offsetTop, 0, 0, _this.opts.fixedRatio, _this.opts.minRatio, _this.opts.maxRatio, _this.opts.animate);
                    _this.arrange(bigOnes, bigWidth, bigHeight, bigOffsetLeft, bigOffsetTop, _this.opts.bigFixedRatio, _this.opts.bigMinRatio, _this.opts.bigMaxRatio, _this.opts.animate);
                }
            }
            else if (bigOnes.length > 0 && smallOnes.length === 0) {
                _this
                    // We only have one bigOne just center it
                    .arrange(bigOnes, WIDTH, HEIGHT, 0, 0, _this.opts.bigFixedRatio, _this.opts.bigMinRatio, _this.opts.bigMaxRatio, _this.opts.animate);
            }
            else {
                _this.arrange(smallOnes, WIDTH - offsetLeft, HEIGHT - offsetTop, offsetLeft, offsetTop, _this.opts.fixedRatio, _this.opts.minRatio, _this.opts.maxRatio, _this.opts.animate);
            }
        }, 50);
    };
    /**
     * Initialize the layout inside of the container with the options required
     * @param container
     * @param opts
     */
    OpenViduLayout.prototype.initLayoutContainer = function (container, opts) {
        this.opts = {
            maxRatio: opts.maxRatio != null ? opts.maxRatio : 3 / 2,
            minRatio: opts.minRatio != null ? opts.minRatio : 9 / 16,
            fixedRatio: opts.fixedRatio != null ? opts.fixedRatio : false,
            animate: opts.animate != null ? opts.animate : false,
            bigClass: opts.bigClass != null ? opts.bigClass : 'OT_big',
            bigPercentage: opts.bigPercentage != null ? opts.bigPercentage : 0.8,
            bigFixedRatio: opts.bigFixedRatio != null ? opts.bigFixedRatio : false,
            bigMaxRatio: opts.bigMaxRatio != null ? opts.bigMaxRatio : 3 / 2,
            bigMinRatio: opts.bigMinRatio != null ? opts.bigMinRatio : 9 / 16,
            bigFirst: opts.bigFirst != null ? opts.bigFirst : true,
        };
        this.layoutContainer = typeof container === 'string' ? $(container) : container;
    };
    /**
     * Set the layout configuration
     * @param options
     */
    OpenViduLayout.prototype.setLayoutOptions = function (options) {
        this.opts = options;
    };
    /**
     * @hidden
     */
    OpenViduLayout.prototype.fixAspectRatio = function (elem, width) {
        var sub = elem.querySelector('.OT_root');
        if (sub) {
            // If this is the parent of a subscriber or publisher then we need
            // to force the mutation observer on the publisher or subscriber to
            // trigger to get it to fix it's layout
            var oldWidth = sub.style.width;
            sub.style.width = width + 'px';
            // sub.style.height = height + 'px';
            sub.style.width = oldWidth || '';
        }
    };
    /**
     * @hidden
     */
    OpenViduLayout.prototype.positionElement = function (elem, x, y, width, height, animate) {
        var _this = this;
        var targetPosition = {
            left: x + 'px',
            top: y + 'px',
            width: width + 'px',
            height: height + 'px',
        };
        this.fixAspectRatio(elem, width);
        if (animate && $) {
            $(elem).stop();
            $(elem).animate(targetPosition, animate.duration || 200, animate.easing || 'swing', function () {
                _this.fixAspectRatio(elem, width);
                if (animate.complete) {
                    animate.complete.call(_this);
                }
            });
        }
        else {
            $(elem).css(targetPosition);
        }
        this.fixAspectRatio(elem, width);
    };
    /**
     * @hidden
     */
    OpenViduLayout.prototype.getVideoRatio = function (elem) {
        if (!elem) {
            return 3 / 4;
        }
        var video = elem.querySelector('video');
        if (video && video.videoHeight && video.videoWidth) {
            return video.videoHeight / video.videoWidth;
        }
        else if (elem.videoHeight && elem.videoWidth) {
            return elem.videoHeight / elem.videoWidth;
        }
        return 3 / 4;
    };
    /**
     * @hidden
     */
    OpenViduLayout.prototype.getCSSNumber = function (elem, prop) {
        var cssStr = $(elem).css(prop);
        return cssStr ? parseInt(cssStr, 10) : 0;
    };
    /**
     * @hidden
     */
    // Really cheap UUID function
    OpenViduLayout.prototype.cheapUUID = function () {
        return (Math.random() * 100000000).toFixed(0);
    };
    /**
     * @hidden
     */
    OpenViduLayout.prototype.getHeight = function (elem) {
        var heightStr = $(elem).css('height');
        return heightStr ? parseInt(heightStr, 10) : 0;
    };
    /**
     * @hidden
     */
    OpenViduLayout.prototype.getWidth = function (elem) {
        var widthStr = $(elem).css('width');
        return widthStr ? parseInt(widthStr, 10) : 0;
    };
    /**
     * @hidden
     */
    OpenViduLayout.prototype.getBestDimensions = function (minR, maxR, count, WIDTH, HEIGHT, targetHeight) {
        var maxArea, targetCols, targetRows, targetWidth, tWidth, tHeight, tRatio;
        // Iterate through every possible combination of rows and columns
        // and see which one has the least amount of whitespace
        for (var i = 1; i <= count; i++) {
            var colsAux = i;
            var rowsAux = Math.ceil(count / colsAux);
            // Try taking up the whole height and width
            tHeight = Math.floor(HEIGHT / rowsAux);
            tWidth = Math.floor(WIDTH / colsAux);
            tRatio = tHeight / tWidth;
            if (tRatio > maxR) {
                // We went over decrease the height
                tRatio = maxR;
                tHeight = tWidth * tRatio;
            }
            else if (tRatio < minR) {
                // We went under decrease the width
                tRatio = minR;
                tWidth = tHeight / tRatio;
            }
            var area = tWidth * tHeight * count;
            // If this width and height takes up the most space then we're going with that
            if (maxArea === undefined || area > maxArea) {
                maxArea = area;
                targetHeight = tHeight;
                targetWidth = tWidth;
                targetCols = colsAux;
                targetRows = rowsAux;
            }
        }
        return {
            maxArea: maxArea,
            targetCols: targetCols,
            targetRows: targetRows,
            targetHeight: targetHeight,
            targetWidth: targetWidth,
            ratio: targetHeight / targetWidth,
        };
    };
    /**
     * @hidden
     */
    OpenViduLayout.prototype.arrange = function (children, WIDTH, HEIGHT, offsetLeft, offsetTop, fixedRatio, minRatio, maxRatio, animate) {
        var targetHeight;
        var count = children.length;
        var dimensions;
        if (!fixedRatio) {
            dimensions = this.getBestDimensions(minRatio, maxRatio, count, WIDTH, HEIGHT, targetHeight);
        }
        else {
            // Use the ratio of the first video element we find to approximate
            var ratio = this.getVideoRatio(children.length > 0 ? children[0] : null);
            dimensions = this.getBestDimensions(ratio, ratio, count, WIDTH, HEIGHT, targetHeight);
        }
        // Loop through each stream in the container and place it inside
        var x = 0, y = 0;
        var rows = [];
        var row;
        // Iterate through the children and create an array with a new item for each row
        // and calculate the width of each row so that we know if we go over the size and need
        // to adjust
        for (var i = 0; i < children.length; i++) {
            if (i % dimensions.targetCols === 0) {
                // This is a new row
                row = {
                    children: [],
                    width: 0,
                    height: 0,
                };
                rows.push(row);
            }
            var elem = children[i];
            row.children.push(elem);
            var targetWidth = dimensions.targetWidth;
            targetHeight = dimensions.targetHeight;
            // If we're using a fixedRatio then we need to set the correct ratio for this element
            if (fixedRatio) {
                targetWidth = targetHeight / this.getVideoRatio(elem);
            }
            row.width += targetWidth;
            row.height = targetHeight;
        }
        // Calculate total row height adjusting if we go too wide
        var totalRowHeight = 0;
        var remainingShortRows = 0;
        for (var i = 0; i < rows.length; i++) {
            row = rows[i];
            if (row.width > WIDTH) {
                // Went over on the width, need to adjust the height proportionally
                row.height = Math.floor(row.height * (WIDTH / row.width));
                row.width = WIDTH;
            }
            else if (row.width < WIDTH) {
                remainingShortRows += 1;
            }
            totalRowHeight += row.height;
        }
        if (totalRowHeight < HEIGHT && remainingShortRows > 0) {
            // We can grow some of the rows, we're not taking up the whole height
            var remainingHeightDiff = HEIGHT - totalRowHeight;
            totalRowHeight = 0;
            for (var i = 0; i < rows.length; i++) {
                row = rows[i];
                if (row.width < WIDTH) {
                    // Evenly distribute the extra height between the short rows
                    var extraHeight = remainingHeightDiff / remainingShortRows;
                    if (extraHeight / row.height > (WIDTH - row.width) / row.width) {
                        // We can't go that big or we'll go too wide
                        extraHeight = Math.floor(((WIDTH - row.width) / row.width) * row.height);
                    }
                    row.width += Math.floor((extraHeight / row.height) * row.width);
                    row.height += extraHeight;
                    remainingHeightDiff -= extraHeight;
                    remainingShortRows -= 1;
                }
                totalRowHeight += row.height;
            }
        }
        // vertical centering
        y = (HEIGHT - totalRowHeight) / 2;
        // Iterate through each row and place each child
        for (var i = 0; i < rows.length; i++) {
            row = rows[i];
            // center the row
            var rowMarginLeft = (WIDTH - row.width) / 2;
            x = rowMarginLeft;
            for (var j = 0; j < row.children.length; j++) {
                var elem = row.children[j];
                var targetWidth = dimensions.targetWidth;
                targetHeight = row.height;
                // If we're using a fixedRatio then we need to set the correct ratio for this element
                if (fixedRatio) {
                    targetWidth = Math.floor(targetHeight / this.getVideoRatio(elem));
                }
                elem.style.position = 'absolute';
                // $(elem).css('position', 'absolute');
                var actualWidth = targetWidth -
                    this.getCSSNumber(elem, 'paddingLeft') -
                    this.getCSSNumber(elem, 'paddingRight') -
                    this.getCSSNumber(elem, 'marginLeft') -
                    this.getCSSNumber(elem, 'marginRight') -
                    this.getCSSNumber(elem, 'borderLeft') -
                    this.getCSSNumber(elem, 'borderRight');
                var actualHeight = targetHeight -
                    this.getCSSNumber(elem, 'paddingTop') -
                    this.getCSSNumber(elem, 'paddingBottom') -
                    this.getCSSNumber(elem, 'marginTop') -
                    this.getCSSNumber(elem, 'marginBottom') -
                    this.getCSSNumber(elem, 'borderTop') -
                    this.getCSSNumber(elem, 'borderBottom');
                this.positionElement(elem, x + offsetLeft, y + offsetTop, actualWidth, actualHeight, animate);
                x += targetWidth;
            }
            y += targetHeight;
        }
    };
    /**
     * @hidden
     */
    OpenViduLayout.prototype.filterDisplayNone = function (element) {
        return element.style.display !== 'none';
    };
    return OpenViduLayout;
}());



/***/ }),

/***/ "./src/app/shared/models/user-model.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/models/user-model.ts ***!
  \*********************************************/
/*! exports provided: UserModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModel", function() { return UserModel; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
/**
 * Packs all the information about the user
 */
var UserModel = /** @class */ (function () {
    /**
     * @hidden
     */
    function UserModel() {
        this.connectionId = '';
        this.audioActive = true;
        this.videoActive = true;
        this.screenShareActive = false;
        this.nickname = '';
        this.streamManager = null;
        this.type = 'local';
    }
    /**
     * Return `true` if audio track is active and `false` if audio track is muted
     */
    UserModel.prototype.isAudioActive = function () {
        return this.audioActive;
    };
    /**
     * Return `true` if video track is active and `false` if video track is muted
     */
    UserModel.prototype.isVideoActive = function () {
        return this.videoActive;
    };
    /**
     * Return `true` if user is sharing the screen and `false` if not
     */
    UserModel.prototype.isScreenShareActive = function () {
        return this.screenShareActive;
    };
    /**
     * Return the connection ID
     */
    UserModel.prototype.getConnectionId = function () {
        return this.connectionId;
    };
    /**
     * @hidden
     */
    UserModel.prototype.getLocalConnectionId = function () {
        return this.localConnectionId;
    };
    /**
     * Return the user nickname
     */
    UserModel.prototype.getNickname = function () {
        return this.nickname;
    };
    /**
     * Return the [[streamManger]] object
     */
    UserModel.prototype.getStreamManager = function () {
        return this.streamManager;
    };
    /**
     * Return the user avatar
     */
    UserModel.prototype.getAvatar = function () {
        return this.videoAvatar ? this.videoAvatar.toDataURL() : this.randomAvatar;
    };
    /**
     * Return `true` if user has a local role and `false` if not
     */
    UserModel.prototype.isLocal = function () {
        return this.type === 'local';
    };
    /**
     * Return `true` if user has a remote role and `false` if not
     */
    UserModel.prototype.isRemote = function () {
        return !this.isLocal();
    };
    /**
    * Return `true` if user has a screen role and `false` if not
    */
    UserModel.prototype.isScreen = function () {
        return this.type === 'screen';
    };
    /**
     * Set the audioActive value
     * @param isAudioActive value of audioActive
     */
    UserModel.prototype.setAudioActive = function (isAudioActive) {
        this.audioActive = isAudioActive;
    };
    /**
     * Set the videoActive value
     * @param isVideoActive value of videoActive
     */
    UserModel.prototype.setVideoActive = function (isVideoActive) {
        this.videoActive = isVideoActive;
    };
    /**
     * Set the screenShare value
     * @param isScreenShareActive value of isScreenShareActive
     */
    UserModel.prototype.setScreenShareActive = function (isScreenShareActive) {
        this.screenShareActive = isScreenShareActive;
    };
    /**
     * Set the streamManager value object
     * @param streamManager value of streamManager
     */
    UserModel.prototype.setStreamManager = function (streamManager) {
        this.streamManager = streamManager;
    };
    /**
     * Set the connectionId value
     * @param conecctionId value of connectionId
     */
    UserModel.prototype.setConnectionId = function (conecctionId) {
        this.connectionId = conecctionId;
    };
    /**
     * @hidden
     */
    UserModel.prototype.setLocalConnectionId = function (connectionId) {
        this.localConnectionId = connectionId;
    };
    /**
     * Set the user nickname value
     * @param nickname value of user nickname
     */
    UserModel.prototype.setNickname = function (nickname) {
        this.nickname = nickname;
    };
    /**
     * Set the user type value
     * @param type value of user type
     */
    UserModel.prototype.setType = function (type) {
        this.type = type;
    };
    /**
     * @hidden
     */
    UserModel.prototype.setUserAvatar = function (img) {
        var _this = this;
        return new Promise(function (resolve) {
            if (!img) {
                _this.createVideoAvatar();
                var video = document.getElementById('video-' + _this.getStreamManager().stream.streamId);
                var avatar = _this.videoAvatar.getContext('2d');
                avatar.drawImage(video, 200, 120, 285, 285, 0, 0, 100, 100);
                console.log('Photo was taken: ', _this.videoAvatar);
                resolve();
            }
            else {
                _this.randomAvatar = img;
                resolve();
            }
        });
    };
    UserModel.prototype.removeVideoAvatar = function () {
        this.videoAvatar = null;
    };
    /**
     * @hidden
     */
    UserModel.prototype.createVideoAvatar = function () {
        this.videoAvatar = document.createElement('canvas');
        this.videoAvatar.className = 'user-img';
        this.videoAvatar.width = 100;
        this.videoAvatar.height = 100;
    };
    return UserModel;
}());



/***/ }),

/***/ "./src/app/shared/pipes/linkfy.ts":
/*!****************************************!*\
  !*** ./src/app/shared/pipes/linkfy.ts ***!
  \****************************************/
/*! exports provided: LinkifyPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkifyPipe", function() { return LinkifyPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_linkifyjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-linkifyjs */ "./node_modules/ngx-linkifyjs/esm5/ngx-linkifyjs.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var LinkifyPipe = /** @class */ (function () {
    function LinkifyPipe(linkifyService) {
        this.linkifyService = linkifyService;
    }
    LinkifyPipe.prototype.transform = function (str) {
        return str ? this.linkifyService.linkify(str) : str;
    };
    LinkifyPipe.ctorParameters = function () { return [
        { type: ngx_linkifyjs__WEBPACK_IMPORTED_MODULE_1__["NgxLinkifyjsService"] }
    ]; };
    LinkifyPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'linkify' }),
        __metadata("design:paramtypes", [ngx_linkifyjs__WEBPACK_IMPORTED_MODULE_1__["NgxLinkifyjsService"]])
    ], LinkifyPipe);
    return LinkifyPipe;
}());



/***/ }),

/***/ "./src/app/shared/services/api.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared/services/api.service.ts ***!
  \************************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        this.BIG_ELEMENT_CLASS = 'OV_big';
    }
    ApiService.prototype.toggleFullscreen = function (elementId) {
        var document = window.document;
        var fs = document.getElementById(elementId);
        if (!document.fullscreenElement &&
            !document.mozFullScreenElement &&
            !document.webkitFullscreenElement &&
            !document.msFullscreenElement) {
            if (fs.requestFullscreen) {
                fs.requestFullscreen();
            }
            else if (fs.msRequestFullscreen) {
                fs.msRequestFullscreen();
            }
            else if (fs.mozRequestFullScreen) {
                fs.mozRequestFullScreen();
            }
            else if (fs.webkitRequestFullscreen) {
                fs.webkitRequestFullscreen();
            }
            return 'fullscreen';
        }
        else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
            else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
            else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            }
            else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            }
            return 'fullscreen_exit';
        }
    };
    ApiService.prototype.getRandomAvatar = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('https://randomuser.me/api/?lego').subscribe(function (data) {
                resolve(data.results[0].picture.thumbnail);
            });
        });
    };
    ApiService.prototype.handlerScreenShareError = function (error) {
        if (error && error.name === 'SCREEN_SHARING_NOT_SUPPORTED') {
            alert('Your browser does not support screen sharing');
        }
        else if (error && error.name === 'SCREEN_EXTENSION_DISABLED') {
            alert('You need to enable screen sharing extension');
        }
        else if (error && error.name === 'SCREEN_CAPTURE_DENIED') {
            // alert('You need to choose a window or application to share');
        }
    };
    ApiService.prototype.getOpenviduLayoutOptions = function () {
        var options = {
            maxRatio: 3 / 2,
            minRatio: 9 / 15,
            fixedRatio: false /* If this is true then the aspect ratio of the video is maintained
            and minRatio and maxRatio are ignored (default false) */,
            bigClass: this.BIG_ELEMENT_CLASS,
            bigPercentage: 0.85,
            bigFixedRatio: false,
            bigMaxRatio: 3 / 2,
            bigMinRatio: 9 / 16,
            bigFirst: true,
            animate: true,
        };
        return options;
    };
    ApiService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/shared/services/open-vidu.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/services/open-vidu.service.ts ***!
  \******************************************************/
/*! exports provided: OpenViduService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenViduService", function() { return OpenViduService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






var OpenViduService = /** @class */ (function () {
    function OpenViduService(http, userSrv) {
        this.http = http;
        this.userSrv = userSrv;
        this.URL_OV = 'https://' + location.hostname + ':4443';
        this.SETTINGS_FILE_NAME = 'ov-settings.json';
        this.baseURL = '/ovTeachingApi';
    }
    OpenViduService.prototype.generateToken = function (roomName) {
        var _this = this;
        return this.http.put(this.baseURL + '/room/' + roomName + '/token', {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (token) { return token; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return _this.handleError(error); }));
    };
    OpenViduService.prototype.removeUser = function (roomName) {
        var _this = this;
        return this.http.delete(this.baseURL + '/room/' + roomName + '/user', {})
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return _this.handleError(error); }));
    };
    OpenViduService.prototype.syncRemoveUser = function (roomName) {
        var xhr = new XMLHttpRequest();
        xhr.open("DELETE", this.baseURL + '/room/' + roomName + '/user', false);
        xhr.send();
    };
    OpenViduService.prototype.getToken = function (mySessionId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.createSession(mySessionId)
                .then(function (sessionId) {
                _this.createToken(sessionId)
                    .then(function (token) { return resolve(token); })
                    .catch(function (error) { return reject(error); });
            })
                .catch(function (error) { return reject(error); });
        });
    };
    OpenViduService.prototype.createSession = function (roomName) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            return _this.http.post(_this.baseURL + '/room/' + roomName + '/session', { responseType: 'text' })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
                error.status === 404 || error.status === 500 ? reject(error) : resolve(roomName);
                if (error.status === 404 || error.status === 500) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
                }
            }))
                .subscribe(function (response) {
                console.log(response);
                resolve(response);
            });
        });
    };
    OpenViduService.prototype.createToken = function (roomName) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            return _this.http.get(_this.baseURL + '/room/' + roomName + '/token')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
                reject(error);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
            }))
                .subscribe(function (response) {
                console.log(response);
                resolve(response.token);
            });
        });
    };
    OpenViduService.prototype.handleError = function (error) {
        console.error(error);
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw("Server error (" + error.status + "): " + error.message);
    };
    OpenViduService.prototype.getLocalOVSettings = function (roomName) {
        return {
            chat: true,
            autopublish: false,
            toolbarButtons: {
                video: this.userSrv.canStream(roomName),
                audio: this.userSrv.canStream(roomName),
                fullscreen: true,
                screenShare: this.userSrv.canStream(roomName),
                exit: true,
            },
        };
    };
    OpenViduService.prototype.getOvSettingsData = function (roomName) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.SETTINGS_FILE_NAME).subscribe(function (data) {
                console.log('FILE', data);
                console.log(data.openviduSettings);
                _this.ovSettings = data.openviduSettings ? data.openviduSettings : _this.getLocalOVSettings(roomName);
                if (data.openviduCredentials) {
                    _this.URL_OV = data.openviduCredentials.openvidu_url ? data.openviduCredentials.openvidu_url : _this.URL_OV;
                }
                console.log('URL Environment', _this.URL_OV);
                resolve(data.openviduSettings);
            }, function (error) {
                console.warn('Credentials file not found ');
                if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].openvidu_url) {
                    console.warn('Getting from environment ');
                    _this.URL_OV = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].openvidu_url;
                }
                console.log('URL Environment', _this.URL_OV);
                resolve(_this.getLocalOVSettings(roomName));
            });
        });
    };
    OpenViduService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] },
        { type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
    ]; };
    OpenViduService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], OpenViduService);
    return OpenViduService;
}());



/***/ }),

/***/ "./src/app/shared/services/room.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/room.service.ts ***!
  \*************************************************/
/*! exports provided: RoomService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomService", function() { return RoomService; });
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






var RoomService = /** @class */ (function () {
    function RoomService(http, userService) {
        this.http = http;
        this.userService = userService;
        this.baseURL = '/ovTeachingApi';
    }
    RoomService.prototype.createRoom = function (roomName) {
        var _this = this;
        return this.http.post(this.baseURL + '/room/' + roomName, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (roomName) { return roomName; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return _this.handleError(error); }));
    };
    RoomService.prototype.getRoomCode = function (roomName, role) {
        var _this = this;
        return this.http.get(this.baseURL + '/room/' + roomName + '/inviteCode/' + role, { responseType: 'text' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (code) { return code; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return _this.handleError(error); }));
    };
    RoomService.prototype.checkRoom = function (codeOrName) {
        var _this = this;
        return this.http.get(this.baseURL + '/room/' + codeOrName, { responseType: 'text' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (roomName) { return roomName; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return _this.handleError(error); }));
    };
    RoomService.prototype.enterRoom = function (code) {
        var _this = this;
        return this.http.put(this.baseURL + '/room/' + code + '/user', {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (user) { return user; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return _this.handleError(error); }));
    };
    RoomService.prototype.getAssistants = function (roomName) {
        var _this = this;
        return this.http.get(this.baseURL + '/room/' + roomName + '/assistants').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (users) { return users; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return _this.handleError(error); }));
    };
    RoomService.prototype.removeUser = function (roomName) {
        var _this = this;
        return this.http.delete(this.baseURL + '/room/' + roomName + '/user/session').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_) { }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return _this.handleError(error); }));
    };
    RoomService.prototype.handleError = function (error) {
        console.error(error);
        return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw("Server error (" + error.status + "): " + error.message);
    };
    RoomService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"] }
    ]; };
    RoomService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"]])
    ], RoomService);
    return RoomService;
}());



/***/ }),

/***/ "./src/app/shared/services/user.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/user.service.ts ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.isLogged = false;
        this.isAdmin = false;
        this.baseURL = '/ovTeachingApi';
        var user = JSON.parse(localStorage.getItem('currentUser'));
        if (user) {
            this.setCurrentUser(user);
        }
    }
    UserService.prototype.logIn = function (user, pass) {
        var _this = this;
        var auth = window.btoa(user + ':' + pass);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            Authorization: 'Basic ' + auth,
            'X-Requested-With': 'XMLHttpRequest',
        });
        return this.http.get(this.baseURL + '/logIn', { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (user) {
            _this.saveUser(user, auth);
            return user;
        }));
    };
    UserService.prototype.logOut = function () {
        var _this = this;
        return this.http.get(this.baseURL + '/logOut').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            _this.removeCurrentUser();
            return response;
        }));
    };
    UserService.prototype.register = function (userName, pass) {
        var _this = this;
        return this.http.get(this.baseURL + '/register/' + userName + '/' + pass, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (user) {
            var auth = window.btoa(userName + ':' + pass);
            _this.saveUser(user, auth);
            return user;
        }));
    };
    UserService.prototype.checkUserName = function (userName) {
        var _this = this;
        return this.http.get(this.baseURL + '/user/' + userName, { responseType: 'text' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (userName) { return userName; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) { return _this.handleError(error); }));
    };
    UserService.prototype.getRoomsForUser = function () {
        var _this = this;
        return this.http.get(this.baseURL + '/user/rooms').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (rooms) { return rooms; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) { return _this.handleError(error); }));
    };
    UserService.prototype.handleError = function (error) {
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw("Server error (" + error.status + "): " + error.message);
    };
    UserService.prototype.saveUser = function (user, auth) {
        if (user) {
            var oldAuth = void 0;
            if (this.user) {
                oldAuth = this.user.authdata;
            }
            this.setCurrentUser(user);
            if (auth) {
                user.authdata = auth;
            }
            else {
                user.authdata = oldAuth;
            }
            localStorage.setItem('currentUser', JSON.stringify(user));
        }
    };
    UserService.prototype.setCurrentUser = function (user) {
        this.isLogged = true;
        this.user = user;
        this.isAdmin = this.user.roles.indexOf('ROLE_ADMIN') !== -1;
        console.log(user);
    };
    UserService.prototype.removeCurrentUser = function () {
        localStorage.removeItem('currentUser');
        this.isLogged = false;
        this.isAdmin = false;
    };
    UserService.prototype.isModOfRoom = function (roomName) {
        return this.isLogged && this.user.moddedRooms != null && (this.user.moddedRooms.some(function (room) { return room.name === roomName; }));
    };
    UserService.prototype.canStream = function (roomName) {
        return this.isLogged && ((this.user.moddedRooms != null && this.user.moddedRooms.some(function (room) { return room.name === roomName; })) || (this.user.presentedRooms != null && this.user.presentedRooms.some(function (room) { return room.name === roomName; })));
    };
    UserService.prototype.isInRoom = function (roomName) {
        return this.isLogged && ((this.user.moddedRooms != null && this.user.moddedRooms.some(function (room) { return room.name === roomName; })) || (this.user.presentedRooms != null && this.user.presentedRooms.some(function (room) { return room.name === roomName; })) || (this.user.participatedRooms != null && this.user.participatedRooms.some(function (room) { return room.name === roomName; })));
    };
    UserService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/video-room/video-room.component.css":
/*!*****************************************************!*\
  !*** ./src/app/video-room/video-room.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#videoRoomNavBar {\n  min-width: 400px;\n  background-color: #494949;\n  height: 100%;\n}\n\n.stream-container {\n  padding: 0;\n}\n\n.sidenav-container {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  min-height: -webkit-fill-available;\n  overflow: hidden;\n}\n\n.sidenav-menu {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 400px;\n  background-color: #494949;\n  border-left: none;\n  position: absolute;\n}\n\n::ng-deep .mat-tab-body-wrapper {\n  height: 100%;\n}\n\n.tab-group {\n  height: 100%;\n  width: 100%;\n}\n\n.mat-drawer-container {\n  background-color: #494949;\n}\n\n.sidenav-main {\n  height: 100%;\n  overflow: hidden;\n  min-height: -webkit-fill-available;\n  min-height: -moz-available;\n}\n\n.bounds {\n  background-color: #494949;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 40px;\n  bottom: 0;\n  min-width: 400px !important;\n  width: inherit;\n}\n\n.boundsLight {\n  background-color: #dfdfdf !important;\n}\n\n/*!\n * Copyright (c) 2017 TokBox, Inc.\n * Released under the MIT license\n * http://opensource.org/licenses/MIT\n */\n\n.custom-class {\n  min-height: 0px !important;\n}\n\n/**\n * OT Base styles\n */\n\n/* Root OT object, this is where our CSS reset happens */\n\n.OT_root,\n.OT_root * {\n  color: #ffffff;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font-family: 'Ubuntu', sans-serif;\n  vertical-align: baseline;\n}\n\n.OT_dialog-centering {\n  display: table;\n  width: 100%;\n  height: 100%;\n}\n\n.OT_dialog-centering-child {\n  display: table-cell;\n  vertical-align: middle;\n}\n\n.OT_dialog {\n  position: relative;\n  box-sizing: border-box;\n  margin-right: auto;\n  margin-left: auto;\n\n  color: #fff;\n  font-family: 'Ubuntu', sans-serif;\n  font-size: 13px;\n  line-height: 1.4;\n}\n\n.OT_dialog * {\n  font-family: inherit;\n  box-sizing: inherit;\n}\n\n.OT_closeButton {\n  color: #999999;\n  cursor: pointer;\n  font-size: 32px;\n  line-height: 36px;\n  position: absolute;\n  right: 18px;\n  top: 0;\n}\n\n.OT_dialog-messages {\n  text-align: center;\n}\n\n.OT_dialog-messages-main {\n  margin-bottom: 36px;\n  line-height: 36px;\n\n  font-weight: 300;\n  font-size: 24px;\n}\n\n.OT_dialog-messages-minor {\n  margin-bottom: 18px;\n\n  font-size: 13px;\n  line-height: 18px;\n  color: #a4a4a4;\n}\n\n.OT_dialog-messages-minor strong {\n  color: #ffffff;\n}\n\n.OT_dialog-actions-card {\n  display: inline-block;\n}\n\n.OT_dialog-button-title {\n  margin-bottom: 18px;\n  line-height: 18px;\n\n  font-weight: 300;\n  text-align: center;\n  font-size: 14px;\n  color: #999999;\n}\n\n.OT_dialog-button-title label {\n  color: #999999;\n}\n\n.OT_dialog-button-title a,\n.OT_dialog-button-title a:link,\n.OT_dialog-button-title a:active {\n  color: #02a1de;\n}\n\n.OT_dialog-button-title strong {\n  color: #ffffff;\n  font-weight: 100;\n  display: block;\n}\n\n.OT_dialog-button {\n  display: inline-block;\n\n  margin-bottom: 18px;\n  padding: 0 1em;\n\n  background-color: #1ca3dc;\n  text-align: center;\n  cursor: pointer;\n}\n\n.OT_dialog-button:disabled {\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n\n.OT_dialog-button-large {\n  line-height: 36px;\n  padding-top: 9px;\n  padding-bottom: 9px;\n\n  font-weight: 100;\n  font-size: 24px;\n}\n\n.OT_dialog-button-small {\n  line-height: 18px;\n  padding-top: 9px;\n  padding-bottom: 9px;\n\n  background-color: #444444;\n  color: #999999;\n  font-size: 16px;\n}\n\n.OT_dialog-progress-bar {\n  display: inline-block; /* prevents margin collapse */\n  width: 100%;\n  margin-top: 5px;\n  margin-bottom: 41px;\n\n  border: 1px solid #4e4e4e;\n  height: 8px;\n}\n\n.OT_dialog-progress-bar-fill {\n  height: 100%;\n\n  background-color: #29a4da;\n}\n\n.OT_dialog-plugin-upgrading .OT_dialog-plugin-upgrade-percentage {\n  line-height: 54px;\n\n  font-size: 48px;\n  font-weight: 100;\n}\n\n/* Helpers */\n\n.OT_centered {\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  margin: 0;\n}\n\n.OT_dialog-hidden {\n  display: none;\n}\n\n.OT_dialog-button-block {\n  display: block;\n}\n\n.OT_dialog-no-natural-margin {\n  margin-bottom: 0;\n}\n\n/* Publisher and Subscriber styles */\n\n.OT_publisher,\n.OT_subscriber {\n  position: relative;\n  min-width: 48px;\n  min-height: 48px;\n}\n\n.OT_publisher .OT_video-element,\n.OT_subscriber .OT_video-element {\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n\n  transform-origin: 0 0;\n}\n\n/* Styles that are applied when the video element should be mirrored */\n\n.OT_publisher.OT_mirrored .OT_video-element {\n  transform: scale(-1, 1);\n  transform-origin: 50% 50%;\n}\n\n.OT_subscriber_error {\n  background-color: #000;\n  color: #fff;\n  text-align: center;\n}\n\n.OT_subscriber_error > p {\n  padding: 20px;\n}\n\n/* The publisher/subscriber name/mute background */\n\n.OT_publisher .OT_bar,\n.OT_subscriber .OT_bar,\n.OT_publisher .OT_name,\n.OT_subscriber .OT_name,\n.OT_publisher .OT_archiving,\n.OT_subscriber .OT_archiving,\n.OT_publisher .OT_archiving-status,\n.OT_subscriber .OT_archiving-status,\n.OT_publisher .OT_archiving-light-box,\n.OT_subscriber .OT_archiving-light-box {\n  -ms-box-sizing: border-box;\n  box-sizing: border-box;\n  top: 0;\n  left: 0;\n  right: 0;\n  display: block;\n  height: 34px;\n  position: absolute;\n}\n\n.OT_publisher .OT_bar,\n.OT_subscriber .OT_bar {\n  background: rgba(0, 0, 0, 0.4);\n}\n\n.OT_publisher .OT_edge-bar-item,\n.OT_subscriber .OT_edge-bar-item {\n  z-index: 1; /* required to get audio level meter underneath */\n}\n\n/* The publisher/subscriber name panel/archiving status bar */\n\n.OT_publisher .OT_name,\n.OT_subscriber .OT_name {\n  background-color: transparent;\n  color: #ffffff;\n  font-size: 15px;\n  line-height: 34px;\n  font-weight: normal;\n  padding: 0 4px 0 36px;\n}\n\n.OT_publisher .OT_archiving-status,\n.OT_subscriber .OT_archiving-status {\n  background: rgba(0, 0, 0, 0.4);\n  top: auto;\n  bottom: 0;\n  left: 34px;\n  padding: 0 4px;\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 15px;\n  line-height: 34px;\n  font-weight: normal;\n}\n\n.OT_micro .OT_archiving-status,\n.OT_micro:hover .OT_archiving-status,\n.OT_mini .OT_archiving-status,\n.OT_mini:hover .OT_archiving-status {\n  display: none;\n}\n\n.OT_publisher .OT_archiving-light-box,\n.OT_subscriber .OT_archiving-light-box {\n  background: rgba(0, 0, 0, 0.4);\n  top: auto;\n  bottom: 0;\n  right: auto;\n  width: 34px;\n  height: 34px;\n}\n\n.OT_archiving-light {\n  width: 7px;\n  height: 7px;\n  border-radius: 30px;\n  position: absolute;\n  top: 14px;\n  left: 14px;\n  background-color: #575757;\n  box-shadow: 0 0 5px 1px #575757;\n}\n\n.OT_archiving-light.OT_active {\n  background-color: #970d13;\n  animation: OT_pulse 1.3s ease-in;\n  -webkit-animation: OT_pulse 1.3s ease-in;\n  -moz-animation: OT_pulse 1.3s ease-in;\n  -webkit-animation: OT_pulse 1.3s ease-in;\n  animation-iteration-count: infinite;\n  -webkit-animation-iteration-count: infinite;\n  -moz-animation-iteration-count: infinite;\n  -webkit-animation-iteration-count: infinite;\n}\n\n@-webkit-keyframes OT_pulse {\n  0% {\n    box-shadow: 0 0 0px 0px #c70019;\n  }\n\n  30% {\n    box-shadow: 0 0 5px 1px #c70019;\n  }\n\n  50% {\n    box-shadow: 0 0 5px 1px #c70019;\n  }\n\n  80% {\n    box-shadow: 0 0 0px 0px #c70019;\n  }\n\n  100% {\n    box-shadow: 0 0 0px 0px #c70019;\n  }\n}\n\n@-webkit-keyframes OT_pulse {\n  0% {\n    box-shadow: 0 0 0px 0px #c70019;\n  }\n\n  30% {\n    box-shadow: 0 0 5px 1px #c70019;\n  }\n\n  50% {\n    box-shadow: 0 0 5px 1px #c70019;\n  }\n\n  80% {\n    box-shadow: 0 0 0px 0px #c70019;\n  }\n\n  100% {\n    box-shadow: 0 0 0px 0px #c70019;\n  }\n}\n\n.OT_mini .OT_bar,\n.OT_bar.OT_mode-mini,\n.OT_bar.OT_mode-mini-auto {\n  bottom: 0;\n  height: auto;\n}\n\n.OT_mini .OT_name.OT_mode-off,\n.OT_mini .OT_name.OT_mode-on,\n.OT_mini .OT_name.OT_mode-auto,\n.OT_mini:hover .OT_name.OT_mode-auto {\n  display: none;\n}\n\n.OT_publisher .OT_name,\n.OT_subscriber .OT_name {\n  left: 10px;\n  right: 37px;\n  height: 34px;\n  padding-left: 0;\n}\n\n.OT_publisher .OT_mute,\n.OT_subscriber .OT_mute {\n  border: none;\n  cursor: pointer;\n  display: block;\n  position: absolute;\n  text-align: center;\n  text-indent: -9999em;\n  background-color: transparent;\n  background-repeat: no-repeat;\n}\n\n.OT_publisher .OT_mute,\n.OT_subscriber .OT_mute {\n  right: 0;\n  top: 0;\n  border-left: 1px solid rgba(255, 255, 255, 0.2);\n  height: 36px;\n  width: 37px;\n}\n\n.OT_mini .OT_mute,\n.OT_publisher.OT_mini .OT_mute.OT_mode-auto.OT_mode-on-hold,\n.OT_subscriber.OT_mini .OT_mute.OT_mode-auto.OT_mode-on-hold {\n  top: 50%;\n  left: 50%;\n  right: auto;\n  margin-top: -18px;\n  margin-left: -18.5px;\n  border-left: none;\n}\n\n.OT_publisher .OT_mute {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAcCAMAAAC02HQrAAAA1VBMVEUAAAD3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pn3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pn3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj39/j3+Pj3+Pn4+Pk/JRMlAAAAQ3RSTlMABAUHCQoLDhAQERwdHiAjLjAxOD9ASFBRVl1mbnZ6fH2LjI+QkaWqrrC1uLzAwcXJycrL1NXj5Ofo6u3w9fr7/P3+d4M3+QAAAQBJREFUGBlVwYdCglAABdCLlr5Unijm3hMUtBzlBLSr//9JgUToOQgVJgceJgU8aHgMeA38K50ZOpcQmTPwcyXn+JM8M3JJIqQypiIkeXelTyIkGZPwKS1NMia1lgKTVkaE3oQQGYsmHNqSMWnTgUFbMiZtGlD2dpaxrL1XgM0i4ZK8MeAmFhsAs29MGZniawagS63oMOQUNXYB5D0D1RMDpyoMLw/fiE2og/V+PVDR5AiBl0/2Uwik+vx4xV3a5G5Ye68Nd1czjUjZckm6VhmPciRzeCZICjwTJAViQq+3e+St167rAoHK8sLYZVkBYPCZAZ/eGa+2R5LH7Wrc0YFf/O9J3yBDFaoAAAAASUVORK5CYII=);\n  background-position: 9px 5px;\n}\n\n.OT_publisher .OT_mute.OT_active {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAdCAYAAABFRCf7AAADcElEQVRIiaWVXWhcRRTHf7NNd2aDtUKMIjTpg4ufFIuiUOmDEWm0Vi3VYhXRqIggQh4sWJFSig9+oOhTKSpIRUWMIBIr2kptoTbgU6ooxCiIjR+14kcJmf9sNceHnd3ebnc3Uv9wuXfOzPzmnDMz5zozGwdWAbc65w5RUJQ8cC2wDJgFJioh/MJCMrNxq2vOzK4HmIvRRemxKP0RJWt53o7S+d2Yzsx6gQ+AIUDAnUqpBLzXZd4RYFUlhB/bdZacc3PAOmAcCMC7wfvFwLNdoAPAyx09bXyYWRl4E7gDmAdGlNKFwLYu8GolhO9O87RJd64GbMrgEvB68P4osMWdXLtVV7czlooNpVRWSs8DO7NpR/B+3rBHsvetCgtCMTxwQCm9BbyQrc8F7/uBex3uRCeXO0PrUZ4NfKyUPgWeyj3bg/crDNsIRGwBaJQGorQ3Svdn2wHgc2BUKb0DPJHtjwfvbwRucc7tz+N+i9LFUdoXpfVN36I0CVwBTFI/q9e1LPxT8P4qYEdu70q12mYzWw1MYQzjeJF6zq+shHC4B7jklOBPP/TzSunh4P0DwKvAfb5c9krpe+CcwsEoZdbhEvBM9wxRAl5RShcA9wAngE3B+8tLpdLuwrhp4MNmK0pfRWkySr7NXS8+L5nZbWZWy/Vin1IaitJnUTqvwevJ71lgSSWEFKUfHG7Q2m/xqFJaGry/GXgfGPLl8mJgrXPur2JoUC8Qy3OpG+sAbGhEKT0ErAWOA6uBPWbW1wr9BOgFbgKezot0kAPYqJQA1gC/A9cA+82svzksSn1R+jNKX0SpnM/e1x3yqig92JhrZivM7FjO8bSZLSuCR/Ok16K0KMNHojQWpYko7Y7S1igN5PE3ROl4lNaZ2UVmNpPBU01orvZvZPCeKFXbBR+lEKVtUapFaSZKg9njqpl9aWYTrmXCImA7sCWb9lK/jj9TrwkrgA1AH3AQuKsSwkzbrLfxpgpsBtYDxf/R3xm2ExirhNCuHHZXTsmRwiat+S/zSt06eysVA/4pmGr/G3qm6ik28v29FKgCg8BS6pvS0KNRGgZ+Bb4FpsxsOkfUlMuwDcBWYOUZOHYM2AU8WQmhBifDv70O7PjX7KZ+4G7g3FM8zd6uBIaBy4AqxnIcZwFLCovPAhE4Sj38b4BDwEeVEFKD9S94Khjn486v3QAAAABJRU5ErkJggg==);\n  background-position: 9px 4px;\n}\n\n.OT_subscriber .OT_mute {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAATCAYAAAB7u5a2AAABx0lEQVQ4jaWUv48NURiGn3ONmCs32ZBd28ht1gqyZAkF21ylQkEiSp2ehpDlD1BoFGqqVdJohYKI7MaPxMoVNghCWMF+7ybLUewnOXfcMWO9yeQ857zne8+XmZOBGjJpr0kvTIomvTZpS526UCO4DUwD64FjwCFgqZnnR+oc8LfgzKQ73vGsr42ZtGjSQFV9o8KfBCacZwCaef4YmAf2rzjcpN3A2WSpm/AssKcqPDNpDBjs410CViXzTwk/A7b1C4wxDgOngAsZcAXY2buDfp/6S4F3lDS8DjgBzDWAjX/Y/e/QgYS/AhsKHa+OMQ6GEJ4Cj4BOAxgq6aCowyZtdf4OtAr+FHDO+R4wWnVbihr3cQnICt4boO38GWj9a/icjwOACt4m4K3zEPA+AxaAtTWCnwN3lzHkEL8V/OPAGud9wK2GF9XR1Wae/1zG2AI+pGYI4VUIoRtjHAc2A9cz4LRPevYCZ+i9/4sJt4GXJU10gaPAzdI2TTro/5Tfz8XEe2LSZGmxq/SDNvP8BnA5WRrx4BwYBe6vONx1EnjovGvBLAAd4Adwuyq8UiaNmDTvr+a8SQ9MuvbfwckBHZPe+QEfTdpep+4XZmPBHiHgz74AAAAASUVORK5CYII=);\n  background-position: 8px 7px;\n}\n\n.OT_subscriber .OT_mute.OT_active {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAUCAYAAACXtf2DAAACtklEQVQ4jZ2VSYiURxTHf+/T9Nc9iRrBuYySmIsXUU9iFMEFERRBvAjJLUQi5ioiHvSScfTmgqC4XAT1ZIgLuJHkICaaQAgKI2hAUBT30bjUq7bbv4eukXK029F3+eqtv/fqK6qQdEnSNUmT6CDB/bvgfjO4N9zj2RD8007xg1IABkwEzkma0qb4PGAPMBZYLtSD8eNwAEjqTlNI0gNJM4YU7w7ut4O7gvuhZFsR3C8NC5BBLiTIY0mzM8AvqbiC++pk+zLpE95XuwAws3vAQuBPYDRwWtL84P4tsDSLv5oaug4EYOawAMF9jMdoLxqNZcDvQA04UVYqL4G/svj7AF21mhJscrvCksYBFO7xc2AAGGg2mrdjvf4rcAyomNn+slLZmUEGBgsYdh945xZJmgvckDSrEJpK6ySBgV6q12O8ABwGPjGzfWWlsjdN9rpjoSfA+DYDXARGAksK4Is3XC1Ub4z1f4CDQGFmu6tleQSYk0U+p7WVeefLJc00s4fAeWB6Qeunvj0m2ugx9gO7kmlrtSxvBfcy6fXUZS6rgG/S+jLQUwCVNmMC9HqM14EtSe+rluWazN8YEv8IqKZ1E1qnaIDO0ucx3gX6kv6TpM3AM+D/IbGjgP60/gq4WQA33gMA2OQxPgHWJX1ttSwL4FAeZGYLgB2SasBs4A8L7qOBf9M0uXQB3a+TMYSmVctyDrA9mfcBK82smSdKWgCcAaa1bTm4fxbc/8uuCQX3RanAD5Ka6Wo5IGnE0HxJPZ03pQX5Org3MsD3AO5xXLPZXJ9BjkrqdFg6QjZkgG3Jtsw93pG0VFI9QU5K6voYQBHcTydAfwheBI9HgvvPAJIWS3qeIL9JGvUxkO7gfi1BrqTvwkG/pPmSnibIqTzXPgAyEVgBjAEu1qrVPbk/PVTHgb/NbPGg/RVIzOQqzSTBaQAAAABJRU5ErkJggg==);\n  background-position: 7px 7px;\n}\n\n/**\n * Styles for display modes\n *\n * Note: It's important that these completely control the display and opacity\n * attributes, no other selectors should atempt to change them.\n */\n\n/* Default display mode transitions for various chrome elements */\n\n.OT_publisher .OT_edge-bar-item,\n.OT_subscriber .OT_edge-bar-item {\n  transition-property: top, bottom, opacity;\n  transition-duration: 0.5s;\n  transition-timing-function: ease-in;\n}\n\n.OT_publisher .OT_edge-bar-item.OT_mode-off,\n.OT_subscriber .OT_edge-bar-item.OT_mode-off,\n.OT_publisher .OT_edge-bar-item.OT_mode-auto,\n.OT_subscriber .OT_edge-bar-item.OT_mode-auto,\n.OT_publisher .OT_edge-bar-item.OT_mode-mini-auto,\n.OT_subscriber .OT_edge-bar-item.OT_mode-mini-auto {\n  top: -25px;\n  opacity: 0;\n}\n\n.OT_publisher .OT_edge-bar-item.OT_mode-off,\n.OT_subscriber .OT_edge-bar-item.OT_mode-off {\n  display: none;\n}\n\n.OT_mini .OT_mute.OT_mode-auto,\n.OT_publisher .OT_mute.OT_mode-mini-auto,\n.OT_subscriber .OT_mute.OT_mode-mini-auto {\n  top: 50%;\n}\n\n.OT_publisher .OT_edge-bar-item.OT_edge-bottom.OT_mode-off,\n.OT_subscriber .OT_edge-bar-item.OT_edge-bottom.OT_mode-off,\n.OT_publisher .OT_edge-bar-item.OT_edge-bottom.OT_mode-auto,\n.OT_subscriber .OT_edge-bar-item.OT_edge-bottom.OT_mode-auto,\n.OT_publisher .OT_edge-bar-item.OT_edge-bottom.OT_mode-mini-auto,\n.OT_subscriber .OT_edge-bar-item.OT_edge-bottom.OT_mode-mini-auto {\n  top: auto;\n  bottom: -25px;\n}\n\n.OT_publisher .OT_edge-bar-item.OT_mode-on,\n.OT_subscriber .OT_edge-bar-item.OT_mode-on,\n.OT_publisher .OT_edge-bar-item.OT_mode-auto.OT_mode-on-hold,\n.OT_subscriber .OT_edge-bar-item.OT_mode-auto.OT_mode-on-hold,\n.OT_publisher:hover .OT_edge-bar-item.OT_mode-auto,\n.OT_subscriber:hover .OT_edge-bar-item.OT_mode-auto,\n.OT_publisher:hover .OT_edge-bar-item.OT_mode-mini-auto,\n.OT_subscriber:hover .OT_edge-bar-item.OT_mode-mini-auto {\n  top: 0;\n  opacity: 1;\n}\n\n.OT_mini .OT_mute.OT_mode-on,\n.OT_mini:hover .OT_mute.OT_mode-auto,\n.OT_mute.OT_mode-mini,\n.OT_root:hover .OT_mute.OT_mode-mini-auto {\n  top: 50%;\n}\n\n.OT_publisher .OT_edge-bar-item.OT_edge-bottom.OT_mode-on,\n.OT_subscriber .OT_edge-bar-item.OT_edge-bottom.OT_mode-on,\n.OT_publisher:hover .OT_edge-bar-item.OT_edge-bottom.OT_mode-auto,\n.OT_subscriber:hover .OT_edge-bar-item.OT_edge-bottom.OT_mode-auto {\n  top: auto;\n  bottom: 0;\n  opacity: 1;\n}\n\n/* Load animation */\n\n.OT_root .OT_video-loading {\n  position: absolute;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  display: none;\n\n  background-color: rgba(0, 0, 0, 0.75);\n}\n\n.OT_root .OT_video-loading .OT_video-loading-spinner {\n  background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0yMCAtMjAgMjQwIDI0MCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4Mj0iMCIgeTI9IjEiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZmZiIgc3RvcC1vcGFjaXR5PSIwIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9IjAiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYiIgeDE9IjEiIHgyPSIwIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9IjAiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iLjA4Ii8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImMiIHgxPSIxIiB4Mj0iMCIgeTE9IjEiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZmZiIgc3RvcC1vcGFjaXR5PSIuMDgiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iLjE2Ii8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImQiIHgyPSIwIiB5MT0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9Ii4xNiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZiIgc3RvcC1vcGFjaXR5PSIuMzMiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iZSIgeDI9IjEiIHkxPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iLjMzIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9Ii42NiIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJmIiB4Mj0iMSIgeTI9IjEiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZmZiIgc3RvcC1vcGFjaXR5PSIuNjYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmYiLz48L2xpbmVhckdyYWRpZW50PjxtYXNrIGlkPSJnIj48ZyBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjQwIj48cGF0aCBzdHJva2U9InVybCgjYSkiIGQ9Ik04Ni42LTUwYTEwMCAxMDAgMCAwIDEgMCAxMDAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwMCAxMDApIi8+PHBhdGggc3Ryb2tlPSJ1cmwoI2IpIiBkPSJNODYuNiA1MEExMDAgMTAwIDAgMCAxIDAgMTAwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMDAgMTAwKSIvPjxwYXRoIHN0cm9rZT0idXJsKCNjKSIgZD0iTTAgMTAwYTEwMCAxMDAgMCAwIDEtODYuNi01MCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAwIDEwMCkiLz48cGF0aCBzdHJva2U9InVybCgjZCkiIGQ9Ik0tODYuNiA1MGExMDAgMTAwIDAgMCAxIDAtMTAwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMDAgMTAwKSIvPjxwYXRoIHN0cm9rZT0idXJsKCNlKSIgZD0iTS04Ni42LTUwQTEwMCAxMDAgMCAwIDEgMC0xMDAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwMCAxMDApIi8+PHBhdGggc3Ryb2tlPSJ1cmwoI2YpIiBkPSJNMC0xMDBhMTAwIDEwMCAwIDAgMSA4Ni42IDUwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMDAgMTAwKSIvPjwvZz48L21hc2s+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHg9Ii0yMCIgeT0iLTIwIiBtYXNrPSJ1cmwoI2cpIiBmaWxsPSIjZmZmIi8+PC9zdmc+)\n    no-repeat;\n  position: absolute;\n  width: 32px;\n  height: 32px;\n  left: 50%;\n  top: 50%;\n  margin-left: -16px;\n  margin-top: -16px;\n  -webkit-animation: OT_spin 2s linear infinite;\n  animation: OT_spin 2s linear infinite;\n}\n\n@-webkit-keyframes OT_spin {\n  100% {\n    -webkit-transform: rotate(360deg);\n  }\n}\n\n@keyframes OT_spin {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.OT_publisher.OT_loading .OT_video-loading,\n.OT_subscriber.OT_loading .OT_video-loading {\n  display: block;\n}\n\n.OT_video-centering {\n  display: table;\n  width: 100%;\n  height: 100%;\n}\n\n.OT_video-container {\n  display: table-cell;\n  vertical-align: middle;\n}\n\n.OT_video-poster {\n  position: absolute;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  display: none;\n\n  opacity: 0.25;\n\n  background-repeat: no-repeat;\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDcxIDQ2NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48bGluZWFyR3JhZGllbnQgaWQ9ImEiIHgyPSIwIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSI2Ni42NiUiIHN0b3AtY29sb3I9IiNmZmYiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iMCIvPjwvbGluZWFyR3JhZGllbnQ+PHBhdGggZmlsbD0idXJsKCNhKSIgZD0iTTc5IDMwOGMxNC4yNS02LjUgNTQuMjUtMTkuNzUgNzEtMjkgOS0zLjI1IDI1LTIxIDI1LTIxczMuNzUtMTMgMy0yMmMtMS43NS02Ljc1LTE1LTQzLTE1LTQzLTIuNSAzLTQuNzQxIDMuMjU5LTcgMS0zLjI1LTcuNS0yMC41LTQ0LjUtMTYtNTcgMS4yNS03LjUgMTAtNiAxMC02LTExLjI1LTMzLjc1LTgtNjctOC02N3MuMDczLTcuMzQ2IDYtMTVjLTMuNDguNjM3LTkgNC05IDQgMi41NjMtMTEuNzI3IDE1LTIxIDE1LTIxIC4xNDgtLjMxMi0xLjMyMS0xLjQ1NC0xMCAxIDEuNS0yLjc4IDE2LjY3NS04LjY1NCAzMC0xMSAzLjc4Ny05LjM2MSAxMi43ODItMTcuMzk4IDIyLTIyLTIuMzY1IDMuMTMzLTMgNi0zIDZzMTUuNjQ3LTguMDg4IDQxLTZjLTE5Ljc1IDItMjQgNi0yNCA2czc0LjUtMTAuNzUgMTA0IDM3YzcuNSA5LjUgMjQuNzUgNTUuNzUgMTAgODkgMy43NS0xLjUgNC41LTQuNSA5IDEgLjI1IDE0Ljc1LTExLjUgNjMtMTkgNjItMi43NSAxLTQtMy00LTMtMTAuNzUgMjkuNS0xNCAzOC0xNCAzOC0yIDQuMjUtMy43NSAxOC41LTEgMjIgMS4yNSA0LjUgMjMgMjMgMjMgMjNsMTI3IDUzYzM3IDM1IDIzIDEzNSAyMyAxMzVMMCA0NjRzLTMtOTYuNzUgMTQtMTIwYzUuMjUtNi4yNSAyMS43NS0xOS43NSA2NS0zNnoiLz48L3N2Zz4=);\n  background-size: auto 76%;\n}\n\n.OT_fit-mode-cover .OT_video-element {\n  -o-object-fit: cover;\n  object-fit: cover;\n}\n\n/* Workaround for iOS freezing issue when cropping videos */\n\n/* https://bugs.webkit.org/show_bug.cgi?id=176439 */\n\n@media only screen and (orientation: portrait) {\n  .OT_subscriber.OT_ForceContain.OT_fit-mode-cover .OT_video-element {\n    -o-object-fit: contain !important;\n    object-fit: contain !important;\n  }\n}\n\n.OT_fit-mode-contain .OT_video-element {\n  -o-object-fit: contain;\n  object-fit: contain;\n}\n\n.OT_fit-mode-cover .OT_video-poster {\n  background-position: center bottom;\n}\n\n.OT_fit-mode-contain .OT_video-poster {\n  background-position: center;\n}\n\n.OT_audio-level-meter {\n  position: absolute;\n  width: 25%;\n  max-width: 224px;\n  min-width: 21px;\n  top: 0;\n  right: 0;\n  overflow: hidden;\n}\n\n.OT_audio-level-meter:before {\n  /* makes the height of the container equals its width */\n  content: '';\n  display: block;\n  padding-top: 100%;\n}\n\n.OT_audio-level-meter__bar {\n  position: absolute;\n  width: 192%; /* meter value can overflow of 8% */\n  height: 192%;\n  top: -96% /* half of the size */;\n  right: -96%;\n  border-radius: 50%;\n\n  background-color: rgba(0, 0, 0, 0.8);\n}\n\n.OT_audio-level-meter__audio-only-img {\n  position: absolute;\n  top: 22%;\n  right: 15%;\n  width: 40%;\n\n  opacity: 0.7;\n\n  background: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNzkgODYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iI2ZmZiI+PHBhdGggZD0iTTkuNzU3IDQwLjkyNGMzLjczOC01LjE5MSAxMi43MTEtNC4zMDggMTIuNzExLTQuMzA4IDIuMjIzIDMuMDE0IDUuMTI2IDI0LjU4NiAzLjYyNCAyOC43MTgtMS40MDEgMS4zMDEtMTEuNjExIDEuNjI5LTEzLjM4LTEuNDM2LTEuMjI2LTguODA0LTIuOTU1LTIyLjk3NS0yLjk1NS0yMi45NzV6bTU4Ljc4NSAwYy0zLjczNy01LjE5MS0xMi43MTEtNC4zMDgtMTIuNzExLTQuMzA4LTIuMjIzIDMuMDE0LTUuMTI2IDI0LjU4Ni0zLjYyNCAyOC43MTggMS40MDEgMS4zMDEgMTEuNjExIDEuNjI5IDEzLjM4LTEuNDM2IDEuMjI2LTguODA0IDIuOTU1LTIyLjk3NSAyLjk1NS0yMi45NzV6Ii8+PHBhdGggZD0iTTY4LjY0NyA1OC42Yy43MjktNC43NTMgMi4zOC05LjU2MSAyLjM4LTE0LjgwNCAwLTIxLjQxMi0xNC4xMTUtMzguNzctMzEuNTI4LTM4Ljc3LTE3LjQxMiAwLTMxLjUyNyAxNy4zNTgtMzEuNTI3IDM4Ljc3IDAgNC41NDEuNTE1IDguOTM2IDEuODAyIDEyLjk1IDEuNjk4IDUuMjk1LTUuNTQyIDYuOTkxLTYuNjE2IDIuMDczQzIuNDEgNTUuMzk0IDAgNTEuNzg3IDAgNDguMTAzIDAgMjEuNTM2IDE3LjY4NSAwIDM5LjUgMCA2MS4zMTYgMCA3OSAyMS41MzYgNzkgNDguMTAzYzAgLjcxOC0yLjg5OSA5LjY5My0zLjI5MiAxMS40MDgtLjc1NCAzLjI5My03Ljc1MSAzLjU4OS03LjA2MS0uOTEyeiIvPjxwYXRoIGQ9Ik01LjA4NCA1MS4zODVjLS44MDQtMy43ODIuNTY5LTcuMzM1IDMuMTM0LTcuOTIxIDIuNjM2LS42MDMgNS40ODUgMi4xNSA2LjI4OSA2LjEzMi43OTcgMy45NDgtLjc1MiA3LjQ1Ny0zLjM4OCA3Ljg1OS0yLjU2Ni4zOTEtNS4yMzctMi4zMTgtNi4wMzQtNi4wN3ptNjguODM0IDBjLjgwNC0zLjc4Mi0uNTY4LTcuMzM1LTMuMTMzLTcuOTIxLTIuNjM2LS42MDMtNS40ODUgMi4xNS02LjI4OSA2LjEzMi0uNzk3IDMuOTQ4Ljc1MiA3LjQ1NyAzLjM4OSA3Ljg1OSAyLjU2NS4zOTEgNS4yMzctMi4zMTggNi4wMzQtNi4wN3ptLTIuMDM4IDguMjg4Yy0uOTI2IDE5LjY1OS0xNS4xMTIgMjQuNzU5LTI1Ljg1OSAyMC40NzUtNS40MDUtLjYwNi0zLjAzNCAxLjI2Mi0zLjAzNCAxLjI2MiAxMy42NjEgMy41NjIgMjYuMTY4IDMuNDk3IDMxLjI3My0yMC41NDktLjU4NS00LjUxMS0yLjM3OS0xLjE4Ny0yLjM3OS0xLjE4N3oiLz48cGF0aCBkPSJNNDEuNjYyIDc4LjQyMmw3LjU1My41NWMxLjE5Mi4xMDcgMi4xMiAxLjE1MyAyLjA3MiAyLjMzNWwtLjEwOSAyLjczOGMtLjA0NyAxLjE4Mi0xLjA1MSAyLjA1NC0yLjI0MyAxLjk0NmwtNy41NTMtLjU1Yy0xLjE5MS0uMTA3LTIuMTE5LTEuMTUzLTIuMDcyLTIuMzM1bC4xMDktMi43MzdjLjA0Ny0xLjE4MiAxLjA1Mi0yLjA1NCAyLjI0My0xLjk0N3oiLz48L2c+PC9zdmc+)\n    no-repeat center;\n}\n\n.OT_audio-level-meter__audio-only-img:before {\n  /* makes the height of the container equals its width */\n  content: '';\n  display: block;\n  padding-top: 100%;\n}\n\n.OT_audio-level-meter__value {\n  position: absolute;\n  border-radius: 50%;\n  background-image: radial-gradient(circle, rgba(151, 206, 0, 1) 0%, rgba(151, 206, 0, 0) 100%);\n}\n\n.OT_audio-level-meter.OT_mode-off {\n  display: none;\n}\n\n.OT_audio-level-meter.OT_mode-on,\n.OT_audio-only .OT_audio-level-meter.OT_mode-auto {\n  display: block;\n}\n\n.OT_audio-only.OT_publisher .OT_video-element,\n.OT_audio-only.OT_subscriber .OT_video-element {\n  display: none;\n}\n\n.OT_video-disabled-indicator {\n  opacity: 1;\n  border: none;\n  display: none;\n  position: absolute;\n  background-color: transparent;\n  background-repeat: no-repeat;\n  background-position: bottom right;\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  bottom: 3px;\n  right: 3px;\n}\n\n.OT_video-disabled {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFIAAAAoCAYAAABtla08AAAINUlEQVR42u2aaUxUVxTHcRBmAAEBRVTK4sKwDIsg+wCK7CqIw1CN1YobbbS2qYlJ06Qx1UpdqMbYWq2pSzWmH6ytNbXWJY1Lq7VuqBERtW64V0XFLYae0/xvcp3MMAMzDz6IyT/ge2ce5/7ucpY3Ts3NzZ1ygF57AJ0gO0G2jyZPmdbFyclJSAV1EeoEaUUSLGdSV5KLLFxzFmA7QVqGqDqjixhWkxCVeyRVl38wM6bwj6yYItYK47BAuu9B0gCqs6Ng2r494KQtkj/Dz2jHraw6qw2fdSE4rNmcCPCvZONP8iF1I6kdBdMaQJWZLeJqRWa2kPJAxXY+GxE+zxLI03GRh8lGSwoi9WCY8FWlCEh+8JOnT7MfPGjMuXX7Tt61hoaCi/9cKmKdv3BxeEtim/UbNpnbQiqF4MmT7kqrbr4lkMcTo46TTSpJB5g+8NHuVWnWuaampvhmO/7duHmrGluoO4C6OsJZGRrkDIld43ZqUOTnlkDSmXmabAoBU0vqBf+6KgFSxQ9++uzZ8rZApM81TJ8xM5me0Z/UF7PuBmdVdkGEb5gYDeQmyZNW3SJLIP9Kj64lGyMpmxRN6sOfIbkoAhKOdnv2/PmB1kB88eLFo+olyyrps3rSINIAzLonnqlqK8R9w+L86vtrt5L2nhug3Vc3ULu/Liz8AOuXESlZZONH6kmr7gtLIA9lRNeRzVukAvj3BslLnJNKgfScO69K+/Lly0ZbQW7e8tNK+pwBjqaSIjDrXgJkW1ciAZvbQjQ+RDahpBBKd5ZZsqN758hmImk4KQHnpDd8UwSkCyJarx07d4+3BeKJmlMHyX4qaRxpBCmNFE4KENvHDpAutVERn1kCVBMfeRRgYvZnx62wZPdnZkw92VQA5GClQXYRBze2S+iJmpPVVoJLA9l9QKokjcWKTCT1R5rhLg70NuSsziT16diIKkuAjibrTpJNDkn/e17CahtAjlAWJAYkb29Sb1LE9Rs391kILk8mVkyuIpuZcLKUlEmKkra1WuSTNuesEPzwoEploSVAh9Oiz+BIyd9dOHhtx4OEpFpVg6gbNK3yXX1j48N6U5Dz5i/gc/FDrMY3sTLiSMEkXxGxzUEUAGnbxlPaksMlHUXWAlHS8URCPseSohZbCSLjSSU7ixLXdzhIWVKq4Y7t2a/2bN0qGeKly1fYsVmk6RgIDz4J0bonyUOcjeYqm/8hRoYbWkigV2NH9CHAS60EkUkkw47hSRs6FqT1LR5AVcsrueXlK1d5AO+RpmBrZZEiefByytPCanRGNLZY0uF52gNDYr9sCRB8MHY0SJu2OJWKS2WQV65e4y31DmkCImEi0hBfufRime0RIhpbKen0/Ny9OYNW2ghyYytABjNIaxNuKttAWk6HPLn0k0FevdZwFinPWFIuKZbUV16NVko6jbWSDoPO3pOf8K0jQWLSQ0S9bdpkYck+m7vfWpAiHfKgBsZiGSSt0FqcTeU8WETqAHE2CgcAVd3Gkm4MD3xXYeI6B4NMItvKbcUpQ9gP+KMWnSsW+TaYJtoo+avBWLoKoK0CCSDud+7eXWQGZAXqV3YoQjQCfixJ8+fzj9ta3JHhlUeJ8wJOY2ws6eRKpPS3oqTvHAESEz9ya0naXL5WH6pt3FqSOhTHkTcKEXc6k1POh4Q9YJu/03TT4a8PoGMFI4i2EqSbOZAYaBkpCyD92RkG6KCSbjI/H0HEISBnlOZPFdcEzI2GTO4KBZICGKyAKLTEmJOB2txf5MbgohBINCl4FTqmpJMB2W+HiRn1Q2l6lXyPmiEP6VVE2TfGoaMYrHyPdtAnyI0jEOn9RLWmNEhvBBE7SjpFQZaShtLK+1S+T12lRwxUvrZlVPp8jE1PikeO7C/nyEqBDCB1t7+kUx4kKUWclea0yZC5BIGpiJSNSD9QgFR0RQKkL6KxHSWdsiARHJNYewoGrzG1/bk4dTPSunL2EyDjcbb7MQ+lQfZmkKiN7SjpFAM5CWAyGcwyY84YsZ1lUcbRNNtQMAdtQWGvQ0DyVjzYAKQfQFodeAeC1C8vzymXIZqD+ZEh/2OyLSalS/3VbnJZ+VqDXGjMrTCFuK4s66vVZUNfqaDolcbjOcb899sLpEE+I20GifywXe2QR3KElu99PzqjGufhREqB1pjCnG3IL3fY1v733r2FMsiGhutn0LAoJWWIGbPxjKwgjUbF0m52mPhigrpdXOecEq9pR6MkHbu2LOtrcZ9y3d0ODTb15y9MePz48aF79+8fvXnr9sljx2u2I7KNxDuaMPGVECoRs7mC4eT7SIruFNfNHK15MKuM2evwNq+4qjxvGnd5CHwNNynawW4cOlUZdG8b55IIJHmkItwrZHH6QxB3OSL9kTtAGpIvZiQB3Z4SKBfXQtEE9sashWAW87Bt3sYZNR6zn4uzJwWDKUKXfaKCdqUoBpLxSjYe9nqGiwWRBGipuGZ3Qm76itYLbbJI/PEhUApfw73uOIy9xfse3M9F9BuFJHcYrseSouGkHtCVtkuGTTikI8XgZzhg9SeF4VqcvSWiaSvNHQ8JwkNjIfEHemCmNLD1RaEfLs18mlgNuN6PFALHo7CyU5W2g00gFAQF4ozvibH04muwDbWraSFAyt/AAMzewgGR8uCeWn77xzBxPxgzPRCDDMZ14bQ/3jqGKGoHf2Hjgx3kw5LbaJDYWb52t9FMgw4AuWNWukNeuOYqOsmQi2jgws4PA/DD/z0B2x0/veCs4naw0cgybezid7X9jV3rX2RSs0wfLkll4pBGcgifg+NYxe1kJ2ycTaRq66uG/wBOl0vjcw70xwAAAABJRU5ErkJggg==);\n  background-size: 33px auto;\n}\n\n.OT_video-disabled-warning {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFIAAAAoCAYAAABtla08AAAGMElEQVR4Ae2aA7D0yBaAc7oH12vbRmlLaxYWb23btm3btm2899a2bWuYtPZ01cmtU9lJrib315yqr9I3Oem/5/s7acwEnehEJzoxCcX2O+wEeIgRBDDaGjAZOgQ6ihRpLklHZDJIXK1WWymMIhGGkVBKCWMM+Iv/f/b5t7faYtM/sGgIS7j8RNLjceUVl41GvGN1BFiHy9sgtRWaYbhvuVQ6o1VOvV5/tLe3dyssKoZuh8xClkDEi2MMS6ZjR0cScxdK/+HgnJsmLccYOx0e/PUGUqfTJDEHkV5go9lcMQoj4R8RpSIRRUr4a9baTJFCCNfqESKJ7RYJibK0xoi05EhFRTxMi1Rit6xHAuLaKRLwEVi6q1x+EhlVpd3d3Wfh4VQkQhRhxthYLg7SRGqdLlIp7UVOHf+JhEhEMscUolVje3p63saeeOFoKsT7fjj++BNuw2I/0ouUENmGaQcQEilQvUU6xuWC0kqmVWCt8df6kG7WLoFA20VSCOyNh0RKPT+SyrTWtQsvuvTYCy84z3+oAdbgAiLGIvHjTz6bFuu/B3lKKfVkFKknwih6EnnipZdfXQZzepAupXSGSCfwUGZtkrx3t/0dSQGnnXbmdocdetArQoj+4VR23wMP3bj/vnv9Sv/rBmkish09ca655thHSrlWq4TFF1vkNDxsgjiUnPqZnHPABIq47jx7pPMcecShfz7x1DO7D6eit99576X1113nVd8rqLGAuDaNitJonTGIqHgQGQjDsJglMrUH5iDSEQbRa6y2yrNvv/PuWVmV/PTzLz8steTit1B9FtGJeZrJksmWdBzBMcami4xUkaY1A1Qe94WIaPGBApJhaERrLrXkElf8+NPPz6YMLs1DDjn0Wn9PnI/UiQadM4jNEkhzVsEGE8nIHESM1j5/KqRX+/IEiOQ/yifNBlEkpnb00cccesbpp13T3983H88/48xzrrvm6it/8U5JXgX5G6nSvSq1R5LATR7aYGkwMG1RSwkWABH+4jUb3vT/uJ1Z0xpjraTBRltrxUQhksIRmgTJyy69+Pv99tv3qYX6FxgU+fU33352xGEHf5wisU7nNWJpZRMkAjZ6aIN1mwV7h29Jo2wCHlveu/GV169z65E+T6koexCh6c+EEiky3lnxQKFjUeVyOeI5AOBzIiayRhJryd7YYnkIHgvB0qk9Tdql6N3XH4bRUIOIIIKJSiRb0hkSEpZKRd1CpEq8GxtIyCVmDSgFl94GacTgaJw1rUlYhYng0c4ewaUsmKRIJjpiqMSOCh9QeI+UYECmtQIsxEu6OorEcv6Rl0gu0woh8MhFkmSCTXVI4pC704WCFRJvSRNJSzrMMEZO2iKZTCHAZYnmvXCny7ed5vfZK3viHSBdIFCKEFj2+nt+73nw8m2uedcLJlktA++VNMEPaR45aYukcKnnCfY3/DFbZS8t7eHxNgsPM0N1hXhJJwwM1QbpoQFlog2R13a/zBxEYHAQEUYUM6qiVwEyBYoM6JFNF2kFLelI5KQf+fVI4dJFCguDS7oAyx2R6SFQJKRedSDj/cMg/RXQ6ZE05GSIDAaXdCi1I3L021SQWNJ1RLY5OiIdL4/yvuw8ADfWPFrSciaMyH8tEQPwf1uGG54g5+KlJGTmsrxsQdl5PKidnPFe2QS///7Hu+VS6WX/HYnf0sevGL7lXydwod2/9DykZq0s5yff0sgSWCigNOH7TPHL7ufj+/TH8P/+qYpL4HkBDiRYpEXeM8/89/9zzjn7EtY64dfd1nqccM7Bs8+9MKy8555/8TnKS+5MufH6EZVASkgPzf+mJXroet17JirU0ALST3nT0y5ONyLpeo1y64ih+vuQfsoTOeRFSJXa+SvyB90TUmdw49EjLaKpMQ0mzEeTzkWsd/oI6fzfiKM8gWg6X6OjpXstu5ZHnmIb0GFiu29MIUfUewkmVrEN3RqVQ/bY8FzNcquMBv/pCNUZ5pHHem01KdN/I/DG66/lLhKSvTO5M84kav5C5z2ZfyAivi9i9VGd45RH7UWJbjwGG/7NYsRECt7jiOToHedKAui8SW4CsxyRc54mKH/8f7ELhCCACyNcIl/wI+FaAJyc8yzRtinQPzWzuFZrFHq/AAAAAElFTkSuQmCC);\n  background-size: 33px auto;\n}\n\n.OT_video-disabled-indicator.OT_active {\n  display: block;\n}\n\n.OT_audio-blocked-indicator {\n  opacity: 1;\n  border: none;\n  display: none;\n  position: absolute;\n  background-color: transparent;\n  background-repeat: no-repeat;\n  background-position: center;\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n\n.OT_audio-blocked {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTUwIiBoZWlnaHQ9IjkwIj48ZGVmcz48cGF0aCBkPSJNNjcgMTJMNi40NDggNzIuNTUyIDAgMzFWMThMMjYgMGw0MSAxMnptMyA3bDYgNDctMjkgMTgtMzUuNTAyLTYuNDk4TDcwIDE5eiIgaWQ9ImEiLz48L2RlZnM+PHJlY3Qgd2lkdGg9IjE1MCIgaGVpZ2h0PSI5MCIgcng9IjM1IiByeT0iNDUiIG9wYWNpdHk9Ii41Ii8+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzNikiPjxtYXNrIGlkPSJiIiBmaWxsPSIjZmZmIj48dXNlIHhsaW5rOmhyZWY9IiNhIi8+PC9tYXNrPjxwYXRoIGQ9Ik0zOS4yNDkgNTEuMzEyYy42OTcgMTAuMzcgMi43ODUgMTcuODk3IDUuMjUxIDE3Ljg5NyAzLjAzOCAwIDUuNS0xMS40MTcgNS41LTI1LjVzLTIuNDYyLTI1LjUtNS41LTI1LjVjLTIuNTEgMC00LjYyOCA3Ljc5Ny01LjI4NyAxOC40NTNBOC45ODkgOC45ODkgMCAwIDEgNDMgNDRhOC45ODggOC45ODggMCAwIDEtMy43NTEgNy4zMTJ6TTIwLjk4NSAzMi4yMjRsMTUuNzQ2LTE2Ljg3N2E3LjM4NSA3LjM4NSAwIDAgMSAxMC4zNzQtLjQyQzUxLjcwMiAxOS4xMTQgNTQgMjkuMjA4IDU0IDQ1LjIwOGMwIDE0LjUyNy0yLjM0MyAyMy44OC03LjAzIDI4LjA1OGE3LjI4IDcuMjggMCAwIDEtMTAuMTY4LS40NjhMMjAuNDA1IDU1LjIyNEgxMmE1IDUgMCAwIDEtNS01di0xM2E1IDUgMCAwIDEgNS01aDguOTg1eiIgZmlsbD0iI0ZGRiIgbWFzaz0idXJsKCNiKSIvPjwvZz48cGF0aCBkPSJNMTA2LjUgMTMuNUw0NC45OTggNzUuMDAyIiBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PC9nPjwvc3ZnPg==);\n  background-size: 90px auto;\n}\n\n.OT_container-audio-blocked {\n  cursor: pointer;\n}\n\n.OT_container-audio-blocked.OT_mini .OT_edge-bar-item {\n  display: none;\n}\n\n.OT_container-audio-blocked .OT_mute {\n  display: none;\n}\n\n.OT_audio-blocked-indicator.OT_active {\n  display: block;\n}\n\n.OT_video-unsupported {\n  opacity: 1;\n  border: none;\n  display: none;\n  position: absolute;\n  background-color: transparent;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTciIGhlaWdodD0iOTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxwYXRoIGQ9Ik03MCAxMkw5LjQ0OCA3Mi41NTIgMCA2MmwzLTQ0TDI5IDBsNDEgMTJ6bTggMmwxIDUyLTI5IDE4LTM1LjUwMi02LjQ5OEw3OCAxNHoiIGlkPSJhIi8+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOCAzKSI+PG1hc2sgaWQ9ImIiIGZpbGw9IiNmZmYiPjx1c2UgeGxpbms6aHJlZj0iI2EiLz48L21hc2s+PHBhdGggZD0iTTkuMTEgMjAuOTY4SDQ4LjFhNSA1IDAgMCAxIDUgNVY1OC4xOGE1IDUgMCAwIDEtNSA1SDkuMTFhNSA1IDAgMCAxLTUtNVYyNS45N2E1IDUgMCAwIDEgNS01em00Ny4wOCAxMy4zOTRjMC0uMzQ1IDUuNDcyLTMuMTU5IDE2LjQxNS04LjQ0M2EzIDMgMCAwIDEgNC4zMDQgMi43MDJ2MjYuODM1YTMgMyAwIDAgMS00LjMwNSAyLjcwMWMtMTAuOTQyLTUuMjg2LTE2LjQxMy04LjEtMTYuNDEzLTguNDQ2VjM0LjM2MnoiIGZpbGw9IiNGRkYiIG1hc2s9InVybCgjYikiLz48L2c+PHBhdGggZD0iTTgxLjUgMTYuNUwxOS45OTggNzguMDAyIiBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PC9nPjwvc3ZnPg==);\n  background-size: 58px auto;\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  margin-top: -30px;\n}\n\n.OT_video-unsupported-bar {\n  display: none;\n  position: absolute;\n  width: 192%; /* copy the size of the audio meter bar for symmetry */\n  height: 192%;\n  top: -96% /* half of the size */;\n  left: -96%;\n  border-radius: 50%;\n\n  background-color: rgba(0, 0, 0, 0.8);\n}\n\n.OT_video-unsupported-img {\n  display: none;\n  position: absolute;\n  top: 11%;\n  left: 15%;\n  width: 70%;\n  opacity: 0.7;\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTciIGhlaWdodD0iOTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxwYXRoIGQ9Ik03MCAxMkw5LjQ0OCA3Mi41NTIgMCA2MmwzLTQ0TDI5IDBsNDEgMTJ6bTggMmwxIDUyLTI5IDE4LTM1LjUwMi02LjQ5OEw3OCAxNHoiIGlkPSJhIi8+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOCAzKSI+PG1hc2sgaWQ9ImIiIGZpbGw9IiNmZmYiPjx1c2UgeGxpbms6aHJlZj0iI2EiLz48L21hc2s+PHBhdGggZD0iTTkuMTEgMjAuOTY4SDQ4LjFhNSA1IDAgMCAxIDUgNVY1OC4xOGE1IDUgMCAwIDEtNSA1SDkuMTFhNSA1IDAgMCAxLTUtNVYyNS45N2E1IDUgMCAwIDEgNS01em00Ny4wOCAxMy4zOTRjMC0uMzQ1IDUuNDcyLTMuMTU5IDE2LjQxNS04LjQ0M2EzIDMgMCAwIDEgNC4zMDQgMi43MDJ2MjYuODM1YTMgMyAwIDAgMS00LjMwNSAyLjcwMWMtMTAuOTQyLTUuMjg2LTE2LjQxMy04LjEtMTYuNDEzLTguNDQ2VjM0LjM2MnoiIGZpbGw9IiNGRkYiIG1hc2s9InVybCgjYikiLz48L2c+PHBhdGggZD0iTTgxLjUgMTYuNUwxOS45OTggNzguMDAyIiBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PC9nPjwvc3ZnPg==);\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 100% auto;\n}\n\n.OT_video-unsupported-img:before {\n  /* makes the height of the container 93% of its width (90/97 px) */\n  content: '';\n  display: block;\n  padding-top: 93%;\n}\n\n.OT_video-unsupported-text {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  height: 100%;\n  margin-top: 40px;\n}\n\n@media (min-width: 1440px) {\n  .sidenav-menu{\n    width: 33%;\n  }\n}\n\n@media (max-width: 1440px) and (min-width: 1024px){\n  .sidenav-menu{\n    width: 30%;\n  }\n}\n\n@media (max-width: 1024px) and (min-width: 790px){\n  .sidenav-menu{\n    width: 350px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlkZW8tcm9vbS92aWRlby1yb29tLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtDQUFrQztFQUNsQyxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQ0FBa0M7RUFDbEMsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVCxTQUFTO0VBQ1QsMkJBQTJCO0VBQzNCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7Ozs7RUFJRTs7QUFFRjtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTs7RUFFRTs7QUFFRix3REFBd0Q7O0FBQ3hEOztFQUVFLGNBQWM7RUFDZCxTQUFTO0VBQ1QsVUFBVTtFQUNWLFNBQVM7RUFDVCxlQUFlO0VBQ2YsaUNBQWlDO0VBQ2pDLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUVsQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjs7RUFFakIsV0FBVztFQUNYLGlDQUFpQztFQUNqQyxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usb0JBQW9CO0VBRXBCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLE1BQU07QUFDUjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7O0VBRWpCLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsbUJBQW1COztFQUVuQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGlCQUFpQjs7RUFFakIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFDQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7OztFQUdFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxxQkFBcUI7O0VBRXJCLG1CQUFtQjtFQUNuQixjQUFjOztFQUVkLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjs7RUFFbkIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjs7RUFFbkIseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UscUJBQXFCLEVBQUUsNkJBQTZCO0VBQ3BELFdBQVc7RUFDWCxlQUFlO0VBQ2YsbUJBQW1COztFQUVuQix5QkFBeUI7RUFDekIsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTs7RUFFWix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxpQkFBaUI7O0VBRWpCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUEsWUFBWTs7QUFFWjtFQUNFLGVBQWU7RUFDZixTQUFTO0VBQ1QsUUFBUTtFQUNSLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUEsb0NBQW9DOztBQUVwQzs7RUFFRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZOztFQUlaLHFCQUFxQjtBQUN2Qjs7QUFFQSxzRUFBc0U7O0FBQ3RFO0VBRUUsdUJBQXVCO0VBRXZCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBLGtEQUFrRDs7QUFDbEQ7Ozs7Ozs7Ozs7RUFXRSwwQkFBMEI7RUFDMUIsc0JBQXNCO0VBQ3RCLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLGNBQWM7RUFDZCxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFLDhCQUE4QjtBQUNoQzs7QUFFQTs7RUFFRSxVQUFVLEVBQUUsaURBQWlEO0FBQy9EOztBQUVBLDZEQUE2RDs7QUFDN0Q7O0VBRUUsNkJBQTZCO0VBQzdCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFDdkI7O0FBRUE7O0VBRUUsOEJBQThCO0VBQzlCLFNBQVM7RUFDVCxTQUFTO0VBQ1QsVUFBVTtFQUNWLGNBQWM7RUFDZCwrQkFBK0I7RUFDL0IsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7Ozs7RUFJRSxhQUFhO0FBQ2Y7O0FBRUE7O0VBRUUsOEJBQThCO0VBQzlCLFNBQVM7RUFDVCxTQUFTO0VBQ1QsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVix5QkFBeUI7RUFFekIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGdDQUFnQztFQUNoQyx3Q0FBd0M7RUFDeEMscUNBQXFDO0VBQ3JDLHdDQUF3QztFQUN4QyxtQ0FBbUM7RUFDbkMsMkNBQTJDO0VBQzNDLHdDQUF3QztFQUN4QywyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRTtJQUVFLCtCQUErQjtFQUNqQzs7RUFFQTtJQUVFLCtCQUErQjtFQUNqQzs7RUFFQTtJQUVFLCtCQUErQjtFQUNqQzs7RUFFQTtJQUVFLCtCQUErQjtFQUNqQzs7RUFFQTtJQUVFLCtCQUErQjtFQUNqQztBQUNGOztBQUVBO0VBQ0U7SUFFRSwrQkFBK0I7RUFDakM7O0VBRUE7SUFFRSwrQkFBK0I7RUFDakM7O0VBRUE7SUFFRSwrQkFBK0I7RUFDakM7O0VBRUE7SUFFRSwrQkFBK0I7RUFDakM7O0VBRUE7SUFFRSwrQkFBK0I7RUFDakM7QUFDRjs7QUFFQTs7O0VBR0UsU0FBUztFQUNULFlBQVk7QUFDZDs7QUFFQTs7OztFQUlFLGFBQWE7QUFDZjs7QUFFQTs7RUFFRSxVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBOztFQUVFLFlBQVk7RUFDWixlQUFlO0VBQ2YsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLDZCQUE2QjtFQUM3Qiw0QkFBNEI7QUFDOUI7O0FBRUE7O0VBRUUsUUFBUTtFQUNSLE1BQU07RUFDTiwrQ0FBK0M7RUFDL0MsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTs7O0VBR0UsUUFBUTtFQUNSLFNBQVM7RUFDVCxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxxMkJBQXEyQjtFQUNyMkIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsaXhDQUFpeEM7RUFDanhDLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLHl0QkFBeXRCO0VBQ3p0Qiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSx5aENBQXloQztFQUN6aEMsNEJBQTRCO0FBQzlCOztBQUVBOzs7OztFQUtFOztBQUVGLGlFQUFpRTs7QUFDakU7O0VBR0UseUNBQXlDO0VBRXpDLHlCQUF5QjtFQUV6QixtQ0FBbUM7QUFDckM7O0FBRUE7Ozs7OztFQU1FLFVBQVU7RUFDVixVQUFVO0FBQ1o7O0FBRUE7O0VBRUUsYUFBYTtBQUNmOztBQUVBOzs7RUFHRSxRQUFRO0FBQ1Y7O0FBRUE7Ozs7OztFQU1FLFNBQVM7RUFDVCxhQUFhO0FBQ2Y7O0FBRUE7Ozs7Ozs7O0VBUUUsTUFBTTtFQUNOLFVBQVU7QUFDWjs7QUFFQTs7OztFQUlFLFFBQVE7QUFDVjs7QUFFQTs7OztFQUlFLFNBQVM7RUFDVCxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBLG1CQUFtQjs7QUFDbkI7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTs7RUFFYixxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRTthQUNXO0VBQ1gsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osU0FBUztFQUNULFFBQVE7RUFDUixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLDZDQUE2QztFQUM3QyxxQ0FBcUM7QUFDdkM7O0FBQ0E7RUFDRTtJQUNFLGlDQUFpQztFQUNuQztBQUNGOztBQUNBO0VBQ0U7SUFFRSx5QkFBeUI7RUFDM0I7QUFDRjs7QUFFQTs7RUFFRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7O0VBRWIsYUFBYTs7RUFFYiw0QkFBNEI7RUFDNUIsaXNDQUFpc0M7RUFDanNDLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixpQkFBaUI7QUFDbkI7O0FBRUEsMkRBQTJEOztBQUMzRCxtREFBbUQ7O0FBQ25EO0VBQ0U7SUFDRSxpQ0FBaUM7SUFDakMsOEJBQThCO0VBQ2hDO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLE1BQU07RUFDTixRQUFRO0VBQ1IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsdURBQXVEO0VBQ3ZELFdBQVc7RUFDWCxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVcsRUFBRSxtQ0FBbUM7RUFDaEQsWUFBWTtFQUNaLGdDQUFnQztFQUNoQyxXQUFXO0VBQ1gsa0JBQWtCOztFQUVsQixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFVBQVU7RUFDVixVQUFVOztFQUVWLFlBQVk7O0VBRVo7b0JBQ2tCO0FBQ3BCOztBQUVBO0VBQ0UsdURBQXVEO0VBQ3ZELFdBQVc7RUFDWCxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQiw2RkFBNkY7QUFDL0Y7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7O0VBRUUsY0FBYztBQUNoQjs7QUFFQTs7RUFFRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLDRCQUE0QjtFQUM1QixpQ0FBaUM7RUFDakMsb0JBQW9CO0VBQ3BCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFVBQVU7QUFDWjs7QUFFQTtFQUNFLDYyRkFBNjJGO0VBQzcyRiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSx5ckVBQXlyRTtFQUN6ckUsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQiw2QkFBNkI7RUFDN0IsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQixvQkFBb0I7RUFDcEIsTUFBTTtFQUNOLE9BQU87RUFDUCxTQUFTO0VBQ1QsUUFBUTtBQUNWOztBQUVBO0VBQ0UsNndDQUE2d0M7RUFDN3dDLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3Qiw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLHErQkFBcStCO0VBQ3IrQiwwQkFBMEI7RUFDMUIsb0JBQW9CO0VBQ3BCLE1BQU07RUFDTixPQUFPO0VBQ1AsU0FBUztFQUNULFFBQVE7RUFDUixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFdBQVcsRUFBRSxzREFBc0Q7RUFDbkUsWUFBWTtFQUNaLGdDQUFnQztFQUNoQyxVQUFVO0VBQ1Ysa0JBQWtCOztFQUVsQixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsVUFBVTtFQUNWLFlBQVk7RUFDWixxK0JBQXErQjtFQUNyK0IsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxrRUFBa0U7RUFDbEUsV0FBVztFQUNYLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFHRSxhQUFhO0VBR2IsdUJBQXVCO0VBR3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7O0FBQ0E7RUFDRTtJQUNFLFVBQVU7RUFDWjtBQUNGOztBQUNBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3ZpZGVvLXJvb20vdmlkZW8tcm9vbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3ZpZGVvUm9vbU5hdkJhciB7XG4gIG1pbi13aWR0aDogNDAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0OTQ5NDk7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnN0cmVhbS1jb250YWluZXIge1xuICBwYWRkaW5nOiAwO1xufVxuXG4uc2lkZW5hdi1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5zaWRlbmF2LW1lbnUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDQwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk0OTQ5O1xuICBib3JkZXItbGVmdDogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG46Om5nLWRlZXAgLm1hdC10YWItYm9keS13cmFwcGVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4udGFiLWdyb3VwIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1hdC1kcmF3ZXItY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ5NDk0OTtcbn1cblxuLnNpZGVuYXYtbWFpbiB7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWluLWhlaWdodDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbiAgbWluLWhlaWdodDogLW1vei1hdmFpbGFibGU7XG59XG5cbi5ib3VuZHMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk0OTQ5O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDQwcHg7XG4gIGJvdHRvbTogMDtcbiAgbWluLXdpZHRoOiA0MDBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogaW5oZXJpdDtcbn1cblxuLmJvdW5kc0xpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RmZGZkZiAhaW1wb3J0YW50O1xufVxuXG4vKiFcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUb2tCb3gsIEluYy5cbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICogaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cbi5jdXN0b20tY2xhc3Mge1xuICBtaW4taGVpZ2h0OiAwcHggIWltcG9ydGFudDtcbn1cblxuLyoqXG4gKiBPVCBCYXNlIHN0eWxlc1xuICovXG5cbi8qIFJvb3QgT1Qgb2JqZWN0LCB0aGlzIGlzIHdoZXJlIG91ciBDU1MgcmVzZXQgaGFwcGVucyAqL1xuLk9UX3Jvb3QsXG4uT1Rfcm9vdCAqIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xuICBmb250LXNpemU6IDEwMCU7XG4gIGZvbnQtZmFtaWx5OiAnVWJ1bnR1Jywgc2Fucy1zZXJpZjtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG4uT1RfZGlhbG9nLWNlbnRlcmluZyB7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uT1RfZGlhbG9nLWNlbnRlcmluZy1jaGlsZCB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5PVF9kaWFsb2cge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcblxuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1mYW1pbHk6ICdVYnVudHUnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG59XG5cbi5PVF9kaWFsb2cgKiB7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAtd2Via2l0LWJveC1zaXppbmc6IGluaGVyaXQ7XG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XG59XG5cbi5PVF9jbG9zZUJ1dHRvbiB7XG4gIGNvbG9yOiAjOTk5OTk5O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE4cHg7XG4gIHRvcDogMDtcbn1cblxuLk9UX2RpYWxvZy1tZXNzYWdlcyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLk9UX2RpYWxvZy1tZXNzYWdlcy1tYWluIHtcbiAgbWFyZ2luLWJvdHRvbTogMzZweDtcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XG5cbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4uT1RfZGlhbG9nLW1lc3NhZ2VzLW1pbm9yIHtcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcblxuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBjb2xvcjogI2E0YTRhNDtcbn1cblxuLk9UX2RpYWxvZy1tZXNzYWdlcy1taW5vciBzdHJvbmcge1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLk9UX2RpYWxvZy1hY3Rpb25zLWNhcmQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5PVF9kaWFsb2ctYnV0dG9uLXRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG5cbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjOTk5OTk5O1xufVxuLk9UX2RpYWxvZy1idXR0b24tdGl0bGUgbGFiZWwge1xuICBjb2xvcjogIzk5OTk5OTtcbn1cblxuLk9UX2RpYWxvZy1idXR0b24tdGl0bGUgYSxcbi5PVF9kaWFsb2ctYnV0dG9uLXRpdGxlIGE6bGluayxcbi5PVF9kaWFsb2ctYnV0dG9uLXRpdGxlIGE6YWN0aXZlIHtcbiAgY29sb3I6ICMwMmExZGU7XG59XG5cbi5PVF9kaWFsb2ctYnV0dG9uLXRpdGxlIHN0cm9uZyB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXdlaWdodDogMTAwO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLk9UX2RpYWxvZy1idXR0b24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cbiAgbWFyZ2luLWJvdHRvbTogMThweDtcbiAgcGFkZGluZzogMCAxZW07XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogIzFjYTNkYztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5PVF9kaWFsb2ctYnV0dG9uOmRpc2FibGVkIHtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4uT1RfZGlhbG9nLWJ1dHRvbi1sYXJnZSB7XG4gIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICBwYWRkaW5nLXRvcDogOXB4O1xuICBwYWRkaW5nLWJvdHRvbTogOXB4O1xuXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuLk9UX2RpYWxvZy1idXR0b24tc21hbGwge1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgcGFkZGluZy10b3A6IDlweDtcbiAgcGFkZGluZy1ib3R0b206IDlweDtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0NDQ0O1xuICBjb2xvcjogIzk5OTk5OTtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uT1RfZGlhbG9nLXByb2dyZXNzLWJhciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgLyogcHJldmVudHMgbWFyZ2luIGNvbGxhcHNlICovXG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDQxcHg7XG5cbiAgYm9yZGVyOiAxcHggc29saWQgIzRlNGU0ZTtcbiAgaGVpZ2h0OiA4cHg7XG59XG5cbi5PVF9kaWFsb2ctcHJvZ3Jlc3MtYmFyLWZpbGwge1xuICBoZWlnaHQ6IDEwMCU7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogIzI5YTRkYTtcbn1cblxuLk9UX2RpYWxvZy1wbHVnaW4tdXBncmFkaW5nIC5PVF9kaWFsb2ctcGx1Z2luLXVwZ3JhZGUtcGVyY2VudGFnZSB7XG4gIGxpbmUtaGVpZ2h0OiA1NHB4O1xuXG4gIGZvbnQtc2l6ZTogNDhweDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cblxuLyogSGVscGVycyAqL1xuXG4uT1RfY2VudGVyZWQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIG1hcmdpbjogMDtcbn1cblxuLk9UX2RpYWxvZy1oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uT1RfZGlhbG9nLWJ1dHRvbi1ibG9jayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uT1RfZGlhbG9nLW5vLW5hdHVyYWwtbWFyZ2luIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLyogUHVibGlzaGVyIGFuZCBTdWJzY3JpYmVyIHN0eWxlcyAqL1xuXG4uT1RfcHVibGlzaGVyLFxuLk9UX3N1YnNjcmliZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi13aWR0aDogNDhweDtcbiAgbWluLWhlaWdodDogNDhweDtcbn1cblxuLk9UX3B1Ymxpc2hlciAuT1RfdmlkZW8tZWxlbWVudCxcbi5PVF9zdWJzY3JpYmVyIC5PVF92aWRlby1lbGVtZW50IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcblxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAgMDtcblxuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XG59XG5cbi8qIFN0eWxlcyB0aGF0IGFyZSBhcHBsaWVkIHdoZW4gdGhlIHZpZGVvIGVsZW1lbnQgc2hvdWxkIGJlIG1pcnJvcmVkICovXG4uT1RfcHVibGlzaGVyLk9UX21pcnJvcmVkIC5PVF92aWRlby1lbGVtZW50IHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKC0xLCAxKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgtMSwgMSk7XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcbn1cblxuLk9UX3N1YnNjcmliZXJfZXJyb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uT1Rfc3Vic2NyaWJlcl9lcnJvciA+IHAge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4vKiBUaGUgcHVibGlzaGVyL3N1YnNjcmliZXIgbmFtZS9tdXRlIGJhY2tncm91bmQgKi9cbi5PVF9wdWJsaXNoZXIgLk9UX2Jhcixcbi5PVF9zdWJzY3JpYmVyIC5PVF9iYXIsXG4uT1RfcHVibGlzaGVyIC5PVF9uYW1lLFxuLk9UX3N1YnNjcmliZXIgLk9UX25hbWUsXG4uT1RfcHVibGlzaGVyIC5PVF9hcmNoaXZpbmcsXG4uT1Rfc3Vic2NyaWJlciAuT1RfYXJjaGl2aW5nLFxuLk9UX3B1Ymxpc2hlciAuT1RfYXJjaGl2aW5nLXN0YXR1cyxcbi5PVF9zdWJzY3JpYmVyIC5PVF9hcmNoaXZpbmctc3RhdHVzLFxuLk9UX3B1Ymxpc2hlciAuT1RfYXJjaGl2aW5nLWxpZ2h0LWJveCxcbi5PVF9zdWJzY3JpYmVyIC5PVF9hcmNoaXZpbmctbGlnaHQtYm94IHtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbXMtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMzRweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uT1RfcHVibGlzaGVyIC5PVF9iYXIsXG4uT1Rfc3Vic2NyaWJlciAuT1RfYmFyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuXG4uT1RfcHVibGlzaGVyIC5PVF9lZGdlLWJhci1pdGVtLFxuLk9UX3N1YnNjcmliZXIgLk9UX2VkZ2UtYmFyLWl0ZW0ge1xuICB6LWluZGV4OiAxOyAvKiByZXF1aXJlZCB0byBnZXQgYXVkaW8gbGV2ZWwgbWV0ZXIgdW5kZXJuZWF0aCAqL1xufVxuXG4vKiBUaGUgcHVibGlzaGVyL3N1YnNjcmliZXIgbmFtZSBwYW5lbC9hcmNoaXZpbmcgc3RhdHVzIGJhciAqL1xuLk9UX3B1Ymxpc2hlciAuT1RfbmFtZSxcbi5PVF9zdWJzY3JpYmVyIC5PVF9uYW1lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAzNHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBwYWRkaW5nOiAwIDRweCAwIDM2cHg7XG59XG5cbi5PVF9wdWJsaXNoZXIgLk9UX2FyY2hpdmluZy1zdGF0dXMsXG4uT1Rfc3Vic2NyaWJlciAuT1RfYXJjaGl2aW5nLXN0YXR1cyB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgdG9wOiBhdXRvO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDM0cHg7XG4gIHBhZGRpbmc6IDAgNHB4O1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAzNHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4uT1RfbWljcm8gLk9UX2FyY2hpdmluZy1zdGF0dXMsXG4uT1RfbWljcm86aG92ZXIgLk9UX2FyY2hpdmluZy1zdGF0dXMsXG4uT1RfbWluaSAuT1RfYXJjaGl2aW5nLXN0YXR1cyxcbi5PVF9taW5pOmhvdmVyIC5PVF9hcmNoaXZpbmctc3RhdHVzIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLk9UX3B1Ymxpc2hlciAuT1RfYXJjaGl2aW5nLWxpZ2h0LWJveCxcbi5PVF9zdWJzY3JpYmVyIC5PVF9hcmNoaXZpbmctbGlnaHQtYm94IHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICB0b3A6IGF1dG87XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IGF1dG87XG4gIHdpZHRoOiAzNHB4O1xuICBoZWlnaHQ6IDM0cHg7XG59XG5cbi5PVF9hcmNoaXZpbmctbGlnaHQge1xuICB3aWR0aDogN3B4O1xuICBoZWlnaHQ6IDdweDtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE0cHg7XG4gIGxlZnQ6IDE0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NzU3NTc7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDVweCAxcHggIzU3NTc1NztcbiAgYm94LXNoYWRvdzogMCAwIDVweCAxcHggIzU3NTc1Nztcbn1cblxuLk9UX2FyY2hpdmluZy1saWdodC5PVF9hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTcwZDEzO1xuICBhbmltYXRpb246IE9UX3B1bHNlIDEuM3MgZWFzZS1pbjtcbiAgLXdlYmtpdC1hbmltYXRpb246IE9UX3B1bHNlIDEuM3MgZWFzZS1pbjtcbiAgLW1vei1hbmltYXRpb246IE9UX3B1bHNlIDEuM3MgZWFzZS1pbjtcbiAgLXdlYmtpdC1hbmltYXRpb246IE9UX3B1bHNlIDEuM3MgZWFzZS1pbjtcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gIC1tb3otYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBPVF9wdWxzZSB7XG4gIDAlIHtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwcHggMHB4ICNjNzAwMTk7XG4gICAgYm94LXNoYWRvdzogMCAwIDBweCAwcHggI2M3MDAxOTtcbiAgfVxuXG4gIDMwJSB7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgNXB4IDFweCAjYzcwMDE5O1xuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggMXB4ICNjNzAwMTk7XG4gIH1cblxuICA1MCUge1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDVweCAxcHggI2M3MDAxOTtcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4IDFweCAjYzcwMDE5O1xuICB9XG5cbiAgODAlIHtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwcHggMHB4ICNjNzAwMTk7XG4gICAgYm94LXNoYWRvdzogMCAwIDBweCAwcHggI2M3MDAxOTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDBweCAwcHggI2M3MDAxOTtcbiAgICBib3gtc2hhZG93OiAwIDAgMHB4IDBweCAjYzcwMDE5O1xuICB9XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBPVF9wdWxzZSB7XG4gIDAlIHtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwcHggMHB4ICNjNzAwMTk7XG4gICAgYm94LXNoYWRvdzogMCAwIDBweCAwcHggI2M3MDAxOTtcbiAgfVxuXG4gIDMwJSB7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgNXB4IDFweCAjYzcwMDE5O1xuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggMXB4ICNjNzAwMTk7XG4gIH1cblxuICA1MCUge1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDVweCAxcHggI2M3MDAxOTtcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4IDFweCAjYzcwMDE5O1xuICB9XG5cbiAgODAlIHtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwcHggMHB4ICNjNzAwMTk7XG4gICAgYm94LXNoYWRvdzogMCAwIDBweCAwcHggI2M3MDAxOTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDBweCAwcHggI2M3MDAxOTtcbiAgICBib3gtc2hhZG93OiAwIDAgMHB4IDBweCAjYzcwMDE5O1xuICB9XG59XG5cbi5PVF9taW5pIC5PVF9iYXIsXG4uT1RfYmFyLk9UX21vZGUtbWluaSxcbi5PVF9iYXIuT1RfbW9kZS1taW5pLWF1dG8ge1xuICBib3R0b206IDA7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLk9UX21pbmkgLk9UX25hbWUuT1RfbW9kZS1vZmYsXG4uT1RfbWluaSAuT1RfbmFtZS5PVF9tb2RlLW9uLFxuLk9UX21pbmkgLk9UX25hbWUuT1RfbW9kZS1hdXRvLFxuLk9UX21pbmk6aG92ZXIgLk9UX25hbWUuT1RfbW9kZS1hdXRvIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLk9UX3B1Ymxpc2hlciAuT1RfbmFtZSxcbi5PVF9zdWJzY3JpYmVyIC5PVF9uYW1lIHtcbiAgbGVmdDogMTBweDtcbiAgcmlnaHQ6IDM3cHg7XG4gIGhlaWdodDogMzRweDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuXG4uT1RfcHVibGlzaGVyIC5PVF9tdXRlLFxuLk9UX3N1YnNjcmliZXIgLk9UX211dGUge1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWluZGVudDogLTk5OTllbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbi5PVF9wdWJsaXNoZXIgLk9UX211dGUsXG4uT1Rfc3Vic2NyaWJlciAuT1RfbXV0ZSB7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICBoZWlnaHQ6IDM2cHg7XG4gIHdpZHRoOiAzN3B4O1xufVxuXG4uT1RfbWluaSAuT1RfbXV0ZSxcbi5PVF9wdWJsaXNoZXIuT1RfbWluaSAuT1RfbXV0ZS5PVF9tb2RlLWF1dG8uT1RfbW9kZS1vbi1ob2xkLFxuLk9UX3N1YnNjcmliZXIuT1RfbWluaSAuT1RfbXV0ZS5PVF9tb2RlLWF1dG8uT1RfbW9kZS1vbi1ob2xkIHtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi10b3A6IC0xOHB4O1xuICBtYXJnaW4tbGVmdDogLTE4LjVweDtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG59XG5cbi5PVF9wdWJsaXNoZXIgLk9UX211dGUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCTUFBQUFjQ0FNQUFBQzAySFFyQUFBQTFWQk1WRVVBQUFEMytQajMrUGozK1BqMytQajMrUGozK1BqMytQajMrUGozK1BuMytQajMrUGozK1BqMytQajMrUGozK1BqMytQajMrUGozK1BqMytQajMrUGozK1BqMytQajMrUGozK1BqMytQajMrUGozK1BqMytQajMrUGozK1BqMytQajMrUGozK1BqMytQajMrUGozK1BqMytQajMrUGozK1BqMytQajMrUGozK1BqMytQajMrUGozK1BqMytQajMrUGozK1BqMytQbjMrUGozK1BqMytQajMrUGozK1BqMytQajMrUGozK1BqMytQajMrUGozK1BqMytQajMrUGozK1BqMytQajMrUGozK1BqMzkvajMrUGozK1BuNCtQay9KUk1sQUFBQVEzUlNUbE1BQkFVSENRb0xEaEFRRVJ3ZEhpQWpMakF4T0Q5QVNGQlJWbDFtYm5aNmZIMkxqSStRa2FXcXJyQzF1THpBd2NYSnljckwxTlhqNU9mbzZ1M3c5ZnI3L1AzK2Q0TTMrUUFBQVFCSlJFRlVHQmxWd1lkQ2dsQUFCZENMbHI1VW5pam0zaE1VdEJ6bEJMU3IvLzlKZ1VUb09RZ1ZKZ2NlSmdVOGFIZ01lQTM4SzUwWk9wY1FtVFB3Y3lYbitKTThNM0pKSXFReXBpSWtlWGVsVHlJa0daUHdLUzFOTWlhMWxnS1RWa2FFM29RUUdZc21ITnFTTVduVGdVRmJNaVp0R2xEMmRwYXhyTDFYZ00waTRaSzhNZUFtRmhzQXMyOU1HWm5pYXdhZ1M2M29NT1FVTlhZQjVEMEQxUk1EcHlvTUx3L2ZpRTJvZy9WK1BWRFI1QWlCbDAvMlV3aWsrdng0eFYzYTVHNVllNjhOZDFjempValpja202VmhtUGNpUnplQ1pJQ2p3VEpBVmlRcSszZStTdDE2N3JBb0hLOHNMWVpWa0JZUENaQVovZUdhKzJSNUxIN1dyYzBZRmYvTzlKM3lCREZhb0FBQUFBU1VWT1JLNUNZSUk9KTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogOXB4IDVweDtcbn1cblxuLk9UX3B1Ymxpc2hlciAuT1RfbXV0ZS5PVF9hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCVUFBQUFkQ0FZQUFBQkZSQ2Y3QUFBRGNFbEVRVlJJaWFXVlhXaGNSUlRIZjdOTmQyYUR0VUtNSWpUcGc0dWZGSXVpVU9tREVXbTBWaTNWWWhYUnFJZ2dRaDRzV0pGU2lnOStvT2hUS1NwSVJVV01JQklyMmtwdG9UYmdVNm9veENpSWpSKzE0a2NKbWY5c05jZUhuZDNlYm5jM1V2OXd1WGZPelB6bW5ETXo1em96R3dkV0FiYzY1dzVSVUpROGNDMndESmdGSmlvaC9NSkNNck54cTJ2T3pLNEhtSXZSUmVteEtQMFJKV3Q1M283UytkMll6c3g2Z1ErQUlVREFuVXFwQkx6WFpkNFJZRlVsaEIvYmRaYWNjM1BBT21BY0NNQzd3ZnZGd0xOZG9BUEF5eDA5Ylh5WVdSbDRFN2dEbUFkR2xOS0Z3TFl1OEdvbGhPOU84N1JKZDY0R2JNcmdFdkI2OFA0b3NNV2RYTHRWVjdjemxvb05wVlJXU3M4RE83TnBSL0IrM3JCSHN2ZXRDZ3RDTVR4d1FDbTlCYnlRcmM4RjcvdUJleDN1UkNlWE8wUHJVWjROZkt5VVBnV2V5ajNiZy9jckROc0lSR3dCYUpRR29yUTNTdmRuMndIZ2MyQlVLYjBEUEpIdGp3ZnZid1J1Y2M3dHorTitpOUxGVWRvWHBmVk4zNkkwQ1Z3QlRGSS9xOWUxTFB4VDhQNHFZRWR1NzBxMTJtWXpXdzFNWVF6amVKRjZ6cStzaEhDNEI3amtsT0JQUC9UelN1bmg0UDBEd0t2QWZiNWM5a3JwZStDY3dzRW9aZGJoRXZCTTl3eFJBbDVSU2hjQTl3QW5nRTNCKzh0THBkTHV3cmhwNE1ObUswcGZSV2t5U3I3TlhTOCtMNW5aYldaV3kvVmluMUlhaXRKblVUcXZ3ZXZKNzFsZ1NTV0VGS1VmSEc3UTJtL3hxRkphR3J5L0dYZ2ZHUExsOG1KZ3JYUHVyMkpvVUM4UXkzT3BHK3NBYkdoRUtUMEVyQVdPQTZ1QlBXYlcxd3I5Qk9nRmJnS2V6b3Qwa0FQWXFKUUExZ0MvQTljQSs4MnN2emtzU24xUitqTktYMFNwbk0vZTF4M3lxaWc5Mkpoclppdk03RmpPOGJTWkxTdUNSL09rMTZLMEtNTkhvalFXcFlrbzdZN1MxaWdONVBFM1JPbDRsTmFaMlVWbU5wUEJVMDFvcnZadlpQQ2VLRlhiQlIrbEVLVnRVYXBGYVNaS2c5bmpxcGw5YVdZVHJtWENJbUE3c0NXYjlsSy9qajlUcndrcmdBMUFIM0FRdUtzU3dremJyTGZ4cGdwc0J0WUR4Zi9SM3htMkV4aXJoTkN1SEhaWFRzbVJ3aWF0K1MvelN0MDZleXNWQS80cG1Hci9HM3FtNmlrMjh2MjlGS2dDZzhCUzZwdlMwS05SR2daK0JiNEZwc3hzT2tmVWxNdXdEY0JXWU9VWk9IWU0yQVU4V1FtaEJpZkR2NzBPN1BqWDdLWis0RzdnM0ZNOHpkNnVCSWFCeTRBcXhuSWNad0ZMQ292UEFoRTRTajM4YjRCRHdFZVZFRktEOVM5NEtoam40ODZ2M1FBQUFBQkpSVTVFcmtKZ2dnPT0pO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA5cHggNHB4O1xufVxuXG4uT1Rfc3Vic2NyaWJlciAuT1RfbXV0ZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJjQUFBQVRDQVlBQUFCN3U1YTJBQUFCeDBsRVFWUTRqYVdVdjQ4TlVSaUduM09ObUNzMzJaQmQyOGh0MWdxeVpBa0YyMXlsUWtFaVNwMmVocERsRDFCb0ZHcXFWZEpvaFlLSTdNYVB4TW9WTmdoQ1dNRis3eWJMVWV3bk9YZmNNV085eWVRODU3em5lOCtYbVpPQkdqSnByMGt2VElvbXZUWnBTNTI2VUNPNERVd0Q2NEZqd0NGZ3Fabm5SK29jOExmZ3pLUTczdkdzcjQyWnRHalNRRlY5bzhLZkJDYWNad0NhZWY0WW1BZjJyempjcE4zQTJXU3BtL0Fzc0tjcVBETnBEQmpzNDEwQ1ZpWHpUd2svQTdiMUM0d3hEZ09uZ0FzWmNBWFkyYnVEZnAvNlM0RjNsRFM4RGpnQnpEV0FqWC9ZL2UvUWdZUy9BaHNLSGErT01RNkdFSjRDajRCT0F4Z3E2YUNvd3ladGRmNE90QXIrRkhETytSNHdXblZiaWhyM2NRbklDdDRib08zOEdXajlhL2ljandPQUN0NG00SzN6RVBBK0F4YUF0VFdDbndOM2x6SGtFTDhWL09QQUd1ZDl3SzJHRjlYUjFXYWUvMXpHMkFJK3BHWUk0VlVJb1J0akhBYzJBOWN6NExSUGV2WUNaK2k5LzRzSnQ0R1hKVTEwZ2FQQXpkSTJUVHJvLzVUZno4WEVlMkxTWkdteHEvU0ROdlA4Qm5BNVdScng0QndZQmU2dk9OeDFFbmpvdkd2QkxBQWQ0QWR3dXlxOFVpYU5tRFR2cithOFNROU11dmJmd2NrQkhaUGUrUUVmVGRwZXArNFhabVBCSGlIZ3o3NEFBQUFBU1VWT1JLNUNZSUk9KTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogOHB4IDdweDtcbn1cblxuLk9UX3N1YnNjcmliZXIgLk9UX211dGUuT1RfYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQmdBQUFBVUNBWUFBQUNYdGYyREFBQUN0a2xFUVZRNGpaMlZTWWlVUnhUSGYrL1Q5TmM5aVJyQnVZeVNtSXNYVVU5aUZNRUZFUlJCdkFqSkxVUWk1aW9pSHZTU2NmVG1ncUM0WEFUMVpJZ0x1SkhrSUNhYVFBZ0tJMmhBVUJUMzBialVxN2JidjRldWtYSzAyOUYzK2VxdHYvZnFLNnFRZEVuU05VbVQ2Q0RCL2J2Z2ZqTzROOXpqMlJEODAwN3hnMUlBQmt3RXprbWEwcWI0UEdBUE1CWllMdFNEOGVOd0FFanFUbE5JMGdOSk00WVU3dzd1dDRPN2d2dWhaRnNSM0M4TkM1QkJMaVRJWTBtek04QXZxYmlDKytwayt6THBFOTVYdXdBd3MzdkFRdUJQWURSd1d0TDg0UDR0c0RTTHY1b2F1ZzRFWU9hd0FNRjlqTWRvTHhxTlpjRHZRQTA0VVZZcUw0Ry9zdmo3QUYyMW1oSnNjcnZDa3NZQkZPN3hjMkFBR0dnMm1yZGp2ZjRyY0F5b21ObitzbExabVVFR0Jnc1lkaDk0NXhaSm1ndmNrRFNyRUpwSzZ5U0JnVjZxMTJPOEFCd0dQakd6ZldXbHNqZE45cnBqb1NmQStEWURYQVJHQWtzSzRJczNYQzFVYjR6MWY0Q0RRR0ZtdTZ0bGVRU1lrMFUrcDdXVmVlZkxKYzAwczRmQWVXQjZRZXVudmowbTJ1Z3g5Z083a21scnRTeHZCZmN5NmZYVVpTNnJnRy9TK2pMUVV3Q1ZObU1DOUhxTTE0RXRTZStybHVXYXpOOFlFdjhJcUtaMUUxcW5hSURPMHVjeDNnWDZrdjZUcE0zQU0rRC9JYkdqZ1A2MC9ncTRXUUEzM2dNQTJPUXhQZ0hXSlgxdHRTd0w0RkFlWkdZTGdCMlNhc0JzNEE4TDdxT0JmOU0wdVhRQjNhK1RNWVNtVmN0eURyQTltZmNCSzgyc21TZEtXZ0NjQWFhMWJUbTRmeGJjLzh1dUNRWDNSYW5BRDVLYTZXbzVJR25FMEh4SlBaMDNwUVg1T3JnM01zRDNBTzV4WExQWlhKOUJqa3JxZEZnNlFqWmtnRzNKdHN3OTNwRzBWRkk5UVU1SzZ2b1lRQkhjVHlkQWZ3aGVCSTlIZ3Z2UEFKSVdTM3FlSUw5Skd2VXhrTzdnZmkxQnJxVHZ3a0cvcFBtU25pYklxVHpYUGdBeUVWZ0JqQUV1MXFyVlBiay9QVlRIZ2IvTmJQR2cvUlZJek9RcXpTVEJhUUFBQUFCSlJVNUVya0pnZ2c9PSk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDdweCA3cHg7XG59XG5cbi8qKlxuICogU3R5bGVzIGZvciBkaXNwbGF5IG1vZGVzXG4gKlxuICogTm90ZTogSXQncyBpbXBvcnRhbnQgdGhhdCB0aGVzZSBjb21wbGV0ZWx5IGNvbnRyb2wgdGhlIGRpc3BsYXkgYW5kIG9wYWNpdHlcbiAqIGF0dHJpYnV0ZXMsIG5vIG90aGVyIHNlbGVjdG9ycyBzaG91bGQgYXRlbXB0IHRvIGNoYW5nZSB0aGVtLlxuICovXG5cbi8qIERlZmF1bHQgZGlzcGxheSBtb2RlIHRyYW5zaXRpb25zIGZvciB2YXJpb3VzIGNocm9tZSBlbGVtZW50cyAqL1xuLk9UX3B1Ymxpc2hlciAuT1RfZWRnZS1iYXItaXRlbSxcbi5PVF9zdWJzY3JpYmVyIC5PVF9lZGdlLWJhci1pdGVtIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiB0b3AsIGJvdHRvbSwgb3BhY2l0eTtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdG9wLCBib3R0b20sIG9wYWNpdHk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41cztcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG59XG5cbi5PVF9wdWJsaXNoZXIgLk9UX2VkZ2UtYmFyLWl0ZW0uT1RfbW9kZS1vZmYsXG4uT1Rfc3Vic2NyaWJlciAuT1RfZWRnZS1iYXItaXRlbS5PVF9tb2RlLW9mZixcbi5PVF9wdWJsaXNoZXIgLk9UX2VkZ2UtYmFyLWl0ZW0uT1RfbW9kZS1hdXRvLFxuLk9UX3N1YnNjcmliZXIgLk9UX2VkZ2UtYmFyLWl0ZW0uT1RfbW9kZS1hdXRvLFxuLk9UX3B1Ymxpc2hlciAuT1RfZWRnZS1iYXItaXRlbS5PVF9tb2RlLW1pbmktYXV0byxcbi5PVF9zdWJzY3JpYmVyIC5PVF9lZGdlLWJhci1pdGVtLk9UX21vZGUtbWluaS1hdXRvIHtcbiAgdG9wOiAtMjVweDtcbiAgb3BhY2l0eTogMDtcbn1cblxuLk9UX3B1Ymxpc2hlciAuT1RfZWRnZS1iYXItaXRlbS5PVF9tb2RlLW9mZixcbi5PVF9zdWJzY3JpYmVyIC5PVF9lZGdlLWJhci1pdGVtLk9UX21vZGUtb2ZmIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLk9UX21pbmkgLk9UX211dGUuT1RfbW9kZS1hdXRvLFxuLk9UX3B1Ymxpc2hlciAuT1RfbXV0ZS5PVF9tb2RlLW1pbmktYXV0byxcbi5PVF9zdWJzY3JpYmVyIC5PVF9tdXRlLk9UX21vZGUtbWluaS1hdXRvIHtcbiAgdG9wOiA1MCU7XG59XG5cbi5PVF9wdWJsaXNoZXIgLk9UX2VkZ2UtYmFyLWl0ZW0uT1RfZWRnZS1ib3R0b20uT1RfbW9kZS1vZmYsXG4uT1Rfc3Vic2NyaWJlciAuT1RfZWRnZS1iYXItaXRlbS5PVF9lZGdlLWJvdHRvbS5PVF9tb2RlLW9mZixcbi5PVF9wdWJsaXNoZXIgLk9UX2VkZ2UtYmFyLWl0ZW0uT1RfZWRnZS1ib3R0b20uT1RfbW9kZS1hdXRvLFxuLk9UX3N1YnNjcmliZXIgLk9UX2VkZ2UtYmFyLWl0ZW0uT1RfZWRnZS1ib3R0b20uT1RfbW9kZS1hdXRvLFxuLk9UX3B1Ymxpc2hlciAuT1RfZWRnZS1iYXItaXRlbS5PVF9lZGdlLWJvdHRvbS5PVF9tb2RlLW1pbmktYXV0byxcbi5PVF9zdWJzY3JpYmVyIC5PVF9lZGdlLWJhci1pdGVtLk9UX2VkZ2UtYm90dG9tLk9UX21vZGUtbWluaS1hdXRvIHtcbiAgdG9wOiBhdXRvO1xuICBib3R0b206IC0yNXB4O1xufVxuXG4uT1RfcHVibGlzaGVyIC5PVF9lZGdlLWJhci1pdGVtLk9UX21vZGUtb24sXG4uT1Rfc3Vic2NyaWJlciAuT1RfZWRnZS1iYXItaXRlbS5PVF9tb2RlLW9uLFxuLk9UX3B1Ymxpc2hlciAuT1RfZWRnZS1iYXItaXRlbS5PVF9tb2RlLWF1dG8uT1RfbW9kZS1vbi1ob2xkLFxuLk9UX3N1YnNjcmliZXIgLk9UX2VkZ2UtYmFyLWl0ZW0uT1RfbW9kZS1hdXRvLk9UX21vZGUtb24taG9sZCxcbi5PVF9wdWJsaXNoZXI6aG92ZXIgLk9UX2VkZ2UtYmFyLWl0ZW0uT1RfbW9kZS1hdXRvLFxuLk9UX3N1YnNjcmliZXI6aG92ZXIgLk9UX2VkZ2UtYmFyLWl0ZW0uT1RfbW9kZS1hdXRvLFxuLk9UX3B1Ymxpc2hlcjpob3ZlciAuT1RfZWRnZS1iYXItaXRlbS5PVF9tb2RlLW1pbmktYXV0byxcbi5PVF9zdWJzY3JpYmVyOmhvdmVyIC5PVF9lZGdlLWJhci1pdGVtLk9UX21vZGUtbWluaS1hdXRvIHtcbiAgdG9wOiAwO1xuICBvcGFjaXR5OiAxO1xufVxuXG4uT1RfbWluaSAuT1RfbXV0ZS5PVF9tb2RlLW9uLFxuLk9UX21pbmk6aG92ZXIgLk9UX211dGUuT1RfbW9kZS1hdXRvLFxuLk9UX211dGUuT1RfbW9kZS1taW5pLFxuLk9UX3Jvb3Q6aG92ZXIgLk9UX211dGUuT1RfbW9kZS1taW5pLWF1dG8ge1xuICB0b3A6IDUwJTtcbn1cblxuLk9UX3B1Ymxpc2hlciAuT1RfZWRnZS1iYXItaXRlbS5PVF9lZGdlLWJvdHRvbS5PVF9tb2RlLW9uLFxuLk9UX3N1YnNjcmliZXIgLk9UX2VkZ2UtYmFyLWl0ZW0uT1RfZWRnZS1ib3R0b20uT1RfbW9kZS1vbixcbi5PVF9wdWJsaXNoZXI6aG92ZXIgLk9UX2VkZ2UtYmFyLWl0ZW0uT1RfZWRnZS1ib3R0b20uT1RfbW9kZS1hdXRvLFxuLk9UX3N1YnNjcmliZXI6aG92ZXIgLk9UX2VkZ2UtYmFyLWl0ZW0uT1RfZWRnZS1ib3R0b20uT1RfbW9kZS1hdXRvIHtcbiAgdG9wOiBhdXRvO1xuICBib3R0b206IDA7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi8qIExvYWQgYW5pbWF0aW9uICovXG4uT1Rfcm9vdCAuT1RfdmlkZW8tbG9hZGluZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogbm9uZTtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xufVxuXG4uT1Rfcm9vdCAuT1RfdmlkZW8tbG9hZGluZyAuT1RfdmlkZW8tbG9hZGluZy1zcGlubmVyIHtcbiAgYmFja2dyb3VuZDogdXJsKGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIWnBaWGRDYjNnOUlpMHlNQ0F0TWpBZ01qUXdJREkwTUNJK1BHUmxabk0rUEd4cGJtVmhja2R5WVdScFpXNTBJR2xrUFNKaElpQjRNajBpTUNJZ2VUSTlJakVpUGp4emRHOXdJRzltWm5ObGREMGlNQ0lnYzNSdmNDMWpiMnh2Y2owaUkyWm1aaUlnYzNSdmNDMXZjR0ZqYVhSNVBTSXdJaTgrUEhOMGIzQWdiMlptYzJWMFBTSXhJaUJ6ZEc5d0xXTnZiRzl5UFNJalptWm1JaUJ6ZEc5d0xXOXdZV05wZEhrOUlqQWlMejQ4TDJ4cGJtVmhja2R5WVdScFpXNTBQanhzYVc1bFlYSkhjbUZrYVdWdWRDQnBaRDBpWWlJZ2VERTlJakVpSUhneVBTSXdJaUI1TWowaU1TSStQSE4wYjNBZ2IyWm1jMlYwUFNJd0lpQnpkRzl3TFdOdmJHOXlQU0lqWm1abUlpQnpkRzl3TFc5d1lXTnBkSGs5SWpBaUx6NDhjM1J2Y0NCdlptWnpaWFE5SWpFaUlITjBiM0F0WTI5c2IzSTlJaU5tWm1ZaUlITjBiM0F0YjNCaFkybDBlVDBpTGpBNElpOCtQQzlzYVc1bFlYSkhjbUZrYVdWdWRENDhiR2x1WldGeVIzSmhaR2xsYm5RZ2FXUTlJbU1pSUhneFBTSXhJaUI0TWowaU1DSWdlVEU5SWpFaVBqeHpkRzl3SUc5bVpuTmxkRDBpTUNJZ2MzUnZjQzFqYjJ4dmNqMGlJMlptWmlJZ2MzUnZjQzF2Y0dGamFYUjVQU0l1TURnaUx6NDhjM1J2Y0NCdlptWnpaWFE5SWpFaUlITjBiM0F0WTI5c2IzSTlJaU5tWm1ZaUlITjBiM0F0YjNCaFkybDBlVDBpTGpFMklpOCtQQzlzYVc1bFlYSkhjbUZrYVdWdWRENDhiR2x1WldGeVIzSmhaR2xsYm5RZ2FXUTlJbVFpSUhneVBTSXdJaUI1TVQwaU1TSStQSE4wYjNBZ2IyWm1jMlYwUFNJd0lpQnpkRzl3TFdOdmJHOXlQU0lqWm1abUlpQnpkRzl3TFc5d1lXTnBkSGs5SWk0eE5pSXZQanh6ZEc5d0lHOW1abk5sZEQwaU1TSWdjM1J2Y0MxamIyeHZjajBpSTJabVppSWdjM1J2Y0MxdmNHRmphWFI1UFNJdU16TWlMejQ4TDJ4cGJtVmhja2R5WVdScFpXNTBQanhzYVc1bFlYSkhjbUZrYVdWdWRDQnBaRDBpWlNJZ2VESTlJakVpSUhreFBTSXhJajQ4YzNSdmNDQnZabVp6WlhROUlqQWlJSE4wYjNBdFkyOXNiM0k5SWlObVptWWlJSE4wYjNBdGIzQmhZMmwwZVQwaUxqTXpJaTgrUEhOMGIzQWdiMlptYzJWMFBTSXhJaUJ6ZEc5d0xXTnZiRzl5UFNJalptWm1JaUJ6ZEc5d0xXOXdZV05wZEhrOUlpNDJOaUl2UGp3dmJHbHVaV0Z5UjNKaFpHbGxiblErUEd4cGJtVmhja2R5WVdScFpXNTBJR2xrUFNKbUlpQjRNajBpTVNJZ2VUSTlJakVpUGp4emRHOXdJRzltWm5ObGREMGlNQ0lnYzNSdmNDMWpiMnh2Y2owaUkyWm1aaUlnYzNSdmNDMXZjR0ZqYVhSNVBTSXVOallpTHo0OGMzUnZjQ0J2Wm1aelpYUTlJakVpSUhOMGIzQXRZMjlzYjNJOUlpTm1abVlpTHo0OEwyeHBibVZoY2tkeVlXUnBaVzUwUGp4dFlYTnJJR2xrUFNKbklqNDhaeUJtYVd4c1BTSnViMjVsSWlCemRISnZhMlV0ZDJsa2RHZzlJalF3SWo0OGNHRjBhQ0J6ZEhKdmEyVTlJblZ5YkNnallTa2lJR1E5SWswNE5pNDJMVFV3WVRFd01DQXhNREFnTUNBd0lERWdNQ0F4TURBaUlIUnlZVzV6Wm05eWJUMGlkSEpoYm5Oc1lYUmxLREV3TUNBeE1EQXBJaTgrUEhCaGRHZ2djM1J5YjJ0bFBTSjFjbXdvSTJJcElpQmtQU0pOT0RZdU5pQTFNRUV4TURBZ01UQXdJREFnTUNBeElEQWdNVEF3SWlCMGNtRnVjMlp2Y20wOUluUnlZVzV6YkdGMFpTZ3hNREFnTVRBd0tTSXZQanh3WVhSb0lITjBjbTlyWlQwaWRYSnNLQ05qS1NJZ1pEMGlUVEFnTVRBd1lURXdNQ0F4TURBZ01DQXdJREV0T0RZdU5pMDFNQ0lnZEhKaGJuTm1iM0p0UFNKMGNtRnVjMnhoZEdVb01UQXdJREV3TUNraUx6NDhjR0YwYUNCemRISnZhMlU5SW5WeWJDZ2paQ2tpSUdROUlrMHRPRFl1TmlBMU1HRXhNREFnTVRBd0lEQWdNQ0F4SURBdE1UQXdJaUIwY21GdWMyWnZjbTA5SW5SeVlXNXpiR0YwWlNneE1EQWdNVEF3S1NJdlBqeHdZWFJvSUhOMGNtOXJaVDBpZFhKc0tDTmxLU0lnWkQwaVRTMDROaTQyTFRVd1FURXdNQ0F4TURBZ01DQXdJREVnTUMweE1EQWlJSFJ5WVc1elptOXliVDBpZEhKaGJuTnNZWFJsS0RFd01DQXhNREFwSWk4K1BIQmhkR2dnYzNSeWIydGxQU0oxY213b0kyWXBJaUJrUFNKTk1DMHhNREJoTVRBd0lERXdNQ0F3SURBZ01TQTROaTQySURVd0lpQjBjbUZ1YzJadmNtMDlJblJ5WVc1emJHRjBaU2d4TURBZ01UQXdLU0l2UGp3dlp6NDhMMjFoYzJzK1BDOWtaV1p6UGp4eVpXTjBJSGRwWkhSb1BTSXhNREFsSWlCb1pXbG5hSFE5SWpFd01DVWlJSGc5SWkweU1DSWdlVDBpTFRJd0lpQnRZWE5yUFNKMWNtd29JMmNwSWlCbWFXeHNQU0lqWm1abUlpOCtQQzl6ZG1jKylcbiAgICBuby1yZXBlYXQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xuICBtYXJnaW4tdG9wOiAtMTZweDtcbiAgLXdlYmtpdC1hbmltYXRpb246IE9UX3NwaW4gMnMgbGluZWFyIGluZmluaXRlO1xuICBhbmltYXRpb246IE9UX3NwaW4gMnMgbGluZWFyIGluZmluaXRlO1xufVxuQC13ZWJraXQta2V5ZnJhbWVzIE9UX3NwaW4ge1xuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgT1Rfc3BpbiB7XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5cbi5PVF9wdWJsaXNoZXIuT1RfbG9hZGluZyAuT1RfdmlkZW8tbG9hZGluZyxcbi5PVF9zdWJzY3JpYmVyLk9UX2xvYWRpbmcgLk9UX3ZpZGVvLWxvYWRpbmcge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLk9UX3ZpZGVvLWNlbnRlcmluZyB7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uT1RfdmlkZW8tY29udGFpbmVyIHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLk9UX3ZpZGVvLXBvc3RlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogbm9uZTtcblxuICBvcGFjaXR5OiAwLjI1O1xuXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIyYVdWM1FtOTRQU0l3SURBZ05EY3hJRFEyTkNJZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWo0OGJHbHVaV0Z5UjNKaFpHbGxiblFnYVdROUltRWlJSGd5UFNJd0lpQjVNajBpTVNJK1BITjBiM0FnYjJabWMyVjBQU0kyTmk0Mk5pVWlJSE4wYjNBdFkyOXNiM0k5SWlObVptWWlMejQ4YzNSdmNDQnZabVp6WlhROUlqRXdNQ1VpSUhOMGIzQXRZMjlzYjNJOUlpTm1abVlpSUhOMGIzQXRiM0JoWTJsMGVUMGlNQ0l2UGp3dmJHbHVaV0Z5UjNKaFpHbGxiblErUEhCaGRHZ2dabWxzYkQwaWRYSnNLQ05oS1NJZ1pEMGlUVGM1SURNd09HTXhOQzR5TlMwMkxqVWdOVFF1TWpVdE1Ua3VOelVnTnpFdE1qa2dPUzB6TGpJMUlESTFMVEl4SURJMUxUSXhjek11TnpVdE1UTWdNeTB5TW1NdE1TNDNOUzAyTGpjMUxURTFMVFF6TFRFMUxUUXpMVEl1TlNBekxUUXVOelF4SURNdU1qVTVMVGNnTVMwekxqSTFMVGN1TlMweU1DNDFMVFEwTGpVdE1UWXROVGNnTVM0eU5TMDNMalVnTVRBdE5pQXhNQzAyTFRFeExqSTFMVE16TGpjMUxUZ3ROamN0T0MwMk4zTXVNRGN6TFRjdU16UTJJRFl0TVRWakxUTXVORGd1TmpNM0xUa2dOQzA1SURRZ01pNDFOak10TVRFdU56STNJREUxTFRJeElERTFMVEl4SUM0eE5EZ3RMak14TWkweExqTXlNUzB4TGpRMU5DMHhNQ0F4SURFdU5TMHlMamM0SURFMkxqWTNOUzA0TGpZMU5DQXpNQzB4TVNBekxqYzROeTA1TGpNMk1TQXhNaTQzT0RJdE1UY3VNems0SURJeUxUSXlMVEl1TXpZMUlETXVNVE16TFRNZ05pMHpJRFp6TVRVdU5qUTNMVGd1TURnNElEUXhMVFpqTFRFNUxqYzFJREl0TWpRZ05pMHlOQ0EyY3pjMExqVXRNVEF1TnpVZ01UQTBJRE0zWXpjdU5TQTVMalVnTWpRdU56VWdOVFV1TnpVZ01UQWdPRGtnTXk0M05TMHhMalVnTkM0MUxUUXVOU0E1SURFZ0xqSTFJREUwTGpjMUxURXhMalVnTmpNdE1Ua2dOakl0TWk0M05TQXhMVFF0TXkwMExUTXRNVEF1TnpVZ01qa3VOUzB4TkNBek9DMHhOQ0F6T0MweUlEUXVNalV0TXk0M05TQXhPQzQxTFRFZ01qSWdNUzR5TlNBMExqVWdNak1nTWpNZ01qTWdNak5zTVRJM0lEVXpZek0zSURNMUlESXpJREV6TlNBeU15QXhNelZNTUNBME5qUnpMVE10T1RZdU56VWdNVFF0TVRJd1l6VXVNalV0Tmk0eU5TQXlNUzQzTlMweE9TNDNOU0EyTlMwek5ub2lMejQ4TDNOMlp6ND0pO1xuICBiYWNrZ3JvdW5kLXNpemU6IGF1dG8gNzYlO1xufVxuXG4uT1RfZml0LW1vZGUtY292ZXIgLk9UX3ZpZGVvLWVsZW1lbnQge1xuICAtby1vYmplY3QtZml0OiBjb3ZlcjtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi8qIFdvcmthcm91bmQgZm9yIGlPUyBmcmVlemluZyBpc3N1ZSB3aGVuIGNyb3BwaW5nIHZpZGVvcyAqL1xuLyogaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE3NjQzOSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gIC5PVF9zdWJzY3JpYmVyLk9UX0ZvcmNlQ29udGFpbi5PVF9maXQtbW9kZS1jb3ZlciAuT1RfdmlkZW8tZWxlbWVudCB7XG4gICAgLW8tb2JqZWN0LWZpdDogY29udGFpbiAhaW1wb3J0YW50O1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW4gIWltcG9ydGFudDtcbiAgfVxufVxuXG4uT1RfZml0LW1vZGUtY29udGFpbiAuT1RfdmlkZW8tZWxlbWVudCB7XG4gIC1vLW9iamVjdC1maXQ6IGNvbnRhaW47XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG5cbi5PVF9maXQtbW9kZS1jb3ZlciAuT1RfdmlkZW8tcG9zdGVyIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGJvdHRvbTtcbn1cblxuLk9UX2ZpdC1tb2RlLWNvbnRhaW4gLk9UX3ZpZGVvLXBvc3RlciB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuLk9UX2F1ZGlvLWxldmVsLW1ldGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMjUlO1xuICBtYXgtd2lkdGg6IDIyNHB4O1xuICBtaW4td2lkdGg6IDIxcHg7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5PVF9hdWRpby1sZXZlbC1tZXRlcjpiZWZvcmUge1xuICAvKiBtYWtlcyB0aGUgaGVpZ2h0IG9mIHRoZSBjb250YWluZXIgZXF1YWxzIGl0cyB3aWR0aCAqL1xuICBjb250ZW50OiAnJztcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmctdG9wOiAxMDAlO1xufVxuXG4uT1RfYXVkaW8tbGV2ZWwtbWV0ZXJfX2JhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDE5MiU7IC8qIG1ldGVyIHZhbHVlIGNhbiBvdmVyZmxvdyBvZiA4JSAqL1xuICBoZWlnaHQ6IDE5MiU7XG4gIHRvcDogLTk2JSAvKiBoYWxmIG9mIHRoZSBzaXplICovO1xuICByaWdodDogLTk2JTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbn1cblxuLk9UX2F1ZGlvLWxldmVsLW1ldGVyX19hdWRpby1vbmx5LWltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMiU7XG4gIHJpZ2h0OiAxNSU7XG4gIHdpZHRoOiA0MCU7XG5cbiAgb3BhY2l0eTogMC43O1xuXG4gIGJhY2tncm91bmQ6IHVybChkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIyYVdWM1FtOTRQU0l3SURBZ056a2dPRFlpSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUkrUEdjZ1ptbHNiRDBpSTJabVppSStQSEJoZEdnZ1pEMGlUVGt1TnpVM0lEUXdMamt5TkdNekxqY3pPQzAxTGpFNU1TQXhNaTQzTVRFdE5DNHpNRGdnTVRJdU56RXhMVFF1TXpBNElESXVNakl6SURNdU1ERTBJRFV1TVRJMklESTBMalU0TmlBekxqWXlOQ0F5T0M0M01UZ3RNUzQwTURFZ01TNHpNREV0TVRFdU5qRXhJREV1TmpJNUxURXpMak00TFRFdU5ETTJMVEV1TWpJMkxUZ3VPREEwTFRJdU9UVTFMVEl5TGprM05TMHlMamsxTlMweU1pNDVOelY2YlRVNExqYzROU0F3WXkwekxqY3pOeTAxTGpFNU1TMHhNaTQzTVRFdE5DNHpNRGd0TVRJdU56RXhMVFF1TXpBNExUSXVNakl6SURNdU1ERTBMVFV1TVRJMklESTBMalU0TmkwekxqWXlOQ0F5T0M0M01UZ2dNUzQwTURFZ01TNHpNREVnTVRFdU5qRXhJREV1TmpJNUlERXpMak00TFRFdU5ETTJJREV1TWpJMkxUZ3VPREEwSURJdU9UVTFMVEl5TGprM05TQXlMamsxTlMweU1pNDVOelY2SWk4K1BIQmhkR2dnWkQwaVRUWTRMalkwTnlBMU9DNDJZeTQzTWprdE5DNDNOVE1nTWk0ek9DMDVMalUyTVNBeUxqTTRMVEUwTGpnd05DQXdMVEl4TGpReE1pMHhOQzR4TVRVdE16Z3VOemN0TXpFdU5USTRMVE00TGpjM0xURTNMalF4TWlBd0xUTXhMalV5TnlBeE55NHpOVGd0TXpFdU5USTNJRE00TGpjM0lEQWdOQzQxTkRFdU5URTFJRGd1T1RNMklERXVPREF5SURFeUxqazFJREV1TmprNElEVXVNamsxTFRVdU5UUXlJRFl1T1RreExUWXVOakUySURJdU1EY3pRekl1TkRFZ05UVXVNemswSURBZ05URXVOemczSURBZ05EZ3VNVEF6SURBZ01qRXVOVE0ySURFM0xqWTROU0F3SURNNUxqVWdNQ0EyTVM0ek1UWWdNQ0EzT1NBeU1TNDFNellnTnprZ05EZ3VNVEF6WXpBZ0xqY3hPQzB5TGpnNU9TQTVMalk1TXkwekxqSTVNaUF4TVM0ME1EZ3RMamMxTkNBekxqSTVNeTAzTGpjMU1TQXpMalU0T1MwM0xqQTJNUzB1T1RFeWVpSXZQanh3WVhSb0lHUTlJazAxTGpBNE5DQTFNUzR6T0RWakxTNDRNRFF0TXk0M09ESXVOVFk1TFRjdU16TTFJRE11TVRNMExUY3VPVEl4SURJdU5qTTJMUzQyTURNZ05TNDBPRFVnTWk0eE5TQTJMakk0T1NBMkxqRXpNaTQzT1RjZ015NDVORGd0TGpjMU1pQTNMalExTnkwekxqTTRPQ0EzTGpnMU9TMHlMalUyTmk0ek9URXROUzR5TXpjdE1pNHpNVGd0Tmk0d016UXROaTR3TjNwdE5qZ3VPRE0wSURCakxqZ3dOQzB6TGpjNE1pMHVOVFk0TFRjdU16TTFMVE11TVRNekxUY3VPVEl4TFRJdU5qTTJMUzQyTURNdE5TNDBPRFVnTWk0eE5TMDJMakk0T1NBMkxqRXpNaTB1TnprM0lETXVPVFE0TGpjMU1pQTNMalExTnlBekxqTTRPU0EzTGpnMU9TQXlMalUyTlM0ek9URWdOUzR5TXpjdE1pNHpNVGdnTmk0d016UXROaTR3TjNwdExUSXVNRE00SURndU1qZzRZeTB1T1RJMklERTVMalkxT1MweE5TNHhNVElnTWpRdU56VTVMVEkxTGpnMU9TQXlNQzQwTnpVdE5TNDBNRFV0TGpZd05pMHpMakF6TkNBeExqSTJNaTB6TGpBek5DQXhMakkyTWlBeE15NDJOakVnTXk0MU5qSWdNall1TVRZNElETXVORGszSURNeExqSTNNeTB5TUM0MU5Ea3RMalU0TlMwMExqVXhNUzB5TGpNM09TMHhMakU0TnkweUxqTTNPUzB4TGpFNE4zb2lMejQ4Y0dGMGFDQmtQU0pOTkRFdU5qWXlJRGM0TGpReU1tdzNMalUxTXk0MU5XTXhMakU1TWk0eE1EY2dNaTR4TWlBeExqRTFNeUF5TGpBM01pQXlMak16Tld3dExqRXdPU0F5TGpjek9HTXRMakEwTnlBeExqRTRNaTB4TGpBMU1TQXlMakExTkMweUxqSTBNeUF4TGprME5td3ROeTQxTlRNdExqVTFZeTB4TGpFNU1TMHVNVEEzTFRJdU1URTVMVEV1TVRVekxUSXVNRGN5TFRJdU16TTFiQzR4TURrdE1pNDNNemRqTGpBME55MHhMakU0TWlBeExqQTFNaTB5TGpBMU5DQXlMakkwTXkweExqazBOM29pTHo0OEwyYytQQzl6ZG1jKylcbiAgICBuby1yZXBlYXQgY2VudGVyO1xufVxuXG4uT1RfYXVkaW8tbGV2ZWwtbWV0ZXJfX2F1ZGlvLW9ubHktaW1nOmJlZm9yZSB7XG4gIC8qIG1ha2VzIHRoZSBoZWlnaHQgb2YgdGhlIGNvbnRhaW5lciBlcXVhbHMgaXRzIHdpZHRoICovXG4gIGNvbnRlbnQ6ICcnO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZy10b3A6IDEwMCU7XG59XG5cbi5PVF9hdWRpby1sZXZlbC1tZXRlcl9fdmFsdWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSgxNTEsIDIwNiwgMCwgMSkgMCUsIHJnYmEoMTUxLCAyMDYsIDAsIDApIDEwMCUpO1xufVxuXG4uT1RfYXVkaW8tbGV2ZWwtbWV0ZXIuT1RfbW9kZS1vZmYge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uT1RfYXVkaW8tbGV2ZWwtbWV0ZXIuT1RfbW9kZS1vbixcbi5PVF9hdWRpby1vbmx5IC5PVF9hdWRpby1sZXZlbC1tZXRlci5PVF9tb2RlLWF1dG8ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLk9UX2F1ZGlvLW9ubHkuT1RfcHVibGlzaGVyIC5PVF92aWRlby1lbGVtZW50LFxuLk9UX2F1ZGlvLW9ubHkuT1Rfc3Vic2NyaWJlciAuT1RfdmlkZW8tZWxlbWVudCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5PVF92aWRlby1kaXNhYmxlZC1pbmRpY2F0b3Ige1xuICBvcGFjaXR5OiAxO1xuICBib3JkZXI6IG5vbmU7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbSByaWdodDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAzcHg7XG4gIHJpZ2h0OiAzcHg7XG59XG5cbi5PVF92aWRlby1kaXNhYmxlZCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUZJQUFBQW9DQVlBQUFCdGxhMDhBQUFJTlVsRVFWUjQydTJhYVV4VVZ4VEhjUkJtQUFFQlJWVEs0c0t3RElzZyt3Q0s3Q3FJdzFDTjFZb2JiYlMycVlsSjA2UXgxVXBkcU1iWVdxMnBTeldtSDZ5dE5iWFdKWTFMcTdWdXFCRVJ0VzY0VjBYRkxZYWUwL3h2Y3AzTU1BTXpEejZJeVQvZ2UyY2U1Lzd1Y3BZM1RzM056WjF5Z0Y1N0FKMGdPMEcyanlaUG1kYkZ5Y2xKU0FWMUVlb0VhVVVTTEdkU1Y1S0xMRnh6Rm1BN1FWcUdxRHFqaXhoV2t4Q1ZleVJWbDM4d002YndqNnlZSXRZSzQ3QkF1dTlCMGdDcXM2TmcycjQ5NEtRdGtqL0R6MmpIcmF3NnF3MmZkU0U0ck5tY0NQQ3ZaT05QOGlGMUk2a2RCZE1hUUpXWkxlSnFSV2Eya1BKQXhYWStHeEUrenhMSTAzR1JoOGxHU3dvaTlXQ1k4RldsQ0VoKzhKT25UN01mUEdqTXVYWDdUdDYxaG9hQ2kvOWNLbUtkdjNCeGVFdGltL1ViTnBuYlFpcUY0TW1UN2txcmJyNGxrTWNUbzQ2VFRTcEpCNWcrOE5IdVZXbld1YWFtcHZobU8vN2R1SG1yR2x1b080QzZPc0paR1Jya0RJbGQ0M1pxVU9UbmxrRFNtWG1hYkFvQlUwdnFCZis2S2dGU3hROSsrdXpaOHJaQXBNODFUSjh4TTVtZTBaL1VGN1B1Qm1kVmRrR0ViNWdZRGVRbXlaTlczU0pMSVA5S2o2NGxHeU1wbXhSTjZzT2ZJYmtvQWhLT2RudjIvUG1CMWtCODhlTEZvK29seXlycHMzclNJTklBekxvbm5xbHFLOFI5dytMODZ2dHJ0NUwybmh1ZzNWYzNVTHUvTGl6OEFPdVhFU2xaWk9OSDZrbXI3Z3RMSUE5bFJOZVJ6VnVrQXZqM0JzbExuSk5LZ2ZTY082OUsrL0xseTBaYlFXN2U4dE5LK3B3QmpxYVNJakRyWGdKa1cxY2lBWnZiUWpRK1JEYWhwQkJLZDVaWnNxTjc1OGhtSW1rNEtRSG5wRGQ4VXdTa0N5SmFyeDA3ZDQrM0JlS0ptbE1IeVg0cWFSeHBCQ21ORkU0S0VOdkhEcEF1dFZFUm4xa0NWQk1mZVJSZ1l2Wm54NjJ3WlBkblprdzkyVlFBNUdDbFFYWVJCemUyUytpSm1wUFZWb0pMQTlsOVFLb2tqY1dLVENUMVI1cmhMZzcwTnVTc3ppVDE2ZGlJS2t1QWppYnJUcEpORGtuL2UxN0NhaHRBamxBV0pBWWtiMjlTYjFMRTlSczM5MWtJTGs4bVZreXVJcHVaY0xLVWxFbUtrcmExV3VTVE51ZXNFUHp3b0VwbG9TVkFoOU9peitCSXlkOWRPSGh0eDRPRXBGcFZnNmdiTkszeVhYMWo0OE42VTVEejVpL2djL0ZEck1ZM3NUTGlTTUVrWHhHeHpVRVVBR25ieGxQYWtzTWxIVVhXQWxIUzhVUkNQc2VTb2haYkNTTGpTU1U3aXhMWGR6aElXVktxNFk3dDJhLzJiTjBxR2VLbHkxZllzVm1rNlJnSUR6NEowYm9ueVVPY2plWXFtLzhoUm9ZYldraWdWMk5IOUNIQVM2MEVrVWtrdzQ3aFNSczZGcVQxTFI1QVZjc3J1ZVhsSzFkNUFPK1JwbUJyWlpFaWVmQnl5dFBDYW5SR05MWlkwdUY1MmdORFlyOXNDUkI4TUhZMFNKdTJPSldLUzJXUVY2NWU0eTMxRG1rQ0ltRWkwaEJmdWZSaW1lMFJJaHBiS2VuMC9OeTlPWU5XMmdoeVl5dEFCak5JYXhOdUt0dEFXazZIUExuMGswRmV2ZFp3RmluUFdGSXVLWmJVVjE2TlZrbzZqYldTRG9QTzNwT2Y4SzBqUVdMU1EwUzliZHBrWWNrK203dmZXcEFpSGZLZ0JzWmlHU1N0MEZxY1RlVThXRVRxQUhFMkNnY0FWZDNHa200TUQzeFhZZUk2QjROTUl0dktiY1VwUTlnUCtLTVduU3NXK1RhWUp0b28rYXZCV0xvS29LMENDU0R1ZCs3ZVhXUUdaQVhxVjNZb1FqUUNmaXhKOCtmemo5dGEzSkhobFVlSjh3Sk9ZMndzNmVSS3BQUzNvcVR2SEFFU0V6OXlhMG5hWEw1V0g2cHQzRnFTT2hUSGtUY0tFWGM2azFQT2g0UTlZSnUvMDNUVDRhOFBvR01GSTRpMkVxU2JPWkFZYUJrcEN5RDkyUmtHNktDU2JqSS9IMEhFSVNCbmxPWlBGZGNFekkyR1RPNEtCWklDR0t5QUtMVEVtSk9CMnR4ZjVNYmdvaEJJTkNsNEZUcW1wSk1CMlcrSGlSbjFRMmw2bFh5UG1pRVA2VlZFMlRmR29hTVlySHlQZHRBbnlJMGpFT245UkxXbU5FaHZCQkU3U2pwRlFaYVNodExLKzFTK1QxMmxSd3hVdnJabFZQcDhqRTFQaWtlTzdDL255RXFCRENCMXQ3K2tVeDRrS1VXY2xlYTB5WkM1QklHcGlKU05TRDlRZ0ZSMFJRS2tMNkt4SFNXZHNpQVJISk5ZZXdvR3J6RzEvYms0ZFRQU3VuTDJFeURqY2JiN01RK2xRZlpta0tpTjdTanBGQU01Q1dBeUdjd3lZODRZc1oxbFVjYlJOTnRRTUFkdFFXR3ZRMER5Vmp6WUFLUWZRRm9kZUFlQzFDOHZ6eW1YSVpxRCtaRWgvMk95TFNhbFMvM1ZibkpaK1ZxRFhHak1yVENGdUs0czY2dlZaVU5mcWFEb2xjYmpPY2I4OTlzTHBFRStJMjBHaWZ5d1hlMlFSM0tFbHU5OVB6cWpHdWZoUkVxQjFwakNuRzNJTDNmWTF2NzMzcjJGTXNpR2h1dG4wTEFvSldXSUdiUHhqS3dnalViRjBtNTJtUGhpZ3JwZFhPZWNFcTlwUjZNa0hidTJMT3RyY1o5eTNkME9EVGIxNXk5TWVQejQ4YUY3OSs4ZnZYbnI5c2xqeDJ1Mkk3S054RHVhTVBHVkVDb1JzN21DNGVUN1NJcnVGTmZOSEsxNU1LdU0yZXZ3TnErNHFqeHZHbmQ1Q0h3Tk55bmF3VzRjT2xVWmRHOGI1NUlJSkhta0l0d3JaSEg2UXhCM09TTDlrVHRBR3BJdlppUUIzWjRTS0JmWFF0RUU5c2FzaFdBVzg3QnQzc1laTlI2em40dXpKd1dES1VLWGZhS0NkcVVvQnBMeFNqWWU5bnFHaXdXUkJHaXB1R1ozUW03Nml0WUxiYkpJL1BFaFVBcGZ3NzN1T0l5OXhmc2UzTTlGOUJ1RkpIY1lyc2VTb3VHa0h0Q1Z0a3VHVFRpa0k4WGdaemhnOVNlRjRWcWN2U1dpYVN2TkhROEp3a05qSWZFSGVtQ21OTEQxUmFFZkxzMThtbGdOdU42UEZBTEhvN0N5VTVXMmcwMGdGQVFGNG96dmliSDA0bXV3RGJXcmFTRkF5dC9BQU16ZXdnR1I4dUNlV243N3h6QnhQeGd6UFJDRERNWjE0YlEvM2pxR0tHb0hmMkhqZ3gza3c1TGJhSkRZV2I1MnQ5Rk1ndzRBdVdOV3VrTmV1T1lxT3NtUWkyamd3czRQQS9ERC96MEIyeDAvdmVDczRuYXcwY2d5YmV6aWQ3WDlqVjNyWDJSU3Mwd2ZMa2xsNHBCR2NnaWZnK05ZeGUxa0oyeWNUYVJxNjZ1Ry93Qk9sMHZqY3c3MHh3QUFBQUJKUlU1RXJrSmdnZz09KTtcbiAgYmFja2dyb3VuZC1zaXplOiAzM3B4IGF1dG87XG59XG5cbi5PVF92aWRlby1kaXNhYmxlZC13YXJuaW5nIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRklBQUFBb0NBWUFBQUJ0bGEwOEFBQUdNRWxFUVZSNEFlMmFBN0QweUJhQWM3b0gxMnZiUm1sTGF4WVdiMjNidG0zYnRtMjg5OWEyYld1WXRQWjAxY210VTlsSnJpYjMxNXlxcjlJM09lbS81L3M3YWN3RW5laEVKem94Q2NYMk8rd0VlSWdSQkREYUdqQVpPZ1E2aWhScExrbEhaREpJWEsxV1d5bU1JaEdHa1ZCS0NXTU0rSXYvZi9iNXQ3ZmFZdE0vc0dnSVM3ajhSTkxqY2VVVmw0MUd2R04xQkZpSHk5c2d0UldhWWJodnVWUTZvMVZPdlY1L3RMZTNkeXNzS29adWg4eENsa0RFaTJNTVM2WmpSMGNTY3hkSy8rSGduSnNtTGNjWU94MGUvUFVHVXFmVEpERUhrVjVnbzlsY01Rb2o0UjhScFNJUlJVcjRhOWJhVEpGQ0NOZnFFU0tKN1JZSmliSzB4b2kwNUVoRlJUeE1pMVJpdDZ4SEF1TGFLUkx3RVZpNnExeCtFaGxWcGQzZDNXZmg0VlFrUWhSaHh0aFlMZzdTUkdxZExsSXA3VVZPSGYrSmhFaEVNc2NVb2xWamUzcDYzc2FlZU9Gb0tzVDdmamorK0JOdXcySS8wb3VVRU5tR2FRY1FFaWxRdlVVNnh1V0Mwa3FtVldDdDhkZjZrRzdXTG9GQTIwVlNDT3lOaDBSS1BUK1N5clRXdFFzdnV2VFlDeTg0ejMrb0FkYmdBaUxHSXZIalR6NmJGdXUvQjNsS0tmVmtGS2tud2loNkVubmlwWmRmWFFaemVwQXVwWFNHU0Nmd1VHWnRrcngzdC8wZFNRR25uWGJtZG9jZGV0QXJRb2orNFZSMjN3TVAzYmovdm52OVN2L3JCbWtpc2gwOWNhNjU1dGhIU3JsV3E0VEZGMXZrTkR4c2dqaVVuUHFabkhQQUJJcTQ3ang3cFBNY2VjU2hmejd4MURPN0Q2ZWl0OTk1NzZYMTExM25WZDhycUxHQXVEYU5pdEpvblRHSXFIZ1FHUWpEc0pnbE1yVUg1aURTRVFiUmE2eTJ5ck52di9QdVdWbVYvUFR6THo4c3RlVGl0MUI5RnRHSmVackprc21XZEJ6Qk1jYW1pNHhVa2FZMUExUWU5NFdJYVBHQkFwSmhhRVJyTHJYa0VsZjgrTlBQejZZTUxzMUREam4wV245UG5JL1VpUWFkTTRqTkVraHpWc0VHRThuSUhFU00xajUvS3FSWCsvSUVpT1EveWlmTkJsRWtwbmIwMGNjY2VzYnBwMTNUMzk4M0g4OC80OHh6cnJ2bTZpdC84VTVKWGdYNUc2blN2U3ExUjVMQVRSN2FZR2t3TUcxUlN3a1dBQkgrNGpVYjN2VC91SjFaMHhwanJhVEJSbHRyeFVRaGtzSVJtZ1RKeXk2OStQdjk5dHYzcVlYNkZ4Z1UrZlUzMzM1MnhHRUhmNXdpc1U3bk5XSnBaUk1rQWpaNmFJTjFtd1Y3aDI5Sm8yd0NIbHZldS9HVjE2OXo2NUUrVDZrb2V4Q2g2YytFRWlreTNsbnhRS0ZqVWVWeU9lSTVBT0J6SWlheVJoSnJ5ZDdZWW5rSUhndkIwcWs5VGRxbDZOM1hINGJSVUlPSUlJS0pTaVJiMGhrU0VwWktSZDFDcEVxOEd4dEl5Q1ZtRFNnRmw5NEdhY1RnYUp3MXJVbFloWW5nMGM0ZXdhVXNtS1JJSmpwaXFNU09DaDlRZUkrVVlFQ210UUlzeEV1Nk9vckVjdjZSbDBndTB3b2g4TWhGa21TQ1RYVkk0cEM3MDRXQ0ZSSnZTUk5KU3pyTU1FWk8yaUtaVENIQVpZbm12WENueTdlZDV2ZlpLM3ZpSFNCZElGQ0tFRmoyK250Kzczbnc4bTJ1ZWRjTEpsa3RBKytWTk1FUGFSNDVhWXVrY0tubkNmWTMvREZiWlM4dDdlSHhOZ3NQTTBOMWhYaEpKd3dNMVFicG9RRmxvZzJSMTNhL3pCeEVZSEFRRVVZVU02cWlWd0V5QllvTTZKRk5GMmtGTGVsSTVLUWYrZlZJNGRKRkNndURTN29BeXgyUjZTRlFKS1JlZFNEai9jTWcvUlhRNlpFMDVHU0lEQWFYZENpMUkzTDAyMVNRV05KMVJMWTVPaUlkTDQveXZ1dzhBRGZXUEZyU2NpYU15SDh0RVFQd2YxdUdHNTRnNStLbEpHVG1zcnhzUWRsNVBLaWRuUEZlMlFTLy8vN0h1K1ZTNldYL0hZbmYwc2V2R0w3bFh5ZHdvZDIvOUR5a1pxMHM1eWZmMHNnU1dDaWdOT0g3VFBITDd1ZmorL1RIOFAvK3FZcEw0SGtCRGlSWXBFWGVNOC84OS85enpqbjdFdFk2NGRmZDFucWNjTTdCczgrOU1LeTg1NTUvOFRuS1MrNU11Zkg2RVpWQVNrZ1B6ZittSlhyb2V0MTdKaXJVMEFMU1QzblQweTVPTnlMcGVvMXk2NGloK3Z1UWZzb1RPZVJGU0pYYStTdnlCOTBUVW1kdzQ5RWpMYUtwTVEwbXpFZVR6a1dzZC9vSTZmemZpS004Z1dnNlg2T2pwWHN0dTVaSG5tSWIwR0ZpdTI5TUlVZlVld2ttVnJFTjNScVZRL2JZOEZ6TmNxdU1Cdi9wQ05VWjVwSEhlbTAxS2ROL0kvREc2Ni9sTGhLU3ZUTzVNODRrYXY1QzV6MlpmeUFpdmk5aTlWR2Q0NVJIN1VXSmJqd0dHLzdOWXNSRUN0N2ppT1RvSGVkS0F1aThTVzRDc3h5UmM1NG1LSC84ZjdFTGhDQ0FDeU5jSWwvd0krRmFBSnljOHl6UnRpblFQeld6dUZackZIcS9BQUFBQUVsRlRrU3VRbUNDKTtcbiAgYmFja2dyb3VuZC1zaXplOiAzM3B4IGF1dG87XG59XG5cbi5PVF92aWRlby1kaXNhYmxlZC1pbmRpY2F0b3IuT1RfYWN0aXZlIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5PVF9hdWRpby1ibG9ja2VkLWluZGljYXRvciB7XG4gIG9wYWNpdHk6IDE7XG4gIGJvcmRlcjogbm9uZTtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG4uT1RfYXVkaW8tYmxvY2tlZCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lJSGh0Ykc1ek9uaHNhVzVyUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMM2hzYVc1cklpQjNhV1IwYUQwaU1UVXdJaUJvWldsbmFIUTlJamt3SWo0OFpHVm1jejQ4Y0dGMGFDQmtQU0pOTmpjZ01USk1OaTQwTkRnZ056SXVOVFV5SURBZ016RldNVGhNTWpZZ01HdzBNU0F4TW5wdE15QTNiRFlnTkRjdE1qa2dNVGd0TXpVdU5UQXlMVFl1TkRrNFREY3dJREU1ZWlJZ2FXUTlJbUVpTHo0OEwyUmxabk0rUEhKbFkzUWdkMmxrZEdnOUlqRTFNQ0lnYUdWcFoyaDBQU0k1TUNJZ2NuZzlJak0xSWlCeWVUMGlORFVpSUc5d1lXTnBkSGs5SWk0MUlpOCtQR2NnWm1sc2JEMGlibTl1WlNJZ1ptbHNiQzF5ZFd4bFBTSmxkbVZ1YjJSa0lqNDhaeUIwY21GdWMyWnZjbTA5SW5SeVlXNXpiR0YwWlNnek5pa2lQanh0WVhOcklHbGtQU0ppSWlCbWFXeHNQU0lqWm1abUlqNDhkWE5sSUhoc2FXNXJPbWh5WldZOUlpTmhJaTgrUEM5dFlYTnJQanh3WVhSb0lHUTlJazB6T1M0eU5Ea2dOVEV1TXpFeVl5NDJPVGNnTVRBdU16Y2dNaTQzT0RVZ01UY3VPRGszSURVdU1qVXhJREUzTGpnNU55QXpMakF6T0NBd0lEVXVOUzB4TVM0ME1UY2dOUzQxTFRJMUxqVnpMVEl1TkRZeUxUSTFMalV0TlM0MUxUSTFMalZqTFRJdU5URWdNQzAwTGpZeU9DQTNMamM1TnkwMUxqSTROeUF4T0M0ME5UTkJPQzQ1T0RrZ09DNDVPRGtnTUNBd0lERWdORE1nTkRSaE9DNDVPRGdnT0M0NU9EZ2dNQ0F3SURFdE15NDNOVEVnTnk0ek1USjZUVEl3TGprNE5TQXpNaTR5TWpSc01UVXVOelEyTFRFMkxqZzNOMkUzTGpNNE5TQTNMak00TlNBd0lEQWdNU0F4TUM0ek56UXRMalF5UXpVeExqY3dNaUF4T1M0eE1UUWdOVFFnTWprdU1qQTRJRFUwSURRMUxqSXdPR013SURFMExqVXlOeTB5TGpNME15QXlNeTQ0T0MwM0xqQXpJREk0TGpBMU9HRTNMakk0SURjdU1qZ2dNQ0F3SURFdE1UQXVNVFk0TFM0ME5qaE1NakF1TkRBMUlEVTFMakl5TkVneE1tRTFJRFVnTUNBd0lERXROUzAxZGkweE0yRTFJRFVnTUNBd0lERWdOUzAxYURndU9UZzFlaUlnWm1sc2JEMGlJMFpHUmlJZ2JXRnphejBpZFhKc0tDTmlLU0l2UGp3dlp6NDhjR0YwYUNCa1BTSk5NVEEyTGpVZ01UTXVOVXcwTkM0NU9UZ2dOelV1TURBeUlpQnpkSEp2YTJVOUlpTkdSa1lpSUhOMGNtOXJaUzEzYVdSMGFEMGlNaUlnYzNSeWIydGxMV3hwYm1WallYQTlJbkp2ZFc1a0lpOCtQQzluUGp3dmMzWm5QZz09KTtcbiAgYmFja2dyb3VuZC1zaXplOiA5MHB4IGF1dG87XG59XG5cbi5PVF9jb250YWluZXItYXVkaW8tYmxvY2tlZCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLk9UX2NvbnRhaW5lci1hdWRpby1ibG9ja2VkLk9UX21pbmkgLk9UX2VkZ2UtYmFyLWl0ZW0ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uT1RfY29udGFpbmVyLWF1ZGlvLWJsb2NrZWQgLk9UX211dGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uT1RfYXVkaW8tYmxvY2tlZC1pbmRpY2F0b3IuT1RfYWN0aXZlIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5PVF92aWRlby11bnN1cHBvcnRlZCB7XG4gIG9wYWNpdHk6IDE7XG4gIGJvcmRlcjogbm9uZTtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpT1RjaUlHaGxhV2RvZEQwaU9UQWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SWdlRzFzYm5NNmVHeHBibXM5SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpFNU9Ua3ZlR3hwYm1zaVBqeGtaV1p6UGp4d1lYUm9JR1E5SWswM01DQXhNa3c1TGpRME9DQTNNaTQxTlRJZ01DQTJNbXd6TFRRMFRESTVJREJzTkRFZ01USjZiVGdnTW13eElEVXlMVEk1SURFNExUTTFMalV3TWkwMkxqUTVPRXczT0NBeE5Ib2lJR2xrUFNKaElpOCtQQzlrWldaelBqeG5JR1pwYkd3OUltNXZibVVpSUdacGJHd3RjblZzWlQwaVpYWmxibTlrWkNJK1BHY2dkSEpoYm5ObWIzSnRQU0owY21GdWMyeGhkR1VvT0NBektTSStQRzFoYzJzZ2FXUTlJbUlpSUdacGJHdzlJaU5tWm1ZaVBqeDFjMlVnZUd4cGJtczZhSEpsWmowaUkyRWlMejQ4TDIxaGMycytQSEJoZEdnZ1pEMGlUVGt1TVRFZ01qQXVPVFk0U0RRNExqRmhOU0ExSURBZ01DQXhJRFVnTlZZMU9DNHhPR0UxSURVZ01DQXdJREV0TlNBMVNEa3VNVEZoTlNBMUlEQWdNQ0F4TFRVdE5WWXlOUzQ1TjJFMUlEVWdNQ0F3SURFZ05TMDFlbTAwTnk0d09DQXhNeTR6T1RSak1DMHVNelExSURVdU5EY3lMVE11TVRVNUlERTJMalF4TlMwNExqUTBNMkV6SURNZ01DQXdJREVnTkM0ek1EUWdNaTQzTURKMk1qWXVPRE0xWVRNZ015QXdJREFnTVMwMExqTXdOU0F5TGpjd01XTXRNVEF1T1RReUxUVXVNamcyTFRFMkxqUXhNeTA0TGpFdE1UWXVOREV6TFRndU5EUTJWak0wTGpNMk1ub2lJR1pwYkd3OUlpTkdSa1lpSUcxaGMyczlJblZ5YkNnallpa2lMejQ4TDJjK1BIQmhkR2dnWkQwaVRUZ3hMalVnTVRZdU5Vd3hPUzQ1T1RnZ056Z3VNREF5SWlCemRISnZhMlU5SWlOR1JrWWlJSE4wY205clpTMTNhV1IwYUQwaU1pSWdjM1J5YjJ0bExXeHBibVZqWVhBOUluSnZkVzVrSWk4K1BDOW5Qand2YzNablBnPT0pO1xuICBiYWNrZ3JvdW5kLXNpemU6IDU4cHggYXV0bztcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luLXRvcDogLTMwcHg7XG59XG5cbi5PVF92aWRlby11bnN1cHBvcnRlZC1iYXIge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxOTIlOyAvKiBjb3B5IHRoZSBzaXplIG9mIHRoZSBhdWRpbyBtZXRlciBiYXIgZm9yIHN5bW1ldHJ5ICovXG4gIGhlaWdodDogMTkyJTtcbiAgdG9wOiAtOTYlIC8qIGhhbGYgb2YgdGhlIHNpemUgKi87XG4gIGxlZnQ6IC05NiU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG59XG5cbi5PVF92aWRlby11bnN1cHBvcnRlZC1pbWcge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTElO1xuICBsZWZ0OiAxNSU7XG4gIHdpZHRoOiA3MCU7XG4gIG9wYWNpdHk6IDAuNztcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjNhV1IwYUQwaU9UY2lJR2hsYVdkb2REMGlPVEFpSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUlnZUcxc2JuTTZlR3hwYm1zOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6RTVPVGt2ZUd4cGJtc2lQanhrWldaelBqeHdZWFJvSUdROUlrMDNNQ0F4TWt3NUxqUTBPQ0EzTWk0MU5USWdNQ0EyTW13ekxUUTBUREk1SURCc05ERWdNVEo2YlRnZ01td3hJRFV5TFRJNUlERTRMVE0xTGpVd01pMDJMalE1T0V3M09DQXhOSG9pSUdsa1BTSmhJaTgrUEM5a1pXWnpQanhuSUdacGJHdzlJbTV2Ym1VaUlHWnBiR3d0Y25Wc1pUMGlaWFpsYm05a1pDSStQR2NnZEhKaGJuTm1iM0p0UFNKMGNtRnVjMnhoZEdVb09DQXpLU0krUEcxaGMyc2dhV1E5SW1JaUlHWnBiR3c5SWlObVptWWlQangxYzJVZ2VHeHBibXM2YUhKbFpqMGlJMkVpTHo0OEwyMWhjMnMrUEhCaGRHZ2daRDBpVFRrdU1URWdNakF1T1RZNFNEUTRMakZoTlNBMUlEQWdNQ0F4SURVZ05WWTFPQzR4T0dFMUlEVWdNQ0F3SURFdE5TQTFTRGt1TVRGaE5TQTFJREFnTUNBeExUVXROVll5TlM0NU4yRTFJRFVnTUNBd0lERWdOUzAxZW0wME55NHdPQ0F4TXk0ek9UUmpNQzB1TXpRMUlEVXVORGN5TFRNdU1UVTVJREUyTGpReE5TMDRMalEwTTJFeklETWdNQ0F3SURFZ05DNHpNRFFnTWk0M01ESjJNall1T0RNMVlUTWdNeUF3SURBZ01TMDBMak13TlNBeUxqY3dNV010TVRBdU9UUXlMVFV1TWpnMkxURTJMalF4TXkwNExqRXRNVFl1TkRFekxUZ3VORFEyVmpNMExqTTJNbm9pSUdacGJHdzlJaU5HUmtZaUlHMWhjMnM5SW5WeWJDZ2pZaWtpTHo0OEwyYytQSEJoZEdnZ1pEMGlUVGd4TGpVZ01UWXVOVXd4T1M0NU9UZ2dOemd1TURBeUlpQnpkSEp2YTJVOUlpTkdSa1lpSUhOMGNtOXJaUzEzYVdSMGFEMGlNaUlnYzNSeWIydGxMV3hwYm1WallYQTlJbkp2ZFc1a0lpOCtQQzluUGp3dmMzWm5QZz09KTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgYXV0bztcbn1cblxuLk9UX3ZpZGVvLXVuc3VwcG9ydGVkLWltZzpiZWZvcmUge1xuICAvKiBtYWtlcyB0aGUgaGVpZ2h0IG9mIHRoZSBjb250YWluZXIgOTMlIG9mIGl0cyB3aWR0aCAoOTAvOTcgcHgpICovXG4gIGNvbnRlbnQ6ICcnO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZy10b3A6IDkzJTtcbn1cblxuLk9UX3ZpZGVvLXVuc3VwcG9ydGVkLXRleHQge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAxNDQwcHgpIHtcbiAgLnNpZGVuYXYtbWVudXtcbiAgICB3aWR0aDogMzMlO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTQ0MHB4KSBhbmQgKG1pbi13aWR0aDogMTAyNHB4KXtcbiAgLnNpZGVuYXYtbWVudXtcbiAgICB3aWR0aDogMzAlO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSBhbmQgKG1pbi13aWR0aDogNzkwcHgpe1xuICAuc2lkZW5hdi1tZW51e1xuICAgIHdpZHRoOiAzNTBweDtcbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "./src/app/video-room/video-room.component.ts":
/*!****************************************************!*\
  !*** ./src/app/video-room/video-room.component.ts ***!
  \****************************************************/
/*! exports provided: VideoRoomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoRoomComponent", function() { return VideoRoomComponent; });
/* harmony import */ var _shared_services_room_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared/services/room.service */ "./src/app/shared/services/room.service.ts");
/* harmony import */ var _shared_components_menu_assistants_assistants_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shared/components/menu/assistants/assistants.component */ "./src/app/shared/components/menu/assistants/assistants.component.ts");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var openvidu_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! openvidu-browser */ "./node_modules/openvidu-browser/lib/index.js");
/* harmony import */ var openvidu_browser__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(openvidu_browser__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shared_components_dialog_error_dialog_error_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/components/dialog-error/dialog-error.component */ "./src/app/shared/components/dialog-error/dialog-error.component.ts");
/* harmony import */ var _shared_layout_openvidu_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/layout/openvidu-layout */ "./src/app/shared/layout/openvidu-layout.ts");
/* harmony import */ var _shared_models_user_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/models/user-model */ "./src/app/shared/models/user-model.ts");
/* harmony import */ var _shared_services_open_vidu_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/services/open-vidu.service */ "./src/app/shared/services/open-vidu.service.ts");
/* harmony import */ var _shared_components_menu_chat_chat_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/components/menu/chat/chat.component */ "./src/app/shared/components/menu/chat/chat.component.ts");
/* harmony import */ var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/services/api.service */ "./src/app/shared/services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};













var VideoRoomComponent = /** @class */ (function () {
    function VideoRoomComponent(openViduSrv, router, route, dialog, apiSrv, userService, roomService) {
        this.openViduSrv = openViduSrv;
        this.router = router;
        this.route = route;
        this.dialog = dialog;
        this.apiSrv = apiSrv;
        this.userService = userService;
        this.roomService = roomService;
        this.joinSession = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.leaveSession = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.error = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        // Constants
        this.BIG_ELEMENT_CLASS = 'OV_big';
        this.SCREEN_TYPE = 'screen';
        this.REMOTE_TYPE = 'remote';
        // Variables
        this.compact = false;
        this.sidenavMode = 'side';
        this.showDialogExtension = false;
        this.showDialogChooseRoom = true;
        this.localUsers = [];
        this.remoteStreamers = [];
        this.remoteUsers = [];
        this.messageList = [];
        this.messageListMod = [];
        this.newMessages = 0;
        this.modConnections = [];
    }
    VideoRoomComponent.prototype.beforeunloadHandler = function () {
        this.exitSession();
        this.openViduSrv.syncRemoveUser(this.mySessionId);
    };
    VideoRoomComponent.prototype.sizeChange = function () {
        if (this.openviduLayout) {
            this.openviduLayout.updateLayout();
            this.checkSizeComponent();
        }
    };
    VideoRoomComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.userService.isLogged) {
            this.openDialogError('You need to be logged in to enter a room', 'Rooms can only be accessed with an invite URL');
        }
        this.route.paramMap.subscribe(function (params) {
            _this.roomName = params.get("roomName");
        });
        this.checkTheme();
        this.openViduSrv
            .getOvSettingsData(this.roomName)
            .then(function (data) {
            _this.ovSettings = _this.ovSettings ? _this.ovSettings : data;
        })
            .catch(function (error) { return console.error(error); });
    };
    VideoRoomComponent.prototype.ngOnDestroy = function () {
        this.exitSession();
    };
    VideoRoomComponent.prototype.initApp = function () {
        var _this = this;
        setTimeout(function () {
            _this.openviduLayout = new _shared_layout_openvidu_layout__WEBPACK_IMPORTED_MODULE_8__["OpenViduLayout"]();
            _this.openviduLayoutOptions = _this.apiSrv.getOpenviduLayoutOptions();
            _this.openviduLayout.initLayoutContainer(document.getElementById('layout'), _this.openviduLayoutOptions);
            _this.checkSizeComponent();
            _this.joinToSession();
        }, 50);
    };
    VideoRoomComponent.prototype.toggleMenu = function () {
        var _this = this;
        this.menu.toggle().then(function () {
            _this.menuOpened = _this.menu.opened;
            if (_this.menuOpened) {
                _this.newMessages = 0;
            }
            var ms = _this.isWebComponent ? 300 : 0;
            setTimeout(function () { return _this.openviduLayout.updateLayout(); }, ms);
        });
    };
    VideoRoomComponent.prototype.checkNotification = function () {
        this.newMessages = this.menuOpened ? 0 : this.newMessages + 1;
    };
    VideoRoomComponent.prototype.joinToSession = function () {
        this.OV = new openvidu_browser__WEBPACK_IMPORTED_MODULE_6__["OpenVidu"]();
        this.OVScreen = new openvidu_browser__WEBPACK_IMPORTED_MODULE_6__["OpenVidu"]();
        this.session = this.OV.initSession();
        this.sessionScreen = this.OVScreen.initSession();
        this.subscribeToUserChanged();
        this.subscribeToStreamCreated();
        this.subscribedToStreamDestroyed();
        this.subscribeToConnectionCreated();
        this.subscribedToConnectionDestroyed();
        this.subscribedToChat('chat', this.messageList, this.chatComponent);
        if (this.userService.isModOfRoom(this.roomName)) {
            this.subscribedToChat('chatMod', this.messageListMod, this.modChatComponent);
        }
        this.connectToSession();
    };
    VideoRoomComponent.prototype.exitSession = function () {
        if (this.sessionScreen) {
            this.sessionScreen.disconnect();
        }
        if (this.session) {
            this.session.disconnect();
        }
        if (this.OV != null) {
            this.OV = null;
            this.OVScreen = null;
            this.session = null;
            this.sessionScreen = null;
            this.userCamDeleted = null;
            this.localUsers = [];
            this.remoteStreamers = [];
            this.openviduLayout = null;
            this.router.navigate(['']);
            this.leaveSession.emit();
            if (this.mySessionId) {
                this.openViduSrv.removeUser(this.roomName).subscribe(function (_) { }, function (error) { return console.log(error); });
            }
        }
    };
    VideoRoomComponent.prototype.nicknameChanged = function (nickname) {
        var _this = this;
        this.localUsers.forEach(function (user) {
            user.setNickname(nickname);
            _this.sendSignalUserChanged(user);
        });
    };
    VideoRoomComponent.prototype.toggleMic = function () {
        this.localUsers[0].setAudioActive(!this.localUsers[0].isAudioActive());
        this.localUsers[0].getStreamManager().publishAudio(this.localUsers[0].isAudioActive());
        this.sendSignalUserChanged(this.localUsers[0]);
    };
    VideoRoomComponent.prototype.toggleCam = function () {
        var _this = this;
        if (this.localUsers.length === 2) {
            // TWO USERS, STOP CAMERA
            console.log('TWO USERS - STOP CAM');
            this.stopCamera();
        }
        else if (this.localUsers[0].isScreen()) {
            // SCREEN USER, START CAMERA
            console.log('USER IS SCREEN - START CAM');
            if (this.userCamDeleted) {
                // Setting local connection ID to Screen User
                this.localUsers[0].setLocalConnectionId(this.session.connection.connectionId);
                this.userCamDeleted.setNickname(this.localUsers[0].getNickname());
                if (!this.userCamDeleted.getStreamManager()) {
                    this.OV.initPublisherAsync(undefined, {
                        publishAudio: this.localUsers[0].isAudioActive(),
                        publishVideo: true,
                    }).then(function (publisher) {
                        _this.userCamDeleted.setStreamManager(publisher);
                        _this.publishCamSession();
                    });
                }
                else {
                    this.publishCamSession();
                }
            }
        }
        else {
            // CAM USER, MUTE / UNMUTE CAMERA
            console.log('USER IS CAM - MUTE / UNMUTE CAM');
            this.localUsers[0].setVideoActive(!this.localUsers[0].isVideoActive());
            this.localUsers[0].getStreamManager().publishVideo(this.localUsers[0].isVideoActive());
            this.sendSignalUserChanged(this.localUsers[0]);
        }
    };
    VideoRoomComponent.prototype.publishCamSession = function () {
        var _this = this;
        var hasAudio = this.localUsers[0].isAudioActive();
        this.setFirstUserAudio(false);
        this.localUsers.unshift(this.userCamDeleted);
        this.localUsers[0].setVideoActive(true);
        this.localUsers[0].setAudioActive(hasAudio);
        this.publishSession(this.localUsers[0]).then(function () {
            _this.localUsers[0].getStreamManager().publishVideo(true);
            _this.localUsers[0].getStreamManager().publishAudio(hasAudio);
            _this.sendSignalUserChanged(_this.localUsers[0]);
        })
            .catch(function (error) { return console.error(error); });
    };
    VideoRoomComponent.prototype.startScreenSharing = function (i, tokenReceived) {
        var _this = this;
        console.log('STARTsCREENsHARING - ');
        this.getToken().then(function (tokenResponse) {
            var token = tokenReceived ? tokenReceived : tokenResponse;
            _this.sessionScreen
                .connect(token, { clientData: _this.localUsers[i].getNickname() })
                .then(function () {
                _this.localUsers[i].getStreamManager().once('accessAllowed', function () {
                    _this.localUsers[i].setConnectionId(_this.sessionScreen.connection.connectionId);
                    if (_this.session.connection && _this.session.connection.connectionId) {
                        _this.localUsers[i].setLocalConnectionId(_this.session.connection.connectionId);
                    }
                    _this.publishSession(_this.localUsers[i]).then(function () {
                        _this.localUsers[0].setScreenShareActive(true);
                        _this.sendSignalUserChanged(_this.localUsers[i]);
                        if (!_this.localUsers[0].isVideoActive()) {
                            // REMOVE CAM STREAM
                            _this.stopCamera();
                        }
                        _this.joinSession.emit();
                        _this.openviduLayout.updateLayout();
                    })
                        .catch(function (error) { return console.error(error); });
                });
            })
                .catch(function (error) { return console.error(error); });
        })
            .catch(function (error) { return console.error(error); });
    };
    VideoRoomComponent.prototype.stopScreenSharing = function () {
        var _this = this;
        console.log('USERS ARRAY LENGTH', this.localUsers.length);
        if (this.localUsers.length === 2) {
            // STOP SCREEN SHARE & CAM IS ENABLE
            this.sessionScreen.unpublish(this.localUsers.pop().getStreamManager());
            this.localUsers[0].setScreenShareActive(false);
            this.sendSignalUserChanged(this.localUsers[0]);
        }
        else if (this.localUsers[0].isScreen()) {
            // STOP SCREEN SHARE && CAM IS DISABLE
            // PUBLISH CAM WITH AUDIO ONLY
            this.sessionScreen.unpublish(this.localUsers[0].getStreamManager());
            this.localUsers.shift();
            this.localUsers.push(this.userCamDeleted);
            console.log('Users array ', this.localUsers);
            this.localUsers[0].setVideoActive(false);
            this.localUsers[0].setScreenShareActive(false);
            this.session.publish(this.localUsers[0].getStreamManager()).then(function () {
                _this.localUsers[0].getStreamManager().publishVideo(_this.localUsers[0].isVideoActive());
                _this.sendSignalUserChanged(_this.localUsers[0]);
            });
        }
    };
    VideoRoomComponent.prototype.toggleDialogExtension = function () {
        this.showDialogExtension = !this.showDialogExtension;
    };
    VideoRoomComponent.prototype.toggleDialogChooseRoom = function (data) {
        this.showDialogChooseRoom = false;
        this.localUsers = data.localUsers;
        this.mySessionId = data.sessionId;
        this.initApp();
    };
    VideoRoomComponent.prototype.screenShareAndChangeScreen = function () {
        var _this = this;
        var videoSource = navigator.userAgent.indexOf('Firefox') !== -1 ? 'window' : 'screen';
        var hasAudio = this.localUsers[0].isLocal() ? false : true;
        var publisherProperties = {
            videoSource: videoSource,
            publishAudio: hasAudio,
            publishVideo: true,
            mirror: false,
        };
        this.OVScreen.initPublisherAsync(undefined, publisherProperties)
            .then(function (publisher) {
            publisher.once('accessAllowed', function () {
                // CHANGE CAMERA
                if ((_this.localUsers[0].isLocal() && _this.localUsers[1]) || _this.localUsers[0].isScreen()) {
                    var index = _this.localUsers[0].isLocal() ? 1 : 0;
                    _this.sessionScreen.unpublish(_this.localUsers[index].getStreamManager());
                    _this.localUsers[index].setStreamManager(publisher);
                    _this.sessionScreen.publish(publisher);
                }
                else {
                    // ADD NEW SCREEN USER
                    console.log('STREAM SHARE - ELSE: position 1');
                    _this.localUsers.push(_this.createScreenUser(publisher));
                    _this.startScreenSharing(1);
                }
            });
        })
            .catch(function (error) {
            if (error && error.name === 'SCREEN_EXTENSION_NOT_INSTALLED') {
                _this.toggleDialogExtension();
            }
            else {
                _this.apiSrv.handlerScreenShareError(error);
            }
        });
    };
    VideoRoomComponent.prototype.checkSizeComponent = function () {
        this.compact = document.getElementById('room-container').offsetWidth <= 790;
        this.sidenavMode = this.compact ? 'over' : 'side';
    };
    VideoRoomComponent.prototype.enlargeElement = function (event) {
        var path = event.path ? event.path : event.composedPath(); // Chrome or Firefox
        var element = path.filter(function (e) { return e.className && e.className.includes('OT_root'); })[0];
        if (element.className.includes(this.BIG_ELEMENT_CLASS)) {
            element.classList.remove(this.BIG_ELEMENT_CLASS);
        }
        else {
            element.classList.add(this.BIG_ELEMENT_CLASS);
        }
        this.openviduLayout.updateLayout();
    };
    VideoRoomComponent.prototype.deleteRemoteStream = function (stream) {
        var userStream = this.remoteStreamers.filter(function (user) { return user.getStreamManager().stream === stream; })[0];
        var index = this.remoteStreamers.indexOf(userStream, 0);
        if (index > -1) {
            this.remoteStreamers.splice(index, 1);
        }
    };
    VideoRoomComponent.prototype.subscribeToConnectionCreated = function () {
        var _this = this;
        this.session.on('connectionCreated', function (event) {
            var connectionId = event.connection.connectionId;
            if ((_this.localUsers[0] && _this.localUsers[0].getConnectionId() !== connectionId && _this.session.connection.connectionId !== connectionId &&
                (_this.localUsers[1] && _this.localUsers[1].getConnectionId() !== connectionId)) ||
                (_this.localUsers[0] && !_this.localUsers[1] && _this.localUsers[0].getConnectionId() !== connectionId && _this.session.connection.connectionId !== connectionId)) {
                var newUser = new _shared_models_user_model__WEBPACK_IMPORTED_MODULE_9__["UserModel"]();
                newUser.setConnectionId(connectionId);
                var nickname = event.connection.data.split('%')[0];
                newUser.setNickname(JSON.parse(nickname).clientData);
                _this.remoteUsers.push(newUser);
                _this.localUsers.forEach(function (user) {
                    _this.sendSignalUserChanged(user);
                });
            }
            if (_this.assistantsComponent) {
                _this.assistantsComponent.getAssistants();
            }
            _this.updateModConnections();
        });
    };
    VideoRoomComponent.prototype.subscribeToStreamCreated = function () {
        var _this = this;
        this.session.on('streamCreated', function (event) {
            var connectionId = event.stream.connection.connectionId;
            if ((_this.localUsers[0] && _this.localUsers[0].getConnectionId() !== connectionId &&
                (_this.localUsers[1] && _this.localUsers[1].getConnectionId() !== connectionId)) ||
                (_this.localUsers[0] && !_this.localUsers[1] && _this.localUsers[0].getConnectionId() !== connectionId)) {
                var subscriber_1 = _this.session.subscribe(event.stream, undefined);
                subscriber_1.on('streamPlaying', function (e) {
                    _this.checkSomeoneShareScreen();
                    subscriber_1.videos[0].video.parentElement.classList.remove('custom-class');
                });
                var newUser = new _shared_models_user_model__WEBPACK_IMPORTED_MODULE_9__["UserModel"]();
                newUser.setStreamManager(subscriber_1);
                newUser.setConnectionId(event.stream.connection.connectionId);
                var nickname = event.stream.connection.data.split('%')[0];
                newUser.setNickname(JSON.parse(nickname).clientData);
                var type = event.stream.typeOfVideo === 'SCREEN' ? _this.SCREEN_TYPE : _this.REMOTE_TYPE;
                newUser.setType(type);
                _this.remoteStreamers.push(newUser);
                _this.localUsers.forEach(function (user) {
                    _this.sendSignalUserChanged(user);
                });
            }
        });
    };
    VideoRoomComponent.prototype.connectToSession = function () {
        var _this = this;
        if (this.tokens) { // Retrieves tokens from subcomponent or library
            this.localUsers.forEach(function (user, index) {
                if (user.isLocal()) {
                    _this.connect(_this.tokens[index]);
                }
                else if (user.isScreen()) {
                    _this.startScreenSharing(index);
                }
            });
        }
        else {
            this.localUsers.forEach(function (user, index) {
                if (user.isScreen()) {
                    _this.startScreenSharing(index);
                }
                else {
                    _this.getToken().then(function (token) {
                        _this.connect(token);
                    })
                        .catch(function (error) {
                        _this.error.emit({ error: error.error, messgae: error.message, code: error.code, status: error.status });
                        console.log('There was an error getting the token:', error.code, error.message);
                        _this.openDialogError('There was an error getting the token:', error.message);
                    });
                }
            });
        }
        if (this.localUsers.length === 1 && this.localUsers[0].isScreen()) {
            // CREATING CAM USER AND SAVING LIKE USERCAMDELETED
            this.createCamConnection();
        }
    };
    VideoRoomComponent.prototype.connect = function (token) {
        var _this = this;
        this.session
            .connect(token, { clientData: this.localUsers[0].getNickname() })
            .then(function () {
            _this.connectWebCam();
        })
            .catch(function (error) {
            _this.error.emit({ error: error.error, messgae: error.message, code: error.code, status: error.status });
            console.log('There was an error connecting to the session:', error.code, error.message);
            _this.openDialogError('There was an error connecting to the session:', error.message);
        });
    };
    VideoRoomComponent.prototype.connectWebCam = function () {
        var _this = this;
        this.localUsers[0].setConnectionId(this.session.connection.connectionId);
        this.localUsers[0].setLocalConnectionId(this.session.connection.connectionId);
        if (this.userService.canStream(this.mySessionId) && this.session.capabilities.publish) {
            this.publishSession(this.localUsers[0]).then(function () {
                _this.sendSignalUserChanged(_this.localUsers[0]);
                _this.joinSession.emit();
            })
                .catch(function (error) { return console.error(error); });
            this.localUsers[0].getStreamManager().on('streamPlaying', function () {
                _this.openviduLayout.updateLayout();
                _this.localUsers[0].getStreamManager().videos[0].video.parentElement.classList.remove('custom-class');
            });
        }
    };
    VideoRoomComponent.prototype.subscribeToUserChanged = function () {
        var _this = this;
        this.session.on('signal:userChanged', function (event) {
            var data = JSON.parse(event.data);
            _this.remoteStreamers.forEach(function (user) {
                if (user.getConnectionId() === event.from.connectionId) {
                    if (data.isAudioActive !== undefined) {
                        user.setAudioActive(data.isAudioActive);
                    }
                    if (data.isVideoActive !== undefined) {
                        user.setVideoActive(data.isVideoActive);
                    }
                    if (data.nickname !== undefined) {
                        user.setNickname(data.nickname);
                    }
                    if (data.isScreenShareActive !== undefined) {
                        user.setScreenShareActive(data.isScreenShareActive);
                    }
                    if (data.avatar !== undefined) {
                        user.setUserAvatar(data.avatar);
                    }
                }
            });
            _this.remoteUsers.forEach(function (user) {
                if (user.getConnectionId() === event.from.connectionId) {
                    if (data.isAudioActive !== undefined) {
                        user.setAudioActive(data.isAudioActive);
                    }
                    if (data.isVideoActive !== undefined) {
                        user.setVideoActive(data.isVideoActive);
                    }
                    if (data.nickname !== undefined) {
                        user.setNickname(data.nickname);
                    }
                    if (data.isScreenShareActive !== undefined) {
                        user.setScreenShareActive(data.isScreenShareActive);
                    }
                    if (data.avatar !== undefined) {
                        user.setUserAvatar(data.avatar);
                    }
                }
            });
            _this.checkSomeoneShareScreen();
        });
    };
    VideoRoomComponent.prototype.subscribedToStreamDestroyed = function () {
        var _this = this;
        this.session.on('streamDestroyed', function (event) {
            _this.deleteRemoteStream(event.stream);
            _this.checkSomeoneShareScreen();
            event.preventDefault();
        });
    };
    VideoRoomComponent.prototype.subscribedToConnectionDestroyed = function () {
        var _this = this;
        this.session.on('connectionDestroyed', function (event) {
            event.callDefaultBehavior();
            if (_this.assistantsComponent) {
                setTimeout(function () {
                    _this.assistantsComponent.getAssistants();
                }, 500);
            }
            _this.updateModConnections();
        });
    };
    VideoRoomComponent.prototype.subscribedToChat = function (signal, msgList, component) {
        var _this = this;
        this.session.on('signal:' + signal, function (event) {
            var data = JSON.parse(event.data);
            var messageOwner = _this.localUsers[0].getConnectionId() === data.connectionId
                ? _this.localUsers[0]
                : _this.remoteUsers.filter(function (user) { return user.getConnectionId() === data.connectionId || user.getNickname() === data.nickname; })[0];
            msgList.push({
                connectionId: data.connectionId,
                nickname: data.nickname,
                message: data.message,
                userAvatar: messageOwner.getAvatar(),
            });
            _this.checkNotification();
            if (component) {
                component.scrollToBottom();
            }
        });
    };
    VideoRoomComponent.prototype.sendSignalUserChanged = function (user) {
        var session = user.isLocal() ? this.session : this.sessionScreen;
        var data = {
            isAudioActive: user.isAudioActive(),
            isVideoActive: user.isVideoActive(),
            isScreenShareActive: user.isScreenShareActive(),
            nickname: user.getNickname(),
            avatar: user.getAvatar(),
        };
        var signalOptions = {
            data: JSON.stringify(data),
            type: 'userChanged',
        };
        session.signal(signalOptions);
    };
    VideoRoomComponent.prototype.openDialogError = function (message, messageError) {
        this.dialog.open(_shared_components_dialog_error_dialog_error_component__WEBPACK_IMPORTED_MODULE_7__["DialogErrorComponent"], {
            width: '500px',
            data: { message: message, messageError: messageError },
        });
    };
    VideoRoomComponent.prototype.checkSomeoneShareScreen = function () {
        var isScreenShared;
        // return true if at least one passes the test
        isScreenShared = this.remoteStreamers.some(function (user) { return user.isScreenShareActive(); }) || this.localUsers[0].isScreenShareActive();
        this.openviduLayoutOptions.fixedRatio = isScreenShared;
        this.openviduLayout.setLayoutOptions(this.openviduLayoutOptions);
        this.openviduLayout.updateLayout();
    };
    VideoRoomComponent.prototype.checkTheme = function () {
        this.lightTheme = this.theme === 'light';
    };
    VideoRoomComponent.prototype.removeAndSaveFirstUser = function () {
        var _this = this;
        setTimeout(function () {
            _this.localUsers[0].setVideoActive(false);
            _this.userCamDeleted = _this.localUsers.shift();
            _this.setFirstUserAudio(_this.userCamDeleted.isAudioActive());
            _this.openviduLayout.updateLayout();
        }, 200);
    };
    VideoRoomComponent.prototype.setFirstUserAudio = function (value) {
        this.localUsers[0].setAudioActive(value);
        this.localUsers[0].getStreamManager().publishAudio(value);
    };
    VideoRoomComponent.prototype.stopCamera = function () {
        console.log('STOP CAMERA');
        this.localUsers[0].getStreamManager().publishVideo(false);
        this.session.unpublish(this.localUsers[0].getStreamManager());
        this.removeAndSaveFirstUser();
    };
    VideoRoomComponent.prototype.createScreenUser = function (publisher) {
        var user = new _shared_models_user_model__WEBPACK_IMPORTED_MODULE_9__["UserModel"]();
        user.setScreenShareActive(true);
        user.setType(this.SCREEN_TYPE);
        user.setStreamManager(publisher);
        user.setNickname(this.localUsers[0].getNickname());
        user.setUserAvatar(this.localUsers[0].getAvatar());
        user.setAudioActive(false);
        return user;
    };
    VideoRoomComponent.prototype.createCamConnection = function () {
        var _this = this;
        this.getToken().then(function (token) {
            _this.session.connect(token, { clientData: _this.localUsers[0].getNickname() })
                .then(function () {
                var newUser = new _shared_models_user_model__WEBPACK_IMPORTED_MODULE_9__["UserModel"]();
                var audioActive = _this.localUsers[0].isAudioActive();
                newUser.setAudioActive(audioActive);
                newUser.setUserAvatar(_this.localUsers[0].getAvatar());
                newUser.setConnectionId(_this.session.connection.connectionId);
                newUser.setLocalConnectionId(_this.session.connection.connectionId);
                newUser.setNickname(_this.localUsers[0].getNickname());
                newUser.setScreenShareActive(true);
                _this.userCamDeleted = newUser;
                _this.openviduLayout.updateLayout();
            })
                .catch(function (error) { return console.error(error); });
        })
            .catch(function (error) { return console.error(error); });
    };
    VideoRoomComponent.prototype.getToken = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.openViduSrv.getToken(_this.mySessionId)
                .then(function (token) {
                resolve(token);
            })
                .catch(function (error) { return reject(error); });
        });
    };
    VideoRoomComponent.prototype.publishSession = function (user) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var session = user.isLocal() ? _this.session : _this.sessionScreen;
            session.publish(user.getStreamManager()).then(function () {
                resolve();
            }).catch(function (error) { return reject(error); });
        });
    };
    VideoRoomComponent.prototype.updateModConnections = function () {
        var _this = this;
        this.updatingModConnections = true;
        this.roomService.getAssistants(this.mySessionId).subscribe(function (assistants) {
            _this.modConnections = [];
            for (var _i = 0, _a = Object.values(_this.session.remoteConnections); _i < _a.length; _i++) {
                var connection = _a[_i];
                var connectionName = (JSON.parse(connection.data.split('%/%')[0])).clientData;
                for (var _b = 0, _c = assistants.moderators; _b < _c.length; _b++) {
                    var moderator = _c[_b];
                    if (moderator.connected && moderator.name === connectionName) {
                        _this.modConnections.push(connection);
                    }
                }
            }
            _this.modConnections.push(_this.session.connection);
            _this.updatingModConnections = false;
        }, function (error) { return console.log(error); });
    };
    VideoRoomComponent.ctorParameters = function () { return [
        { type: _shared_services_open_vidu_service__WEBPACK_IMPORTED_MODULE_10__["OpenViduService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
        { type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_12__["ApiService"] },
        { type: _shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
        { type: _shared_services_room_service__WEBPACK_IMPORTED_MODULE_0__["RoomService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        __metadata("design:type", Object)
    ], VideoRoomComponent.prototype, "ovSettings", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        __metadata("design:type", String)
    ], VideoRoomComponent.prototype, "sessionName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        __metadata("design:type", String)
    ], VideoRoomComponent.prototype, "user", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        __metadata("design:type", String)
    ], VideoRoomComponent.prototype, "openviduServerUrl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        __metadata("design:type", Array)
    ], VideoRoomComponent.prototype, "tokens", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        __metadata("design:type", String)
    ], VideoRoomComponent.prototype, "theme", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        __metadata("design:type", Boolean)
    ], VideoRoomComponent.prototype, "isWebComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])(),
        __metadata("design:type", Object)
    ], VideoRoomComponent.prototype, "joinSession", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])(),
        __metadata("design:type", Object)
    ], VideoRoomComponent.prototype, "leaveSession", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])(),
        __metadata("design:type", Object)
    ], VideoRoomComponent.prototype, "error", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('chatComponent', { static: false }),
        __metadata("design:type", _shared_components_menu_chat_chat_component__WEBPACK_IMPORTED_MODULE_11__["ChatComponent"])
    ], VideoRoomComponent.prototype, "chatComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('modChatComponent', { static: false }),
        __metadata("design:type", _shared_components_menu_chat_chat_component__WEBPACK_IMPORTED_MODULE_11__["ChatComponent"])
    ], VideoRoomComponent.prototype, "modChatComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('sidenav', { static: false }),
        __metadata("design:type", Object)
    ], VideoRoomComponent.prototype, "menu", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('assistants', { static: false }),
        __metadata("design:type", _shared_components_menu_assistants_assistants_component__WEBPACK_IMPORTED_MODULE_1__["AssistantsComponent"])
    ], VideoRoomComponent.prototype, "assistantsComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"])('window:beforeunload'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], VideoRoomComponent.prototype, "beforeunloadHandler", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"])('window:resize'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], VideoRoomComponent.prototype, "sizeChange", null);
    VideoRoomComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-video-room',
            template: __importDefault(__webpack_require__(/*! raw-loader!./video-room.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/video-room/video-room.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./video-room.component.css */ "./src/app/video-room/video-room.component.css")).default]
        }),
        __metadata("design:paramtypes", [_shared_services_open_vidu_service__WEBPACK_IMPORTED_MODULE_10__["OpenViduService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            _shared_services_api_service__WEBPACK_IMPORTED_MODULE_12__["ApiService"],
            _shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _shared_services_room_service__WEBPACK_IMPORTED_MODULE_0__["RoomService"]])
    ], VideoRoomComponent);
    return VideoRoomComponent;
}());



/***/ }),

/***/ "./src/app/web-component/web-component.component.css":
/*!***********************************************************!*\
  !*** ./src/app/web-component/web-component.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("app-web-component{\n    z-index: 2147483647;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2ViLWNvbXBvbmVudC93ZWItY29tcG9uZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC93ZWItY29tcG9uZW50L3dlYi1jb21wb25lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC13ZWItY29tcG9uZW50e1xuICAgIHotaW5kZXg6IDIxNDc0ODM2NDc7XG59Il19 */");

/***/ }),

/***/ "./src/app/web-component/web-component.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/web-component/web-component.component.ts ***!
  \**********************************************************/
/*! exports provided: WebComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebComponentComponent", function() { return WebComponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _video_room_video_room_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../video-room/video-room.component */ "./src/app/video-room/video-room.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var WebComponentComponent = /** @class */ (function () {
    function WebComponentComponent() {
        this.joinSession = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.leaveSession = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.error = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.display = false;
        this.ovSettings = {
            chat: true,
            autopublish: false,
            toolbarButtons: {
                video: true,
                audio: true,
                fullscreen: true,
                screenShare: true,
                exit: true,
            },
        };
    }
    Object.defineProperty(WebComponentComponent.prototype, "sessionConfig", {
        set: function (config) {
            var sessionConfig;
            console.log('Session config input ', config);
            sessionConfig = config;
            if (typeof config === 'string') {
                sessionConfig = JSON.parse(config);
            }
            if (sessionConfig) {
                this._sessionName = sessionConfig.sessionName;
                this._user = sessionConfig.user;
                this._tokens = sessionConfig.tokens;
                if (sessionConfig.ovSettings && this.isOvSettingsType(sessionConfig.ovSettings)) {
                    this.ovSettings = sessionConfig.ovSettings;
                }
                if (this.validateParameters()) {
                    this.display = true;
                }
            }
            else {
                this.videoRoom.exitSession();
            }
        },
        enumerable: true,
        configurable: true
    });
    WebComponentComponent.prototype.ngOnInit = function () { };
    WebComponentComponent.prototype.validateParameters = function () {
        console.log('TOKENS', this._tokens);
        if ((this._sessionName && this.openviduServerUrl && this._user) ||
            (this._tokens && this._tokens.length > 0 && this._user)) {
            if (this._tokens && this._tokens.length === 1) {
                this.ovSettings.toolbarButtons.screenShare = false;
                console.warn('Screen share funcionality has been disabled. OpenVidu Angular has received only one token.');
            }
            return true;
        }
        return false;
    };
    WebComponentComponent.prototype.emitJoinSessionEvent = function (event) {
        this.joinSession.emit(event);
        this.videoRoom.checkSizeComponent();
    };
    WebComponentComponent.prototype.emitLeaveSessionEvent = function (event) {
        this.leaveSession.emit(event);
        this.display = false;
    };
    WebComponentComponent.prototype.emitErrorEvent = function (event) {
        var _this = this;
        setTimeout(function () { return _this.error.emit(event); }, 20);
    };
    WebComponentComponent.prototype.isOvSettingsType = function (obj) {
        return ('chat' in obj &&
            typeof obj['chat'] === 'boolean' &&
            'autopublish' in obj &&
            typeof obj['autopublish'] === 'boolean' &&
            'toolbarButtons' in obj &&
            typeof obj['toolbarButtons'] === 'object' &&
            'audio' in obj.toolbarButtons &&
            typeof obj.toolbarButtons['audio'] === 'boolean' &&
            'audio' in obj.toolbarButtons &&
            typeof obj.toolbarButtons['audio'] === 'boolean' &&
            'video' in obj.toolbarButtons &&
            typeof obj.toolbarButtons['video'] === 'boolean' &&
            'screenShare' in obj.toolbarButtons &&
            typeof obj.toolbarButtons['screenShare'] === 'boolean' &&
            'fullscreen' in obj.toolbarButtons &&
            typeof obj.toolbarButtons['fullscreen'] === 'boolean' &&
            'exit' in obj.toolbarButtons &&
            typeof obj.toolbarButtons['exit'] === 'boolean');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], WebComponentComponent.prototype, "openviduServerUrl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], WebComponentComponent.prototype, "theme", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], WebComponentComponent.prototype, "ovSettings", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], WebComponentComponent.prototype, "joinSession", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], WebComponentComponent.prototype, "leaveSession", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], WebComponentComponent.prototype, "error", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('videoRoom', { static: false }),
        __metadata("design:type", _video_room_video_room_component__WEBPACK_IMPORTED_MODULE_1__["VideoRoomComponent"])
    ], WebComponentComponent.prototype, "videoRoom", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('sessionConfig'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], WebComponentComponent.prototype, "sessionConfig", null);
    WebComponentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-web-component',
            template: "\n    <app-video-room\n      #videoRoom\n      *ngIf=\"display\"\n      [theme]=\"theme\"\n      [sessionName]=\"_sessionName\"\n      [user]=\"_user\"\n      [openviduServerUrl]=\"openviduServerUrl\"\n      [tokens]=\"_tokens\"\n      [ovSettings]=\"ovSettings\"\n      [isWebComponent]=\"true\"\n      (leaveSession)=\"emitLeaveSessionEvent($event)\"\n      (joinSession)=\"emitJoinSessionEvent($event)\"\n      (error)=\"emitErrorEvent($event)\"\n    >\n    </app-video-room>\n  ",
            styles: [__importDefault(__webpack_require__(/*! ./web-component.component.css */ "./src/app/web-component/web-component.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], WebComponentComponent);
    return WebComponentComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var environment = {
    production: false,
    openvidu_url: 'https://' + location.hostname + ':4443'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/interceptors/auth.interceptor.ts":
/*!**********************************************!*\
  !*** ./src/interceptors/auth.interceptor.ts ***!
  \**********************************************/
/*! exports provided: BasicAuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicAuthInterceptor", function() { return BasicAuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

// Strategy based on http://jasonwatmore.com/post/2018/09/07/angular-6-basic-http-authentication-tutorial-example
var BasicAuthInterceptor = /** @class */ (function () {
    function BasicAuthInterceptor() {
    }
    BasicAuthInterceptor.prototype.intercept = function (request, next) {
        // add authorization header with basic auth credentials if available
        var user = JSON.parse(localStorage.getItem('currentUser'));
        if (user && user.authdata) {
            if (request.url.includes('ovTeachingApi')) {
                request = request.clone({
                    setHeaders: {
                        Authorization: "Basic " + user.authdata
                    }
                });
            }
        }
        return next.handle(request);
    };
    BasicAuthInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], BasicAuthInterceptor);
    return BasicAuthInterceptor;
}());



/***/ }),

/***/ "./src/interceptors/error.interceptor.ts":
/*!***********************************************!*\
  !*** ./src/interceptors/error.interceptor.ts ***!
  \***********************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var _app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app/shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(userService) {
        this.userService = userService;
    }
    ErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                _this.userService.removeCurrentUser();
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    ErrorInterceptor.ctorParameters = function () { return [
        { type: _app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"] }
    ]; };
    ErrorInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"]])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\diego\OneDrive\Documentos\GitHub\2019-OpenViduTeaching\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map