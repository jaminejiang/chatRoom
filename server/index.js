let Koa = require("koa");
let bodyParser = require("koa-bodyparser");
let session = require('koa-session');
let staticServer = require('koa-static');
let route = require("./routes");
let cors = require('koa2-cors');

let router = route.router, onLineUser = route.onLineUser;

let app = new Koa();
let server = require("http").Server(app.callback());

let io = require("socket.io")(server);

app.use(staticServer(__dirname + '/public'));
app.keys = ["some secret hurr"];
app.use(session(app));
app.use(cors({
    origin: (ctx) => {
        return 'http://127.0.0.1:3000';
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 300,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept']
}));
app.use(bodyParser());

io
    .of("/chat")
    .on("connection", function(socket){

    console.log("server connecting");

    socket.on("clientMsg", (data)=>{
        console.log(data)
        socket.broadcast.emit("serverMsg", data.payload);
    });

    socket.on("disconnect", function (socket) {

    });
})
    ;

app.use(router.routes());

server.listen(8081, ()=>{
    console.log("ws listening on 8081");
});
