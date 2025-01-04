import React from 'react'
import './Courses.css'
import { Link } from 'react-router-dom'
import CourseCard from './CourseCard'
import CourseFilters from './CourseFilters'


const StudentCourses = () => {
  return (
  
<div className="container py-4">
  <div className="courses-container" style={{maxWidth:"1200px", margin: "0 auto"}}>
    <div className="d-flex justify-content-between align-items-center mb-4">
      <h2>My Courses</h2>
      <div className="d-flex gap-2">
        <div className="input-group">
          <span className="input-group-text bg-white border-end-0">
            <i className="fas fa-search text-muted"></i>
          </span>
          <input type="text" className="form-control border-start-0" placeholder="Search courses..." />
        </div>
      </div>
    </div>

    <div className="row g-4">
      {/* Course Cards */}
      
     <CourseCard />
      <div className="col-md-6 col-lg-4">
        <div className="card h-100 border-0 shadow-sm">
          <div className="card-body">
            <div className="d-flex justify-content-between mb-3">
              <span className="badge bg-warning text-dark">New Module</span>
              <div className="dropdown">
                <button className="btn btn-link text-dark p-0" data-bs-toggle="dropdown">
                  <i className="fas fa-ellipsis-v"></i>
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li><Link className="dropdown-item" to="https://example.com/course-details"><i className="fas fa-info-circle me-2"></i>Details</Link></li>
                  <li><Link className="dropdown-item" to="https://example.com/course-materials"><i className="fas fa-book me-2"></i>Materials</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item text-danger" to="#"><i className="fas fa-times me-2"></i>Unenroll</Link></li>
                </ul>
              </div>
            </div>
            <h5 className="card-title mb-3">React.js Development</h5>
            <p className="card-text text-muted mb-3">Master React.js by building real-world applications and understanding core concepts.</p>
            <div className="progress mb-3" style={{height: "6px"}}>
              <div className="progress-bar bg-warning" style={{width: "40%"}}></div>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <small className="text-muted"><i className="fas fa-calendar me-1"></i> Ends: Jan 30, 2024</small>
              <div className="d-flex align-items-center">
                <span className="me-2 text-muted">40%</span>
                <button className="btn btn-outline-primary btn-sm">Continue</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-6 col-lg-4">
        <div className="card h-100 border-0 shadow-sm">
          <div className="card-body">
            <div className="d-flex justify-content-between mb-3">
              <span className="badge bg-info">Just Started</span>
              <div className="dropdown">
                <button className="btn btn-link text-dark p-0" data-bs-toggle="dropdown">
                  <i className="fas fa-ellipsis-v"></i>
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li><Link className="dropdown-item" to="https://example.com/course-details"><i className="fas fa-info-circle me-2"></i>Details</Link></li>
                  <li><Link className="dropdown-item" to="https://example.com/course-materials"><i className="fas fa-book me-2"></i>Materials</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item text-danger" to="#"><i className="fas fa-times me-2"></i>Unenroll</Link></li>
                </ul>
              </div>
            </div>
            <h5 className="card-title mb-3">UI/UX Design Principles</h5>
            <p className="card-text text-muted mb-3">Learn design thinking, wireframing, and prototyping using modern tools.</p>
            <div className="progress mb-3" style={{height: "6px"}}>
              <div className="progress-bar bg-info" style={{width: "10%"}}></div>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <small className="text-muted"><i className="fas fa-calendar me-1"></i> Ends: Feb 15, 2024</small>
              <div className="d-flex align-items-center">
                <span className="me-2 text-muted">10%</span>
                <button className="btn btn-outline-primary btn-sm">Start</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Course Filters  */}
   <CourseFilters />
  </div>
</div>

  )
}

export default StudentCourses