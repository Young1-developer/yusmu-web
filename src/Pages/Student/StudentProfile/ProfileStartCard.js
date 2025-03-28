import React from 'react'
import student_profile_info from './StudentProfileInfo'


const ProfileStartCard = () => {

    const student_start = student_profile_info.map(starts => (
        <div className='row g-4 mb-4'>
        <div className="col-md-3">
        <div className="card border-0 shadow-sm h-100">
          <div className="card-body text-center">
            <i className="fas fa-trophy text-warning mb-3" style={{fontSize: "2rem"}}></i>
            <h5>Average Score</h5>
            <h3 className="text-primary">
                {starts.records.map(record => (
                    record.average_score
                ))}%</h3>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card border-0 shadow-sm h-100">
          <div className="card-body text-center">
            <i className="fas fa-tasks text-success mb-3" style={{fontSize: "2rem"}}></i>
            <h5>Projects Completed</h5>
            <h3 className="text-primary">
            {starts.records.map(record => (
                    record.project_completed
                ))}
            </h3>
          </div>
        </div>
      </div>
 
      <div className="col-md-3">
        <div className="card border-0 shadow-sm h-100">
          <div className="card-body text-center">
            <i className="fas fa-certificate text-danger mb-3" style={{fontSize: "2rem"}}></i>
            <h5>Certificates</h5>
            <h3 className="text-primary">
            {starts.records.map(record => (
                    record.certificates
                ))}
            </h3>
          </div>
        </div>
      </div>
        </div>
    ))
  return (
    <div>
   {student_start}
    </div>
  )
}

export default ProfileStartCard