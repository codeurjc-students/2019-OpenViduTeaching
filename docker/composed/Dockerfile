FROM openjdk:8-jre-alpine

ARG initialDataFile
ENV initialDataFileEnv="$initialDataFile"

COPY OpenViduTeaching-1.0.0.jar OpenViduTeaching.jar

COPY ${initialDataFile} /initialData.json

EXPOSE 8080

CMD ["java", "-jar", "OpenViduTeaching.jar"]