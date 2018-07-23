import axios from 'axios';

export function welcome(name) {
    return (dispatch, getState) => {
        axios.post('http://127.0.0.1:8081/api/welcome',{
            name: name
        }).then((res) => {
            if(res.data == -1){
                dispatch({
                    type: 'SHOW_FAILURE',
                    payload: ''
                })
            }else{
                dispatch({
                    type: 'SHOW_WELCOME',
                    payload: res.data
                })
            }
        }).catch((err) => {
          console.log(err);
        })
    }
}

export const SHOW_WELCOME = 'SHOW_WELCOME';
export const SHOW_FAILURE = 'SHOW_FAILURE';
