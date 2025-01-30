import React from 'react'
import { Link } from 'react-router-dom'
import ProjectsCard from './ProjectsCard'
import ProjectsFilter from './ProjectsFilter'


const StudentProjects = () => {
  return (
    
<div class="container py-4">
  <div class="projects-container" style={{maxWidth: "1200px", margin: "0 auto"}}>
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h2>My Projects</h2>
      <button class="btn btn-primary">
        <i class="fas fa-plus me-2"></i>New Project
      </button>
    </div>

    <div class="row g-4">
       {/* Project Cards  */}
     <ProjectsCard />


     {/* rest of the projects fetch by API here */}


      <div class="col-md-6 col-lg-4">
        <div class="card h-100 border-0 shadow-sm">
          <div class="card-body">
            <div class="d-flex justify-content-between mb-3">
              <span class="badge bg-warning text-dark">Pending Review</span>
              <div class="dropdown">
                <button class="btn btn-link text-dark p-0" data-bs-toggle="dropdown">
                  <i class="fas fa-ellipsis-v"></i>
                </button>
                <ul class="dropdown-menu dropdown-menu-end">
                  <li><Link class="dropdown-item" to="https://example.com/edit-project"><i class="fas fa-edit me-2"></i>Edit</Link></li>
                  <li><Link class="dropdown-item" to="https://example.com/share-project"><i class="fas fa-share me-2"></i>Share</Link></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><Link class="dropdown-item text-danger" to="#"><i class="fas fa-trash me-2"></i>Delete</Link></li>
                </ul>
              </div>
            </div>
            <h5 class="card-title mb-3">E-commerce Dashboard</h5>
            <p class="card-text text-muted mb-3">Admin dashboard for managing products, orders and customers using MERN stack.</p>
            <div class="progress mb-3" style={{height: "6px"}}>
              <div class="progress-bar bg-warning" style={{width: "90%"}}></div>
            </div>
            <div class="d-flex justify-content-between align-items-center">
              <small class="text-muted">Due: Nov 15, 2023</small>
              <div class="d-flex align-items-center">
                <span class="me-2 text-muted">90%</span>
                <button class="btn btn-outline-primary btn-sm">View Details</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-6 col-lg-4">
        <div class="card h-100 border-0 shadow-sm">
          <div class="card-body">
            <div class="d-flex justify-content-between mb-3">
              <span class="badge bg-info">Just Started</span>
              <div class="dropdown">
                <button class="btn btn-link text-dark p-0" data-bs-toggle="dropdown">
                  <i class="fas fa-ellipsis-v"></i>
                </button>
                <ul class="dropdown-menu dropdown-menu-end">
                  <li><Link class="dropdown-item" to="https://example.com/edit-project"><i class="fas fa-edit me-2"></i>Edit</Link></li>
                  <li><Link class="dropdown-item" to="https://example.com/share-project"><i class="fas fa-share me-2"></i>Share</Link></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><Link class="dropdown-item text-danger" to="#"><i class="fas fa-trash me-2"></i>Delete</Link></li>
                </ul>
              </div>
            </div>
            <h5 class="card-title mb-3">Mobile App UI/UX</h5>
            <p class="card-text text-muted mb-3">Fitness tracking app interface design using Figma and implementing with React Native.</p>
            <div class="progress mb-3" style={{height: "6px"}}>
              <div class="progress-bar bg-info" style={{width: "15%"}}></div>
            </div>
            <div class="d-flex justify-content-between align-items-center">
              <small class="text-muted">Due: Dec 1, 2023</small>
              <div class="d-flex align-items-center">
                <span class="me-2 text-muted">15%</span>
                <button class="btn btn-outline-primary btn-sm">View Details</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

    {/* Project Filters  */}
    <ProjectsFilter />
  </div>
</div>
  )
}

export default StudentProjects