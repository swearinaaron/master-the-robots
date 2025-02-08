import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { withDevMode } from '../../context/DeveloperMode';
import { LoginButton } from '../auth/LoginButton';
import { API_ENDPOINTS } from '../../config/api';
import { Cpu, Menu, X } from 'lucide-react';

function HeaderComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src={`${API_ENDPOINTS.base}/img/mtr-logo-big-transparent.png`}
                alt="Master the Robots" 
                className="h-8 lg:h-10 w-auto transition-all"
              />
              <span className="ml-2 text-xl lg:text-2xl font-semibold text-white transition-all">
                Master the Robots
              </span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/courses" className="text-gray-300 hover:text-white">Courses</Link>
            <Link to="/podcast" className="text-gray-300 hover:text-white">Podcast</Link>
            <Link to="/blog" className="text-gray-300 hover:text-white">Blog</Link>
            <Link to="/resources" className="text-gray-300 hover:text-white">Resources</Link>
            <Link to="/about" className="text-gray-300 hover:text-white">About</Link>
            <LoginButton />
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900/95 rounded-b-lg border-t border-gray-800">
              <Link to="/courses" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg">
                Courses
              </Link>
              <Link to="/podcast" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg">
                Podcast
              </Link>
              <Link to="/blog" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg">
                Blog
              </Link>
              <Link to="/resources" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg">
                Resources
              </Link>
              <Link to="/about" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg">
                About
              </Link>
              <div className="px-3 py-2">
                <LoginButton />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export const Header = withDevMode(HeaderComponent, 'Header');