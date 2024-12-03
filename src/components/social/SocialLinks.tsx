import React from 'react';
import { Twitter, Linkedin, Facebook, Youtube, Github, Music } from 'lucide-react';

const socialLinks = [
  { name: 'Twitter', icon: Twitter, url: '#' },
  { name: 'LinkedIn', icon: Linkedin, url: '#' },
  { name: 'Facebook', icon: Facebook, url: '#' },
  { name: 'YouTube', icon: Youtube, url: '#' },
  { name: 'GitHub', icon: Github, url: '#' },
  { name: 'TikTok', icon: Music, url: '#' },
];

export function SocialLinks() {
  return (
    <div className="bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-6">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              className="text-gray-400 hover:text-purple-500 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">{social.name}</span>
              <social.icon className="h-6 w-6" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}