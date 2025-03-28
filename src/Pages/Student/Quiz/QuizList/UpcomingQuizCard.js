import React from 'react'
import upcoming_quiz from './UpcomingQuizList'

const UpcomingQuizCard = ({searchText}) => {

    const upcomingQuizElement = upcoming_quiz.filter(quiz => (
      quiz.quiz_title.toLowerCase().includes(searchText) ||
      quiz.is_available.toLowerCase().includes(searchText) ||
      quiz.date_created.toLowerCase().includes(searchText)
    )).map(quiz => (
     <div className="col-md-6 col-lg-4">
    <div className="card h-100 border-0 shadow-sm">
      <div className="card-body">
        <div className="d-flex justify-content-between mb-3">
          <span className="badge bg-warning text-dark">{quiz.is_available}</span>
          <span className="text-muted"><i className="fas fa-clock"></i> {quiz.quiz_minutes} mins</span>
        </div>
        <h5 className="card-title mb-3">{quiz.quiz_title}</h5>
        <p className="card-text text-muted mb-3">{quiz.quiz_desciption}</p>
        <div className="d-flex justify-content-between align-items-center">
          <small className="text-muted"><i className="fas fa-calendar me-1"></i> {quiz.date_created}</small>
          <button className="btn btn-outline-primary btn-sm" >{quiz.when_to_start}</button>
        </div>
      </div>
    </div>
  </div>

    ))
  return (
    <div className='row g-4'>
     {upcomingQuizElement}
    </div>
  )
}


//   <div className="row g-4">
       

//         <div className="col-md-6 col-lg-4">
//           <div className="card h-100 border-0 shadow-sm">
//             <div className="card-body">
//               <div className="d-flex justify-content-between mb-3">
//                 <span className="badge bg-success">Available</span>
//                 <span className="text-muted"><i className="fas fa-clock"></i> 30 mins</span>
//               </div>
//               <h5 className="card-title mb-3">JavaScript Fundamentals</h5>
//               <p className="card-text text-muted mb-3">Test your JavaScript programming skills and concepts.</p>
//               <div className="d-flex justify-content-between align-items-center">
//                 <small className="text-muted"><i className="fas fa-calendar me-1"></i> Today</small>
//                 <button className="btn btn-primary btn-sm">Start Quiz</button>
//               </div>
//             </div>
//           </div>
//         </div> 




export default UpcomingQuizCard