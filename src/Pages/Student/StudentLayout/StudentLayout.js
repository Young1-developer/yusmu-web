import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import Logo from '../../../images/YUSMU-LOGO.png'

const StudentLayout = () => {
  return (
    <div>

<nav className="navbar navbar-expand-lg  navbar-light bg-gradient">
  <div className="container">
    <img src={Logo} width ={100} height={100} alt='Logo' className="navbar-brand rounded-circle" />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#studentNav">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="studentNav">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/student">
            <i className="fas fa-home"></i> Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="projects">
            <i className="fas fa-project-diagram"></i> Projects
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="mycourses">
            <i className="fas fa-graduation-cap"></i> My Courses
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="quiz">
            <i className="fas fa-question-circle"></i> Quiz
          </Link>
        </li>
      </ul>
      
      <div className="dropdown profile-dropdown">
        <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown">
          <img src={Logo}  alt="Profile" className="profile-image rounded-circle" />
        </Link>
        <ul className="dropdown-menu dropdown-menu-end">
          <li><Link className="dropdown-item" to="profile">
            <i className="fas fa-user"></i> Profile
          </Link></li>
          <li><Link className="dropdown-item" to="settings">
            <i className="fas fa-cog"></i> Settings
          </Link></li>
          <li><hr className="dropdown-divider" /></li>
          <li><Link className="dropdown-item text-danger" to="logout">
            <i className="fas fa-sign-out-alt"></i> Logout
          </Link></li>
        </ul>
      </div>
    </div>
  </div>
</nav>

     <Outlet />
     </div>
  )
}

export default StudentLayout