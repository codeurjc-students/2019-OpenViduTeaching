docker kill openviduteaching
docker run --name openviduteaching -p 4443:4443 -p 8080:8080 --rm -e openvidu.secret=MY_SECRET diegomzmn/openviduteaching-standalone