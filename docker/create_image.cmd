cd ../frontend

:: Build angular app
:: docker run --rm --name angular-cli -v "%cd%":/angular -w /angular node /bin/bash -c "npm install; npm audit fix; npm run build --prod --baseHref=http://localhost:8080/"
call npm install
call npm audit fix
call npm run ng build --prod --baseHref=http://localhost:8080/

:: Copy generated resources on static
xcopy /s /y dist\openvidu-teaching\* ..\backend\src\main\resources\static

cd ../backend

:: Compile Spring Boot project
docker run -it --rm -v "%cd%":/usr/src/project -w /usr/src/project maven:alpine mvn -Dmaven.test.skip=true package
xcopy /y target\OpenViduTeaching-1.0.0.jar ..\docker\build\

cd ../docker/standalone

call build_standalone.cmd

cd ..