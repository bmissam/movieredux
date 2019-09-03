import React, { Component } from 'react';
import Note from './Note'
import {connect} from'react-redux'

class Rating  extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div className='rate'>
           <span className='min'>MinRating</span>
           <Note starnumber={this.props.starnumber}
           onChangeRating={(newRating) =>{
           this.props.onChange(newRating)
        }} />
        </div> );
    }
}
const mapStateToProps =(state)=> {
    return {
        starnumber:state.rate
    }
}
const mapDispatchToProps=(dispatch)=> {
    return {
        onChange (newRating) {
            dispatch ({
                type:'SET_RATING', rating:newRating  
            })
        }
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(Rating)  ;


//mapStateToProps (props components prennet la valeur des states depuis Store)