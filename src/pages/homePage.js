import React, { Component } from "react";
import Welcome from '../conponents/welcome';
import { connect } from 'react-redux';
import { welcome } from '../actions/welcome-action';

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
        onClickWelcome: (value) => { dispatch(welcome(value)); }
    }
}

export default connect(
    mapStateToProps,
    mapActionToProps
)(Home);