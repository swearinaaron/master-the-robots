import React, { useState } from 'react';
import { Star, ArrowRight } from 'lucide-react';
import { EditableText } from '../common/EditableText';
import { API_ENDPOINTS } from '../../config/api';
import { useAuth } from '../../context/AuthContext';

interface CourseCardProps {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  difficulty_level: string;
  price?: string;
  rating?: number;
  studentsCount?: number;
  udemy_url?: string;
  onImageUpdate?: () => void;
}

export function CourseCard({
  id,
  title,
  description,
  imageUrl,
  difficulty_level,
  price = "$99.99",
  rating = 4.8,
  studentsCount = 1000,
  udemy_url = "#",
  onImageUpdate
}: CourseCardProps) {
  const { isAuthenticated } = useAuth();
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [localTitle, setLocalTitle] = useState(title);
  const [localDescription, setLocalDescription] = useState(description);

  const handleSaveText = async (field: string, value: string) => {
    try {
      const response = await fetch(`${API_ENDPOINTS.courses}/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ [field]: value }),
      });

      console.log('Sending PATCH request to:', `${API_ENDPOINTS.courses}/${id}`);
      console.log('Request body:', { [field]: value });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Failed to update course:', {
          status: response.status,
          statusText: response.statusText,
          errorData
        });
        throw new Error('Failed to update course');
      } else {
        console.log('Course updated successfully:', {
          status: response.status,
          statusText: response.statusText
        });
      }

      if (field === 'title') {
        setLocalTitle(value);
      } else if (field === 'description') {
        setLocalDescription(value);
      }
    } catch (error) {
      console.error('Error updating course:', error);
    }
  };

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!id) {
      setUploadError('Course ID is missing');
      return;
    }

    setUploadError(null);
    setIsUploading(true);

    console.log('Uploading image for course ID:', id);

    if (file.size > 5 * 1024 * 1024) {
      setUploadError('File size must be less than 5MB');
      setIsUploading(false);
      return;
    }

    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
    if (!allowedTypes.includes(file.type)) {
      setUploadError('Only JPG, PNG and GIF files are allowed');
      setIsUploading(false);
      return;
    }

    const formData = new FormData();
    formData.append('image', file);

    try {
      console.log('Uploading image for course:', id);
      const response = await fetch(`${API_ENDPOINTS.courses}/${id}/image`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to upload image');
      }

      const imgElement = document.querySelector(`#course-image-${id}`) as HTMLImageElement;
      if (imgElement) {
        imgElement.src = `${API_ENDPOINTS.base}${imageUrl}?t=${Date.now()}`;
      }

      onImageUpdate?.();
    } catch (error: any) {
      console.error('Error uploading image:', error);
      setUploadError(error.message || 'Failed to upload image');
    } finally {
      setIsUploading(false);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`${API_ENDPOINTS.courses}/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete course');
      }

      console.log('Course deleted successfully');
      onImageUpdate?.(); // Refresh the course list
    } catch (error) {
      console.error('Error deleting course:', error);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 h-[28rem] flex flex-col justify-between">
      <div className="relative aspect-video bg-gray-100">
        {isAuthenticated && (
          <label className={`absolute top-2 right-2 bg-white rounded-lg px-3 py-1 cursor-pointer 
            ${isUploading ? 'opacity-50 cursor-not-allowed' : ''}`}>
            {isUploading ? 'Uploading...' : 'Change Image'}
            <input
              type="file"
              className="hidden"
              accept="image/jpeg,image/png,image/gif"
              onChange={handleImageUpload}
              disabled={isUploading}
            />
          </label>
        )}
        {uploadError && (
          <div className="absolute top-12 right-2 bg-red-100 text-red-600 p-2 rounded text-sm">
            {uploadError}
          </div>
        )}
        <img
          id={`course-image-${id}`}
          src={`${API_ENDPOINTS.base}${imageUrl}`}
          alt={title}
          onError={(e) => {
            const img = e.target as HTMLImageElement;
            console.error('Image failed to load:', img.src);
          }}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight text-left">
          <EditableText
            text={localTitle}
            onSave={(value) => handleSaveText('title', value)}
          />
        </h3>
        <div className="text-gray-600 mb-4 leading-tight text-left">
          <EditableText
            text={localDescription}
            onSave={(value) => handleSaveText('description', value)}
            type="textarea"
          />
        </div>
      </div>
      <div className="flex items-center justify-between p-6">
        <span className="text-2xl font-bold text-gray-900">$99</span>
        <a
          href={udemy_url}
          className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
        >
          Learn More
          <ArrowRight className="ml-2 w-5 h-5 text-[#34cddc]" />
        </a>
        {isAuthenticated && (
          <button
            onClick={handleDelete}
            className="ml-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
} 