import { combineReducers } from 'redux';
import { welcomeReducers } from "./welcome-reducers";
import { chatReducers } from "./chat-reducers";

const allReducers = {
    welcome: welcomeReducers,
    chat: chatReducers
}

const rootReducers = combineReducers(allReducers);
export default rootReducers;