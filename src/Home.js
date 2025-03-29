import {Link} from 'react-router-dom'
import img1 from './images/sree.jpg'
import React from 'react'
import Header from './Header'
import Footer from './Footer'
import './Home.css'
const Home = () => {
  return (
    <div >  
       <Header/>
        <div className="home">
            <img src={img1} alt=' ' align="right" /> 
            <h1>I am Machabhakthuni Sri Charan </h1>
            <div className="paras">
            <p1>A passionate and innovative developer pursuing B.Tech in Cybersecurity at Raghu Institute of Technology (Roll No: 223J1A4632). With hands-on experience in full-stack development, cybersecurity, React, TypeScript, and database management, specializing in building scalable and user-friendly applications.

Currently contributing to the development of <b>PillionPal</b>, a ride-sharing startup, as well as the E-Summit website and <b>ECELL-REC</b> at Raghu Institute of Technology. Expertise extends to UI/UX design and database optimization, ensuring seamless digital experiences.

Driven by problem-solving, entrepreneurship, and technology, constantly exploring new ways to enhance user engagement and business growth through innovative solutions. </p1>
            </div>

           <Link to="/about"> <button>About Me</button></Link>
            <Link to="/projects"><button>Projects</button></Link>
        </div>

<Footer/>
    </div>
  )
}

export default Home
