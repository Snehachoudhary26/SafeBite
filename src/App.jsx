import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './components/ThemeContext';
import Navbar from './components/Navbar';
import HeroMasterpiece from './components/HeroMasterpiece';
import StatsBanner from './components/StatsBanner';
import SolutionsSection from './components/SolutionsSection';
import AgentConsole from './components/AgentConsole';
import StreamingPipeline from './components/StreamingPipeline';
import VisionToxinStudio from './components/VisionToxinStudio';
import XAIInspector from './components/XAIInspector';
import DartLab from './components/DartLab';
import VendorDirectory from './components/VendorDirectory';
import GrievanceModal from './components/GrievanceModal';
import AuthModal from './components/AuthModal';
import Footer from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isGrievanceOpen, setIsGrievanceOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('safebite_user');
    if (savedUser) {
      try {
        setCurrentUser(JSON.parse(savedUser));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('safebite_user');
    localStorage.removeItem('safebite_token');
    setCurrentUser(null);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col master-light-bg dark:master-dark-bg text-slate-900 dark:text-white transition-colors duration-200">
        
        {/* Exact Masterpiece Header matching Image 1 */}
        <Navbar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          onOpenGrievance={() => setIsGrievanceOpen(true)}
          onOpenAuth={() => setIsAuthOpen(true)}
          user={currentUser}
          onLogout={handleLogout}
        />

        {/* Masterpiece Home Hero & Floating Stats matching Image 1 */}
        {activeTab === 'home' && (
          <>
            <HeroMasterpiece setActiveTab={setActiveTab} />
            <StatsBanner />
            <SolutionsSection setActiveTab={setActiveTab} />
          </>
        )}

        {/* Interactive Sub-Modules */}
        <main className="flex-1 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
          {activeTab === 'vision' && (
            <VisionToxinStudio />
          )}

          {activeTab === 'streaming' && (
            <StreamingPipeline />
          )}

          {activeTab === 'agents' && (
            <AgentConsole onGenerateNotice={() => setIsGrievanceOpen(true)} />
          )}

          {activeTab === 'xai' && (
            <XAIInspector />
          )}

          {activeTab === 'dart' && (
            <DartLab />
          )}

          {activeTab === 'directory' && (
            <VendorDirectory onOpenGrievance={() => setIsGrievanceOpen(true)} />
          )}
        </main>

        <Footer setActiveTab={setActiveTab} />

        <GrievanceModal
          isOpen={isGrievanceOpen}
          onClose={() => setIsGrievanceOpen(false)}
        />

        <AuthModal
          isOpen={isAuthOpen}
          onClose={() => setIsAuthOpen(false)}
          onAuthSuccess={(user) => setCurrentUser(user)}
        />

      </div>
    </ThemeProvider>
  );
}
