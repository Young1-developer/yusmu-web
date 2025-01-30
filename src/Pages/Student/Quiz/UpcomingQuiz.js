import React from 'react'

const UpcomingQuiz = () => {

  // 1. making a fecth request to get quizs for a student
  // 2. render them
  return (
    <div className="col-md-6 col-lg-4">
    <div className="card h-100 border-0 shadow-sm">
      <div className="card-body">
        <div className="d-flex justify-content-between mb-3">
          <span className="badge bg-warning text-dark">Opens Soon</span>
          <span className="text-muted"><i className="fas fa-clock"></i> 45 mins</span>
        </div>
        <h5 className="card-title mb-3">HTML & CSS Basics</h5>
        <p className="card-text text-muted mb-3">Test your knowledge of fundamental web development concepts.</p>
        <div className="d-flex justify-content-between align-items-center">
          <small className="text-muted"><i className="fas fa-calendar me-1"></i> Dec 20, 2023</small>
          <button className="btn btn-outline-primary btn-sm" disabled>Opens in 2 days</button>
        </div>
      </div>
    </div>
  </div>

  )
}

export default UpcomingQuiz