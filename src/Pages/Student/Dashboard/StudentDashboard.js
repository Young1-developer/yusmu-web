import React from 'react'
import './Dashboard.css'
import { Link } from 'react-router-dom'

const StudentDashboard = () => {
  return (
    
<div className="container py-4">
  <div className="d-flex justify-content-between align-items-center mb-4">
    <h2>Dashboard</h2>
    <div className="btn-group">
      <button className="btn btn-outline-primary">
        <i className="fas fa-bell"></i>
      </button>
      <button className="btn btn-outline-primary">
        <i className="fas fa-envelope"></i>
      </button>
    </div>
  </div>

   {/* Stats Grid  */}
  <div className="stats-grid">
    <div className="stat-card">
      <h3>6</h3>
      <p className="text-muted mb-0">Enrolled Courses</p>
    </div>
    <div className="stat-card">
      <h3>85%</h3>
      <p className="text-muted mb-0">Average Progress</p>
    </div>
    <div className="stat-card">
      <h3>12</h3>
      <p className="text-muted mb-0">Completed Projects</p>
    </div>
    <div className="stat-card">
      <h3>92%</h3>
      <p className="text-muted mb-0">Quiz Score</p>
    </div>
  </div>

  {/* Current Courses  */}
  <h4 className="mb-3">Current Courses</h4>
  <div className="course-grid">
    <div className="course-card">
      <img src="https://images.websim.ai/v1/course/web-development" alt="Web Development" className="course-image" />
      <div className="course-content">
        <h5>Web Development Fundamentals</h5>
        <div className="progress">
          <div className="progress-bar bg-primary" style={{width: "75%"}}></div>
        </div>
        <div className="d-flex justify-content-between">
          <span>Progress: 75%</span>
          <Link to="https://example.com/course/web-dev" className="btn btn-sm btn-primary">Continue</Link>
        </div>
      </div>
    </div>

    <div className="course-card">
      <img src="https://images.websim.ai/v1/course/python" alt="Python Programming" className="course-image" />
      <div className="course-content">
        <h5>Python Programming</h5>
        <div className="progress">
          <div className="progress-bar bg-primary" style={{width: "45%"}}></div>
        </div>
        <div className="d-flex justify-content-between">
          <span>Progress: 45%</span>
          <Link to="https://example.com/course/python" className="btn btn-sm btn-primary">Continue</Link>
        </div>
      </div>
    </div>
  </div>

   {/* Upcoming Events  */}
  <h4 className="mt-4 mb-3">Upcoming Events</h4>
  <div className="upcoming-grid">
    <div className="upcoming-card">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h6 className="mb-0">Database Design Quiz</h6>
        <span className="badge bg-warning">Tomorrow</span>
      </div>
      <p className="text-muted mb-0">Chapter 5 - Database Normalization</p>
    </div>

    <div className="upcoming-card">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h6 className="mb-0">Project Submission</h6>
        <span className="badge bg-danger">Due in 3 days</span>
      </div>
      <p className="text-muted mb-0">Web Development - Final Project</p>
    </div>
  </div>
</div>

  )
}

export default StudentDashboard