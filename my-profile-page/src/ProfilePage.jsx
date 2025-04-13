import React, { useState } from 'react';

function ProfilePage() {
  // Theme configuration
  const theme = {
    primary: 'bg-slate-800',
    secondary: 'bg-slate-100',
    accent: 'bg-blue-600',
    textPrimary: 'text-slate-800',
    textSecondary: 'text-slate-600',
    textWhite: 'text-white',
    hover: 'hover:bg-slate-700',
    border: 'border-slate-300',
    cardPrimary: 'bg-slate-700',
    cardBorder: 'border-slate-500'
  };

  // State for mobile menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Smooth scroll function
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  // Navigation items
  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' }
  ];

  // Hobbies data
  const hobbies = [
    { icon: '🎵', name: 'Music', description: 'Exploring different genres and playing instruments' },
    { icon: '📝', name: 'Poetry', description: 'Writing and reading poetic expressions' },
    { icon: '🎬', name: 'Movies', description: 'Analyzing films and cinematography' }
  ];

  return (
    <div className={`min-h-screen ${theme.secondary} flex flex-col`}>
      {/* Navigation Bar */}
      <nav className={`${theme.primary} sticky top-0 z-50 shadow-md`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <span 
                className={`${theme.textWhite} font-bold text-xl cursor-pointer`} 
                onClick={() => scrollToSection('home')}
              >
                Devi Dekshina
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className={`${theme.textWhite} ${theme.hover} px-3 py-2 rounded-md text-sm font-medium`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`inline-flex items-center justify-center p-2 rounded-md text-white ${theme.hover} focus:outline-none`}
                aria-label="Toggle menu"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className={`${theme.textWhite} ${theme.hover} block px-3 py-2 rounded-md text-base font-medium w-full text-left`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section with Clean Background */}
      <section id="home" className="relative pb-24 flex-grow flex items-center justify-center p-4">
        {/* Profile Card */}
        <div className="bg-white rounded-lg shadow-xl max-w-md w-full overflow-hidden relative z-10 border border-gray-200 transition-all duration-300 hover:shadow-2xl mt-16">
          {/* Header Banner */}
          <div className={`${theme.cardPrimary} h-20 relative`}>
            <div className="absolute -bottom-14 left-6">
              <div className="border-2 border-white rounded-full p-1 bg-white shadow-lg">
                <img 
                  src="/api/placeholder/110/110" 
                  alt="Profile" 
                  className="rounded-full h-28 w-28 object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Profile Content */}
          <div className="mt-12 p-6">
            <div className="ml-2">
              <h2 className={`${theme.textPrimary} text-xl font-bold`}>Devi Dekshina</h2>
              <p className={`${theme.textSecondary} font-medium`}>
                Computer Science Undergraduate @ CUSAT
              </p>
            </div>
            
            <div className="mt-6">
              <p className="text-gray-600 leading-relaxed border-l-2 pl-4 py-1 ml-2 border-gray-200">
                Computer Science student building digital solutions across the tech stack, 
                with focus on backend systems, full-stack applications, and emerging AI technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white relative z-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-8">About Me</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">Background</h3>
              <p className={`${theme.textSecondary} leading-relaxed`}>
                I'm a passionate Computer Science student at Cochin University with
                strong interest in software development and artificial intelligence.
                My journey in tech began when I wrote my first line of code in high school.
              </p>
            </div>

            {/* Hobbies Section */}
            <div className="mt-10">
              <h3 className="text-xl font-semibold mb-6 text-center">My Hobbies</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {hobbies.map((hobby, index) => (
                  <div 
                    key={index} 
                    className={`bg-white rounded-lg p-4 shadow-md border ${theme.border} transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
                  >
                    <div className="text-3xl mb-3 text-center">{hobby.icon}</div>
                    <h4 className="font-semibold text-center mb-2">{hobby.name}</h4>
                    <p className="text-sm text-gray-600 text-center">{hobby.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Education</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-bold">B.Tech in Computer Science</h4>
                  <p className={`${theme.textSecondary}`}>Cochin University (CUSAT)</p>
                  <p className={`${theme.textSecondary} text-sm`}>2021 - 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`${theme.primary} py-6 ${theme.textWhite} text-center relative z-20`}>
        <div className="max-w-6xl mx-auto px-4">
          <p>© {new Date().getFullYear()} Devi Dekshina. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default ProfilePage;