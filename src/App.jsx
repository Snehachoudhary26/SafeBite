import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './components/ThemeContext';
import Navbar from './components/Navbar';
import HeroExact from './components/HeroExact';
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

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-darkBg-950 text-slate-900 dark:text-slate-100 transition-colors">
        
        {/* Navbar Matching Reference */}
        <Navbar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          onOpenGrievance={() => setIsGrievanceOpen(true)}
          onOpenAuth={() => setIsAuthOpen(true)}
        />

        {/* Home Page Content */}
        {activeTab === 'home' && (
          <>
            <HeroExact setActiveTab={setActiveTab} />
            <StatsBanner />
            <SolutionsSection setActiveTab={setActiveTab} />
          </>
        )}

        {/* Interactive Sub-Modules */}
        <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
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

        {/* Footer */}
        <Footer setActiveTab={setActiveTab} />

        {/* Grievance Modal */}
        <GrievanceModal
          isOpen={isGrievanceOpen}
          onClose={() => setIsGrievanceOpen(false)}
        />

        {/* Auth Modal */}
        <AuthModal
          isOpen={isAuthOpen}
          onClose={() => setIsAuthOpen(false)}
          onAuthSuccess={() => setIsAuthOpen(false)}
        />

      </div>
    </ThemeProvider>
  );
}
