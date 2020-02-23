FROM openvidu/openvidu-server-kms:2.11.0

COPY build/OpenViduTeaching-1.0.0.jar OpenViduTeaching-1.0.0.jar

# Override parent supervisord conf
COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf

EXPOSE 8080