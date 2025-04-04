import React from 'react'
import Header from './Header'
import './About.css'
import Footer from './Footer'
const About = () => {
  return (
    <div>
         <Header name="About"/>
         <div className="about">
              {/* <div className="divs"> */}
                  <div className="leftdiv1 left">
                    <p>Personal Info</p>
                  </div>
                  <div className="rightdiv1 right">
                     
                   <ul>
                    <li>Sri Charan</li>
                    <li>9390891684</li>
                    <li>Sreecharan750@gmail.com</li>
                    <li>Cyber Security</li>
                   </ul>

                  </div>
              {/* </div> */}
              {/* <div className="divs" > */}
                  <div className="leftdiv2 left">
                  <p>Education</p>
                  </div>
                  <div className="rightdiv2 right">
                   <ul>
                    <li>SSC</li><p>I have Completed My Schooling in oxford EM School ,Kandukur</p>
                    <li>InterMediate</li><p>I have Completed my InterMediate in oxford JR College ,Kandukur</p>
                    <li>Bachelor Of Technology</li><p>Present I am persuing B.Tech 3rd year , csc-cs Raghu Educational Institution , vizag</p>
                   </ul>

                  </div>
              {/* </div> */}
              <div className="leftdiv3 left">
                  <p>Skills</p>
                  </div>
                  <div className="rightdiv3 right">
                   <ul>
                    <li>C language</li>
                    <div className="skilldivs">
                        <div id="c">80%</div>
                    </div>

                    <li>Python</li>
                    <div className="skilldivs">
                        <div id="py">40%</div>
                    </div>

                    <li>ReactJs</li>
                    <div className="skilldivs">
                        <div id="react">50%</div>
                    </div >

                    
                    <li>Java</li>
                    <div className="skilldivs">
                        <div id="java">40%</div>
                    </div >

                    
                    <li>SQL</li>
                    <div className="skilldivs">
                        <div id="sql">50%</div>
                    </div >

                    <li>Web Designing</li>
                    <div className="skilldivs">
                        <div id="web">80%</div>
                    </div>
                    <li>Microsoft Excel</li>
                    <div className="skilldivs">
                        <div id="ms">70%</div>
                    </div>
                    <li>Flutter</li>
                    <div className="skilldivs">
                        <div id="fl">40%</div>
                    </div>
                    <li>Dart</li>
                    <div className="skilldivs">
                        <div id="dart">40%</div>
                    </div>
                    <li>Time Management</li>
                    <div className="skilldivs">
                        <div id="time"> 100%</div>
                    </div>

                   </ul>

                  </div>


              <div className="leftdiv4 left">
                    <p>Certifications</p>
                  </div>
                  <div className="rightdiv4 right">
                     
                   <ul>
                    <li><a href="https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS43S107020086730337692">Programming In Java From NPTEL</a></li>
                    <li><a href="https://courses.edx.org/certificates/042abddd57a647b3a407595b752ac2a5">CS50's programming with Python</a> </li>
                    <li>Engineering Foundation Course From GCODE</li>
                    <li>Prompt Engineering Certification from BE10X</li>
                   </ul>

                  </div>
         </div>
        <Footer/>
    </div>
  )
}

export default About