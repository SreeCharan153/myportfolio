import 'bootstrap/dist/css/bootstrap.min.css';
import About from './About';
import './App.css';
import Projects from './Projects';
// import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Route, Routes, BrowserRouter} from 'react-router-dom';
import Contact from './Contact';
function App() {
  return (

 <Router >
  
    <div className="mainpage">

     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/about" element={<About/>}/>
       <Route path="/projects" element={<Projects/>}/>
       <Route path="/contact" element={<Contact/>}/>


      
     </Routes>
    </div>
    </Router>
  );
}

export default App;
