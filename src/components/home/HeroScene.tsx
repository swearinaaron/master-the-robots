'use client'

import { SplineScene } from "../ui/splite";
import { Card } from "../ui/card"
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { API_ENDPOINTS } from '../../config/api';

export function HeroScene() {
  return (
    <Card className="w-full h-[600px] bg-gradient-to-r from-purple-600/90 to-indigo-600/90 relative overflow-hidden border-0">
      <div className="flex flex-col md:flex-row min-h-screen relative">
        {/* Left content */}
        <div className="flex-1 flex items-center px-8 sm:px-16 lg:px-24 pt-24 md:pt-0 z-20">
          <div className="max-w-xl">
            <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-purple-100">
              Master the Future
            </h1>
            <p className="mt-6 text-purple-100 max-w-lg text-xl leading-relaxed">
              Learn to build and control intelligent machines. Join our comprehensive 
              training program in AI, robotics, and automation.
            </p>
            <div className="mt-8 flex gap-4">
              <Link 
                to="/courses"
                className="inline-flex items-center px-6 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
              >
                Browse Courses
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a
                href="/about"
                className="inline-flex items-center px-6 py-3 border border-purple-200 text-white rounded-lg font-semibold hover:bg-purple-600/20 transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

        {/* Right content */}
        <div className="flex-1 relative h-[800px] md:h-auto -mt-24 md:mt-0 z-10 overflow-visible">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full scale-110 origin-center"
          />
        </div>
      </div>
    </Card>
  )
} 