
const MovielistReducer =(state=[],action) => {
    if(action.type==='ADD_MOVIE'){
        return [...state,action.value]

    }if (action.type==='EDIT_MOVIE') {
        return state.map(el=> {
            if(el.id === action.id) {
                return action.value
            }
            return el
        })
    
            
    }if (action.type==='DELETE_MOVIE') {
        return state.filter(el=>el.id!==action.id)
    }
    
    else return state
}
export default  MovielistReducer 