import SkillForm from "./SkillForm";

function SkillsPage() {
  const [skills, setSkills] = useState([]);

  const handleAddSkill = (skill) => {
    setSkills([...skills, skill]);
  };

  const handleEditSkill = (index, updatedSkill) => {
    const updatedSkills = [...skills];
    if (updatedSkill) {
      updatedSkills[index] = updatedSkill;
    } else {
      updatedSkills.splice(index, 1); 
    }
    setSkills(updatedSkills);
  };

  const handleDeleteSkills = (indices) => {
    const updatedSkills = skills.filter((_, index) => !indices.includes(index));
    setSkills(updatedSkills);
  };

  return (
    <SkillForm
      skills={skills}
      onAddSkill={handleAddSkill}
      onEditSkill={handleEditSkill}
      onDeleteSkills={handleDeleteSkills}
    />
  );
}

export default SkillsPage;
