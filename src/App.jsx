import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HomeSection from './components/HomeSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn, fadeInUp } from './components/motionConfig';
import {
  GraduationCap,
  Trophy,
  Camera,
  Video,
  Mail,
  Phone,
  Linkedin,
  Instagram,
  Github,
  ExternalLink,
  Star,
  Award,
  Calendar,
  MapPin,
  Briefcase
} from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-gray-50">
  {/* Navigation */}
  <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Content */}
      <motion.div className="pt-20" variants={fadeIn} initial="initial" animate="animate">
        <AnimatePresence mode="wait">
          {activeSection === 'home' && (
            <motion.div key="home" variants={fadeInUp} initial="initial" animate="animate" exit="initial">
              <HomeSection setActiveSection={setActiveSection} />
            </motion.div>
          )}
          {activeSection === 'about' && (
            <motion.section key="about" className="min-h-screen py-20 px-6" variants={fadeInUp} initial="initial" animate="animate" exit="initial">
              <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">About Me</h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    A dedicated Computer Science Engineering student with a passion for creating 
                    innovative web solutions and solving complex problem.
                  </p>
                </div>
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white rounded-2xl p-8 shadow-sm border">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Background</h3>
                      <p className="text-gray-700 leading-relaxed mb-6">
                        Currently pursuing my Bachelor's in Computer Science Engineering at SRM Institute of Science 
                        and Technology, Ramapuram, where I maintain an excellent CGPA of 9.1. My academic journey is 
                        complemented by hands-on experience in web development and participation in competitive programming.
                      </p>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <h4 className="font-semibold text-gray-900">Core Competencies</h4>
                          <ul className="space-y-2 text-gray-700">
                            <li>• Full-Stack Web Development</li>
                            <li>• Modern JavaScript & React</li>
                            <li>• Responsive UI/UX Design</li>
                            <li>• Database Management</li>
                          </ul>
                        </div>
                        <div className="space-y-3">
                          <h4 className="font-semibold text-gray-900">Personal Interests</h4>
                          <div className="flex flex-wrap gap-2">
                            <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                              <Camera size={14} /> Photography
                            </span>
                            <span className="inline-flex items-center gap-1 bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm">
                              <Video size={14} /> Videography
                            </span>
                            <span className="inline-flex items-center gap-1 bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm">
                              {/* <Code size={14} /> */} Problem Solving
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                          <Trophy className="text-white" size={20} />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900">Key Achievement</h4>
                          <p className="text-sm text-gray-600">Hackathon Participation</p>
                        </div>
                      </div>
                      <p className="text-gray-700 text-sm">
                        Successfully participated in Hackverse Hackathon organized by CodeKrafters Club 
                        at SRM IST, demonstrating problem-solving skills and teamwork.
                      </p>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-sm border">
                      <h4 className="font-bold text-gray-900 mb-4">Academic Excellence</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700">Current CGPA</span>
                          <span className="font-bold text-blue-600">9.0/10</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700">12th Grade</span>
                          <span className="font-bold text-green-600">80%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700">Stream</span>
                          <span className="font-medium text-gray-900">PCM</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>
          )}
          {activeSection === 'skills' && (
            <motion.div key="skills" variants={fadeInUp} initial="initial" animate="animate" exit="initial">
              <SkillsSection />
            </motion.div>
          )}
          {activeSection === 'experience' && (
            <motion.div key="experience" variants={fadeInUp} initial="initial" animate="animate" exit="initial">
              <ExperienceSection setActiveSection={setActiveSection} />
            </motion.div>
          )}
          {activeSection === 'education' && (
            <motion.section key="education" className="min-h-screen py-20 px-6 bg-gray-50" variants={fadeInUp} initial="initial" animate="animate" exit="initial">
              <div className="container mx-auto max-w-4xl">
                <div className="text-center mb-16">
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Education</h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Academic foundation built through rigorous coursework and consistent performance excellence.
                  </p>
                </div>
                <div className="space-y-8">
                  <div className="bg-white rounded-2xl p-8 shadow-sm border hover:shadow-md transition-all duration-300 hover:scale-102">
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center flex-shrink-0">
                        <GraduationCap size={28} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-4 mb-3">
                          <h3 className="text-xl font-bold text-gray-900">Bachelor of Technology</h3>
                          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                            In Progress
                          </span>
                        </div>
                        <p className="text-lg text-gray-800 mb-2">Computer Science Engineering</p>
                        <p className="text-gray-700 mb-4">SRM Institute of Science and Technology, Ramapuram</p>
                        <div className="grid md:grid-cols-3 gap-4 mb-4">
                          <div className="flex items-center gap-2">
                            <Calendar size={16} className="text-blue-600" />
                            <span className="text-gray-700">2023 - 2027</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Star size={16} className="text-yellow-500" />
                            <span className="text-gray-700">CGPA: 9.0/10</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Award size={16} className="text-green-600" />
                            <span className="text-gray-700">Currently 3rd Year</span>
                          </div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4">
                          <h4 className="font-semibold text-gray-900 mb-2">Key Coursework</h4>
                          <div className="grid md:grid-cols-2 gap-2 text-sm text-gray-700">
                            <p>• Data Structures & Algorithms</p>
                            <p>• Database Management Systems</p>
                            <p>• Web Technologies</p>
                            <p>• Software Engineering</p>
                            <p>• Object-Oriented Programming</p>
                            <p>• Computer Networks</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl p-8 shadow-sm border hover:shadow-md transition-all duration-300 hover:scale-102">
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-xl flex items-center justify-center flex-shrink-0">
                        <GraduationCap size={28} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-4 mb-3">
                          <h3 className="text-xl font-bold text-gray-900">Higher Secondary Education</h3>
                          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                            Completed
                          </span>
                        </div>
                        <p className="text-lg text-gray-800 mb-2">Science Stream (PCM)</p>
                        <p className="text-gray-700 mb-4">DAV Matriculation Higher Secondary School, Choolimedu</p>
                        <div className="grid md:grid-cols-3 gap-4">
                          <div className="flex items-center gap-2">
                            <Calendar size={16} className="text-green-600" />
                            <span className="text-gray-700">Graduated 2023</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Star size={16} className="text-yellow-500" />
                            <span className="text-gray-700">Percentage: 80%</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Award size={16} className="text-green-600" />
                            <span className="text-gray-700">Top 10% of Class</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>
          )}
          {activeSection === 'contact' && (
            <motion.section key="contact" className="min-h-screen py-20 px-6 bg-gray-50" variants={fadeInUp} initial="initial" animate="animate" exit="initial">
              <div className="container mx-auto max-w-4xl">
                <div className="text-center mb-16">
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Contact Me</h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    I would love to hear from you! Whether you have a question or just want to say hi, 
                    feel free to reach out.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="bg-white rounded-2xl p-8 shadow-sm border">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Get In Touch</h3>
                      <p className="text-gray-700 leading-relaxed mb-6">
                        Fill out the form below to send me a message. I try to respond to all inquiries 
                        within 24 hours.
                      </p>
                      <form action="https://formspree.io/f/mwkajnlg" method="POST" className="space-y-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                          <input 
                            type="text" 
                            name="name" 
                            id="name" 
                            required
                            className="block w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                          <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            required
                            className="block w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
                          />
                        </div>
                        <div>
                          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                          <textarea 
                            name="message" 
                            id="message" 
                            rows="4" 
                            required
                            className="block w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
                          />
                        </div>
                        <button
                          type="submit"
                          className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all hover:scale-105"
                        >
                          Send Message
                        </button>
                      </form>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="bg-white rounded-2xl p-8 shadow-sm border">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h3>
                      <p className="text-gray-700 leading-relaxed mb-6">
                        You can also reach me through the following channels:
                      </p>
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                          <Mail size={20} className="text-blue-600" />
                          <div>
                            <p className="font-medium text-gray-900">Email</p>
                            <p className="text-gray-700">jaswanthjash1275@gmail.com</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Phone size={20} className="text-green-600" />
                          <div>
                            <p className="font-medium text-gray-900">Phone</p>
                            <p className="text-gray-700">9094495803</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Linkedin size={20} className="text-blue-800" />
                          <div>
                            <p className="font-medium text-gray-900">LinkedIn</p>
                            <a href="https://www.linkedin.com/in/jaswanth-immanuel-3237312ab/" className="text-gray-700 hover:text-blue-600" target="_blank" rel="noopener noreferrer">
                              https://www.linkedin.com/in/jaswanth-immanuel-3237312ab/
                            </a>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Instagram size={20} className="text-pink-600" />
                          <div>
                            <p className="font-medium text-gray-900">Instagram</p>
                            <a href="https://www.instagram.com/_.jashhhh._?igsh=emliMGVnYjNsbjI0" className="text-gray-700 hover:text-blue-600" target="_blank" rel="noopener noreferrer">
                              @_.jashhhh._
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-2xl p-8 shadow-sm border">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Location</h3>
                      <p className="text-gray-700 leading-relaxed mb-6">
                        Based in Chennai, India. Open to relocation and remote opportunities.
                      </p>
                      <div className="flex items-center gap-3">
                        <MapPin size={20} className="text-red-600" />
                        <p className="text-gray-700">Chennai, Tamil Nadu, India</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Footer */}
      <footer className="bg-white py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-sm text-gray-600">
                &copy; 2024 Jaswanth Immanuel. All rights reserved.
              </p>
            </div>
            
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/jaswanth-immanuel-3237312ab/" className="text-gray-700 hover:text-blue-600 transition-colors hover:scale-110" target="_blank" rel="noopener noreferrer">
                <Linkedin size={18} />
              </a>
              <a href="mailto:jaswanthjash1275@gmail.com" className="text-gray-700 hover:text-blue-600 transition-colors hover:scale-110" target="_blank" rel="noopener noreferrer">
                <Mail size={18} />
              </a>
              <a href="https://www.instagram.com/_.jashhhh._?igsh=emliMGVnYjNsbjI0" className="text-gray-700 hover:text-blue-600 transition-colors hover:scale-110" target="_blank" rel="noopener noreferrer">
                <Instagram size={18} />
              </a>
              <a href="tel:9094495803" className="text-gray-700 hover:text-blue-600 transition-colors hover:scale-110">
                <Phone size={18} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;