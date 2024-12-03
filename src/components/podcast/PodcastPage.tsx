import React from 'react';
import { Play, Clock, Download, Share2 } from 'lucide-react';

interface PodcastEpisode {
  title: string;
  description: string;
  duration: string;
  date: string;
  imageUrl: string;
  audioUrl: string;
}

const episodes: PodcastEpisode[] = [
  {
    title: "The Future of AI in Robotics",
    description: "Exploring the intersection of artificial intelligence and robotics, and how these technologies are shaping our future.",
    duration: "45:30",
    date: "Dec 1, 2023",
    imageUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=podcast-1&backgroundColor=8B5CF6",
    audioUrl: "#"
  },
  {
    title: "Machine Learning Fundamentals",
    description: "A deep dive into the basics of machine learning, perfect for beginners looking to understand the core concepts.",
    duration: "38:15",
    date: "Nov 24, 2023",
    imageUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=podcast-2&backgroundColor=3B82F6",
    audioUrl: "#"
  },
  {
    title: "Robotics in Industry 4.0",
    description: "How industrial robotics is transforming manufacturing and what it means for the future of work.",
    duration: "42:00",
    date: "Nov 17, 2023",
    imageUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=podcast-3&backgroundColor=10B981",
    audioUrl: "#"
  }
];

export function PodcastPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Master the Robots Podcast</h1>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Weekly discussions about AI, robotics, and the future of technology
            </p>
          </div>
        </div>
      </div>

      {/* Subscribe Section */}
      <div className="bg-white shadow-md py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="text-lg font-semibold text-gray-900">Listen on:</span>
            <a href="#" className="text-purple-600 hover:text-purple-700 font-medium">Spotify</a>
            <span className="text-gray-300">|</span>
            <a href="#" className="text-purple-600 hover:text-purple-700 font-medium">Apple Podcasts</a>
            <span className="text-gray-300">|</span>
            <a href="#" className="text-purple-600 hover:text-purple-700 font-medium">Google Podcasts</a>
            <span className="text-gray-300">|</span>
            <a href="#" className="text-purple-600 hover:text-purple-700 font-medium">RSS Feed</a>
          </div>
        </div>
      </div>

      {/* Episodes List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Episodes</h2>
        <div className="space-y-6">
          {episodes.map((episode, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-48 h-48 bg-purple-100">
                  <img
                    src={episode.imageUrl}
                    alt={episode.title}
                    className="w-full h-full object-cover p-4"
                  />
                </div>
                <div className="flex-1 p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{episode.title}</h3>
                    <span className="text-sm text-gray-500">{episode.date}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{episode.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center space-x-2 text-purple-600 hover:text-purple-700">
                        <Play className="w-5 h-5" />
                        <span>Play</span>
                      </button>
                      <div className="flex items-center text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{episode.duration}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <button className="text-gray-500 hover:text-gray-600">
                        <Download className="w-5 h-5" />
                      </button>
                      <button className="text-gray-500 hover:text-gray-600">
                        <Share2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Never Miss an Episode</h2>
            <p className="text-gray-600 mb-8">Subscribe to our newsletter to get notified about new episodes</p>
            <form className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 