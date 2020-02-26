FROM openvidu/openvidu-server-kms:2.11.0

ARG initialDataFile
ENV initialDataFileEnv="$initialDataFile"

COPY OpenViduTeaching-1.0.0.jar OpenViduTeaching.jar

# Override parent supervisord conf
COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf

EXPOSE 8080