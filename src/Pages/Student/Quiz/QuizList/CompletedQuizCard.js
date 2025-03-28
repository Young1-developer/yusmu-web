import React from 'react'
import compeleted_quiz from './CompletedQuizList'



const CompletedQuizCard = ({searchText}) => {

    const quizCompletedElement = compeleted_quiz.filter(quiz => (
      quiz.quiz_title.toLowerCase().includes(searchText) ||
      quiz.is_available.toLowerCase().includes(searchText) ||
      quiz.date_submited.toLowerCase().includes(searchText)
    )).map(quiz => (
        
     <div className="col-md-6 col-lg-4">
    <div className="card h-100 border-0 shadow-sm">
      <div className="card-body">
        <div className="d-flex justify-content-between mb-3">
          <span className="badge bg-secondary">{quiz.is_available}</span>
          <span className="text-success fw-bold">Score: {quiz.score}%</span>
        </div>
        <h5 className="card-title mb-3">{quiz.quiz_title}</h5>
        <p className="card-text text-muted mb-3">{quiz.quiz_description}</p>
        <div className="d-flex justify-content-between align-items-center">
          <small className="text-muted"><i className="fas fa-calendar me-1"></i> {quiz.date_submited}</small>
          <button className="btn btn-outline-secondary btn-sm">Review</button>
        </div>
      </div>
    </div>
  </div>
  
    ))
  return (
    <div className='row g-4'>
      {quizCompletedElement}
    </div>
  )
}




//   <div className="row g-4">
       
//         rest of the quizes here fetch by API 

//      <div className="col-md-6 col-lg-4">
//           <div className="card h-100 border-0 shadow-sm">
//             <div className="card-body">
//               <div className="d-flex justify-content-between mb-3">
//                 <span className="badge bg-secondary">Completed</span>
//                 <span className="text-success fw-bold">Score: 92%</span>
//               </div>
//               <h5 className="card-title mb-3">CSS Grid & Flexbox</h5>
//               <p className="card-text text-muted mb-3">Layout and responsive design principles assessment.</p>
//               <div className="d-flex justify-content-between align-items-center">
//                 <small className="text-muted"><i className="fas fa-calendar me-1"></i> Dec 5, 2023</small>
//                 <button className="btn btn-outline-secondary btn-sm">Review</button>
//               </div>
//             </div>
//           </div>
//         </div> 

export default CompletedQuizCard