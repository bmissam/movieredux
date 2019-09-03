import React from 'react'
import Note from './Note'
import { connect } from 'react-redux'
import {BrowserRouter, Link, Route} from 'react-router-dom'


const MovieCard = ({ movie = {}, Remove = () => { }, Edit = () => { } }) => {
    const {
        id,
        title = '',
        year = '',
        image = 'https://www.mearto.com/assets/no-image-83a2b680abc7af87cfff7777d0756fadb9f9aecd5ebda5d34f8139668e0fc842.png',
        rating = 0,
        description =''
        
    } = movie
  
      
    return (
        <div className="movie-card">
            <div className="movie-rating"><Note starnumber={rating} /></div>
            <div
                className="movie-image"
                style={{
                    backgroundImage:
                        `url('${image}')`
                }}
            >
            <div className="movie-description">{title} - {year}</div>
            <Link className='Link' to="./description">Movie Description </Link>
            <div></div>
            

            <div><button className='removebutton' onClick={() => Remove(id)}>REMOVE</button>
                <button className='editbutton' onClick={() => Edit(movie)}>EDIT</button>
            </div>
            </div>
        </div>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        Remove: (id) => {
            dispatch({
                type: 'DELETE_MOVIE',
                id: id
            })
        }, Edit: (movie) => {
            dispatch({
                type: 'EDIT_MOVIE',
                id: movie.id,
                value: {
                    id: movie.id,
                    title: prompt('movie title: ',movie.title),
                    rating: Number(prompt('movie rating: ',movie.rating)),
                    year: Number(prompt('movie year: ',movie.year)),
                    description: prompt('movie description: ',movie.description),
                }
            })
            }
                     
            
    }

}


export default connect(null, mapDispatchToProps)(MovieCard) 