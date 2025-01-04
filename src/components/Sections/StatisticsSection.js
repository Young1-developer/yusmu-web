import React from 'react'

const StatisticsSection = () => {
  return (
   
// Statistics Section 
<section className="stats-section py-5">
  <div className="container">
    <div className="row g-4">
      <div className="col-md-3">
        <div className="stat-card">
          <i className="fas fa-users fa-2x mb-3 text-primary"></i>
          <h3 className="counter">10,000+</h3>
          <p>Students Enrolled</p>
        </div>
      </div>
      <div className="col-md-3">
        <div className="stat-card">
          <i className="fas fa-graduation-cap fa-2x mb-3 text-primary"></i>
          <h3 className="counter">500+</h3>
          <p>Courses Available</p>
        </div>
      </div>
      <div className="col-md-3">
        <div className="stat-card">
          <i className="fas fa-certificate fa-2x mb-3 text-primary"></i>
          <h3 className="counter">15,000+</h3>
          <p>Certificates Awarded</p>
        </div>
      </div>
      <div className="col-md-3">
        <div className="stat-card">
          <i className="fas fa-star fa-2x mb-3 text-primary"></i>
          <h3 className="counter">4.8</h3>
          <p>Average Rating</p>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default StatisticsSection