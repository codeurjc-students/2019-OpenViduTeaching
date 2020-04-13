docker kill openvidu-server-kms
docker run -p 4443:4443 --name openvidu-server-kms --rm \
-v /var/run/docker.sock:/var/run/docker.sock \
-v /home/diegomzmn/Escritorio/OpenViduTeaching/2019-OpenViduTeaching/docker/videos:/home/diegomzmn/Escritorio/OpenViduTeaching/2019-OpenViduTeaching/docker/videos \
-e openvidu.recording=true \
-e openvidu.recording.path=/home/diegomzmn/Escritorio/OpenViduTeaching/2019-OpenViduTeaching/docker/videos \
-e openvidu.recording.notification=moderator \
-e openvidu.secret=MY_SECRET \
openvidu/openvidu-server-kms:2.12.0
