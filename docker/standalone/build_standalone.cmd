xcopy /y ..\build\OpenViduTeaching-1.0.0.jar .
:: Build docker image for standalone
docker build -t diegomzmn/openviduteaching-standalone .
:: docker push diegomzmn/openviduteaching-standalone
del /q OpenViduTeaching-1.0.0.jar