import React, { useState } from "react";

function ProfilePage() {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    standard: "",
    dob: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  return (
    <div>
      <h1>Profile Page</h1>
      <form>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Standard:
          <input
            type="text"
            name="standard"
            value={profile.standard}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          DOB:
          <input
            type="date"
            name="dob"
            value={profile.dob}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Phone:
          <input
            type="tel"
            name="phone"
            value={profile.phone}
            onChange={handleInputChange}
          />
        </label>
      </form>
    </div>
  );
}

export default ProfilePage;
