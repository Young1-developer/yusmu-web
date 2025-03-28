import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import student_courses from './CoursesList'

const CourseCard = () => {


  

 const [searchText,setSearchText] = useState('')
 // function to get filtered term
 const handleInputChange = (e) => setSearchText(e.target.value);
 
 
 const courses = student_courses.filter(course => 
  course.course_title.toLowerCase().includes(searchText.toLowerCase()) ||
  course.completed_status.toLowerCase().includes(searchText.toLowerCase()) ||
  course.end_date.toLowerCase().includes(searchText.toLowerCase())
  
 ).map(course => (

  <div className="col-md-6 col-lg-4">
  <div className="card h-100 border-0 shadow-sm">
    <div className="card-body">
      <div className="d-flex justify-content-between mb-3">
        {
          course.completed_status === 'In Progress' && 
        <span className="badge bg-success">{course.completed_status}</span>
        }
         {
          course.completed_status === 'Completed' && 
        <span className="badge bg-warning text-dark">{course.completed_status}</span>
        }
         {
          course.completed_status === 'Just Started' && 
        <span className="badge bg-info">{course.completed_status}</span>
        }
        <div className="dropdown">
          <button className="btn btn-link text-dark p-0" data-bs-toggle="dropdown">
            <i className="fas fa-ellipsis-v"></i>
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            <li><Link className="dropdown-item" to= {`${course.id}/course-details`}><i className="fas fa-info-circle me-2"></i>Details</Link></li>
            <li><hr className="dropdown-divider" /></li>
            <li><Link className="dropdown-item" to="https://example.com/course-materials"><i className="fas fa-book me-2"></i>Materials</Link></li>
        
          </ul>
        </div>
      </div>
      <h5 className="card-title mb-3">{course.course_title}</h5>
      <p className="card-text text-muted mb-3">{course.course_description}</p>
      <div className="progress mb-3" style={{height: "6px"}}>
        <div 
         className= {`${course.progress_rate <= 20 || course.progress_rate <= 50 ? 'bg-info' :
          course.progress_rate >= 60 && course.progress_rate <= 80 ?  'bg-success' : course.progress_rate > 80 ? 'bg-warning': ''}`}
         
         style={{width: `${(course.completed_status === 'In Progress' || course.completed_status === 'Completed' || course.completed_status === 'Just Started') &&  (course.progress_rate >= 60 ) && (course.progress_rate <= 80) ? `${course.progress_rate}%`
         
         : (course.completed_status === 'Just Started' || course.completed_status === 'In Progress' || course.completed_status === 'Completed' )  && (course.progress_rate <= 20 ) && (course.progress_rate <= 50 ) ? `${course.progress_rate}%` 
         
         : (course.completed_status === 'Completed' || course.completed_status === 'In Progress' || course.completed_status === 'Just Started' ) && (course.progress_rate > 80) ? `${course.progress_rate}%`  :'' }`}}
        
        ></div>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <small className="text-muted"><i className="fas fa-calendar me-1"></i> Ends: {course.end_date}</small>
        <div className="d-flex align-items-center">
          <span className="me-2 text-muted">{course.progress_rate}%</span>
          <button className="btn btn-outline-primary btn-sm">
            {course.progress_rate < 20 ? 'Start' : 'Continue'} 
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

 ))

  return (
    <div>

    <div className="d-flex justify-content-between align-items-center mb-4">
    <h2>My Courses</h2>
    <div className="d-flex gap-2">
      <div className="input-group">
        <span className="input-group-text bg-white border-end-0">
          <i className="fas fa-search text-muted"></i>
        </span>
        <input
        type="text" 
        className="form-control border-start-0"
        placeholder="Search courses by title , progress status or date..."
        onChange={handleInputChange} 
         value={searchText}
       />
      </div>
    </div>
  </div>


  <div className='row g-4'>
   {courses}
   </div>
</div>
  )
}

export default CourseCard