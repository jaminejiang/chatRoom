let Koa = require("koa");
let bodyParser = require("koa-bodyparser");
let session = require('koa-session');
let staticServer = require('koa-static');
let router = require('koa-router')();
let cors = require('koa2-cors');

let app = new Koa();
let server = require("http").Server(app.callback());

let io = require("socket.io")(server);

app.use(staticServer(__dirname + '/public'));
app.keys = ["some secret hurr"];
app.use(session(app));
app.use(cors({
    origin: (ctx) => {
        return 'http://localhost:3000';
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 300,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}));
app.use(bodyParser());

io.set('origins', '*:*');

io
    .of("/chat")
    .on("connection", function(socket){
    console.log("server connecting");
    socket.on("clientMsg", (data)=>{
        console.log(data)
        socket.emit("serverMsg", "your message" + data);
    })
});

app.use(router.routes());
router.post("/api/welcome", (ctx)=>{
    let check = ['mm', 'pp', 'qq', 1, 2];
    console.log(ctx.request.body)
    if(check.indexOf(ctx.request.body.name) == -1){
        ctx.body = -1;
    }else{
        ctx.body = "hello" + ctx.request.body.name;
    }
});

server.listen(8081, ()=>{
    console.log("ws listening on 8081");
});
