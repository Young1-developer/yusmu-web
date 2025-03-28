import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import ProjectList from './ProjectList'
import ProjectsFilter from './ProjectsFilter'

const ProjectsCard = () => {
  
 function deleteProject(ProjectId){
  return ProjectList.filter(project => project.id !== ProjectId)
 }

 
  const [searchText,setSearchText] = useState('')
  // function to get filtered term
  const handleInputChange = (e) => setSearchText(e.target.value);
  


  const projects = ProjectList.filter(project => 
    project.project_title.toLowerCase().includes(searchText.toLowerCase()) ||
    project.isCompleted.toLowerCase().includes(searchText.toLowerCase()) ||
    project.date.toLowerCase().includes(searchText.toLowerCase())

  ).map(project => (
    <div className="col-md-6 col-lg-4" key={project.id}>
    <div className="card h-100 border-0 shadow-sm">
      <div className="card-body">
        <div className="d-flex justify-content-between mb-3">
          {project.isCompleted === 'In Progress' && 
          <span className="badge bg-success" >{project.isCompleted}</span>
          }
            {project.isCompleted === 'Just Started' && 
          <span className="badge bg-info" >{project.isCompleted}</span>
          }
            {project.isCompleted === 'Pending Review' && 
          <span className="badge bg-warning text-dark" >{project.isCompleted}</span>
          }
          <div className="dropdown">
            <button className="btn btn-link text-dark p-0" data-bs-toggle="dropdown">
              <i className="fas fa-ellipsis-v"></i>
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li><Link className="dropdown-item" to={`${project.id}/editproject`}><i className="fas fa-edit me-2"></i>Edit</Link></li>
              <li><Link className="dropdown-item" to="https://example.com/share-project"><i className="fas fa-share me-2"></i>Share</Link></li>
              <li><hr className="dropdown-divider" /></li>
              <li onClick={() => deleteProject(project.id)}><Link className="dropdown-item text-danger" to="#"><i className="fas fa-trash me-2"></i>Delete</Link></li>
            </ul>
          </div>
        </div>
        <h5 className="card-title mb-3">{project.project_title}</h5>
        <p className="card-text text-muted mb-3">{project.description}</p>
        <div className="progress mb-3" style={{height: "6px"}}>
          <div 
          className= {`${project.progress_rate <= 20 || project.progress_rate < 50 ? 'bg-info' :
            project.progress_rate >= 60 && project.progress_rate <= 80 ?  'bg-success' : project.progress_rate > 80 ? 'bg-warning': ''}`}
           
           style={{width: `${(project.isCompleted === 'In Progress' || project.isCompleted === 'Pending Review' || project.isCompleted === 'Just Started') &&  (project.progress_rate >= 60 ) && (project.progress_rate <= 80) ? `${project.progress_rate}%`
           
           : (project.isCompleted === 'Just Started' || project.isCompleted === 'In Progress' || project.isCompleted === 'Pending Review' )  && (project.progress_rate >= 20 ) && (project.progress_rate <= 50 ) ? `${project.progress_rate}%` 
           
           : (project.isCompleted === 'Pending Review' || project.isCompleted === 'In Progress' || project.isCompleted === 'Just Started' ) && (project.progress_rate > 80) ? `${project.progress_rate}%`  :'' }`}}></div>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <small className="text-muted">Due: {project.date}</small>
          <div className="d-flex align-items-center">
            <span className="me-2 text-muted">{project.progress_rate}%</span>
            <button className="btn btn-outline-primary btn-sm">
              <Link className="btn btn-outline-primary btn-sm" to={`projectdetails/${project.id}`}>View Details</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

 ))
  return (
    <div>
       <div className='row g-4'>
      {projects}
     </div>
      <ProjectsFilter  searchText={searchText} handleInputChange={handleInputChange}/>
    </div>
    
  )
}

export default ProjectsCard