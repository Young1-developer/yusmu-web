import React from 'react'

const projectCreate = () => {
  return (
    <div className='container'>
<form className='mt-5'>
    <div className="form-floating mb-2">
        <input type="text" className="form-control" id="title" placeholder="Project Title" />
        <label htmlFor="title">Project Title</label>
    </div>
    <div className="form-floating mb-2">
        <textarea className='form-control' rows={3} id='description' placeholder='This is dashboard for E-commerce...'></textarea>
        <label htmlFor="description">Project Description</label>
    </div>
    <div className='d-flex justify-content-between mb-2'>
    <div className="form-floating m-2 w-50">
        <input type="text" className="form-control" id="view-live" placeholder="View live" />
        <label htmlFor="view-live">View live url</label>
    </div>
    <div className="form-floating m-2 w-50">
        <input type="text" className="form-control" id="view-code" placeholder="View code" />
        <label htmlFor="view-code">View Code url</label>
    </div>
    </div>
    <div className="form-floating mb-2">
       <select className='form-control' id='isCompleted'>
        <option value='Pending Review'>Pending Review</option>
        <option value='In Progress'>In Progress</option>
        <option value='Just Started'>Just Started</option>
       </select>
       <label htmlFor='isCompleted' >Is Completed? </label>
    </div>
    
    <div className="form-floating mb-2">
       <select className='form-control' id='progress-rate'>
        <option value='20'>20 (Just Started)</option>
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

export default projectCreate