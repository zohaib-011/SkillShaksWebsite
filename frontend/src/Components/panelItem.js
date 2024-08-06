import React, { Component } from 'react'
import App from '../App.css'; 
export class PanelItem extends Component {
    render() {
        let {title,description}=this.props;
       return (
       
        <div className='panelItem' height={300}>
 <h4 ><img src="/images/book2.svg" width={20} alt="" />{title}</h4>
 <p height={240}>{description}</p>
 <button className='panelBtn' height={50} >Learn More</button>
        </div>
    )
}
}

export default PanelItem;