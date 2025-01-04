import React from 'react'

const ProjectsFilter = () => {
  return (
    <div class="projects-filters mt-4">
    <div class="d-flex flex-wrap gap-2 justify-content-between align-items-center">
      <div class="d-flex gap-2">
        <select class="form-select" style={{width: "auto"}}>
          <option>All Projects</option>
          <option>In Progress</option>
          <option>Completed</option>
          <option>Pending Review</option>
        </select>
        <select class="form-select" style={{width: "auto"}}>
          <option>Sort by Due Date</option>
          <option>Sort by Progress</option>
          <option>Sort by Name</option>
        </select>
      </div>
      <div class="d-flex gap-2">
        <div class="input-group">
          <span class="input-group-text bg-white border-end-0">
            <i class="fas fa-search text-muted"></i>
          </span>
          <input type="text" class="form-control border-start-0" placeholder="Search projects..." />
        </div>
      </div>
    </div>
  </div>
  )
}

export default ProjectsFilter