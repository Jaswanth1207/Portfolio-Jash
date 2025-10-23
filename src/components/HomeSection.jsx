import React from 'react';
import { User, Code, Camera } from 'lucide-react';

const HomeSection = ({ setActiveSection }) => (
  <section className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-gray-50 to-blue-50">
    <div className="container mx-auto max-w-6xl">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
              👋 Welcome to my portfolio
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              I'm <span className="text-blue-600">Jaswanth</span>
              <br />
              <span className="text-gray-700">Web Developer</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              Passionate Computer Science Engineering student specializing in modern web development 
              with expertise in React, JavaScript, and full-stack technologies.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 pt-4">
            <button
              onClick={() => setActiveSection('contact')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all hover:scale-105"
            >
              Get In Touch
            </button>
            <button
              onClick={() => setActiveSection('about')}
              className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-3 rounded-lg font-medium transition-all hover:scale-105"
            >
              Learn More
            </button>
          </div>
          <div className="flex items-center gap-6 pt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">9.1</div>
              <div className="text-sm text-gray-600">CGPA</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">3rd</div>
              <div className="text-sm text-gray-600">Year CSE</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">8+</div>
              <div className="text-sm text-gray-600">Technologies</div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="relative w-full max-w-md mx-auto">
            <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl p-8">
              <div className="w-full h-full bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center overflow-hidden">
                <img
                  src="/jash.jpg"
                  alt="Jaswanth Immanuel"
                  className="object-cover w-full h-full rounded-2xl shadow-lg"
                />
              </div>
            </div>
            {/* Floating cards */}
            <div className="absolute -top-6 -right-6 bg-white rounded-lg shadow-lg p-4 animate-bounce">
              <Code className="text-blue-600" size={24} />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 animate-bounce" style={{animationDelay: '1s'}}>
              <Camera className="text-purple-600" size={24} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HomeSection;
