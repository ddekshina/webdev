// src/ProfilePage.jsx
import React from 'react';

function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-md max-w-md w-full p-6">
        {/* Profile Image */}
        <div className="flex justify-center mb-4">
          <img 
            src="/api/placeholder/150/150" 
            alt="Profile" 
            className="rounded-full h-32 w-32 object-cover border-4 border-blue-500"
          />
        </div>
        
        {/* Name */}
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-2">
          Devi Dekshina
        </h1>
        
        {/* Bio */}
        <p className="text-gray-600 text-center mb-4">
        Hi there! A passionate Computer Science undergraduate at CUSAT, I'm focused on building impactful digital solutions. I enjoy working across the tech stack, with a growing interest in backend systems, full-stack web development, and AI-powered applications. Whether it's a hackathon, a personal project, or collaborative development, I thrive on learning new technologies and solving real-world problems.

Let’s build something awesome together!


        </p>
        
        {/* Hobbies */}
        <div className="mb-4">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">My Hobbies</h2>
          <ul className="list-disc pl-5 text-gray-600">
            <li>Coding websites and apps</li>
            <li>Poetry and short stories</li>
            <li>Listening to music</li>
          </ul>
        </div>
        
        {/* Social Links - You can add these later */}
        <div className="flex justify-center space-x-4 mt-6">
          <a href="#" className="text-blue-500 hover:text-blue-700">
            <span className="bg-blue-100 rounded-full p-2">📱</span>
          </a>
          <a href="#" className="text-blue-500 hover:text-blue-700">
            <span className="bg-blue-100 rounded-full p-2">📧</span>
          </a>
          <a href="#" className="text-blue-500 hover:text-blue-700">
            <span className="bg-blue-100 rounded-full p-2">💻</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;