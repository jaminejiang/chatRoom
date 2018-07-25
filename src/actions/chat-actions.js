function message(msg){
    return {
        type: 'GET_MESSAGE',
        payload: msg
    }
}

export { message }