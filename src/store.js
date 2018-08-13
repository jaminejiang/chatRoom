import { createStore, applyMiddleware } from 'redux';
import rootReducers from './reducers/index';
import thunk from 'redux-thunk';
import { createSocketMiddlewares } from "./middlewares/socketMiddlewares";

let store = createStore(rootReducers, applyMiddleware(thunk));
console.log("initial state: ", store.getState());
let unsubscribe = store.subscribe(()=>{
    console.log(store.getState());
})

export default store;