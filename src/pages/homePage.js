import React, { Component } from "react";
import Welcome from '../conponents/welcome';
import { connect } from 'react-redux';
import { welcome } from '../actions/welcome-action';
import { withRouter } from "react-router-dom";

class Home extends Component{
    render(){
        let { name, onClickWelcome } = this.props;
        return(
            <div>
                <Welcome name={name} onClickWelcome={onClickWelcome}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return{
        name: state.welcome.name
    }
}

function mapActionToProps(dispatch) {
    return{
        onClickWelcome: (name, pwd) => { dispatch(welcome(name, pwd, history)); }
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapActionToProps
)(Home));