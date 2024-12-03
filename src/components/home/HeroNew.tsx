import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

export function HeroNew() {
  return (
    <div className="relative min-h-[80vh] bg-gray-900 text-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 to-blue-900/30 mix-blend-multiply" />
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-gray-900" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Empower Your Future with</span>{' '}
                <span className="block text-purple-500 xl:inline">AI Mastery</span>
              </h1>
              <p className="mt-3 text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Develop a comprehensive AI mindset through foundational insights, strategic thinking, and future-proofing strategies. Go beyond tools to master the AI revolution.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start space-x-4">
                <div className="rounded-md shadow">
                  <a
                    href="#courses"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 md:py-4 md:text-lg md:px-10"
                  >
                    Explore Courses
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </div>
                <div className="mt-3 sm:mt-0">
                  <a
                    href="#podcast"
                    className="w-full flex items-center justify-center px-8 py-3 border border-white/20 text-base font-medium rounded-md text-white hover:bg-white/10 md:py-4 md:text-lg md:px-10"
                  >
                    Listen to Podcast
                    <Play className="ml-2 h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Hero image section */}
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="relative h-64 sm:h-72 md:h-96 lg:h-full">
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 animate-pulse" />
          
          {/* Robot image */}
          <div className="relative h-full w-full">
            <img
              className="absolute inset-0 w-full h-full object-contain p-8 transform hover:scale-105 transition-transform duration-500"
              src="https://api.dicebear.com/7.x/bottts/svg?seed=hero&backgroundColor=transparent&scale=110&radius=10"
              alt="AI Robot"
            />
          </div>

          {/* Animated blobs */}
          <div 
            className="absolute top-1/4 right-1/4 w-72 h-72 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
            style={{ animationDelay: '0ms' }}
          />
          <div 
            className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
            style={{ animationDelay: '2000ms' }}
          />
          <div 
            className="absolute top-1/2 left-1/2 w-72 h-72 bg-indigo-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
            style={{ animationDelay: '4000ms' }}
          />
        </div>
      </div>
    </div>
  );
} 