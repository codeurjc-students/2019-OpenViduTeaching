## Set up ##
* Clone the GitHub repository:
`git clone https://github.com/codeurjc-students/2019-OpenViduTeaching.git`

## Backend Server ##
You will need both the OpenVidu server and OpenViduTeaching server.

* For the OpenVidu server you can use the Docker container that wraps the openvidu-server and Kurento Media Server (you will need [Docker CE](https://hub.docker.com/search?type=edition&offering=community)):
~~~~ shell
docker run -p 4443:4443 --rm -e openvidu.secret=MY_SECRET openvidu/openvidu-server-kms:2.11.0
~~~~
You can choose your port and secret however you like.
Check the [OpenVidu tutorials](https://openvidu.io/docs/tutorials/) for more info.

* The OpenViduTeaching backend uses Spring Boot v2.1.9. To start developing open the "backend" folder with the IDE of your choice as a Spring Boot project.
The database is H2, so you don't need to download anything else for that.
You may change your OpenVidu url and secret in the application.properties file inside the resources folder.
To start the server:
~~~~ shell
cd backend
mvn clean package exec:java
~~~~

## Frontend ##

* First, install node, NPM and angular-cli
~~~~ shell
sudo apt-get update
sudo curl -sL https://deb.nodesource.com/setup_10.x | sudo bash -
sudo apt-get install -y nodejs
sudo npm install -g @angular/cli
~~~~

* Install the NPM dependencies:
~~~~ shell
cd frontend
npm install
~~~~

* If you just want to run the Angular project:
~~~~ shell
npm start
~~~~

* If you want to run the frontend together with the Java application build it and place the files into the static resources before running the server:
~~~~ shell
npm build --output-path ../backend/main/resources/static --baseHref=https://localhost:8080/
~~~~