import React,{useState} from 'react'
import './UploadCourse.css'

const UploadCourse = () => {
    const [sections, setSections] = useState([]);
    const [newSection, setNewSection] = useState({
      title: '',
      description: '',
      duration: '',
      isPaid: false
    });
    const handleUpload = e => {
      e.preventDefault();
      setSections([...sections, newSection]);
      setNewSection({
        title: '',
        description: '',
        duration: '',
        isPaid: false
      });
    };
    return <div className="container py-4">
        <h2>Upload Course</h2>
        <div className="upload-area mt-4">
          <h5>Drag and drop video files here</h5>
          <p>or click to select files</p>
        </div>
        
        <form onSubmit={handleUpload} className="mt-4">
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Section Title" value={newSection.title} onChange={e => setNewSection({
            ...newSection,
            title: e.target.value
          })} />
          </div>
          <div className="mb-3">
            <textarea className="form-control" placeholder="Section Description" value={newSection.description} onChange={e => setNewSection({
            ...newSection,
            description: e.target.value
          })} />
          </div>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Duration (e.g., 1:30:00)" value={newSection.duration} onChange={e => setNewSection({
            ...newSection,
            duration: e.target.value
          })} />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" checked={newSection.isPaid} onChange={e => setNewSection({
            ...newSection,
            isPaid: e.target.checked
          })} />
            <label className="form-check-label">Paid Content</label>
          </div>
          <button type="submit" className="btn btn-primary">Add Section</button>
        </form>
        
        <div className="mt-4">
          <h3>Course Sections</h3>
          {sections.map((section, index) => <div key={index} className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">{section.title}</h5>
                <p className="card-text">{section.description}</p>
                <p className="card-text"><small className="text-muted">Duration: {section.duration}</small></p>
                <span className={`badge ${section.isPaid ? 'bg-warning' : 'bg-success'}`}>
                  {section.isPaid ? 'Paid' : 'Free'}
                </span>
              </div>
            </div>)}
        </div>
      </div>;
}

export default UploadCourse