import React from 'react'

const StudentSetting = () => {
  return (
    
<div className="container py-4">
  <div className="settings-container">
    <h2 className="mb-4">Settings</h2>
    
    <div className="row">
      <div className="col-md-3">
        <div className="settings-nav">
          <div className="nav flex-column nav-pills">
            <button className="nav-link active" data-bs-toggle="pill" data-bs-target="#profile">
              <i className="fas fa-user"></i> Profile
            </button>
            <button className="nav-link" data-bs-toggle="pill" data-bs-target="#account">
              <i className="fas fa-shield-alt"></i> Account
            </button>
            <button className="nav-link" data-bs-toggle="pill" data-bs-target="#notifications">
              <i className="fas fa-bell"></i> Notifications
            </button>
            <button className="nav-link" data-bs-toggle="pill" data-bs-target="#privacy">
              <i className="fas fa-lock"></i> Privacy
            </button>
          </div>
        </div>
      </div>
      
      <div className="col-md-9">
        <div className="tab-content">
           {/* Profile Settings  */}
          <div className="tab-pane fade show active" id="profile">
            <div className="settings-card">
              <h4 className="mb-4">Profile Settings</h4>
              <div className="mb-4">
                <label className="profile-upload mb-3">
                  <img src="https://images.websim.ai/avatar/default" alt="Profile" />
                  <div className="upload-overlay">
                    <i className="fas fa-camera fa-lg"></i>
                  </div>
                  <input type="file" className="d-none" accept="image/*" />
                </label>
                <small className="d-block text-muted">Click to upload new profile picture</small>
              </div>
              
              <form>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">First Name</label>
                    <input type="text" className="form-control" value="John" />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Last Name</label>
                    <input type="text" className="form-control" value="Doe" />
                  </div>
                </div>
                
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" value="john.doe@example.com" />
                </div>
                
                <div className="mb-3">
                  <label className="form-label">Bio</label>
                  <textarea className="form-control" rows="3">Computer Science student passionate about web development.</textarea>
                </div>
                
                <button type="submit" className="btn btn-primary">Save Changes</button>
              </form>
            </div>
          </div>
          
          {/* Account Settings */}
          <div className="tab-pane fade" id="account">
            <div className="settings-card">
              <h4 className="mb-4">Account Settings</h4>
              <form>
                <div className="mb-3">
                  <label className="form-label">Current Password</label>
                  <input type="password" className="form-control" />
                </div>
                
                <div className="mb-3">
                  <label className="form-label">New Password</label>
                  <input type="password" className="form-control" />
                </div>
                
                <div className="mb-4">
                  <label className="form-label">Confirm New Password</label>
                  <input type="password" className="form-control" />
                </div>
                
                <button type="submit" className="btn btn-primary">Update Password</button>
              </form>
            </div>
          </div>
          
          {/* Notification Settings  */}
          <div className="tab-pane fade" id="notifications">
            <div className="settings-card">
              <h4 className="mb-4">Notification Settings</h4>
              
              <div className="form-check form-switch mb-3">
                <input className="form-check-input" type="checkbox" checked />
                <label className="form-check-label">Email Notifications</label>
              </div>
              
              <div className="form-check form-switch mb-3">
                <input className="form-check-input" type="checkbox" checked />
                <label className="form-check-label">Course Updates</label>
              </div>
              
              <div className="form-check form-switch mb-3">
                <input className="form-check-input" type="checkbox" />
                <label className="form-check-label">Quiz Reminders</label>
              </div>
              
              <div className="form-check form-switch mb-3">
                <input className="form-check-input" type="checkbox" />
                <label className="form-check-label">Newsletter</label >
              </div>
              
              <button type="submit" className="btn btn-primary">Save Preferences</button>
            </div>
          </div>
{/*           
          Privacy Settings  */}
          <div className="tab-pane fade" id="privacy">
            <div className="settings-card">
              <h4 className="mb-4">Privacy Settings</h4>
              
              <div className="form-check form-switch mb-3">
                <input className="form-check-input" type="checkbox" checked />
                <label className="form-check-label">Show Profile to Other Students</label>
              </div>
              
              <div className="form-check form-switch mb-3">
                <input className="form-check-input" type="checkbox" checked />
                <label className="form-check-label">Show Course Progress</label>
              </div>
              
              <div className="form-check form-switch mb-3">
                <input className="form-check-input" type="checkbox" />
                <label className="form-check-label">Share Quiz Results</label>
              </div>
              
              <button type="submit" className="btn btn-primary">Update Privacy</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default StudentSetting