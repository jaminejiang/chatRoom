import React, { Component } from "react";
import { Link } from "react-router-dom";

class Welcome extends Component{
    onClickWel(){
        let value = this.refs.myName.value;
        this.props.onClickWelcome(value);
    }

    render(){
        return(
            <div>
                Welcome to home page<br/>
                <input type="text" ref="myName"/>
                <input type="button" value="登陆" onClick={this.onClickWel.bind(this)}/>
                <div>{this.props.name}</div>
                <Link to='/chat'>前往</Link>
            </div>
        )
    }
}

export default Welcome;