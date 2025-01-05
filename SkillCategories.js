import React, { useState } from "react";
import "./SkillCategories.css";

function SkillCategories({ skills, setSkills }) {
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState({});
  const [skillName, setSkillName] = useState("");
  const [skillLevel, setSkillLevel] = useState("Beginner");

  const handleAddCategory = () => {
    if (category.trim() !== "" && !categories[category]) {
      setCategories({ ...categories, [category]: [] });
      setCategory("");
    }
  };

  const handleAddSkillToCategory = () => {
    if (category && skillName.trim() !== "") {
      const updatedCategory = [...(categories[category] || []), { name: skillName, level: skillLevel }];
      setCategories({ ...categories, [category]: updatedCategory });
      setSkillName("");
      setSkillLevel("Beginner");
    }
  };

  const handleDeleteSkill = (categoryName, skillIndex) => {
    const updatedCategory = categories[categoryName].filter((_, index) => index !== skillIndex);
    setCategories({ ...categories, [categoryName]: updatedCategory });
  };

  return (
    <div className="skill-categories">
      <h3>Skill Categories</h3>
      <div className="add-category">
        <input
          type="text"
          placeholder="Add New Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <button onClick={handleAddCategory}>Add Category</button>
      </div>

      <div className="add-skill-to-category">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          {Object.keys(categories).map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </select>
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
        <button onClick={handleAddSkillToCategory}>Add Skill</button>
      </div>

      <div className="categories-list">
        {Object.keys(categories).map((cat, index) => (
          <div key={index} className="category-card">
            <h4>{cat}</h4>
            <ul>
              {categories[cat].map((skill, idx) => (
                <li key={idx}>
                  {skill.name} - {skill.level}
                  <button onClick={() => handleDeleteSkill(cat, idx)}>Delete</button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillCategories;
