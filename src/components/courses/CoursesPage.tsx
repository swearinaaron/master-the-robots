import React from 'react';
import { CourseCard } from './CourseCard';
import { GraduationCap, Users, Trophy, Brain } from 'lucide-react';

const courses = [
  {
    title: "Laying the Foundations of AI Mastery",
    description: "Start your AI journey with fundamental concepts, principles, and practical applications. Perfect for beginners looking to understand the basics of artificial intelligence.",
    imageUrl: "/img/course1.png",
    price: "$79.99",
    rating: 4.8,
    studentsCount: 1250,
    udemy_url: "#"
  },
  {
    title: "AI in Action: Practical Tools and Applications",
    description: "Dive into hands-on AI development using popular tools and frameworks. Learn to implement AI solutions in real-world scenarios.",
    imageUrl: "/img/course2.png",
    price: "$89.99",
    rating: 4.9,
    studentsCount: 980,
    udemy_url: "#"
  },
  {
    title: "Building AI Mastery",
    description: "Advanced techniques and methodologies for building sophisticated AI systems. Perfect for those ready to take their AI skills to the next level.",
    imageUrl: "/img/course3.png",
    price: "$99.99",
    rating: 4.7,
    studentsCount: 750,
    udemy_url: "#"
  },
  {
    title: "AI Leadership and Strategy: Navigating the Future",
    description: "Learn to lead AI initiatives and develop strategic frameworks for AI implementation in business contexts.",
    imageUrl: "/img/course4.png",
    price: "$109.99",
    rating: 4.9,
    studentsCount: 620,
    udemy_url: "#"
  }
];

const features = [
  {
    icon: GraduationCap,
    title: "Expert-Led Training",
    description: "Learn from industry professionals with years of practical experience"
  },
  {
    icon: Users,
    title: "Active Community",
    description: "Join a vibrant community of AI enthusiasts and practitioners"
  },
  {
    icon: Trophy,
    title: "Project-Based Learning",
    description: "Apply your knowledge through hands-on projects and exercises"
  },
  {
    icon: Brain,
    title: "Comprehensive Curriculum",
    description: "Structured learning path from fundamentals to advanced concepts"
  }
];

export function CoursesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Master AI with Our Premium Courses</h1>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Transform your career with comprehensive AI training designed for all skill levels
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center">
                  <feature.icon className="h-12 w-12 text-purple-600" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Available Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your AI Journey?</h2>
          <p className="text-xl text-purple-100 mb-8">
            Join thousands of students who are already mastering AI with our courses
          </p>
          <a
            href="#browse-courses"
            className="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
          >
            Browse All Courses
          </a>
        </div>
      </div>
    </div>
  );
} 