# #2 ExpressJS (19.07.10)



## #2.4 Handling Routes with Express

[GET, POST]

기본적으로 브라우저가 페이지를 읽어올 때 GET방식으로, 로그인 같은 정보가 담겨있을 때에는 POST 방식으로.

서버를 생성하고 Route를 생성하고 그리고 그것에 응답하는 방식. 이것이 기본적인 동장 방법이다.

```js
const express = require("express");
const app = express();

const PORT = 4000;

function handleListening() {
  console.log(`Listening on: http://localhost:${PORT}`);
}

function handleHome(req, res){
    res.send('Hello from home');
}


function handleProfile(req, res){
    res.send("You are on my profile")
}

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
```





## #2.5 ES6 on NodeJS using Babel

> 프로젝트에 필요없는  dependency는 `npm install nodemon -D` 뒤에 `-D` 를 붙여준다. 개발자에게 필요한 devDependencies에 저장한다. 





## 2.6 Express Core: Middlewares

express에서 middleware란 처리가 끝날 때까지 연결되어 있는 것이다. 

- request가 어떻게 되는가
  - 웹 사이트에 접근하려고하는 순간이 시작
- 유저의 home(/) 요청과 handleHome 사이에 있는 것 request한 것에 대한 권한 또한 필요하다. 요청을 처리할 수 있는 권한을 줘야함 ==> next()