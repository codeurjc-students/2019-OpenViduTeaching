import { OpenViduTeaching } from './teaching.po';
import { browser, by, ProtractorBrowser, Key, WebElement } from 'protractor';
import { protractor } from 'protractor/built/ptor';

describe('Home page', () => {
	const OVT = new OpenViduTeaching();

	beforeEach(() => {
		browser.waitForAngularEnabled(false);
		browser.get('#/');
	});

});

describe('Testing config card', () => {
	const OVT = new OpenViduTeaching();
	const EC = protractor.ExpectedConditions;

	beforeEach(() => {
		browser.waitForAngularEnabled(false);
		browser.get('#/OpenVidu');
	});

	it('should show the config card', () => {
		const configCard = OVT.getConfigCard(browser);
		browser.wait(EC.visibilityOf(configCard), 3000);
		expect(configCard.isDisplayed()).toBeTruthy();
	});

	it('should close the config card and go to home', () => {
		browser.wait(EC.visibilityOf(OVT.getConfigCard(browser)), 3000);
		expect(OVT.getConfigCard(browser).isDisplayed()).toBeTruthy();

		browser.wait(EC.elementToBeClickable(OVT.getCloseButtonConfigCard(browser)), 5000);
		OVT.getCloseButtonConfigCard(browser).click();
		expect(browser.getCurrentUrl()).toMatch('#/');

		// browser.wait(EC.elementToBeClickable(OVT.getCamButton(browser)), 5000);
		// OVT.getCamButton(browser).click();
		// browser.wait(EC.visibilityOf(OVT.getCamIcon(browser)), 5000);
		// expect(OVT.getCamIcon(browser).isDisplayed()).toBeTruthy();
	});

	it('should be able to mute the camera', async () => {
		let isVideoEnabled: boolean;
		const videoEnableScript =
			'const videoTrack = document.getElementsByTagName("video")[0].srcObject.getVideoTracks()[0]; return videoTrack.enabled;';

		browser.wait(EC.elementToBeClickable(OVT.getConfigCardCameraButton(browser)), 5000);

		OVT.getAllVideos(browser).then((videos) => {
			expect(videos.length).toEqual(1);
		});

		isVideoEnabled = await browser.executeScript(videoEnableScript);
		expect(isVideoEnabled).toBe(true);

		OVT.getConfigCardCameraButton(browser).click();
		isVideoEnabled = await browser.executeScript(videoEnableScript);
		expect(isVideoEnabled).toBe(false);
	});

	it('should be able to mute the microphone', async () => {
		let isAudioEnabled: boolean;
		const audioEnableScript =
			'const audioTrack = document.getElementsByTagName("video")[0].srcObject.getAudioTracks()[0]; return audioTrack.enabled;';

		browser.wait(EC.elementToBeClickable(OVT.getConfigCardMicrophoneButton(browser)), 5000);

		OVT.getAllVideos(browser).then((videos) => {
			expect(videos.length).toEqual(1);
		});

		isAudioEnabled = await browser.executeScript(audioEnableScript);
		expect(isAudioEnabled).toBe(true);

		OVT.getConfigCardMicrophoneButton(browser).click();
		isAudioEnabled = await browser.executeScript(audioEnableScript);
		expect(isAudioEnabled).toBe(false);
	});

	it('should be able to share the screen', async () => {
		browser.wait(EC.elementToBeClickable(OVT.getConfigCardScreenShareButton(browser)), 5000);

		OVT.getAllVideos(browser).then((videos) => {
			expect(videos.length).toEqual(1);
		});

		OVT.getConfigCardScreenShareButton(browser).click();

		OVT.getAllVideos(browser).then((videos) => {
			expect(videos.length).toEqual(2);
		});
	});

	it('should be able to share the screen and remove the camera video if it is muted', () => {
		browser.wait(EC.elementToBeClickable(OVT.getConfigCardScreenShareButton(browser)), 5000);
		browser.wait(EC.elementToBeClickable(OVT.getConfigCardCameraButton(browser)), 5000);

		OVT.getAllVideos(browser).then((videos) => {
			expect(videos.length).toEqual(1);
		});

		OVT.getConfigCardCameraButton(browser).click();

		OVT.getAllVideos(browser).then((videos) => {
			expect(videos.length).toEqual(1);
		});

		OVT.getConfigCardScreenShareButton(browser).click();

		OVT.getAllVideos(browser).then((videos) => {
			expect(videos.length).toEqual(1);
		});
	});

	it('should be able to add the camera video when the screen is active clicking on camera button', () => {
		browser.wait(EC.elementToBeClickable(OVT.getConfigCardScreenShareButton(browser)), 5000);
		browser.wait(EC.elementToBeClickable(OVT.getConfigCardCameraButton(browser)), 5000);

		OVT.getAllVideos(browser).then((videos) => {
			expect(videos.length).toEqual(1);
		});

		OVT.getConfigCardCameraButton(browser).click();

		OVT.getAllVideos(browser).then((videos) => {
			expect(videos.length).toEqual(1);
		});

		OVT.getConfigCardScreenShareButton(browser).click();

		OVT.getAllVideos(browser).then((videos) => {
			expect(videos.length).toEqual(1);
		});

		OVT.getConfigCardCameraButton(browser).click();

		OVT.getAllVideos(browser).then((videos) => {
			expect(videos.length).toEqual(2);
		});
	});

	it('should be able to add the camera video disabling screen share', () => {
		browser.wait(EC.elementToBeClickable(OVT.getConfigCardScreenShareButton(browser)), 5000);
		browser.wait(EC.elementToBeClickable(OVT.getConfigCardCameraButton(browser)), 5000);

		OVT.getAllVideos(browser).then((videos) => {
			expect(videos.length).toEqual(1);
		});

		OVT.getConfigCardCameraButton(browser).click();

		OVT.getAllVideos(browser).then((videos) => {
			expect(videos.length).toEqual(1);
		});
		OVT.getConfigCardScreenShareButton(browser).click();

		OVT.getAllVideos(browser).then((videos) => {
			expect(videos.length).toEqual(1);
		});

		OVT.getConfigCardScreenShareButton(browser).click();

		OVT.getAllVideos(browser).then((videos) => {
			expect(videos.length).toEqual(1);
		});
	});

	it('should be able to join to room', async () => {
		browser.wait(EC.elementToBeClickable(OVT.getRoomJoinButton(browser)), 5000);
		OVT.getRoomJoinButton(browser).click();
		expect(OVT.getRoomContainer(browser).isDisplayed()).toBeTruthy();
	});
});

describe('Testing room', () => {
	const OVT = new OpenViduTeaching();
	const EC = protractor.ExpectedConditions;

	beforeEach(() => {
		browser.waitForAngularEnabled(false);
		browser.get('#/');
		browser.wait(EC.elementToBeClickable(OVT.getRoomJoinButton(browser)), 5000);
		OVT.getRoomJoinButton(browser).click();
		browser.sleep(1000);

		browser.wait(EC.elementToBeClickable(OVT.getRoomJoinButton(browser)), 5000);
		OVT.getRoomJoinButton(browser).click();
		browser.sleep(1000);
	});

	afterEach(() => {
		browser.wait(EC.elementToBeClickable(OVT.getLeaveButton(browser)), 5000);
		OVT.getLeaveButton(browser).click();
		expect(expect(browser.getCurrentUrl()).toMatch('#/'));
	});

	it('should be able to mute the camera', async () => {
		let isVideoEnabled: boolean;
		const videoEnableScript =
			'const videoTrack = document.getElementsByTagName("video")[0].srcObject.getVideoTracks()[0]; return videoTrack.enabled;';

		browser.wait(EC.elementToBeClickable(OVT.getRoomCameraButton(browser)), 5000);

		OVT.getAllVideos(browser).then((videos) => {
			expect(videos.length).toEqual(1);
		});

		isVideoEnabled = await browser.executeScript(videoEnableScript);
		expect(isVideoEnabled).toBe(true);

		OVT.getRoomCameraButton(browser).click();
		isVideoEnabled = await browser.executeScript(videoEnableScript);

		expect(isVideoEnabled).toBe(false);

		// Uncomment when muted video is shown
		// expect(OVT.getCameraStatusDisabled(browser).isDisplayed()).toBe(true);
	});

	it('should be able to mute the microphone', async () => {
		let isAudioEnabled: boolean;
		const audioEnableScript =
			'const audioTrack = document.getElementsByTagName("video")[0].srcObject.getAudioTracks()[0]; return audioTrack.enabled;';

		browser.wait(EC.elementToBeClickable(OVT.getRoomMicrophoneButton(browser)), 5000);

		OVT.getAllVideos(browser).then((videos) => {
			expect(videos.length).toEqual(1);
		});

		isAudioEnabled = await browser.executeScript(audioEnableScript);
		expect(isAudioEnabled).toBe(true);

		OVT.getRoomMicrophoneButton(browser).click();
		isAudioEnabled = await browser.executeScript(audioEnableScript);
		expect(isAudioEnabled).toBe(false);
		expect(OVT.getMicrophoneStatusDisabled(browser).isDisplayed()).toBe(true);
	});

	it('should be able to share the screen', () => {
		browser.wait(EC.elementToBeClickable(OVT.getRoomScreenButton(browser)), 5000);

		OVT.getAllVideos(browser).then((videos) => {
			expect(videos.length).toEqual(1);
		});

		browser.sleep(3000);
		OVT.getRoomScreenButton(browser).click();

		OVT.getAllVideos(browser).then((videos) => {
			expect(videos.length).toEqual(2);
		});
	});

	it('should be able to share the screen and remove the camera video if it is muted', () => {
		browser.wait(EC.elementToBeClickable(OVT.getRoomScreenButton(browser)), 5000);
		browser.wait(EC.elementToBeClickable(OVT.getRoomCameraButton(browser)), 5000);

		OVT.getAllVideos(browser).then((videos) => {
			expect(videos.length).toEqual(1);
		});

		OVT.getRoomCameraButton(browser).click();

		OVT.getAllVideos(browser).then((videos) => {
			expect(videos.length).toEqual(1);
		});

		OVT.getRoomScreenButton(browser).click();

		OVT.getAllVideos(browser).then((videos) => {
			expect(videos.length).toEqual(1);
		});
	});

	it('should be able to add the camera video when the screen is active clicking on camera button', () => {
		browser.wait(EC.elementToBeClickable(OVT.getRoomScreenButton(browser)), 5000);
		browser.wait(EC.elementToBeClickable(OVT.getRoomCameraButton(browser)), 5000);

		OVT.getAllVideos(browser).then((videos) => {
			expect(videos.length).toEqual(1);
		});

		OVT.getRoomCameraButton(browser).click();
		OVT.getAllVideos(browser).then((videos) => {
			expect(videos.length).toEqual(1);
		});

		OVT.getRoomScreenButton(browser).click();

		OVT.getAllVideos(browser).then((videos) => {
			expect(videos.length).toEqual(1);
		});

		browser.sleep(5000);
		OVT.getRoomCameraButton(browser).click();
		browser.sleep(1000);

		OVT.getAllVideos(browser).then((videos) => {
			expect(videos.length).toEqual(2);
		});
	});

	it('should be able to add the camera video disabling screen share', () => {
		browser.wait(EC.elementToBeClickable(OVT.getRoomScreenButton(browser)), 5000);
		browser.wait(EC.elementToBeClickable(OVT.getRoomCameraButton(browser)), 5000);

		OVT.getAllVideos(browser).then((videos) => {
			expect(videos.length).toEqual(1);
		});

		OVT.getRoomCameraButton(browser).click();

		OVT.getAllVideos(browser).then((videos) => {
			expect(videos.length).toEqual(1);
		});

		OVT.getRoomScreenButton(browser).click();
		OVT.getAllVideos(browser).then((videos) => {
			expect(videos.length).toEqual(1);
		});

		OVT.getRoomScreenButton(browser).click();
		OVT.getAllVideos(browser).then((videos) => {
			expect(videos.length).toEqual(1);
		});
	});

	it('should enable and disable fullscreen', () => {
		browser.wait(EC.elementToBeClickable(OVT.getFullscreenButton(browser)), 5000);
		const button = OVT.getFullscreenButton(browser);
		button.click();
		browser.sleep(1000);
		browser.driver
			.manage()
			.window()
			.getSize()
			.then((value) => {
				expect(value.width === OVT.getVideo(browser).width && value.height === OVT.getVideo(browser).height);
				button.click();
				browser.driver
					.manage()
					.window()
					.getSize()
					.then((value2) => {
						expect(value2.width !== OVT.getVideo(browser).width && value2.height !== OVT.getVideo(browser).height);
					});
			});
	});
});

// describe('Test room ', () => {
// 	const OVT = new OpenViduTeaching();
// 	const EC = protractor.ExpectedConditions;

// 	beforeEach(() => {
// 		browser.waitForAngularEnabled(false);
// 		browser.get('#/codeURJC');
// 	});

// 	it('should set disabled the webcam and show the icon', () => {
// 		browser.sleep(3000);
// 		browser.wait(EC.elementToBeClickable(OVT.getCamButton(browser)), 5000);
// 		OVT.getCamButton(browser).click();
// 		browser.wait(EC.visibilityOf(OVT.getCamIcon(browser)), 5000);
// 		expect(OVT.getCamIcon(browser).isDisplayed()).toBeTruthy();
// 	});

// 	it('should set disabled the microphone and show the icon', () => {
// 		browser.sleep(3000);
// 		browser.wait(EC.elementToBeClickable(OVT.getMicButton(browser)), 5000);
// 		OVT.getMicButton(browser).click();
// 		browser.wait(EC.visibilityOf(OVT.getMicIcon(browser)), 5000);
// 		expect(OVT.getMicIcon(browser).isDisplayed()).toBeTruthy();
// 	});

// 	it('should show the screen share dialog', () => {
// 		browser.wait(EC.elementToBeClickable(OVT.getShareScreenButton(browser)), 5000);
// 		OVT.getShareScreenButton(browser).click();
// 		browser.wait(EC.presenceOf(OVT.getDialogExtension(browser)), 5000);
// 		expect(OVT.getDialogExtension(browser).isDisplayed()).toBeTruthy();
// 		const button = OVT.getDialogCancelButton(browser);
// 		button.click();
// 	});

// 	it('should change the username', () => {
// 		browser.wait(EC.elementToBeClickable(OVT.getLocalNickname(browser)), 5000);
// 		OVT.getLocalNickname(browser).click();
// 		expect(OVT.getDialogNickname(browser).isDisplayed()).toBeTruthy();
// 		const inputDialog = OVT.getDialogNickname(browser).element(by.css('input'));
// 		inputDialog.clear();
// 		OVT.typeWithDelay(inputDialog, 'C');
// 		OVT.pressEnter(browser);
// 		browser.sleep(1000);
// 		expect(OVT.getLocalNickname(browser).getText()).toBe('C');
// 	});
// });

// describe('Chat component', () => {
// 	const OVT = new OpenViduTeaching();
// 	const EC = protractor.ExpectedConditions;

// 	beforeEach(() => {
// 		browser.waitForAngularEnabled(false);
// 		return browser.get('#/codeURJC');
// 	});

// 	it('should send a message', () => {
// 		browser.wait(EC.elementToBeClickable(OVT.getChatButton(browser)), 5000);
// 		OVT.getChatButton(browser).click();
// 		browser.sleep(1500);
// 		OVT.getChatInput(browser).sendKeys('Message 1');
// 		browser.actions().sendKeys(protractor.Key.ENTER).perform();
// 		expect(OVT.getMessageList(browser).count()).toEqual(1);
// 		OVT.getChatButton(browser).click();
// 	});
// });

// describe('Two browsers: ', () => {
// 	const OVT = new OpenViduTeaching();
// 	const EC = protractor.ExpectedConditions;
// 	let browser2: ProtractorBrowser;

// 	beforeEach(() => {
// 		browser.waitForAngularEnabled(false);
// 		browser.get('#/codeURJC');
// 	});

// 	it('should connect a new user', () => {
// 		browser2 = OVT.openNewBrowserInTheSameRoom(browser);

// 		// avoid timeout waiting angular
// 		browser2.waitForAngularEnabled(false);

// 		browser.sleep(4000);
// 		expect(OVT.getVideoList(browser).count()).toEqual(2);
// 		OVT.closeSession(browser2);
// 	});

// 	it('a user should disconnect his WEBCAM and to be identified by other ', () => {
// 		browser2 = OVT.openNewBrowserInTheSameRoom(browser);

// 		// avoid timeout waiting angular
// 		browser2.ignoreSynchronization = true;
// 		browser.wait(EC.elementToBeClickable(OVT.getCamButton(browser)), 10000);
// 		OVT.getCamButton(browser).click();
// 		expect(OVT.getCamIcon(browser).isDisplayed()).toBeTruthy();
// 		expect(OVT.getCamIcon(browser2).isDisplayed()).toBeTruthy();
// 		OVT.closeSession(browser2);
// 	});

// 	it('a user should disconnect his MICROPHONE and to be identified by other ', () => {
// 		browser2 = OVT.openNewBrowserInTheSameRoom(browser);

// 		// avoid timeout waiting angular
// 		browser2.waitForAngularEnabled(false);

// 		browser.wait(EC.elementToBeClickable(OVT.getMicButton(browser)), 5000);
// 		OVT.getMicButton(browser).click();
// 		expect(OVT.getMicIcon(browser).isDisplayed()).toBeTruthy();
// 		expect(OVT.getMicIcon(browser2).isDisplayed()).toBeTruthy();
// 		OVT.closeSession(browser2);
// 	});

// 	it('a user should send a MESSAGE and to be identified by other ', () => {
// 		browser2 = OVT.openNewBrowserInTheSameRoom(browser);
// 		// avoid timeout waiting angular
// 		browser2.waitForAngularEnabled(false);

// 		browser.sleep(3000);
// 		browser.wait(EC.elementToBeClickable(OVT.getChatButton(browser)), 5000);
// 		OVT.getChatButton(browser).click();
// 		browser.wait(EC.visibilityOf(OVT.getChatContent(browser)), 5000);
// 		expect(OVT.getChatContent(browser).isDisplayed).toBeTruthy();
// 		browser.sleep(5000);
// 		OVT.getChatInput(browser).click();
// 		OVT.getChatInput(browser).sendKeys('New Message');
// 		OVT.pressEnter(browser);
// 		OVT.getChatButton(browser).click();
// 		expect(OVT.getNewMessagePoint(browser2).getText()).toBe('1');
// 		OVT.closeSession(browser2);
// 	});

// 	it('both users should can type messages and reveive its', () => {
// 		browser2 = OVT.openNewBrowserInTheSameRoom(browser);

// 		browser2.waitForAngularEnabled(false);

// 		OVT.getChatButton(browser).click();
// 		const input = OVT.getChatInput(browser);
// 		browser.sleep(2000);
// 		input.click();
// 		input.sendKeys('New Message User 1');
// 		OVT.pressEnter(browser);
// 		// OVT.getChatButton(browser).click();
// 		OVT.getChatButton(browser2).click();

// 		expect(OVT.getMessageList(browser2).count()).toEqual(1);
// 		const input2 = OVT.getChatInput(browser2);
// 		browser2.sleep(2000);
// 		input2.click();
// 		input2.sendKeys('Message User 2');
// 		OVT.pressEnter(browser2);
// 		expect(OVT.getMessageList(browser).count()).toEqual(4);
// 		OVT.closeSession(browser2);
// 	});

// 	it('user should can change his nickname and to be checked by other', () => {
// 		browser2 = OVT.openNewBrowserInTheSameRoom(browser);

// 		browser2.waitForAngularEnabled(false);
// 		browser.sleep(4000);
// 		OVT.getLocalNickname(browser).click();
// 		expect(OVT.getDialogNickname(browser).isDisplayed()).toBeTruthy();
// 		const inputDialog = OVT.getDialogNickname(browser).element(by.css('input'));
// 		inputDialog.click();
// 		inputDialog.clear();
// 		OVT.typeWithDelay(inputDialog, 'C');
// 		OVT.pressEnter(browser);
// 		browser.sleep(2000);
// 		expect(OVT.getRemoteNickname(browser2).getText()).toBe('C');
// 		OVT.closeSession(browser2);
// 	});
// });