
const InputSearchReducer =(state='',action)=> {
    if (action.type==='SET_INPUT') {
        return state=action.value 

    }else return state
}

export default InputSearchReducer