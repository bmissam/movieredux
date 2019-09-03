import React from 'react';
import HOC from './HOC.js'
import {Routes} from "./routes/route"

import './App.css';


function App() {
  return (
<Routes/>
  );
}

export default HOC(App);
