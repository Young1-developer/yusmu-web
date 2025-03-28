import React from 'react'
import './Courses.css'
import CourseCard from './CourseCard'
import CourseFilters from './CourseFilters'


const StudentCourses = () => {
  return (
  
<div className="container py-4">
  <div className="courses-container" style={{maxWidth:"1200px", margin: "0 auto"}}>

    <div className="courses-wrapper"> 
     <CourseCard />
    </div>

    {/* Course Filters  */}
   <CourseFilters />
  </div>
</div>

  )
}

export default StudentCourses