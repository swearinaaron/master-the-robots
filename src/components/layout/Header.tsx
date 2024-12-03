import React from 'react';
import { Cpu } from 'lucide-react';
import { withDevMode } from '../../context/DeveloperMode';
import { LoginButton } from '../auth/LoginButton';

function HeaderComponent() {
  return (
    <nav className="fixed w-full bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="#home" className="flex items-center">
              <Cpu className="h-8 w-8 text-indigo-500" />
              <span className="ml-2 text-xl font-semibold text-white">Master the Robots</span>
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#courses" className="text-gray-300 hover:text-white">Courses</a>
            <a href="#podcast" className="text-gray-300 hover:text-white">Podcast</a>
            <a href="#blog" className="text-gray-300 hover:text-white">Blog</a>
            <a href="#resources" className="text-gray-300 hover:text-white">Resources</a>
            <a href="#about" className="text-gray-300 hover:text-white">About</a>
            <LoginButton />
          </div>
        </div>
      </div>
    </nav>
  );
}

export const Header = withDevMode(HeaderComponent, 'Header');