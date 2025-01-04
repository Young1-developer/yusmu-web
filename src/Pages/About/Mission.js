import React from 'react'

const Mission = () => {
  return (
    
// Mission Section
<section className="bg-light py-5">
  <div className="container">
    <div className="row text-center mb-5">
      <div className="col-lg-8 mx-auto">
        <h2 className="section-title">Our Mission & Vision</h2>
        <p className="lead mt-4">To provide accessible, high-quality IT education and innovative solutions that empower individuals and organizations to thrive in the digital age.</p>
      </div>
    </div>
    <div className="row g-4">
      <div className="col-md-4">
        <div className="card h-100 border-0 shadow-sm">
          <div className="card-body text-center p-4">
            <div className="rounded-circle bg-primary p-3 d-inline-block mb-3">
              <i className="fas fa-graduation-cap text-white fa-2x"></i>
            </div>
            <h4>Quality Education</h4>
            <p>Delivering industry-relevant curriculum taught by experienced professionals.</p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card h-100 border-0 shadow-sm">
          <div className="card-body text-center p-4">
            <div className="rounded-circle bg-primary p-3 d-inline-block mb-3">
              <i className="fas fa-users text-white fa-2x"></i>
            </div>
            <h4>Global Community</h4>
            <p>Building a diverse community of learners and technology enthusiasts.</p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card h-100 border-0 shadow-sm">
          <div className="card-body text-center p-4">
            <div className="rounded-circle bg-primary p-3 d-inline-block mb-3">
              <i className="fas fa-rocket text-white fa-2x"></i>
            </div>
            <h4>Innovation</h4>
            <p>Staying at the forefront of technological advancement and industry trends.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Mission