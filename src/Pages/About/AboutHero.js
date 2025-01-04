import React from 'react'
import { NavLink } from 'react-router-dom'


const AboutHero = () => {
  return (
    
 // Hero Section 
<section className="about-hero py-5">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-6">
        <h1 className="display-4 fw-bold mb-4">About YUSMU</h1>
        <p className="lead mb-4">Empowering the next generation of tech innovators through cutting-edge IT education and solutions.</p>
        <p className="mb-4">Founded in 2020, YUSMU has grown from a small startup to a leading IT education provider, serving over 10,000 students worldwide.</p>
        <div className="d-flex gap-3">
          <NavLink to="/Courses" className="btn btn-primary">Explore Courses</NavLink>
          <NavLink to="/Contact" className="btn btn-outline-primary">Contact Us</NavLink>
        </div>
      </div>
      <div className="col-lg-6">
        <svg viewBox="0 0 200 200" className="w-100">
          <path fill="var(--primary)" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.5,90,-16.3,88.5,-1.0C87.0,14.3,81.4,28.5,73.6,41.8C65.8,55.1,55.8,67.3,42.7,74.6C29.7,81.9,14.8,84.2,-0.1,84.4C-15.1,84.6,-30.1,82.7,-43.9,75.9C-57.8,69.1,-70.5,57.4,-77.9,43.1C-85.3,28.8,-87.5,12.9,-86.7,-2.9C-85.9,-18.7,-82.1,-34.3,-73.3,-46.9C-64.4,-59.5,-50.5,-69,-36.3,-75.7C-22.1,-82.3,-7.4,-86.1,4.1,-83.1C15.7,-80.1,31.5,-70.3,44.7,-76.4Z" transform="translate(100 100)" />
          <text x="50%" y="50%" text-anchor="middle" fill="white" font-size="24">YUSMU</text>
        </svg>
      </div>
    </div>
  </div>
</section>
  )
}

export default AboutHero