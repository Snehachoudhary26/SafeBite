import React, { useState } from 'react';
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
import Footer from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState('agents');
  const [isGrievanceOpen, setIsGrievanceOpen] = useState(false);
  const [selectedCaseForNotice, setSelectedCaseForNotice] = useState(null);

  const handleOpenGrievance = (caseData = null) => {
    setSelectedCaseForNotice(caseData);
    setIsGrievanceOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slateDark-950 text-slate-100 selection:bg-cobalt-600 selection:text-white">
      {/* Top Enterprise Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenGrievance={() => handleOpenGrievance(null)}
      />

      {/* Animated Split-Hero Banner with DSLR Photography */}
      <SplitHeroBanner
        setActiveTab={setActiveTab}
        onOpenGrievance={() => handleOpenGrievance(null)}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 w-full">
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

      {/* Capgemini-Inspired Editorial Highlights Grid */}
      <HighlightsGrid setActiveTab={setActiveTab} />

      {/* Enterprise Footer */}
      <Footer setActiveTab={setActiveTab} />

      {/* FSSAI Statutory Grievance Dispatcher Modal */}
      <GrievanceModal
        isOpen={isGrievanceOpen}
        onClose={() => setIsGrievanceOpen(false)}
        prefilledCase={selectedCaseForNotice}
      />
    </div>
  );
}
