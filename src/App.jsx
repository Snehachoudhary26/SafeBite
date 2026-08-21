import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroReferenceMaster from './components/HeroReferenceMaster';
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
    <div className="min-h-screen flex flex-col bg-[#070e1c] text-white">
      
      {/* Top Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenGrievance={() => setIsGrievanceOpen(true)}
        onOpenAuth={() => setIsAuthOpen(true)}
      />

      {/* Main Reference Page */}
      {activeTab === 'home' && (
        <>
          <HeroReferenceMaster setActiveTab={setActiveTab} />
          <StatsBanner />
          <SolutionsSection setActiveTab={setActiveTab} />
        </>
      )}

      {/* Sub-Workspaces */}
      <main className="flex-1 max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        {activeTab === 'vision' && <VisionToxinStudio />}
        {activeTab === 'streaming' && <StreamingPipeline />}
        {activeTab === 'agents' && <AgentConsole onGenerateNotice={() => setIsGrievanceOpen(true)} />}
        {activeTab === 'xai' && <XAIInspector />}
        {activeTab === 'dart' && <DartLab />}
        {activeTab === 'directory' && <VendorDirectory onOpenGrievance={() => setIsGrievanceOpen(true)} />}
      </main>

      <Footer setActiveTab={setActiveTab} />

      <GrievanceModal
        isOpen={isGrievanceOpen}
        onClose={() => setIsGrievanceOpen(false)}
      />

      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
      />

    </div>
  );
}
