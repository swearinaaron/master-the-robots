import React, { useEffect, useState } from 'react';

interface Podcast {
  id: number;
  title: string;
  description: string;
  audio_url: string;
  duration: number;
  published_at: string;
}

export function PodcastPage() {
  const [podcasts, setPodcasts] = useState<Podcast[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/podcasts')
      .then(response => response.json())
      .then(data => setPodcasts(data))
      .catch(error => console.error('Error fetching podcasts:', error));
  }, []);

  return (
    <div>
      {podcasts.map(podcast => (
        <div key={podcast.id}>
          <h2>{podcast.title}</h2>
          <p>{podcast.description}</p>
          <audio src={podcast.audio_url} controls />
        </div>
      ))}
    </div>
  );
} 