import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import './TeacherNavbar.css'

const Navbar = () => {
    const location = useLocation();

    
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <Link className="navbar-brand text-white" to="">Teacher Dashboard</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/teacher' ? 'active' : ''}`} to="/teacher">🏠 Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/quiz' ? 'active' : ''}`} to="quiz">📝 Set Quiz</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/upload' ? 'active' : ''}`} to="upload">📹 Upload Course</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/messages' ? 'active' : ''}`} to="messages">📩 Set Messages</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/students' ? 'active' : ''}`} to="students">🎓View Students</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`} to="projects">📂Create Projects</Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/profile' ? 'active' : ''}`} to="profile">👤 Profile</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/settings' ? 'active' : ''}`} to="settings">⚙️ Settings</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/logout">🔒 Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar