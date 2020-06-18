docker kill openvidu-server-kms
docker run -p 4443:4443 --name openvidu-server-kms --rm \
-v /var/run/docker.sock:/var/run/docker.sock \
-v /home/diegomzmn/Escritorio/OpenViduTeaching/2019-OpenViduTeaching/docker/videos:/home/diegomzmn/Escritorio/OpenViduTeaching/2019-OpenViduTeaching/docker/videos \
-e OPENVIDU_RECORDING=true \
-e OPENVIDU_RECORDING_PATH=/home/diegomzmn/Escritorio/OpenViduTeaching/2019-OpenViduTeaching/docker/videos \
-e OPENVIDU_RECORDING_NOTIFICATION=moderator \
-e OPENVIDU_SECRET=MY_SECRET \
openvidu/openvidu-server-kms:2.14.0
