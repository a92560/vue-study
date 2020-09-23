const http = require('http');
const webSocketServer = require('websocket').server;
const EventEmitter = require('events');
const EVENT = new EventEmitter();
const MSG_POST = Symbol('msg_post');
const app = http.createServer((req, res) => {
  console.log(req, res);
});

app.listen(process.env.PORT || 8000);


const ws = new webSocketServer({
  httpServer: app,
})

ws.on('request', req => {
  let connection = req.accept(null, req.origin);
  let wsSend = data => {
    connection.send(JSON.stringify(data));
  };
  // 接收客户端发送的数据
  connection.on('message', msg => {
    console.log(msg);
    // wsSend(msg);
  });
  connection.on('close', con => {
    console.log('websocket close');
    EVENT.removeListener(MSG_POST, wsSend);
  });
  // 当有数据更新时，使用WebSocket连接来向客户端发送数据
  EVENT.addListener(MSG_POST, wsSend);
})
