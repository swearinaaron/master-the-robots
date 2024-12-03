import React from 'react';
import { ArrowRight, BookOpen, Users, Star, CheckCircle, Code, Brain } from 'lucide-react';

const features = [
  {
    title: 'Interactive Learning',
    description: 'Learn by doing with hands-on projects and real-world applications',
    icon: Code,
  },
  {
    title: 'Expert Guidance',
    description: 'Get support from experienced AI and robotics professionals',
    icon: Brain,
  },
  {
    title: 'Structured Path',
    description: 'Follow a clear learning path from basics to advanced concepts',
    icon: CheckCircle,
  },
];

const courses = [
  {
    title: 'AI Fundamentals',
    description: 'Start your journey into artificial intelligence',
    level: 'Beginner',
    duration: '6 weeks',
    enrolled: '2.5k students',
  },
  {
    title: 'Robotics Programming',
    description: 'Learn to program and control robots',
    level: 'Intermediate',
    duration: '8 weeks',
    enrolled: '1.8k students',
  },
  {
    title: 'Machine Learning',
    description: 'Master machine learning algorithms',
    level: 'Advanced',
    duration: '10 weeks',
    enrolled: '1.2k students',
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img
                src="https://api.dicebear.com/7.x/bottts/svg?seed=logo&backgroundColor=white"
                alt="Logo"
                className="h-8 w-8"
              />
              <span className="ml-2 text-xl font-semibold">Master the Robots</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#courses" className="text-gray-600 hover:text-gray-900">Courses</a>
              <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Master AI & Robotics
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Learn the skills of tomorrow with our comprehensive courses in artificial intelligence and robotics.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
              Browse Courses
            </button>
            <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <feature.icon className="h-12 w-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Courses</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div key={index} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gray-100 flex items-center justify-center">
                  <img
                    src={`https://api.dicebear.com/7.x/bottts/svg?seed=${course.title}&backgroundColor=white`}
                    alt={course.title}
                    className="h-24 w-24"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{course.level}</span>
                    <span>{course.duration}</span>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                    <span className="text-sm text-gray-500">{course.enrolled}</span>
                    <button className="text-indigo-600 hover:text-indigo-700 font-medium">
                      Learn More →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-indigo-100 mb-8 text-lg">
            Join thousands of students already learning AI and robotics with our expert-led courses.
          </p>
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg hover:bg-indigo-50 transition-colors font-medium">
            Get Started Today
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img
                  src="https://api.dicebear.com/7.x/bottts/svg?seed=logo&backgroundColor=white"
                  alt="Logo"
                  className="h-8 w-8"
                />
                <span className="ml-2 text-xl font-semibold">Master the Robots</span>
              </div>
              <p className="text-gray-600">
                Empowering the next generation of AI and robotics engineers.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Courses</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-gray-900">AI Fundamentals</a></li>
                <li><a href="#" className="hover:text-gray-900">Robotics</a></li>
                <li><a href="#" className="hover:text-gray-900">Machine Learning</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-gray-900">About Us</a></li>
                <li><a href="#" className="hover:text-gray-900">Careers</a></li>
                <li><a href="#" className="hover:text-gray-900">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Privacy</a></li>
                <li><a href="#" className="hover:text-gray-900">Terms</a></li>
                <li><a href="#" className="hover:text-gray-900">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-600">
            <p>© 2024 Master the Robots. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 