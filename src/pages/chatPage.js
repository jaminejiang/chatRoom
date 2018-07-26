import React, { Component } from "react";
import ChatList from "../conponents/chatList";
import { connect } from "react-redux";
import { myMessage } from "../actions/chat-actions";

class Chat extends Component{

    componentWillMount(){

    }

    render(){
        let { msg, sendMsg } = this.props;
        return(
            <ChatList msg={msg} sendMsg={sendMsg}>
                
            </ChatList>
        )
    }
}

function mapStateToProps(state){
    return{
        msg: state.chat
    }
}

function mapActionToProps(dispatch){
    return{
        sendMsg: (msg)=> { dispatch(myMessage(msg)); }
    }
}

export default connect(
    mapStateToProps,
    mapActionToProps
)(Chat);