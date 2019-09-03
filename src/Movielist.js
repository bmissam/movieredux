import React from 'react'
import MovieCard from './moviecard'
import {connect} from 'react-redux'



const MovieList = ({movies = [],AddMovie = () => {},}) => (
     <div className="movie-list">
        {
            movies.map(el => <MovieCard key={el.id} movie={el} />)
        }
        <div
            className="new-movie-card"
            onClick={() => {
                AddMovie({
                    
                })
            }} >
            +
        </div>
            
      </div>
)


const mapStateToProps=(state)=> {
    return {
        movies: state.movies.filter(
            el =>
            el.rating >=state.rate && 
            el.title.toLowerCase().includes(state.inputsearch.toLowerCase().trim())
        )}
}
const mapDispatchToprops=(dispatch)=> {
    return {
        AddMovie:()=> {
            dispatch({ 
                type:"ADD_MOVIE",
                value: {id: Math.random(),
                title: prompt('movie title: '),
                rating: Number(prompt('movie rating: ')),
                year: Number(prompt('movie year: ')) ,
                description: prompt('movie description: ')}
            }
                
            )
        }
        
    }
}

export default connect(mapStateToProps,mapDispatchToprops)(MovieList)