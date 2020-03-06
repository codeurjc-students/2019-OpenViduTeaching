xcopy /y ..\build\OpenViduTeaching-1.0.0.jar .
xcopy /y ..\build\initialData.json .
:: Build docker image
docker build --build-arg initialDataFile=initialData.json -t diegomzmn/openviduteaching .
:: docker push diegomzmn/openviduteaching
del /q OpenViduTeaching-1.0.0.jar
del /q initialData.json