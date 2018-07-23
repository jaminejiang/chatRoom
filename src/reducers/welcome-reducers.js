import SHOW_FAILURE from '../actions/welcome-action';
import SHOW_WELCOME from '../actions/welcome-action';

const initialState = {
    name: ''
}

export const welcomeReducers = function (state = initialState, action) {
    switch(action.type){
        case "SHOW_WELCOME" :{
            return {
                state,
                name: action.payload
            }
        }
        case "SHOW_FAILURE": {
            return {
                state,
                name: 'sorry, you are not our user yet.'
            }
        }
        default: return state;
    }
}