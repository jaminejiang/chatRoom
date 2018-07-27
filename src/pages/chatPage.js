import React, { Component } from "react";
import ChatList from "../conponents/chatList";
import { connect } from "react-redux";
import {myMessage, otherMessage, validateMe} from "../actions/chat-actions";
import { withRouter } from "react-router-dom";


class Chat extends Component{

    componentWillMount(){
        let token = sessionStorage.getItem("token");
        if(token === undefined || token === "" || token === null){
            this.props.history.replace("/");
        }else{

            this.socket = require("socket.io-client")("http://localhost:8081/chat");
            this.socket.on("connect",()=>{
                console.log("client connecting");
            });
            this.socket.emit("clientValidate", ()=>{

            })
        }
    }

    componentDidMount(){
        this.socket.on("serverMsg", (data)=>{
            console.log("receive message");
            next(otherMessage({type:"left", payload:data}));
        });

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
        sendMsg: (msg)=> { dispatch(myMessage(msg)); },
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapActionToProps
)(Chat));