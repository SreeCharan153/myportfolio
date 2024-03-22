import {Link} from 'react-router-dom'
import img1 from './images/sree.jpg'
import React from 'react'
import Header from './Header'
import './Home.css'
const Home = () => {
  return (
    <div >  
       <Header/>
        <div className="home">
            <img src={img1} alt=' ' align="right" /> 
            <h1>I am Machabhakthuni Sri Charan </h1>
            <div className="paras">
            <p1>I'm an Cyber Security student at Raghu. My roll number is 223J1A4632. I came from a supportive family. My father, Aneel Kumar, is a Businesess man, and my mother, Vineela, is a homemaker. I have a younger sister, Varnikha, who is currently in 10th grade at Oxford School, Kandukur. My long-term goal is to become a Fullstack developer. </p1>
            </div>

           <Link to="/about"> <button>About Me</button></Link>
            <Link to="/projects"><button>Projects</button></Link>
        </div>


    </div>
  )
}

export default Home
