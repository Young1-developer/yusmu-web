import React from 'react'

const StudentProfile = () => {

  // 1. writing fetch request to get student infor(firstName,LastName ... etc)
  // 2. render them after fetching
  return (
    
<div className="container py-4">
  <div className="profile-container" style={{maxWidth: "1200px", margin: "0 auto"}}>
     {/* Profile Header  */}
    <div className="card border-0 shadow-sm mb-4">
      <div className="card-body">
        <div className="row align-items-center">
          <div className="col-md-3 text-center">
            <div className="position-relative mb-3">
              <img src="https://images.websim.ai/avatar/default" alt="Profile Pic" className="rounded-circle profile-picture" style={{width: "150px", height: "150px", objectFit: "cover"}} />
              <button className="btn btn-sm btn-primary position-absolute bottom-0 end-0">
                <i className="fas fa-camera"></i>
              </button>
            </div>
          </div>
          <div className="col-md-9">
            <h3 className="mb-2">Usama Abdullahi</h3>
            <p className="text-muted mb-3">Student ID: YUS2023001</p>
            <div className="d-flex flex-wrap gap-3">
              <div className="badge bg-primary"><i className="fas fa-graduation-cap me-1"></i> Cyber Security</div>
              <div className="badge bg-success"><i className="fas fa-calendar me-1"></i> Year 2</div>
              <div className="badge bg-info"><i className="fas fa-book me-1"></i> 6 Courses Enrolled</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Profile Stats Cards  */}
    <div className="row g-4 mb-4">
      <div className="col-md-3">
        <div className="card border-0 shadow-sm h-100">
          <div className="card-body text-center">
            <i className="fas fa-trophy text-warning mb-3" style={{fontSize: "2rem"}}></i>
            <h5>Average Score</h5>
            <h3 className="text-primary">89%</h3>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card border-0 shadow-sm h-100">
          <div className="card-body text-center">
            <i className="fas fa-tasks text-success mb-3" style={{fontSize: "2rem"}}></i>
            <h5>Projects Completed</h5>
            <h3 className="text-primary">12</h3>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card border-0 shadow-sm h-100">
          <div className="card-body text-center">
            <i className="fas fa-clock text-info mb-3" style={{fontSize: "2rem"}}></i>
            <h5>Study Hours</h5>
            <h3 className="text-primary">156</h3>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card border-0 shadow-sm h-100">
          <div className="card-body text-center">
            <i className="fas fa-certificate text-danger mb-3" style={{fontSize: "2rem"}}></i>
            <h5>Certificates</h5>
            <h3 className="text-primary">4</h3>
          </div>
        </div>
      </div>
    </div>
{/* 
    Personal Information  */}
    <div className="card border-0 shadow-sm mb-4">
      <div className="card-body">
        <h4 className="mb-4">Personal Information</h4>
        <div className="row g-4">
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label text-muted">Full Name</label>
              <input type="text" className="form-control" value="John Doe" readonly />
            </div>
            <div className="mb-3">
              <label className="form-label text-muted">Email</label>
              <input type="email" className="form-control" value="john.doe@yusmu.edu" readonly />
            </div>
            <div className="mb-3">
              <label className="form-label text-muted">Phone</label>
              <input type="tel" className="form-control" value="+1 234 567 8900" readonly />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label text-muted">Department</label>
              <input type="text" className="form-control" value="Computer Science" readonly />
            </div>
            <div className="mb-3">
              <label className="form-label text-muted">Enrollment Date</label>
              <input type="text" className="form-control" value="September 2022" readonly />
            </div>
            <div className="mb-3">
              <label className="form-label text-muted">Status</label>
              <input type="text" className="form-control" value="Active" readonly />
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

    
    </div>
  </div>

  )
}

export default StudentProfile