import React, { useState } from 'react';

const SkillList = ({ skills, onAddSkill, onEditSkill, onDeleteSkills }) => {
  const [newSkill, setNewSkill] = useState("");
  const [proficiency, setProficiency] = useState("Beginner");

  const handleAdd = () => {
    onAddSkill({ skill: newSkill, proficiency });
    setNewSkill("");
    setProficiency("Beginner");
  };

  return (
    <div className="skill-list">
      <h3>Skills</h3>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>
            {skill.skill} ({skill.proficiency})
            <button onClick={() => onEditSkill(index, { ...skill, proficiency: "Expert" })}>
              Edit
            </button>
            <button onClick={() => onDeleteSkills([index])}>Delete</button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          placeholder="New Skill"
        />
        <select value={proficiency} onChange={(e) => setProficiency(e.target.value)}>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Expert">Expert</option>
        </select>
        <button onClick={handleAdd}>Add Skill</button>
      </div>
    </div>
  );
};

export default SkillList;
