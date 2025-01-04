import React from 'react'

const ContactInforCard = () => {
  return (
    
// Contact Information Cards 
<section className="py-5">
  <div className="container">
    <div className="row g-4">
      <div className="col-md-4">
        <div className="contact-info-card text-center p-4 bg-light">
          <div className="contact-icon">
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <h4 className="mt-4">Visit Us</h4>
          <p>123 Tech Street<br />Silicon Valley, CA 94025 </p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="contact-info-card text-center p-4 bg-light">
          <div className="contact-icon">
            <i className="fas fa-phone"></i>
          </div>
          <h4 className="mt-4">Call Us</h4>
          <p>+1 (555) 123-4567<br />Mon-Fri, 9:00-17:00</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="contact-info-card text-center p-4 bg-light">
          <div className="contact-icon">
            <i className="fas fa-envelope"></i>
          </div>
          <h4 className="mt-4">Email Us</h4>
          <p>info@yusmu.com<br />support@yusmu.com</p>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default ContactInforCard