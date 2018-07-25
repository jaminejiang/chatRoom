import { createStore, applyMiddleware } from 'redux';
import rootReducers from './reducers/index';
import thunk from 'redux-thunk';
import { createSocketMiddlewares } from "./middlewares/socketMiddlewares";

let socket = require("socket.io-client")("http://localhost:8081/chat");

socket.on("connect",()=>{
    console.log("client connecting");
});

let socketMiddlewares = createSocketMiddlewares(socket);

let store = createStore(rootReducers, applyMiddleware(thunk, socketMiddlewares));
console.log("initial state: ", store.getState());
let unsubscribe = store.subscribe(()=>{
    console.log(store.getState());
})

export default store;