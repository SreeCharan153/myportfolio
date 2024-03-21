import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
const Header = (props) => {
  return (

    <div>
    <div className="header1">  
       <div id="headdiv1">
        <h1> Sri Charan...</h1>
       </div> 
       <div id="headdiv2">
        

       <Link to="/">   <button>Home</button></Link> 
          <Link to="/contact">  <button>Contact</button></Link>
       </div> 
    </div>
      <h2 className="propsname">{props.name}</h2>
      <hr/> 
    </div>
  )
}

export default Header
