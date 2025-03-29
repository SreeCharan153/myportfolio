import React from 'react'
import Header from './Header'
import Footer from './Footer'
import img from './images/project1.JPG'
import img1 from './images/project2.JPG'
import img2 from './images/PillionPal.png'
import './Projects.css'
const Projects = () => {
  return (
    <div>
    <Header name="Projects"/>  
     
     <div className="projectsdiv">
        <div className="p1 projects ">
        <img src={img} alt='My portfolio'></img>
        <h2>My Portfolio</h2>
        <p>Welcome to my portfolio! This repository serves as a comprehensive overview of my skills, experience, and accomplishments in CSE-Cyber Security. Whether you're a potential client, employer, or collaborator, this portfolio offers insight into my professional background and showcases the quality and creativity of my work.</p>
        <a href='https://sreecharan750.github.io/My-Portfolio/'>Visit My Portfolio</a> 
        </div>
       <div className="p2 projects ">
       < a href='https://esummit-rec.vercel.app/'>
        <img src={img1} alt="Esummit Website"></img>
        </a>
        <h2>Esummit Website</h2>
        <p>Developed a TypeScript-based interactive website for E-Summit 2025, a flagship entrepreneurial event at Raghu Institute of Technology. The platform helps attendees access event schedules, register for sessions, and stay updated in real time.</p>
       <a href='https://esummit-rec.vercel.app/'>Visit Esummit Website</a>
       </div>
       <div className="p3 projects ">
       <img src={img2} alt="Project 3"></img>
       <h2>PillionPal Website</h2>
       <p>PillionPal is a smart bike ride-sharing startup that connects riders with pillions for a cost-effective and convenient commute. While the platform operates exclusively through its mobile app, the PillionPal website serves as a showcase to highlight our vision, features, and benefits. Built with Next.js and Tailwind CSS, it provides a seamless and informative experience, guiding visitors to understand our mission and explore the app. Though ride bookings are only available through the app, the website acts as a digital front to introduce PillionPal to potential users and partners. 🚀</p>
       <a href='https://pillionpal.vercel.app/'> Visit PillionPal Website </a>
       </div>

       {/*<div className="p5 projects ">
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
