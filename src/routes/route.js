import React from "react"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Search from "../Search";
import Rating from "../Rating";
import Movielist from "../Movielist";
import {Contact} from "../Contact"
export const bar=()=>{
    return(   <div className='header'>
    <Search/>
   <Rating/> 
</div>)
 

 
 }
 export const Routes=(props)=>{
return (
<Router>
<div className="App">
<Route exact path="/" component={bar}/>
<Route exact path="/" component={Movielist}/>
<Route exact path="/description" render={()=><Contact/>}/>
   


      

     
      
    </div>
</Router>
)
}
