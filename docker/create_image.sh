cd ../frontend
npm install
npm audit fix
npm run build --prod --baseHref=http://localhost:8080/
cp -a dist/openvidu-teaching/. ../backend/src/main/resources/static/
cd ../backend
mvn -Dmaven.test.skip=true package
cp target/OpenViduTeaching.jar ../docker/build/
cd ../docker/build/
cp OpenViduTeaching.jar ../standalone/
cd ../standalone/
docker build -t diegomzmn/openviduteaching-standalone .
rm OpenViduTeaching.jar
cd ../build
cp OpenViduTeaching.jar ../composed/
cd ../composed/
docker build -t diegomzmn/openviduteaching .
rm OpenViduTeaching.jar
cd ../
