import React from 'react'
import QuizFliters from './QuizFliters'
import PastQuiz from './PastQuiz'
import UpcomingQuiz from './UpcomingQuiz'

const Studentquiz = () => {
  return (
    
<div className="container py-4">
  <div className="quiz-container" style={{maxWidth: "1200px", margin: "0 auto"}}>
    <div className="d-flex justify-content-between align-items-center mb-4">
      <h2>Quiz Center</h2>
      <div className="d-flex gap-2">
        <div className="input-group">
          <span className="input-group-text bg-white border-end-0">
            <i className="fas fa-search text-muted"></i>
          </span>
          <input type="text" className="form-control border-start-0" placeholder="Search quizzes..." />
        </div>
      </div>
    </div>
{/* 
     Upcoming Quizzes Section  */}
    <div className="mb-5">
      <h4 className="mb-3">Upcoming Quizzes</h4>
      <div className="row g-4">
       <UpcomingQuiz />

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body">
              <div className="d-flex justify-content-between mb-3">
                <span className="badge bg-success">Available</span>
                <span className="text-muted"><i className="fas fa-clock"></i> 30 mins</span>
              </div>
              <h5 className="card-title mb-3">JavaScript Fundamentals</h5>
              <p className="card-text text-muted mb-3">Test your JavaScript programming skills and concepts.</p>
              <div className="d-flex justify-content-between align-items-center">
                <small className="text-muted"><i className="fas fa-calendar me-1"></i> Today</small>
                <button className="btn btn-primary btn-sm">Start Quiz</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Past Quizzes Section  */}
    <div className="mb-4">
      <h4 className="mb-3">Completed Quizzes</h4>
      <div className="row g-4">
       <PastQuiz />
       {/* rest of the quizes here fetch by API */}

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body">
              <div className="d-flex justify-content-between mb-3">
                <span className="badge bg-secondary">Completed</span>
                <span className="text-success fw-bold">Score: 92%</span>
              </div>
              <h5 className="card-title mb-3">CSS Grid & Flexbox</h5>
              <p className="card-text text-muted mb-3">Layout and responsive design principles assessment.</p>
              <div className="d-flex justify-content-between align-items-center">
                <small className="text-muted"><i className="fas fa-calendar me-1"></i> Dec 5, 2023</small>
                <button className="btn btn-outline-secondary btn-sm">Review</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
{/* 
     Quiz Filters */}
    <QuizFliters />

    
  </div>
</div>
  )
}

export default Studentquiz