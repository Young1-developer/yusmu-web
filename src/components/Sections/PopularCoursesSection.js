import React from 'react'
import {Link} from 'react-router-dom'

const PopularCoursesSection = () => {
  return (
    
// Popular Courses Section 
<section className="py-5">
  <div className="container">
    <h2 className="text-center mb-5">Popular Courses</h2>
    <div className="row g-4">
      <div className="col-md-4">
        <div className="course-card p-0 overflow-hidden">
          <div className="course-image position-relative">
            <svg width="100%" height="200" viewBox="0 0 400 200">
              <rect width="400" height="200" fill="var(--primary)" opacity="0.1"/>
              <text x="50%" y="50%" text-anchor="middle" fill="var(--primary)" font-size="48">
                <tspan x="50%" dy="0">Web</tspan>
                <tspan x="50%" dy="48">Development</tspan>
              </text>
            </svg>
            <span className="badge bg-primary position-absolute top-0 end-0 m-3">Bestseller</span>
          </div>
          <div className="p-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <span className="badge bg-light text-primary">Programming</span>
              <span className="text-primary fw-bold">$99</span>
            </div>
            <h5 className="mb-3">Full Stack Web Development</h5>
            <p className="mb-3">Learn HTML, CSS, JavaScript, React, Node.js, and more.</p>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <i className="fas fa-star text-warning"></i>
                <span className="ms-1">4.9 (2.5k reviews)</span>
              </div>
              <Link to="https://example.com/courses/web-development" className="btn btn-primary">Enroll Now</Link>
            </div>
          </div>
        </div>
      </div>
      
      <div className="col-md-4">
        <div className="course-card p-0 overflow-hidden">
          <div className="course-image position-relative">
            <svg width="100%" height="200" viewBox="0 0 400 200">
              <rect width="400" height="200" fill="var(--secondary)" opacity="0.1"/>
              <text x="50%" y="50%" text-anchor="middle" fill="var(--secondary)" font-size="48">
                <tspan x="50%" dy="0">Data</tspan>
                <tspan x="50%" dy="48">Science</tspan>
              </text>
            </svg>
          </div>
          <div className="p-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <span className="badge bg-light text-primary">Data Science</span>
              <span className="text-primary fw-bold">$129</span>
            </div>
            <h5 className="mb-3">Data Science Masterclass</h5>
            <p className="mb-3">Master Python, Machine Learning, and Data Analysis.</p>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <i className="fas fa-star text-warning"></i>
                <span className="ms-1">4.8 (1.8k reviews)</span>
              </div>
              <Link to="https://example.com/courses/data-science" className="btn btn-primary">Enroll Now</Link>
            </div>
          </div>
        </div>
      </div>
      
      <div className="col-md-4">
        <div className="course-card p-0 overflow-hidden">
          <div className="course-image position-relative">
            <svg width="100%" height="200" viewBox="0 0 400 200">
              <rect width="400" height="200" fill="var(--accent)" opacity="0.1"/>
              <text x="50%" y="50%" text-anchor="middle" fill="var(--accent)" font-size="48">
                <tspan x="50%" dy="0">Cyber</tspan>
                <tspan x="50%" dy="48">Security</tspan>
              </text>
            </svg>
          </div>
          <div className="p-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <span className="badge bg-light text-primary">Security</span>
              <span className="text-primary fw-bold">$149</span>
            </div>
            <h5 className="mb-3">Cybersecurity Professional</h5>
            <p className="mb-3">Learn network security, ethical hacking, and defense.</p>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <i className="fas fa-star text-warning"></i>
                <span className="ms-1">4.9 (1.2k reviews)</span>
              </div>
              <Link to="https://example.com/courses/cybersecurity" className="btn btn-primary">Enroll Now</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default PopularCoursesSection