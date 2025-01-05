import React, { useState } from "react";
import "./ProfileForm.css";

function ProfileForm({ setProfileData, skills, setSkills }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [skillName, setSkillName] = useState("");
  const [skillLevel, setSkillLevel] = useState("Beginner");

  const handleAddSkill = () => {
    setSkills([...skills, { name: skillName, level: skillLevel }]);
    setSkillName("");
    setSkillLevel("Beginner");
  };

  const handleSubmit = () => {
    setProfileData({ name, email, phone });
  };

  return (
    <div className="profile-form">
      <h3>Create Profile</h3>
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
      <button onClick={handleSubmit}>Save Profile</button>

      <h3>Add Skills</h3>
      <input
        type="text"
        placeholder="Skill Name"
        value={skillName}
        onChange={(e) => setSkillName(e.target.value)}
      />
      <select
        value={skillLevel}
        onChange={(e) => setSkillLevel(e.target.value)}
      >
        <option value="Beginner">Beginner</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Expert">Expert</option>
      </select>
      <button onClick={handleAddSkill}>Add Skill</button>
    </div>
  );
}

export default ProfileForm;
