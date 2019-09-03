import React, { Component } from 'react';
import { connect } from 'react-redux'

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        
        return (<div>

            <input className='input' placeholder='Search' type="text" value={this.props.value} onChange={(event) => this.props.title(event.target.value)} />
       
        </div>);
    }
}
const mapStateToProps = (state) => {
    return {
        value: state.inputsearch
    }
}
const mapDispatchToProps =(dispatch)=> {
    return {
        title:(e)=>
        dispatch (
        {type:'SET_INPUT' , value:e}
           )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Search);