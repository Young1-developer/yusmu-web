import React from 'react'
import { Link } from 'react-router-dom'

const ProjectsCard = () => {
  return (
    <div class="col-md-6 col-lg-4">
    <div class="card h-100 border-0 shadow-sm">
      <div class="card-body">
        <div class="d-flex justify-content-between mb-3">
          <span class="badge bg-success">In Progress</span>
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
        <h5 class="card-title mb-3">Web Development Portfolio</h5>
        <p class="card-text text-muted mb-3">Personal portfolio website showcasing projects and skills using React and Bootstrap.</p>
        <div class="progress mb-3" style={{height: "6px"}}>
          <div class="progress-bar bg-success" style={{width: "75%"}}></div>
        </div>
        <div class="d-flex justify-content-between align-items-center">
          <small class="text-muted">Due: Oct 30, 2023</small>
          <div class="d-flex align-items-center">
            <span class="me-2 text-muted">75%</span>
            <button class="btn btn-outline-primary btn-sm">View Details</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  )
}

export default ProjectsCard