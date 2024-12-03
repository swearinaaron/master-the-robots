import React, { useEffect, useState } from 'react';

interface Resource {
  id: number;
  title: string;
  description: string;
  type: string;
  url: string;
}

export function ResourcesPage() {
  const [resources, setResources] = useState<Resource[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/resources')
      .then(response => response.json())
      .then(data => setResources(data))
      .catch(error => console.error('Error fetching resources:', error));
  }, []);

  return (
    // Your existing JSX, but using resources from state
    <div>
      {resources.map(resource => (
        <div key={resource.id}>
          <h2>{resource.title}</h2>
          <p>{resource.description}</p>
          <a href={resource.url}>Learn More</a>
        </div>
      ))}
    </div>
  );
} 