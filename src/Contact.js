

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons';


import './Contact.css'
import React from 'react'
import Header from './Header'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function TextControlsExample() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control type="texts" placeholder="Enter your name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="example@gmail.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label placeholder="Write something">Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
  );
}



const Contact = () => {
  
    const Clicked = () => {
        alert("Thank You for messaging me , I will reach you soon 🤗")
    }



  return (
    
    <div>
      <Header name="Contact"/>
      <div className="contact">
          
          <div className="c-leftdiv">
           <TextControlsExample/>
           <Button variant="primary" onClick={Clicked}    >Send Message</Button>

          </div>

          <div className="c-rightdiv" >
        <h1>Get in Touch</h1>
        <p> Whether you want to get in touch, talk about a project collaboration, or just say hi, I'd love to hear from you. Simply fill the from and send me an email.
 </p><p>You can also reach me through...</p> <br></br>

          <a href="https://www.facebook.com/sreecharan.machabhaktuni/"> <FontAwesomeIcon className="icons" icon={faSquareFacebook} /></a>
          <a href="https://www.linkedin.com/in/sree-charan-316692275/"> <FontAwesomeIcon className="icons" icon={faLinkedin} /></a>
          <a href="https://github.com/SreeCharan153"> <FontAwesomeIcon className="icons" icon={faSquareGithub} /></a>
          <a href="https://www.instagram.com/its._.me._cherry/"><FontAwesomeIcon className="icons" icon={faSquareInstagram} /></a>
         
         
         
          </div>
         


      </div>

    </div>
  )
}

export default Contact
