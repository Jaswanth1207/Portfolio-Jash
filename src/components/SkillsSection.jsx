import React from 'react';
import { Code, Layers, Globe, Server, Terminal, Database, Github } from 'lucide-react';

const skills = [
  { name: 'JavaScript', level: 90, icon: Code, category: 'Frontend' },
  { name: 'React.js', level: 85, icon: Layers, category: 'Frontend' },
  { name: 'HTML/CSS', level: 95, icon: Globe, category: 'Frontend' },
  { name: 'Node.js', level: 75, icon: Server, category: 'Backend' },
  { name: 'Tailwind CSS', level: 88, icon: Layers, category: 'Frontend' },
  { name: 'Python', level: 80, icon: Terminal, category: 'Programming' },
  { name: 'MongoDB', level: 70, icon: Database, category: 'Database' },
  { name: 'Git/GitHub', level: 82, icon: Github, category: 'Tools' }
];

const SkillCard = ({ skill }) => (
  <div className="bg-white rounded-2xl p-6 shadow-sm border hover:shadow-md transition-all duration-300 hover:-translate-y-1">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
          <skill.icon size={20} className="text-gray-700" />
        </div>
        <div>
          <h3 className="font-bold text-gray-900">{skill.name}</h3>
          <p className="text-sm text-gray-600">{skill.category}</p>
        </div>
      </div>
      <span className="text-lg font-bold text-blue-600">{skill.level}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div
        className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-1000 ease-out"
        style={{ width: `${skill.level}%` }}
      />
    </div>
  </div>
);

const SkillsSection = () => (
  <section className="min-h-screen py-20 px-6 bg-gray-50">
    <div className="container mx-auto max-w-6xl">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Technical Skills</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Comprehensive expertise in modern web development technologies and programming languages.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
      <div className="bg-white rounded-2xl p-8 shadow-sm border">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Technology Stack</h3>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <h4 className="font-semibold text-gray-900 mb-3">Frontend</h4>
            <div className="space-y-2 text-sm text-gray-700">
              <p>React.js, JavaScript</p>
              <p>HTML5, CSS3</p>
              <p>Tailwind CSS</p>
            </div>
          </div>
          <div className="text-center">
            <h4 className="font-semibold text-gray-900 mb-3">Backend</h4>
            <div className="space-y-2 text-sm text-gray-700">
              <p>Node.js</p>
              <p>Python</p>
              <p>RESTful APIs</p>
            </div>
          </div>
          <div className="text-center">
            <h4 className="font-semibold text-gray-900 mb-3">Database</h4>
            <div className="space-y-2 text-sm text-gray-700">
              <p>MongoDB</p>
              <p>Database Design</p>
              <p>Data Management</p>
            </div>
          </div>
          <div className="text-center">
            <h4 className="font-semibold text-gray-900 mb-3">Tools</h4>
            <div className="space-y-2 text-sm text-gray-700">
              <p>Git, GitHub</p>
              <p>Version Control</p>
              <p>Development Tools</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SkillsSection;
