import React, { useEffect, useState } from 'react';
import { CourseCard } from './CourseCard';
import { GraduationCap, Users, Trophy, Brain } from 'lucide-react';

// Type for our course data
interface Course {
  id: number;
  title: string;
  description: string;
  image_url: string;
  difficulty_level: string;
  price: string;
  rating: number;
  students_count: number;
  udemy_url: string;
}

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

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    // Fetch courses from our API
    fetch(`${API_URL}/api/courses`)
      .then(response => response.json())
      .then(data => setCourses(data))
      .catch(error => console.error('Error fetching courses:', error));
  }, []);

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
          {courses.map((course) => (
            <CourseCard 
              key={course.id}
              title={course.title}
              description={course.description}
              imageUrl={course.image_url}
              difficulty_level={course.difficulty_level}
              price={course.price}
              rating={course.rating}
              studentsCount={course.students_count}
              udemy_url={course.udemy_url}
            />
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