# OpenViduTeaching API #
This document will explain how is used the Licensoft-Web API.


## Index ##
* [Users requests](#users-requests)
    * [Login](#login)
    * [Logout](#logout)
    * [Register](#register)
    * [Check username](#check-username)
    * [Get rooms](#get-rooms)
* [Assets requests](#assets-requests)
    * [Get image](#get-image)
* [Rooms requests](#rooms-requests)
    * [Create new room](#create-new-room)
    * [Get invite code](#get-invite-code)
    * [Check room](#check-room)
    * [Add current user to room](#add-current-user-to-room)
    * [Get assistants](#get-assistants)
* [OpenVidu requests](#openvidu-requests)
    * [Create session](#create-session)
    * [Get token](#get-token)
    * [Disconnect current user](#disconnect-current-user)


## Authorization ##
Most requests require the user to be logged in with basic HTTP authentication (user and password). The authorization depends mostly on the role of the user in the room the petition refers to (moderator, presenter or participant), though some depend on the role in the system (user or admin). Someone who is moderator of at least one room is an admin. All users higher in the hierarchy have all permits of those lower in it.

## Users requests ##

### Login ###
- **URL**  
    `/ovTeachingApi/logIn`
- **Method**  
    `GET`
- **Required role**:  
    System: User
    Room: NA
- **Data Params**

- **Example**
  - **Request**:
    Username: teacher
    Password: pass
  - **Response**:
    ~~~~ json
	{
        "name": "teacher",
        "roles": [
            "ROLE_USER",
            "ROLE_ADMIN"
        ],
        "moddedRooms": [
            {
                "name": "roomA"
            },
            {
                "name": "roomB"
            }
        ],
        "participatedRooms": [],
        "presentedRooms": []
    }
    ~~~~

### Logout ###
- **URL**  
   `/ovTeachingApi/logOut`
- **Method**  
    `GET`
- **Required role**:  
    System: User
    Room: NA
- **Data Params**

- **Example**
  - **Request**:
    Username: teacher
    Password: pass
  - **Response**:
    ~~~~ json
	true
    ~~~~

### Register ###
- **URL**  
   `/ovTeachingApi/register/{user}/{pass}`
- **Method**  
    `GET`
- **Required role**:  
    System: None
    Room: NA
- **Data Params**
    Path Variables:
    * String user
    * String pass
- **Example**
  - **Request**: `/ovTeachingApi/register/newUser/pass`
  - **Response**:
    ~~~~ json
	{
        "name": "newUser",
        "roles": [
            "ROLE_USER"
        ],
        "moddedRooms": [],
        "participatedRooms": [],
        "presentedRooms": []
    }
    ~~~~

### Check Username ###
Returns the username if there is already a user in the system with than username, 404 otherwise
- **URL**  
   `/ovTeachingApi/user/{name}`
- **Method**  
    `GET`
- **Required role**:  
    System: None
    Room: NA
- **Data Params**
    Path Variables:
    * String name
- **Example**
  - **Request**: `/ovTeachingApi/user/user`
  - **Response**:
    ~~~~ json
	user
    ~~~~

### Get Rooms ###
Gets all the rooms the current user is in
- **URL**  
   `/ovTeachingApi/user/rooms`
- **Method**  
    `GET`
- **Required role**:  
    System: User
    Room: NA
- **Data Params**
- **Example**
  - **Request**:
    Username: teacher
    Password: pass
  - **Response**:
    ~~~~ json
	{
        "presented": [],
        "participated": [],
        "modded": [
            {
                "name": "roomA"
            },
            {
                "name": "roomB"
            }
        ]
    }
    ~~~~

## Assets requests ##

### Get Image ###
Gets an image from the assets/images folder. Used exclusively for production enviroment.
- **URL**  
   `/assets/images/{image}`
- **Method**  
    `GET`
- **Required role**:  
    System: None
    Room: NA
- **Data Params**
    Path Variables:
    * String image
- **Example**
  - **Response**:
    The image

## Rooms requests ##

### Create new room ###
Creates a room and adds the current user as a moderator in it.
- **URL**  
   `/ovTeachingApi/room/{roomName}`
- **Method**  
    `POST`
- **Required role**:  
    System: Admin
    Room: NA
- **Data Params**
    Path Variables:
    * String roomName
- **Example**
  - **Request**: `room/newRoom`
  - **Response**:
    ~~~~ json
        {
            "name": "newRoom"
        }
    ~~~~

### Get invite code ###
Gets the invite code for a room which will grant permissions to the specified role in that room for anyone who has it.
- **URL**  
   `/ovTeachingApi/room/{roomName}/inviteCode/{role}`
- **Method**  
    `GET`
- **Required role**:  
    System: NA
    Room: Moderator
- **Data Params**
    Path Variables:
    * String roomName
    * String role (moderator or participant)
- **Example**
  - **Request**: `/ovTeachingApi/room/roomA/inviteCode/participant`
  - **Response**:
    ~~~~
    ef40bf94-6a6b-48e3-ac0f-f5de33440641
    ~~~~

### Check room ###
Returns the room's name if there is a room in the system with than name or invite code (for either role), 404 otherwise
- **URL**  
   `/ovTeachingApi/room/{codeOrName}`
- **Method**  
    `GET`
- **Required role**:  
    System: None
    Room: NA
- **Data Params**
    Path Variables:
    * String codeOrName
- **Example**
  - **Request**: `/ovTeachingApi/room/ef40bf94-6a6b-48e3-ac0f-f5de33440641`
  - **Response**:
    ~~~~
    roomA
    ~~~~

### Add current user to room ###
Adds the current user to the room with the role of the code sent. If the user is added as a moderator and was already in the room as presenter or participant it gets the moderator role. A user who becomes moderator of any room for the first time becomes admin in the system. The method returns the user object.
- **URL**  
   `/ovTeachingApi/room/{code}/user`
- **Method**  
    `PUT`
- **Required role**:  
    System: User
    Room: None
- **Data Params**
    Path Variables:
    * String code
- **Example**
  - **Request**: `/ovTeachingApi/room/ef40bf94-6a6b-48e3-ac0f-f5de33440641/user`
    Username: user
    Password: pass
  - **Response**:
    ~~~~ json
    {
        "name": "user",
        "roles": [
            "ROLE_USER"
        ],
        "moddedRooms": [],
        "participatedRooms": [
            {
                "name": "roomA"
            }
        ],
        "presentedRooms": []
    }
    ~~~~

### Get assistants ###
Gets all people who are in the room, and specifies their role and wheter or not they are connected at the moment.
- **URL**  
   `/ovTeachingApi/room/{roomName}/assistants`
- **Method**  
    `GET`
- **Required role**:  
    System: User
    Room: Participant
- **Data Params**
    Path Variables:
    * String roomName
- **Example**
  - **Request**: `/ovTeachingApi/room/roomA/assistants`
    Username: teacher
    Password: pass
  - **Response**:
    ~~~~ json
    {
        "presenters": [],
        "moderators": [
            {
                "connected": false,
                "name": "teacher"
            }
        ],
        "participants": [
            {
                "connected": false,
                "name": "user"
            },
            {
                "connected": false,
                "name": "student1"
            }
        ]
    }
    ~~~~

## OpenVidu requests ##

### Create session ###
Creates the OpenVidu Session for the room and returns the sessionId (the room name). If the session is already created it just returns the id.
- **URL**  
   `/ovTeachingApi/room/{roomName}/session`
- **Method**  
    `POST`
- **Required role**:  
    System: User
    Room: Participant
- **Data Params**
    Path Variables:
    * String roomName
- **Example**
  - **Request**: `/ovTeachingApi/room/roomA/assistants`
    Username: teacher
    Password: pass
  - **Response**:
    ~~~~
    roomA
    ~~~~

### Get token ###
Gets the OpenVidu Token for the current user according to it's role (moderator=moderator, presenter=publisher, participant=subscriber). This method also creates the OpenVidu Session if it wasn't created already.
- **URL**  
   `/ovTeachingApi/room/{roomName}/token`
- **Method**  
    `GET`
- **Required role**:  
    System: User
    Room: Participant
- **Data Params**
    Path Variables:
    * String roomName
- **Example**
  - **Request**: `/ovTeachingApi/room/roomA/token`
    Username: teacher
    Password: pass
  - **Response**:
    ~~~~ json
    {
        "token": "wss://localhost:4443?sessionId=roomA&token=l5lcdqshsjb0tsym&role=MODERATOR&version=2.11.0"
    }
    ~~~~

### Disconnect current user ###
Removes the current user from the room's session (not the room itself). This also removes the session if the user was the only one in it.
- **URL**  
   `/ovTeachingApi/room/{roomName}/user`
- **Method**  
    `DELETE`
- **Required role**:  
    System: User
    Room: Participant
- **Data Params**
    Path Variables:
    * String roomName
- **Example**
  - **Request**: `/ovTeachingApi/room/roomA/user`
    Username: teacher
    Password: pass
  - **Response**: 
    200 OK