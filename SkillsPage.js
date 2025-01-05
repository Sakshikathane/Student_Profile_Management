import React, { useState } from "react";

function SkillsPage() {
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState({ name: "", level: "Beginner" });

  const addSkill = () => {
    if (newSkill.name.trim() !== "") {
      setSkills([...skills, newSkill]);
      setNewSkill({ name: "", level: "Beginner" });
    }
  };

  return (
    <div>
      <h1>Skills Management</h1>
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
            {skill.name} - {skill.level}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SkillsPage;
