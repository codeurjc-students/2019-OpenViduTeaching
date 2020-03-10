xcopy /y ..\build\OpenViduTeaching.jar .
:: Build docker image
docker build -t diegomzmn/openviduteaching .
:: docker push diegomzmn/openviduteaching
del /q OpenViduTeaching.jar