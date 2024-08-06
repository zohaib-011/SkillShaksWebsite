import React, { Component } from 'react'
import App from '../App.css'; 
import  PanelItem  from './panelItem';
export class Panel extends Component {
    render() {
       return (
        <div  className='panelContainer'>
 <PanelItem title="Our Courses" description="Skill shaks courses"/>
 <PanelItem title="Our Teachers" description="Skill shaks Teachers"/>
 {/* <PanelItem title="Our Admin" description="Skill shaks Admin"/> */}
        </div>
    )
}
}

export default Panel;