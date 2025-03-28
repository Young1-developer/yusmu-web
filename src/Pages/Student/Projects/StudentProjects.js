import React from 'react'
import { NavLink } from 'react-router-dom'
import ProjectsCard from './ProjectsCard'




const StudentProjects = () => {
  return (
    <div>
<div className="container py-4">
  <div className="projects-container" style={{maxWidth: "1200px", margin: "0 auto"}}>
    <div className="d-flex justify-content-between align-items-center mb-4">
      <h2>My Projects</h2>
      
        <NavLink className="btn btn-primary" to="create" >
        <i className="fas fa-plus me-2"></i>New Project
        </NavLink>
        
    </div>

    
       {/* Project Cards  */}
     <ProjectsCard />
     {/* rest of the projects fetch by API here */}
 
    {/* Project Filters  */}
   
  </div>
</div>
     
    </div>

  )
}

export default StudentProjects