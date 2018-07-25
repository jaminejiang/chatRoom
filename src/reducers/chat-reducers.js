const msg = [];

export const chatReducers = function (state = msg, action) {
    switch(action.type){
        case "GET_MSG": {
            let newState = [];
            newState = [...state, action.payload];
            return newState;
        }
        default: return state;
    }
}