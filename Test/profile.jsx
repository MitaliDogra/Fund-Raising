import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa"

const ProfilePage = () => {
  // Mock user data (replace with API data in real use)
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
    avatar: "https://via.placeholder.com/120", // Replace with actual image
    social: {
      twitter: "https://twitter.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
      github: "https://github.com/johndoe"
    }
  }

  return (
    <Card className="max-w-2xl mx-auto mt-10 p-6 shadow-lg rounded-lg">
      <CardHeader className="flex items-center flex-col">
        <img
          src={user.avatar}
          alt="Profile"
          className="w-28 h-28 rounded-full border-4 border-gray-300 shadow-md"
        />
        <CardTitle className="mt-4 text-2xl font-bold">{user.name}</CardTitle>
        <p className="text-gray-500">{user.username}</p>
      </CardHeader>

      <CardContent className="text-center">
        <p className="text-gray-700 text-lg">{user.bio}</p>
        <p className="text-gray-500 mt-2">📍 {user.location}</p>
        <p className="text-blue-500 mt-2">
          <a href={user.website} target="_blank" rel="noopener noreferrer">
            {user.website}
          </a>
        </p>

        <div className="flex justify-center gap-6 mt-4 text-gray-700">
          <div>
            <p className="text-lg font-semibold">{user.followers}</p>
            <p className="text-sm text-gray-500">Followers</p>
          </div>
          <div>
            <p className="text-lg font-semibold">{user.following}</p>
            <p className="text-sm text-gray-500">Following</p>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mt-4">
          <a href={user.social.twitter} target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-blue-500 text-xl hover:text-blue-700" />
          </a>
          <a href={user.social.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-blue-700 text-xl hover:text-blue-900" />
          </a>
          <a href={user.social.github} target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-gray-900 text-xl hover:text-gray-700" />
          </a>
        </div>

        {/* Edit Profile Button */}
        <Button className="mt-6 bg-blue-500 hover:bg-blue-700 text-white">
          Edit Profile
        </Button>
      </CardContent>
    </Card>
  )
}

export default ProfilePage
