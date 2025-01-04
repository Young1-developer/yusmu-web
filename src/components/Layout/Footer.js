import React from 'react'
import {Link} from 'react-router-dom'


const Footer = () => {
  return (
    
// Footer 
<footer className="footer">
  <div className="container">
    <div className="row">
      <div className="col-lg-4 mb-4">
        <h5 className="mb-4">About YUSMU</h5>
        <p>We are dedicated to providing world-className IT education and innovative solutions to help you achieve your career goals.</p>
        <div className="social-links mt-4">
          <Link to="https://facebook.com/yusmu"><i className="fab fa-facebook"></i></Link>
          <Link to="https://twitter.com/yusmu"><i className="fab fa-twitter"></i></Link>
          <Link to="https://linkedin.com/company/yusmu"><i className="fab fa-linkedin"></i></Link>
          <Link to="https://instagram.com/yusmu"><i className="fab fa-instagram"></i></Link>
        </div>
      </div>
      <div className="col-lg-2 mb-4">
        <h5 className="mb-4">Quick Links</h5>
        <ul className="footer-links">
          <li><Link to="https://example.com/courses">Courses</Link></li>
          <li><Link to="https://example.com/about">About Us</Link></li>
          <li><Link to="https://example.com/contact">Contact</Link></li>
          <li><Link to="https://example.com/blog">Blog</Link></li>
        </ul>
      </div>
      <div className="col-lg-3 mb-4">
        <h5 className="mb-4">Contact Info</h5>
        <ul className="footer-links">
          <li><i className="fas fa-map-marker-alt me-2"></i>123 Tech Street, Silicon Valley</li>
          <li><i className="fas fa-phone me-2"></i>+1 (555) 123-4567</li>
          <li><i className="fas fa-envelope me-2"></i>info@yusmu.com</li>
        </ul>
      </div>
      <div className="col-lg-3 mb-4">
        <h5 className="mb-4">Newsletter</h5>
        <p>Subscribe to our newsletter for updates and special offers.</p>
        <div className="input-group">
          <input type="email" className="form-control" placeholder="Enter your email"></input>
          <button className="btn btn-primary">Subscribe</button>
        </div>
      </div>
    </div>
    <hr className="my-4 bg-light"></hr>
    <div className="row">
      <div className="col-md-6 text-center text-md-start">
        <p className="mb-0">&copy; 2023 YUSMU IT Innovation Solution. All rights reserved.</p>
      </div>
      <div className="col-md-6 text-center text-md-end">
        <Link to="https://example.com/privacy" className="text-light me-3">Privacy Policy</Link>
        <Link to="https://example.com/terms" className="text-light">Terms of Service</Link>
      </div>
    </div>
  </div>
</footer>
  )
}

export default Footer