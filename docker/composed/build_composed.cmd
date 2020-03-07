xcopy /y ..\build\OpenViduTeaching-1.0.0.jar .
:: Build docker image
docker build -t diegomzmn/openviduteaching .
:: docker push diegomzmn/openviduteaching
del /q OpenViduTeaching-1.0.0.jar