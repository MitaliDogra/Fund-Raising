import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/card";
import { Button } from "../components/button";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import "./profile.css";

const ProfilePage = () => {
  const user = {
    name: "John Doe",
    username: "@johndoe",
    email: "johndoe@example.com",
    role: "Software Engineer",
    bio: "Building scalable applications & exploring AI. 🚀",
    location: "San Francisco, CA",
    followers: 1200,
    following: 850,
    website: "https://johndoe.dev",
    avatar: "https://via.placeholder.com/120",
    social: {
      twitter: "https://twitter.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
      github: "https://github.com/johndoe"
    }
  };

  return (
    <Card className="profile-card">
      <CardHeader className="profile-header">
        <img
          src={user.avatar}
          alt="Profile"
          className="profile-avatar"
        />
        <CardTitle className="profile-name">{user.name}</CardTitle>
        <p className="profile-username">{user.username}</p>
      </CardHeader>

      <CardContent className="profile-content">
        <p className="profile-bio">{user.bio}</p>
        <p className="profile-location">📍 {user.location}</p>
        <p className="profile-website">
          <a href={user.website} target="_blank" rel="noopener noreferrer">
            {user.website}
          </a>
        </p>

        <div className="profile-stats">
          <div>
            <p className="profile-stat-number">{user.followers}</p>
            <p className="profile-stat-label">Followers</p>
          </div>
          <div>
            <p className="profile-stat-number">{user.following}</p>
            <p className="profile-stat-label">Following</p>
          </div>
        </div>

        {/* Social Links */}
        <div className="profile-social-links">
          <a href={user.social.twitter} target="_blank" rel="noopener noreferrer">
            <FaTwitter className="profile-social-icon" />
          </a>
          <a href={user.social.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="profile-social-icon" />
          </a>
          <a href={user.social.github} target="_blank" rel="noopener noreferrer">
            <FaGithub className="profile-social-icon" />
          </a>
        </div>

        {/* Edit Profile Button */}
        <Button className="edit-profile-button">
          Edit Profile
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProfilePage;
