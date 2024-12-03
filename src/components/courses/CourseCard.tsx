import React, { useState } from 'react';
import { ArrowRight, Star } from 'lucide-react';

interface CourseCardProps {
  title: string;
  description: string;
  imageUrl: string;
  difficulty_level: string;
  price?: string;
  rating?: number;
  studentsCount?: number;
  udemy_url?: string;
}

export function CourseCard({
  title,
  description,
  imageUrl,
  difficulty_level,
  price = "$99.99",
  rating = 4.8,
  studentsCount = 1000,
  udemy_url = "#"
}: CourseCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
      <div className="relative aspect-video bg-gray-100">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        <div className="flex items-center mb-4">
          <div className="flex items-center text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < Math.floor(rating) ? 'fill-current' : 'stroke-current'}`}
              />
            ))}
          </div>
          <span className="ml-2 text-gray-600">{rating}</span>
          <span className="mx-2 text-gray-400">•</span>
          <span className="text-gray-600">{studentsCount.toLocaleString()} students</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900">{price}</span>
          <a
            href={udemy_url}
            className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            Enroll Now
            <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
} 