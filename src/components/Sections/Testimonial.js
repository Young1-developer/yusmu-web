import React from 'react'

const Testimonial = () => {
  return (
    
// Testimonials Section 
<section className="py-5">
  <div className="container">
    <h2 className="text-center mb-5">What Our Students Say</h2>
    <div className="row">
      <div className="col-md-4">
        <div className="testimonial-card">
          <div className="mb-3">
            <i className="fas fa-quote-left fa-2x text-primary"></i>
          </div>
          <p className="mb-4">"The courses at YUSMU completely transformed my career. I went from a beginner to a professional developer in just 6 months."</p>
          <div className="d-flex align-items-center">
            <svg width="50" height="50" viewBox="0 0 50 50">
              <circle cx="25" cy="25" r="25" fill="#e2e8f0"/>
              <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="#64748b">JD</text>
            </svg>
            <div className="ms-3">
              <h6 className="mb-0">John Doe</h6>
              <small className="text-muted">Web Developer</small>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="testimonial-card">
          <div className="mb-3">
            <i className="fas fa-quote-left fa-2x text-primary"></i>
          </div>
          <p className="mb-4">"The instructors are extremely knowledgeable and supportive. The course content is up-to-date with industry standards."</p>
          <div className="d-flex align-items-center">
            <svg width="50" height="50" viewBox="0 0 50 50">
              <circle cx="25" cy="25" r="25" fill="#e2e8f0"/>
              <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="#64748b">JS</text>
            </svg>
            <div className="ms-3">
              <h6 className="mb-0">Jane Smith</h6>
              <small className="text-muted">UI/UX Designer</small>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="testimonial-card">
          <div className="mb-3">
            <i className="fas fa-quote-left fa-2x text-primary"></i>
          </div>
          <p className="mb-4">"The cybersecurity course helped me land my dream job. The hands-on projects were particularly valuable."</p>
          <div className="d-flex align-items-center">
            <svg width="50" height="50" viewBox="0 0 50 50">
              <circle cx="25" cy="25" r="25" fill="#e2e8f0"/>
              <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="#64748b">MP</text>
            </svg>
            <div className="ms-3">
              <h6 className="mb-0">Mike Peterson</h6>
              <small className="text-muted">Security Analyst</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Testimonial