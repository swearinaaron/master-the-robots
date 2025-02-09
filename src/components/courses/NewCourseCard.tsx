import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { API_ENDPOINTS } from '../../config/api';
import { EditableText } from '../common/EditableText';

interface NewCourseCardProps {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  price: string;
  udemy_url: string;
  onDelete: () => void;
}

export function NewCourseCard({
  id,
  title,
  description,
  imageUrl,
  price = "$99",
  udemy_url = "#",
  onDelete,
}: NewCourseCardProps) {
  const [localTitle, setLocalTitle] = useState(title);
  const [localDescription, setLocalDescription] = useState(description);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);

  const handleSaveText = async (field: string, value: string) => {
    try {
      const response = await fetch(`${API_ENDPOINTS.courses}/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ [field]: value }),
      });

      if (!response.ok) {
        throw new Error('Failed to update course');
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

    setUploadError(null);
    setIsUploading(true);

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
      const response = await fetch(`${API_ENDPOINTS.courses}/${id}/image`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to upload image');
      }

      const imgElement = document.querySelector(`#course-image-${id}`) as HTMLImageElement;
      if (imgElement) {
        imgElement.src = `${API_ENDPOINTS.base}${imageUrl}?t=${Date.now()}`;
      }
    } catch (error: any) {
      console.error('Error uploading image:', error);
      setUploadError(error.message || 'Failed to upload image');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 flex flex-col justify-between h-full">
      <div className="relative aspect-video bg-gray-100">
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
        {uploadError && (
          <div className="absolute top-12 right-2 bg-red-100 text-red-600 p-2 rounded text-sm">
            {uploadError}
          </div>
        )}
        <img
          id={`course-image-${id}`}
          src={`${API_ENDPOINTS.base}${imageUrl}`}
          alt={title}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="p-4 flex-grow">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          <EditableText
            text={localTitle}
            onSave={(value) => handleSaveText('title', value)}
          />
        </h3>
        <p className="text-gray-600 mb-4">
          <EditableText
            text={localDescription}
            onSave={(value) => handleSaveText('description', value)}
            type="textarea"
          />
        </p>
      </div>
      <div className="flex items-center justify-between p-4 border-t">
        <span className="text-xl font-bold text-gray-900">{price}</span>
        <a
          href={udemy_url}
          className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
        >
          Learn More
          <ArrowRight className="ml-2 w-5 h-5 text-white" />
        </a>
      </div>
      <div className="flex items-center justify-between p-4 border-t">
        <button
          onClick={onDelete}
          className="ml-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
        >
          Delete
        </button>
      </div>
    </div>
  );
} 