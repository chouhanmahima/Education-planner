import React, {useState} from 'react'
import "./CoursePlanner.css"
import {CourseCard} from './../component/CourseCard';
import { Button } from './../component/Button';

export const CoursePlanner = () => {

  const [courseData, setCourseData] = useState([]);

  const onClickHandler = () => {
    //console.log("Hi")

  //when button is clicked Extract value of course Name
  const courseName = document.getElementById("course-name").value; 
 
   //Extract value of course Hour
   const courseHours = document.getElementById("course-hours").value;

   //Create object
   const newCourseData = {
     name : courseName,
     hours : parseInt(courseHours)
   } 

     //push object inside Course Data
     setCourseData([...courseData, newCourseData])
  }


  return (
    <div className="course-planner-main">
        <div className="course-main-contain">
          <h1>Education Planner</h1>

          <div class='user-input'>
            <input id='course-name' className='user-text' type="text" placeholder="Subject"></input>
            <input id='course-hours' className='user-num' type="number" placeholder="hr"></input>
            <Button onClickProps={onClickHandler} fontColor="#ffffff" backgroundColor="black" className="btn-add">Add</Button>
          </div>
         
        
         {/*------------ Display Course Data --------------*/}
          {courseData.map((course, index) => (
          <CourseCard name={course.name} hours={course.hours} key={index}></CourseCard>
        ))}
     
        </div>      
   </div>
  )
}
