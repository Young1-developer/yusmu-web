import React from 'react'

const ContactForm = () => {
  return (
    
 // Contact Form Section
<section className="py-5 bg-light">
  <div className="container">
    <div className="row">
      <div className="col-lg-6">
        <div className="contact-form">
          <h3 className="mb-4">Send us a Message</h3>
          <form id="contactForm">
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input type="text" className="form-control" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Subject</label>
              <input type="text" className="form-control" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea className="form-control" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="map-container">
        <iframe 
        title='map'
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.4212478602344!2d7.650026073640791!3d11.156413752072709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11b2867fa46472e5%3A0x347c6e88ef25651!2sAbdullahi%20Mohammed%20Library!5e0!3m2!1sen!2sng!4v1734270817825!5m2!1sen!2sng"
         width="100%" height="100%" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default ContactForm