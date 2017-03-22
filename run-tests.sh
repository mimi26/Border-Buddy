#! /bin/sh

dropdb BorderBuddy_test
createdb BorderBuddy_test
npm run migrate
npm run seed

if [ "$LOCAL" == "1" ]; then
    export TEST_PORT=8080
    npm run dev&
    sleep 10
else
    export TEST_PORT=3000
    npm run build
fi

npm run start&
sleep 10
./node_modules/mocha/bin/mocha
