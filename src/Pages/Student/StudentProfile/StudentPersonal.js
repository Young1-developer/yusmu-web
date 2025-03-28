import React from 'react'
import student_profile_info from './StudentProfileInfo'


const StudentPersonal = () => {
    const studentPersonalInfo = student_profile_info.map(info => (
        <div className="card border-0 shadow-sm mb-4">
        <div className="card-body">
          <h4 className="mb-4">Personal Information</h4>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label text-muted">Full Name</label>
                <input type="text" className="form-control" value={`${info.first_name} ${info.last_name}`} readonly />
              </div>
              <div className="mb-3">
                <label className="form-label text-muted">Email</label>
                <input type="email" className="form-control" value={info.email} readonly />
              </div>
              <div className="mb-3">
                <label className="form-label text-muted">Phone</label>
                <input type="tel" className="form-control" value={info.phone} readonly />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label text-muted">Program Enrolled</label>
                <input type="text" className="form-control" value={info.program_enrolled} readonly />
              </div>
              <div className="mb-3">
                <label className="form-label text-muted">Enrollment Date</label>
                <input type="text" className="form-control" value={info.enrollment_date} readonly />
              </div>
              <div className="mb-3">
                <label className="form-label text-muted">Status</label>
                <input type="text" className="form-control" value={info.status} readonly />
              </div>
            </div>
          </div>
          <div className="text-end mt-3">
            <button className="btn btn-primary">
              <i className="fas fa-edit me-2"></i>Edit Profile
            </button>
          </div>
        </div>
      </div>
  
    ))
  return (
    <div>
    {studentPersonalInfo}
    </div>
  )
}

export default StudentPersonal