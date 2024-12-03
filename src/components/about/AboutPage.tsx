import React from 'react';
import { Briefcase, GraduationCap, Award, MessageCircle, Github, Linkedin, Twitter } from 'lucide-react';

const experiences = [
  {
    title: "AI Research Lead",
    company: "Tech Innovations Inc.",
    period: "2020 - Present",
    description: "Leading research initiatives in artificial intelligence and robotics, focusing on developing cutting-edge solutions for autonomous systems."
  },
  {
    title: "Senior Robotics Engineer",
    company: "RoboTech Solutions",
    period: "2017 - 2020",
    description: "Developed and implemented advanced robotics systems for industrial applications, specializing in computer vision and motion planning."
  },
  {
    title: "Machine Learning Engineer",
    company: "AI Dynamics",
    period: "2015 - 2017",
    description: "Designed and deployed machine learning models for predictive analytics and pattern recognition in large-scale systems."
  }
];

const education = [
  {
    degree: "Ph.D. in Robotics",
    institution: "Stanford University",
    period: "2012 - 2015",
    description: "Research focused on autonomous systems and artificial intelligence applications in robotics."
  },
  {
    degree: "M.S. in Computer Science",
    institution: "MIT",
    period: "2010 - 2012",
    description: "Specialized in machine learning and computer vision."
  }
];

const awards = [
  "Innovation in AI Award 2022",
  "Best Paper Award - Robotics Conference 2021",
  "Tech Leader of the Year 2020"
];

export function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <div className="w-40 h-40 rounded-full overflow-hidden mb-6">
              <img
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=aaron&backgroundColor=b477f7"
                alt="Aaron Pickrell"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-4xl font-bold mb-4">Aaron Pickrell</h1>
            <p className="text-xl text-purple-100 max-w-2xl text-center">
              AI & Robotics Expert | Educator | Technology Enthusiast
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-white hover:text-purple-200">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-white hover:text-purple-200">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-white hover:text-purple-200">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* About Section */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-gray-600">
            With over a decade of experience in AI and robotics, I'm passionate about making complex technology accessible to everyone. Through my courses and content, I help students and professionals master the fundamentals of artificial intelligence and robotics engineering. My approach combines theoretical knowledge with practical, hands-on experience to ensure real-world applicability.
          </p>
        </div>

        {/* Experience Section */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <div className="flex items-center mb-6">
            <Briefcase className="w-6 h-6 text-purple-600 mr-2" />
            <h2 className="text-2xl font-bold text-gray-900">Experience</h2>
          </div>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="border-l-2 border-purple-200 pl-4">
                <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                <p className="text-purple-600">{exp.company}</p>
                <p className="text-gray-500 text-sm">{exp.period}</p>
                <p className="text-gray-600 mt-2">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <div className="flex items-center mb-6">
            <GraduationCap className="w-6 h-6 text-purple-600 mr-2" />
            <h2 className="text-2xl font-bold text-gray-900">Education</h2>
          </div>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="border-l-2 border-purple-200 pl-4">
                <h3 className="text-xl font-semibold text-gray-900">{edu.degree}</h3>
                <p className="text-purple-600">{edu.institution}</p>
                <p className="text-gray-500 text-sm">{edu.period}</p>
                <p className="text-gray-600 mt-2">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Awards Section */}
        <div className="bg-white rounded-xl shadow-md p-8">
          <div className="flex items-center mb-6">
            <Award className="w-6 h-6 text-purple-600 mr-2" />
            <h2 className="text-2xl font-bold text-gray-900">Awards & Recognition</h2>
          </div>
          <ul className="space-y-3">
            {awards.map((award, index) => (
              <li key={index} className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                {award}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
} 