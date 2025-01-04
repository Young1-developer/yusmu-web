import React from 'react'
import UsamaPic from '../../images/usama.jpeg'
import MubarakPic from '../../images/mubarak.jpeg'
import DrAhamdPic from '../../images/dr.Ahmad.jpg'

const TeamMember = () => {
  return (
    
 //Team Section
<section className="py-5">
  <div className="container">
    <h2 className="section-title text-center mb-5">Our Leadership Team</h2>
    <div className="row g-4">
      <div className="col-md-3">
        <div className="team-member text-center">
        <div className="rounded bg-light p-3 mx-auto mb-3" style={{width: "200px", height: "200px"}}>
            {/* <i className="fas fa-user fa-4x text-primary"></i> */}
            <img src={DrAhamdPic} alt='Dr pic' className='rounded' width={150} height={150} />
          </div>
          <h5>Dr. Ahmad Yusuf</h5>
          <p className="text-muted">CEO</p>
        </div>
      </div>
      <div className="col-md-3">
        <div className="team-member text-center">
        <div className="rounded bg-light p-3 mx-auto mb-3" style={{width: "200px", height: "200px"}}>
            <img src={MubarakPic} alt='mubarak pic' className='rounded' width={150} height={150} />
          </div>
          <h5>Mubarak Dalhatu</h5>
          <p className="text-muted">Back-End Developer</p>
        </div>
      </div>
      <div className="col-md-3">
        <div className="team-member text-center">
        <div className="rounded bg-light p-3 mx-auto mb-3" style={{width: "200px", height: "200px"}}>
        <img src={UsamaPic} alt='usama pic' className='rounded' width={150} height={150} />
          </div>
          <h5>Usama .A. Sani</h5>
          <p className="text-muted">Front-End Developer</p>
        </div>
      </div>
      <div className="col-md-3">
        <div className="team-member text-center">
          <div className="rounded bg-light p-3 mx-auto mb-3" style={{width: "200px", height: "200px"}}>
            <i className="fas fa-user fa-4x text-primary"></i>
            
          </div>
          <h5>Yazeed Ahmad</h5>
          <p className="text-muted">CyberSecurity Engineer</p>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default TeamMember