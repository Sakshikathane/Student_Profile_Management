import React, { useState } from "react";
import ManageSkillsPage from "./pages/ManageSkillsPage";


<Route path="/manage-skills" element={<ManageSkillsPage />} />


const ManageSkills = () => {
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState({ name: "", level: "Beginner" });
  const [selectedSkills, setSelectedSkills] = useState([]);

  const addSkill = () => {
    setSkills([...skills, newSkill]);
    setNewSkill({ name: "", level: "Beginner" });
  };

  const toggleSelectSkill = (index) => {
    setSelectedSkills((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const deleteSelectedSkills = () => {
    setSkills(skills.filter((_, index) => !selectedSkills.includes(index)));
    setSelectedSkills([]);
  };

  return (
    <div className="manage-skills-container">
      <h1>Manage Skills</h1>
      <div>
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
        <button onClick={addSkill}>Add Skill</button>
      </div>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={selectedSkills.includes(index)}
              onChange={() => toggleSelectSkill(index)}
            />
            {skill.name} ({skill.level})
          </li>
        ))}
      </ul>
      <button onClick={deleteSelectedSkills}>Delete Selected</button>
    </div>
  );
};

export default ManageSkills;
