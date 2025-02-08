import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

interface EditableTextProps {
  text: string;
  onSave: (newText: string) => Promise<void>;
  type?: 'text' | 'textarea';
}

export function EditableText({ text, onSave, type = 'text' }: EditableTextProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <span>{text}</span>;
  }

  const handleSave = async () => {
    try {
      await onSave(editedText);
      setIsEditing(false);
    } catch (error) {
      console.error('Error saving text:', error);
    }
  };

  if (!isEditing) {
    return (
      <span 
        className="cursor-pointer hover:bg-gray-100 p-1 rounded"
        onClick={() => setIsEditing(true)}
      >
        {text}
      </span>
    );
  }

  return type === 'text' ? (
    <input
      type="text"
      value={editedText}
      onChange={(e) => setEditedText(e.target.value)}
      onBlur={handleSave}
      className="border rounded p-1 w-full"
      autoFocus
    />
  ) : (
    <textarea
      value={editedText}
      onChange={(e) => setEditedText(e.target.value)}
      onBlur={handleSave}
      className="border rounded p-1 w-full"
      autoFocus
    />
  );
} 