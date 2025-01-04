import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    
// Navigation
<nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
  <div className="container">
    <Link className="navbar-brand" to= "/">
      <svg width="40" height="40" viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="18" fill="var(--primary)"/>
        <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="white" font-size="20">Y</text>
      </svg>
      YUSMU
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item"><Link className="nav-link" to= "/Courses">Courses</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/student">Student</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/teacher">Teacher</Link></li>
        <li className="nav-item"><Link className="btn btn-primary ms-2" to="/login">Login</Link></li>
      </ul>
    </div>
  </div>
</nav>

  )
}

export default Navbar