xcopy /y ..\build\OpenViduTeaching.jar .
:: Build docker image for standalone
docker build -t diegomzmn/openviduteaching-standalone .
:: docker push diegomzmn/openviduteaching-standalone
del /q OpenViduTeaching.jar