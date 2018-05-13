# recruiting-website

## Install
Install [mongoDB](https://www.mongodb.com/).

## Usage

### frontend

#### Install
```
frontend$ npm install
```

#### Build
```
frontend$ npm run build
```

#### Run
```
frontend$ npm run dev
```
> http://localhost:8080

### backend

#### Install
```
backend$ npm install
```

#### Run
```
backend$ npm start
```
or
```
backend$ DEBUG=backend:* npm start
```
> http://localhost:3000

## Server

```
recruiting-website# git pull origin master
frontend# npm install
frontend# npm run build
backend# npm install
backend# sudo npm start
```

#### Forever

```
backend# forever start --minUptime 1000 --spinSleepTime 1000 ./bin/www
backend# forever list
backend# forever stop 0
```

## Reference
[[Node.js] mongoDB , node.js, vue.js 를 통한 CURD(로그인, 회원가입)](https://m.blog.naver.com/kangminser88/221152151491)  
