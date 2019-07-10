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


