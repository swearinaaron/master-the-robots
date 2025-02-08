import React, { useEffect, useState } from 'react';
import { CourseCard } from './CourseCard';
import { GraduationCap, Users, Trophy, Brain } from 'lucide-react';
import { API_ENDPOINTS } from '../../config/api';

// Type for our course data
interface Course {
  id: number;
  title: string;
  description: string;
  image_url: string;
  difficulty_level: string;
  created_at: string;
  price: string;
  rating: string;
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

export function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  // Add refresh function
  const refreshCourses = () => {
    setRefreshTrigger(prev => prev + 1);
  };

  useEffect(() => {
    console.log('Fetching courses from:', API_ENDPOINTS.courses);
    
    // Fetch courses from our API
    fetch(API_ENDPOINTS.courses, {
      headers: {
        'Accept': 'application/json'
      }
    })
      .then(response => {
        console.log('Response:', {
          status: response.status,
          statusText: response.statusText,
          headers: Object.fromEntries(response.headers.entries())
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Received courses:', data);
        setCourses(data);
      })
      .catch(error => {
        console.error('Error fetching courses:', {
          message: error.message,
          error: error,
          endpoint: API_ENDPOINTS.courses
        });
      });
  }, [refreshTrigger]); // Add refreshTrigger to dependencies

  return (
    <div className="min-h-screen bg-gray-900 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-white mb-8">Available Courses</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard 
              key={course.id}
              id={course.id}
              title={course.title}
              description={course.description}
              imageUrl={course.image_url}
              difficulty_level={course.difficulty_level}
              price={course.price}
              rating={parseFloat(course.rating)}
              studentsCount={course.students_count}
              udemy_url={course.udemy_url}
              onImageUpdate={refreshCourses}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 