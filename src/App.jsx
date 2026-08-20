import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './components/ThemeContext';
import Navbar from './components/Navbar';
import SplitHeroBanner from './components/SplitHeroBanner';
import HighlightsGrid from './components/HighlightsGrid';
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
  const [activeTab, setActiveTab] = useState('agents');
  const [isGrievanceOpen, setIsGrievanceOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [selectedCaseForNotice, setSelectedCaseForNotice] = useState(null);
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

  const handleOpenGrievance = (caseData = null) => {
    setSelectedCaseForNotice(caseData);
    setIsGrievanceOpen(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('safebite_user');
    localStorage.removeItem('safebite_token');
    setCurrentUser(null);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200">
        <Navbar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          onOpenGrievance={() => handleOpenGrievance(null)}
          user={currentUser}
          onOpenAuth={() => setIsAuthOpen(true)}
          onLogout={handleLogout}
        />

        <SplitHeroBanner
          setActiveTab={setActiveTab}
        />

        <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 w-full">
          {activeTab === 'agents' && (
            <AgentConsole onGenerateNotice={handleOpenGrievance} />
          )}

          {activeTab === 'streaming' && (
            <StreamingPipeline />
          )}

          {activeTab === 'vision' && (
            <VisionToxinStudio />
          )}

          {activeTab === 'xai' && (
            <XAIInspector />
          )}

          {activeTab === 'dart' && (
            <DartLab />
          )}

          {activeTab === 'directory' && (
            <VendorDirectory onOpenGrievance={() => handleOpenGrievance(null)} />
          )}
        </main>

        <HighlightsGrid setActiveTab={setActiveTab} />

        <Footer setActiveTab={setActiveTab} />

        <GrievanceModal
          isOpen={isGrievanceOpen}
          onClose={() => setIsGrievanceOpen(false)}
          prefilledCase={selectedCaseForNotice}
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
