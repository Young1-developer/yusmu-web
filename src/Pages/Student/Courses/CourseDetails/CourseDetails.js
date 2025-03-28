import React from 'react'

const CourseDetails = () => {

    // import serchParams to get the id of the course
    // make a fetch request to get that specific course
    // store it in a state
    // check  if the state is empty if yes? do something else render them on screen
    
    // Also Get the instructor info
    // fullname,social handles,brief history


  return (
    <div className='container'>
    <h2 className='mt-5'>Course Details</h2>
<div className='card mt-5 mb-5 p-3'>
 <div className='card-body p-2'>
    <div className='card-content card-header'>
        <h3 className='card-title'><strong>Course Title: </strong>Ecommerce Landing page</h3>
    </div>
    <div className='card-text m-3 p-3'>
            <p className='text-muted'>
              <strong>Description:</strong>Serving our academic community with dedication and excellence.
              
              </p>
       <div className=' d-flex justify-content-between align-content-center w-50'>
        <small><strong>Date Created:</strong> 02/sep/2025</small>
        <small><strong>Completed Status:</strong> In Progress</small>
       </div>
       <div className='mt-5 p-2 text-muted'>
       <h3>Brief History</h3>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dolores, a aperiam repudiandae non iure neque numquam aliquam doloribus eveniet ipsam facere aspernatur. Ipsa ad natus culpa rem, consequatur incidunt.</p>
       </div>
       <ul className='mt-2'>
        <li>Instructor: Usama .A. Sani</li>
        <li>Socials: 
            <ul>
                <li>facebook: Usama Abdullahi Sani</li>
                <li>twitter(X): Usama Abdullahi Sani</li>
                <li>YouTube: UsamaCode & Tech</li>
            </ul>
        </li>
       </ul>
        </div>
 </div>
</div>
</div>

  )
}

export default CourseDetails