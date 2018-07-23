function message(msg) {
    return{
        type: "GET_MSG",
        payload: msg
    }
}

export { message };