import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
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
import { HeroScene } from './components/home/HeroScene';
import { VideoIntro } from './components/home/VideoIntro';
import { SignupSection } from './components/home/SignupSection';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isDeveloperMode, setIsDeveloperMode] = useState(false);

  useEffect(() => {
    const path = window.location.pathname;
    setCurrentPage(path === '/' ? 'home' : path.slice(1));
  }, []);

  return (
    <Router
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true
      }}
    >
      <DeveloperModeProvider isDeveloperMode={isDeveloperMode}>
        <AuthProvider>
          <div className="min-h-screen bg-gray-900">
            <Header />
            <Routes>
              <Route path="/" element={
                <>
                  <HeroScene />
                  <VideoIntro />
                  <SignupSection />
                  <div className="py-16">
                    <Features />
                  </div>
                </>
              } />
              <Route path="/courses" element={<CoursesPage />} />
              <Route path="/podcast" element={<PodcastPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/resources" element={<ResourcesPage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
            <SocialLinks />
          </div>
        </AuthProvider>
      </DeveloperModeProvider>
    </Router>
  );
}

export default App;