cd ../frontend

:: Build angular app
:: docker run --rm --name angular-cli -v ${PWD}:/angular -w /angular node /bin/bash -c "npm install; npm run ng build --prod --baseHref=http://localhost:8080/"
call npm install
call npm run ng build --prod --baseHref=http://localhost:8080/

:: Copy generated resources on static
del /q ..\backend\src\main\resources\static\*
xcopy /s /y dist\openvidu-teaching\* ..\backend\src\main\resources\static

cd ../docker