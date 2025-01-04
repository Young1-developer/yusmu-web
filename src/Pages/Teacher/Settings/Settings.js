import React, {useState} from "react";


// Settings Component
const Settings = () => {
    const [settings, setSettings] = useState({
      emailNotifications: true,
      messageAlerts: true,
      projectUpdates: false,
      theme: 'light'
    });
    
    return (
      <div className="container py-4">
        <h2 className="mb-4">Settings</h2>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title mb-4">Notification Preferences</h5>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                checked={settings.emailNotifications}
                onChange={(e) => setSettings({...settings, emailNotifications: e.target.checked})}
              />
              <label className="form-check-label">Email Notifications</label>
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                checked={settings.messageAlerts}
                onChange={(e) => setSettings({...settings, messageAlerts: e.target.checked})}
              />
              <label className="form-check-label">Message Alerts</label>
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                checked={settings.projectUpdates}
                onChange={(e) => setSettings({...settings, projectUpdates: e.target.checked})}
              />
              <label className="form-check-label">Project Updates</label>
            </div>
            <div className="mb-3">
              <label className="form-label">Theme</label>
              <select 
                className="form-select"
                value={settings.theme}
                onChange={(e) => setSettings({...settings, theme: e.target.value})}
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Settings