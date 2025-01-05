import React from "react";
import "./ProfileCard.css";

function ProfileCard({ profileData, skills, setEditMode }) {
  return (
    <div className="profile-card">
      <div className="profile-header">
        <img
          src={profileData?.profilePicture || "placeholder.jpg"}
          alt="Profile"
          className="profile-picture"
        />
        <h2>{profileData?.name || "Student Name"}</h2>
        <p>{profileData?.email || "Email: Not Provided"}</p>
        <p>{profileData?.phone || "Phone: Not Provided"}</p>
      </div>
      <div className="profile-skills">
        <h3>Skills</h3>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>
              {skill.name} - {skill.level}
            </li>
          ))}
        </ul>
      </div>
      <button onClick={() => setEditMode(true)} className="edit-button">
        Edit Profile
      </button>
    </div>
  );
}

export default ProfileCard;
