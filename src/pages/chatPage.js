import React, { Component } from "react";
import Chatlist from "../conponents/chatList";
import { connect } from "react-redux";
import { message } from "../actions/chat-actions";

class Chat extends Component{
    render(){
        let { msg, sendMsg } = this.props;
        return(
            <Chatlist msg={msg} sendMsg={sendMsg}>
                
            </Chatlist>
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
        sendMsg: (msg)=> { dispatch(message(msg)); }
    }
}

export default connect(
    mapStateToProps,
    mapActionToProps
)(Chat);