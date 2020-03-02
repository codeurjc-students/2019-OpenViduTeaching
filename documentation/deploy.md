## Deploying the app ##
You have three options for deploying the app:

### OpenViduTeaching standalone Docker container ###

You only need [Docker CE](https://hub.docker.com/search?type=edition&offering=community) and the standalone container:
`docker run --name openviduteaching -p 4443:4443 -p 8080:8080 --rm -e openvidu.secret=MY_SECRET diegomzmn/openviduteaching-standalone`

**TODO**

### JAR + Openvidu+KMS Docker container ###

* You need to have the OpenVidu server running. For that you can use the Docker container that wraps the openvidu-server and Kurento Media Server:
	`docker run -p 4443:4443 --rm -e openvidu.secret=MY_SECRET openvidu/openvidu-server-kms:2.11.0`
	You can choose your port and secret however you like.
	Check the [OpenVidu tutorials](https://openvidu.io/docs/tutorials/) for more info.

* Get the jar file for the latest release from the [GitHub repository](https://github.com/codeurjc-students/2019-OpenViduTeaching).

	* Data is initialized from a json file. You will have to add the absolute path to it as an argument for the jar file (otherwise it will use the [default file](https://github.com/codeurjc-students/2019-OpenViduTeaching/blob/master/backend/src/main/resources/json/initialData.json))
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
		]
	}
	~~~~
	As you can see, the moddedRooms, presentedRooms and participatedRooms properties are optional.

	* You also have to set the OpenVidu server url and secret when executing the jar (the following values are the default ones for those two arguments):
	`java -jar OpenViduTeaching-1.0.0.jar --initialDataFile="/fakepath/initialData.json" --openvidu.url="https://localhost:4443/" --openvidu.secret="MY_SECRET"`
	For additional customizable values take a look at the [application.properties file](https://github.com/codeurjc-students/2019-OpenViduTeaching/blob/master/backend/src/main/resources/application.properties).


### OpenViduTeaching Docker container + Openvidu+KMS Docker container ###

* Firstly get the openvidu-server + KMS container running (same as in the previous section).

* Then, get the OpenViduTeaching running:

**TODO**
