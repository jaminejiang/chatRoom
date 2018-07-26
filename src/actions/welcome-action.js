import axios from 'axios';

export function welcome(name,pwd,history) {
    return (dispatch) => {
        axios.post('http://127.0.0.1:8081/api/welcome',{
            name: name,
            pwd: pwd
        }).then((res) => {
            if(res.data == -1){
                dispatch({
                    type: 'SHOW_FAILURE',
                    payload: ''
                })
            }else{
                history.push('/chat');
            }
        }).catch((err) => {
          console.log(err);
        })
    }
}

export const SHOW_WELCOME = 'SHOW_WELCOME';
export const SHOW_FAILURE = 'SHOW_FAILURE';
