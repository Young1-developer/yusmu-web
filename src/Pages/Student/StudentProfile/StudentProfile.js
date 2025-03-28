import React from 'react'
import ProfileHeaderCard from './ProfileHeaderCard'
import ProfileStartCard from './ProfileStartCard'
import StudentPersonal from './StudentPersonal'
const StudentProfile = () => {

  // 1. writing fetch request to get student infor(firstName,LastName ... etc)
  // 2. render them after fetching

  
  return (
    
<div className="container py-4">
  <div className="profile-container" style={{maxWidth: "1200px", margin: "0 auto"}}>
     {/* Profile Header  */}
     <ProfileHeaderCard />

    {/* Profile Stats Cards  */}
    <ProfileStartCard />

    {/* Personal Information  */}
    <StudentPersonal />
    
    </div>
  </div>

  )
}

export default StudentProfile