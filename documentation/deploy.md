## Deploying the app ##
You have four options for deploying the app. However, the first three options are not ideal for a real production enviroment (connections outside the same LAN will not work correctly) and it is highly encouraged to use the last one:

### OpenViduTeaching standalone Docker container ###

* You only need [Docker CE](https://hub.docker.com/search?type=edition&offering=community) and the standalone container:\
`docker run -p 4443:4443 -p 8080:8080 -e OPENVIDU_SECRET=MY_SECRET -e INITIAL_DATA_FILE="/initialData.json" -v /path/to/initialData.json:/initialData.json --rm diegomzmn/openviduteaching-standalone`

	* This container is based on the OpenVidu development container and thus it is discouraged for a production enviroment.

	* You can choose your secret however you like. Check the [OpenVidu tutorials](https://openvidu.io/docs/tutorials/) for more info.

	* Data is initialized from a json file. You will have to mount the file into the container and add and enviroment variable with the absolute path to where it was mounted (otherwise it will use the [default file](https://github.com/codeurjc-students/2019-OpenViduTeaching/blob/master/backend/src/main/resources/json/initialData.json)). In the example above we mount it to `/initialData.json` and add `-e initialDataFile="/initialData.json"`. Take a look at the [configuration documentation](./configuration.md) for for info.

### JAR + Openvidu+KMS Docker development container ###

* You need to have the OpenVidu server running. For that you can use the Docker container that wraps the openvidu-server and Kurento Media Server:\
`docker run -p 4443:4443 --rm -e OPENVIDU_SECRET=MY_SECRET openvidu/openvidu-server-kms:2.14.0`

* Get the jar file for the latest release from the [GitHub repository](https://github.com/codeurjc-students/2019-OpenViduTeaching).

	* You may also set the OpenVidu server url and secret when executing the jar (the following values are the default ones for those two arguments):
	`java -jar OpenViduTeaching.jar --INITIAL_DATA_FILE="/path/to/initialData.json" --OPENVIDU_URL="https://localhost:4443/" --OPENVIDU_SECRET="MY_SECRET"`
	For additional customizable values take a look at the [application.properties file](https://github.com/codeurjc-students/2019-OpenViduTeaching/blob/master/backend/src/main/resources/application.properties).


### OpenViduTeaching Docker container + Openvidu+KMS Docker development container ###

* You can simply make a docker-compose.yml. Take [this one](https://github.com/codeurjc-students/2019-OpenViduTeaching/blob/master/docker/composed/docker-compose.yml) as an example. You have to set the ports as specified (you can change 8080 in openvidu-teaching), mount the volume and use an enviroment variable for the path (same as in first option). You MUST use the variable for the url (localhost will not work). You can use a .env file for the enviroment variables, as in the example, or just write them in the .yml. Using a .env file is highly encouraged, at least for the OpenVidu Secret, because it is the unique password for the OpenVidu Server.

* You can also start both manually. Here's and example on how you run both independently.
`docker run -p 4443:4443 --rm -e OPENVIDU_SECRET=SECRET openvidu/openvidu-server-kms:2.14.0`
`docker run -p 8080:8080 -e OPENVIDU_URL="https://192.168.1.38:4443/" -e OPENVIDU_SECRET=SECRET -e INITIAL_DATA_FILE="/initialData.json" -v /path/to/initialData.json:/initialData.json --rm diegomzmn/openviduteaching`

### Openvidu on premises ###

From version 2.13.0 of OpenVidu a production docker compose solution was introduced for deploying and OpenVidu app. You can follow their guide on how to do it [HERE](https://docs.openvidu.io/en/2.14.0/deployment/deploying-on-premises/). You will have to make a couple of adjustments:
* You will also have to add the `LOCAL_INITIAL_FILE_PATH` and `DOCKER_INITIAL_FILE_PATH` variables to the .env file (exactly the same as with the previous docker compose option). These variables have to be the absolute path to the file with the name of the file: `/path/to/initialData.json`. The file has to be in the `LOCAL_INITIAL_FILE_PATH` and it will be put into `DOCKER_INITIAL_FILE_PATH` inside the container. You won't need the file after the app starts and it is probably safest that you delete it.
* Your docker-compose.override.yml file will have to look like this:
```` yml
version: "3.7"

services:
    app:
        image: diegomzmn/openviduteaching:latest
        restart: on-failure
        volumes:
            - ${LOCAL_INITIAL_FILE_PATH}:${DOCKER_INITIAL_FILE_PATH}
            - ${LOCAL_ASSETS_FOLDER}:${DOCKER_ASSETS_FOLDER}
        ports:
            - "5442:8080"
        environment:
            OPENVIDU_URL: https://${DOMAIN_OR_PUBLIC_IP}:4443/
            OPENVIDU_SECRET: ${OPENVIDU_SECRET}
            INITIAL_DATA_FILE: ${DOCKER_INITIAL_FILE_PATH}
            ASSETS_FOLDER: ${DOCKER_ASSETS_FOLDER}
            OPENVIDU_RECORDING: ${OPENVIDU_RECORDING}
            OPENVIDU_RECORDING_PATH: ${OPENVIDU_RECORDING_PATH}
            OPENVIDU_RECORDING_CUSTOM: ${OPENVIDU_RECORDING_CUSTOM}
            PRIMARY_R: ${PRIMARY_R}
            PRIMARY_G: ${PRIMARY_G}
            PRIMARY_B: ${PRIMARY_B}
            ACCENT_R: ${ACCENT_R}
            ACCENT_G: ${ACCENT_G}
            ACCENT_B: ${ACCENT_B}
            WARN_R: ${WARN_R}
            WARN_G: ${WARN_G}
            WARN_B: ${WARN_B}
            LIGHT_THEME: ${LIGHT_THEME}
````
