import React from 'react'

const CourseFilters = () => {
  return (
    <div className="courses-filters mt-4">
    <div className="d-flex flex-wrap gap-2 justify-content-between align-items-center">
      <div className="d-flex gap-2">
        <select className="form-select" style={{width: "auto"}}>
          <option>All Courses</option>
          <option>In Progress</option>
          <option>Completed</option>
          <option>Not Started</option>
        </select>
        <select className="form-select" style={{width: "auto"}} >
          <option>Sort by End Date</option>
          <option>Sort by Progress</option>
          <option>Sort by Name</option>
        </select>
      </div>
    </div>
  </div>
  )
}

export default CourseFilters