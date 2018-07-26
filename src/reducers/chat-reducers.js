const msg = [];

export const chatReducers = function (state = msg, action) {
    switch(action.type){
        case "GET_MY_MESSAGE": {
            let newState = [];
            newState = [...state, {type:"right","payload":action.payload} ];
            return newState;
        }
        case "GET_OTHER_MESSAGE":{
            let newState = [];
            newState = [...state, {type:"left","payload":action.payload} ];
            return newState;
        }
        default: return state;
    }
}