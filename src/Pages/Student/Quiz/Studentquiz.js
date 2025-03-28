import React, { useState } from 'react'
import QuizFliters from './QuizFliters'
import UpcomingQuizCard from './QuizList/UpcomingQuizCard'
import CompletedQuizCard from './QuizList/CompletedQuizCard'

const Studentquiz = () => {

  const [searchText,setSearchText] = useState('')
  const handleInputChange = (e) => setSearchText(e.target.value);
   
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
          <input 
          type="text"
          className="form-control border-start-0"
          placeholder="Search quizzes..." 
          value={searchText}  
          onChange={handleInputChange}
            />
        </div>
      </div>
    </div>

{/*  Upcoming Quizzes Section  */}
    <div className="mb-5">
      <h4 className="mb-3">Upcoming Quizzes</h4>
        <UpcomingQuizCard searchText={searchText} />
    </div>

    {/* Past Quizzes Section  */}
    <div className="mb-4">
      <h4 className="mb-3">Completed Quizzes</h4>
      <CompletedQuizCard  searchText={searchText}/>
    </div>
 
  {/* Quiz Filters */}
    <QuizFliters />

    
  </div>
</div>
  )
}

export default Studentquiz