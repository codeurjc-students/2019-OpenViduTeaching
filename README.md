# 2019-OpenViduTeaching #
OpenVidu application tailored for teaching activities.

Check out the [Medium blog](https://medium.com/@diego.mzmn) for updates

## Table of Contents ##

- [Introduction](#introduction) 
- [Project Roadmap](#project-roadmap)
- [Development & Installation](#development-&-installation)

## Introduction ##

This app is a fork of [OpenViduCall](https://github.com/OpenVidu/openvidu-call). In addition to everything to what Call offers there are a few new functionalities and restrictions that make it suited for online teaching:
  * Login/logout/register in the app.
  * User roles for each room: Moderator, presenter and participant.
  * Invite links.
  * Chat for all assistans and chat for moderators only.
  * Abilty too see all assistants in a room.

In the app there are 2 user roles: Admins and users. Currently the only thing that only admins can do is create rooms.\
Rooms are where the videoconference/classes will take place. For each room there are 3 user roles: Moderators, presenters and participants. Moderators and presenters can stream (publish) video and audio, participants can only watch and listen (subscribe) to it. A user who is moderator of at least one room is admin in the system. The following animations explain in detail how to use these functionalities, and who can do each of them.

Here we see the login process. Just a username and a password are needed. After the login we see the dashboard containing all the rooms the user is in, and the role they have in them.
![Login](/documentation/images/login.gif)
In this animation we see how moderators get either of the invite links from the dashboard. Then they would have to share this link to give other users access to the room. Once they have gained access they don't need to use this link again. Each link would grant a different role to those who use it: moderator or participant.
![Invite links from dashboard](/documentation/images/inviteDashboard.gif)
Now we see how admins can create new rooms. Only the name of the room is needed. After it is created, the user navigates to it and is made a moderator (and the only user in it for now, obviously). Before entering the actual room we see a dialog that lets as choose the input camera, microphone, screenshare and avatar.
![Create room](/documentation/images/createRoom.gif)
Moderators can also get the invite links from the toolbar in the room itself. In the gif we can also see the other buttons in the toolbar (the same as in OpenViduCall + the raise hand button).
![Invite links from room](/documentation/images/inviteRoom.gif)
Here we can see where new users go when using the invite link. They have the option to either login if they already have an account or create a new one as shown. Then we see that, because the invite link was a participant one the user cannot send video or audio stream (and therefore cannot choose a mic or cam) and can only see the moderator's video.
![Invite](/documentation/images/invite.gif)
At the top right corner the user can open the menu, which contains:
  * The chat for all the assistants of the room.
  * The chat for moderators (only if the user is a moderator).
  * A list of all the assistants of the room, their roles and whether they are connected at the moment or not. 
![Menu](/documentation/images/menu.gif)
In the next gif we see the button that makes the user raise their hand. The button displays a number of the position in the queue of people who are raising their hand. Then we see the actual popup. Moderators can lower the hand of other people. If there are multiple people with their hand raised only the name of the first one is displayed (hence the queue).
![Raise hand button](/documentation/images/raiseHand.gif)
![Raise hand popup](/documentation/images/raiseHandPopup.gif)
Now we can see the other two kinds of popups: a user who just connected/disconnected and a new chat message.
![Popups](/documentation/images/popups.gif)


## Project Roadmap ##
- [X] Roles and role-restricted functionalities
	* Users are divided into moderators, presenters and assistants
- [X] Invite links
  * Moderators can get invite links to give to new users for them to enter the room
- [X] Chat
	* A chat for all the assistans of a room and a chat for moderators only
- [X] Pop ups
	* When a user joins or leaves the session and chat messages
- [X] Ability to "raise the hand"
	* Pop up to get the moderator's attention
- [ ] Basic session recording
	* Video only recordings
- [ ] Full fledged session recording including chat
	* Chat messages will be displayed at the time they were posted, with links to the time offset in the video player
- [ ] Document sharing/presentation
- [ ] Settings
- [ ] Whiteboard sharing 
- [ ] Polls/quizzes
- [ ] Mood/status sharing
	* Users may display their mood for a brief time
Note that this roadmap may change throughout development.

## Development & Installation ##

For information on how to get the the app working [CLICK HERE](/documentation/deploy.md).\
For information on how to develop the app [CLICK HERE](/documentation/development.md).\
For information on the REST API [CLICK HERE](/documentation/api.md).