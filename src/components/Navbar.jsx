import React from 'react';
import { User, Download } from 'lucide-react';

const Navbar = ({ activeSection, setActiveSection }) => {
  const NavSection = ({ label, isActive, onClick }) => (
    <button
      onClick={onClick}
      className={`relative px-6 py-2 font-medium transition-all duration-300 hover:scale-105 ${
        isActive 
          ? 'text-blue-600' 
          : 'text-gray-700 hover:text-blue-600'
      }`}
    >
      {label}
      {isActive && (
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />
      )}
    </button>
  );

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      typeof window !== 'undefined' && window.scrollY > 50 ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-white'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <User size={20} className="text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Jaswanth Immanuel</h1>
              <p className="text-sm text-gray-600">Web Developer</p>
            </div>
          </div>
          <div className="hidden md:flex space-x-1">
            {[
              { key: 'home', label: 'Home' },
              { key: 'about', label: 'About' },
              { key: 'skills', label: 'Skills' },
              { key: 'experience', label: 'Experience' },
              { key: 'education', label: 'Education' },
              { key: 'contact', label: 'Contact' }
            ].map((item) => (
              <NavSection
                key={item.key}
                label={item.label}
                isActive={activeSection === item.key}
                onClick={() => setActiveSection(item.key)}
              />
            ))}
          </div>
          <button className="hidden md:flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors hover:scale-105">
            <Download size={18} />
            Resume
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
