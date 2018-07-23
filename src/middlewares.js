import { message } from "./actions/chat-action";

export function createSocketMiddlewares(socket) {
    var eventflag = false;
    return store => next => action => {
        if(!eventflag){
            eventflag = true;
            socket.on("serverMsg", (data)=>{
                console.log("receive message")
                next(message(data));
            })
        }
        if(action.type === "GET_MSG"){
            console.log("emiting")
            socket.emit("clientMsg", action.payload);
        }else{
            return next(action);
        }
    }
}
