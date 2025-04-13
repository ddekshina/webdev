// src/ProfilePage.jsx
import React from 'react';

function ProfilePage() {
  // Single theme with minimalistic colors
  const theme = {
    primary: 'bg-slate-700',
    secondary: 'bg-slate-100',
    text: 'text-slate-700',
    hover: 'hover:bg-slate-800',
    border: 'border-slate-500'
  };

  return (
    <div className={`min-h-screen ${theme.secondary} flex flex-col items-center justify-center p-4`}>
      {/* Main Card */}
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full overflow-hidden">
        {/* Header Banner */}
        <div className={`${theme.primary} h-20 relative`}>
          <div className="absolute -bottom-14 left-6">
            <div className={`${theme.border} border-3 rounded-full p-1 bg-white`}>
              <img 
                src="/api/placeholder/110/110" 
                alt="Profile" 
                className="rounded-full h-28 w-28 object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Profile Content */}
        <div className="mt-16 p-6">
          {/* Name */}
          <div className="ml-2">
            <h1 className="text-2xl font-bold text-gray-800">
              Devi Dekshina
            </h1>
            
            {/* Professional Title */}
            <p className={`${theme.text} font-medium`}>
              Computer Science Undergraduate @ CUSAT
            </p>
          </div>
          
          {/* Bio */}
          <div className="mt-6">
            <p className="text-gray-600 leading-relaxed border-l-2 pl-4 py-1 ml-2 border-gray-200">
              Computer Science student building digital solutions across the tech stack, 
              with focus on backend systems, full-stack applications, and emerging AI technologies.
            </p>
          </div>
          
          {/* Hobbies Section - Moved before Skills */}
          <div className="mt-6 ml-2">
            <h2 className="text-lg font-semibold text-gray-700 mb-3">
              Interests & Hobbies
            </h2>
            <div className="grid grid-cols-3 gap-3">
              <div className={`${theme.secondary} rounded-md p-3 text-center`}>
                <div className="text-xl mb-1">🎵</div>
                <div className="text-sm font-medium">Music</div>
              </div>
              <div className={`${theme.secondary} rounded-md p-3 text-center`}>
                <div className="text-xl mb-1">📝</div>
                <div className="text-sm font-medium">Poetry</div>
              </div>
              <div className={`${theme.secondary} rounded-md p-3 text-center`}>
                <div className="text-xl mb-1">🎬</div>
                <div className="text-sm font-medium">Movies</div>
              </div>
            </div>
          </div>
          
          {/* Skills Section - Now after Hobbies */}
          <div className="mt-6 ml-2">
            <h2 className="text-lg font-semibold text-gray-700 mb-3 flex items-center">
              Technical Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              <span className={`${theme.secondary} ${theme.text} px-3 py-1 rounded-md text-sm font-medium`}>JavaScript</span>
              <span className={`${theme.secondary} ${theme.text} px-3 py-1 rounded-md text-sm font-medium`}>React</span>
              <span className={`${theme.secondary} ${theme.text} px-3 py-1 rounded-md text-sm font-medium`}>Node.js</span>
              <span className={`${theme.secondary} ${theme.text} px-3 py-1 rounded-md text-sm font-medium`}>Tailwind CSS</span>
              <span className={`${theme.secondary} ${theme.text} px-3 py-1 rounded-md text-sm font-medium`}>Python</span>
              <span className={`${theme.secondary} ${theme.text} px-3 py-1 rounded-md text-sm font-medium`}>AI/ML</span>
            </div>
          </div>
        </div>
        
        {/* Footer with Professional Links */}
        <div className={`${theme.primary} p-4`}>
          <div className="flex justify-between px-4">
            <a href="https://github.com" className="text-white hover:text-white/80 transition-colors flex items-center gap-2">
              <div className="bg-white/20 rounded-md p-2">
                <span className="text-sm">👾</span>
              </div>
              <span className="text-sm font-medium">GitHub</span>
            </a>
            <a href="https://linkedin.com" className="text-white hover:text-white/80 transition-colors flex items-center gap-2">
              <div className="bg-white/20 rounded-md p-2">
                <span className="text-sm">💼</span>
              </div>
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
            <a href="mailto:email@example.com" className="text-white hover:text-white/80 transition-colors flex items-center gap-2">
              <div className="bg-white/20 rounded-md p-2">
                <span className="text-sm">✉️</span>
              </div>
              <span className="text-sm font-medium">Email</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;