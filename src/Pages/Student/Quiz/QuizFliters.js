import React from 'react'

const QuizFliters = () => {
  return (
    <div className="quiz-filters mt-4">
      <div className="d-flex flex-wrap gap-2 justify-content-between align-items-center">
        <div className="d-flex gap-2">
          <select className="form-select" style={{width: "auto"}}>
            <option>All Quizzes</option>
            <option>Available</option>
            <option>Upcoming</option>
            <option>Completed</option>
          </select>
          <select className="form-select" style={{width: "auto"}}>
            <option>Sort by Date</option>
            <option>Sort by Score</option>
            <option>Sort by Duration</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default QuizFliters