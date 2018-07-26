function myMessage(msg){
    return {
        type: 'GET_MY_MESSAGE',
        payload: msg
    }
}

function otherMessage(msg){
    return {
        type: 'GET_OTHER_MESSAGE',
        payload: msg
    }
}

export { myMessage, otherMessage  }