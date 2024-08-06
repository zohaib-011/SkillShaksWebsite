import React, { Component } from 'react'
import App from '../App.css'; 
export class Navbar extends Component {
    render() {
       return (
        <div className='heroContainer'>
<div className='heroItem'>
 <img src="/images/samra.jpg" alt="er" />

</div>
{/* 
<div className='heroForm heroItem'>
    <h4>Registry Requests</h4>
<form action="" class="heroFormBox">
 <input className='formItem' type="text" />   
 <input className='formItem' type="text" />
 <input className='formItem' type="text" />
 <input className='formItem'  type="text" />
 <button id="submit">Submit</button>
</form>
</div> */}
        </div>
    )
}
}

export default Navbar;