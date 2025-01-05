import React, { useState } from "react";
import "./styles/ManageSkillsPage.css";

function ManageSkillsPage() {
 
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    standard: "",
    dob: "",
    phone: "",
  });

  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState({ name: "", level: "Beginner" });
  const [selectedSkills, setSelectedSkills] = useState([]);


  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

 
  const handleAddSkill = () => {
    if (newSkill.name.trim() !== "") {
      setSkills([...skills, newSkill]);
      setNewSkill({ name: "", level: "Beginner" });
    }
  };

  const handleEditSkill = (index, updatedSkill) => {
    const updatedSkills = [...skills];
    updatedSkills[index] = updatedSkill;
    setSkills(updatedSkills);
  };

  const handleDeleteSkills = () => {
    const updatedSkills = skills.filter((_, index) => !selectedSkills.includes(index));
    setSkills(updatedSkills);
    setSelectedSkills([]);
  };

  const handleSelectSkill = (index) => {
    if (selectedSkills.includes(index)) {
      setSelectedSkills(selectedSkills.filter((i) => i !== index));
    } else {
      setSelectedSkills([...selectedSkills, index]);
    }
  };

  const handleSelectAllSkills = () => {
    if (selectedSkills.length === skills.length) {
      setSelectedSkills([]);
    } else {
      setSelectedSkills(skills.map((_, index) => index));
    }
  };

  return (
    <div className="manage-skills-page">
      <h1>Manage Skills</h1>

      {/* Profile Form */}
      <div className="profile-section">
        <h2>Student Profile</h2>
        <form>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleProfileChange}
              placeholder="Enter your name"
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleProfileChange}
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label>Standard</label>
            <input
              type="text"
              name="standard"
              value={profile.standard}
              onChange={handleProfileChange}
              placeholder="Enter your standard"
            />
          </div>
          <div className="form-group">
            <label>Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={profile.dob}
              onChange={handleProfileChange}
            />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={profile.phone}
              onChange={handleProfileChange}
              placeholder="Enter your phone number"
            />
          </div>
        </form>
      </div>

      {/* Skills Section */}
      <div className="skills-section">
        <h2>Skills</h2>
        <div className="add-skill">
          <input
            type="text"
            placeholder="Skill Name"
            value={newSkill.name}
            onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })}
          />
          <select
            value={newSkill.level}
            onChange={(e) => setNewSkill({ ...newSkill, level: e.target.value })}
          >
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Expert">Expert</option>
          </select>
          <button onClick={handleAddSkill}>Add Skill</button>
        </div>

        {skills.length > 0 ? (
          <div>
            <table>
              <thead>
                <tr>
                  <th>
                    <input
                      type="checkbox"
                      checked={selectedSkills.length === skills.length}
                      onChange={handleSelectAllSkills}
                    />
                  </th>
                  <th>Skill Name</th>
                  <th>Proficiency Level</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {skills.map((skill, index) => (
                  <tr key={index}>
                    <td>
                      <input
                        type="checkbox"
                        checked={selectedSkills.includes(index)}
                        onChange={() => handleSelectSkill(index)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={skill.name}
                        onChange={(e) =>
                          handleEditSkill(index, { ...skill, name: e.target.value })
                        }
                      />
                    </td>
                    <td>
                      <select
                        value={skill.level}
                        onChange={(e) =>
                          handleEditSkill(index, { ...skill, level: e.target.value })
                        }
                      >
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Expert">Expert</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {selectedSkills.length > 0 && (
              <button className="delete-button" onClick={handleDeleteSkills}>
                Delete Selected
              </button>
            )}
          </div>
        ) : (
          <p>No skills added yet.</p>
        )}
      </div>
    </div>
  );
}

export default ManageSkillsPage;
