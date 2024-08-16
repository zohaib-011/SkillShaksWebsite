import logo from './logo.svg';
import './App.css';
import NavBar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import Panel from './Components/Panel';
import CoursePanel from './Components/CoursePanel';
import TeacherPanel from './Components/TeachersPanel';
import Footer from './Components/footer';
import About from './Components/About';
import ReactorMessage from './Components/ReactorMessage';
import Contact from './Components/contact';
import Course from './Components/course';
import Event from './Components/event';
import Login   from './Components/login';
import Signup from './Components/signup'
import Home from './Components/home'
import 'react-toastify/dist/ReactToastify.css';
import React, { useState,Component  } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import RefreshHandler from './Components/RefreshHandler';
function App() {
  const [isAuthenticated,setAuthenticated]=useState(false);
  const PrivateRouting=({element})=>{
return isAuthenticated ? element : <Navigate to="/login"/>
  }
  return (
    
    
     
       
       
       <Router>
       <RefreshHandler setIsAuthenticated={setAuthenticated}/>
        <NavBar />
        <Routes>
         
          <Route exact path="/home"  element={
    {  /*  <PrivateRouting  element={    */  }
            <div>
            <HeroSection/>
           
            {/* <Event/> */}
            
            <ReactorMessage/>
            <CoursePanel/>
       <TeacherPanel/>
      
       
            </div>
             
  {  /*  } />   */ }
        }
          />
          
          <Route exact path="/about" element={ 
         <About/>  
          } />

<Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/home2' element={<Home/>}/>

           <Route exact path="/event" element={ 
         <Event/>  
          } />
           <Route exact path="/contact" element={ 
         <Contact/>  
          } />
            <Route exact path="/course" element={ 
         <Course/>  
          } />
           
        </Routes>
        <Footer/>
        </Router>
         
    
  );
}

export default App;
