import React, { Component } from "react";

class ChatRoom extends Component{
    sendAMsg(){
        let msg = this.refs.chatText.value;
        this.props.sendMsg(msg);
    }

    render(){
        let content = null;
        if(this.props.msg.length){
            content = this.props.msg.map((ms, index)=>{
                return(
                    <div key={index}>{ms}</div>
                )
            })
        }

        return(
            <div>
                <span>chatting room</span>
                <div>{content}</div>
                <input type="text" ref="chatText"/>
                <input type="button" value="发送" onClick={this.sendAMsg.bind(this)}/>
            </div>
        )
    }
}

export default ChatRoom;