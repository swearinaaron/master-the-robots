import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { ProtectedRoute } from '../auth/ProtectedRoute';
import { Settings, Book, Clock, Award } from 'lucide-react';

export function ProfilePage() {
  return (
    <ProtectedRoute>
      <ProfileContent />
    </ProtectedRoute>
  );
}

function ProfileContent() {
  const { user } = useAuth();

  const stats = [
    { label: 'Courses Enrolled', value: '3', icon: Book },
    { label: 'Hours Learned', value: '24', icon: Clock },
    { label: 'Certificates', value: '1', icon: Award },
  ];

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Profile Header */}
        <div className="bg-gray-800 rounded-xl p-6 mb-8">
          <div className="flex items-center space-x-6">
            <img
              src={user?.picture}
              alt={user?.name}
              className="w-24 h-24 rounded-full border-4 border-indigo-500"
            />
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">{user?.name}</h1>
              <p className="text-gray-400">{user?.email}</p>
            </div>
            <button className="ml-auto flex items-center px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors">
              <Settings className="w-4 h-4 mr-2" />
              Edit Profile
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gray-800 rounded-xl p-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-indigo-500/10 rounded-lg">
                  <stat.icon className="w-8 h-8 text-indigo-500" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Course Progress */}
        <div className="bg-gray-800 rounded-xl p-6">
          <h2 className="text-xl font-bold text-white mb-6">Course Progress</h2>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-sm text-gray-400 mb-2">
                <span>AI Fundamentals</span>
                <span>75% Complete</span>
              </div>
              <div className="h-2 bg-gray-700 rounded-full">
                <div className="h-full w-3/4 bg-indigo-500 rounded-full"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm text-gray-400 mb-2">
                <span>Machine Learning Basics</span>
                <span>40% Complete</span>
              </div>
              <div className="h-2 bg-gray-700 rounded-full">
                <div className="h-full w-2/5 bg-indigo-500 rounded-full"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm text-gray-400 mb-2">
                <span>Robotics Programming</span>
                <span>20% Complete</span>
              </div>
              <div className="h-2 bg-gray-700 rounded-full">
                <div className="h-full w-1/5 bg-indigo-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 