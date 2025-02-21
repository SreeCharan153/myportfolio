import React from 'react'
import Header from './Header'
import Footer from './Footer'
import img from './images/project1.JPG'
import img1 from './images/project2.JPG'
import './Projects.css'
const Projects = () => {
  return (
    <div>
    <Header name="Projects"/>  
     
     <div className="projectsdiv">
        <div className="p1 projects ">
        <a href='https://sreecharan750.github.io/My-Portfolio/'>
        <img src={img} alt='My portfolio'></img>
        </a>
        <h2>My Portfolio</h2>
        <p>Welcome to my portfolio! This repository serves as a comprehensive overview of my skills, experience, and accomplishments in CSE-Cyber Security. Whether you're a potential client, employer, or collaborator, this portfolio offers insight into my professional background and showcases the quality and creativity of my work.</p> 
        </div>
       <div className="p2 projects ">
       < a href='https://esummit-rec.vercel.app/'>
        <img src={img1}></img>
        </a>
        <h2>Esummit Website</h2>
        <p>Developed a TypeScript-based interactive website for E-Summit 2025, a flagship entrepreneurial event at Raghu Institute of Technology. The platform helps attendees access event schedules, register for sessions, and stay updated in real time.</p>
       </div>
       {/*<div className="p3 projects ">
       <img src={img}></img>
       <h2>Project3</h2>
       <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos eius ipsa ex error dolore accusamus perferendis molestiae dolorem libero magnam repellat iusto optio nisi harum repellendus, laudantium nemo voluptates et. </p>
       </div>

            
       
       <div className="p5 projects ">
       <img src={img}></img>
       <h2>Project5</h2>
       <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos eius ipsa ex error dolore accusamus perferendis molestiae dolorem libero magnam repellat iusto optio nisi harum repellendus, laudantium nemo voluptates et. </p>
       </div>

       <div className="p6 projects ">
       <img src={img}></img>
       <h2>Project6</h2>
       <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos eius ipsa ex error dolore accusamus perferendis molestiae dolorem libero magnam repellat iusto optio nisi harum repellendus, laudantium nemo voluptates et. </p>
       </div>

       <div className="p7 projects ">
       <img src={img}></img>
       <h2>Project7</h2>
       <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos eius ipsa ex error dolore accusamus perferendis molestiae dolorem libero magnam repellat iusto optio nisi harum repellendus, laudantium nemo voluptates et. </p>
       </div>

       <div className="p8 projects ">
       <img src={img}></img>
       <h2>Project8</h2>
       <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos eius ipsa ex error dolore accusamus perferendis molestiae dolorem libero magnam repellat iusto optio nisi harum repellendus, laudantium nemo voluptates et. </p>
       </div>
       <div className="p9 projects ">
       <img src={img}></img>
       <h2>Project9</h2>
       <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos eius ipsa ex error dolore accusamus perferendis molestiae dolorem libero magnam repellat iusto optio nisi harum repellendus, laudantium nemo voluptates et. </p>
  </div>*/}
       <br></br><br></br><br></br>

            
       

     </div>
     <Footer/>
    </div>
  )
}

export default Projects
