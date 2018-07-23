import React , { Component } from "react";
import ChatRoom from "../conponents/chat";
import { connect } from "react-redux";
import { message } from "../actions/chat-action";

class Chat extends Component{
    render(){
        let { msg, sendMsg } = this.props;
        return(
            <ChatRoom msg={msg} sendMsg={sendMsg}>
            </ChatRoom>
        )
    }
}

function mapStateToProps(state) {
    return{
        msg: state.chat
    }
}

function mapActionToProps(dispatch) {
    return{
        sendMsg: (msg)=> { dispatch(message(msg)); }
    }
}

export default connect(
    mapStateToProps,
    mapActionToProps
)(Chat);