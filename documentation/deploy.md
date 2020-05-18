## Deploying the app ##
You have four options for deploying the app. However, the first three options are not ideal for a real production enviroment (connections outside the same LAN will not work correctly) and it is highly encouraged to use the last one:

### OpenViduTeaching standalone Docker container ###

* You only need [Docker CE](https://hub.docker.com/search?type=edition&offering=community) and the standalone container:\
`docker run -p 4443:4443 -p 8080:8080 -e openvidu.secret=MY_SECRET -e initialDataFile="/initialData.json" -v /path/to/initialData.json:/initialData.json --rm diegomzmn/openviduteaching-standalone`

	* This container is based on the OpenVidu development container and thus it is discouraged for a production enviroment.

	* You can choose your secret however you like. Check the [OpenVidu tutorials](https://openvidu.io/docs/tutorials/) for more info.

	* Data is initialized from a json file. You will have to mount the file into the container and add and enviroment variable with the absolute path to where it was mounted (otherwise it will use the [default file](https://github.com/codeurjc-students/2019-OpenViduTeaching/blob/master/backend/src/main/resources/json/initialData.json)). In the example above we mount it to `/initialData.json` and add `-e initialDataFile="/initialData.json"`.
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
	As you can see, the moddedRooms, presentedRooms and participatedRooms properties are optional. A user can have a different role for each room, so each user can have none, one or multiple rooms of each type in the json.


### JAR + Openvidu+KMS Docker development container ###

* You need to have the OpenVidu server running. For that you can use the Docker container that wraps the openvidu-server and Kurento Media Server:\
`docker run -p 4443:4443 --rm -e openvidu.secret=MY_SECRET openvidu/openvidu-server-kms:2.14.0`

* Get the jar file for the latest release from the [GitHub repository](https://github.com/codeurjc-students/2019-OpenViduTeaching).

	* You may also set the OpenVidu server url and secret when executing the jar (the following values are the default ones for those two arguments):
	`java -jar OpenViduTeaching.jar --initialDataFile="/path/to/initialData.json" --openvidu.url="https://localhost:4443/" --openvidu.secret="MY_SECRET"`
	For additional customizable values take a look at the [application.properties file](https://github.com/codeurjc-students/2019-OpenViduTeaching/blob/master/backend/src/main/resources/application.properties).


### OpenViduTeaching Docker container + Openvidu+KMS Docker development container ###

* You can simply make a docker-compose.yml. Take [this one](https://github.com/codeurjc-students/2019-OpenViduTeaching/blob/master/docker/composed/docker-compose.yml) as an example. You have to set the ports as specified (you can change 8080 in openvidu-teaching), mount the volume and use an enviroment variable for the path (same as in first option). You MUST use the variable for the url (localhost will not work). You can use a .env file for the enviroment variables, as in the example, or just write them in the .yml. Using a .env file is highly encouraged, at least for the OpenVidu Secret, because it is the unique password for the OpenVidu Server.

* You can also start both manually. Here's and example on how you run both independently.
`docker run -p 4443:4443 --rm -e openvidu.secret=SECRET openvidu/openvidu-server-kms:2.14.0`
`docker run -p 8080:8080 -e openvidu.url="https://192.168.1.38:4443/" -e openvidu.secret=SECRET -e initialDataFile="/initialData.json" -v /path/to/initialData.json:/initialData.json --rm diegomzmn/openviduteaching`

### Openvidu on premises ###

From version 2.13.0 of OpenVidu a production docker compose solution was introduced for deploying and OpenVidu app. You can follow their guide on how to do it [HERE](https://docs.openvidu.io/en/2.14.0/deployment/deploying-on-premises/). You will have to make a couple of adjustments:
* You will also have to add the `LOCAL_INITIAL_FILE_PATH` and `DOCKER_INITIAL_FILE_PATH` variables to the .env file (exactly the same as with the previous docker compose option).
* Your docker-compose.override.yml file will have to look like this:
```` yml
version: '3.1'

services:
    app:
        image: diegomzmn/openviduteaching:latest
        restart: on-failure
        volumes:
            - ${LOCAL_INITIAL_FILE_PATH}:${DOCKER_INITIAL_FILE_PATH}
			- ${OPENVIDU_RECORDING_PATH}:${OPENVIDU_RECORDING_PATH}
        ports:
            - "5442:8080"
        environment:
            OPENVIDU_URL: https://${DOMAIN_OR_PUBLIC_IP}
            OPENVIDU_SECRET: ${OPENVIDU_SECRET}
			INITIAL_DATA_FILE: ${DOCKER_INITIAL_FILE_PATH}
			OPENVIDU_RECORDING: ${OPENVIDU_RECORDING}
			OPENVIDU_RECORDING_PATH: ${OPENVIDU_RECORDING_PATH}
````