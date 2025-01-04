import React from 'react'

const FeaturesSection = () => {
  return (
    
// Features Section 
<section className="py-5 bg-light">
  <div className="container">
    <h2 className="text-center mb-5">Why Choose YUSMU</h2>
    <div className="row g-4">
      <div className="col-md-4">
        <div className="feature-card p-4 bg-white rounded-3 h-100 shadow-sm">
          <div className="feature-icon mb-3 text-primary">
            <i className="fas fa-laptop-code fa-3x"></i>
          </div>
          <h4>Hands-on Learning</h4>
          <p className="mb-0">Practice with real-world projects and build a professional portfolio.</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="feature-card p-4 bg-white rounded-3 h-100 shadow-sm">
          <div className="feature-icon mb-3 text-primary">
            <i className="fas fa-user-tie fa-3x"></i>
          </div>
          <h4>Expert Instructors</h4>
          <p className="mb-0">Learn from industry professionals with years of experience.</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="feature-card p-4 bg-white rounded-3 h-100 shadow-sm">
          <div className="feature-icon mb-3 text-primary">
            <i className="fas fa-clock fa-3x"></i>
          </div>
          <h4>Flexible Learning</h4>
          <p className="mb-0">Study at your own pace with lifetime access to course content.</p>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default FeaturesSection