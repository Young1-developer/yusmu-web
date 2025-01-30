import React from 'react'
import { Link } from 'react-router-dom'

const CourseCard = () => {
  // 1. creating details page for every course
  // 2. 
  return (
    <div className="col-md-6 col-lg-4">
        <div className="card h-100 border-0 shadow-sm">
          <div className="card-body">
            <div className="d-flex justify-content-between mb-3">
              <span className="badge bg-success">In Progress</span>
              <div className="dropdown">
                <button className="btn btn-link text-dark p-0" data-bs-toggle="dropdown">
                  <i className="fas fa-ellipsis-v"></i>
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li><Link className="dropdown-item" to="https://example.com/course-details"><i className="fas fa-info-circle me-2"></i>Details</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" to="https://example.com/course-materials"><i className="fas fa-book me-2"></i>Materials</Link></li>
              
                </ul>
              </div>
            </div>
            <h5 className="card-title mb-3">Web Development Fundamentals</h5>
            <p className="card-text text-muted mb-3">Learn HTML, CSS, and JavaScript basics to build modern websites.</p>
            <div className="progress mb-3" style={{height: "6px"}}>
              <div className="progress-bar bg-success" style={{width: "65%"}}></div>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <small className="text-muted"><i className="fas fa-calendar me-1"></i> Ends: Dec 15, 2023</small>
              <div className="d-flex align-items-center">
                <span className="me-2 text-muted">65%</span>
                <button className="btn btn-outline-primary btn-sm">Continue</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default CourseCard