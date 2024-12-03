import React, { useState, useEffect } from 'react';
import { Header } from './components/layout/Header';
import { Hero } from './components/home/Hero';
import { Features } from './components/home/Features';
import { SocialLinks } from './components/social/SocialLinks';
import { CoursesPage } from './components/courses/CoursesPage';
import { PodcastPage } from './components/podcast/PodcastPage';
import { ResourcesPage } from './components/resources/ResourcesPage';
import { AboutPage } from './components/about/AboutPage';
import { ContactPage } from './components/contact/ContactPage';
import { BlogPage } from './components/blog/BlogPage';
import { ProfilePage } from './components/profile/ProfilePage';
import { ProtectedRoute } from './components/auth/ProtectedRoute';
import { DeveloperModeProvider } from './context/DeveloperMode';
import { AuthProvider } from './context/AuthContext';

function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const isDeveloperMode = new URLSearchParams(window.location.search).get('dev') === 'true';

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || 'home';
      setCurrentPage(hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Handle initial hash

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <AuthProvider>
      <DeveloperModeProvider isDeveloperMode={isDeveloperMode}>
        <div className="min-h-screen bg-gray-900">
          <Header />
          {currentPage === 'home' && (
            <>
              <Hero />
              <Features />
            </>
          )}
          {currentPage === 'courses' && (
            <ProtectedRoute>
              <CoursesPage />
            </ProtectedRoute>
          )}
          {currentPage === 'profile' && <ProfilePage />}
          {currentPage === 'podcast' && <PodcastPage />}
          {currentPage === 'blog' && <BlogPage />}
          {currentPage === 'resources' && <ResourcesPage />}
          {currentPage === 'about' && <AboutPage />}
          {currentPage === 'contact' && <ContactPage />}
          <SocialLinks />
        </div>
      </DeveloperModeProvider>
    </AuthProvider>
  );
}

export default App;