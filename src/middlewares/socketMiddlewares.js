import { otherMessage, myMessage } from "../actions/chat-actions";

export function createSocketMiddlewares(socket) {
    var eventflag = false;
    return store => next => action => {
        if(!eventflag){
            eventflag = true;
            /*socket.on("serverMsg", (data)=>{
                console.log("receive message");
                next(otherMessage({type:"left", payload:data}));
            })*/
        }
        if(action.type === "GET_MY_MESSAGE"){
            console.log("emiting");
            next(myMessage(action.payload));
            socket.emit("clientMsg", action.payload);
        }else{
            return next(action);
        }
    }
}