import React, { useState } from "react";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    standard: "",
    dob: "",
    phone: "",
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  return (
    <div className="profile-container">
      <h1>Profile</h1>
      <form>
        <label>Name: <input type="text" name="name" value={profile.name} onChange={handleChange} /></label>
        <label>Email: <input type="email" name="email" value={profile.email} onChange={handleChange} /></label>
        <label>Standard: <input type="text" name="standard" value={profile.standard} onChange={handleChange} /></label>
        <label>Date of Birth: <input type="date" name="dob" value={profile.dob} onChange={handleChange} /></label>
        <label>Phone: <input type="tel" name="phone" value={profile.phone} onChange={handleChange} /></label>
      </form>
      <div className="profile-card">
        <h2>Profile Summary</h2>
        <p><strong>Name:</strong> {profile.name}</p>
        <p><strong>Email:</strong> {profile.email}</p>
        <p><strong>Standard:</strong> {profile.standard}</p>
        <p><strong>Date of Birth:</strong> {profile.dob}</p>
        <p><strong>Phone:</strong> {profile.phone}</p>
      </div>
    </div>
  );
};

export default Profile;
