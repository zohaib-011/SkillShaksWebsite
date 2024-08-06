import React, { Component } from 'react'
import App from '../App.css'; 
export class MsnVsnItem extends Component {
    render() {
        let {clas,title,description}=this.props;
       return (
       
        <div className={`${clas}`}  >
 <h2 > {title}</h2>
 <p  >{description}</p>
 {/* <button className='panelBtn' height={50} >Learn More</button> */}
        </div>
    )
}
}

 

export default MsnVsnItem;