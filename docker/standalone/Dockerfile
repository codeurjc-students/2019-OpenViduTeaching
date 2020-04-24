FROM openvidu/openvidu-server-kms:latest

ARG INITIAL_DATA_FILE
ENV initialDataFileEnv="$INITIAL_DATA_FILE"

COPY OpenViduTeaching.jar OpenViduTeaching.jar

# Override parent supervisord conf
COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf

EXPOSE 8080