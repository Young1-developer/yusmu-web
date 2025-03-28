import React from 'react'
import SearchProject from './SearchProject'


const ProjectsFilter = ({searchText,handleInputChange}) => {
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
       <SearchProject searchText={searchText} handleInputChange={handleInputChange} />
      </div>
    </div>
  </div>
  )
}

export default ProjectsFilter