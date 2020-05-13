docker kill openvidu-server-kms
docker run -p 4443:4443 --name openvidu-server-kms --rm -e OPENVIDU_SECRET=MY_SECRET openvidu/openvidu-server-kms:latest