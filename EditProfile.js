import React, { useState } from "react";
import "./EditProfile.css";

function EditProfile({ profileData, setProfileData, setEditMode }) {
  const [name, setName] = useState(profileData?.name || "");
  const [email, setEmail] = useState(profileData?.email || "");
  const [phone, setPhone] = useState(profileData?.phone || "");

  const handleSave = () => {
    setProfileData({ name, email, phone });
    setEditMode(false);
  };

  return (
    <div className="edit-profile">
      <h3>Edit Profile</h3>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="tel"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button onClick={handleSave}>Save</button>
      <button onClick={() => setEditMode(false)}>Cancel</button>
    </div>
  );
}

export default EditProfile;
