import React from 'react'

const ContactFaq = () => {
  return (
    
 // FAQ Section 
<section className="py-5">
  <div className="container">
    <h2 className="text-center mb-5">Frequently Asked Questions</h2>
    <div className="row justify-content-center">
      <div className="col-lg-8">
        <div className="accordion" id="faqAccordion">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                How can I enroll in a course?
              </button>
            </h2>
            <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                You can enroll in any course by visiting our courses page, selecting your desired course, and clicking the "Enroll Now" button. Follow the registration process to complete your enrollment.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                What payment methods do you accept?
              </button>
            </h2>
            <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                We accept all major credit cards, PayPal, and bank transfers. Payment plans are also available for selected courses.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                Do you offer refunds?
              </button>
            </h2>
            <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                Yes, we offer a 30-day money-back guarantee for all our courses if you're not satisfied with the content.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default ContactFaq