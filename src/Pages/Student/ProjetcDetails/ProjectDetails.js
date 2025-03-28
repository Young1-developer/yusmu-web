import React from 'react'

const ProjectDetails = () => {

    // import serchParams to get the id of the projects
    // make a fetch request to get that specific project
    // store it in a state
    // check  if the state is empty if yes? do something else render them on screen
    

    
  return (
    <div className='container'>
        <h2 className='mt-5'>Project Details</h2>
    <div className='card mt-5 mb-5 p-3'>
     <div className='card-body p-2'>
        <div className='card-content card-header'>
            <h3 className='card-title'><strong>Project Title: </strong>Ecommerce Landing page</h3>
        </div>
        <div className='card-text m-3 p-3'>
                <p className='text-muted'>
                  <strong>Description:</strong>Serving our academic community with dedication and excellence.
                  
                  </p>
           <div className=' d-flex justify-content-between align-content-center w-50'>
            <small><strong>Date Created:</strong> 02/sep/2025</small>
            <small><strong>Completed Status:</strong> In Progress</small>
           </div>
           <ul className='mt-2'>
            <li>Live URL: www.example.github.io/livewebsite.com</li>
            <li>Code URL: www.example.github.io/projectcode.io</li>
           </ul>
            </div>
     </div>
    </div>
    </div>


// <div className='container'>
      
// <div className='card mt-5 mb-5 p-3'>
//  <div className='card-body p-2'>
//     <div className='card-content card-header'>
//         <h3 className='card-title'><strong>Search Result: </strong>{searchText} Not Found</h3>
//     </div>
//     <div className='card-text m-3 p-3'>
//             <p className='text-muted'>
//               <strong>Advice:</strong>Try by any chance to communicate with a tutor or instructor.
              
//               </p>
//  </div>
//  </div>
// </div>
// </div>
  )
}

export default ProjectDetails