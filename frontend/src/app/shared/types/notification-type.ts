export interface Notification {
	top: string;
	subtitle: string;
	nickname: string;
	content: string;
	userAvatar: string;
	color: string;
}

export interface HandRaisedUser {
	nickname: string;
	avatar: string;
	connectionId: string;
}
