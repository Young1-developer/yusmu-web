import React,{useState} from 'react'
import { useParams } from 'react-router-dom'


const EditProject = () => {

  // Making request to get user project details 
  
  const params = useParams()
  console.log(params)

  const [projectUpdate, setProjectUpadate] = useState([])

  async function singleProject() {
    fetch(`./ProjectList/${params.id}`)
    .then(response => response.json())
    .then(data => setProjectUpadate(data))
  }
  singleProject()

  console.log(projectUpdate)

  // storing the user details in a state
     const [formData, setFormData] = useState({
      project_title:'Admin landing page',
      project_description:'this project is design and created using HTML,CSS and some javascript',
      isCompleted:'In Progress',
      live_url:'www.example.github,io/live',
      code_url:'www.example.github.io/project1',
      progress_rate:'70'
     })

     function handleChange(e){
      const {name,value} = e.target
      setFormData({
        ...formData,
        [name]: value,
      })
     }

console.log(formData.project_title)
     function handleSubmit(e){
      e.preventDefault();
      // send and save to database
      console.log(formData)
     }


  return (
    <div className='container'>
     <form className='mt-5' onSubmit={handleSubmit}>
    <div className="form-floating mb-2">
        <input type="text" 
        onChange={handleChange}
        value={formData.project_title} 
        className="form-control" 
        name='title'
         id="title" 
         placeholder="Project Title" 
         
         />
        <label htmlFor="title">Edit Project Title</label>
    </div>
    <div className="form-floating mb-2">
        <textarea className='form-control' rows={3} id='description' 
        name='description'
         value={formData.project_description}
         onChange={handleChange}
         ></textarea>
        <label htmlFor="description">Edit Project Description</label>
    </div>
    <div className='d-flex justify-content-between mb-2'>
    <div className="form-floating m-2 w-50">
        <input type="text" 
        name='liveUrl' 
        value={formData.live_url}
        onChange={handleChange} 
        className="form-control" id="view-live" 
        placeholder="View live" />
        <label htmlFor="view-live">Edit live url</label>
    </div>
    <div className="form-floating m-2 w-50">
        <input type="text" 
        name='codeUrl'
         value={formData.code_url}
         onChange={handleChange} 
         className="form-control" 
         id="view-code" 
         placeholder="View code" />
        <label htmlFor="view-code">View Code url</label>
    </div>
    </div>
    <div 
    className="form-floating mb-2" 
    name="IsCompleted"
    value={formData.isCompleted}
    onChange={handleChange}
    >
       <select className='form-control' id='isCompleted'>
        <option value='Pending Review'>Pending Review</option>
        <option value='In Progress'>In Progress</option>
        <option value='Just Started'>Just Started</option>
       </select>
       <label htmlFor='isCompleted' >Is Completed? </label>
    </div>
    
    <div className="form-floating mb-2">
       <select
        className='form-control' 
        id='progress-rate'
        name='progress_rate'
        value={formData.progress_rate}
        onChange={handleChange}
        
        >
        <option value='20' selected>20 (Just Started)</option>
        <option value='30'>30  (Just Started)</option>
        <option value='40'>40 (Just Started)</option>
        <option value='60'>60 (In Progress)</option>
        <option value='70'>70 (In Progress)</option>
        <option value='80'>80 (In Progress)</option>
        <option value='90'>90 (Pending Review)</option>
        <option value='100'>100 (Pending Review)</option>
       </select>
       <label htmlFor='progress-rate' > Progress rate </label>
    </div>
    <div className="d-flex justify-content-between mb-4">
        
    </div>
    <button type="submit" className="btn btn-primary w-100 mb-3">Create</button>
    
    </form>
    </div>
  )
}

export default EditProject