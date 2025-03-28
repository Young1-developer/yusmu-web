import React from 'react'
import student_profile_info from './StudentProfileInfo'



const ProfileHeaderCard = () => {


    const profileHeaderElement = student_profile_info.map(student_info => (
        <div className="card border-0 shadow-sm mb-4">
      <div className="card-body">
        <div className="row align-items-center">
          <div className="col-md-3 text-center">
            <div className="position-relative mb-3">
              <img src={student_info.avatar} alt="Profile Pic" className="rounded-circle profile-picture" style={{width: "150px", height: "150px", objectFit: "cover"}} />
              <button className="btn btn-sm btn-primary position-absolute bottom-0 end-0">
                <i className="fas fa-camera"></i>
              </button>
            </div>
          </div>
          <div className="col-md-9">
            <h3 className="mb-2">{student_info.first_name} {student_info.last_name}</h3>
            <p className="text-muted mb-3">Student ID: {student_info.registration_number}</p>
            <div className="d-flex flex-wrap gap-3">
              <div className="badge bg-primary"><i className="fas fa-graduation-cap me-1"></i> {student_info.program_enrolled}</div>
              <div className="badge bg-success"><i className="fas fa-calendar me-1"></i> Year {student_info.current_year}</div>
              <div className="badge bg-info"><i className="fas fa-book me-1"></i> {student_info.number_of_courses_enrolled} Courses Enrolled</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    ))
  return (
    <div>
     {profileHeaderElement}
    </div>
  )
}

export default ProfileHeaderCard