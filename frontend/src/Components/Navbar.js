import React, { Component } from 'react'
import App from '../App.css'; 
export class Navbar extends Component {
    render() {
       return (
     <nav className='nav1'>
      <img src="/images/skillShaks.png" width={40} alt="" /> 
<ul className='navItemsContainer'>
    <li><a href="/home">Home</a></li>
    <li><a href="/about">About Us</a></li>
    <li><a href="/course">Course</a></li>
    <li><a href="/event">Event</a></li>
     
    <li><a href="/contact">Contact Us</a></li>
    <li><ul className='searchLi'>
     <li><input type="text" width={10} /></li> 
     <li><button>search</button></li>   
        </ul></li>
        <li><button ><a href="/login" style={{color:"black"}}>Login</a></button></li>
</ul>
     </nav>
      )
    }
  }
  
  export default Navbar;
  