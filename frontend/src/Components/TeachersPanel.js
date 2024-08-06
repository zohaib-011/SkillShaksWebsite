import React, { Component } from 'react'
import App from '../App.css'; 
import TeacherItem from './teacherItem';
 
export class TeacherPanel extends Component {
    render() {
         
       return (
        <>
        <h2>Our Teachers</h2>
        <p>Talented Teachers at skillShaks</p>
      <div className="teacherItemContainer">
        <TeacherItem name="Ali Haider" position="Web Development Lecturer"/>
        <TeacherItem name="Ali Haider" position="Web Development Lecturer"/>
        <TeacherItem name="Ali Haider" position="Web Development Lecturer"/>
      </div>
      <button>More</button>
      </>
    )
}
}

export default TeacherPanel;