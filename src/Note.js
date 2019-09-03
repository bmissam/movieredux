import React from 'react'

const Note = ({starnumber =0 , onChangeRating = () => {}}) => {
    let stars = []
    for(let i = 0; i < 5; i++) {
        if(i < starnumber) {
            stars.push(<span className='star' onClick={() => onChangeRating(i+1)} key={i}>★</span>)
        }
        else {
            stars.push(<span className='star' onClick={() => onChangeRating(i+1)} key={i}>☆</span>)
        }
    }
    return (
        <div>{stars}</div>
    )
}

export default Note