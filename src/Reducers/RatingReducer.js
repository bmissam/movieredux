
const RatingReducer= (state=0,action)=> {
    if(action.type==='SET_RATING'){
        return action.rating
    }else return state
}
export default RatingReducer 