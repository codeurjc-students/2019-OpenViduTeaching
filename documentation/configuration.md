These are all the enviroment variables you can use to configure the aplication:

| Parameter                 	| Description                                                                                                                                                     	| Default value                   	|
|---------------------------	|-----------------------------------------------------------------------------------------------------------------------------------------------------------------	|---------------------------------	|
| OPENVIDU_URL              	| Domain or IP with port where the OpenVidu server is deployed                                                                                                    	| https://localhost:4443/         	|
| OPENVIDU_SECRET           	| Your OpenVidu secret                                                                                                                                            	| MY_SECRET                       	|
| OPENVIDU_RECORDING        	| Whether recording is allowed or not. For this feature to work correctly the OpenVidu server and the OpenVidu Teaching server must be deployed in the same node. 	| false                           	|
| OPENVIDU_RECORDING_PATH   	| The folder path where recording video files will be stored. It must be the same as the OpenVidu server path, and accessible for both artifacts.                 	|                                 	|
| OPENVIDU_RECORDING_CUSTOM 	| Whether the external custom layout using the Angular app is enabled or not. If it is not, the default layout for composed recordings will be used.              	| true                            	|
| INITIAL_DATA_FILE         	| The file path for the json from where the users and rooms will be read at the start of the app.                                                                 	| classpath:json/initialData.json 	|

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