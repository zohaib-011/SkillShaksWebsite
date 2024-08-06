import React, { Component } from 'react'
import App from '../App.css'; 
import CourseItem from './courseItem';
import Slider from './slider';
export class CoursePanel extends Component {
    render() {
      
       return (
       <>
      <h2>Our Courses</h2>

           <p>SkillShaks Learning Platform offers a diverse range of courses designed to enhance your skills and advance your career.</p>
       <Slider/>
<div className='moreCourseRelative'>
      <div className="courseContainer">
     <CourseItem title="Mobile App Course" description="Easy development through skillshaks" price="50$"/>
     <CourseItem title="Mobile App Course" description="Easy development through skillshaks" price="50$"/>
     <CourseItem title="Mobile App Course" description="Easy development through skillshaks" price="50$"/>
    
      </div>
      <button className='moreCourses'>More</button>
      </div>
      </>
    )
}
}

export default CoursePanel;