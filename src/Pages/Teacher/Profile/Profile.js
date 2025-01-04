import React, { useContext, useState } from 'react';
import { AuthContext } from '../Context/AuthContext'; // Correct import
import './Profile.css';

const Profile = () => {


  const { user, setUser } = useContext(AuthContext);
  const [profileData, setProfileData] = useState(user || {}); // Initialize safely

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update context with the new profile data
    setUser(profileData);
    console.log('Profile updated:', profileData);
  };

  if (!user) {
    return <p>Loading profile...</p>; // Handle case when user is null
  }

  return (
    <div className="container py-4 profile-section">
      <div className="text-center mb-4">
        <img
          src={profileData.avatar}
          alt="Profile"
          className="profile-picture mb-3"
        />
        <h2>{profileData.name}</h2>
        <p className="text-muted">{profileData.email}</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            value={profileData.name || ''}
            onChange={(e) =>
              setProfileData({ ...profileData, name: e.target.value })
            }
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            value={profileData.email || ''}
            onChange={(e) =>
              setProfileData({ ...profileData, email: e.target.value })
            }
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Bio</label>
          <textarea
            className="form-control"
            rows="4"
            value={profileData.bio || ''}
            onChange={(e) =>
              setProfileData({ ...profileData, bio: e.target.value })
            }
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default Profile;
