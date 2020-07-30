These are all the enviroment variables you can use to configure the aplication:

| Parameter                 | Description                                                                                                                                                       | Default value                          |
|---------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------|
| OPENVIDU_URL              | Domain or IP with port where the OpenVidu server is deployed                                                                                                      | https://localhost:4443/                |
| OPENVIDU_SECRET           | Your OpenVidu secret                                                                                                                                              | MY_SECRET                              |
| OPENVIDU_RECORDING        | Whether recording is allowed or not. For this feature to work correctly the OpenVidu server and the OpenVidu Teaching server must be deployed in the same node.   | false                                  |
| OPENVIDU_RECORDING_PATH   | The folder path where recording video files will be stored. It must be the same as the OpenVidu server path, and accessible for both artifacts.                   |                                        |
| OPENVIDU_RECORDING_CUSTOM | Whether the external custom layout using the Angular app is enabled or not. If it is not, the default layout for composed recordings will be used.                | true                                   |
| INITIAL_DATA_FILE         | The file path for the json from where the users and rooms will be read at the start of the app.                                                                   | classpath:json/initialData.json        |
| ASSETS_FOLDER             | The folder path from where the image assets will be taken. The path must include the / at the end. The images it needs to include are explained in a table below. | classpath:static/assets/images/        |
| LIGHT_THEME               | Whether the light theme is active in the app.                                                                                                                     | false                                  |
| PRIMARY_R                 | The red value for the primary color. Range: 0-255.                                                                                                                | 6                                      |
| PRIMARY_G                 | The green value for the primary color. Range: 0-255.                                                                                                              | 211                                    |
| PRIMARY_B                 | The blue value for the primary color. Range: 0-255.                                                                                                               | 98                                     |
|                           |                                                                                                                                                                   | (Primary color default is light green) |
| ACCENT_R                  | The red value for the accent color. Range: 0-255.                                                                                                                 | 255                                    |
| ACCENT_G                  | The green value for the accent color. Range: 0-255.                                                                                                               | 193                                    |
| ACCENT_B                  | The blue value for the accent color. Range: 0-255.                                                                                                                | 7                                      |
|                           |                                                                                                                                                                   | (Accent color default is amber)        |
| WARN_R                    | The red value for the warn color. Range: 0-255.                                                                                                                   | 255                                    |
| WARN_G                    | The green value for the warn color. Range: 0-255.                                                                                                                 | 0                                      |
| WARN_B                    | The blue value for the warn color. Range: 0-255.                                                                                                                  | 0                                      |
|                           |                                                                                                                                                                   | (Warn color default is red)            |

## INITIAL_DATA_FILE ##

Here is an example of a valid json for the initial rooms and users:
~~~~ json
{
	"rooms": [
		{
			"name": "roomA"
		},
		{
			"name": "roomB"
		}
	],
	"users": [
		{
			"name": "student1",
			"password": "pass",
			"participatedRooms": [
				"roomA"
			]
		},
		{
			"name": "student2",
			"password": "pass",
			"participatedRooms": [
				"roomA"
			],
			"presentedRooms": [
				"roomB"
			]
		},
		{
			"name": "teacher",
			"password": "pass",
			"moddedRooms": [
				"roomA",
				"roomB"
			]
		}
	],
	"recorder": {
		"name": "recorder",
		"pass": "pass"
	}
}
~~~~
As you can see, the moddedRooms, presentedRooms and participatedRooms properties are optional. A user can have a different role for each room, so each user can have none, one or multiple rooms of each type in the json.

The recorder user will only be read if both the recording and the custom layout are enabled.

## ASSETS_FOLDER ##

Your assets folder needs to contain the following images:

| Image file name    | Description                                                                                                                                           |
|--------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|
| bg.jpg             | The background of the home page                                                                                                                       |
| favicon.ico        | Icon shown in the browser tab.                                                                                                                        |
| logo.png           | Your logo, that will be shown in multiple places in the app (home, videos, rooms...).                                                                 |
| dark_logo.png      | A version of your logo that is be clearly visible in white backgrounds. It can be exactly the same if your logo is already visible in any background. |
| default_avatar.png | The avatar users will have if they don't take a photo before entering a room.                                                                         |