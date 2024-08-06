import React, { Component } from 'react'
import App from '../App.css'; 
 
export class CourseItem extends Component {
    render() {
        let {title,description,price}=this.props;
       return (
      <div className="courseItem">
       <div className='imagePriceCourse'> <img src="/images/heroImage.avif" width={200} alt="" />
       <li className='price'>{price}</li>
       </div>
        <h3>{title}</h3>
        <p>{description}</p>
        <a href="#">Register</a>
      </div>
    )
}
}

export default CourseItem;