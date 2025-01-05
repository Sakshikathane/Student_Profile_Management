import React, { useState, useEffect } from 'react';

const skillCategories = ['Technical', 'Soft Skills', 'Languages'];

const CreateProfile = ({ setProfileData, profileData }) => {
  const [newSkill, setNewSkill] = useState({ name: '', level: '', category: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleSkillChange = (e) => {
    const { name, value } = e.target;
    setNewSkill({ ...newSkill, [name]: value });
  };

  const addSkill = () => {
    setProfileData({
      ...profileData,
      skills: [...profileData.skills, newSkill],
    });
    setNewSkill({ name: '', level: '', category: '' });
  };

  const deleteSkill = (index) => {
    const updatedSkills = profileData.skills.filter((_, i) => i !== index);
    setProfileData({ ...profileData, skills: updatedSkills });
  };


  useEffect(() => {
    localStorage.setItem('profileData', JSON.stringify(profileData));
  }, [profileData]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Create Profile</h2>
      <div className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={profileData.name}
          onChange={handleChange}
          className="input"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={profileData.email}
          onChange={handleChange}
          className="input"
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={profileData.phone}
          onChange={handleChange}
          className="input"
        />
        <input
          type="date"
          name="dob"
          value={profileData.dob}
          onChange={handleChange}
          className="input"
        />

        <div className="mt-4">
          <h3 className="text-lg">Add Skills</h3>
          <div className="space-y-2">
            <input
              type="text"
              name="name"
              placeholder="Skill Name"
              value={newSkill.name}
              onChange={handleSkillChange}
              className="input"
            />
            <input
              type="text"
              name="level"
              placeholder="Proficiency Level"
              value={newSkill.level}
              onChange={handleSkillChange}
              className="input"
            />
            <select
              name="category"
              value={newSkill.category}
              onChange={handleSkillChange}
              className="input"
            >
              <option value="">Select Category</option>
              {skillCategories.map((category, index) => (
                <option key={index} value={category}>{category}</option>
              ))}
            </select>
            <button onClick={addSkill} className="btn">Add Skill</button>
          </div>

          <div className="mt-4">
            <h4 className="text-lg">Skills List</h4>
            {profileData.skills.length > 0 ? (
              profileData.skills.map((skill, index) => (
                <div key={index} className="flex items-center justify-between">
                  <p>{skill.name} - {skill.level} ({skill.category})</p>
                  <button onClick={() => deleteSkill(index)} className="btn">Delete</button>
                </div>
              ))
            ) : (
              <p>No skills added yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProfile;
