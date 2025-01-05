import React, { useState } from "react";
import ProfileCard from "./components/ProfileCard";
import ProfileForm from "./components/ProfileForm";
import EditProfile from "./components/EditProfile";
import SkillCategories from "./components/SkillCategories";

import "./styles/App.css";

function App() {
  const [profileData, setProfileData] = useState(null);
  const [skills, setSkills] = useState([]);
  const [editMode, setEditMode] = useState(false);

  return (
    <div className="App">
      {editMode ? (
        <EditProfile
          profileData={profileData}
          setProfileData={setProfileData}
          setEditMode={setEditMode}
        />
      ) : (
        <>
          <ProfileCard
            profileData={profileData}
            skills={skills}
            setEditMode={setEditMode}
          />
          <ProfileForm
            setProfileData={setProfileData}
            skills={skills}
            setSkills={setSkills}
          />
        </>
      )}
    </div>
  );
}

export default App;
