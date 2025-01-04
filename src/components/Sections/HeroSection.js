import React from 'react'

const HeroSection = () => {
  return (
    
// Hero Section 
<section className="hero-section text-light d-flex align-items-center">
  <div className="floating-shapes">
    <svg className="shape" width="100" height="100" viewBox="0 0 100 100" style={{left: "10%", top: "20%"}}>
      <circle cx="50" cy="50" r="40" fill="white"/>
    </svg>
    <svg className="shape" width="100" height="100" viewBox="0 0 100 100" style={{left: "20%", top: "10%"}}>
      <circle cx="50" cy="50" r="40" fill="white"/>
    </svg>
    <svg className="shape" width="100" height="100" viewBox="0 0 100 100" style={{left: "30%", top: "40%"}}>
      <circle cx="50" cy="50" r="40" fill="white"/>
    </svg>
    {/* rectangle shapes section */}
    <svg className="shape" width="120" height="120" viewBox="0 0 120 120" style={{right: "15%", top: "30%" }}>
      <rect width="80" height="80" x="20" y="20" fill="white"/>
    </svg>
    <svg className="shape" width="120" height="120" viewBox="0 0 120 120" style={{right: "40%", top: "10%" }}>
      <rect width="80" height="80" x="20" y="20" fill="white"/>
    </svg> <svg className="shape" width="120" height="120" viewBox="0 0 120 120" style={{right: "30%", top: "30%" }}>
      <rect width="80" height="80" x="20" y="20" fill="white"/>
    </svg>
  </div>
  
  <div className="container hero-content">
    <div className="row align-items-center">
      <div className="col-lg-6">
        <h1 className="display-4 fw-bold mb-4">Transform Your IT Career</h1>
        <p className="lead mb-4">Master the latest technologies with our expert-led courses. Join thousands of successful graduates.</p>
        <div className="search-bar p-2 mb-4">
          <div className="input-group">
            <input type="text" className="form-control border-0 bg-transparent text-light" placeholder="Search courses..." />
            <button className="btn btn-primary">Search</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default HeroSection