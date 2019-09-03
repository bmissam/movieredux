import {createStore,combineReducers} from'redux'
import InputSearchReducer from './Reducers/InputSearchReducer';
import MovielistReducer from './Reducers/MovielistReducer';
import RatingReducer from './Reducers/RatingReducer';

const Store=createStore(combineReducers({
    inputsearch:InputSearchReducer ,
    movies:MovielistReducer,
    rate:RatingReducer
}))





const inception = {
    id: 'inception',
    title: 'Inceptionnnn',
    rating: 5,
    image: 'https://i.ytimg.com/vi/E1iqGiX0lSg/movieposter.jpg',
    year: 2010,
    description:'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.'}
  
  const shawshank = {
      id: 'shawshank',
      title: 'Shawshank Redeption',
      year: 1994,
      rating: 5 ,
      description:'Mhhhhdfkj'
  }
  
  Store.dispatch({
      type: 'ADD_MOVIE',
      value: inception
  })
  
  Store.dispatch({
      type: 'ADD_MOVIE',
      value: shawshank
  })
  









export default Store 