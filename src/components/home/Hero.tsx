import React from 'react';
import { withDevMode } from '../../context/DeveloperMode';

function HeroComponent() {
  return (
    <section className="pt-32 pb-20 px-4 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/img/homepage_hero.png"
          alt="Hero Background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/95 to-gray-900/80" />
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h1 className="text-5xl font-bold text-white mb-6">
          Master AI & Robotics
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          Learn the skills of tomorrow with our comprehensive courses in artificial intelligence and robotics.
        </p>
        <div className="flex justify-center gap-4">
          <a 
            href="#courses" 
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Browse Courses
          </a>
          <a 
            href="#about"
            className="border border-gray-600 text-gray-300 px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            Learn More
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-indigo-500">15+</div>
            <div className="text-gray-400 mt-1">Courses</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-indigo-500">10K+</div>
            <div className="text-gray-400 mt-1">Students</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-indigo-500">4.8</div>
            <div className="text-gray-400 mt-1">Avg Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export const Hero = withDevMode(HeroComponent, 'Hero');