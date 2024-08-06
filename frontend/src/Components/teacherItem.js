import React, { Component } from 'react'
import App from '../App.css'; 
 
export class TeacherItem extends Component {
    render() {
        let {name,position}=this.props;
       return (
      <div className="teacherItem">
<div>
    <img src="/images/teacher1.jpg" width={200} alt="" />
</div>
<h4>{name}</h4>
<h5>{position}</h5>
      </div>
    )
}
}

export default TeacherItem;