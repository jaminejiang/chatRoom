import { Router, Route, Switch } from 'react-router';
import React from "react";
import Home from './pages/homePage';
import Chat from './pages/chatPage';

export default (
    <div>
        <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/chat" component={Chat}></Route>
        </Switch>
    </div>
)