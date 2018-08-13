const msg = [];

export const chatReducers = function (state = msg, action) {
    switch(action.type){
        case "GET_MY_MESSAGE": {
            let newState = [];
            newState = [...state, action ];
            return newState;
        }
        case "GET_OTHER_MESSAGE":{
            let newState = [];
            newState = [...state, action ];
            return newState;
        }

        default: return state;
    }
}