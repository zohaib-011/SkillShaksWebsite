 
import React, { Component } from 'react'
import App from '../App.css'; 
 
export class contactItem extends Component {
    render() {
        let {title,name,phoneNo,email}=this.props;
       return (
        <div className='contactItemContainer'>

    <div id='title'>{title}</div>
    <div className='flex'>
    <img src="./images/teacher1.jpg"  alt="" />
    
    <div className='listContainer  '>
      <div className='listContactItem'>
        <li>Name</li>
        <li>{name}</li>
      </div>
      <div className='listContactItem' >
        
        <li>Phone No</li>
        <li>{phoneNo}</li>
        </div>
        
        <div className='listContactItem'>
        <li>Email</li>
        <li>{email}</li>
        </div>
        </div> 
        </div>
      </div>
      
       
     
    )
}
}

export default contactItem;