import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import './Projects.css'


const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [newProject, setNewProject] = useState({
      title: '',
      description: '',
      dueDate: '',
      course: '',
      students: [],
      requirements: '',
      status: 'active'
    });
    const [validationErrors, setValidationErrors] = useState({});
    const [showPreview, setShowPreview] = useState(false);
    const validateProject = () => {
      const errors = {};
      if (!newProject.title.trim()) errors.title = 'Title is required';
      if (!newProject.description.trim()) errors.description = 'Description is required';
      if (!newProject.dueDate) errors.dueDate = 'Due date is required';
      if (!newProject.course) errors.course = 'Course is required';
      if (!newProject.requirements.trim()) errors.requirements = 'Requirements are required';
      setValidationErrors(errors);
      return Object.keys(errors).length === 0;
    };
    const handleSubmit = e => {
      e.preventDefault();
      if (validateProject()) {
        setProjects([...projects, {
          ...newProject,
          id: Date.now(),
          createdAt: new Date().toISOString(),
          submissions: 0
        }]);
        setNewProject({
          title: '',
          description: '',
          dueDate: '',
          course: '',
          students: [],
          requirements: '',
          status: 'active'
        });
        setValidationErrors({});
      }
    };
    const deleteProject = id => {
      setProjects(projects.filter(project => project.id !== id));
    };
    const filteredProjects = projects.filter(project => project.title.toLowerCase().includes(searchTerm.toLowerCase()) || project.description.toLowerCase().includes(searchTerm.toLowerCase()));
    const availableStudents = [{
      id: 1,
      name: "Alice Johnson",
      avatar: "https://images.websim.ai/avatar/alice"
    }, {
      id: 2,
      name: "Bob Smith",
      avatar: "https://images.websim.ai/avatar/bob"
    }];
    return <div className="container py-4">
        <h2 className="mb-4">Projects</h2>
  
        <div className="card mb-4">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Project Title</label>
                <input type="text" className={`form-control ${validationErrors.title ? 'is-invalid' : ''}`} value={newProject.title} onChange={e => setNewProject({
                ...newProject,
                title: e.target.value
              })} />
                {validationErrors.title && <div className="validation-error">{validationErrors.title}</div>}
              </div>
  
              <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea className={`form-control ${validationErrors.description ? 'is-invalid' : ''}`} rows="3" value={newProject.description} onChange={e => setNewProject({
                ...newProject,
                description: e.target.value
              })} />
                {validationErrors.description && <div className="validation-error">{validationErrors.description}</div>}
              </div>
  
              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label">Due Date</label>
                  <input type="date" className={`form-control ${validationErrors.dueDate ? 'is-invalid' : ''}`} value={newProject.dueDate} onChange={e => setNewProject({
                  ...newProject,
                  dueDate: e.target.value
                })} />
                  {validationErrors.dueDate && <div className="validation-error">{validationErrors.dueDate}</div>}
                </div>
                <div className="col-md-6">
                  <label className="form-label">Course</label>
                  <select className={`form-select ${validationErrors.course ? 'is-invalid' : ''}`} value={newProject.course} onChange={e => setNewProject({
                  ...newProject,
                  course: e.target.value
                })}>
                    <option value="">Select Course...</option>
                    <option value="CS101">CS101 - Intro to Programming</option>
                    <option value="CS201">CS201 - Data Structures</option>
                  </select>
                  {validationErrors.course && <div className="validation-error">{validationErrors.course}</div>}
                </div>
              </div>
  
              <div className="mb-3">
                <label className="form-label">Assign Students</label>
                <select multiple className="form-select" value={newProject.students} onChange={e => setNewProject({
                ...newProject,
                students: Array.from(e.target.selectedOptions, option => parseInt(option.value))
              })}>
                  {availableStudents.map(student => <option key={student.id} value={student.id}>{student.name}</option>)}
                </select>
              </div>
  
              <div className="mb-3">
                <label className="form-label">Requirements</label>
                <textarea className={`form-control ${validationErrors.requirements ? 'is-invalid' : ''}`} rows="3" value={newProject.requirements} onChange={e => setNewProject({
                ...newProject,
                requirements: e.target.value
              })} placeholder="Enter project requirements..." />
                {validationErrors.requirements && <div className="validation-error">{validationErrors.requirements}</div>}
              </div>
  
              <div className="mb-3">
                <label className="form-label">Status</label>
                <select className="form-select" value={newProject.status} onChange={e => setNewProject({
                ...newProject,
                status: e.target.value
              })}>
                  <option value="active">Active</option>
                  <option value="draft">Draft</option>
                  <option value="completed">Completed</option>
                </select>
              </div>
  
              <div>
                <button type="submit" className="btn btn-primary me-2">Create Project</button>
                <button type="button" className="btn btn-secondary" onClick={() => setShowPreview(true)}>
                  Preview
                </button>
              </div>
            </form>
          </div>
        </div>
  
        <div className="project-filter">
          <input type="text" className="form-control" placeholder="Search projects..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
        </div>
  
        <div className="row">
          {filteredProjects.map(project => <div key={project.id} className="col-12">
              <div className="card project-card">
                <div className="card-body">
                  <span className={`badge project-status-badge ${project.status === 'active' ? 'bg-success' : project.status === 'draft' ? 'bg-warning' : 'bg-secondary'}`}>
                    {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                  </span>
                  
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  
                  <div className="row mb-2">
                    <div className="col-md-6">
                      <small className="text-muted">
                        Course: {project.course}
                      </small>
                    </div>
                    <div className="col-md-6">
                      <small className="text-muted">
                        Due: {new Date(project.dueDate).toLocaleDateString()}
                      </small>
                    </div>
                  </div>
  
                  <div className="student-chips">
                    {project.students.map(studentId => {
                  const student = availableStudents.find(s => s.id === studentId);
                  return student ? <div key={student.id} className="student-chip">
                          <img src={student.avatar} alt={student.name} />
                          {student.name}
                        </div> : null;
                })}
                  </div>
  
                  <div className="mt-3">
                    <button className="btn btn-sm btn-danger me-2" onClick={() => deleteProject(project.id)}>
                      🗑️ Delete
                    </button>
                    <Link to={`/projects/${project.id}/submissions`} className="btn btn-sm btn-info">
                      📥 View Submissions ({project.submissions})
                    </Link>
                  </div>
                </div>
              </div>
            </div>)}
        </div>
  
        {showPreview && <div className="quiz-preview-modal" onClick={() => setShowPreview(false)}>
            <div className="quiz-preview-content" onClick={e => e.stopPropagation()}>
              <h3>{newProject.title}</h3>
              <p>{newProject.description}</p>
              <p><strong>Due Date:</strong> {newProject.dueDate}</p>
              <p><strong>Course:</strong> {newProject.course}</p>
              <p><strong>Requirements:</strong></p>
              <p>{newProject.requirements}</p>
              <div className="student-chips">
                {newProject.students.map(studentId => {
              const student = availableStudents.find(s => s.id === studentId);
              return student ? <div key={student.id} className="student-chip">
                      <img src={student.avatar} alt={student.name} />
                      {student.name}
                    </div> : null;
            })}
              </div>
              <button className="btn btn-secondary mt-3" onClick={() => setShowPreview(false)}>
                Close Preview
              </button>
            </div>
          </div>}
      </div>;
  }

  export default Projects