import React from 'react';
import { FileText, Link as LinkIcon, Download, Book, Youtube, Twitter } from 'lucide-react';

interface Resource {
  title: string;
  description: string;
  type: 'pdf' | 'link' | 'video' | 'social';
  url: string;
  icon: any;
  category: string;
}

const resources: Resource[] = [
  {
    title: "Beginner's Guide to AI",
    description: "A comprehensive PDF guide covering the basics of artificial intelligence and machine learning.",
    type: 'pdf',
    url: "#",
    icon: FileText,
    category: "Guides"
  },
  {
    title: "Robotics Programming Cheatsheet",
    description: "Quick reference guide for common robotics programming patterns and solutions.",
    type: 'pdf',
    url: "#",
    icon: FileText,
    category: "Guides"
  },
  {
    title: "ROS Documentation",
    description: "Official Robot Operating System (ROS) documentation and tutorials.",
    type: 'link',
    url: "https://www.ros.org/",
    icon: LinkIcon,
    category: "External Resources"
  },
  {
    title: "AI Ethics Guidelines",
    description: "Important considerations and guidelines for ethical AI development.",
    type: 'pdf',
    url: "#",
    icon: Book,
    category: "Guides"
  },
  {
    title: "YouTube Channel",
    description: "Subscribe to our channel for video tutorials and live coding sessions.",
    type: 'video',
    url: "#",
    icon: Youtube,
    category: "Social Media"
  },
  {
    title: "Twitter Updates",
    description: "Follow us for daily tips, news, and updates about AI and robotics.",
    type: 'social',
    url: "#",
    icon: Twitter,
    category: "Social Media"
  }
];

const categories = Array.from(new Set(resources.map(r => r.category)));

export function ResourcesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Resources</h1>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Free tools, guides, and resources to help you master AI and robotics
            </p>
          </div>
        </div>
      </div>

      {/* Resources Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {categories.map((category) => (
          <div key={category} className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">{category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resources
                .filter(resource => resource.category === category)
                .map((resource, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <resource.icon className="w-6 h-6 text-purple-600 mr-3" />
                        <h3 className="text-xl font-semibold text-gray-900">{resource.title}</h3>
                      </div>
                      <p className="text-gray-600 mb-4">{resource.description}</p>
                      <a
                        href={resource.url}
                        className="inline-flex items-center text-purple-600 hover:text-purple-700"
                      >
                        {resource.type === 'pdf' ? (
                          <>
                            <Download className="w-4 h-4 mr-2" />
                            Download PDF
                          </>
                        ) : resource.type === 'link' ? (
                          <>
                            <LinkIcon className="w-4 h-4 mr-2" />
                            Visit Website
                          </>
                        ) : (
                          <>
                            <LinkIcon className="w-4 h-4 mr-2" />
                            Visit Page
                          </>
                        )}
                      </a>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>

      {/* Newsletter Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
            <p className="text-gray-600 mb-8">Subscribe to get notified about new resources and updates</p>
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