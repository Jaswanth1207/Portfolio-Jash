import React from 'react';
import { Trophy, Briefcase, MapPin, Calendar, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, fadeIn } from './motionConfig';

const experience = [
  {
    title: "Hackverse Hackathon Participant",
    organization: "Kanini Solutions",
    organizer: "CodeKrafters Club, SRM IST",
    date: "2024",
    type: "Competition",
    description: "Participated in competitive programming and development challenges, showcasing problem-solving skills and innovative thinking."
  }
];


const ExperienceSection = ({ setActiveSection }) => (
  <motion.section
    className="min-h-screen py-20 px-6"
    variants={fadeIn}
    initial="initial"
    animate="animate"
    exit="initial"
  >
    <div className="container mx-auto max-w-4xl">
      <motion.div className="text-center mb-16" variants={fadeInUp} initial="initial" animate="animate">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Experience & Activities</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Practical experience gained through competitive programming and collaborative projects.
        </p>
      </motion.div>
      <div className="space-y-8">
        {experience.map((exp, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl p-8 shadow-sm border hover:shadow-md transition-all duration-300 hover:scale-102"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.1 + index * 0.15 }}
          >
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Trophy size={28} className="text-white" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-4 mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {exp.type}
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-4 mb-4 text-gray-700">
                  <div className="flex items-center gap-1">
                    <Briefcase size={16} />
                    <span>{exp.organization}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={16} />
                    <span>{exp.organizer}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>{exp.date}</span>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
        <motion.div
          className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 border"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.2 + experience.length * 0.15 }}
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Star size={28} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Looking for Opportunities</h3>
            <p className="text-gray-700 mb-6">
              Actively seeking internships and collaborative projects to further develop my skills 
              and contribute to meaningful development work.
            </p>
            <button
              onClick={() => setActiveSection('contact')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all hover:scale-105"
            >
              Let's Connect
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  </motion.section>
);

export default ExperienceSection;
