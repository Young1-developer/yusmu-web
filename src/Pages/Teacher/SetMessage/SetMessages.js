import React, {useState} from 'react'
import './SetMessages.css'



const SetMessages = () => {
    const [message, setMessage] = useState({
      subject: '',
      content: '',
      recipients: 'all',
      course: '',
      selectedStudents: []
    });
    const [preview, setPreview] = useState(false);
    const [sent, setSent] = useState([]);
    const handleSubmit = e => {
      e.preventDefault();
      setSent([...sent, {
        ...message,
        id: Date.now(),
        date: new Date().toISOString()
      }]);
      setMessage({
        subject: '',
        content: '',
        recipients: 'all',
        course: '',
        selectedStudents: []
      });
    };
    return <div className="container py-4">
        <h2>Send Messages</h2>
  
        <form onSubmit={handleSubmit}>
          <div className="card mb-4">
            <div className="card-body">
              <div className="mb-3">
                <label className="form-label">Subject</label>
                <input type="text" className="form-control" value={message.subject} onChange={e => setMessage({
                ...message,
                subject: e.target.value
              })} required />
              </div>
  
              <div className="mb-3">
                <label className="form-label">Message Content</label>
                <textarea className="form-control" rows="4" value={message.content} onChange={e => setMessage({
                ...message,
                content: e.target.value
              })} required></textarea>
              </div>
  
              <div className="mb-3">
                <label className="form-label">Recipients</label>
                <select className="form-select" value={message.recipients} onChange={e => setMessage({
                ...message,
                recipients: e.target.value
              })}>
                  <option value="all">All Students</option>
                  <option value="course">By Course</option>
                  <option value="individual">Select Individual Students</option>
                </select>
              </div>
  
              {message.recipients === 'course' && <div className="mb-3">
                  <label className="form-label">Select Course</label>
                  <select className="form-select" value={message.course} onChange={e => setMessage({
                ...message,
                course: e.target.value
              })}>
                    <option value="">Choose course...</option>
                    <option value="cs101">CS101 - Intro to Programming</option>
                    <option value="cs201">CS201 - Data Structures</option>
                  </select>
                </div>}
  
              <button type="button" className="btn btn-info me-2" onClick={() => setPreview(true)}>
                Preview Message
              </button>
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </div>
          </div>
        </form>
  
        {preview && <div className="message-preview">
            <h5>Message Preview</h5>
            <p><strong>Subject:</strong> {message.subject}</p>
            <p><strong>Content:</strong> {message.content}</p>
            <p><strong>Recipients:</strong> {message.recipients === 'all' ? 'All Students' : message.recipients === 'course' ? `Students in ${message.course}` : 'Selected Students'}
            </p>
            <button className="btn btn-secondary" onClick={() => setPreview(false)}>
              Close Preview
            </button>
          </div>}
  
        <h3 className="mt-4">Sent Messages</h3>
        {sent.map(msg => <div key={msg.id} className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">{msg.subject}</h5>
              <p className="card-text">{msg.content}</p>
              <p className="card-text">
                <small className="text-muted">
                  Sent: {new Date(msg.date).toLocaleString()} | 
                  To: {msg.recipients === 'all' ? 'All Students' : msg.recipients === 'course' ? `Students in ${msg.course}` : 'Selected Students'}
                </small>
              </p>
            </div>
          </div>)}
      </div>;
  }


  export default SetMessages