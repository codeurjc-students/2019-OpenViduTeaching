(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--The content below is only a placeholder and can be replaced.-->\r\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"section1\">\r\n\r\n  <mat-toolbar id=\"header\">\r\n    <a [routerLink]=\"['']\">\r\n      <img id=\"header_img\" alt=\"OpenVidu Logo\" src=\"assets/images/openvidu_logo.png\">\r\n    </a>\r\n    <div id=\"version\">\r\n      <span>{{version}}</span>\r\n    </div>\r\n  </mat-toolbar>\r\n\r\n  <div id=\"ov_info\">\r\n    <img id=\"ov_img\" alt=\"OpenVidu Logo\" src=\"assets/images/openvidu_vert_white_bg_trans_cropped.png\">\r\n  </div>\r\n\r\n  <login-component\r\n    (loggedIn)=\"getRooms()\">\r\n  </login-component>\r\n\r\n  <mat-spinner color=\"accent\" id=\"spinner\" *ngIf=\"loading\"></mat-spinner>\r\n\r\n  <div id=\"card_content\" *ngIf=\"this.userSrv.isLogged\r\n    && !loading\r\n    && ((this.moddedRooms!==undefined && this.moddedRooms.length>0)\r\n    || (this.presentedRooms!==undefined && this.presentedRooms.length>0)\r\n    || (this.participatedRooms!==undefined && this.participatedRooms.length>0))\">\r\n    <mat-card id=\"room_card\">\r\n      <mat-list>\r\n        <div *ngIf=\"this.moddedRooms!==undefined && this.moddedRooms.length>0\">\r\n          <h3 mat-subheader>MODDED ROOMS</h3>\r\n          <mat-list-item *ngFor=\"let mod of this.moddedRooms\">\r\n            <a mat-line mat-stroked-button routerLink=\"{{mod.name}}\">\r\n              {{mod.name}}\r\n            </a>\r\n            <button mat-icon-button (click)=\"getInviteURL(mod.name,'moderator')\">\r\n              <mat-icon color=\"accent\" matTooltip=\"Invite URL for moderators\">link</mat-icon>\r\n            </button>\r\n            <button mat-icon-button (click)=\"getInviteURL(mod.name,'participant')\">\r\n              <mat-icon matTooltip=\"Invite URL for participants\">link</mat-icon>\r\n            </button>\r\n          </mat-list-item>\r\n        </div>\r\n\r\n        <div *ngIf=\"this.presentedRooms!==undefined && this.presentedRooms.length>0\">\r\n          <h3 mat-subheader>PRESENTED ROOMS</h3>\r\n          <mat-list-item *ngFor=\"let pres of this.presentedRooms\">\r\n            <a mat-line mat-stroked-button routerLink=\"{{pres.name}}\">{{pres.name}}</a>\r\n          </mat-list-item>\r\n        </div>\r\n        \r\n        <div *ngIf=\"this.participatedRooms!==undefined && this.participatedRooms.length>0\">\r\n          <h3 mat-subheader>PARTICIPATED ROOMS</h3>\r\n          <mat-list-item *ngFor=\"let part of this.participatedRooms\">\r\n            <a mat-line mat-stroked-button routerLink=\"{{part.name}}\">{{part.name}}</a>\r\n          </mat-list-item>\r\n        </div>\r\n      </mat-list>\r\n\r\n      <button mat-flat-button class=\"addRoomButton\" matTooltip=\"Create a new room\" (click)=\"openAddRoomDialog()\" *ngIf=\"this.userSrv.isAdmin\">\r\n        <mat-icon>add</mat-icon>\r\n      </button>\r\n    </mat-card>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #addRoomDialog let-dialogRef=\"dialogRef\" id=\"addRoomDialog\">\r\n  <mat-form-field appearance=\"outline\" color=\"primary\" class=\"dialogCentered\">\r\n    <mat-label>Room name</mat-label>\r\n      <input matInput [(ngModel)]=\"newRoom\"  (keypress)=\"eventKeyPress($event)\">\r\n  </mat-form-field>\r\n  <div>\r\n    <button mat-flat-button class=\"addRoomButton dialogCentered\" matTooltip=\"Create a new room\" (click)=\"createRoom()\">\r\n      <mat-icon>add</mat-icon>\r\n    </button>\r\n  </div>\r\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/invite/invite.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/invite/invite.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"background\">\r\n    <div id=\"component\">\r\n        <div id=\"ov_info\">\r\n            <a [routerLink]=\"['']\">\r\n                <img id=\"ov_img\" alt=\"OpenVidu Logo\" src=\"assets/images/openvidu_vert_white_bg_trans_cropped.png\">\r\n            </a>\r\n        </div>\r\n        <div id=\"roomName\">Joining \"{{roomName}}\"<span *ngIf=\"this.userSrv.isLogged\"> as {{this.userSrv.user.name}}</span></div>\r\n        <div>\r\n            <div *ngIf=\"!this.userSrv.isLogged\">\r\n                <login-component></login-component><p id=\"loginMsg\"> to enter the room</p>\r\n                <p>or create an account:</p>\r\n                <mat-form-field appearance=\"outline\" color=\"primary\">\r\n                    <mat-label>Username</mat-label>\r\n                    <input matInput [(ngModel)]=\"userName\" (keypress)=\"eventKeyPress($event)\">\r\n                    <mat-hint *ngIf=this.userErrorMsg id=\"userErrorMsg\">{{userErrorMsg}}</mat-hint>\r\n                </mat-form-field>\r\n                <div></div>\r\n                <mat-form-field appearance=\"outline\" color=\"primary\">\r\n                    <mat-label>Password</mat-label>\r\n                    <input matInput [(ngModel)]=\"password\" (keypress)=\"eventKeyPress($event)\" type=\"password\">\r\n                </mat-form-field>\r\n                <div></div>\r\n            </div>\r\n            <button mat-flat-button color=\"accent\" (click)=\"enterRoom()\" [disabled]=\"!userSrv.isLogged && (!userName || !password)\">Access room</button>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/dialog-choose-room/dialog-choose-room.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/dialog-choose-room/dialog-choose-room.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"dialogChooseRoom\" [ngStyle]=\"{ display: ovSettings.autopublish ? 'none' : 'block' }\">\r\n  <app-dialog-extension *ngIf=\"showDialogExtension\" [nickname]=\"localUsers[0].getNickname()\"\r\n    (cancel)=\"toggleDialogExtension()\"></app-dialog-extension>\r\n\r\n  <mat-card *ngIf=\"localUsers[0].getStreamManager()\">\r\n    <mat-card-title>\r\n      <div id=\"img_content\">\r\n        <img id=\"header_img\" alt=\"OpenVidu Logo\"\r\n          src=\"https://raw.githubusercontent.com/OpenVidu/openvidu-call/master/front/openvidu-call/src/assets/images/openvidu_logo_grey.png\" />\r\n      </div>\r\n      <h1 mat-dialog-title>Set up your room</h1>\r\n      <button mat-icon-button (click)=\"close()\" id=\"closeButton\">\r\n        <mat-icon color=\"warn\" matTooltip=\"Cancel\">close</mat-icon>\r\n      </button>\r\n    </mat-card-title>\r\n    <mat-card-content align=\"center\" id=\"card-content\">\r\n      <div class=\"\">\r\n        <div class=\"\" fxLayout=\"row\" fxLayout.sm=\"column\" fxLayout.lt-sm=\"column\" fxFlexFill>\r\n          <!--  left section -->\r\n          <div fxFlex=\"45\" fxFlex.sm=\"25\" fxFlex.lt-sm=\"25\" class=\"volume-theme\">\r\n            <h3 id=\"sessionInfo\">Session : {{ mySessionId }}</h3>\r\n\r\n            <div id=\"videoContainer\">\r\n              <mat-slider class=\"volumeSlider\" [max]=\"0\" [min]=\"100\" [color]=\"updateVolumeColor()\"\r\n                [ngModel]=\"volumeValue\" [vertical]=\"true\">\r\n              </mat-slider>\r\n              <ov-video *ngIf=\"localUsers[0] && localUsers[0].getStreamManager()\"\r\n                [streamManager]=\"localUsers[0].getStreamManager()\" id=\"ovVideo\"\r\n                [className]=\"localUsers[1] ? 'smallVideo' : ''\"></ov-video>\r\n              <ov-video *ngIf=\"localUsers[1] && localUsers[1].getStreamManager()\"\r\n                [streamManager]=\"localUsers[1].getStreamManager()\" id=\"ovVideoScreen\"></ov-video>\r\n            </div>\r\n            <div id=\"photoButton\">\r\n              <button mat-stroked-button (click)=\"takePhoto()\" id=\"avatarButton\">\r\n                <mat-icon matTooltip=\"Take Photo\">photo_camera</mat-icon>\r\n                <span style=\"margin-left: 5px\">Capture Avatar</span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n          <!--  right section -->\r\n          <div fxFlex=\"55\" fxFlex.sm=\"65\" fxFlex.lt-sm=\"65\" class=\"sec3\">\r\n            <div fxLayout=\"row\" fxFill id=\"avatarSection\">\r\n              <div fxLayout fxFlex>\r\n                <div class=\"\" fxFlex=\"30\" fxLayoutAlign=\"center center\">\r\n                  <h3 style=\"margin: auto;\">Avatar</h3>\r\n                </div>\r\n                <div class=\"\" fxFlex=\"70\" fxLayoutAlign=\"center center\">\r\n                  <div id=\"avatarContainer\" (mouseover)=\"hover1 = true\" (click)=\"setAvatar('video')\"\r\n                    (mouseleave)=\"hover1 = false\"\r\n                    [ngStyle]=\"{ backgroundColor: videoAvatar && hover1 && avatarSelected !== 'video' ? 'lightgreen' : 'white' }\"\r\n                    [style.background]=\"avatarSelected === 'video' ? 'lightgreen' : 'transparent'\">\r\n                    <div id=\"imgText\" *ngIf=\"!videoAvatar\">\r\n                      <span>Press Avatar Button</span>\r\n                    </div>\r\n                    <img id=\"avatarImg\" *ngIf=\"videoAvatar\" [src]=\"videoAvatar\" />\r\n                  </div>\r\n                  <div id=\"avatarContainer\" (click)=\"setAvatar('random')\" (mouseover)=\"hover2 = true\"\r\n                    (mouseleave)=\"hover2 = false\" [ngStyle]=\"{\r\n                      backgroundColor: randomAvatar && hover2 && avatarSelected !== 'random' ? 'lightgreen' : 'white'\r\n                    }\" [style.background]=\"avatarSelected === 'random' ? 'lightgreen' : 'transparent'\">\r\n                    <mat-spinner id=\"imgText\" [diameter]=\"70\" *ngIf=\"!randomAvatar\" color=\"accent\"></mat-spinner>\r\n                    <img id=\"avatarImg\" *ngIf=\"randomAvatar\" [src]=\"randomAvatar\" />\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <!-- Devices section / Microphone-->\r\n            <div fxLayout=\"row\" fxFill id=\"devicesSection\" *ngIf=\"ovSettings && ovSettings.toolbarButtons.audio\">\r\n              <div fxLayout fxFlex>\r\n                <div class=\"one\" fxFlex=\"20\" fxLayoutAlign=\"center center\">\r\n                  <button mat-stroked-button (click)=\"toggleMic()\" id=\"micDeviceButton\">\r\n                    <mat-icon *ngIf=\"isAudioActive\" matTooltip=\"Microphone Enabled\">mic</mat-icon>\r\n                    <mat-icon *ngIf=\"!isAudioActive\" color=\"warn\" matTooltip=\"Microphone Disabled\">mic_off</mat-icon>\r\n                  </button>\r\n                </div>\r\n                <div class=\"two\" fxFlex=\"80\" fxLayoutAlign=\"center center\">\r\n                  <mat-form-field class=\"alternate-theme\">\r\n                    <mat-select placeholder=\"Microphone Options\"\r\n                      [ngModel]=\"isAudioActive && micValue ? micValue.label : 'None'\"\r\n                      (selectionChange)=\"micChanged($event.value)\">\r\n                      <mat-option *ngFor=\"let microphone of microphones\" [value]=\"microphone.label\">{{\r\n                        microphone.label\r\n                      }}</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- Devices section / Camera-->\r\n            <div fxLayout=\"row\" fxFill id=\"devicesSection\" *ngIf=\"ovSettings && ovSettings.toolbarButtons.video\">\r\n              <div fxLayout fxFlex>\r\n                <div class=\"one\" fxFlex=\"20\" fxLayoutAlign=\"center center\">\r\n                  <button mat-stroked-button (click)=\"toggleCam()\" id=\"camDeviceButton\">\r\n                    <mat-icon *ngIf=\"isVideoActive\" matTooltip=\"Camera Enabled\">videocam</mat-icon>\r\n                    <mat-icon *ngIf=\"!isVideoActive\" color=\"warn\" matTooltip=\"Camera Disabled\">videocam_off</mat-icon>\r\n                  </button>\r\n                </div>\r\n                <div class=\"two\" fxFlex=\"80\" fxLayoutAlign=\"center center\">\r\n                  <mat-form-field class=\"alternate-theme\">\r\n                    <mat-select placeholder=\"Camera Options\"\r\n                      [ngModel]=\"isVideoActive && camValue ? camValue.label : 'None'\"\r\n                      (selectionChange)=\"camChanged($event.value)\">\r\n                      <mat-option *ngFor=\"let camera of cameras\" [value]=\"camera.label\">{{ camera.label }}</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <!-- Devices section / ScreenShare-->\r\n            <div fxLayout=\"row\" fxFill id=\"devicesSection\" *ngIf=\"ovSettings && ovSettings.toolbarButtons.screenShare\">\r\n              <div fxLayout fxFlex>\r\n                <div class=\"one\" fxFlex=\"20\" fxLayoutAlign=\"center center\">\r\n                  <button mat-stroked-button (click)=\"toggleScreenShare()\" id=\"screenShareButton\">\r\n                    <mat-icon *ngIf=\"isScreenShareActive\" matTooltip=\"Screen Share Enabled\">screen_share</mat-icon>\r\n                    <mat-icon *ngIf=\"!isScreenShareActive\" color=\"warn\" matTooltip=\"Screen Share Disabled\">\r\n                      stop_screen_share</mat-icon>\r\n                  </button>\r\n                </div>\r\n                <div class=\"two\" fxFlex=\"80\" fxLayoutAlign=\"center center\">\r\n                  <mat-form-field class=\"alternate-theme\">\r\n                    <input matInput disabled placeholder=\"Screen Pages\" [ngModel]=\"screenActive\">\r\n\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <!-- Devices section / Nickname-->\r\n            <div fxLayout=\"row\" fxFill id=\"devicesSection\">\r\n              <div fxLayout fxFlex>\r\n                <div class=\"one\" fxFlex=\"20\" fxLayoutAlign=\"center center\">\r\n                  <button mat-stroked-button (click)=\"generateNickname()\" id=\"nicknameButton\">\r\n                    <mat-icon matTooltip=\"Nickname\">person</mat-icon>\r\n                  </button>\r\n                </div>\r\n                <div class=\"two\" fxFlex=\"80\" fxLayoutAlign=\"center center\">\r\n                  <form id=\"nicknameDialog\" class=\"alternate-theme\">\r\n                    <mat-form-field>\r\n                      <input matInput placeholder=\"Nickname\" [formControl]=\"nicknameFormControl\"\r\n                        [errorStateMatcher]=\"matcher\" (keypress)=\"eventKeyPress($event)\" autocomplete=\"off\" />\r\n                      <mat-error *ngIf=\"nicknameFormControl.hasError('required')\">\r\n                        Nickname is <strong>required</strong>\r\n                      </mat-error>\r\n                      <mat-error *ngIf=\"nicknameFormControl.hasError('maxlength')\">\r\n                        Nickname is <strong>too long!</strong>\r\n                      </mat-error>\r\n                    </mat-form-field>\r\n                  </form>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </mat-card-content>\r\n\r\n    <mat-card-footer>\r\n      <div id=\"joinButtonDiv\">\r\n        <button mat-stroked-button (click)=\"accept()\" id=\"joinButton\">JOIN</button>\r\n      </div>\r\n    </mat-card-footer>\r\n\r\n  </mat-card>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/dialog-error/dialog-error.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/dialog-error/dialog-error.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>{{data.message}}</h1>\r\n<p>\r\n  {{data.messageError}}\r\n</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/dialog-extension/dialog-extension.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/dialog-extension/dialog-extension.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"dialogExtension\">\r\n\r\n  <mat-card>\r\n    <mat-card-content>\r\n      <h1 mat-dialog-title>Hello {{nickname}}</h1>\r\n      <div mat-dialog-content>\r\n        <p>You need install this chrome extension and refresh the browser for can share your screen.</p>\r\n      </div>\r\n    </mat-card-content>\r\n    <mat-card-actions align=\"center\">\r\n      <button mat-button (click)=\"onNoClick()\" id=\"cancelButton\">Cancel</button>\r\n      <button mat-button (click)=\"goToChromePage()\" cdkFocusInitial id=\"installButton\">Install</button>\r\n      <button mat-button *ngIf=\"this.isInstalled\" (click)=\"refreshBrowser()\">Refresh</button>\r\n    </mat-card-actions>\r\n  </mat-card>\r\n\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/login/login.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/login/login.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container id=\"component\">\r\n    <ng-container *ngIf=\"!userService.isLogged\">\r\n        <span>\r\n            <button mat-flat-button color=\"accent\" (click)='openLoginDialog()'>\r\n                Login\r\n            </button>\r\n        </span>\r\n    </ng-container>\r\n    \r\n    <ng-container *ngIf=\"userService.isLogged\">\r\n        <span id=\"username\">\r\n            {{userService.user.name}}\r\n        </span>\r\n        <span>\r\n            <button mat-flat-button color=\"warn\" (click)='logOut()'>\r\n                Logout\r\n            </button>\r\n        </span>\r\n    </ng-container>\r\n    \r\n    <ng-template #loginDialog let-dialogRef=\"dialogRef\" id=\"loginDialog\">\r\n        <mat-card>\r\n            <mat-card-content>\r\n                <form>\r\n                    <div layout=\"column\">\r\n                        <div>\r\n                            <mat-form-field appearance=\"outline\" color=\"primary\" class=\"centered\">\r\n                                <mat-label>User</mat-label>\r\n                                <input #user matInput placeholder=\"User\" (keypress)=\"eventKeyPress($event, user.value, pass.value)\">\r\n                            </mat-form-field>\r\n                        </div>\r\n                        <div>\r\n                            <mat-form-field appearance=\"outline\" color=\"primary\" class=\"centered\">\r\n                                <mat-label>Password</mat-label>\r\n                                <input #pass matInput placeholder=\"Password\" type=\"password\" (keypress)=\"eventKeyPress($event, user.value, pass.value)\">\r\n                            </mat-form-field>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </mat-card-content>\r\n            <mat-card-actions>\r\n                <div layout=\"column\">\r\n                    <a mat-flat-button (click)=\"logIn($event, user.value, pass.value)\" class=\"text-upper centered\" color=\"primary\">\r\n                        <span>Login</span>\r\n                    </a>\r\n                </div>\r\n            </mat-card-actions>\r\n        </mat-card>\r\n    </ng-template>\r\n</ng-container>");

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
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"chatContainer\">\r\n  <div id=\"chatComponent\" [class.chatComponentLight]=\"lightTheme\">\r\n    <div id=\"chatToolbar\">\r\n      <span *ngIf=\"!userSrv.isModOfRoom(roomName) && signal==='chat'\"> CHAT</span>\r\n      <span *ngIf=\"userSrv.isModOfRoom(roomName) && signal==='chat'\"> ASSITANTS CHAT</span>\r\n      <span *ngIf=\"signal==='chatMod'\"> MODERATORS CHAT</span>\r\n      <button mat-icon-button (click)=\"close()\" id=\"closeButton\">\r\n        <mat-icon matTooltip=\"Close\" color=\"warn\">highlight_off</mat-icon>\r\n      </button>\r\n    </div>\r\n    <div class=\"message-wrap\" #chatScroll>\r\n      <div\r\n        *ngFor=\"let data of messageList\"\r\n        class=\"message\"\r\n        [class.right]=\"\r\n          data.connectionId === session.connection.connectionId ||\r\n          (sessionScreen && sessionScreen.connection && data.connectionId === sessionScreen.connection.connectionId)\r\n        \"\r\n        [class.left]=\"\r\n          !(\r\n            data.connectionId === session.connection.connectionId ||\r\n            (sessionScreen && sessionScreen.connection && data.connectionId === sessionScreen.connection.connectionId)\r\n          )\r\n        \"\r\n      >\r\n        <img class=\"user-img\" [src]=\"data.userAvatar\" />\r\n        <div class=\"msg-detail\">\r\n          <div class=\"msg-info\">\r\n            <p>{{ data.nickname }}</p>\r\n          </div>\r\n          <div class=\"msg-content\">\r\n            <span class=\"triangle\"></span>\r\n            <p class=\"text\" [innerHTML]=\"data.message | linkify\"></p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div id=\"messageInput\">\r\n      <input\r\n        #chatInput\r\n        placeholder=\"Send a message\"\r\n        autocomplete=\"off\"\r\n        (keypress)=\"eventKeyPress($event)\"\r\n        [(ngModel)]=\"message\"\r\n        id=\"chatInput\"\r\n      />\r\n      <button mat-mini-fab id=\"sendButton\" (click)=\"sendMessage()\">\r\n        <mat-icon matTooltip=\"Send\">send</mat-icon>\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/stream/stream.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/stream/stream.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"OT_widget-container\" [id]=\"'container-' + this.user.getStreamManager().stream.streamId\">\r\n\r\n    <app-toolbar *ngIf=\"isFullscreen\" \r\n    [lightTheme]=\"lightTheme\"\r\n    [newMessagesNum]=\"newMessagesNum\"\r\n    [mySessionId]=\"localUser.getStreamManager().stream.session.sessionId\"\r\n    [localUser]=\"localUser\"\r\n    [compact]=\"compact\"\r\n    (camButtonClicked)=\"toggleCam()\"\r\n    (micButtonClicked)=\"toggleMic()\"\r\n    (exitButtonClicked)=\"exitSession()\"\r\n    (menuButtonClicked)=\"toggleMenu()\"\r\n    (screenShareClicked)=\"screenShare()\"\r\n    (stopScreenSharingClicked)=\"stopScreenSharing()\">\r\n</app-toolbar>\r\n\r\n    <mat-chip-list class=\"nickname\" [class.fullscreen]=\"isFullscreen\" >\r\n       \r\n        <mat-chip (click)=\"toggleNicknameForm()\" [color]=\"canEditNickname ? 'accent' : 'primary'\" selected *ngIf=\"!toggleNickname\">\r\n            <span id=\"nickname\">{{this.user.getNickname()}}</span>\r\n            <span *ngIf=\"user.isScreen()\">_SCREEN</span>\r\n            <span *ngIf=\"canEditNickname\"> (edit)</span>\r\n        </mat-chip>\r\n        <div *ngIf=\"toggleNickname && canEditNickname\" [class.fullscreen]=\"isFullscreen\" id=\"dialogNickname\">\r\n            <button mat-icon-button (click)=\"toggleNicknameForm()\" id=\"closeButton\">\r\n                <mat-icon matTooltip=\"Close\">highlight_off</mat-icon>\r\n            </button>\r\n            <form id=\"nicknameForm\" class=\"alternate-theme\">\r\n                <mat-form-field color=\"primary\">\r\n                    <input matInput #nicknameInput placeholder=\"Nick: {{user.getNickname()}}\" [formControl]=\"nicknameFormControl\" [errorStateMatcher]=\"matcher\"\r\n                        (keypress)=\"eventKeyPress($event)\" autocomplete=\"off\">\r\n                    <mat-error *ngIf=\"nicknameFormControl.hasError('required')\">\r\n                        Nickname is <strong>required</strong>\r\n                    </mat-error>\r\n                    <mat-error *ngIf=\"nicknameFormControl.hasError('maxlength')\">\r\n                        Nickname is <strong>too long!</strong>\r\n                    </mat-error>\r\n                </mat-form-field>\r\n            </form>\r\n        </div>\r\n    </mat-chip-list>\r\n\r\n    <ov-video [streamManager]=\"user.getStreamManager()\" [mutedSound]=\"mutedSound\"></ov-video>\r\n    <div class=\"statusIcons\">\r\n        <div id=\"statusMic\" *ngIf=\"!this.user.isAudioActive()\">\r\n            <mat-icon>mic_off</mat-icon>\r\n        </div>\r\n        <div id=\"statusCam\" *ngIf=\"!this.user.isVideoActive()\">\r\n            <mat-icon>videocam_off</mat-icon>\r\n        </div>\r\n    </div>\r\n    <button mat-icon-button id=\"fullscreenButton\" class=\"streamButtons\" (click)=\"toggleFullscreen()\">\r\n        <mat-icon>{{this.fullscreenIcon}}</mat-icon>\r\n    </button>\r\n    <button mat-icon-button id=\"volumeButton\" class=\"streamButtons\" *ngIf=\"this.user.isRemote()\" (click)=\"toggleSound()\">\r\n        <mat-icon *ngIf=\"!mutedSound\" matTooltip=\"Mute sound\">volume_up</mat-icon>\r\n        <mat-icon *ngIf=\"mutedSound\" color=\"warn\" matTooltip=\"Unmute sound\">volume_off</mat-icon>\r\n    </button>\r\n    <button mat-icon-button (click)=\"screenShare()\" class=\"streamButtons\" id=\"changeScreenButton\" *ngIf=\"this.user.isRemote() && canEditNickname \">\r\n        <mat-icon matTooltip=\"Choose screen\" >picture_in_picture</mat-icon>\r\n    </button>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/toolbar/toolbar.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/toolbar/toolbar.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar id=\"header\" role=\"heading\" [class.headerLight]=\"lightTheme\">\r\n\r\n    <div id=\"navSessionInfo\">\r\n        <a>\r\n            <img id=\"header_img\" *ngIf=\"!lightTheme\" alt=\"OpenVidu Logo\" src=\"https://raw.githubusercontent.com/OpenVidu/openvidu-call/master/front/openvidu-call/src/assets/images/openvidu_logo.png\">\r\n            <img id=\"header_img\" *ngIf=\"lightTheme\" alt=\"OpenVidu Logo\" src=\"https://raw.githubusercontent.com/OpenVidu/openvidu-call/master/front/openvidu-call/src/assets/images/openvidu_logo_grey.png\">\r\n        </a>\r\n        <div id=\"titleContent\" *ngIf=\"!compact && mySessionId\" [class.titleContentLight]=\"lightTheme\">\r\n            <span id=\"session-title\">{{mySessionId}}</span>\r\n        </div>\r\n    </div>\r\n\r\n    <div id=\"navButtons\" align=\"center\">\r\n      <button mat-icon-button (click)=\"micStatusChanged()\" id=\"navMicButton\" *ngIf=\"(!this.ovSettings || (this.ovSettings && this.ovSettings.toolbarButtons.audio))\">\r\n        <mat-icon *ngIf=\"localUser && localUser.isAudioActive()\" matTooltip=\"Mute your audio\">mic</mat-icon>\r\n        <mat-icon *ngIf=\"localUser && !localUser.isAudioActive()\" color=\"warn\" matTooltip=\"Unmute your audio\">mic_off</mat-icon>\r\n      </button>\r\n      <button mat-icon-button (click)=\"camStatusChanged()\" id=\"navCamButton\" *ngIf=\"(!this.ovSettings || (this.ovSettings && this.ovSettings.toolbarButtons.video))\">\r\n        <mat-icon *ngIf=\"localUser && localUser.isLocal() && localUser.isVideoActive()\" matTooltip=\"Mute your cam\">videocam</mat-icon>\r\n        <mat-icon *ngIf=\"(localUser && localUser.isLocal() && !localUser.isVideoActive()) || localUser && localUser.isScreen()\" color=\"warn\" matTooltip=\"Unmute your cam\">videocam_off</mat-icon>\r\n      </button>\r\n      <button mat-icon-button (click)=\"screenShare()\" id=\"navScreenButton\" *ngIf=\"(localUser && !localUser.isScreenShareActive() && (!this.ovSettings || (this.ovSettings && this.ovSettings.toolbarButtons.screenShare))) && this.userService.isModOfRoom(this.mySessionId)\">\r\n        <mat-icon matTooltip=\"Screen share\" color=\"warn\">stop_screen_share</mat-icon>\r\n      </button>\r\n      <button mat-icon-button (click)=\"stopScreenSharing()\" *ngIf=\"(localUser && localUser.isScreenShareActive())\">\r\n        <mat-icon matTooltip=\"Stop sharing\">screen_share</mat-icon>\r\n      </button>\r\n      <button mat-icon-button (click)=\"toggleFullscreen()\" *ngIf=\"localUser && (!this.ovSettings || (this.ovSettings && this.ovSettings.toolbarButtons.fullscreen))\">\r\n        <mat-icon matTooltip=\"Fullscreen\">{{fullscreenIcon}}</mat-icon>\r\n      </button>\r\n      <button mat-icon-button (click)=\"exitSession()\" id=\"navLeaveButton\" *ngIf=\"!this.ovSettings || (this.ovSettings && this.ovSettings.toolbarButtons.exit)\">\r\n        <mat-icon color=\"warn\" matTooltip=\"Leave the session\">power_settings_new</mat-icon>\r\n      </button>\r\n      <button mat-icon-button (click)=\"getInviteURL('moderator')\" *ngIf=\"localUser && this.userService.isModOfRoom(this.mySessionId)\">\r\n        <mat-icon color=\"accent\" matTooltip=\"Invite URL for moderators\">link</mat-icon>\r\n      </button>\r\n      <button mat-icon-button (click)=\"getInviteURL('participant')\" *ngIf=\"localUser && this.userService.isModOfRoom(this.mySessionId)\">\r\n        <mat-icon matTooltip=\"Invite URL for participants\">link</mat-icon>\r\n      </button>\r\n      <button mat-icon-button id=\"navMenuButton\" (click)=\"toggleMenu()\" *ngIf=\"!this.ovSettings || (this.ovSettings && this.ovSettings.chat)\">\r\n          <mat-icon matBadge=\"{{newMessagesNum}}\" [matBadgeHidden]=\"newMessagesNum === 0\"  matBadgePosition=\"above before\" matTooltip=\"Menu\" matBadgeColor=\"accent\">menu</mat-icon>\r\n      </button>\r\n    </div>\r\n</mat-toolbar>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/video-room/video-room.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/video-room/video-room.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"!!ovSettings\" id=\"videoRoomNavBar\" [class.boundsLight]=\"lightTheme\">\r\n  <app-dialog-choose-room\r\n    *ngIf=\"showDialogChooseRoom && this.userService.isLogged\"\r\n    [userNickname]=\"userService.user.name\"\r\n    [sessionName]=\"sessionName\"\r\n    [ovSettings]=\"ovSettings\"\r\n    (join)=\"toggleDialogChooseRoom($event)\"\r\n    (leaveSession)=\"exitSession()\"\r\n  ></app-dialog-choose-room>\r\n\r\n  <div *ngIf=\"localUsers && localUsers[0]\">\r\n    <app-toolbar\r\n      [lightTheme]=\"lightTheme\"\r\n      [newMessagesNum]=\"newMessages\"\r\n      [compact]=\"compact\"\r\n      [localUser]=\"localUsers[0]\"\r\n      [mySessionId]=\"mySessionId\"\r\n      [ovSettings]=\"ovSettings\"\r\n      (camButtonClicked)=\"toggleCam()\"\r\n      (micButtonClicked)=\"toggleMic()\"\r\n      (screenShareClicked)=\"screenShareAndChangeScreen()\"\r\n      (stopScreenSharingClicked)=\"stopScreenSharing()\"\r\n      (exitButtonClicked)=\"exitSession()\"\r\n      (menuButtonClicked)=\"toggleMenu()\"\r\n    ></app-toolbar>\r\n\r\n    <app-dialog-extension\r\n      *ngIf=\"showDialogExtension\"\r\n      [nickname]=\"localUsers[0].getNickname()\"\r\n      (cancel)=\"toggleDialogExtension()\"\r\n    ></app-dialog-extension>\r\n    <mat-sidenav-container class=\"sidenav-container\" id=\"room-container\" [class.boundsLight]=\"lightTheme\" fullscreen>\r\n      <mat-sidenav\r\n        #sidenav\r\n        mode=\"{{sidenavMode}}\"\r\n        position=\"end\"\r\n        class=\"sidenav-menu\"\r\n        [class.boundsLight]=\"lightTheme\"\r\n        fixedInViewport=\"true\"\r\n        fixedTopGap=\"40\"\r\n        fixedBottomGap=\"0\"\r\n        *ngIf=\"localUsers && (localUsers[0].getStreamManager())\"\r\n      >\r\n      \r\n        <mat-tab-group class=\"tab-group\" backgroundColor=\"primary\" animationDuration=\"0ms\">\r\n\r\n          <mat-tab class=\"tab\" *ngIf=\"!this.ovSettings || (this.ovSettings && this.ovSettings.chat)\">\r\n            <ng-template mat-tab-label>\r\n              <mat-icon>chat</mat-icon>\r\n              <span *ngIf=\"userService.canStream(mySessionId)\">Assistants chat</span>\r\n              <span *ngIf=\"!userService.canStream(mySessionId)\">Chat</span>\r\n            </ng-template>\r\n            <chat-component\r\n              #chatComponent\r\n              [signal]=\"'chat'\"\r\n              [session]=\"this.session\"\r\n              [sessionScreen]=\"this.sessionScreen\"\r\n              [user]=\"this.localUsers[0]\"\r\n              [menuOpened]=\"menuOpened\"\r\n              [lightTheme]=\"lightTheme\"\r\n              [messageList]=\"messageList\"\r\n              [roomName]=\"roomName\"\r\n              [connections]=\"[]\"\r\n              (closeMenu)=\"toggleMenu()\"\r\n            ></chat-component>\r\n          </mat-tab>\r\n\r\n          <mat-tab class=\"tab\" *ngIf=\"(!this.ovSettings || (this.ovSettings && this.ovSettings.chat)) && userService.canStream(mySessionId)\">\r\n            <ng-template mat-tab-label>\r\n              <mat-icon>chat_bubble</mat-icon>\r\n              Moderators chat\r\n            </ng-template>\r\n            <chat-component\r\n              #modChatComponent\r\n              [signal]=\"'chatMod'\"\r\n              [session]=\"this.session\"\r\n              [sessionScreen]=\"this.sessionScreen\"\r\n              [user]=\"this.localUsers[0]\"\r\n              [menuOpened]=\"menuOpened\"\r\n              [lightTheme]=\"lightTheme\"\r\n              [messageList]=\"messageListMod\"\r\n              [roomName]=\"roomName\"\r\n              [connections]=\"modConnections\"\r\n              (closeMenu)=\"toggleMenu()\"\r\n            ></chat-component>\r\n          </mat-tab>\r\n\r\n          <mat-tab class=\"tab\">\r\n            <ng-template mat-tab-label>\r\n              <mat-icon>people</mat-icon>\r\n              Assistants\r\n            </ng-template>\r\n            <ng-template matTabContent>\r\n              <assistants-component\r\n                #assistants\r\n                [session]=\"session\"\r\n                [userName]=\"userService.user.name\">\r\n              </assistants-component>\r\n            </ng-template>\r\n          </mat-tab>\r\n\r\n        </mat-tab-group>\r\n      </mat-sidenav>\r\n\r\n      <mat-sidenav-content class=\"sidenav-main\">\r\n        <div id=\"layout\" class=\"bounds\" [class.boundsLight]=\"lightTheme\">\r\n          <ng-container *ngIf=\"userService.canStream(mySessionId)\">\r\n            <div\r\n              class=\"OT_root OT_publisher custom-class\"\r\n              id=\"localUser\"\r\n              *ngFor=\"let localUser of localUsers\"\r\n              (dblclick)=\"enlargeElement($event)\">\r\n              <stream-component\r\n                *ngIf=\"localUser.getStreamManager()\"\r\n                #videoStream\r\n                [user]=\"localUser\"\r\n                [localUser]=\"localUsers[0]\"\r\n                [lightTheme]=\"lightTheme\"\r\n                [newMessagesNum]=\"newMessages\"\r\n                [compact]=\"compact\"\r\n                [menuOpened]=\"menuOpened\"\r\n                [canEditNickname]=\"true\"\r\n                (nicknameClicked)=\"nicknameChanged($event)\"\r\n                (camButtonClicked)=\"toggleCam()\"\r\n                (micButtonClicked)=\"toggleMic()\"\r\n                (exitButtonClicked)=\"exitSession()\"\r\n                (menuButtonClicked)=\"toggleMenu()\"\r\n                (screenShareClicked)=\"screenShareAndChangeScreen()\"\r\n                (stopScreenSharingClicked)=\"stopScreenSharing()\">\r\n              </stream-component>\r\n            </div>\r\n          </ng-container>\r\n\r\n          <div\r\n            *ngFor=\"let user of this.remoteStreamers\"\r\n            class=\"OT_root OT_publisher custom-class\"\r\n            id=\"remoteStreamers\"\r\n            (dblclick)=\"enlargeElement($event)\"\r\n          >\r\n            <stream-component\r\n              #videoStream\r\n              [user]=\"user\"\r\n              [localUser]=\"localUsers[0]\"\r\n              [lightTheme]=\"lightTheme\"\r\n              [newMessagesNum]=\"newMessages\"\r\n              [compact]=\"compact\"\r\n              [menuOpened]=\"menuOpened\"\r\n              [canEditNickname]=\"false\"\r\n              (camButtonClicked)=\"toggleCam()\"\r\n              (micButtonClicked)=\"toggleMic()\"\r\n              (exitButtonClicked)=\"exitSession()\"\r\n              (menuButtonClicked)=\"toggleMenu()\"\r\n              (screenShareClicked)=\"screenShareAndChangeScreen()\"\r\n              (stopScreenSharingClicked)=\"stopScreenSharing()\"\r\n            ></stream-component>\r\n          </div>\r\n        </div>\r\n      </mat-sidenav-content>\r\n    </mat-sidenav-container>\r\n  </div>\r\n</div>\r\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony default export */ __webpack_exports__["default"] = ("#header {\r\n  background-color: transparent;\r\n  color: #ffffff;\r\n}\r\n#header_img {\r\n  max-width: 200px;\r\n  margin-right: 10px;\r\n  margin-top: 10px;\r\n}\r\n#version {\r\n  position: absolute;\r\n  right: 5px;\r\n  font-size: 16px;\r\n}\r\n#section1 {\r\n  background-image: url('/assets/images/land2_bg.jpg');\r\n  background-size: cover;\r\n  height: 100%;\r\n  text-align: center;\r\n  position: relative;\r\n}\r\n#ov_info {\r\n  color: #ffffff;\r\n}\r\n#ov_img {\r\n  max-width: 50%;\r\n  margin: auto;\r\n}\r\nlogin-component {\r\n  max-width: 200%;\r\n  max-height: 200%;\r\n}\r\n#card_content {\r\n  height: 50%;\r\n  margin-top: 10px;\r\n}\r\n#room_card {\r\n  color: #303030;\r\n  position: inherit;\r\n  max-width: 700px;\r\n  width: 75%;\r\n  margin: auto;\r\n  background: rgba(221, 221, 221, 0.856);\r\n}\r\n#room_card mat-form-field {\r\n  margin: auto;\r\n  padding: 0px 5px;\r\n}\r\n@media (max-width: 700px) {\r\n  #header_img {\r\n    visibility: hidden;\r\n  }\r\n  #ov_img {\r\n    max-width: 65%;\r\n  }\r\n}\r\n#spinner {\r\n  margin:5% auto;\r\n}\r\n.addRoomButton {\r\n  background-color: rgb(6, 211, 98);\r\n}\r\n.dialogCentered {\r\n  left: 50%;\r\n  transform: translate(-50%, 0);\r\n}\r\n::ng-deep .mat-form-field-appearance-outline .mat-form-field-outline {\r\n  color: #dfdfdf;\r\n  opacity: 1;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkJBQTZCO0VBQzdCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGVBQWU7QUFDakI7QUFFQTtFQUNFLG9EQUFxRDtFQUNyRCxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0FBQ2Q7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixZQUFZO0VBQ1osc0NBQXNDO0FBQ3hDO0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRTtJQUNFLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsY0FBYztFQUNoQjtBQUNGO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7QUFFQTtFQUNFLFNBQVM7RUFDVCw2QkFBNkI7QUFDL0I7QUFFQTtFQUNFLGNBQWM7RUFDZCxVQUFVO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG4jaGVhZGVyX2ltZyB7XHJcbiAgbWF4LXdpZHRoOiAyMDBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuI3ZlcnNpb24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuI3NlY3Rpb24xIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ34vYXNzZXRzL2ltYWdlcy9sYW5kMl9iZy5qcGcnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4jb3ZfaW5mbyB7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuI292X2ltZyB7XHJcbiAgbWF4LXdpZHRoOiA1MCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG5sb2dpbi1jb21wb25lbnQge1xyXG4gIG1heC13aWR0aDogMjAwJTtcclxuICBtYXgtaGVpZ2h0OiAyMDAlO1xyXG59XHJcblxyXG4jY2FyZF9jb250ZW50IHtcclxuICBoZWlnaHQ6IDUwJTtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4jcm9vbV9jYXJkIHtcclxuICBjb2xvcjogIzMwMzAzMDtcclxuICBwb3NpdGlvbjogaW5oZXJpdDtcclxuICBtYXgtd2lkdGg6IDcwMHB4O1xyXG4gIHdpZHRoOiA3NSU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjIxLCAyMjEsIDIyMSwgMC44NTYpO1xyXG59XHJcblxyXG4jcm9vbV9jYXJkIG1hdC1mb3JtLWZpZWxkIHtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgcGFkZGluZzogMHB4IDVweDtcclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcclxuICAjaGVhZGVyX2ltZyB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgfVxyXG4gICNvdl9pbWcge1xyXG4gICAgbWF4LXdpZHRoOiA2NSU7XHJcbiAgfVxyXG59XHJcblxyXG4jc3Bpbm5lciB7XHJcbiAgbWFyZ2luOjUlIGF1dG87XHJcbn1cclxuXHJcbi5hZGRSb29tQnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNiwgMjExLCA5OCk7XHJcbn1cclxuXHJcbi5kaWFsb2dDZW50ZXJlZCB7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtb3V0bGluZSB7XHJcbiAgY29sb3I6ICNkZmRmZGY7XHJcbiAgb3BhY2l0eTogMTtcclxufSJdfQ== */");

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
/* harmony default export */ __webpack_exports__["default"] = ("#background {\r\n    background-color: #333333;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n#component {\r\n    position: fixed;\r\n    top: 30%;\r\n    left: 50%;\r\n    transform: translate(-50%, -30%);\r\n    text-align: center;\r\n    color: #dfdfdf;\r\n}\r\n\r\n#ov_info {\r\n    color: #ffffff;\r\n    padding-bottom: 15%;\r\n}\r\n\r\n#ov_img {\r\n    max-width: 80%;\r\n}\r\n\r\n#roomName {\r\n    display: inline-block;\r\n    font-family: 'Ubuntu', sans-serif;\r\n    background-color: #494949;\r\n    font-size: 200%;\r\n    margin-bottom: 5%;\r\n    padding-right: 2%;\r\n    padding-left: 2%;\r\n}\r\n\r\n#loginMsg {\r\n    display: inline;\r\n}\r\n\r\np {\r\n    font-family: 'Ubuntu', sans-serif;\r\n    font-size: 120%;\r\n}\r\n\r\n#userErrorMsg {\r\n    color: red;\r\n}\r\n\r\n::ng-deep .mat-form-field-appearance-outline .mat-form-field-outline {\r\n    color: #dfdfdf;\r\n    opacity: 1;\r\n}\r\n\r\n.ng-star-inserted {\r\n    color: #dfdfdf;\r\n}\r\n\r\nmat-hint {\r\n    font-size: 110%;\r\n}\r\n\r\nbutton {\r\n    margin-top: 2%;\r\n    padding-right: 10%;\r\n    padding-left: 10%;\r\n    display: inline-block;\r\n    font-family: 'Ubuntu', sans-serif;\r\n    font-size: 120%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW52aXRlL2ludml0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFFBQVE7SUFDUixTQUFTO0lBQ1QsZ0NBQWdDO0lBQ2hDLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsaUNBQWlDO0lBQ2pDLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsaUNBQWlDO0lBQ2pDLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9pbnZpdGUvaW52aXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYmFja2dyb3VuZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbiNjb21wb25lbnQge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAzMCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtMzAlKTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZGZkZmRmO1xyXG59XHJcblxyXG4jb3ZfaW5mbyB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNSU7XHJcbn1cclxuXHJcbiNvdl9pbWcge1xyXG4gICAgbWF4LXdpZHRoOiA4MCU7XHJcbn1cclxuXHJcbiNyb29tTmFtZSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LWZhbWlseTogJ1VidW50dScsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk0OTQ5O1xyXG4gICAgZm9udC1zaXplOiAyMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyJTtcclxuICAgIHBhZGRpbmctbGVmdDogMiU7XHJcbn1cclxuXHJcbiNsb2dpbk1zZyB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgZm9udC1mYW1pbHk6ICdVYnVudHUnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxMjAlO1xyXG59XHJcblxyXG4jdXNlckVycm9yTXNnIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHtcclxuICAgIGNvbG9yOiAjZGZkZmRmO1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLm5nLXN0YXItaW5zZXJ0ZWQge1xyXG4gICAgY29sb3I6ICNkZmRmZGY7XHJcbn1cclxuXHJcbm1hdC1oaW50IHtcclxuICAgIGZvbnQtc2l6ZTogMTEwJTtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTAlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LWZhbWlseTogJ1VidW50dScsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDEyMCU7XHJcbn0iXX0= */");

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
/* harmony default export */ __webpack_exports__["default"] = ("h1,\r\nh3,\r\n#imgText,\r\nmat-select,\r\nmat-option,\r\ninput,\r\nbutton {\r\n  font-family: 'Ubuntu', sans-serif;\r\n}\r\n\r\n#dialogChooseRoom {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n#dialogChooseRoom h1 {\r\n  text-align: center;\r\n}\r\n\r\n#card-content {\r\n  max-width: 95%;\r\n  height: -webkit-fit-content;\r\n  height: -moz-fit-content;\r\n  height: fit-content;\r\n  margin: auto;\r\n  overflow-y: auto;\r\n  padding-right: 8px;\r\n}\r\n\r\n#videoContainer {\r\n  position: relative;\r\n}\r\n\r\n#closeButton {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 7px;\r\n}\r\n\r\n.volumeSlider {\r\n  position: absolute;\r\n  height: 60%;\r\n  z-index: 99999;\r\n  bottom: 0;\r\n  pointer-events: none;\r\n}\r\n\r\n#ovVideoScreen,\r\n#ovVideo {\r\n  display: inline-block;\r\n}\r\n\r\n.smallVideo {\r\n  position: absolute;\r\n  bottom: 0;\r\n  right: 0;\r\n  width: 50%;\r\n  border: 1px solid;\r\n  border-color: #ffffff;\r\n}\r\n\r\n#img_content {\r\n  position: absolute;\r\n  top: 3px;\r\n  left: 0;\r\n}\r\n\r\n#header_img {\r\n  max-width: 165px;\r\n}\r\n\r\n#sessionInfo {\r\n  margin-top: 0;\r\n}\r\n\r\n#camDeviceButton,\r\n#micDeviceButton,\r\n#nicknameButton {\r\n  margin: 0px 10px;\r\n}\r\n\r\n#joinButtonDiv {\r\n  text-align: center\r\n}\r\n\r\n#joinButton {\r\n  margin: 15px;\r\n  width: 80%;\r\n}\r\n\r\n#photoButton {\r\n  margin: 10px;\r\n  text-align: center;\r\n}\r\n\r\n#avatarContainer {\r\n  border: 1px solid;\r\n  border-color: rgb(182, 182, 182);\r\n  width: 100px;\r\n  height: 100px;\r\n  margin: 10px;\r\n  position: relative;\r\n  cursor: pointer;\r\n  display: inline-block;\r\n}\r\n\r\n#devicesSection {\r\n  margin: 15px 0px;\r\n}\r\n\r\n#avatarSection,\r\n#devicesSection {\r\n  height: -webkit-fit-content !important;\r\n  height: -moz-fit-content !important;\r\n  height: fit-content !important;\r\n  min-height: auto !important;\r\n}\r\n\r\n#imgText {\r\n  display: table;\r\n}\r\n\r\n#avatarImg,\r\n#imgText {\r\n  position: absolute;\r\n  margin: auto;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n}\r\n\r\n#avatarImg {\r\n  height: 88%;\r\n  width: 88%;\r\n}\r\n\r\n#avatarContainer,\r\n#avatarImg {\r\n  border-radius: 50%;\r\n}\r\n\r\n#optionsContent {\r\n  position: initial;\r\n}\r\n\r\nmat-form-field,\r\n#nicknameDialog {\r\n  width: 100%;\r\n}\r\n\r\nmat-card {\r\n  max-width: 85% !important;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  max-height: 90%;\r\n  margin: auto;\r\n  padding: 20px;\r\n  overflow-y: auto;\r\n  border: 2px solid #ffffff;\r\n  border-right: 4px solid #ffffff;\r\n}\r\n\r\n@media only screen and (max-width: 959px) {\r\n  mat-card {\r\n    max-width: 80% !important;\r\n    max-height: 80% !important;\r\n  }\r\n}\r\n\r\n::ng-deep .mat-option-text {\r\n  color: black !important;\r\n}\r\n\r\n::ng-deep .mat-slider-thumb {\r\n  visibility: hidden;\r\n}\r\n\r\n::ng-deep .mat-slider-vertical .mat-slider-track-fill,\r\n::ng-deep .mat-slider-vertical .mat-slider-track-background,\r\n::ng-deep .mat-slider-vertical .mat-slider-track-wrapper {\r\n  width: 10px !important;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n  width: 8px;\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n  background: #b8afaf;\r\n  border-radius: 4px;\r\n}\r\n\r\n::-webkit-scrollbar-thumb:hover {\r\n  background: #888888;\r\n}\r\n\r\n::-webkit-scrollbar-track {\r\n  background: #e1e1e1;\r\n  border-radius: 4px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZGlhbG9nLWNob29zZS1yb29tL2RpYWxvZy1jaG9vc2Utcm9vbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0VBT0UsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsMkJBQW1CO0VBQW5CLHdCQUFtQjtFQUFuQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsY0FBYztFQUNkLFNBQVM7RUFDVCxvQkFBb0I7QUFDdEI7O0FBRUE7O0VBRUUscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0VBQ1IsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLE9BQU87QUFDVDs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTs7O0VBR0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0U7QUFDRjs7QUFDQTtFQUNFLFlBQVk7RUFDWixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdDQUFnQztFQUNoQyxZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxzQ0FBOEI7RUFBOUIsbUNBQThCO0VBQTlCLDhCQUE4QjtFQUM5QiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOztFQUVFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztBQUNYOztBQUVBO0VBQ0UsV0FBVztFQUNYLFVBQVU7QUFDWjs7QUFFQTs7RUFFRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsV0FBVztBQUNiOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0VBQ1IsZUFBZTtFQUNmLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRTtJQUNFLHlCQUF5QjtJQUN6QiwwQkFBMEI7RUFDNUI7QUFDRjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTs7O0VBR0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9kaWFsb2ctY2hvb3NlLXJvb20vZGlhbG9nLWNob29zZS1yb29tLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSxcclxuaDMsXHJcbiNpbWdUZXh0LFxyXG5tYXQtc2VsZWN0LFxyXG5tYXQtb3B0aW9uLFxyXG5pbnB1dCxcclxuYnV0dG9uIHtcclxuICBmb250LWZhbWlseTogJ1VidW50dScsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbiNkaWFsb2dDaG9vc2VSb29tIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4jZGlhbG9nQ2hvb3NlUm9vbSBoMSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jY2FyZC1jb250ZW50IHtcclxuICBtYXgtd2lkdGg6IDk1JTtcclxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcclxufVxyXG5cclxuI3ZpZGVvQ29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbiNjbG9zZUJ1dHRvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogN3B4O1xyXG59XHJcblxyXG4udm9sdW1lU2xpZGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OiA2MCU7XHJcbiAgei1pbmRleDogOTk5OTk7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG4jb3ZWaWRlb1NjcmVlbixcclxuI292VmlkZW8ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLnNtYWxsVmlkZW8ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBib3JkZXI6IDFweCBzb2xpZDtcclxuICBib3JkZXItY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbiNpbWdfY29udGVudCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogM3B4O1xyXG4gIGxlZnQ6IDA7XHJcbn1cclxuXHJcbiNoZWFkZXJfaW1nIHtcclxuICBtYXgtd2lkdGg6IDE2NXB4O1xyXG59XHJcblxyXG4jc2Vzc2lvbkluZm8ge1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbn1cclxuXHJcbiNjYW1EZXZpY2VCdXR0b24sXHJcbiNtaWNEZXZpY2VCdXR0b24sXHJcbiNuaWNrbmFtZUJ1dHRvbiB7XHJcbiAgbWFyZ2luOiAwcHggMTBweDtcclxufVxyXG5cclxuI2pvaW5CdXR0b25EaXYge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlclxyXG59XHJcbiNqb2luQnV0dG9uIHtcclxuICBtYXJnaW46IDE1cHg7XHJcbiAgd2lkdGg6IDgwJTtcclxufVxyXG5cclxuI3Bob3RvQnV0dG9uIHtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jYXZhdGFyQ29udGFpbmVyIHtcclxuICBib3JkZXI6IDFweCBzb2xpZDtcclxuICBib3JkZXItY29sb3I6IHJnYigxODIsIDE4MiwgMTgyKTtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbiNkZXZpY2VzU2VjdGlvbiB7XHJcbiAgbWFyZ2luOiAxNXB4IDBweDtcclxufVxyXG5cclxuI2F2YXRhclNlY3Rpb24sXHJcbiNkZXZpY2VzU2VjdGlvbiB7XHJcbiAgaGVpZ2h0OiBmaXQtY29udGVudCAhaW1wb3J0YW50O1xyXG4gIG1pbi1oZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxufVxyXG5cclxuI2ltZ1RleHQge1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG59XHJcblxyXG4jYXZhdGFySW1nLFxyXG4jaW1nVGV4dCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbn1cclxuXHJcbiNhdmF0YXJJbWcge1xyXG4gIGhlaWdodDogODglO1xyXG4gIHdpZHRoOiA4OCU7XHJcbn1cclxuXHJcbiNhdmF0YXJDb250YWluZXIsXHJcbiNhdmF0YXJJbWcge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuI29wdGlvbnNDb250ZW50IHtcclxuICBwb3NpdGlvbjogaW5pdGlhbDtcclxufVxyXG5cclxubWF0LWZvcm0tZmllbGQsXHJcbiNuaWNrbmFtZURpYWxvZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbm1hdC1jYXJkIHtcclxuICBtYXgtd2lkdGg6IDg1JSAhaW1wb3J0YW50O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgbWF4LWhlaWdodDogOTAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZmZmZjtcclxuICBib3JkZXItcmlnaHQ6IDRweCBzb2xpZCAjZmZmZmZmO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk1OXB4KSB7XHJcbiAgbWF0LWNhcmQge1xyXG4gICAgbWF4LXdpZHRoOiA4MCUgIWltcG9ydGFudDtcclxuICAgIG1heC1oZWlnaHQ6IDgwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtb3B0aW9uLXRleHQge1xyXG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1zbGlkZXItdGh1bWIge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtc2xpZGVyLXZlcnRpY2FsIC5tYXQtc2xpZGVyLXRyYWNrLWZpbGwsXHJcbjo6bmctZGVlcCAubWF0LXNsaWRlci12ZXJ0aWNhbCAubWF0LXNsaWRlci10cmFjay1iYWNrZ3JvdW5kLFxyXG46Om5nLWRlZXAgLm1hdC1zbGlkZXItdmVydGljYWwgLm1hdC1zbGlkZXItdHJhY2std3JhcHBlciB7XHJcbiAgd2lkdGg6IDEwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDhweDtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYmFja2dyb3VuZDogI2I4YWZhZjtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICM4ODg4ODg7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gIGJhY2tncm91bmQ6ICNlMWUxZTE7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG4iXX0= */");

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
/* harmony default export */ __webpack_exports__["default"] = ("h1{\r\n    color: #a30101;\r\n}\r\n\r\n::ng-deep .mat-dialog-container {\r\n    background-color: #ffffff;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZGlhbG9nLWVycm9yL2RpYWxvZy1lcnJvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2RpYWxvZy1lcnJvci9kaWFsb2ctZXJyb3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxe1xyXG4gICAgY29sb3I6ICNhMzAxMDE7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWRpYWxvZy1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxufSJdfQ== */");

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
/* harmony default export */ __webpack_exports__["default"] = ("#dialogExtension {\r\n    position: absolute;\r\n    z-index: 99999999999999;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n#dialogExtension mat-card{\r\n    position: absolute;\r\n    z-index: 99999999999999;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    max-width: -webkit-fit-content;\r\n    max-width: -moz-fit-content;\r\n    max-width: fit-content;\r\n    max-height: -webkit-fit-content;\r\n    max-height: -moz-fit-content;\r\n    max-height: fit-content;\r\n    margin: auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZGlhbG9nLWV4dGVuc2lvbi9kaWFsb2ctZXh0ZW5zaW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixNQUFNO0lBQ04sU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0lBQ1IsOEJBQXNCO0lBQXRCLDJCQUFzQjtJQUF0QixzQkFBc0I7SUFDdEIsK0JBQXVCO0lBQXZCLDRCQUF1QjtJQUF2Qix1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2RpYWxvZy1leHRlbnNpb24vZGlhbG9nLWV4dGVuc2lvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2RpYWxvZ0V4dGVuc2lvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiA5OTk5OTk5OTk5OTk5OTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4jZGlhbG9nRXh0ZW5zaW9uIG1hdC1jYXJke1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogOTk5OTk5OTk5OTk5OTk7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgbWF4LWhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn0iXX0= */");

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
/* harmony default export */ __webpack_exports__["default"] = ("#component{\r\n    font-family: 'Ubuntu', sans-serif;\r\n}\r\n\r\n#username {\r\n    color: #ffffff;\r\n}\r\n\r\n.mat-card {\r\n    background-color: #696969;\r\n}\r\n\r\n::ng-deep .mat-dialog-container {\r\n    background-color: #494949;\r\n    height: -webkit-fit-content !important;\r\n    height: -moz-fit-content !important;\r\n    height: fit-content !important;\r\n    width: -webkit-fit-content !important;\r\n    width: -moz-fit-content !important;\r\n    width: fit-content !important;\r\n    margin: auto auto;\r\n}\r\n\r\n::ng-deep .mat-focused .mat-form-field-label {\r\n    color: #ffffff !important;\r\n}\r\n\r\n::ng-deep.mat-form-field-underline {\r\n    background-color: #ffffff !important;\r\n}\r\n\r\n::ng-deep.mat-form-field-ripple {\r\n    background-color: #ffffff !important;\r\n}\r\n\r\nmat-card-content {\r\n    margin-bottom: 0px;\r\n}\r\n\r\n.centered {\r\n    left: 50%;\r\n    transform: translate(-50%, 0);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsc0NBQThCO0lBQTlCLG1DQUE4QjtJQUE5Qiw4QkFBOEI7SUFDOUIscUNBQTZCO0lBQTdCLGtDQUE2QjtJQUE3Qiw2QkFBNkI7SUFDN0IsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVDO0lBQ0csb0NBQW9DO0FBQ3hDOztBQUVDO0lBQ0csb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksU0FBUztJQUNULDZCQUE2QjtBQUNqQyIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29tcG9uZW50e1xyXG4gICAgZm9udC1mYW1pbHk6ICdVYnVudHUnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4jdXNlcm5hbWUge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5tYXQtY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjk2OTY5O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0OTQ5NDk7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogYXV0byBhdXRvO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4gOjpuZy1kZWVwLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiA6Om5nLWRlZXAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcclxufVxyXG5cclxubWF0LWNhcmQtY29udGVudCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbi5jZW50ZXJlZCB7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcclxufSJdfQ== */");

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
/* harmony default export */ __webpack_exports__["default"] = (".mat-card {\r\n    margin: 2%;\r\n}\r\n\r\n.mat-subheader {\r\n    padding-top: 15px;\r\n    font-size: 120%;\r\n    color: rgb(100, 100, 100);\r\n}\r\n\r\n#spinner {\r\n    margin:30% auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbWVudS9hc3Npc3RhbnRzL2Fzc2lzdGFudHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL21lbnUvYXNzaXN0YW50cy9hc3Npc3RhbnRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWNhcmQge1xyXG4gICAgbWFyZ2luOiAyJTtcclxufVxyXG5cclxuLm1hdC1zdWJoZWFkZXIge1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDEyMCU7XHJcbiAgICBjb2xvcjogcmdiKDEwMCwgMTAwLCAxMDApO1xyXG59XHJcblxyXG4jc3Bpbm5lciB7XHJcbiAgICBtYXJnaW46MzAlIGF1dG87XHJcbn0iXX0= */");

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
/* harmony default export */ __webpack_exports__["default"] = ("#chatContainer {\r\n  position: absolute;\r\n  z-index: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\ninput {\r\n  font-family: 'Ubuntu', sans-serif;\r\n}\r\n\r\n#chatToolbar {\r\n  height: 30px;\r\n  background-color: #3d3d3d;\r\n  box-sizing: border-box;\r\n  font-weight: bold;\r\n  font-size: 14px;\r\n  text-align: center;\r\n  padding-top: 4px;\r\n  border-top-left-radius: 6px;\r\n  border-top-right-radius: 6px;\r\n  color: #ffffff;\r\n}\r\n\r\n#closeButton {\r\n  position: absolute;\r\n  right: 0;\r\n  top: -5px;\r\n}\r\n\r\n#chatComponent {\r\n  background-color: #b8b8b8;\r\n  position: absolute;\r\n  z-index: 99999;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  margin: auto;\r\n  height: calc(100% - 30px);\r\n  width: calc(100% - 30px);\r\n  border-radius: 20px;\r\n}\r\n\r\n.message-wrap {\r\n  padding: 0 15px;\r\n  height: calc(100% - 80px);\r\n  overflow: auto;\r\n}\r\n\r\n.message {\r\n  position: relative;\r\n  padding: 7px 0;\r\n}\r\n\r\n.user-img {\r\n  position: absolute;\r\n  border-radius: 45px;\r\n  width: 60px;\r\n  height: 60px;\r\n  top: 15px;\r\n}\r\n\r\n.msg-detail {\r\n  width: calc(100% - 65px);\r\n  display: inline-block;\r\n}\r\n\r\n.msg-detail p {\r\n  margin: 0;\r\n  font-size: 15px;\r\n}\r\n\r\n.msg-info p {\r\n  font-size: 0.8em;\r\n  color: #000000;\r\n  font-style: italic;\r\n}\r\n\r\n.msg-content {\r\n  position: relative;\r\n  margin-top: 5px;\r\n  border-radius: 5px;\r\n  padding: 8px;\r\n  color: #000000;\r\n  width: auto;\r\n  max-width: 95%;\r\n}\r\n\r\nspan.triangle {\r\n  border-radius: 2px;\r\n  height: 8px;\r\n  width: 8px;\r\n  top: 12px;\r\n  display: block;\r\n  transform: rotate(45deg);\r\n  position: absolute;\r\n}\r\n\r\n.text {\r\n  word-break: break-all;\r\n}\r\n\r\n/* Start message from other user */\r\n\r\n.message.left .msg-detail .msg-info {\r\n  text-align: left;\r\n}\r\n\r\n.message.left .msg-detail {\r\n  padding-left: 65px;\r\n}\r\n\r\n.message.left .user-img {\r\n  left: -5px;\r\n  border: 1px solid #f0f0f094;\r\n}\r\n\r\n.message.left .msg-detail .msg-content {\r\n  background-color: #f0f0f0;\r\n  float: left;\r\n}\r\n\r\n.message.left .msg-detail .msg-content span.triangle {\r\n  background-color: #f0f0f0;\r\n  border-bottom-width: 0;\r\n  border-left-width: 0;\r\n  left: -5px;\r\n}\r\n\r\n/* End message from other user */\r\n\r\n/* Start my messages */\r\n\r\n.message.right .msg-detail .msg-info {\r\n  text-align: right;\r\n}\r\n\r\n.message.right .user-img {\r\n  right: -5px;\r\n  border: 1px solid #c8ffe8ab;\r\n}\r\n\r\n.message.right .msg-detail .msg-content {\r\n  background-color: #c8ffe8;\r\n  float: right;\r\n}\r\n\r\n.message.right .msg-detail .msg-content span.triangle {\r\n  background-color: #c8ffe8;\r\n  border-bottom-width: 0;\r\n  border-left-width: 0;\r\n  right: -5px;\r\n}\r\n\r\n/* End my messages */\r\n\r\n#messageInput {\r\n  position: absolute;\r\n  bottom: 0px;\r\n  width: 100%;\r\n  background-color: #ffffff;\r\n  text-align: center;\r\n  padding: 10px 0px;\r\n  height: 30px;\r\n  border-bottom-left-radius: 6px;\r\n  border-bottom-right-radius: 6px;\r\n}\r\n\r\n#messageInput input {\r\n  width: 90%;\r\n  height: 100%;\r\n  border: none;\r\n  outline: none;\r\n  font-size: 14px;\r\n  margin-left: -6%;\r\n}\r\n\r\n#sendButton {\r\n  background-color: #81e9b0;\r\n  position: absolute;\r\n  right: 10px;\r\n  top: 0;\r\n  bottom: 0;\r\n  margin: auto;\r\n  border: 1px solid #7ae2a9;\r\n  box-shadow: none !important;\r\n}\r\n\r\n#sendButton mat-icon {\r\n  margin-left: 3px !important;\r\n  margin-bottom: 2px !important;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n  width: 8px;\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n  background-color: #6b6b6b;\r\n}\r\n\r\n.chatComponentLight ::-webkit-scrollbar-thumb {\r\n  background-color: #eeeeee !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbWVudS9jaGF0L2NoYXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7QUFDWDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVCxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLHdCQUF3QjtFQUN4QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7RUFDWixTQUFTO0FBQ1g7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsU0FBUztFQUNULGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixjQUFjO0VBQ2QsV0FBVztFQUNYLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFVBQVU7RUFDVixTQUFTO0VBQ1QsY0FBYztFQUVkLHdCQUF3QjtFQUN4QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUEsa0NBQWtDOztBQUVsQztFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7RUFDViwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztBQUNiOztBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsVUFBVTtBQUNaOztBQUVBLGdDQUFnQzs7QUFFaEMsc0JBQXNCOztBQUV0QjtFQUNFLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLFdBQVc7RUFDWCwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsV0FBVztBQUNiOztBQUVBLG9CQUFvQjs7QUFFcEI7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osOEJBQThCO0VBQzlCLCtCQUErQjtBQUNqQzs7QUFDQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsTUFBTTtFQUNOLFNBQVM7RUFDVCxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLDJCQUEyQjtBQUM3Qjs7QUFDQTtFQUNFLDJCQUEyQjtFQUMzQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEMiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9tZW51L2NoYXQvY2hhdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NoYXRDb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gIGZvbnQtZmFtaWx5OiAnVWJ1bnR1Jywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuI2NoYXRUb29sYmFyIHtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNkM2QzZDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDRweDtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA2cHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDZweDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuI2Nsb3NlQnV0dG9uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiAtNXB4O1xyXG59XHJcblxyXG4jY2hhdENvbXBvbmVudCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I4YjhiODtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogOTk5OTk7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDMwcHgpO1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG4ubWVzc2FnZS13cmFwIHtcclxuICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA4MHB4KTtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLm1lc3NhZ2Uge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nOiA3cHggMDtcclxufVxyXG4udXNlci1pbWcge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3JkZXItcmFkaXVzOiA0NXB4O1xyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIGhlaWdodDogNjBweDtcclxuICB0b3A6IDE1cHg7XHJcbn1cclxuXHJcbi5tc2ctZGV0YWlsIHtcclxuICB3aWR0aDogY2FsYygxMDAlIC0gNjVweCk7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4ubXNnLWRldGFpbCBwIHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG4ubXNnLWluZm8gcCB7XHJcbiAgZm9udC1zaXplOiAwLjhlbTtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuXHJcbi5tc2ctY29udGVudCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIG1heC13aWR0aDogOTUlO1xyXG59XHJcblxyXG5zcGFuLnRyaWFuZ2xlIHtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgaGVpZ2h0OiA4cHg7XHJcbiAgd2lkdGg6IDhweDtcclxuICB0b3A6IDEycHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLnRleHQge1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxufVxyXG5cclxuLyogU3RhcnQgbWVzc2FnZSBmcm9tIG90aGVyIHVzZXIgKi9cclxuXHJcbi5tZXNzYWdlLmxlZnQgLm1zZy1kZXRhaWwgLm1zZy1pbmZvIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4ubWVzc2FnZS5sZWZ0IC5tc2ctZGV0YWlsIHtcclxuICBwYWRkaW5nLWxlZnQ6IDY1cHg7XHJcbn1cclxuXHJcbi5tZXNzYWdlLmxlZnQgLnVzZXItaW1nIHtcclxuICBsZWZ0OiAtNXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMGYwZjA5NDtcclxufVxyXG5cclxuLm1lc3NhZ2UubGVmdCAubXNnLWRldGFpbCAubXNnLWNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuLm1lc3NhZ2UubGVmdCAubXNnLWRldGFpbCAubXNnLWNvbnRlbnQgc3Bhbi50cmlhbmdsZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcclxuICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xyXG4gIGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xyXG4gIGxlZnQ6IC01cHg7XHJcbn1cclxuXHJcbi8qIEVuZCBtZXNzYWdlIGZyb20gb3RoZXIgdXNlciAqL1xyXG5cclxuLyogU3RhcnQgbXkgbWVzc2FnZXMgKi9cclxuXHJcbi5tZXNzYWdlLnJpZ2h0IC5tc2ctZGV0YWlsIC5tc2ctaW5mbyB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLm1lc3NhZ2UucmlnaHQgLnVzZXItaW1nIHtcclxuICByaWdodDogLTVweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYzhmZmU4YWI7XHJcbn1cclxuXHJcbi5tZXNzYWdlLnJpZ2h0IC5tc2ctZGV0YWlsIC5tc2ctY29udGVudCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M4ZmZlODtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuLm1lc3NhZ2UucmlnaHQgLm1zZy1kZXRhaWwgLm1zZy1jb250ZW50IHNwYW4udHJpYW5nbGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjOGZmZTg7XHJcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcclxuICBib3JkZXItbGVmdC13aWR0aDogMDtcclxuICByaWdodDogLTVweDtcclxufVxyXG5cclxuLyogRW5kIG15IG1lc3NhZ2VzICovXHJcblxyXG4jbWVzc2FnZUlucHV0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTBweCAwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDZweDtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNnB4O1xyXG59XHJcbiNtZXNzYWdlSW5wdXQgaW5wdXQge1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBtYXJnaW4tbGVmdDogLTYlO1xyXG59XHJcblxyXG4jc2VuZEJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgxZTliMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzdhZTJhOTtcclxuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuI3NlbmRCdXR0b24gbWF0LWljb24ge1xyXG4gIG1hcmdpbi1sZWZ0OiAzcHggIWltcG9ydGFudDtcclxuICBtYXJnaW4tYm90dG9tOiAycHggIWltcG9ydGFudDtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDhweDtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZiNmI2YjtcclxufVxyXG5cclxuLmNoYXRDb21wb25lbnRMaWdodCA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */");

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
/* harmony default export */ __webpack_exports__["default"] = (".nickname {\r\n  padding: 5px !important;\r\n  position: absolute;\r\n  z-index: 999;\r\n  border-radius: 5px; \r\n  color: #313131;\r\n  font-family: 'Ubuntu', sans-serif;\r\n}\r\n\r\n#dialogNickname {\r\n  background-color:  #fffffffb;\r\n  border-radius: 8px;\r\n}\r\n\r\n#closeButton {\r\n  position: absolute;\r\n  top: -3px;\r\n  right: 0;\r\n  z-index: 999;\r\n}\r\n\r\n#nicknameForm {\r\n  padding: 10px;\r\n}\r\n\r\n.fullscreen {\r\n  top: 40px;\r\n}\r\n\r\nmat-error {\r\n  text-align: center;\r\n  color: #353535;\r\n}\r\n\r\nvideo {\r\n  -o-object-fit: cover;\r\n  object-fit: cover;\r\n  width: 100%;\r\n  height: 100%;\r\n  color: #ffffff;\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n  font-size: 100%;\r\n}\r\n\r\n.statusIcons {\r\n  bottom: 0;\r\n  left: 5px;\r\n  width: 40px;\r\n  height: -webkit-fit-content;\r\n  height: -moz-fit-content;\r\n  height: fit-content;\r\n  position: absolute;\r\n  color: #ffffff;\r\n}\r\n\r\n.statusIcons mat-icon {\r\n  padding: 8px;\r\n}\r\n\r\n#camStatus {\r\n  bottom: 43px;\r\n}\r\n\r\n#statusCam, #statusMic { \r\n  border-radius: 50%;\r\n  background: #c71100;\r\n  margin: 5px 0px;\r\n}\r\n\r\n.streamButtons {\r\n  position: absolute;\r\n  z-index: 1000;\r\n  background-color: #000000c4;\r\n  right: 1px;\r\n}\r\n\r\n#fullscreenButton {\r\n  bottom: 1px;\r\n}\r\n\r\n#volumeButton {\r\n  bottom: 45px;\r\n}\r\n\r\n/* Contains the video element, used to fix video letter-boxing */\r\n\r\n.OT_widget-container {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: absolute;\r\n  overflow: hidden;\r\n}\r\n\r\n::ng-deep .mat-form-field-appearance-legacy .mat-form-field-label {\r\n  color: #696969;\r\n}\r\n\r\n::ng-deep .mat-form-field-appearance-legacy .mat-form-field-underline{\r\n  background-color: #444444 !important;\r\n}\r\n\r\n::ng-deep .mat-form-field.mat-focused .mat-form-field-ripple{\r\n  background-color: #696969 !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc3RyZWFtL3N0cmVhbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0VBQ1IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUNBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztFQUNkLFNBQVM7RUFDVCxVQUFVO0VBQ1YsU0FBUztFQUNULGVBQWU7QUFDakI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsU0FBUztFQUNULFdBQVc7RUFDWCwyQkFBbUI7RUFBbkIsd0JBQW1CO0VBQW5CLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFDQTtFQUNFLFlBQVk7QUFDZDs7QUFDQSxnRUFBZ0U7O0FBQ2hFO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLG9DQUFvQztBQUN0QyIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3N0cmVhbS9zdHJlYW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uaWNrbmFtZSB7XHJcbiAgcGFkZGluZzogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDk5OTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7IFxyXG4gIGNvbG9yOiAjMzEzMTMxO1xyXG4gIGZvbnQtZmFtaWx5OiAnVWJ1bnR1Jywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuI2RpYWxvZ05pY2tuYW1lIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAgI2ZmZmZmZmZiO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxufVxyXG5cclxuI2Nsb3NlQnV0dG9uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtM3B4O1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHotaW5kZXg6IDk5OTtcclxufVxyXG5cclxuI25pY2tuYW1lRm9ybSB7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG4uZnVsbHNjcmVlbiB7XHJcbiAgdG9wOiA0MHB4O1xyXG59XHJcblxyXG5tYXQtZXJyb3Ige1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogIzM1MzUzNTtcclxufVxyXG5cclxudmlkZW8ge1xyXG4gIC1vLW9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3JkZXI6IDA7XHJcbiAgZm9udC1zaXplOiAxMDAlO1xyXG59XHJcblxyXG4uc3RhdHVzSWNvbnMge1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiA1cHg7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5zdGF0dXNJY29ucyBtYXQtaWNvbiB7XHJcbiAgcGFkZGluZzogOHB4O1xyXG59XHJcblxyXG4jY2FtU3RhdHVzIHtcclxuICBib3R0b206IDQzcHg7XHJcbn1cclxuXHJcbiNzdGF0dXNDYW0sICNzdGF0dXNNaWMgeyBcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZDogI2M3MTEwMDtcclxuICBtYXJnaW46IDVweCAwcHg7XHJcbn1cclxuXHJcbi5zdHJlYW1CdXR0b25zIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMTAwMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwYzQ7XHJcbiAgcmlnaHQ6IDFweDtcclxufVxyXG5cclxuI2Z1bGxzY3JlZW5CdXR0b24ge1xyXG4gIGJvdHRvbTogMXB4O1xyXG59XHJcbiN2b2x1bWVCdXR0b24ge1xyXG4gIGJvdHRvbTogNDVweDtcclxufVxyXG4vKiBDb250YWlucyB0aGUgdmlkZW8gZWxlbWVudCwgdXNlZCB0byBmaXggdmlkZW8gbGV0dGVyLWJveGluZyAqL1xyXG4uT1Rfd2lkZ2V0LWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XHJcbiAgY29sb3I6ICM2OTY5Njk7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0NDQ0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjk2OTY5ICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */");

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
/* harmony default export */ __webpack_exports__["default"] = ("#header {\r\n    color: #ffffff;\r\n    height: 40px;\r\n    background-color: #333333;\r\n    padding: 0 14px 0 0;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 999999;\r\n    min-width: 400px !important;\r\n}\r\n\r\n.headerLight {\r\n    color: #706969 !important;\r\n    background-color: #eeeeee !important;\r\n}\r\n\r\n#navSessionInfo {\r\n    height: 100%;\r\n    display: inline-flex;\r\n}\r\n\r\n#navChatButton .mat-badge-medium.mat-badge-overlap.mat-badge-before .mat-badge-content {\r\n    left: -17px;\r\n}\r\n\r\n#navChatButton .mat-badge-medium.mat-badge-above .mat-badge-content {\r\n    top: -6px;\r\n}\r\n\r\n.mat-icon-button[disabled] {\r\n    color: #fff;\r\n}\r\n\r\n#navButtons {\r\n    position: absolute;\r\n    left: 0;\r\n    right: 0;\r\n    min-width: 400px;\r\n}\r\n\r\n#navMenuButton {\r\n    position: absolute;\r\n    right: 10px;\r\n    top: none;\r\n}\r\n\r\n#titleContent {\r\n    font-family: 'Ubuntu', sans-serif;\r\n    max-width: 100px;\r\n    background-color: #494949;\r\n    margin: 5px -18px;\r\n    padding: 0px 15px;\r\n    font-size: 16px;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\n.titleContentLight {\r\n    background-color: #dfdfdf !important;\r\n    color: #000;\r\n}\r\n\r\n#header_img {\r\n    max-width: 135px;\r\n    margin-right: 10px;\r\n    margin-top: -3px;\r\n}\r\n\r\n#point {\r\n    width: 10px;\r\n    height: 10px;\r\n    position: absolute;\r\n    top: 12px;\r\n    right: 33px;\r\n    border-radius: 50%;\r\n    background-color: #ffa600;\r\n    border: 1px solid #000;\r\n    z-index: 99999;\r\n}\r\n\r\n.pointLight {\r\n    border: 1px solid #ffffff !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdG9vbGJhci90b29sYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsZUFBZTtJQUNmLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxRQUFRO0lBQ1IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdG9vbGJhci90b29sYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaGVhZGVyIHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcclxuICAgIHBhZGRpbmc6IDAgMTRweCAwIDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgei1pbmRleDogOTk5OTk5O1xyXG4gICAgbWluLXdpZHRoOiA0MDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaGVhZGVyTGlnaHQge1xyXG4gICAgY29sb3I6ICM3MDY5NjkgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWUgIWltcG9ydGFudDtcclxufVxyXG5cclxuI25hdlNlc3Npb25JbmZvIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG59XHJcblxyXG4jbmF2Q2hhdEJ1dHRvbiAubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudCB7XHJcbiAgICBsZWZ0OiAtMTdweDtcclxufVxyXG5cclxuI25hdkNoYXRCdXR0b24gLm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLWFib3ZlIC5tYXQtYmFkZ2UtY29udGVudCB7XHJcbiAgICB0b3A6IC02cHg7XHJcbn1cclxuXHJcbi5tYXQtaWNvbi1idXR0b25bZGlzYWJsZWRdIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4jbmF2QnV0dG9ucyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBtaW4td2lkdGg6IDQwMHB4O1xyXG59XHJcblxyXG4jbmF2TWVudUJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTBweDtcclxuICAgIHRvcDogbm9uZTtcclxufVxyXG5cclxuI3RpdGxlQ29udGVudCB7XHJcbiAgICBmb250LWZhbWlseTogJ1VidW50dScsIHNhbnMtc2VyaWY7XHJcbiAgICBtYXgtd2lkdGg6IDEwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ5NDk0OTtcclxuICAgIG1hcmdpbjogNXB4IC0xOHB4O1xyXG4gICAgcGFkZGluZzogMHB4IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn1cclxuXHJcbi50aXRsZUNvbnRlbnRMaWdodCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZkZmRmICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzAwMDtcclxufVxyXG5cclxuI2hlYWRlcl9pbWcge1xyXG4gICAgbWF4LXdpZHRoOiAxMzVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IC0zcHg7XHJcbn1cclxuXHJcbiNwb2ludCB7XHJcbiAgICB3aWR0aDogMTBweDtcclxuICAgIGhlaWdodDogMTBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTJweDtcclxuICAgIHJpZ2h0OiAzM3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYTYwMDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XHJcbiAgICB6LWluZGV4OiA5OTk5OTtcclxufVxyXG5cclxuLnBvaW50TGlnaHQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG59Il19 */");

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
/* harmony default export */ __webpack_exports__["default"] = ("#videoRoomNavBar {\r\n  min-width: 400px;\r\n  background-color: #494949;\r\n  height: 100%;\r\n}\r\n\r\n.stream-container {\r\n  padding: 0;\r\n}\r\n\r\n.sidenav-container {\r\n  position: relative;\r\n  width: 100%;\r\n  height: 100%;\r\n  min-height: -webkit-fill-available;\r\n  overflow: hidden;\r\n}\r\n\r\n.sidenav-menu {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 400px;\r\n  background-color: #494949;\r\n  border-left: none;\r\n  position: absolute;\r\n}\r\n\r\n::ng-deep .mat-tab-body-wrapper {\r\n  height: 100%;\r\n}\r\n\r\n.tab-group {\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.mat-drawer-container {\r\n  background-color: #494949;\r\n}\r\n\r\n.sidenav-main {\r\n  height: 100%;\r\n  overflow: hidden;\r\n  min-height: -webkit-fill-available;\r\n  min-height: -moz-available;\r\n}\r\n\r\n.bounds {\r\n  background-color: #494949;\r\n  position: absolute;\r\n  left: 0;\r\n  right: 0;\r\n  top: 40px;\r\n  bottom: 0;\r\n  min-width: 400px !important;\r\n  width: inherit;\r\n}\r\n\r\n.boundsLight {\r\n  background-color: #dfdfdf !important;\r\n}\r\n\r\n/*!\r\n * Copyright (c) 2017 TokBox, Inc.\r\n * Released under the MIT license\r\n * http://opensource.org/licenses/MIT\r\n */\r\n\r\n.custom-class {\r\n  min-height: 0px !important;\r\n}\r\n\r\n/**\r\n * OT Base styles\r\n */\r\n\r\n/* Root OT object, this is where our CSS reset happens */\r\n\r\n.OT_root,\r\n.OT_root * {\r\n  color: #ffffff;\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n  font-size: 100%;\r\n  font-family: 'Ubuntu', sans-serif;\r\n  vertical-align: baseline;\r\n}\r\n\r\n.OT_dialog-centering {\r\n  display: table;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.OT_dialog-centering-child {\r\n  display: table-cell;\r\n  vertical-align: middle;\r\n}\r\n\r\n.OT_dialog {\r\n  position: relative;\r\n  box-sizing: border-box;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n\r\n  color: #fff;\r\n  font-family: 'Ubuntu', sans-serif;\r\n  font-size: 13px;\r\n  line-height: 1.4;\r\n}\r\n\r\n.OT_dialog * {\r\n  font-family: inherit;\r\n  box-sizing: inherit;\r\n}\r\n\r\n.OT_closeButton {\r\n  color: #999999;\r\n  cursor: pointer;\r\n  font-size: 32px;\r\n  line-height: 36px;\r\n  position: absolute;\r\n  right: 18px;\r\n  top: 0;\r\n}\r\n\r\n.OT_dialog-messages {\r\n  text-align: center;\r\n}\r\n\r\n.OT_dialog-messages-main {\r\n  margin-bottom: 36px;\r\n  line-height: 36px;\r\n\r\n  font-weight: 300;\r\n  font-size: 24px;\r\n}\r\n\r\n.OT_dialog-messages-minor {\r\n  margin-bottom: 18px;\r\n\r\n  font-size: 13px;\r\n  line-height: 18px;\r\n  color: #a4a4a4;\r\n}\r\n\r\n.OT_dialog-messages-minor strong {\r\n  color: #ffffff;\r\n}\r\n\r\n.OT_dialog-actions-card {\r\n  display: inline-block;\r\n}\r\n\r\n.OT_dialog-button-title {\r\n  margin-bottom: 18px;\r\n  line-height: 18px;\r\n\r\n  font-weight: 300;\r\n  text-align: center;\r\n  font-size: 14px;\r\n  color: #999999;\r\n}\r\n\r\n.OT_dialog-button-title label {\r\n  color: #999999;\r\n}\r\n\r\n.OT_dialog-button-title a,\r\n.OT_dialog-button-title a:link,\r\n.OT_dialog-button-title a:active {\r\n  color: #02a1de;\r\n}\r\n\r\n.OT_dialog-button-title strong {\r\n  color: #ffffff;\r\n  font-weight: 100;\r\n  display: block;\r\n}\r\n\r\n.OT_dialog-button {\r\n  display: inline-block;\r\n\r\n  margin-bottom: 18px;\r\n  padding: 0 1em;\r\n\r\n  background-color: #1ca3dc;\r\n  text-align: center;\r\n  cursor: pointer;\r\n}\r\n\r\n.OT_dialog-button:disabled {\r\n  cursor: not-allowed;\r\n  opacity: 0.5;\r\n}\r\n\r\n.OT_dialog-button-large {\r\n  line-height: 36px;\r\n  padding-top: 9px;\r\n  padding-bottom: 9px;\r\n\r\n  font-weight: 100;\r\n  font-size: 24px;\r\n}\r\n\r\n.OT_dialog-button-small {\r\n  line-height: 18px;\r\n  padding-top: 9px;\r\n  padding-bottom: 9px;\r\n\r\n  background-color: #444444;\r\n  color: #999999;\r\n  font-size: 16px;\r\n}\r\n\r\n.OT_dialog-progress-bar {\r\n  display: inline-block; /* prevents margin collapse */\r\n  width: 100%;\r\n  margin-top: 5px;\r\n  margin-bottom: 41px;\r\n\r\n  border: 1px solid #4e4e4e;\r\n  height: 8px;\r\n}\r\n\r\n.OT_dialog-progress-bar-fill {\r\n  height: 100%;\r\n\r\n  background-color: #29a4da;\r\n}\r\n\r\n.OT_dialog-plugin-upgrading .OT_dialog-plugin-upgrade-percentage {\r\n  line-height: 54px;\r\n\r\n  font-size: 48px;\r\n  font-weight: 100;\r\n}\r\n\r\n/* Helpers */\r\n\r\n.OT_centered {\r\n  position: fixed;\r\n  left: 50%;\r\n  top: 50%;\r\n  margin: 0;\r\n}\r\n\r\n.OT_dialog-hidden {\r\n  display: none;\r\n}\r\n\r\n.OT_dialog-button-block {\r\n  display: block;\r\n}\r\n\r\n.OT_dialog-no-natural-margin {\r\n  margin-bottom: 0;\r\n}\r\n\r\n/* Publisher and Subscriber styles */\r\n\r\n.OT_publisher,\r\n.OT_subscriber {\r\n  position: relative;\r\n  min-width: 48px;\r\n  min-height: 48px;\r\n}\r\n\r\n.OT_publisher .OT_video-element,\r\n.OT_subscriber .OT_video-element {\r\n  display: block;\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n\r\n  transform-origin: 0 0;\r\n}\r\n\r\n/* Styles that are applied when the video element should be mirrored */\r\n\r\n.OT_publisher.OT_mirrored .OT_video-element {\r\n  transform: scale(-1, 1);\r\n  transform-origin: 50% 50%;\r\n}\r\n\r\n.OT_subscriber_error {\r\n  background-color: #000;\r\n  color: #fff;\r\n  text-align: center;\r\n}\r\n\r\n.OT_subscriber_error > p {\r\n  padding: 20px;\r\n}\r\n\r\n/* The publisher/subscriber name/mute background */\r\n\r\n.OT_publisher .OT_bar,\r\n.OT_subscriber .OT_bar,\r\n.OT_publisher .OT_name,\r\n.OT_subscriber .OT_name,\r\n.OT_publisher .OT_archiving,\r\n.OT_subscriber .OT_archiving,\r\n.OT_publisher .OT_archiving-status,\r\n.OT_subscriber .OT_archiving-status,\r\n.OT_publisher .OT_archiving-light-box,\r\n.OT_subscriber .OT_archiving-light-box {\r\n  -ms-box-sizing: border-box;\r\n  box-sizing: border-box;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  display: block;\r\n  height: 34px;\r\n  position: absolute;\r\n}\r\n\r\n.OT_publisher .OT_bar,\r\n.OT_subscriber .OT_bar {\r\n  background: rgba(0, 0, 0, 0.4);\r\n}\r\n\r\n.OT_publisher .OT_edge-bar-item,\r\n.OT_subscriber .OT_edge-bar-item {\r\n  z-index: 1; /* required to get audio level meter underneath */\r\n}\r\n\r\n/* The publisher/subscriber name panel/archiving status bar */\r\n\r\n.OT_publisher .OT_name,\r\n.OT_subscriber .OT_name {\r\n  background-color: transparent;\r\n  color: #ffffff;\r\n  font-size: 15px;\r\n  line-height: 34px;\r\n  font-weight: normal;\r\n  padding: 0 4px 0 36px;\r\n}\r\n\r\n.OT_publisher .OT_archiving-status,\r\n.OT_subscriber .OT_archiving-status {\r\n  background: rgba(0, 0, 0, 0.4);\r\n  top: auto;\r\n  bottom: 0;\r\n  left: 34px;\r\n  padding: 0 4px;\r\n  color: rgba(255, 255, 255, 0.8);\r\n  font-size: 15px;\r\n  line-height: 34px;\r\n  font-weight: normal;\r\n}\r\n\r\n.OT_micro .OT_archiving-status,\r\n.OT_micro:hover .OT_archiving-status,\r\n.OT_mini .OT_archiving-status,\r\n.OT_mini:hover .OT_archiving-status {\r\n  display: none;\r\n}\r\n\r\n.OT_publisher .OT_archiving-light-box,\r\n.OT_subscriber .OT_archiving-light-box {\r\n  background: rgba(0, 0, 0, 0.4);\r\n  top: auto;\r\n  bottom: 0;\r\n  right: auto;\r\n  width: 34px;\r\n  height: 34px;\r\n}\r\n\r\n.OT_archiving-light {\r\n  width: 7px;\r\n  height: 7px;\r\n  border-radius: 30px;\r\n  position: absolute;\r\n  top: 14px;\r\n  left: 14px;\r\n  background-color: #575757;\r\n  box-shadow: 0 0 5px 1px #575757;\r\n}\r\n\r\n.OT_archiving-light.OT_active {\r\n  background-color: #970d13;\r\n  animation: OT_pulse 1.3s ease-in;\r\n  -webkit-animation: OT_pulse 1.3s ease-in;\r\n  -moz-animation: OT_pulse 1.3s ease-in;\r\n  -webkit-animation: OT_pulse 1.3s ease-in;\r\n  animation-iteration-count: infinite;\r\n  -webkit-animation-iteration-count: infinite;\r\n  -moz-animation-iteration-count: infinite;\r\n  -webkit-animation-iteration-count: infinite;\r\n}\r\n\r\n@-webkit-keyframes OT_pulse {\r\n  0% {\r\n    box-shadow: 0 0 0px 0px #c70019;\r\n  }\r\n\r\n  30% {\r\n    box-shadow: 0 0 5px 1px #c70019;\r\n  }\r\n\r\n  50% {\r\n    box-shadow: 0 0 5px 1px #c70019;\r\n  }\r\n\r\n  80% {\r\n    box-shadow: 0 0 0px 0px #c70019;\r\n  }\r\n\r\n  100% {\r\n    box-shadow: 0 0 0px 0px #c70019;\r\n  }\r\n}\r\n\r\n@-webkit-keyframes OT_pulse {\r\n  0% {\r\n    box-shadow: 0 0 0px 0px #c70019;\r\n  }\r\n\r\n  30% {\r\n    box-shadow: 0 0 5px 1px #c70019;\r\n  }\r\n\r\n  50% {\r\n    box-shadow: 0 0 5px 1px #c70019;\r\n  }\r\n\r\n  80% {\r\n    box-shadow: 0 0 0px 0px #c70019;\r\n  }\r\n\r\n  100% {\r\n    box-shadow: 0 0 0px 0px #c70019;\r\n  }\r\n}\r\n\r\n.OT_mini .OT_bar,\r\n.OT_bar.OT_mode-mini,\r\n.OT_bar.OT_mode-mini-auto {\r\n  bottom: 0;\r\n  height: auto;\r\n}\r\n\r\n.OT_mini .OT_name.OT_mode-off,\r\n.OT_mini .OT_name.OT_mode-on,\r\n.OT_mini .OT_name.OT_mode-auto,\r\n.OT_mini:hover .OT_name.OT_mode-auto {\r\n  display: none;\r\n}\r\n\r\n.OT_publisher .OT_name,\r\n.OT_subscriber .OT_name {\r\n  left: 10px;\r\n  right: 37px;\r\n  height: 34px;\r\n  padding-left: 0;\r\n}\r\n\r\n.OT_publisher .OT_mute,\r\n.OT_subscriber .OT_mute {\r\n  border: none;\r\n  cursor: pointer;\r\n  display: block;\r\n  position: absolute;\r\n  text-align: center;\r\n  text-indent: -9999em;\r\n  background-color: transparent;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.OT_publisher .OT_mute,\r\n.OT_subscriber .OT_mute {\r\n  right: 0;\r\n  top: 0;\r\n  border-left: 1px solid rgba(255, 255, 255, 0.2);\r\n  height: 36px;\r\n  width: 37px;\r\n}\r\n\r\n.OT_mini .OT_mute,\r\n.OT_publisher.OT_mini .OT_mute.OT_mode-auto.OT_mode-on-hold,\r\n.OT_subscriber.OT_mini .OT_mute.OT_mode-auto.OT_mode-on-hold {\r\n  top: 50%;\r\n  left: 50%;\r\n  right: auto;\r\n  margin-top: -18px;\r\n  margin-left: -18.5px;\r\n  border-left: none;\r\n}\r\n\r\n.OT_publisher .OT_mute {\r\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAcCAMAAAC02HQrAAAA1VBMVEUAAAD3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pn3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pn3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj39/j3+Pj3+Pn4+Pk/JRMlAAAAQ3RSTlMABAUHCQoLDhAQERwdHiAjLjAxOD9ASFBRVl1mbnZ6fH2LjI+QkaWqrrC1uLzAwcXJycrL1NXj5Ofo6u3w9fr7/P3+d4M3+QAAAQBJREFUGBlVwYdCglAABdCLlr5Unijm3hMUtBzlBLSr//9JgUToOQgVJgceJgU8aHgMeA38K50ZOpcQmTPwcyXn+JM8M3JJIqQypiIkeXelTyIkGZPwKS1NMia1lgKTVkaE3oQQGYsmHNqSMWnTgUFbMiZtGlD2dpaxrL1XgM0i4ZK8MeAmFhsAs29MGZniawagS63oMOQUNXYB5D0D1RMDpyoMLw/fiE2og/V+PVDR5AiBl0/2Uwik+vx4xV3a5G5Ye68Nd1czjUjZckm6VhmPciRzeCZICjwTJAViQq+3e+St167rAoHK8sLYZVkBYPCZAZ/eGa+2R5LH7Wrc0YFf/O9J3yBDFaoAAAAASUVORK5CYII=);\r\n  background-position: 9px 5px;\r\n}\r\n\r\n.OT_publisher .OT_mute.OT_active {\r\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAdCAYAAABFRCf7AAADcElEQVRIiaWVXWhcRRTHf7NNd2aDtUKMIjTpg4ufFIuiUOmDEWm0Vi3VYhXRqIggQh4sWJFSig9+oOhTKSpIRUWMIBIr2kptoTbgU6ooxCiIjR+14kcJmf9sNceHnd3ebnc3Uv9wuXfOzPzmnDMz5zozGwdWAbc65w5RUJQ8cC2wDJgFJioh/MJCMrNxq2vOzK4HmIvRRemxKP0RJWt53o7S+d2Yzsx6gQ+AIUDAnUqpBLzXZd4RYFUlhB/bdZacc3PAOmAcCMC7wfvFwLNdoAPAyx09bXyYWRl4E7gDmAdGlNKFwLYu8GolhO9O87RJd64GbMrgEvB68P4osMWdXLtVV7czlooNpVRWSs8DO7NpR/B+3rBHsvetCgtCMTxwQCm9BbyQrc8F7/uBex3uRCeXO0PrUZ4NfKyUPgWeyj3bg/crDNsIRGwBaJQGorQ3Svdn2wHgc2BUKb0DPJHtjwfvbwRucc7tz+N+i9LFUdoXpfVN36I0CVwBTFI/q9e1LPxT8P4qYEdu70q12mYzWw1MYQzjeJF6zq+shHC4B7jklOBPP/TzSunh4P0DwKvAfb5c9krpe+CcwsEoZdbhEvBM9wxRAl5RShcA9wAngE3B+8tLpdLuwrhp4MNmK0pfRWkySr7NXS8+L5nZbWZWy/Vin1IaitJnUTqvwevJ71lgSSWEFKUfHG7Q2m/xqFJaGry/GXgfGPLl8mJgrXPur2JoUC8Qy3OpG+sAbGhEKT0ErAWOA6uBPWbW1wr9BOgFbgKezot0kAPYqJQA1gC/A9cA+82svzksSn1R+jNKX0SpnM/e1x3yqig92JhrZivM7FjO8bSZLSuCR/Ok16K0KMNHojQWpYko7Y7S1igN5PE3ROl4lNaZ2UVmNpPBU01orvZvZPCeKFXbBR+lEKVtUapFaSZKg9njqpl9aWYTrmXCImA7sCWb9lK/jj9TrwkrgA1AH3AQuKsSwkzbrLfxpgpsBtYDxf/R3xm2ExirhNCuHHZXTsmRwiat+S/zSt06eysVA/4pmGr/G3qm6ik28v29FKgCg8BS6pvS0KNRGgZ+Bb4FpsxsOkfUlMuwDcBWYOUZOHYM2AU8WQmhBifDv70O7PjX7KZ+4G7g3FM8zd6uBIaBy4AqxnIcZwFLCovPAhE4Sj38b4BDwEeVEFKD9S94Khjn486v3QAAAABJRU5ErkJggg==);\r\n  background-position: 9px 4px;\r\n}\r\n\r\n.OT_subscriber .OT_mute {\r\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAATCAYAAAB7u5a2AAABx0lEQVQ4jaWUv48NURiGn3ONmCs32ZBd28ht1gqyZAkF21ylQkEiSp2ehpDlD1BoFGqqVdJohYKI7MaPxMoVNghCWMF+7ybLUewnOXfcMWO9yeQ857zne8+XmZOBGjJpr0kvTIomvTZpS526UCO4DUwD64FjwCFgqZnnR+oc8LfgzKQ73vGsr42ZtGjSQFV9o8KfBCacZwCaef4YmAf2rzjcpN3A2WSpm/AssKcqPDNpDBjs410CViXzTwk/A7b1C4wxDgOngAsZcAXY2buDfp/6S4F3lDS8DjgBzDWAjX/Y/e/QgYS/AhsKHa+OMQ6GEJ4Cj4BOAxgq6aCowyZtdf4OtAr+FHDO+R4wWnVbihr3cQnICt4boO38GWj9a/icjwOACt4m4K3zEPA+AxaAtTWCnwN3lzHkEL8V/OPAGud9wK2GF9XR1Wae/1zG2AI+pGYI4VUIoRtjHAc2A9cz4LRPevYCZ+i9/4sJt4GXJU10gaPAzdI2TTro/5Tfz8XEe2LSZGmxq/SDNvP8BnA5WRrx4BwYBe6vONx1EnjovGvBLAAd4Adwuyq8UiaNmDTvr+a8SQ9MuvbfwckBHZPe+QEfTdpep+4XZmPBHiHgz74AAAAASUVORK5CYII=);\r\n  background-position: 8px 7px;\r\n}\r\n\r\n.OT_subscriber .OT_mute.OT_active {\r\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAUCAYAAACXtf2DAAACtklEQVQ4jZ2VSYiURxTHf+/T9Nc9iRrBuYySmIsXUU9iFMEFERRBvAjJLUQi5ioiHvSScfTmgqC4XAT1ZIgLuJHkICaaQAgKI2hAUBT30bjUq7bbv4eukXK029F3+eqtv/fqK6qQdEnSNUmT6CDB/bvgfjO4N9zj2RD8007xg1IABkwEzkma0qb4PGAPMBZYLtSD8eNwAEjqTlNI0gNJM4YU7w7ut4O7gvuhZFsR3C8NC5BBLiTIY0mzM8AvqbiC++pk+zLpE95XuwAws3vAQuBPYDRwWtL84P4tsDSLv5oaug4EYOawAMF9jMdoLxqNZcDvQA04UVYqL4G/svj7AF21mhJscrvCksYBFO7xc2AAGGg2mrdjvf4rcAyomNn+slLZmUEGBgsYdh945xZJmgvckDSrEJpK6ySBgV6q12O8ABwGPjGzfWWlsjdN9rpjoSfA+DYDXARGAksK4Is3XC1Ub4z1f4CDQGFmu6tleQSYk0U+p7WVeefLJc00s4fAeWB6Qeunvj0m2ugx9gO7kmlrtSxvBfcy6fXUZS6rgG/S+jLQUwCVNmMC9HqM14EtSe+rluWazN8YEv8IqKZ1E1qnaIDO0ucx3gX6kv6TpM3AM+D/IbGjgP60/gq4WQA33gMA2OQxPgHWJX1ttSwL4FAeZGYLgB2SasBs4A8L7qOBf9M0uXQB3a+TMYSmVctyDrA9mfcBK82smSdKWgCcAaa1bTm4fxbc/8uuCQX3RanAD5Ka6Wo5IGnE0HxJPZ03pQX5Org3MsD3AO5xXLPZXJ9BjkrqdFg6QjZkgG3Jtsw93pG0VFI9QU5K6voYQBHcTydAfwheBI9HgvvPAJIWS3qeIL9JGvUxkO7gfi1BrqTvwkG/pPmSnibIqTzXPgAyEVgBjAEu1qrVPbk/PVTHgb/NbPGg/RVIzOQqzSTBaQAAAABJRU5ErkJggg==);\r\n  background-position: 7px 7px;\r\n}\r\n\r\n/**\r\n * Styles for display modes\r\n *\r\n * Note: It's important that these completely control the display and opacity\r\n * attributes, no other selectors should atempt to change them.\r\n */\r\n\r\n/* Default display mode transitions for various chrome elements */\r\n\r\n.OT_publisher .OT_edge-bar-item,\r\n.OT_subscriber .OT_edge-bar-item {\r\n  transition-property: top, bottom, opacity;\r\n  transition-duration: 0.5s;\r\n  transition-timing-function: ease-in;\r\n}\r\n\r\n.OT_publisher .OT_edge-bar-item.OT_mode-off,\r\n.OT_subscriber .OT_edge-bar-item.OT_mode-off,\r\n.OT_publisher .OT_edge-bar-item.OT_mode-auto,\r\n.OT_subscriber .OT_edge-bar-item.OT_mode-auto,\r\n.OT_publisher .OT_edge-bar-item.OT_mode-mini-auto,\r\n.OT_subscriber .OT_edge-bar-item.OT_mode-mini-auto {\r\n  top: -25px;\r\n  opacity: 0;\r\n}\r\n\r\n.OT_publisher .OT_edge-bar-item.OT_mode-off,\r\n.OT_subscriber .OT_edge-bar-item.OT_mode-off {\r\n  display: none;\r\n}\r\n\r\n.OT_mini .OT_mute.OT_mode-auto,\r\n.OT_publisher .OT_mute.OT_mode-mini-auto,\r\n.OT_subscriber .OT_mute.OT_mode-mini-auto {\r\n  top: 50%;\r\n}\r\n\r\n.OT_publisher .OT_edge-bar-item.OT_edge-bottom.OT_mode-off,\r\n.OT_subscriber .OT_edge-bar-item.OT_edge-bottom.OT_mode-off,\r\n.OT_publisher .OT_edge-bar-item.OT_edge-bottom.OT_mode-auto,\r\n.OT_subscriber .OT_edge-bar-item.OT_edge-bottom.OT_mode-auto,\r\n.OT_publisher .OT_edge-bar-item.OT_edge-bottom.OT_mode-mini-auto,\r\n.OT_subscriber .OT_edge-bar-item.OT_edge-bottom.OT_mode-mini-auto {\r\n  top: auto;\r\n  bottom: -25px;\r\n}\r\n\r\n.OT_publisher .OT_edge-bar-item.OT_mode-on,\r\n.OT_subscriber .OT_edge-bar-item.OT_mode-on,\r\n.OT_publisher .OT_edge-bar-item.OT_mode-auto.OT_mode-on-hold,\r\n.OT_subscriber .OT_edge-bar-item.OT_mode-auto.OT_mode-on-hold,\r\n.OT_publisher:hover .OT_edge-bar-item.OT_mode-auto,\r\n.OT_subscriber:hover .OT_edge-bar-item.OT_mode-auto,\r\n.OT_publisher:hover .OT_edge-bar-item.OT_mode-mini-auto,\r\n.OT_subscriber:hover .OT_edge-bar-item.OT_mode-mini-auto {\r\n  top: 0;\r\n  opacity: 1;\r\n}\r\n\r\n.OT_mini .OT_mute.OT_mode-on,\r\n.OT_mini:hover .OT_mute.OT_mode-auto,\r\n.OT_mute.OT_mode-mini,\r\n.OT_root:hover .OT_mute.OT_mode-mini-auto {\r\n  top: 50%;\r\n}\r\n\r\n.OT_publisher .OT_edge-bar-item.OT_edge-bottom.OT_mode-on,\r\n.OT_subscriber .OT_edge-bar-item.OT_edge-bottom.OT_mode-on,\r\n.OT_publisher:hover .OT_edge-bar-item.OT_edge-bottom.OT_mode-auto,\r\n.OT_subscriber:hover .OT_edge-bar-item.OT_edge-bottom.OT_mode-auto {\r\n  top: auto;\r\n  bottom: 0;\r\n  opacity: 1;\r\n}\r\n\r\n/* Load animation */\r\n\r\n.OT_root .OT_video-loading {\r\n  position: absolute;\r\n  z-index: 1;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: none;\r\n\r\n  background-color: rgba(0, 0, 0, 0.75);\r\n}\r\n\r\n.OT_root .OT_video-loading .OT_video-loading-spinner {\r\n  background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0yMCAtMjAgMjQwIDI0MCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4Mj0iMCIgeTI9IjEiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZmZiIgc3RvcC1vcGFjaXR5PSIwIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9IjAiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYiIgeDE9IjEiIHgyPSIwIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9IjAiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iLjA4Ii8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImMiIHgxPSIxIiB4Mj0iMCIgeTE9IjEiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZmZiIgc3RvcC1vcGFjaXR5PSIuMDgiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iLjE2Ii8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImQiIHgyPSIwIiB5MT0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9Ii4xNiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZiIgc3RvcC1vcGFjaXR5PSIuMzMiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iZSIgeDI9IjEiIHkxPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iLjMzIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9Ii42NiIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJmIiB4Mj0iMSIgeTI9IjEiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZmZiIgc3RvcC1vcGFjaXR5PSIuNjYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmYiLz48L2xpbmVhckdyYWRpZW50PjxtYXNrIGlkPSJnIj48ZyBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjQwIj48cGF0aCBzdHJva2U9InVybCgjYSkiIGQ9Ik04Ni42LTUwYTEwMCAxMDAgMCAwIDEgMCAxMDAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwMCAxMDApIi8+PHBhdGggc3Ryb2tlPSJ1cmwoI2IpIiBkPSJNODYuNiA1MEExMDAgMTAwIDAgMCAxIDAgMTAwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMDAgMTAwKSIvPjxwYXRoIHN0cm9rZT0idXJsKCNjKSIgZD0iTTAgMTAwYTEwMCAxMDAgMCAwIDEtODYuNi01MCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAwIDEwMCkiLz48cGF0aCBzdHJva2U9InVybCgjZCkiIGQ9Ik0tODYuNiA1MGExMDAgMTAwIDAgMCAxIDAtMTAwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMDAgMTAwKSIvPjxwYXRoIHN0cm9rZT0idXJsKCNlKSIgZD0iTS04Ni42LTUwQTEwMCAxMDAgMCAwIDEgMC0xMDAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwMCAxMDApIi8+PHBhdGggc3Ryb2tlPSJ1cmwoI2YpIiBkPSJNMC0xMDBhMTAwIDEwMCAwIDAgMSA4Ni42IDUwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMDAgMTAwKSIvPjwvZz48L21hc2s+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHg9Ii0yMCIgeT0iLTIwIiBtYXNrPSJ1cmwoI2cpIiBmaWxsPSIjZmZmIi8+PC9zdmc+)\r\n    no-repeat;\r\n  position: absolute;\r\n  width: 32px;\r\n  height: 32px;\r\n  left: 50%;\r\n  top: 50%;\r\n  margin-left: -16px;\r\n  margin-top: -16px;\r\n  -webkit-animation: OT_spin 2s linear infinite;\r\n  animation: OT_spin 2s linear infinite;\r\n}\r\n\r\n@-webkit-keyframes OT_spin {\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n@keyframes OT_spin {\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n.OT_publisher.OT_loading .OT_video-loading,\r\n.OT_subscriber.OT_loading .OT_video-loading {\r\n  display: block;\r\n}\r\n\r\n.OT_video-centering {\r\n  display: table;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.OT_video-container {\r\n  display: table-cell;\r\n  vertical-align: middle;\r\n}\r\n\r\n.OT_video-poster {\r\n  position: absolute;\r\n  z-index: 1;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: none;\r\n\r\n  opacity: 0.25;\r\n\r\n  background-repeat: no-repeat;\r\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDcxIDQ2NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48bGluZWFyR3JhZGllbnQgaWQ9ImEiIHgyPSIwIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSI2Ni42NiUiIHN0b3AtY29sb3I9IiNmZmYiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iMCIvPjwvbGluZWFyR3JhZGllbnQ+PHBhdGggZmlsbD0idXJsKCNhKSIgZD0iTTc5IDMwOGMxNC4yNS02LjUgNTQuMjUtMTkuNzUgNzEtMjkgOS0zLjI1IDI1LTIxIDI1LTIxczMuNzUtMTMgMy0yMmMtMS43NS02Ljc1LTE1LTQzLTE1LTQzLTIuNSAzLTQuNzQxIDMuMjU5LTcgMS0zLjI1LTcuNS0yMC41LTQ0LjUtMTYtNTcgMS4yNS03LjUgMTAtNiAxMC02LTExLjI1LTMzLjc1LTgtNjctOC02N3MuMDczLTcuMzQ2IDYtMTVjLTMuNDguNjM3LTkgNC05IDQgMi41NjMtMTEuNzI3IDE1LTIxIDE1LTIxIC4xNDgtLjMxMi0xLjMyMS0xLjQ1NC0xMCAxIDEuNS0yLjc4IDE2LjY3NS04LjY1NCAzMC0xMSAzLjc4Ny05LjM2MSAxMi43ODItMTcuMzk4IDIyLTIyLTIuMzY1IDMuMTMzLTMgNi0zIDZzMTUuNjQ3LTguMDg4IDQxLTZjLTE5Ljc1IDItMjQgNi0yNCA2czc0LjUtMTAuNzUgMTA0IDM3YzcuNSA5LjUgMjQuNzUgNTUuNzUgMTAgODkgMy43NS0xLjUgNC41LTQuNSA5IDEgLjI1IDE0Ljc1LTExLjUgNjMtMTkgNjItMi43NSAxLTQtMy00LTMtMTAuNzUgMjkuNS0xNCAzOC0xNCAzOC0yIDQuMjUtMy43NSAxOC41LTEgMjIgMS4yNSA0LjUgMjMgMjMgMjMgMjNsMTI3IDUzYzM3IDM1IDIzIDEzNSAyMyAxMzVMMCA0NjRzLTMtOTYuNzUgMTQtMTIwYzUuMjUtNi4yNSAyMS43NS0xOS43NSA2NS0zNnoiLz48L3N2Zz4=);\r\n  background-size: auto 76%;\r\n}\r\n\r\n.OT_fit-mode-cover .OT_video-element {\r\n  -o-object-fit: cover;\r\n  object-fit: cover;\r\n}\r\n\r\n/* Workaround for iOS freezing issue when cropping videos */\r\n\r\n/* https://bugs.webkit.org/show_bug.cgi?id=176439 */\r\n\r\n@media only screen and (orientation: portrait) {\r\n  .OT_subscriber.OT_ForceContain.OT_fit-mode-cover .OT_video-element {\r\n    -o-object-fit: contain !important;\r\n    object-fit: contain !important;\r\n  }\r\n}\r\n\r\n.OT_fit-mode-contain .OT_video-element {\r\n  -o-object-fit: contain;\r\n  object-fit: contain;\r\n}\r\n\r\n.OT_fit-mode-cover .OT_video-poster {\r\n  background-position: center bottom;\r\n}\r\n\r\n.OT_fit-mode-contain .OT_video-poster {\r\n  background-position: center;\r\n}\r\n\r\n.OT_audio-level-meter {\r\n  position: absolute;\r\n  width: 25%;\r\n  max-width: 224px;\r\n  min-width: 21px;\r\n  top: 0;\r\n  right: 0;\r\n  overflow: hidden;\r\n}\r\n\r\n.OT_audio-level-meter:before {\r\n  /* makes the height of the container equals its width */\r\n  content: '';\r\n  display: block;\r\n  padding-top: 100%;\r\n}\r\n\r\n.OT_audio-level-meter__bar {\r\n  position: absolute;\r\n  width: 192%; /* meter value can overflow of 8% */\r\n  height: 192%;\r\n  top: -96% /* half of the size */;\r\n  right: -96%;\r\n  border-radius: 50%;\r\n\r\n  background-color: rgba(0, 0, 0, 0.8);\r\n}\r\n\r\n.OT_audio-level-meter__audio-only-img {\r\n  position: absolute;\r\n  top: 22%;\r\n  right: 15%;\r\n  width: 40%;\r\n\r\n  opacity: 0.7;\r\n\r\n  background: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNzkgODYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iI2ZmZiI+PHBhdGggZD0iTTkuNzU3IDQwLjkyNGMzLjczOC01LjE5MSAxMi43MTEtNC4zMDggMTIuNzExLTQuMzA4IDIuMjIzIDMuMDE0IDUuMTI2IDI0LjU4NiAzLjYyNCAyOC43MTgtMS40MDEgMS4zMDEtMTEuNjExIDEuNjI5LTEzLjM4LTEuNDM2LTEuMjI2LTguODA0LTIuOTU1LTIyLjk3NS0yLjk1NS0yMi45NzV6bTU4Ljc4NSAwYy0zLjczNy01LjE5MS0xMi43MTEtNC4zMDgtMTIuNzExLTQuMzA4LTIuMjIzIDMuMDE0LTUuMTI2IDI0LjU4Ni0zLjYyNCAyOC43MTggMS40MDEgMS4zMDEgMTEuNjExIDEuNjI5IDEzLjM4LTEuNDM2IDEuMjI2LTguODA0IDIuOTU1LTIyLjk3NSAyLjk1NS0yMi45NzV6Ii8+PHBhdGggZD0iTTY4LjY0NyA1OC42Yy43MjktNC43NTMgMi4zOC05LjU2MSAyLjM4LTE0LjgwNCAwLTIxLjQxMi0xNC4xMTUtMzguNzctMzEuNTI4LTM4Ljc3LTE3LjQxMiAwLTMxLjUyNyAxNy4zNTgtMzEuNTI3IDM4Ljc3IDAgNC41NDEuNTE1IDguOTM2IDEuODAyIDEyLjk1IDEuNjk4IDUuMjk1LTUuNTQyIDYuOTkxLTYuNjE2IDIuMDczQzIuNDEgNTUuMzk0IDAgNTEuNzg3IDAgNDguMTAzIDAgMjEuNTM2IDE3LjY4NSAwIDM5LjUgMCA2MS4zMTYgMCA3OSAyMS41MzYgNzkgNDguMTAzYzAgLjcxOC0yLjg5OSA5LjY5My0zLjI5MiAxMS40MDgtLjc1NCAzLjI5My03Ljc1MSAzLjU4OS03LjA2MS0uOTEyeiIvPjxwYXRoIGQ9Ik01LjA4NCA1MS4zODVjLS44MDQtMy43ODIuNTY5LTcuMzM1IDMuMTM0LTcuOTIxIDIuNjM2LS42MDMgNS40ODUgMi4xNSA2LjI4OSA2LjEzMi43OTcgMy45NDgtLjc1MiA3LjQ1Ny0zLjM4OCA3Ljg1OS0yLjU2Ni4zOTEtNS4yMzctMi4zMTgtNi4wMzQtNi4wN3ptNjguODM0IDBjLjgwNC0zLjc4Mi0uNTY4LTcuMzM1LTMuMTMzLTcuOTIxLTIuNjM2LS42MDMtNS40ODUgMi4xNS02LjI4OSA2LjEzMi0uNzk3IDMuOTQ4Ljc1MiA3LjQ1NyAzLjM4OSA3Ljg1OSAyLjU2NS4zOTEgNS4yMzctMi4zMTggNi4wMzQtNi4wN3ptLTIuMDM4IDguMjg4Yy0uOTI2IDE5LjY1OS0xNS4xMTIgMjQuNzU5LTI1Ljg1OSAyMC40NzUtNS40MDUtLjYwNi0zLjAzNCAxLjI2Mi0zLjAzNCAxLjI2MiAxMy42NjEgMy41NjIgMjYuMTY4IDMuNDk3IDMxLjI3My0yMC41NDktLjU4NS00LjUxMS0yLjM3OS0xLjE4Ny0yLjM3OS0xLjE4N3oiLz48cGF0aCBkPSJNNDEuNjYyIDc4LjQyMmw3LjU1My41NWMxLjE5Mi4xMDcgMi4xMiAxLjE1MyAyLjA3MiAyLjMzNWwtLjEwOSAyLjczOGMtLjA0NyAxLjE4Mi0xLjA1MSAyLjA1NC0yLjI0MyAxLjk0NmwtNy41NTMtLjU1Yy0xLjE5MS0uMTA3LTIuMTE5LTEuMTUzLTIuMDcyLTIuMzM1bC4xMDktMi43MzdjLjA0Ny0xLjE4MiAxLjA1Mi0yLjA1NCAyLjI0My0xLjk0N3oiLz48L2c+PC9zdmc+)\r\n    no-repeat center;\r\n}\r\n\r\n.OT_audio-level-meter__audio-only-img:before {\r\n  /* makes the height of the container equals its width */\r\n  content: '';\r\n  display: block;\r\n  padding-top: 100%;\r\n}\r\n\r\n.OT_audio-level-meter__value {\r\n  position: absolute;\r\n  border-radius: 50%;\r\n  background-image: radial-gradient(circle, rgba(151, 206, 0, 1) 0%, rgba(151, 206, 0, 0) 100%);\r\n}\r\n\r\n.OT_audio-level-meter.OT_mode-off {\r\n  display: none;\r\n}\r\n\r\n.OT_audio-level-meter.OT_mode-on,\r\n.OT_audio-only .OT_audio-level-meter.OT_mode-auto {\r\n  display: block;\r\n}\r\n\r\n.OT_audio-only.OT_publisher .OT_video-element,\r\n.OT_audio-only.OT_subscriber .OT_video-element {\r\n  display: none;\r\n}\r\n\r\n.OT_video-disabled-indicator {\r\n  opacity: 1;\r\n  border: none;\r\n  display: none;\r\n  position: absolute;\r\n  background-color: transparent;\r\n  background-repeat: no-repeat;\r\n  background-position: bottom right;\r\n  pointer-events: none;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 3px;\r\n  right: 3px;\r\n}\r\n\r\n.OT_video-disabled {\r\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFIAAAAoCAYAAABtla08AAAINUlEQVR42u2aaUxUVxTHcRBmAAEBRVTK4sKwDIsg+wCK7CqIw1CN1YobbbS2qYlJ06Qx1UpdqMbYWq2pSzWmH6ytNbXWJY1Lq7VuqBERtW64V0XFLYae0/xvcp3MMAMzDz6IyT/ge2ce5/7ucpY3Ts3NzZ1ygF57AJ0gO0G2jyZPmdbFyclJSAV1EeoEaUUSLGdSV5KLLFxzFmA7QVqGqDqjixhWkxCVeyRVl38wM6bwj6yYItYK47BAuu9B0gCqs6Ng2r494KQtkj/Dz2jHraw6qw2fdSE4rNmcCPCvZONP8iF1I6kdBdMaQJWZLeJqRWa2kPJAxXY+GxE+zxLI03GRh8lGSwoi9WCY8FWlCEh+8JOnT7MfPGjMuXX7Tt61hoaCi/9cKmKdv3BxeEtim/UbNpnbQiqF4MmT7kqrbr4lkMcTo46TTSpJB5g+8NHuVWnWuaampvhmO/7duHmrGluoO4C6OsJZGRrkDIld43ZqUOTnlkDSmXmabAoBU0vqBf+6KgFSxQ9++uzZ8rZApM81TJ8xM5me0Z/UF7PuBmdVdkGEb5gYDeQmyZNW3SJLIP9Kj64lGyMpmxRN6sOfIbkoAhKOdnv2/PmB1kB88eLFo+olyyrps3rSINIAzLonnqlqK8R9w+L86vtrt5L2nhug3Vc3ULu/Liz8AOuXESlZZONH6kmr7gtLIA9lRNeRzVukAvj3BslLnJNKgfScO69K+/Lly0ZbQW7e8tNK+pwBjqaSIjDrXgJkW1ciAZvbQjQ+RDahpBBKd5ZZsqN758hmImk4KQHnpDd8UwSkCyJarx07d4+3BeKJmlMHyX4qaRxpBCmNFE4KENvHDpAutVERn1kCVBMfeRRgYvZnx62wZPdnZkw92VQA5GClQXYRBze2S+iJmpPVVoJLA9l9QKokjcWKTCT1R5rhLg70NuSsziT16diIKkuAjibrTpJNDkn/e17CahtAjlAWJAYkb29Sb1LE9Rs391kILk8mVkyuIpuZcLKUlEmKkra1WuSTNuesEPzwoEploSVAh9Oiz+BIyd9dOHhtx4OEpFpVg6gbNK3yXX1j48N6U5Dz5i/gc/FDrMY3sTLiSMEkXxGxzUEUAGnbxlPaksMlHUXWAlHS8URCPseSohZbCSLjSSU7ixLXdzhIWVKq4Y7t2a/2bN0qGeKly1fYsVmk6RgIDz4J0bonyUOcjeYqm/8hRoYbWkigV2NH9CHAS60EkUkkw47hSRs6FqT1LR5AVcsrueXlK1d5AO+RpmBrZZEiefByytPCanRGNLZY0uF52gNDYr9sCRB8MHY0SJu2OJWKS2WQV65e4y31DmkCImEi0hBfufRime0RIhpbKen0/Ny9OYNW2ghyYytABjNIaxNuKttAWk6HPLn0k0FevdZwFinPWFIuKZbUV16NVko6jbWSDoPO3pOf8K0jQWLSQ0S9bdpkYck+m7vfWpAiHfKgBsZiGSSt0FqcTeU8WETqAHE2CgcAVd3Gkm4MD3xXYeI6B4NMItvKbcUpQ9gP+KMWnSsW+TaYJtoo+avBWLoKoK0CCSDud+7eXWQGZAXqV3YoQjQCfixJ8+fzj9ta3JHhlUeJ8wJOY2ws6eRKpPS3oqTvHAESEz9ya0naXL5WH6pt3FqSOhTHkTcKEXc6k1POh4Q9YJu/03TT4a8PoGMFI4i2EqSbOZAYaBkpCyD92RkG6KCSbjI/H0HEISBnlOZPFdcEzI2GTO4KBZICGKyAKLTEmJOB2txf5MbgohBINCl4FTqmpJMB2W+HiRn1Q2l6lXyPmiEP6VVE2TfGoaMYrHyPdtAnyI0jEOn9RLWmNEhvBBE7SjpFQZaShtLK+1S+T12lRwxUvrZlVPp8jE1PikeO7C/nyEqBDCB1t7+kUx4kKUWclea0yZC5BIGpiJSNSD9QgFR0RQKkL6KxHSWdsiARHJNYewoGrzG1/bk4dTPSunL2EyDjcbb7MQ+lQfZmkKiN7SjpFAM5CWAyGcwyY84YsZ1lUcbRNNtQMAdtQWGvQ0DyVjzYAKQfQFodeAeC1C8vzymXIZqD+ZEh/2OyLSalS/3VbnJZ+VqDXGjMrTCFuK4s66vVZUNfqaDolcbjOcb899sLpEE+I20GifywXe2QR3KElu99PzqjGufhREqB1pjCnG3IL3fY1v733r2FMsiGhutn0LAoJWWIGbPxjKwgjUbF0m52mPhigrpdXOecEq9pR6MkHbu2LOtrcZ9y3d0ODTb15y9MePz48aF79+8fvXnr9sljx2u2I7KNxDuaMPGVECoRs7mC4eT7SIruFNfNHK15MKuM2evwNq+4qjxvGnd5CHwNNynawW4cOlUZdG8b55IIJHmkItwrZHH6QxB3OSL9kTtAGpIvZiQB3Z4SKBfXQtEE9sashWAW87Bt3sYZNR6zn4uzJwWDKUKXfaKCdqUoBpLxSjYe9nqGiwWRBGipuGZ3Qm76itYLbbJI/PEhUApfw73uOIy9xfse3M9F9BuFJHcYrseSouGkHtCVtkuGTTikI8XgZzhg9SeF4VqcvSWiaSvNHQ8JwkNjIfEHemCmNLD1RaEfLs18mlgNuN6PFALHo7CyU5W2g00gFAQF4ozvibH04muwDbWraSFAyt/AAMzewgGR8uCeWn77xzBxPxgzPRCDDMZ14bQ/3jqGKGoHf2Hjgx3kw5LbaJDYWb52t9FMgw4AuWNWukNeuOYqOsmQi2jgws4PA/DD/z0B2x0/veCs4naw0cgybezid7X9jV3rX2RSs0wfLkll4pBGcgifg+NYxe1kJ2ycTaRq66uG/wBOl0vjcw70xwAAAABJRU5ErkJggg==);\r\n  background-size: 33px auto;\r\n}\r\n\r\n.OT_video-disabled-warning {\r\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFIAAAAoCAYAAABtla08AAAGMElEQVR4Ae2aA7D0yBaAc7oH12vbRmlLaxYWb23btm3btm2899a2bWuYtPZ01cmtU9lJrib315yqr9I3Oem/5/s7acwEnehEJzoxCcX2O+wEeIgRBDDaGjAZOgQ6ihRpLklHZDJIXK1WWymMIhGGkVBKCWMM+Iv/f/b5t7faYtM/sGgIS7j8RNLjceUVl41GvGN1BFiHy9sgtRWaYbhvuVQ6o1VOvV5/tLe3dyssKoZuh8xClkDEi2MMS6ZjR0cScxdK/+HgnJsmLccYOx0e/PUGUqfTJDEHkV5go9lcMQoj4R8RpSIRRUr4a9baTJFCCNfqESKJ7RYJibK0xoi05EhFRTxMi1Rit6xHAuLaKRLwEVi6q1x+EhlVpd3d3Wfh4VQkQhRhxthYLg7SRGqdLlIp7UVOHf+JhEhEMscUolVje3p63saeeOFoKsT7fjj++BNuw2I/0ouUENmGaQcQEilQvUU6xuWC0kqmVWCt8df6kG7WLoFA20VSCOyNh0RKPT+SyrTWtQsvuvTYCy84z3+oAdbgAiLGIvHjTz6bFuu/B3lKKfVkFKknwih6EnnipZdfXQZzepAupXSGSCfwUGZtkrx3t/0dSQGnnXbmdocdetArQoj+4VR23wMP3bj/vnv9Sv/rBmkish09ca655thHSrlWq4TFF1vkNDxsgjiUnPqZnHPABIq47jx7pPMcecShfz7x1DO7D6eit99576X1113nVd8rqLGAuDaNitJonTGIqHgQGQjDsJglMrUH5iDSEQbRa6y2yrNvv/PuWVmV/PTzLz8steTit1B9FtGJeZrJksmWdBzBMcami4xUkaY1A1Qe94WIaPGBApJhaERrLrXkElf8+NPPz6YMLs1DDjn0Wn9PnI/UiQadM4jNEkhzVsEGE8nIHESM1j5/KqRX+/IEiOQ/yifNBlEkpnb00cccesbpp13T3983H88/48xzrrvm6it/8U5JXgX5G6nSvSq1R5LATR7aYGkwMG1RSwkWABH+4jUb3vT/uJ1Z0xpjraTBRltrxUQhksIRmgTJyy69+Pv99tv3qYX6FxgU+fU33352xGEHf5wisU7nNWJpZRMkAjZ6aIN1mwV7h29Jo2wCHlveu/GV169z65E+T6koexCh6c+EEiky3lnxQKFjUeVyOeI5AOBzIiayRhJryd7YYnkIHgvB0qk9Tdql6N3XH4bRUIOIIIKJSiRb0hkSEpZKRd1CpEq8GxtIyCVmDSgFl94GacTgaJw1rUlYhYng0c4ewaUsmKRIJjpiqMSOCh9QeI+UYECmtQIsxEu6OorEcv6Rl0gu0woh8MhFkmSCTXVI4pC704WCFRJvSRNJSzrMMEZO2iKZTCHAZYnmvXCny7ed5vfZK3viHSBdIFCKEFj2+nt+73nw8m2uedcLJlktA++VNMEPaR45aYukcKnnCfY3/DFbZS8t7eHxNgsPM0N1hXhJJwwM1QbpoQFlog2R13a/zBxEYHAQEUYUM6qiVwEyBYoM6JFNF2kFLelI5KQf+fVI4dJFCguDS7oAyx2R6SFQJKRedSDj/cMg/RXQ6ZE05GSIDAaXdCi1I3L021SQWNJ1RLY5OiIdL4/yvuw8ADfWPFrSciaMyH8tEQPwf1uGG54g5+KlJGTmsrxsQdl5PKidnPFe2QS///7Hu+VS6WX/HYnf0sevGL7lXydwod2/9DykZq0s5yff0sgSWCigNOH7TPHL7ufj+/TH8P/+qYpL4HkBDiRYpEXeM8/89/9zzjn7EtY64dfd1nqccM7Bs8+9MKy8555/8TnKS+5MufH6EZVASkgPzf+mJXroet17JirU0ALST3nT0y5ONyLpeo1y64ih+vuQfsoTOeRFSJXa+SvyB90TUmdw49EjLaKpMQ0mzEeTzkWsd/oI6fzfiKM8gWg6X6OjpXstu5ZHnmIb0GFiu29MIUfUewkmVrEN3RqVQ/bY8FzNcquMBv/pCNUZ5pHHem01KdN/I/DG66/lLhKSvTO5M84kav5C5z2ZfyAivi9i9VGd45RH7UWJbjwGG/7NYsRECt7jiOToHedKAui8SW4CsxyRc54mKH/8f7ELhCCACyNcIl/wI+FaAJyc8yzRtinQPzWzuFZrFHq/AAAAAElFTkSuQmCC);\r\n  background-size: 33px auto;\r\n}\r\n\r\n.OT_video-disabled-indicator.OT_active {\r\n  display: block;\r\n}\r\n\r\n.OT_audio-blocked-indicator {\r\n  opacity: 1;\r\n  border: none;\r\n  display: none;\r\n  position: absolute;\r\n  background-color: transparent;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  pointer-events: none;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n}\r\n\r\n.OT_audio-blocked {\r\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTUwIiBoZWlnaHQ9IjkwIj48ZGVmcz48cGF0aCBkPSJNNjcgMTJMNi40NDggNzIuNTUyIDAgMzFWMThMMjYgMGw0MSAxMnptMyA3bDYgNDctMjkgMTgtMzUuNTAyLTYuNDk4TDcwIDE5eiIgaWQ9ImEiLz48L2RlZnM+PHJlY3Qgd2lkdGg9IjE1MCIgaGVpZ2h0PSI5MCIgcng9IjM1IiByeT0iNDUiIG9wYWNpdHk9Ii41Ii8+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzNikiPjxtYXNrIGlkPSJiIiBmaWxsPSIjZmZmIj48dXNlIHhsaW5rOmhyZWY9IiNhIi8+PC9tYXNrPjxwYXRoIGQ9Ik0zOS4yNDkgNTEuMzEyYy42OTcgMTAuMzcgMi43ODUgMTcuODk3IDUuMjUxIDE3Ljg5NyAzLjAzOCAwIDUuNS0xMS40MTcgNS41LTI1LjVzLTIuNDYyLTI1LjUtNS41LTI1LjVjLTIuNTEgMC00LjYyOCA3Ljc5Ny01LjI4NyAxOC40NTNBOC45ODkgOC45ODkgMCAwIDEgNDMgNDRhOC45ODggOC45ODggMCAwIDEtMy43NTEgNy4zMTJ6TTIwLjk4NSAzMi4yMjRsMTUuNzQ2LTE2Ljg3N2E3LjM4NSA3LjM4NSAwIDAgMSAxMC4zNzQtLjQyQzUxLjcwMiAxOS4xMTQgNTQgMjkuMjA4IDU0IDQ1LjIwOGMwIDE0LjUyNy0yLjM0MyAyMy44OC03LjAzIDI4LjA1OGE3LjI4IDcuMjggMCAwIDEtMTAuMTY4LS40NjhMMjAuNDA1IDU1LjIyNEgxMmE1IDUgMCAwIDEtNS01di0xM2E1IDUgMCAwIDEgNS01aDguOTg1eiIgZmlsbD0iI0ZGRiIgbWFzaz0idXJsKCNiKSIvPjwvZz48cGF0aCBkPSJNMTA2LjUgMTMuNUw0NC45OTggNzUuMDAyIiBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PC9nPjwvc3ZnPg==);\r\n  background-size: 90px auto;\r\n}\r\n\r\n.OT_container-audio-blocked {\r\n  cursor: pointer;\r\n}\r\n\r\n.OT_container-audio-blocked.OT_mini .OT_edge-bar-item {\r\n  display: none;\r\n}\r\n\r\n.OT_container-audio-blocked .OT_mute {\r\n  display: none;\r\n}\r\n\r\n.OT_audio-blocked-indicator.OT_active {\r\n  display: block;\r\n}\r\n\r\n.OT_video-unsupported {\r\n  opacity: 1;\r\n  border: none;\r\n  display: none;\r\n  position: absolute;\r\n  background-color: transparent;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTciIGhlaWdodD0iOTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxwYXRoIGQ9Ik03MCAxMkw5LjQ0OCA3Mi41NTIgMCA2MmwzLTQ0TDI5IDBsNDEgMTJ6bTggMmwxIDUyLTI5IDE4LTM1LjUwMi02LjQ5OEw3OCAxNHoiIGlkPSJhIi8+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOCAzKSI+PG1hc2sgaWQ9ImIiIGZpbGw9IiNmZmYiPjx1c2UgeGxpbms6aHJlZj0iI2EiLz48L21hc2s+PHBhdGggZD0iTTkuMTEgMjAuOTY4SDQ4LjFhNSA1IDAgMCAxIDUgNVY1OC4xOGE1IDUgMCAwIDEtNSA1SDkuMTFhNSA1IDAgMCAxLTUtNVYyNS45N2E1IDUgMCAwIDEgNS01em00Ny4wOCAxMy4zOTRjMC0uMzQ1IDUuNDcyLTMuMTU5IDE2LjQxNS04LjQ0M2EzIDMgMCAwIDEgNC4zMDQgMi43MDJ2MjYuODM1YTMgMyAwIDAgMS00LjMwNSAyLjcwMWMtMTAuOTQyLTUuMjg2LTE2LjQxMy04LjEtMTYuNDEzLTguNDQ2VjM0LjM2MnoiIGZpbGw9IiNGRkYiIG1hc2s9InVybCgjYikiLz48L2c+PHBhdGggZD0iTTgxLjUgMTYuNUwxOS45OTggNzguMDAyIiBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PC9nPjwvc3ZnPg==);\r\n  background-size: 58px auto;\r\n  pointer-events: none;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  margin-top: -30px;\r\n}\r\n\r\n.OT_video-unsupported-bar {\r\n  display: none;\r\n  position: absolute;\r\n  width: 192%; /* copy the size of the audio meter bar for symmetry */\r\n  height: 192%;\r\n  top: -96% /* half of the size */;\r\n  left: -96%;\r\n  border-radius: 50%;\r\n\r\n  background-color: rgba(0, 0, 0, 0.8);\r\n}\r\n\r\n.OT_video-unsupported-img {\r\n  display: none;\r\n  position: absolute;\r\n  top: 11%;\r\n  left: 15%;\r\n  width: 70%;\r\n  opacity: 0.7;\r\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTciIGhlaWdodD0iOTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxwYXRoIGQ9Ik03MCAxMkw5LjQ0OCA3Mi41NTIgMCA2MmwzLTQ0TDI5IDBsNDEgMTJ6bTggMmwxIDUyLTI5IDE4LTM1LjUwMi02LjQ5OEw3OCAxNHoiIGlkPSJhIi8+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOCAzKSI+PG1hc2sgaWQ9ImIiIGZpbGw9IiNmZmYiPjx1c2UgeGxpbms6aHJlZj0iI2EiLz48L21hc2s+PHBhdGggZD0iTTkuMTEgMjAuOTY4SDQ4LjFhNSA1IDAgMCAxIDUgNVY1OC4xOGE1IDUgMCAwIDEtNSA1SDkuMTFhNSA1IDAgMCAxLTUtNVYyNS45N2E1IDUgMCAwIDEgNS01em00Ny4wOCAxMy4zOTRjMC0uMzQ1IDUuNDcyLTMuMTU5IDE2LjQxNS04LjQ0M2EzIDMgMCAwIDEgNC4zMDQgMi43MDJ2MjYuODM1YTMgMyAwIDAgMS00LjMwNSAyLjcwMWMtMTAuOTQyLTUuMjg2LTE2LjQxMy04LjEtMTYuNDEzLTguNDQ2VjM0LjM2MnoiIGZpbGw9IiNGRkYiIG1hc2s9InVybCgjYikiLz48L2c+PHBhdGggZD0iTTgxLjUgMTYuNUwxOS45OTggNzguMDAyIiBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PC9nPjwvc3ZnPg==);\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-size: 100% auto;\r\n}\r\n\r\n.OT_video-unsupported-img:before {\r\n  /* makes the height of the container 93% of its width (90/97 px) */\r\n  content: '';\r\n  display: block;\r\n  padding-top: 93%;\r\n}\r\n\r\n.OT_video-unsupported-text {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  height: 100%;\r\n  margin-top: 40px;\r\n}\r\n\r\n@media (min-width: 1440px) {\r\n  .sidenav-menu{\r\n    width: 33%;\r\n  }\r\n}\r\n\r\n@media (max-width: 1440px) and (min-width: 1024px){\r\n  .sidenav-menu{\r\n    width: 30%;\r\n  }\r\n}\r\n\r\n@media (max-width: 1024px) and (min-width: 790px){\r\n  .sidenav-menu{\r\n    width: 350px;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlkZW8tcm9vbS92aWRlby1yb29tLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtDQUFrQztFQUNsQyxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQ0FBa0M7RUFDbEMsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVCxTQUFTO0VBQ1QsMkJBQTJCO0VBQzNCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7Ozs7RUFJRTs7QUFFRjtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTs7RUFFRTs7QUFFRix3REFBd0Q7O0FBQ3hEOztFQUVFLGNBQWM7RUFDZCxTQUFTO0VBQ1QsVUFBVTtFQUNWLFNBQVM7RUFDVCxlQUFlO0VBQ2YsaUNBQWlDO0VBQ2pDLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUVsQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjs7RUFFakIsV0FBVztFQUNYLGlDQUFpQztFQUNqQyxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usb0JBQW9CO0VBRXBCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLE1BQU07QUFDUjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7O0VBRWpCLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsbUJBQW1COztFQUVuQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGlCQUFpQjs7RUFFakIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFDQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7OztFQUdFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxxQkFBcUI7O0VBRXJCLG1CQUFtQjtFQUNuQixjQUFjOztFQUVkLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjs7RUFFbkIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjs7RUFFbkIseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UscUJBQXFCLEVBQUUsNkJBQTZCO0VBQ3BELFdBQVc7RUFDWCxlQUFlO0VBQ2YsbUJBQW1COztFQUVuQix5QkFBeUI7RUFDekIsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTs7RUFFWix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxpQkFBaUI7O0VBRWpCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUEsWUFBWTs7QUFFWjtFQUNFLGVBQWU7RUFDZixTQUFTO0VBQ1QsUUFBUTtFQUNSLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUEsb0NBQW9DOztBQUVwQzs7RUFFRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZOztFQUlaLHFCQUFxQjtBQUN2Qjs7QUFFQSxzRUFBc0U7O0FBQ3RFO0VBRUUsdUJBQXVCO0VBRXZCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBLGtEQUFrRDs7QUFDbEQ7Ozs7Ozs7Ozs7RUFXRSwwQkFBMEI7RUFDMUIsc0JBQXNCO0VBQ3RCLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLGNBQWM7RUFDZCxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFLDhCQUE4QjtBQUNoQzs7QUFFQTs7RUFFRSxVQUFVLEVBQUUsaURBQWlEO0FBQy9EOztBQUVBLDZEQUE2RDs7QUFDN0Q7O0VBRUUsNkJBQTZCO0VBQzdCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFDdkI7O0FBRUE7O0VBRUUsOEJBQThCO0VBQzlCLFNBQVM7RUFDVCxTQUFTO0VBQ1QsVUFBVTtFQUNWLGNBQWM7RUFDZCwrQkFBK0I7RUFDL0IsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7Ozs7RUFJRSxhQUFhO0FBQ2Y7O0FBRUE7O0VBRUUsOEJBQThCO0VBQzlCLFNBQVM7RUFDVCxTQUFTO0VBQ1QsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVix5QkFBeUI7RUFFekIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGdDQUFnQztFQUNoQyx3Q0FBd0M7RUFDeEMscUNBQXFDO0VBQ3JDLHdDQUF3QztFQUN4QyxtQ0FBbUM7RUFDbkMsMkNBQTJDO0VBQzNDLHdDQUF3QztFQUN4QywyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRTtJQUVFLCtCQUErQjtFQUNqQzs7RUFFQTtJQUVFLCtCQUErQjtFQUNqQzs7RUFFQTtJQUVFLCtCQUErQjtFQUNqQzs7RUFFQTtJQUVFLCtCQUErQjtFQUNqQzs7RUFFQTtJQUVFLCtCQUErQjtFQUNqQztBQUNGOztBQUVBO0VBQ0U7SUFFRSwrQkFBK0I7RUFDakM7O0VBRUE7SUFFRSwrQkFBK0I7RUFDakM7O0VBRUE7SUFFRSwrQkFBK0I7RUFDakM7O0VBRUE7SUFFRSwrQkFBK0I7RUFDakM7O0VBRUE7SUFFRSwrQkFBK0I7RUFDakM7QUFDRjs7QUFFQTs7O0VBR0UsU0FBUztFQUNULFlBQVk7QUFDZDs7QUFFQTs7OztFQUlFLGFBQWE7QUFDZjs7QUFFQTs7RUFFRSxVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBOztFQUVFLFlBQVk7RUFDWixlQUFlO0VBQ2YsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLDZCQUE2QjtFQUM3Qiw0QkFBNEI7QUFDOUI7O0FBRUE7O0VBRUUsUUFBUTtFQUNSLE1BQU07RUFDTiwrQ0FBK0M7RUFDL0MsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTs7O0VBR0UsUUFBUTtFQUNSLFNBQVM7RUFDVCxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxxMkJBQXEyQjtFQUNyMkIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsaXhDQUFpeEM7RUFDanhDLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLHl0QkFBeXRCO0VBQ3p0Qiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSx5aENBQXloQztFQUN6aEMsNEJBQTRCO0FBQzlCOztBQUVBOzs7OztFQUtFOztBQUVGLGlFQUFpRTs7QUFDakU7O0VBR0UseUNBQXlDO0VBRXpDLHlCQUF5QjtFQUV6QixtQ0FBbUM7QUFDckM7O0FBRUE7Ozs7OztFQU1FLFVBQVU7RUFDVixVQUFVO0FBQ1o7O0FBRUE7O0VBRUUsYUFBYTtBQUNmOztBQUVBOzs7RUFHRSxRQUFRO0FBQ1Y7O0FBRUE7Ozs7OztFQU1FLFNBQVM7RUFDVCxhQUFhO0FBQ2Y7O0FBRUE7Ozs7Ozs7O0VBUUUsTUFBTTtFQUNOLFVBQVU7QUFDWjs7QUFFQTs7OztFQUlFLFFBQVE7QUFDVjs7QUFFQTs7OztFQUlFLFNBQVM7RUFDVCxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBLG1CQUFtQjs7QUFDbkI7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTs7RUFFYixxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRTthQUNXO0VBQ1gsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osU0FBUztFQUNULFFBQVE7RUFDUixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLDZDQUE2QztFQUM3QyxxQ0FBcUM7QUFDdkM7O0FBQ0E7RUFDRTtJQUNFLGlDQUFpQztFQUNuQztBQUNGOztBQUNBO0VBQ0U7SUFFRSx5QkFBeUI7RUFDM0I7QUFDRjs7QUFFQTs7RUFFRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7O0VBRWIsYUFBYTs7RUFFYiw0QkFBNEI7RUFDNUIsaXNDQUFpc0M7RUFDanNDLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixpQkFBaUI7QUFDbkI7O0FBRUEsMkRBQTJEOztBQUMzRCxtREFBbUQ7O0FBQ25EO0VBQ0U7SUFDRSxpQ0FBaUM7SUFDakMsOEJBQThCO0VBQ2hDO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLE1BQU07RUFDTixRQUFRO0VBQ1IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsdURBQXVEO0VBQ3ZELFdBQVc7RUFDWCxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVcsRUFBRSxtQ0FBbUM7RUFDaEQsWUFBWTtFQUNaLGdDQUFnQztFQUNoQyxXQUFXO0VBQ1gsa0JBQWtCOztFQUVsQixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFVBQVU7RUFDVixVQUFVOztFQUVWLFlBQVk7O0VBRVo7b0JBQ2tCO0FBQ3BCOztBQUVBO0VBQ0UsdURBQXVEO0VBQ3ZELFdBQVc7RUFDWCxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQiw2RkFBNkY7QUFDL0Y7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7O0VBRUUsY0FBYztBQUNoQjs7QUFFQTs7RUFFRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLDRCQUE0QjtFQUM1QixpQ0FBaUM7RUFDakMsb0JBQW9CO0VBQ3BCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFVBQVU7QUFDWjs7QUFFQTtFQUNFLDYyRkFBNjJGO0VBQzcyRiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSx5ckVBQXlyRTtFQUN6ckUsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQiw2QkFBNkI7RUFDN0IsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQixvQkFBb0I7RUFDcEIsTUFBTTtFQUNOLE9BQU87RUFDUCxTQUFTO0VBQ1QsUUFBUTtBQUNWOztBQUVBO0VBQ0UsNndDQUE2d0M7RUFDN3dDLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3Qiw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLHErQkFBcStCO0VBQ3IrQiwwQkFBMEI7RUFDMUIsb0JBQW9CO0VBQ3BCLE1BQU07RUFDTixPQUFPO0VBQ1AsU0FBUztFQUNULFFBQVE7RUFDUixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFdBQVcsRUFBRSxzREFBc0Q7RUFDbkUsWUFBWTtFQUNaLGdDQUFnQztFQUNoQyxVQUFVO0VBQ1Ysa0JBQWtCOztFQUVsQixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsVUFBVTtFQUNWLFlBQVk7RUFDWixxK0JBQXErQjtFQUNyK0IsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxrRUFBa0U7RUFDbEUsV0FBVztFQUNYLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFHRSxhQUFhO0VBR2IsdUJBQXVCO0VBR3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7O0FBQ0E7RUFDRTtJQUNFLFVBQVU7RUFDWjtBQUNGOztBQUNBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3ZpZGVvLXJvb20vdmlkZW8tcm9vbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3ZpZGVvUm9vbU5hdkJhciB7XHJcbiAgbWluLXdpZHRoOiA0MDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk0OTQ5O1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnN0cmVhbS1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5zaWRlbmF2LW1lbnUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ5NDk0OTtcclxuICBib3JkZXItbGVmdDogbm9uZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXRhYi1ib2R5LXdyYXBwZXIge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnRhYi1ncm91cCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWF0LWRyYXdlci1jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0OTQ5NDk7XHJcbn1cclxuXHJcbi5zaWRlbmF2LW1haW4ge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG1pbi1oZWlnaHQ6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XHJcbiAgbWluLWhlaWdodDogLW1vei1hdmFpbGFibGU7XHJcbn1cclxuXHJcbi5ib3VuZHMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0OTQ5NDk7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiA0MHB4O1xyXG4gIGJvdHRvbTogMDtcclxuICBtaW4td2lkdGg6IDQwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5ib3VuZHNMaWdodCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RmZGZkZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiFcclxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRva0JveCwgSW5jLlxyXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcclxuICogaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4gKi9cclxuXHJcbi5jdXN0b20tY2xhc3Mge1xyXG4gIG1pbi1oZWlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKipcclxuICogT1QgQmFzZSBzdHlsZXNcclxuICovXHJcblxyXG4vKiBSb290IE9UIG9iamVjdCwgdGhpcyBpcyB3aGVyZSBvdXIgQ1NTIHJlc2V0IGhhcHBlbnMgKi9cclxuLk9UX3Jvb3QsXHJcbi5PVF9yb290ICoge1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJvcmRlcjogMDtcclxuICBmb250LXNpemU6IDEwMCU7XHJcbiAgZm9udC1mYW1pbHk6ICdVYnVudHUnLCBzYW5zLXNlcmlmO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcclxufVxyXG5cclxuLk9UX2RpYWxvZy1jZW50ZXJpbmcge1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLk9UX2RpYWxvZy1jZW50ZXJpbmctY2hpbGQge1xyXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLk9UX2RpYWxvZyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuXHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1mYW1pbHk6ICdVYnVudHUnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBsaW5lLWhlaWdodDogMS40O1xyXG59XHJcblxyXG4uT1RfZGlhbG9nICoge1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIC13ZWJraXQtYm94LXNpemluZzogaW5oZXJpdDtcclxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xyXG59XHJcblxyXG4uT1RfY2xvc2VCdXR0b24ge1xyXG4gIGNvbG9yOiAjOTk5OTk5O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDMycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAxOHB4O1xyXG4gIHRvcDogMDtcclxufVxyXG5cclxuLk9UX2RpYWxvZy1tZXNzYWdlcyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uT1RfZGlhbG9nLW1lc3NhZ2VzLW1haW4ge1xyXG4gIG1hcmdpbi1ib3R0b206IDM2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XHJcblxyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcblxyXG4uT1RfZGlhbG9nLW1lc3NhZ2VzLW1pbm9yIHtcclxuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xyXG5cclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgY29sb3I6ICNhNGE0YTQ7XHJcbn1cclxuXHJcbi5PVF9kaWFsb2ctbWVzc2FnZXMtbWlub3Igc3Ryb25nIHtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLk9UX2RpYWxvZy1hY3Rpb25zLWNhcmQge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLk9UX2RpYWxvZy1idXR0b24tdGl0bGUge1xyXG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcblxyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjb2xvcjogIzk5OTk5OTtcclxufVxyXG4uT1RfZGlhbG9nLWJ1dHRvbi10aXRsZSBsYWJlbCB7XHJcbiAgY29sb3I6ICM5OTk5OTk7XHJcbn1cclxuXHJcbi5PVF9kaWFsb2ctYnV0dG9uLXRpdGxlIGEsXHJcbi5PVF9kaWFsb2ctYnV0dG9uLXRpdGxlIGE6bGluayxcclxuLk9UX2RpYWxvZy1idXR0b24tdGl0bGUgYTphY3RpdmUge1xyXG4gIGNvbG9yOiAjMDJhMWRlO1xyXG59XHJcblxyXG4uT1RfZGlhbG9nLWJ1dHRvbi10aXRsZSBzdHJvbmcge1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5PVF9kaWFsb2ctYnV0dG9uIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblxyXG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XHJcbiAgcGFkZGluZzogMCAxZW07XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxY2EzZGM7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLk9UX2RpYWxvZy1idXR0b246ZGlzYWJsZWQge1xyXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgb3BhY2l0eTogMC41O1xyXG59XHJcblxyXG4uT1RfZGlhbG9nLWJ1dHRvbi1sYXJnZSB7XHJcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XHJcbiAgcGFkZGluZy10b3A6IDlweDtcclxuICBwYWRkaW5nLWJvdHRvbTogOXB4O1xyXG5cclxuICBmb250LXdlaWdodDogMTAwO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG5cclxuLk9UX2RpYWxvZy1idXR0b24tc21hbGwge1xyXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gIHBhZGRpbmctdG9wOiA5cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDlweDtcclxuXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDQ0NDtcclxuICBjb2xvcjogIzk5OTk5OTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5PVF9kaWFsb2ctcHJvZ3Jlc3MtYmFyIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IC8qIHByZXZlbnRzIG1hcmdpbiBjb2xsYXBzZSAqL1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBtYXJnaW4tYm90dG9tOiA0MXB4O1xyXG5cclxuICBib3JkZXI6IDFweCBzb2xpZCAjNGU0ZTRlO1xyXG4gIGhlaWdodDogOHB4O1xyXG59XHJcblxyXG4uT1RfZGlhbG9nLXByb2dyZXNzLWJhci1maWxsIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyOWE0ZGE7XHJcbn1cclxuXHJcbi5PVF9kaWFsb2ctcGx1Z2luLXVwZ3JhZGluZyAuT1RfZGlhbG9nLXBsdWdpbi11cGdyYWRlLXBlcmNlbnRhZ2Uge1xyXG4gIGxpbmUtaGVpZ2h0OiA1NHB4O1xyXG5cclxuICBmb250LXNpemU6IDQ4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDEwMDtcclxufVxyXG5cclxuLyogSGVscGVycyAqL1xyXG5cclxuLk9UX2NlbnRlcmVkIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRvcDogNTAlO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLk9UX2RpYWxvZy1oaWRkZW4ge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5PVF9kaWFsb2ctYnV0dG9uLWJsb2NrIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLk9UX2RpYWxvZy1uby1uYXR1cmFsLW1hcmdpbiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLyogUHVibGlzaGVyIGFuZCBTdWJzY3JpYmVyIHN0eWxlcyAqL1xyXG5cclxuLk9UX3B1Ymxpc2hlcixcclxuLk9UX3N1YnNjcmliZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtaW4td2lkdGg6IDQ4cHg7XHJcbiAgbWluLWhlaWdodDogNDhweDtcclxufVxyXG5cclxuLk9UX3B1Ymxpc2hlciAuT1RfdmlkZW8tZWxlbWVudCxcclxuLk9UX3N1YnNjcmliZXIgLk9UX3ZpZGVvLWVsZW1lbnQge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xyXG5cclxuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XHJcbn1cclxuXHJcbi8qIFN0eWxlcyB0aGF0IGFyZSBhcHBsaWVkIHdoZW4gdGhlIHZpZGVvIGVsZW1lbnQgc2hvdWxkIGJlIG1pcnJvcmVkICovXHJcbi5PVF9wdWJsaXNoZXIuT1RfbWlycm9yZWQgLk9UX3ZpZGVvLWVsZW1lbnQge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgtMSwgMSk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgtMSwgMSk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xyXG4gIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XHJcbn1cclxuXHJcbi5PVF9zdWJzY3JpYmVyX2Vycm9yIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLk9UX3N1YnNjcmliZXJfZXJyb3IgPiBwIHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4vKiBUaGUgcHVibGlzaGVyL3N1YnNjcmliZXIgbmFtZS9tdXRlIGJhY2tncm91bmQgKi9cclxuLk9UX3B1Ymxpc2hlciAuT1RfYmFyLFxyXG4uT1Rfc3Vic2NyaWJlciAuT1RfYmFyLFxyXG4uT1RfcHVibGlzaGVyIC5PVF9uYW1lLFxyXG4uT1Rfc3Vic2NyaWJlciAuT1RfbmFtZSxcclxuLk9UX3B1Ymxpc2hlciAuT1RfYXJjaGl2aW5nLFxyXG4uT1Rfc3Vic2NyaWJlciAuT1RfYXJjaGl2aW5nLFxyXG4uT1RfcHVibGlzaGVyIC5PVF9hcmNoaXZpbmctc3RhdHVzLFxyXG4uT1Rfc3Vic2NyaWJlciAuT1RfYXJjaGl2aW5nLXN0YXR1cyxcclxuLk9UX3B1Ymxpc2hlciAuT1RfYXJjaGl2aW5nLWxpZ2h0LWJveCxcclxuLk9UX3N1YnNjcmliZXIgLk9UX2FyY2hpdmluZy1saWdodC1ib3gge1xyXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAtbXMtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGhlaWdodDogMzRweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbi5PVF9wdWJsaXNoZXIgLk9UX2JhcixcclxuLk9UX3N1YnNjcmliZXIgLk9UX2JhciB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG59XHJcblxyXG4uT1RfcHVibGlzaGVyIC5PVF9lZGdlLWJhci1pdGVtLFxyXG4uT1Rfc3Vic2NyaWJlciAuT1RfZWRnZS1iYXItaXRlbSB7XHJcbiAgei1pbmRleDogMTsgLyogcmVxdWlyZWQgdG8gZ2V0IGF1ZGlvIGxldmVsIG1ldGVyIHVuZGVybmVhdGggKi9cclxufVxyXG5cclxuLyogVGhlIHB1Ymxpc2hlci9zdWJzY3JpYmVyIG5hbWUgcGFuZWwvYXJjaGl2aW5nIHN0YXR1cyBiYXIgKi9cclxuLk9UX3B1Ymxpc2hlciAuT1RfbmFtZSxcclxuLk9UX3N1YnNjcmliZXIgLk9UX25hbWUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBsaW5lLWhlaWdodDogMzRweDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIHBhZGRpbmc6IDAgNHB4IDAgMzZweDtcclxufVxyXG5cclxuLk9UX3B1Ymxpc2hlciAuT1RfYXJjaGl2aW5nLXN0YXR1cyxcclxuLk9UX3N1YnNjcmliZXIgLk9UX2FyY2hpdmluZy1zdGF0dXMge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICB0b3A6IGF1dG87XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDM0cHg7XHJcbiAgcGFkZGluZzogMCA0cHg7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDM0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxuLk9UX21pY3JvIC5PVF9hcmNoaXZpbmctc3RhdHVzLFxyXG4uT1RfbWljcm86aG92ZXIgLk9UX2FyY2hpdmluZy1zdGF0dXMsXHJcbi5PVF9taW5pIC5PVF9hcmNoaXZpbmctc3RhdHVzLFxyXG4uT1RfbWluaTpob3ZlciAuT1RfYXJjaGl2aW5nLXN0YXR1cyB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLk9UX3B1Ymxpc2hlciAuT1RfYXJjaGl2aW5nLWxpZ2h0LWJveCxcclxuLk9UX3N1YnNjcmliZXIgLk9UX2FyY2hpdmluZy1saWdodC1ib3gge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICB0b3A6IGF1dG87XHJcbiAgYm90dG9tOiAwO1xyXG4gIHJpZ2h0OiBhdXRvO1xyXG4gIHdpZHRoOiAzNHB4O1xyXG4gIGhlaWdodDogMzRweDtcclxufVxyXG5cclxuLk9UX2FyY2hpdmluZy1saWdodCB7XHJcbiAgd2lkdGg6IDdweDtcclxuICBoZWlnaHQ6IDdweDtcclxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDE0cHg7XHJcbiAgbGVmdDogMTRweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTc1NzU3O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDVweCAxcHggIzU3NTc1NztcclxuICBib3gtc2hhZG93OiAwIDAgNXB4IDFweCAjNTc1NzU3O1xyXG59XHJcblxyXG4uT1RfYXJjaGl2aW5nLWxpZ2h0Lk9UX2FjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk3MGQxMztcclxuICBhbmltYXRpb246IE9UX3B1bHNlIDEuM3MgZWFzZS1pbjtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogT1RfcHVsc2UgMS4zcyBlYXNlLWluO1xyXG4gIC1tb3otYW5pbWF0aW9uOiBPVF9wdWxzZSAxLjNzIGVhc2UtaW47XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IE9UX3B1bHNlIDEuM3MgZWFzZS1pbjtcclxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gIC1tb3otYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIE9UX3B1bHNlIHtcclxuICAwJSB7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwcHggMHB4ICNjNzAwMTk7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMHB4IDBweCAjYzcwMDE5O1xyXG4gIH1cclxuXHJcbiAgMzAlIHtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDVweCAxcHggI2M3MDAxOTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggMXB4ICNjNzAwMTk7XHJcbiAgfVxyXG5cclxuICA1MCUge1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgNXB4IDFweCAjYzcwMDE5O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDVweCAxcHggI2M3MDAxOTtcclxuICB9XHJcblxyXG4gIDgwJSB7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwcHggMHB4ICNjNzAwMTk7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMHB4IDBweCAjYzcwMDE5O1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwcHggMHB4ICNjNzAwMTk7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMHB4IDBweCAjYzcwMDE5O1xyXG4gIH1cclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIE9UX3B1bHNlIHtcclxuICAwJSB7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwcHggMHB4ICNjNzAwMTk7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMHB4IDBweCAjYzcwMDE5O1xyXG4gIH1cclxuXHJcbiAgMzAlIHtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDVweCAxcHggI2M3MDAxOTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggMXB4ICNjNzAwMTk7XHJcbiAgfVxyXG5cclxuICA1MCUge1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgNXB4IDFweCAjYzcwMDE5O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDVweCAxcHggI2M3MDAxOTtcclxuICB9XHJcblxyXG4gIDgwJSB7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwcHggMHB4ICNjNzAwMTk7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMHB4IDBweCAjYzcwMDE5O1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwcHggMHB4ICNjNzAwMTk7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMHB4IDBweCAjYzcwMDE5O1xyXG4gIH1cclxufVxyXG5cclxuLk9UX21pbmkgLk9UX2JhcixcclxuLk9UX2Jhci5PVF9tb2RlLW1pbmksXHJcbi5PVF9iYXIuT1RfbW9kZS1taW5pLWF1dG8ge1xyXG4gIGJvdHRvbTogMDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5PVF9taW5pIC5PVF9uYW1lLk9UX21vZGUtb2ZmLFxyXG4uT1RfbWluaSAuT1RfbmFtZS5PVF9tb2RlLW9uLFxyXG4uT1RfbWluaSAuT1RfbmFtZS5PVF9tb2RlLWF1dG8sXHJcbi5PVF9taW5pOmhvdmVyIC5PVF9uYW1lLk9UX21vZGUtYXV0byB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLk9UX3B1Ymxpc2hlciAuT1RfbmFtZSxcclxuLk9UX3N1YnNjcmliZXIgLk9UX25hbWUge1xyXG4gIGxlZnQ6IDEwcHg7XHJcbiAgcmlnaHQ6IDM3cHg7XHJcbiAgaGVpZ2h0OiAzNHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxufVxyXG5cclxuLk9UX3B1Ymxpc2hlciAuT1RfbXV0ZSxcclxuLk9UX3N1YnNjcmliZXIgLk9UX211dGUge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWluZGVudDogLTk5OTllbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcblxyXG4uT1RfcHVibGlzaGVyIC5PVF9tdXRlLFxyXG4uT1Rfc3Vic2NyaWJlciAuT1RfbXV0ZSB7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gIGhlaWdodDogMzZweDtcclxuICB3aWR0aDogMzdweDtcclxufVxyXG5cclxuLk9UX21pbmkgLk9UX211dGUsXHJcbi5PVF9wdWJsaXNoZXIuT1RfbWluaSAuT1RfbXV0ZS5PVF9tb2RlLWF1dG8uT1RfbW9kZS1vbi1ob2xkLFxyXG4uT1Rfc3Vic2NyaWJlci5PVF9taW5pIC5PVF9tdXRlLk9UX21vZGUtYXV0by5PVF9tb2RlLW9uLWhvbGQge1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICByaWdodDogYXV0bztcclxuICBtYXJnaW4tdG9wOiAtMThweDtcclxuICBtYXJnaW4tbGVmdDogLTE4LjVweDtcclxuICBib3JkZXItbGVmdDogbm9uZTtcclxufVxyXG5cclxuLk9UX3B1Ymxpc2hlciAuT1RfbXV0ZSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQk1BQUFBY0NBTUFBQUMwMkhRckFBQUExVkJNVkVVQUFBRDMrUGozK1BqMytQajMrUGozK1BqMytQajMrUGozK1BqMytQbjMrUGozK1BqMytQajMrUGozK1BqMytQajMrUGozK1BqMytQajMrUGozK1BqMytQajMrUGozK1BqMytQajMrUGozK1BqMytQajMrUGozK1BqMytQajMrUGozK1BqMytQajMrUGozK1BqMytQajMrUGozK1BqMytQajMrUGozK1BqMytQajMrUGozK1BqMytQajMrUGozK1BqMytQajMrUG4zK1BqMytQajMrUGozK1BqMytQajMrUGozK1BqMytQajMrUGozK1BqMytQajMrUGozK1BqMytQajMrUGozK1BqMytQajM5L2ozK1BqMytQbjQrUGsvSlJNbEFBQUFRM1JTVGxNQUJBVUhDUW9MRGhBUUVSd2RIaUFqTGpBeE9EOUFTRkJSVmwxbWJuWjZmSDJMakkrUWthV3FyckMxdUx6QXdjWEp5Y3JMMU5YajVPZm82dTN3OWZyNy9QMytkNE0zK1FBQUFRQkpSRUZVR0JsVndZZENnbEFBQmRDTGxyNVVuaWptM2hNVXRCemxCTFNyLy85SmdVVG9PUWdWSmdjZUpnVThhSGdNZUEzOEs1MFpPcGNRbVRQd2N5WG4rSk04TTNKSklxUXlwaUlrZVhlbFR5SWtHWlB3S1MxTk1pYTFsZ0tUVmthRTNvUVFHWXNtSE5xU01XblRnVUZiTWladEdsRDJkcGF4ckwxWGdNMGk0Wks4TWVBbUZoc0FzMjlNR1puaWF3YWdTNjNvTU9RVU5YWUI1RDBEMVJNRHB5b01Mdy9maUUyb2cvVitQVkRSNUFpQmwwLzJVd2lrK3Z4NHhWM2E1RzVZZTY4TmQxY3pqVWpaY2ttNlZobVBjaVJ6ZUNaSUNqd1RKQVZpUXErM2UrU3QxNjdyQW9ISzhzTFlaVmtCWVBDWkFaL2VHYSsyUjVMSDdXcmMwWUZmL085SjN5QkRGYW9BQUFBQVNVVk9SSzVDWUlJPSk7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogOXB4IDVweDtcclxufVxyXG5cclxuLk9UX3B1Ymxpc2hlciAuT1RfbXV0ZS5PVF9hY3RpdmUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJVQUFBQWRDQVlBQUFCRlJDZjdBQUFEY0VsRVFWUklpYVdWWFdoY1JSVEhmN05OZDJhRHRVS01JalRwZzR1ZkZJdWlVT21ERVdtMFZpM1ZZaFhScUlnZ1FoNHNXSkZTaWc5K29PaFRLU3BJUlVXTUlCSXIya3B0b1RiZ1U2b294Q2lJalIrMTRrY0ptZjlzTmNlSG5kM2VibmMzVXY5d3VYZk96UHptbkRNejV6b3pHd2RXQWJjNjV3NVJVSlE4Y0Myd0RKZ0ZKaW9oL01KQ01yTnhxMnZPeks0SG1JdlJSZW14S1AwUkpXdDUzbzdTK2QyWXpzeDZnUStBSVVEQW5VcXBCTHpYWmQ0UllGVWxoQi9iZFphY2MzUEFPbUFjQ01DN3dmdkZ3TE5kb0FQQXl4MDliWHlZV1JsNEU3Z0RtQWRHbE5LRndMWXU4R29saE85Tzg3UkpkNjRHYk1yZ0V2QjY4UDRvc01XZFhMdFZWN2N6bG9vTnBWUldTczhETzdOcFIvQiszckJIc3ZldENndENNVHh3UUNtOUJieVFyYzhGNy91QmV4M3VSQ2VYTzBQclVaNE5mS3lVUGdXZXlqM2JnL2NyRE5zSVJHd0JhSlFHb3JRM1N2ZG4yd0hnYzJCVUtiMERQSkh0andmdmJ3UnVjYzd0eitOK2k5TEZVZG9YcGZWTjM2STBDVndCVEZJL3E5ZTFMUHhUOFA0cVlFZHU3MHExMm1Zeld3MU1ZUXpqZUpGNnpxK3NoSEM0Qjdqa2xPQlBQL1R6U3VuaDRQMER3S3ZBZmI1YzlrcnBlK0Njd3NFb1pkYmhFdkJNOXd4UkFsNVJTaGNBOXdBbmdFM0IrOHRMcGRMdXdyaHA0TU5tSzBwZlJXa3lTcjdOWFM4K0w1blpiV1pXeS9WaW4xSWFpdEpuVVRxdndldko3MWxnU1NXRUZLVWZIRzdRMm0veHFGSmFHcnkvR1hnZkdQTGw4bUpnclhQdXIySm9VQzhReTNPcEcrc0FiR2hFS1QwRXJBV09BNnVCUFdiVzF3cjlCT2dGYmdLZXpvdDBrQVBZcUpRQTFnQy9BOWNBKzgyc3Z6a3NTbjFSK2pOS1gwU3BuTS9lMXgzeXFpZzkySmhyWml2TTdGak84YlNaTFN1Q1IvT2sxNkswS01OSG9qUVdwWWtvN1k3UzFpZ041UEUzUk9sNGxOYVoyVVZtTnBQQlUwMW9ydlp2WlBDZUtGWGJCUitsRUtWdFVhcEZhU1pLZzluanFwbDlhV1lUcm1YQ0ltQTdzQ1diOWxLL2pqOVRyd2tyZ0ExQUgzQVF1S3NTd2t6YnJMZnhwZ3BzQnRZRHhmL1IzeG0yRXhpcmhOQ3VISFpYVHNtUndpYXQrUy96U3QwNmV5c1ZBLzRwbUdyL0czcW02aWsyOHYyOUZLZ0NnOEJTNnB2UzBLTlJHZ1orQmI0RnBzeHNPa2ZVbE11d0RjQldZT1VaT0hZTTJBVThXUW1oQmlmRHY3ME83UGpYN0taKzRHN2czRk04emQ2dUJJYUJ5NEFxeG5JY1p3RkxDb3ZQQWhFNFNqMzhiNEJEd0VlVkVGS0Q5Uzk0S2hqbjQ4NnYzUUFBQUFCSlJVNUVya0pnZ2c9PSk7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogOXB4IDRweDtcclxufVxyXG5cclxuLk9UX3N1YnNjcmliZXIgLk9UX211dGUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJjQUFBQVRDQVlBQUFCN3U1YTJBQUFCeDBsRVFWUTRqYVdVdjQ4TlVSaUduM09ObUNzMzJaQmQyOGh0MWdxeVpBa0YyMXlsUWtFaVNwMmVocERsRDFCb0ZHcXFWZEpvaFlLSTdNYVB4TW9WTmdoQ1dNRis3eWJMVWV3bk9YZmNNV085eWVRODU3em5lOCtYbVpPQkdqSnByMGt2VElvbXZUWnBTNTI2VUNPNERVd0Q2NEZqd0NGZ3Fabm5SK29jOExmZ3pLUTczdkdzcjQyWnRHalNRRlY5bzhLZkJDYWNad0NhZWY0WW1BZjJyempjcE4zQTJXU3BtL0Fzc0tjcVBETnBEQmpzNDEwQ1ZpWHpUd2svQTdiMUM0d3hEZ09uZ0FzWmNBWFkyYnVEZnAvNlM0RjNsRFM4RGpnQnpEV0FqWC9ZL2UvUWdZUy9BaHNLSGErT01RNkdFSjRDajRCT0F4Z3E2YUNvd3ladGRmNE90QXIrRkhETytSNHdXblZiaWhyM2NRbklDdDRib08zOEdXajlhL2ljandPQUN0NG00SzN6RVBBK0F4YUF0VFdDbndOM2x6SGtFTDhWL09QQUd1ZDl3SzJHRjlYUjFXYWUvMXpHMkFJK3BHWUk0VlVJb1J0akhBYzJBOWN6NExSUGV2WUNaK2k5LzRzSnQ0R1hKVTEwZ2FQQXpkSTJUVHJvLzVUZno4WEVlMkxTWkdteHEvU0ROdlA4Qm5BNVdScng0QndZQmU2dk9OeDFFbmpvdkd2QkxBQWQ0QWR3dXlxOFVpYU5tRFR2cithOFNROU11dmJmd2NrQkhaUGUrUUVmVGRwZXArNFhabVBCSGlIZ3o3NEFBQUFBU1VWT1JLNUNZSUk9KTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA4cHggN3B4O1xyXG59XHJcblxyXG4uT1Rfc3Vic2NyaWJlciAuT1RfbXV0ZS5PVF9hY3RpdmUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJnQUFBQVVDQVlBQUFDWHRmMkRBQUFDdGtsRVFWUTRqWjJWU1lpVVJ4VEhmKy9UOU5jOWlSckJ1WXlTbUlzWFVVOWlGTUVGRVJSQnZBakpMVVFpNWlvaUh2U1NjZlRtZ3FDNFhBVDFaSWdMdUpIa0lDYWFRQWdLSTJoQVVCVDMwYmpVcTdiYnY0ZXVrWEswMjlGMytlcXR2L2ZxSzZxUWRFblNOVW1UNkNEQi9idmdmak80Tjl6ajJSRDgwMDd4ZzFJQUJrd0V6a21hMHFiNFBHQVBNQlpZTHRTRDhlTndBRWpxVGxOSTBnTkpNNFlVN3c3dXQ0TzdndnVoWkZzUjNDOE5DNUJCTGlUSVkwbXpNOEF2cWJpQysrcGsrekxwRTk1WHV3QXdzM3ZBUXVCUFlEUndXdEw4NFA0dHNEU0x2NW9hdWc0RVlPYXdBTUY5ak1kb0x4cU5aY0R2UUEwNFVWWXFMNEcvc3ZqN0FGMjFtaEpzY3J2Q2tzWUJGTzd4YzJBQUdHZzJtcmRqdmY0cmNBeW9tTm4rc2xMWm1VRUdCZ3NZZGg5NDV4WkptZ3Zja0RTckVKcEs2eVNCZ1Y2cTEyTzhBQndHUGpHemZXV2xzamROOXJwam9TZkErRFlEWEFSR0Frc0s0SXMzWEMxVWI0ejFmNENEUUdGbXU2dGxlUVNZazBVK3A3V1ZlZWZMSmMwMHM0ZkFlV0I2UWV1bnZqMG0ydWd4OWdPN2ttbHJ0U3h2QmZjeTZmWFVaUzZyZ0cvUytqTFFVd0NWTm1NQzlIcU0xNEV0U2Urcmx1V2F6TjhZRXY4SXFLWjFFMXFuYUlETzB1Y3gzZ1g2a3Y2VHBNM0FNK0QvSWJHamdQNjAvZ3E0V1FBMzNnTUEyT1F4UGdIV0pYMXR0U3dMNEZBZVpHWUxnQjJTYXNCczRBOEw3cU9CZjlNMHVYUUIzYStUTVlTbVZjdHlEckE5bWZjQks4MnNtU2RLV2dDY0FhYTFiVG00ZnhiYy84dXVDUVgzUmFuQUQ1S2E2V281SUduRTBIeEpQWjAzcFFYNU9yZzNNc0QzQU81eFhMUFpYSjlCamtycWRGZzZRalprZ0czSnRzdzkzcEcwVkZJOVFVNUs2dm9ZUUJIY1R5ZEFmd2hlQkk5SGd2dlBBSklXUzNxZUlMOUpHdlV4a083Z2ZpMUJycVR2d2tHL3BQbVNuaWJJcVR6WFBnQXlFVmdCakFFdTFxclZQYmsvUFZUSGdiL05iUEdnL1JWSXpPUXF6U1RCYVFBQUFBQkpSVTVFcmtKZ2dnPT0pO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDdweCA3cHg7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBTdHlsZXMgZm9yIGRpc3BsYXkgbW9kZXNcclxuICpcclxuICogTm90ZTogSXQncyBpbXBvcnRhbnQgdGhhdCB0aGVzZSBjb21wbGV0ZWx5IGNvbnRyb2wgdGhlIGRpc3BsYXkgYW5kIG9wYWNpdHlcclxuICogYXR0cmlidXRlcywgbm8gb3RoZXIgc2VsZWN0b3JzIHNob3VsZCBhdGVtcHQgdG8gY2hhbmdlIHRoZW0uXHJcbiAqL1xyXG5cclxuLyogRGVmYXVsdCBkaXNwbGF5IG1vZGUgdHJhbnNpdGlvbnMgZm9yIHZhcmlvdXMgY2hyb21lIGVsZW1lbnRzICovXHJcbi5PVF9wdWJsaXNoZXIgLk9UX2VkZ2UtYmFyLWl0ZW0sXHJcbi5PVF9zdWJzY3JpYmVyIC5PVF9lZGdlLWJhci1pdGVtIHtcclxuICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IHRvcCwgYm90dG9tLCBvcGFjaXR5O1xyXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRvcCwgYm90dG9tLCBvcGFjaXR5O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41cztcclxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbn1cclxuXHJcbi5PVF9wdWJsaXNoZXIgLk9UX2VkZ2UtYmFyLWl0ZW0uT1RfbW9kZS1vZmYsXHJcbi5PVF9zdWJzY3JpYmVyIC5PVF9lZGdlLWJhci1pdGVtLk9UX21vZGUtb2ZmLFxyXG4uT1RfcHVibGlzaGVyIC5PVF9lZGdlLWJhci1pdGVtLk9UX21vZGUtYXV0byxcclxuLk9UX3N1YnNjcmliZXIgLk9UX2VkZ2UtYmFyLWl0ZW0uT1RfbW9kZS1hdXRvLFxyXG4uT1RfcHVibGlzaGVyIC5PVF9lZGdlLWJhci1pdGVtLk9UX21vZGUtbWluaS1hdXRvLFxyXG4uT1Rfc3Vic2NyaWJlciAuT1RfZWRnZS1iYXItaXRlbS5PVF9tb2RlLW1pbmktYXV0byB7XHJcbiAgdG9wOiAtMjVweDtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4uT1RfcHVibGlzaGVyIC5PVF9lZGdlLWJhci1pdGVtLk9UX21vZGUtb2ZmLFxyXG4uT1Rfc3Vic2NyaWJlciAuT1RfZWRnZS1iYXItaXRlbS5PVF9tb2RlLW9mZiB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLk9UX21pbmkgLk9UX211dGUuT1RfbW9kZS1hdXRvLFxyXG4uT1RfcHVibGlzaGVyIC5PVF9tdXRlLk9UX21vZGUtbWluaS1hdXRvLFxyXG4uT1Rfc3Vic2NyaWJlciAuT1RfbXV0ZS5PVF9tb2RlLW1pbmktYXV0byB7XHJcbiAgdG9wOiA1MCU7XHJcbn1cclxuXHJcbi5PVF9wdWJsaXNoZXIgLk9UX2VkZ2UtYmFyLWl0ZW0uT1RfZWRnZS1ib3R0b20uT1RfbW9kZS1vZmYsXHJcbi5PVF9zdWJzY3JpYmVyIC5PVF9lZGdlLWJhci1pdGVtLk9UX2VkZ2UtYm90dG9tLk9UX21vZGUtb2ZmLFxyXG4uT1RfcHVibGlzaGVyIC5PVF9lZGdlLWJhci1pdGVtLk9UX2VkZ2UtYm90dG9tLk9UX21vZGUtYXV0byxcclxuLk9UX3N1YnNjcmliZXIgLk9UX2VkZ2UtYmFyLWl0ZW0uT1RfZWRnZS1ib3R0b20uT1RfbW9kZS1hdXRvLFxyXG4uT1RfcHVibGlzaGVyIC5PVF9lZGdlLWJhci1pdGVtLk9UX2VkZ2UtYm90dG9tLk9UX21vZGUtbWluaS1hdXRvLFxyXG4uT1Rfc3Vic2NyaWJlciAuT1RfZWRnZS1iYXItaXRlbS5PVF9lZGdlLWJvdHRvbS5PVF9tb2RlLW1pbmktYXV0byB7XHJcbiAgdG9wOiBhdXRvO1xyXG4gIGJvdHRvbTogLTI1cHg7XHJcbn1cclxuXHJcbi5PVF9wdWJsaXNoZXIgLk9UX2VkZ2UtYmFyLWl0ZW0uT1RfbW9kZS1vbixcclxuLk9UX3N1YnNjcmliZXIgLk9UX2VkZ2UtYmFyLWl0ZW0uT1RfbW9kZS1vbixcclxuLk9UX3B1Ymxpc2hlciAuT1RfZWRnZS1iYXItaXRlbS5PVF9tb2RlLWF1dG8uT1RfbW9kZS1vbi1ob2xkLFxyXG4uT1Rfc3Vic2NyaWJlciAuT1RfZWRnZS1iYXItaXRlbS5PVF9tb2RlLWF1dG8uT1RfbW9kZS1vbi1ob2xkLFxyXG4uT1RfcHVibGlzaGVyOmhvdmVyIC5PVF9lZGdlLWJhci1pdGVtLk9UX21vZGUtYXV0byxcclxuLk9UX3N1YnNjcmliZXI6aG92ZXIgLk9UX2VkZ2UtYmFyLWl0ZW0uT1RfbW9kZS1hdXRvLFxyXG4uT1RfcHVibGlzaGVyOmhvdmVyIC5PVF9lZGdlLWJhci1pdGVtLk9UX21vZGUtbWluaS1hdXRvLFxyXG4uT1Rfc3Vic2NyaWJlcjpob3ZlciAuT1RfZWRnZS1iYXItaXRlbS5PVF9tb2RlLW1pbmktYXV0byB7XHJcbiAgdG9wOiAwO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5PVF9taW5pIC5PVF9tdXRlLk9UX21vZGUtb24sXHJcbi5PVF9taW5pOmhvdmVyIC5PVF9tdXRlLk9UX21vZGUtYXV0byxcclxuLk9UX211dGUuT1RfbW9kZS1taW5pLFxyXG4uT1Rfcm9vdDpob3ZlciAuT1RfbXV0ZS5PVF9tb2RlLW1pbmktYXV0byB7XHJcbiAgdG9wOiA1MCU7XHJcbn1cclxuXHJcbi5PVF9wdWJsaXNoZXIgLk9UX2VkZ2UtYmFyLWl0ZW0uT1RfZWRnZS1ib3R0b20uT1RfbW9kZS1vbixcclxuLk9UX3N1YnNjcmliZXIgLk9UX2VkZ2UtYmFyLWl0ZW0uT1RfZWRnZS1ib3R0b20uT1RfbW9kZS1vbixcclxuLk9UX3B1Ymxpc2hlcjpob3ZlciAuT1RfZWRnZS1iYXItaXRlbS5PVF9lZGdlLWJvdHRvbS5PVF9tb2RlLWF1dG8sXHJcbi5PVF9zdWJzY3JpYmVyOmhvdmVyIC5PVF9lZGdlLWJhci1pdGVtLk9UX2VkZ2UtYm90dG9tLk9UX21vZGUtYXV0byB7XHJcbiAgdG9wOiBhdXRvO1xyXG4gIGJvdHRvbTogMDtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4vKiBMb2FkIGFuaW1hdGlvbiAqL1xyXG4uT1Rfcm9vdCAuT1RfdmlkZW8tbG9hZGluZyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbn1cclxuXHJcbi5PVF9yb290IC5PVF92aWRlby1sb2FkaW5nIC5PVF92aWRlby1sb2FkaW5nLXNwaW5uZXIge1xyXG4gIGJhY2tncm91bmQ6IHVybChkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lJSFpwWlhkQ2IzZzlJaTB5TUNBdE1qQWdNalF3SURJME1DSStQR1JsWm5NK1BHeHBibVZoY2tkeVlXUnBaVzUwSUdsa1BTSmhJaUI0TWowaU1DSWdlVEk5SWpFaVBqeHpkRzl3SUc5bVpuTmxkRDBpTUNJZ2MzUnZjQzFqYjJ4dmNqMGlJMlptWmlJZ2MzUnZjQzF2Y0dGamFYUjVQU0l3SWk4K1BITjBiM0FnYjJabWMyVjBQU0l4SWlCemRHOXdMV052Ykc5eVBTSWpabVptSWlCemRHOXdMVzl3WVdOcGRIazlJakFpTHo0OEwyeHBibVZoY2tkeVlXUnBaVzUwUGp4c2FXNWxZWEpIY21Ga2FXVnVkQ0JwWkQwaVlpSWdlREU5SWpFaUlIZ3lQU0l3SWlCNU1qMGlNU0krUEhOMGIzQWdiMlptYzJWMFBTSXdJaUJ6ZEc5d0xXTnZiRzl5UFNJalptWm1JaUJ6ZEc5d0xXOXdZV05wZEhrOUlqQWlMejQ4YzNSdmNDQnZabVp6WlhROUlqRWlJSE4wYjNBdFkyOXNiM0k5SWlObVptWWlJSE4wYjNBdGIzQmhZMmwwZVQwaUxqQTRJaTgrUEM5c2FXNWxZWEpIY21Ga2FXVnVkRDQ4YkdsdVpXRnlSM0poWkdsbGJuUWdhV1E5SW1NaUlIZ3hQU0l4SWlCNE1qMGlNQ0lnZVRFOUlqRWlQanh6ZEc5d0lHOW1abk5sZEQwaU1DSWdjM1J2Y0MxamIyeHZjajBpSTJabVppSWdjM1J2Y0MxdmNHRmphWFI1UFNJdU1EZ2lMejQ4YzNSdmNDQnZabVp6WlhROUlqRWlJSE4wYjNBdFkyOXNiM0k5SWlObVptWWlJSE4wYjNBdGIzQmhZMmwwZVQwaUxqRTJJaTgrUEM5c2FXNWxZWEpIY21Ga2FXVnVkRDQ4YkdsdVpXRnlSM0poWkdsbGJuUWdhV1E5SW1RaUlIZ3lQU0l3SWlCNU1UMGlNU0krUEhOMGIzQWdiMlptYzJWMFBTSXdJaUJ6ZEc5d0xXTnZiRzl5UFNJalptWm1JaUJ6ZEc5d0xXOXdZV05wZEhrOUlpNHhOaUl2UGp4emRHOXdJRzltWm5ObGREMGlNU0lnYzNSdmNDMWpiMnh2Y2owaUkyWm1aaUlnYzNSdmNDMXZjR0ZqYVhSNVBTSXVNek1pTHo0OEwyeHBibVZoY2tkeVlXUnBaVzUwUGp4c2FXNWxZWEpIY21Ga2FXVnVkQ0JwWkQwaVpTSWdlREk5SWpFaUlIa3hQU0l4SWo0OGMzUnZjQ0J2Wm1aelpYUTlJakFpSUhOMGIzQXRZMjlzYjNJOUlpTm1abVlpSUhOMGIzQXRiM0JoWTJsMGVUMGlMak16SWk4K1BITjBiM0FnYjJabWMyVjBQU0l4SWlCemRHOXdMV052Ykc5eVBTSWpabVptSWlCemRHOXdMVzl3WVdOcGRIazlJaTQyTmlJdlBqd3ZiR2x1WldGeVIzSmhaR2xsYm5RK1BHeHBibVZoY2tkeVlXUnBaVzUwSUdsa1BTSm1JaUI0TWowaU1TSWdlVEk5SWpFaVBqeHpkRzl3SUc5bVpuTmxkRDBpTUNJZ2MzUnZjQzFqYjJ4dmNqMGlJMlptWmlJZ2MzUnZjQzF2Y0dGamFYUjVQU0l1TmpZaUx6NDhjM1J2Y0NCdlptWnpaWFE5SWpFaUlITjBiM0F0WTI5c2IzSTlJaU5tWm1ZaUx6NDhMMnhwYm1WaGNrZHlZV1JwWlc1MFBqeHRZWE5ySUdsa1BTSm5JajQ4WnlCbWFXeHNQU0p1YjI1bElpQnpkSEp2YTJVdGQybGtkR2c5SWpRd0lqNDhjR0YwYUNCemRISnZhMlU5SW5WeWJDZ2pZU2tpSUdROUlrMDROaTQyTFRVd1lURXdNQ0F4TURBZ01DQXdJREVnTUNBeE1EQWlJSFJ5WVc1elptOXliVDBpZEhKaGJuTnNZWFJsS0RFd01DQXhNREFwSWk4K1BIQmhkR2dnYzNSeWIydGxQU0oxY213b0kySXBJaUJrUFNKTk9EWXVOaUExTUVFeE1EQWdNVEF3SURBZ01DQXhJREFnTVRBd0lpQjBjbUZ1YzJadmNtMDlJblJ5WVc1emJHRjBaU2d4TURBZ01UQXdLU0l2UGp4d1lYUm9JSE4wY205clpUMGlkWEpzS0NOaktTSWdaRDBpVFRBZ01UQXdZVEV3TUNBeE1EQWdNQ0F3SURFdE9EWXVOaTAxTUNJZ2RISmhibk5tYjNKdFBTSjBjbUZ1YzJ4aGRHVW9NVEF3SURFd01Da2lMejQ4Y0dGMGFDQnpkSEp2YTJVOUluVnliQ2dqWkNraUlHUTlJazB0T0RZdU5pQTFNR0V4TURBZ01UQXdJREFnTUNBeElEQXRNVEF3SWlCMGNtRnVjMlp2Y20wOUluUnlZVzV6YkdGMFpTZ3hNREFnTVRBd0tTSXZQanh3WVhSb0lITjBjbTlyWlQwaWRYSnNLQ05sS1NJZ1pEMGlUUzA0Tmk0MkxUVXdRVEV3TUNBeE1EQWdNQ0F3SURFZ01DMHhNREFpSUhSeVlXNXpabTl5YlQwaWRISmhibk5zWVhSbEtERXdNQ0F4TURBcElpOCtQSEJoZEdnZ2MzUnliMnRsUFNKMWNtd29JMllwSWlCa1BTSk5NQzB4TURCaE1UQXdJREV3TUNBd0lEQWdNU0E0Tmk0MklEVXdJaUIwY21GdWMyWnZjbTA5SW5SeVlXNXpiR0YwWlNneE1EQWdNVEF3S1NJdlBqd3ZaejQ4TDIxaGMycytQQzlrWldaelBqeHlaV04wSUhkcFpIUm9QU0l4TURBbElpQm9aV2xuYUhROUlqRXdNQ1VpSUhnOUlpMHlNQ0lnZVQwaUxUSXdJaUJ0WVhOclBTSjFjbXdvSTJjcElpQm1hV3hzUFNJalptWm1JaTgrUEM5emRtYyspXHJcbiAgICBuby1yZXBlYXQ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAzMnB4O1xyXG4gIGhlaWdodDogMzJweDtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xyXG4gIG1hcmdpbi10b3A6IC0xNnB4O1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBPVF9zcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcclxuICBhbmltYXRpb246IE9UX3NwaW4gMnMgbGluZWFyIGluZmluaXRlO1xyXG59XHJcbkAtd2Via2l0LWtleWZyYW1lcyBPVF9zcGluIHtcclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBPVF9zcGluIHtcclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59XHJcblxyXG4uT1RfcHVibGlzaGVyLk9UX2xvYWRpbmcgLk9UX3ZpZGVvLWxvYWRpbmcsXHJcbi5PVF9zdWJzY3JpYmVyLk9UX2xvYWRpbmcgLk9UX3ZpZGVvLWxvYWRpbmcge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uT1RfdmlkZW8tY2VudGVyaW5nIHtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5PVF92aWRlby1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLk9UX3ZpZGVvLXBvc3RlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcblxyXG4gIG9wYWNpdHk6IDAuMjU7XHJcblxyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjJhV1YzUW05NFBTSXdJREFnTkRjeElEUTJOQ0lnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JajQ4YkdsdVpXRnlSM0poWkdsbGJuUWdhV1E5SW1FaUlIZ3lQU0l3SWlCNU1qMGlNU0krUEhOMGIzQWdiMlptYzJWMFBTSTJOaTQyTmlVaUlITjBiM0F0WTI5c2IzSTlJaU5tWm1ZaUx6NDhjM1J2Y0NCdlptWnpaWFE5SWpFd01DVWlJSE4wYjNBdFkyOXNiM0k5SWlObVptWWlJSE4wYjNBdGIzQmhZMmwwZVQwaU1DSXZQand2YkdsdVpXRnlSM0poWkdsbGJuUStQSEJoZEdnZ1ptbHNiRDBpZFhKc0tDTmhLU0lnWkQwaVRUYzVJRE13T0dNeE5DNHlOUzAyTGpVZ05UUXVNalV0TVRrdU56VWdOekV0TWprZ09TMHpMakkxSURJMUxUSXhJREkxTFRJeGN6TXVOelV0TVRNZ015MHlNbU10TVM0M05TMDJMamMxTFRFMUxUUXpMVEUxTFRRekxUSXVOU0F6TFRRdU56UXhJRE11TWpVNUxUY2dNUzB6TGpJMUxUY3VOUzB5TUM0MUxUUTBMalV0TVRZdE5UY2dNUzR5TlMwM0xqVWdNVEF0TmlBeE1DMDJMVEV4TGpJMUxUTXpMamMxTFRndE5qY3RPQzAyTjNNdU1EY3pMVGN1TXpRMklEWXRNVFZqTFRNdU5EZ3VOak0zTFRrZ05DMDVJRFFnTWk0MU5qTXRNVEV1TnpJM0lERTFMVEl4SURFMUxUSXhJQzR4TkRndExqTXhNaTB4TGpNeU1TMHhMalExTkMweE1DQXhJREV1TlMweUxqYzRJREUyTGpZM05TMDRMalkxTkNBek1DMHhNU0F6TGpjNE55MDVMak0yTVNBeE1pNDNPREl0TVRjdU16azRJREl5TFRJeUxUSXVNelkxSURNdU1UTXpMVE1nTmkweklEWnpNVFV1TmpRM0xUZ3VNRGc0SURReExUWmpMVEU1TGpjMUlESXRNalFnTmkweU5DQTJjemMwTGpVdE1UQXVOelVnTVRBMElETTNZemN1TlNBNUxqVWdNalF1TnpVZ05UVXVOelVnTVRBZ09Ea2dNeTQzTlMweExqVWdOQzQxTFRRdU5TQTVJREVnTGpJMUlERTBMamMxTFRFeExqVWdOak10TVRrZ05qSXRNaTQzTlNBeExUUXRNeTAwTFRNdE1UQXVOelVnTWprdU5TMHhOQ0F6T0MweE5DQXpPQzB5SURRdU1qVXRNeTQzTlNBeE9DNDFMVEVnTWpJZ01TNHlOU0EwTGpVZ01qTWdNak1nTWpNZ01qTnNNVEkzSURVell6TTNJRE0xSURJeklERXpOU0F5TXlBeE16Vk1NQ0EwTmpSekxUTXRPVFl1TnpVZ01UUXRNVEl3WXpVdU1qVXROaTR5TlNBeU1TNDNOUzB4T1M0M05TQTJOUzB6Tm5vaUx6NDhMM04yWno0PSk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBhdXRvIDc2JTtcclxufVxyXG5cclxuLk9UX2ZpdC1tb2RlLWNvdmVyIC5PVF92aWRlby1lbGVtZW50IHtcclxuICAtby1vYmplY3QtZml0OiBjb3ZlcjtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuLyogV29ya2Fyb3VuZCBmb3IgaU9TIGZyZWV6aW5nIGlzc3VlIHdoZW4gY3JvcHBpbmcgdmlkZW9zICovXHJcbi8qIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzY0MzkgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XHJcbiAgLk9UX3N1YnNjcmliZXIuT1RfRm9yY2VDb250YWluLk9UX2ZpdC1tb2RlLWNvdmVyIC5PVF92aWRlby1lbGVtZW50IHtcclxuICAgIC1vLW9iamVjdC1maXQ6IGNvbnRhaW4gIWltcG9ydGFudDtcclxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW4gIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5PVF9maXQtbW9kZS1jb250YWluIC5PVF92aWRlby1lbGVtZW50IHtcclxuICAtby1vYmplY3QtZml0OiBjb250YWluO1xyXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbn1cclxuXHJcbi5PVF9maXQtbW9kZS1jb3ZlciAuT1RfdmlkZW8tcG9zdGVyIHtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgYm90dG9tO1xyXG59XHJcblxyXG4uT1RfZml0LW1vZGUtY29udGFpbiAuT1RfdmlkZW8tcG9zdGVyIHtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5PVF9hdWRpby1sZXZlbC1tZXRlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAyNSU7XHJcbiAgbWF4LXdpZHRoOiAyMjRweDtcclxuICBtaW4td2lkdGg6IDIxcHg7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5PVF9hdWRpby1sZXZlbC1tZXRlcjpiZWZvcmUge1xyXG4gIC8qIG1ha2VzIHRoZSBoZWlnaHQgb2YgdGhlIGNvbnRhaW5lciBlcXVhbHMgaXRzIHdpZHRoICovXHJcbiAgY29udGVudDogJyc7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcGFkZGluZy10b3A6IDEwMCU7XHJcbn1cclxuXHJcbi5PVF9hdWRpby1sZXZlbC1tZXRlcl9fYmFyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDE5MiU7IC8qIG1ldGVyIHZhbHVlIGNhbiBvdmVyZmxvdyBvZiA4JSAqL1xyXG4gIGhlaWdodDogMTkyJTtcclxuICB0b3A6IC05NiUgLyogaGFsZiBvZiB0aGUgc2l6ZSAqLztcclxuICByaWdodDogLTk2JTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcclxufVxyXG5cclxuLk9UX2F1ZGlvLWxldmVsLW1ldGVyX19hdWRpby1vbmx5LWltZyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMjIlO1xyXG4gIHJpZ2h0OiAxNSU7XHJcbiAgd2lkdGg6IDQwJTtcclxuXHJcbiAgb3BhY2l0eTogMC43O1xyXG5cclxuICBiYWNrZ3JvdW5kOiB1cmwoZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCMmFXVjNRbTk0UFNJd0lEQWdOemtnT0RZaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJK1BHY2dabWxzYkQwaUkyWm1aaUkrUEhCaGRHZ2daRDBpVFRrdU56VTNJRFF3TGpreU5HTXpMamN6T0MwMUxqRTVNU0F4TWk0M01URXROQzR6TURnZ01USXVOekV4TFRRdU16QTRJREl1TWpJeklETXVNREUwSURVdU1USTJJREkwTGpVNE5pQXpMall5TkNBeU9DNDNNVGd0TVM0ME1ERWdNUzR6TURFdE1URXVOakV4SURFdU5qSTVMVEV6TGpNNExURXVORE0yTFRFdU1qSTJMVGd1T0RBMExUSXVPVFUxTFRJeUxqazNOUzB5TGprMU5TMHlNaTQ1TnpWNmJUVTRMamM0TlNBd1l5MHpMamN6TnkwMUxqRTVNUzB4TWk0M01URXROQzR6TURndE1USXVOekV4TFRRdU16QTRMVEl1TWpJeklETXVNREUwTFRVdU1USTJJREkwTGpVNE5pMHpMall5TkNBeU9DNDNNVGdnTVM0ME1ERWdNUzR6TURFZ01URXVOakV4SURFdU5qSTVJREV6TGpNNExURXVORE0ySURFdU1qSTJMVGd1T0RBMElESXVPVFUxTFRJeUxqazNOU0F5TGprMU5TMHlNaTQ1TnpWNklpOCtQSEJoZEdnZ1pEMGlUVFk0TGpZME55QTFPQzQyWXk0M01qa3ROQzQzTlRNZ01pNHpPQzA1TGpVMk1TQXlMak00TFRFMExqZ3dOQ0F3TFRJeExqUXhNaTB4TkM0eE1UVXRNemd1TnpjdE16RXVOVEk0TFRNNExqYzNMVEUzTGpReE1pQXdMVE14TGpVeU55QXhOeTR6TlRndE16RXVOVEkzSURNNExqYzNJREFnTkM0MU5ERXVOVEUxSURndU9UTTJJREV1T0RBeUlERXlMamsxSURFdU5qazRJRFV1TWprMUxUVXVOVFF5SURZdU9Ua3hMVFl1TmpFMklESXVNRGN6UXpJdU5ERWdOVFV1TXprMElEQWdOVEV1TnpnM0lEQWdORGd1TVRBeklEQWdNakV1TlRNMklERTNMalk0TlNBd0lETTVMalVnTUNBMk1TNHpNVFlnTUNBM09TQXlNUzQxTXpZZ056a2dORGd1TVRBell6QWdMamN4T0MweUxqZzVPU0E1TGpZNU15MHpMakk1TWlBeE1TNDBNRGd0TGpjMU5DQXpMakk1TXkwM0xqYzFNU0F6TGpVNE9TMDNMakEyTVMwdU9URXllaUl2UGp4d1lYUm9JR1E5SWswMUxqQTROQ0ExTVM0ek9EVmpMUzQ0TURRdE15NDNPREl1TlRZNUxUY3VNek0xSURNdU1UTTBMVGN1T1RJeElESXVOak0yTFM0Mk1ETWdOUzQwT0RVZ01pNHhOU0EyTGpJNE9TQTJMakV6TWk0M09UY2dNeTQ1TkRndExqYzFNaUEzTGpRMU55MHpMak00T0NBM0xqZzFPUzB5TGpVMk5pNHpPVEV0TlM0eU16Y3RNaTR6TVRndE5pNHdNelF0Tmk0d04zcHROamd1T0RNMElEQmpMamd3TkMwekxqYzRNaTB1TlRZNExUY3VNek0xTFRNdU1UTXpMVGN1T1RJeExUSXVOak0yTFM0Mk1ETXROUzQwT0RVZ01pNHhOUzAyTGpJNE9TQTJMakV6TWkwdU56azNJRE11T1RRNExqYzFNaUEzTGpRMU55QXpMak00T1NBM0xqZzFPU0F5TGpVMk5TNHpPVEVnTlM0eU16Y3RNaTR6TVRnZ05pNHdNelF0Tmk0d04zcHRMVEl1TURNNElEZ3VNamc0WXkwdU9USTJJREU1TGpZMU9TMHhOUzR4TVRJZ01qUXVOelU1TFRJMUxqZzFPU0F5TUM0ME56VXROUzQwTURVdExqWXdOaTB6TGpBek5DQXhMakkyTWkwekxqQXpOQ0F4TGpJMk1pQXhNeTQyTmpFZ015NDFOaklnTWpZdU1UWTRJRE11TkRrM0lETXhMakkzTXkweU1DNDFORGt0TGpVNE5TMDBMalV4TVMweUxqTTNPUzB4TGpFNE55MHlMak0zT1MweExqRTROM29pTHo0OGNHRjBhQ0JrUFNKTk5ERXVOall5SURjNExqUXlNbXczTGpVMU15NDFOV014TGpFNU1pNHhNRGNnTWk0eE1pQXhMakUxTXlBeUxqQTNNaUF5TGpNek5Xd3RMakV3T1NBeUxqY3pPR010TGpBME55QXhMakU0TWkweExqQTFNU0F5TGpBMU5DMHlMakkwTXlBeExqazBObXd0Tnk0MU5UTXRMalUxWXkweExqRTVNUzB1TVRBM0xUSXVNVEU1TFRFdU1UVXpMVEl1TURjeUxUSXVNek0xYkM0eE1Ea3RNaTQzTXpkakxqQTBOeTB4TGpFNE1pQXhMakExTWkweUxqQTFOQ0F5TGpJME15MHhMamswTjNvaUx6NDhMMmMrUEM5emRtYyspXHJcbiAgICBuby1yZXBlYXQgY2VudGVyO1xyXG59XHJcblxyXG4uT1RfYXVkaW8tbGV2ZWwtbWV0ZXJfX2F1ZGlvLW9ubHktaW1nOmJlZm9yZSB7XHJcbiAgLyogbWFrZXMgdGhlIGhlaWdodCBvZiB0aGUgY29udGFpbmVyIGVxdWFscyBpdHMgd2lkdGggKi9cclxuICBjb250ZW50OiAnJztcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwYWRkaW5nLXRvcDogMTAwJTtcclxufVxyXG5cclxuLk9UX2F1ZGlvLWxldmVsLW1ldGVyX192YWx1ZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDE1MSwgMjA2LCAwLCAxKSAwJSwgcmdiYSgxNTEsIDIwNiwgMCwgMCkgMTAwJSk7XHJcbn1cclxuXHJcbi5PVF9hdWRpby1sZXZlbC1tZXRlci5PVF9tb2RlLW9mZiB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLk9UX2F1ZGlvLWxldmVsLW1ldGVyLk9UX21vZGUtb24sXHJcbi5PVF9hdWRpby1vbmx5IC5PVF9hdWRpby1sZXZlbC1tZXRlci5PVF9tb2RlLWF1dG8ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uT1RfYXVkaW8tb25seS5PVF9wdWJsaXNoZXIgLk9UX3ZpZGVvLWVsZW1lbnQsXHJcbi5PVF9hdWRpby1vbmx5Lk9UX3N1YnNjcmliZXIgLk9UX3ZpZGVvLWVsZW1lbnQge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5PVF92aWRlby1kaXNhYmxlZC1pbmRpY2F0b3Ige1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tIHJpZ2h0O1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogM3B4O1xyXG4gIHJpZ2h0OiAzcHg7XHJcbn1cclxuXHJcbi5PVF92aWRlby1kaXNhYmxlZCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRklBQUFBb0NBWUFBQUJ0bGEwOEFBQUlOVWxFUVZSNDJ1MmFhVXhVVnhUSGNSQm1BQUVCUlZUSzRzS3dESXNnK3dDSzdDcUl3MUNOMVlvYmJiUzJxWWxKMDZReDFVcGRxTWJZV3EycFN6V21INnl0TmJYV0pZMUxxN1Z1cUJFUnRXNjRWMFhGTFlhZTAveHZjcDNNTUFNekR6Nkl5VC9nZTJjZTUvN3VjcFkzVHMzTnpaMXlnRjU3QUowZ08wRzJqeVpQbWRiRnljbEpTQVYxRWVvRWFVVVNMR2RTVjVLTExGeHpGbUE3UVZxR3FEcWppeGhXa3hDVmV5UlZsMzh3TTZid2o2eVlJdFlLNDdCQXV1OUIwZ0NxczZOZzJyNDk0S1F0a2ovRHoyakhyYXc2cXcyZmRTRTRyTm1jQ1BDdlpPTlA4aUYxSTZrZEJkTWFRSldaTGVKcVJXYTJrUEpBeFhZK0d4RSt6eExJMDNHUmg4bEdTd29pOVdDWThGV2xDRWgrOEpPblQ3TWZQR2pNdVhYN1R0NjFob2FDaS85Y0ttS2R2M0J4ZUV0aW0vVWJOcG5iUWlxRjRNbVQ3a3FyYnI0bGtNY1RvNDZUVFNwSkI1Zys4Tkh1VlduV3VhYW1wdmhtTy83ZHVIbXJHbHVvTzRDNk9zSlpHUnJrRElsZDQzWnFVT1RubGtEU21YbWFiQW9CVTB2cUJmKzZLZ0ZTeFE5Kyt1elo4clpBcE04MVRKOHhNNW1lMFovVUY3UHVCbWRWZGtHRWI1Z1lEZVFteVpOVzNTSkxJUDlLajY0bEd5TXBteFJONnNPZklia29BaEtPZG52Mi9QbUIxa0I4OGVMRm8rb2x5eXJwczNyU0lOSUF6TG9ubnFscUs4Ujl3K0w4NnZ0cnQ1TDJuaHVnM1ZjM1VMdS9MaXo4QU91WEVTbFpaT05INmttcjdndExJQTlsUk5lUnpWdWtBdmozQnNsTG5KTktnZlNjTzY5SysvTGx5MFpiUVc3ZTh0TksrcHdCanFhU0lqRHJYZ0prVzFjaUFadmJRalErUkRhaHBCQktkNVpac3FONzU4aG1JbWs0S1FIbnBEZDhVd1NrQ3lKYXJ4MDdkNCszQmVLSm1sTUh5WDRxYVJ4cEJDbU5GRTRLRU52SERwQXV0VkVSbjFrQ1ZCTWZlUlJnWXZabng2MndaUGRuWmt3OTJWUUE1R0NsUVhZUkJ6ZTJTK2lKbXBQVlZvSkxBOWw5UUtva2pjV0tUQ1QxUjVyaExnNzBOdVNzemlUMTZkaUlLa3VBamliclRwSk5Ea24vZTE3Q2FodEFqbEFXSkFZa2IyOVNiMUxFOVJzMzkxa0lMazhtVmt5dUlwdVpjTEtVbEVtS2tyYTFXdVNUTnVlc0VQendvRXBsb1NWQWg5T2l6K0JJeWQ5ZE9IaHR4NE9FcEZwVmc2Z2JOSzN5WFgxajQ4TjZVNUR6NWkvZ2MvRkRyTVkzc1RMaVNNRWtYeEd4elVFVUFHbmJ4bFBha3NNbEhVWFdBbEhTOFVSQ1BzZVNvaFpiQ1NMalNTVTdpeExYZHpoSVdWS3E0WTd0MmEvMmJOMHFHZUtseTFmWXNWbWs2UmdJRHo0SjBib255VU9jamVZcW0vOGhSb1liV2tpZ1YyTkg5Q0hBUzYwRWtVa2t3NDdoU1JzNkZxVDFMUjVBVmNzcnVlWGxLMWQ1QU8rUnBtQnJaWkVpZWZCeXl0UENhblJHTkxaWTB1RjUyZ05EWXI5c0NSQjhNSFkwU0p1Mk9KV0tTMldRVjY1ZTR5MzFEbWtDSW1FaTBoQmZ1ZlJpbWUwUklocGJLZW4wL055OU9ZTlcyZ2h5WXl0QUJqTklheE51S3R0QVdrNkhQTG4wazBGZXZkWndGaW5QV0ZJdUtaYlVWMTZOVmtvNmpiV1NEb1BPM3BPZjhLMGpRV0xTUTBTOWJkcGtZY2srbTd2ZldwQWlIZktnQnNaaUdTU3QwRnFjVGVVOFdFVHFBSEUyQ2djQVZkM0drbTRNRDN4WFllSTZCNE5NSXR2S2JjVXBROWdQK0tNV25Tc1crVGFZSnRvbythdkJXTG9Lb0swQ0NTRHVkKzdlWFdRR1pBWHFWM1lvUWpRQ2ZpeEo4K2Z6ajl0YTNKSGhsVWVKOHdKT1kyd3M2ZVJLcFBTM29xVHZIQUVTRXo5eWEwbmFYTDVXSDZwdDNGcVNPaFRIa1RjS0VYYzZrMVBPaDRROVlKdS8wM1RUNGE4UG9HTUZJNGkyRXFTYk9aQVlhQmtwQ3lEOTJSa0c2S0NTYmpJL0gwSEVJU0JubE9aUEZkY0V6STJHVE80S0JaSUNHS3lBS0xURW1KT0IydHhmNU1iZ29oQklOQ2w0RlRxbXBKTUIyVytIaVJuMVEybDZsWHlQbWlFUDZWVkUyVGZHb2FNWXJIeVBkdEFueUkwakVPbjlSTFdtTkVodkJCRTdTanBGUVphU2h0TEsrMVMrVDEybFJ3eFV2clpsVlBwOGpFMVBpa2VPN0MvbnlFcUJEQ0IxdDcra1V4NGtLVVdjbGVhMHlaQzVCSUdwaUpTTlNEOVFnRlIwUlFLa0w2S3hIU1dkc2lBUkhKTllld29HcnpHMS9iazRkVFBTdW5MMkV5RGpjYmI3TVErbFFmWm1rS2lON1NqcEZBTTVDV0F5R2N3eVk4NFlzWjFsVWNiUk5OdFFNQWR0UVdHdlEwRHlWanpZQUtRZlFGb2RlQWVDMUM4dnp5bVhJWnFEK1pFaC8yT3lMU2FsUy8zVmJuSlorVnFEWEdqTXJUQ0Z1SzRzNjZ2VlpVTmZxYURvbGNiak9jYjg5OXNMcEVFK0kyMEdpZnl3WGUyUVIzS0VsdTk5UHpxakd1ZmhSRXFCMXBqQ25HM0lMM2ZZMXY3MzNyMkZNc2lHaHV0bjBMQW9KV1dJR2JQeGpLd2dqVWJGMG01Mm1QaGlncnBkWE9lY0VxOXBSNk1rSGJ1MkxPdHJjWjl5M2QwT0RUYjE1eTlNZVB6NDhhRjc5KzhmdlhucjlzbGp4MnUySTdLTnhEdWFNUEdWRUNvUnM3bUM0ZVQ3U0lydUZOZk5ISzE1TUt1TTJldndOcSs0cWp4dkduZDVDSHdOTnluYXdXNGNPbFVaZEc4YjU1SUlKSG1rSXR3clpISDZReEIzT1NMOWtUdEFHcEl2WmlRQjNaNFNLQmZYUXRFRTlzYXNoV0FXODdCdDNzWVpOUjZ6bjR1ekp3V0RLVUtYZmFLQ2RxVW9CcEx4U2pZZTlucUdpd1dSQkdpcHVHWjNRbTc2aXRZTGJiSkkvUEVoVUFwZnc3M3VPSXk5eGZzZTNNOUY5QnVGSkhjWXJzZVNvdUdrSHRDVnRrdUdUVGlrSThYZ1p6aGc5U2VGNFZxY3ZTV2lhU3ZOSFE4SndrTmpJZkVIZW1DbU5MRDFSYUVmTHMxOG1sZ051TjZQRkFMSG83Q3lVNVcyZzAwZ0ZBUUY0b3p2aWJIMDRtdXdEYldyYVNGQXl0L0FBTXpld2dHUjh1Q2VXbjc3eHpCeFB4Z3pQUkNERE1aMTRiUS8zanFHS0dvSGYySGpneDNrdzVMYmFKRFlXYjUydDlGTWd3NEF1V05XdWtOZXVPWXFPc21RaTJqZ3dzNFBBL0REL3owQjJ4MC92ZUNzNG5hdzBjZ3liZXppZDdYOWpWM3JYMlJTczB3ZkxrbGw0cEJHY2dpZmcrTll4ZTFrSjJ5Y1RhUnE2NnVHL3dCT2wwdmpjdzcweHdBQUFBQkpSVTVFcmtKZ2dnPT0pO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMzNweCBhdXRvO1xyXG59XHJcblxyXG4uT1RfdmlkZW8tZGlzYWJsZWQtd2FybmluZyB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRklBQUFBb0NBWUFBQUJ0bGEwOEFBQUdNRWxFUVZSNEFlMmFBN0QweUJhQWM3b0gxMnZiUm1sTGF4WVdiMjNidG0zYnRtMjg5OWEyYld1WXRQWjAxY210VTlsSnJpYjMxNXlxcjlJM09lbS81L3M3YWN3RW5laEVKem94Q2NYMk8rd0VlSWdSQkREYUdqQVpPZ1E2aWhScExrbEhaREpJWEsxV1d5bU1JaEdHa1ZCS0NXTU0rSXYvZi9iNXQ3ZmFZdE0vc0dnSVM3ajhSTkxqY2VVVmw0MUd2R04xQkZpSHk5c2d0UldhWWJodnVWUTZvMVZPdlY1L3RMZTNkeXNzS29adWg4eENsa0RFaTJNTVM2WmpSMGNTY3hkSy8rSGduSnNtTGNjWU94MGUvUFVHVXFmVEpERUhrVjVnbzlsY01Rb2o0UjhScFNJUlJVcjRhOWJhVEpGQ0NOZnFFU0tKN1JZSmliSzB4b2kwNUVoRlJUeE1pMVJpdDZ4SEF1TGFLUkx3RVZpNnExeCtFaGxWcGQzZDNXZmg0VlFrUWhSaHh0aFlMZzdTUkdxZExsSXA3VVZPSGYrSmhFaEVNc2NVb2xWamUzcDYzc2FlZU9Gb0tzVDdmamorK0JOdXcySS8wb3VVRU5tR2FRY1FFaWxRdlVVNnh1V0Mwa3FtVldDdDhkZjZrRzdXTG9GQTIwVlNDT3lOaDBSS1BUK1N5clRXdFFzdnV2VFlDeTg0ejMrb0FkYmdBaUxHSXZIalR6NmJGdXUvQjNsS0tmVmtGS2tud2loNkVubmlwWmRmWFFaemVwQXVwWFNHU0Nmd1VHWnRrcngzdC8wZFNRR25uWGJtZG9jZGV0QXJRb2orNFZSMjN3TVAzYmovdm52OVN2L3JCbWtpc2gwOWNhNjU1dGhIU3JsV3E0VEZGMXZrTkR4c2dqaVVuUHFabkhQQUJJcTQ3ang3cFBNY2VjU2hmejd4MURPN0Q2ZWl0OTk1NzZYMTExM25WZDhycUxHQXVEYU5pdEpvblRHSXFIZ1FHUWpEc0pnbE1yVUg1aURTRVFiUmE2eTJ5ck52di9QdVdWbVYvUFR6THo4c3RlVGl0MUI5RnRHSmVackprc21XZEJ6Qk1jYW1pNHhVa2FZMUExUWU5NFdJYVBHQkFwSmhhRVJyTHJYa0VsZjgrTlBQejZZTUxzMUREam4wV245UG5JL1VpUWFkTTRqTkVraHpWc0VHRThuSUhFU00xajUvS3FSWCsvSUVpT1EveWlmTkJsRWtwbmIwMGNjY2VzYnBwMTNUMzk4M0g4OC80OHh6cnJ2bTZpdC84VTVKWGdYNUc2blN2U3ExUjVMQVRSN2FZR2t3TUcxUlN3a1dBQkgrNGpVYjN2VC91SjFaMHhwanJhVEJSbHRyeFVRaGtzSVJtZ1RKeXk2OStQdjk5dHYzcVlYNkZ4Z1UrZlUzMzM1MnhHRUhmNXdpc1U3bk5XSnBaUk1rQWpaNmFJTjFtd1Y3aDI5Sm8yd0NIbHZldS9HVjE2OXo2NUUrVDZrb2V4Q2g2YytFRWlreTNsbnhRS0ZqVWVWeU9lSTVBT0J6SWlheVJoSnJ5ZDdZWW5rSUhndkIwcWs5VGRxbDZOM1hINGJSVUlPSUlJS0pTaVJiMGhrU0VwWktSZDFDcEVxOEd4dEl5Q1ZtRFNnRmw5NEdhY1RnYUp3MXJVbFloWW5nMGM0ZXdhVXNtS1JJSmpwaXFNU09DaDlRZUkrVVlFQ210UUlzeEV1Nk9vckVjdjZSbDBndTB3b2g4TWhGa21TQ1RYVkk0cEM3MDRXQ0ZSSnZTUk5KU3pyTU1FWk8yaUtaVENIQVpZbm12WENueTdlZDV2ZlpLM3ZpSFNCZElGQ0tFRmoyK250Kzczbnc4bTJ1ZWRjTEpsa3RBKytWTk1FUGFSNDVhWXVrY0tubkNmWTMvREZiWlM4dDdlSHhOZ3NQTTBOMWhYaEpKd3dNMVFicG9RRmxvZzJSMTNhL3pCeEVZSEFRRVVZVU02cWlWd0V5QllvTTZKRk5GMmtGTGVsSTVLUWYrZlZJNGRKRkNndURTN29BeXgyUjZTRlFKS1JlZFNEai9jTWcvUlhRNlpFMDVHU0lEQWFYZENpMUkzTDAyMVNRV05KMVJMWTVPaUlkTDQveXZ1dzhBRGZXUEZyU2NpYU15SDh0RVFQd2YxdUdHNTRnNStLbEpHVG1zcnhzUWRsNVBLaWRuUEZlMlFTLy8vN0h1K1ZTNldYL0hZbmYwc2V2R0w3bFh5ZHdvZDIvOUR5a1pxMHM1eWZmMHNnU1dDaWdOT0g3VFBITDd1ZmorL1RIOFAvK3FZcEw0SGtCRGlSWXBFWGVNOC84OS85enpqbjdFdFk2NGRmZDFucWNjTTdCczgrOU1LeTg1NTUvOFRuS1MrNU11Zkg2RVpWQVNrZ1B6ZittSlhyb2V0MTdKaXJVMEFMU1QzblQweTVPTnlMcGVvMXk2NGloK3Z1UWZzb1RPZVJGU0pYYStTdnlCOTBUVW1kdzQ5RWpMYUtwTVEwbXpFZVR6a1dzZC9vSTZmemZpS004Z1dnNlg2T2pwWHN0dTVaSG5tSWIwR0ZpdTI5TUlVZlVld2ttVnJFTjNScVZRL2JZOEZ6TmNxdU1Cdi9wQ05VWjVwSEhlbTAxS2ROL0kvREc2Ni9sTGhLU3ZUTzVNODRrYXY1QzV6MlpmeUFpdmk5aTlWR2Q0NVJIN1VXSmJqd0dHLzdOWXNSRUN0N2ppT1RvSGVkS0F1aThTVzRDc3h5UmM1NG1LSC84ZjdFTGhDQ0FDeU5jSWwvd0krRmFBSnljOHl6UnRpblFQeld6dUZackZIcS9BQUFBQUVsRlRrU3VRbUNDKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDMzcHggYXV0bztcclxufVxyXG5cclxuLk9UX3ZpZGVvLWRpc2FibGVkLWluZGljYXRvci5PVF9hY3RpdmUge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uT1RfYXVkaW8tYmxvY2tlZC1pbmRpY2F0b3Ige1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICByaWdodDogMDtcclxufVxyXG5cclxuLk9UX2F1ZGlvLWJsb2NrZWQge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lJSGh0Ykc1ek9uaHNhVzVyUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMM2hzYVc1cklpQjNhV1IwYUQwaU1UVXdJaUJvWldsbmFIUTlJamt3SWo0OFpHVm1jejQ4Y0dGMGFDQmtQU0pOTmpjZ01USk1OaTQwTkRnZ056SXVOVFV5SURBZ016RldNVGhNTWpZZ01HdzBNU0F4TW5wdE15QTNiRFlnTkRjdE1qa2dNVGd0TXpVdU5UQXlMVFl1TkRrNFREY3dJREU1ZWlJZ2FXUTlJbUVpTHo0OEwyUmxabk0rUEhKbFkzUWdkMmxrZEdnOUlqRTFNQ0lnYUdWcFoyaDBQU0k1TUNJZ2NuZzlJak0xSWlCeWVUMGlORFVpSUc5d1lXTnBkSGs5SWk0MUlpOCtQR2NnWm1sc2JEMGlibTl1WlNJZ1ptbHNiQzF5ZFd4bFBTSmxkbVZ1YjJSa0lqNDhaeUIwY21GdWMyWnZjbTA5SW5SeVlXNXpiR0YwWlNnek5pa2lQanh0WVhOcklHbGtQU0ppSWlCbWFXeHNQU0lqWm1abUlqNDhkWE5sSUhoc2FXNXJPbWh5WldZOUlpTmhJaTgrUEM5dFlYTnJQanh3WVhSb0lHUTlJazB6T1M0eU5Ea2dOVEV1TXpFeVl5NDJPVGNnTVRBdU16Y2dNaTQzT0RVZ01UY3VPRGszSURVdU1qVXhJREUzTGpnNU55QXpMakF6T0NBd0lEVXVOUzB4TVM0ME1UY2dOUzQxTFRJMUxqVnpMVEl1TkRZeUxUSTFMalV0TlM0MUxUSTFMalZqTFRJdU5URWdNQzAwTGpZeU9DQTNMamM1TnkwMUxqSTROeUF4T0M0ME5UTkJPQzQ1T0RrZ09DNDVPRGtnTUNBd0lERWdORE1nTkRSaE9DNDVPRGdnT0M0NU9EZ2dNQ0F3SURFdE15NDNOVEVnTnk0ek1USjZUVEl3TGprNE5TQXpNaTR5TWpSc01UVXVOelEyTFRFMkxqZzNOMkUzTGpNNE5TQTNMak00TlNBd0lEQWdNU0F4TUM0ek56UXRMalF5UXpVeExqY3dNaUF4T1M0eE1UUWdOVFFnTWprdU1qQTRJRFUwSURRMUxqSXdPR013SURFMExqVXlOeTB5TGpNME15QXlNeTQ0T0MwM0xqQXpJREk0TGpBMU9HRTNMakk0SURjdU1qZ2dNQ0F3SURFdE1UQXVNVFk0TFM0ME5qaE1NakF1TkRBMUlEVTFMakl5TkVneE1tRTFJRFVnTUNBd0lERXROUzAxZGkweE0yRTFJRFVnTUNBd0lERWdOUzAxYURndU9UZzFlaUlnWm1sc2JEMGlJMFpHUmlJZ2JXRnphejBpZFhKc0tDTmlLU0l2UGp3dlp6NDhjR0YwYUNCa1BTSk5NVEEyTGpVZ01UTXVOVXcwTkM0NU9UZ2dOelV1TURBeUlpQnpkSEp2YTJVOUlpTkdSa1lpSUhOMGNtOXJaUzEzYVdSMGFEMGlNaUlnYzNSeWIydGxMV3hwYm1WallYQTlJbkp2ZFc1a0lpOCtQQzluUGp3dmMzWm5QZz09KTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDkwcHggYXV0bztcclxufVxyXG5cclxuLk9UX2NvbnRhaW5lci1hdWRpby1ibG9ja2VkIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5PVF9jb250YWluZXItYXVkaW8tYmxvY2tlZC5PVF9taW5pIC5PVF9lZGdlLWJhci1pdGVtIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uT1RfY29udGFpbmVyLWF1ZGlvLWJsb2NrZWQgLk9UX211dGUge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5PVF9hdWRpby1ibG9ja2VkLWluZGljYXRvci5PVF9hY3RpdmUge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uT1RfdmlkZW8tdW5zdXBwb3J0ZWQge1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlPVGNpSUdobGFXZG9kRDBpT1RBaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJZ2VHMXNibk02ZUd4cGJtczlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5MekU1T1RrdmVHeHBibXNpUGp4a1pXWnpQanh3WVhSb0lHUTlJazAzTUNBeE1rdzVMalEwT0NBM01pNDFOVElnTUNBMk1td3pMVFEwVERJNUlEQnNOREVnTVRKNmJUZ2dNbXd4SURVeUxUSTVJREU0TFRNMUxqVXdNaTAyTGpRNU9FdzNPQ0F4TkhvaUlHbGtQU0poSWk4K1BDOWtaV1p6UGp4bklHWnBiR3c5SW01dmJtVWlJR1pwYkd3dGNuVnNaVDBpWlhabGJtOWtaQ0krUEdjZ2RISmhibk5tYjNKdFBTSjBjbUZ1YzJ4aGRHVW9PQ0F6S1NJK1BHMWhjMnNnYVdROUltSWlJR1pwYkd3OUlpTm1abVlpUGp4MWMyVWdlR3hwYm1zNmFISmxaajBpSTJFaUx6NDhMMjFoYzJzK1BIQmhkR2dnWkQwaVRUa3VNVEVnTWpBdU9UWTRTRFE0TGpGaE5TQTFJREFnTUNBeElEVWdOVlkxT0M0eE9HRTFJRFVnTUNBd0lERXROU0ExU0RrdU1URmhOU0ExSURBZ01DQXhMVFV0TlZZeU5TNDVOMkUxSURVZ01DQXdJREVnTlMwMWVtMDBOeTR3T0NBeE15NHpPVFJqTUMwdU16UTFJRFV1TkRjeUxUTXVNVFU1SURFMkxqUXhOUzA0TGpRME0yRXpJRE1nTUNBd0lERWdOQzR6TURRZ01pNDNNREoyTWpZdU9ETTFZVE1nTXlBd0lEQWdNUzAwTGpNd05TQXlMamN3TVdNdE1UQXVPVFF5TFRVdU1qZzJMVEUyTGpReE15MDRMakV0TVRZdU5ERXpMVGd1TkRRMlZqTTBMak0yTW5vaUlHWnBiR3c5SWlOR1JrWWlJRzFoYzJzOUluVnliQ2dqWWlraUx6NDhMMmMrUEhCaGRHZ2daRDBpVFRneExqVWdNVFl1TlV3eE9TNDVPVGdnTnpndU1EQXlJaUJ6ZEhKdmEyVTlJaU5HUmtZaUlITjBjbTlyWlMxM2FXUjBhRDBpTWlJZ2MzUnliMnRsTFd4cGJtVmpZWEE5SW5KdmRXNWtJaTgrUEM5blBqd3ZjM1puUGc9PSk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiA1OHB4IGF1dG87XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIG1hcmdpbi10b3A6IC0zMHB4O1xyXG59XHJcblxyXG4uT1RfdmlkZW8tdW5zdXBwb3J0ZWQtYmFyIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTkyJTsgLyogY29weSB0aGUgc2l6ZSBvZiB0aGUgYXVkaW8gbWV0ZXIgYmFyIGZvciBzeW1tZXRyeSAqL1xyXG4gIGhlaWdodDogMTkyJTtcclxuICB0b3A6IC05NiUgLyogaGFsZiBvZiB0aGUgc2l6ZSAqLztcclxuICBsZWZ0OiAtOTYlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG59XHJcblxyXG4uT1RfdmlkZW8tdW5zdXBwb3J0ZWQtaW1nIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDExJTtcclxuICBsZWZ0OiAxNSU7XHJcbiAgd2lkdGg6IDcwJTtcclxuICBvcGFjaXR5OiAwLjc7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjNhV1IwYUQwaU9UY2lJR2hsYVdkb2REMGlPVEFpSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUlnZUcxc2JuTTZlR3hwYm1zOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6RTVPVGt2ZUd4cGJtc2lQanhrWldaelBqeHdZWFJvSUdROUlrMDNNQ0F4TWt3NUxqUTBPQ0EzTWk0MU5USWdNQ0EyTW13ekxUUTBUREk1SURCc05ERWdNVEo2YlRnZ01td3hJRFV5TFRJNUlERTRMVE0xTGpVd01pMDJMalE1T0V3M09DQXhOSG9pSUdsa1BTSmhJaTgrUEM5a1pXWnpQanhuSUdacGJHdzlJbTV2Ym1VaUlHWnBiR3d0Y25Wc1pUMGlaWFpsYm05a1pDSStQR2NnZEhKaGJuTm1iM0p0UFNKMGNtRnVjMnhoZEdVb09DQXpLU0krUEcxaGMyc2dhV1E5SW1JaUlHWnBiR3c5SWlObVptWWlQangxYzJVZ2VHeHBibXM2YUhKbFpqMGlJMkVpTHo0OEwyMWhjMnMrUEhCaGRHZ2daRDBpVFRrdU1URWdNakF1T1RZNFNEUTRMakZoTlNBMUlEQWdNQ0F4SURVZ05WWTFPQzR4T0dFMUlEVWdNQ0F3SURFdE5TQTFTRGt1TVRGaE5TQTFJREFnTUNBeExUVXROVll5TlM0NU4yRTFJRFVnTUNBd0lERWdOUzAxZW0wME55NHdPQ0F4TXk0ek9UUmpNQzB1TXpRMUlEVXVORGN5TFRNdU1UVTVJREUyTGpReE5TMDRMalEwTTJFeklETWdNQ0F3SURFZ05DNHpNRFFnTWk0M01ESjJNall1T0RNMVlUTWdNeUF3SURBZ01TMDBMak13TlNBeUxqY3dNV010TVRBdU9UUXlMVFV1TWpnMkxURTJMalF4TXkwNExqRXRNVFl1TkRFekxUZ3VORFEyVmpNMExqTTJNbm9pSUdacGJHdzlJaU5HUmtZaUlHMWhjMnM5SW5WeWJDZ2pZaWtpTHo0OEwyYytQSEJoZEdnZ1pEMGlUVGd4TGpVZ01UWXVOVXd4T1M0NU9UZ2dOemd1TURBeUlpQnpkSEp2YTJVOUlpTkdSa1lpSUhOMGNtOXJaUzEzYVdSMGFEMGlNaUlnYzNSeWIydGxMV3hwYm1WallYQTlJbkp2ZFc1a0lpOCtQQzluUGp3dmMzWm5QZz09KTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgYXV0bztcclxufVxyXG5cclxuLk9UX3ZpZGVvLXVuc3VwcG9ydGVkLWltZzpiZWZvcmUge1xyXG4gIC8qIG1ha2VzIHRoZSBoZWlnaHQgb2YgdGhlIGNvbnRhaW5lciA5MyUgb2YgaXRzIHdpZHRoICg5MC85NyBweCkgKi9cclxuICBjb250ZW50OiAnJztcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwYWRkaW5nLXRvcDogOTMlO1xyXG59XHJcblxyXG4uT1RfdmlkZW8tdW5zdXBwb3J0ZWQtdGV4dCB7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XHJcbiAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDE0NDBweCkge1xyXG4gIC5zaWRlbmF2LW1lbnV7XHJcbiAgICB3aWR0aDogMzMlO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogMTQ0MHB4KSBhbmQgKG1pbi13aWR0aDogMTAyNHB4KXtcclxuICAuc2lkZW5hdi1tZW51e1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkgYW5kIChtaW4td2lkdGg6IDc5MHB4KXtcclxuICAuc2lkZW5hdi1tZW51e1xyXG4gICAgd2lkdGg6IDM1MHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */");

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
/* harmony default export */ __webpack_exports__["default"] = ("app-web-component{\r\n    z-index: 2147483647;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2ViLWNvbXBvbmVudC93ZWItY29tcG9uZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC93ZWItY29tcG9uZW50L3dlYi1jb21wb25lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC13ZWItY29tcG9uZW50e1xyXG4gICAgei1pbmRleDogMjE0NzQ4MzY0NztcclxufSJdfQ== */");

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