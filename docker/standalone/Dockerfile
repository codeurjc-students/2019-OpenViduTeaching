FROM openvidu/openvidu-server-kms:latest

ARG initialDataFile
ENV initialDataFileEnv="$initialDataFile"

COPY OpenViduTeaching.jar OpenViduTeaching.jar

# Override parent supervisord conf
COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf

EXPOSE 8080