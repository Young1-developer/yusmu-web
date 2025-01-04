import React from 'react'

const PastQuiz = () => {
  return (
    <div className="col-md-6 col-lg-4">
    <div className="card h-100 border-0 shadow-sm">
      <div className="card-body">
        <div className="d-flex justify-content-between mb-3">
          <span className="badge bg-secondary">Completed</span>
          <span className="text-success fw-bold">Score: 85%</span>
        </div>
        <h5 className="card-title mb-3">React Components</h5>
        <p className="card-text text-muted mb-3">Assessment on React component lifecycle and hooks.</p>
        <div className="d-flex justify-content-between align-items-center">
          <small className="text-muted"><i className="fas fa-calendar me-1"></i> Dec 10, 2023</small>
          <button className="btn btn-outline-secondary btn-sm">Review</button>
        </div>
      </div>
    </div>
  </div>

  )
}

export default PastQuiz