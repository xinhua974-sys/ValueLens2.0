import React, { useState } from 'react';
import { Sparkles, Brain, ArrowLeft, RefreshCw, Check, CheckSquare, Wand2, ArrowRight, Loader2, ChevronLeft, ChevronRight, FileText, Send, Palette } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

interface Props {
  topic: string;
  targetAudience: string;
  strategy: string;
  onNext: () => void;
  onBack: () => void;
  key?: React.Key;
}

const targetData = [
  { subject: 'Self-Direction', value: 90 },
  { subject: 'Stimulation', value: 40 },
  { subject: 'Hedonism', value: 20 },
  { subject: 'Achievement', value: 85 },
  { subject: 'Power', value: 30 },
  { subject: 'Security', value: 35 },
  { subject: 'Conformity', value: 25 },
  { subject: 'Tradition', value: 15 },
  { subject: 'Benevolence', value: 80 },
  { subject: 'Universalism', value: 95 },
];

export default function Stage3Results({ topic, targetAudience, strategy, onNext, onBack }: Props) {
  const [showPreviousInputs, setShowPreviousInputs] = useState(true);
  const [showLeftPanel, setShowLeftPanel] = useState(true);
  const [confirmedKeywords, setConfirmedKeywords] = useState<string[]>([
    "Pluralistic", "Synergetic", "Permeable", "Resonant"
  ]);
  const [isKeywordsModified, setIsKeywordsModified] = useState(false);
  const [isPromptsModified, setIsPromptsModified] = useState(false);

  const [prompts, setPrompts] = useState<string[]>([
    'Cinematic 3D representation focusing on "Pluralistic diversity". Intertwining translucent glowing nodes reflecting multifaceted views, rich amber and gold gradients with high-contrast velvet depth, 8k.',
    'Organic structure representing "Synergetic collaboration". Radiant glass pipelines merging seamlessly, glowing energy flow of electric blues and teals, beautifully-detailed Octane render, photorealistic.',
    'Structural visual metaphor for "Permeable boundaries". Floating crystal grids allowing streams of light particles to pass through effortlessly, Unreal Engine 5 aesthetic with ambient light refraction.',
    'Hyper-fluid synthetic environment demonstrating "Resonant growth". Interconnected organic threads vibrating in perfect harmonic patterns, warm studio lighting with high-fidelity geometric details.'
  ]);

  const [generatedDrafts, setGeneratedDrafts] = useState<any[]>([
    {
      id: 'A',
      title: 'Structural Trust',
      img: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=1000',
      style: 'tech_v1.png',
      desc: 'Geometric symmetry creates a foundation of trust, but may lack the pluralistic energy required.'
    },
    {
      id: 'B',
      title: 'Open Flow',
      img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000',
      style: 'abstract_node.jpg',
      desc: 'Abstract curves signal a more open, future-oriented approach with high synergy potential.'
    },
    {
      id: 'C',
      title: 'Collaboration',
      img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000',
      style: 'global_network.jpg',
      desc: "Complex networking visualization perfectly captures the 'New Collaborative Synergy'."
    },
    {
      id: 'D',
      title: 'Tactile Diversity',
      img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000',
      style: 'silicon_edge.jpg',
      desc: 'Macro details signal the diverse material reality and pluralistic nature of tech implementation.'
    }
  ]);
  
  const [isGeneratingPrompts, setIsGeneratingPrompts] = useState(false);
  const [isGeneratingDrafts, setIsGeneratingDrafts] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingStatus, setLoadingStatus] = useState('');
  
  const [showPromptsSection, setShowPromptsSection] = useState(false);
  const [showDraftsSection, setShowDraftsSection] = useState(false);

  const toggleKeyword = (word: string) => {
    let newKeywords;
    if (confirmedKeywords.includes(word)) {
      newKeywords = confirmedKeywords.filter(w => w !== word);
    } else {
      newKeywords = [...confirmedKeywords, word];
    }
    setConfirmedKeywords(newKeywords);
    setIsKeywordsModified(true);
  };

  const handleGeneratePrompts = () => {
    setIsGeneratingPrompts(true);
    setTimeout(() => {
      const generated = [
        `Cinematic 3D representation focusing on "${confirmedKeywords[0] || 'Pluralistic'} diversity". Intertwining translucent glowing nodes reflecting multifaceted views, rich amber and gold gradients with high-contrast velvet depth, 8k.`,
        `Organic structure representing "${confirmedKeywords[1] || 'Synergetic'} collaboration". Radiant glass pipelines merging seamlessly, glowing energy flow of electric blues and teals, beautifully-detailed Octane render, photorealistic.`,
        `Structural visual metaphor for "${confirmedKeywords[2] || 'Permeable'} boundaries". Floating crystal grids allowing streams of light particles to pass through effortlessly, Unreal Engine 5 aesthetic with ambient light refraction.`,
        `Hyper-fluid synthetic environment demonstrating "${confirmedKeywords[3] || 'Resonant'} growth". Interconnected organic threads vibrating in perfect harmonic patterns, warm studio lighting with high-fidelity geometric details.`
      ];
      setPrompts(generated);
      setIsGeneratingPrompts(false);
      setIsKeywordsModified(false);
      setIsPromptsModified(true);
      setShowPromptsSection(true);
    }, 1000);
  };

  const handleGenerateDrafts = () => {
    setIsGeneratingDrafts(true);
    setLoadingProgress(0);
    setLoadingStatus('Analyzing semantic keywords...');
    
    const steps = [
      { p: 15, s: 'Analyzing semantic keywords...' },
      { p: 40, s: 'Synthesizing visual aesthetics...' },
      { p: 70, s: 'Calibrating synergetic color values...' },
      { p: 90, s: 'Rendering high-fidelity drafts...' },
      { p: 100, s: 'Finalizing draft artifacts...' },
    ];
    
    let currentIdx = 0;
    const interval = setInterval(() => {
      if (currentIdx < steps.length) {
        setLoadingProgress(steps[currentIdx].p);
        setLoadingStatus(steps[currentIdx].s);
        currentIdx++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          const drafts = [
            {
              id: 'A',
              title: 'Structural Trust',
              img: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=1000',
              style: 'tech_v1.png',
              desc: 'Geometric symmetry creates a foundation of trust, but may lack the pluralistic energy required.'
            },
            {
              id: 'B',
              title: 'Open Flow',
              img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000',
              style: 'abstract_node.jpg',
              desc: 'Abstract curves signal a more open, future-oriented approach with high synergy potential.'
            },
            {
              id: 'C',
              title: 'Collaboration',
              img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000',
              style: 'global_network.jpg',
              desc: "Complex networking visualization perfectly captures the 'New Collaborative Synergy'."
            },
            {
              id: 'D',
              title: 'Tactile Diversity',
              img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000',
              style: 'silicon_edge.jpg',
              desc: 'Macro details signal the diverse material reality and pluralistic nature of tech implementation.'
            }
          ];
          setGeneratedDrafts(drafts);
          setIsGeneratingDrafts(false);
          setIsPromptsModified(false);
          setShowDraftsSection(true);
        }, 300);
      }
    }, 250);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      className="max-w-7xl w-full flex flex-col items-center gap-8 py-8"
    >
      <header className="text-center space-y-3 flex flex-col items-center">
        <div className="inline-block px-4 py-1.5 bg-white rounded-full border border-primary/20 text-primary font-bold text-sm tracking-widest uppercase shadow-sm">
          Designer Workspace
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
          Inspiration <span className="text-primary italic">Generator</span>
        </h1>
        <p className="text-slate-500 text-lg font-medium max-w-2xl leading-relaxed">
          The system analyzes your input to generate aligned visual inspiration, value-oriented directions, and creative starting points.
        </p>
      </header>

      {/* Modern Compact Bento-style Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full max-w-7xl px-4 relative">
        
        {/* Left Column (Your Strategic Input & AI Interpretation - Unified solid panel) */}
        {showLeftPanel && (
          <motion.div 
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -25 }}
            className="lg:col-span-3 flex flex-col relative animate-fade-in"
          >
            <div className="p-2 flex-1 flex flex-col gap-6">
              {/* Strategic Input Header & Content */}
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <Brain className="text-primary w-5 h-5" />
                    <h3 className="text-sm font-black uppercase tracking-wider text-slate-800">Your Strategic Input</h3>
                  </div>
                </div>
                
                <div className="space-y-4 pt-1 text-sm font-sans">
                  <div className="space-y-1">
                    <span className="text-sm font-black uppercase text-slate-400 tracking-wider">TAB Topic</span>
                    <p className="text-sm font-bold text-slate-700 leading-snug">{topic}</p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-sm font-black uppercase text-slate-400 tracking-wider">Target Audience</span>
                    <p className="text-sm font-bold text-slate-700 leading-snug">{targetAudience}</p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-sm font-black uppercase text-slate-400 tracking-wider">Project Strategy</span>
                    <p className="text-sm font-bold text-slate-700 leading-snug">{strategy}</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-100 my-1" />

              {/* AI Interpretation Content */}
              <div className="space-y-4 flex-1 text-sm">
                <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                  <Sparkles className="text-primary w-5 h-5 fill-current" />
                  <h3 className="text-sm font-black uppercase tracking-wider text-slate-800">AI Interpretation</h3>
                </div>
                
                <div className="space-y-4 pt-1 font-sans">
                  {[
                    { title: "Cross-disciplinary innovation", desc: "Forging novel intersections between science, systemic design, and emerging human values." },
                    { title: "Long-term technological vision", desc: "Prioritizing stable, decadal technological advancement over transient near-term hype cycles." },
                    { title: "Human-centered intelligence", desc: "Ensuring complex computational networks are built to augment agency, wellbeing, and safety." },
                    { title: "Collaborative future systems", desc: "Nurturing open-source frameworks, pluralistic coordination, and resilient social infrastructures." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3 items-start group">
                      <div className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0 group-hover:scale-125 transition-transform" />
                      <div>
                        <h4 className="text-sm font-black text-slate-800 leading-snug">{item.title}</h4>
                        <p className="text-sm text-slate-500 leading-normal mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Collapse Arrow Button */}
            <button
              onClick={() => setShowLeftPanel(false)}
              className="absolute -right-4 top-1/2 -translate-y-1/2 z-30 w-8 h-8 bg-white hover:bg-slate-50 border border-slate-200/80 rounded-full flex items-center justify-center cursor-pointer shadow-md text-slate-500 hover:text-primary hover:border-primary/50 transition-all focus:outline-none group"
              title="Collapse Panel"
            >
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
            </button>
          </motion.div>
        )}

        {/* Right Column (Expanded/Contracted gracefully) */}
        <div className={`relative ${showLeftPanel ? 'lg:col-span-9' : 'lg:col-span-12'} space-y-6 transition-all duration-300`}>
          {!showLeftPanel && (
            <button
              onClick={() => setShowLeftPanel(true)}
              className="absolute -left-4 top-1/2 -translate-y-1/2 z-30 w-8 h-8 bg-white hover:bg-slate-50 border border-slate-200/80 rounded-full flex items-center justify-center cursor-pointer shadow-md text-slate-500 hover:text-primary hover:border-primary/50 transition-all focus:outline-none group"
              title="Expand Panel"
            >
              <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          )}

          {/* Unified Big Card: AI Strategic Overview */}
          <section className="bg-white p-6 md:p-8 rounded-[32px] shadow-xl shadow-slate-200/40 border border-slate-100/90 space-y-8 text-sm">
            <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100/80">
              <Sparkles className="text-primary w-5 h-5 fill-current" />
              <h2 className="text-lg font-black text-slate-800 tracking-tight">AI Strategic Overview</h2>
            </div>
            
            {/* Part 1: Strategic Interpretation */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Brain className="text-primary w-5 h-5" />
                <h3 className="text-sm font-black uppercase tracking-wider text-slate-850">Strategic Interpretation</h3>
              </div>
              <div className="text-sm text-slate-600 leading-relaxed font-sans space-y-2">
                <p>• The summit emphasizes long-term collaborative intelligence rather than short-term technological spectacle.</p>
                <p>• Visual language should prioritize openness, connection, and systemic trust over aggressive futurism.</p>
              </div>
            </div>

            <div className="border-t border-slate-100 my-4" />

            {/* Part 2: Schwartz Value Analysis */}
            <div className="space-y-4 text-sm">
              <div>
                <h3 className="text-sm font-black uppercase tracking-wider text-slate-800">Schwartz Value Analysis</h3>
                <p className="text-sm text-slate-400 font-medium tracking-normal mt-0.5 normal-case font-semibold">
                  AI-generated value orientation based on summit strategy
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                {/* Left side: Polar Chart */}
                <div className="md:col-span-6 h-64 w-full flex flex-col items-center justify-center p-4 bg-slate-50/50 rounded-2xl border border-slate-100 relative">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="75%" data={targetData}>
                      <PolarGrid stroke="#e2e8f0" strokeDasharray="3 3" />
                      <PolarAngleAxis 
                        dataKey="subject" 
                        tick={{ fill: '#475569', fontSize: 14, fontWeight: 900 }}
                      />
                      <Radar
                        name="Target Profile"
                        dataKey="value"
                        stroke="#000000"
                        strokeWidth={3}
                        strokeDasharray="5 5"
                        fill="transparent"
                        fillOpacity={0}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                  
                  {/* Legend style layout */}
                  <div className="absolute bottom-2 right-2 flex items-center gap-1.5 bg-white/95 px-2 py-0.5 rounded-lg border border-slate-100 shadow-xs">
                    <div className="w-4 h-0.5 border-t-2 border-dashed border-black"></div>
                    <span className="text-sm font-black uppercase tracking-widest text-slate-400">Target</span>
                  </div>
                </div>

                {/* Right side in grid: Highlight Dimensions */}
                <div className="md:col-span-6 space-y-3.5">
                  <span className="text-sm font-black uppercase text-slate-400 tracking-wider">High-Scoring Dimensions</span>
                  
                  <div className="grid grid-cols-1 gap-3">
                    {/* Universalism */}
                    <div className="bg-primary/[0.02] p-4 rounded-xl border border-primary/10 hover:bg-primary/[0.04] transition-all relative overflow-hidden">
                      <div className="absolute -top-1 -right-1 w-8 h-8 rounded-bl-full bg-primary/5 flex items-center justify-center text-primary text-sm font-black font-sans">UN</div>
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className="text-sm font-black text-primary tracking-wide">Universalism</span>
                      </div>
                      <p className="text-sm text-slate-600 font-medium leading-relaxed font-sans">
                        Emphasizes openness, collective progress, and global collaboration.
                      </p>
                    </div>

                    {/* Self-Direction */}
                    <div className="bg-blue-500/[0.02] p-4 rounded-xl border border-blue-500/10 hover:bg-blue-500/[0.04] transition-all relative overflow-hidden">
                      <div className="absolute -top-1 -right-1 w-8 h-8 rounded-bl-full bg-blue-500/5 flex items-center justify-center text-blue-500 text-sm font-black font-sans">SD</div>
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className="text-sm font-black text-blue-500 tracking-wide">Self-Direction</span>
                      </div>
                      <p className="text-sm text-slate-600 font-medium leading-relaxed font-sans">
                        Highlights exploration, creativity, and independent thinking.
                      </p>
                    </div>

                    {/* Other High-Scoring Values in dynamic badges */}
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-slate-50/85 p-3 rounded-xl border border-slate-100 flex flex-col justify-center">
                        <div className="flex items-center gap-1 justify-between mb-0.5">
                          <span className="text-sm font-bold text-slate-700">Benevolence</span>
                        </div>
                        <p className="text-sm text-slate-450 font-medium leading-tight">Collective welfare & support</p>
                      </div>

                      <div className="bg-slate-50/85 p-3 rounded-xl border border-slate-100 flex flex-col justify-center">
                        <div className="flex items-center gap-1 justify-between mb-0.5">
                          <span className="text-sm font-bold text-slate-700">Achievement</span>
                        </div>
                        <p className="text-sm text-slate-450 font-medium leading-tight">Systemic success & progress</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </section>
          
          {/* Inspiration Keywords Card */}
          <section className="bg-white p-6 rounded-[32px] shadow-xl shadow-slate-200/40 border border-slate-100 space-y-4 text-sm animate-fade-in">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-base font-black text-slate-800 tracking-tight font-sans">Inspiration Keywords</h3>
                <p className="text-sm text-slate-400 font-medium tracking-normal mt-0.5">Toggle keywords to verify key structural targets</p>
              </div>
              {showPromptsSection && (
                <div className="flex items-center gap-1.5 animate-fade-in">
                  <span className={`text-sm px-2 py-0.5 rounded font-black uppercase tracking-wider transition-colors ${isKeywordsModified ? 'bg-amber-100 text-amber-700' : 'bg-slate-100 text-slate-500'}`}>
                    {isKeywordsModified ? 'Pending Sync' : 'Synced'}
                  </span>
                  <button 
                    onClick={handleGeneratePrompts}
                    disabled={isGeneratingPrompts}
                    className="p-1 px-2 border border-primary/20 bg-primary/10 hover:bg-primary/20 text-primary rounded-[6px] text-sm font-bold flex items-center gap-1 cursor-pointer transition-all disabled:opacity-50"
                    title="Apply keyword modifications & sync prompts"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${isGeneratingPrompts ? 'animate-spin' : ''}`} />
                    <span>Sync Prompts</span>
                  </button>
                </div>
              )}
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                { word: "Pluralistic", meta: "Diverse Perspectives" },
                { word: "Synergetic", meta: "New Collaboration" },
                { word: "Permeable", meta: "Open Frontiers" },
                { word: "Resonant", meta: "Collective Growth" }
              ].map((kw) => {
                const isConfirmed = confirmedKeywords.includes(kw.word);
                return (
                  <button 
                    key={kw.word}
                    onClick={() => toggleKeyword(kw.word)}
                    className={`p-3.5 rounded-2xl border transition-all text-left relative overflow-hidden cursor-pointer flex flex-col justify-between ${
                      isConfirmed
                        ? 'bg-primary/[0.03] border-primary shadow-sm'
                        : 'bg-slate-50 border-slate-100 hover:border-slate-200 opacity-60'
                    }`}
                  >
                    <div className="flex justify-between items-start w-full">
                      <span className="text-sm font-black text-slate-800">{kw.word}</span>
                      <div className={`w-4 h-4 rounded-md border flex items-center justify-center transition-all shrink-0 ${
                        isConfirmed
                          ? 'bg-primary border-primary text-white'
                          : 'border-slate-300'
                      }`}>
                        {isConfirmed && <Check className="w-3.5 h-3.5 stroke-[3.5]" />}
                      </div>
                    </div>
                    <span className="text-sm font-semibold text-slate-400 mt-2 block">{kw.meta}</span>
                  </button>
                );
              })}
            </div>

            {!showPromptsSection && (
              <div className="pt-4 flex justify-end border-t border-slate-100/60 mt-4">
                <button
                  onClick={handleGeneratePrompts}
                  disabled={isGeneratingPrompts}
                  className="px-6 py-3 bg-primary hover:bg-primary/95 text-white rounded-xl text-xs font-black uppercase tracking-widest cursor-pointer transition-all flex items-center gap-2 group shadow-lg shadow-primary/10 hover:scale-102 active:scale-98"
                >
                  {isGeneratingPrompts ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Generating Prompts...</span>
                    </>
                  ) : (
                    <>
                      <Wand2 className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                      <span>Confirm & Generate Prompts</span>
                    </>
                  )}
                </button>
              </div>
            )}
          </section>

          {/* Customizable Prompts Section */}
          <AnimatePresence>
            {showPromptsSection && (
              <motion.section 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white p-6 rounded-[32px] shadow-xl shadow-slate-200/40 border border-slate-100 space-y-4 text-sm"
              >
                <div className="flex justify-between items-center pb-2 border-b border-slate-50">
                  <h3 className="text-sm font-black uppercase tracking-wider text-slate-800 flex items-center gap-2">
                    <Wand2 className="w-5 h-5 text-primary" />
                    Synthesized Prompt Engineering
                  </h3>
                  {showDraftsSection && (
                    <div className="flex items-center gap-1.5">
                      <span className={`text-sm font-black px-2 py-0.5 rounded uppercase tracking-widest shadow-xs ${isPromptsModified ? 'bg-amber-100 text-amber-700' : 'bg-emerald-50 text-emerald-600'}`}>
                        {isPromptsModified ? 'Modified' : 'Synthesized'}
                      </span>
                      <button 
                        onClick={handleGenerateDrafts}
                        disabled={isGeneratingDrafts}
                        className="p-1 px-2 border border-primary/20 bg-primary/10 hover:bg-primary/20 text-primary rounded-[6px] text-sm font-bold flex items-center gap-1 cursor-pointer transition-all"
                        title="Regenerate Drafts"
                      >
                        <RefreshCw className={`w-3.5 h-3.5 ${isGeneratingDrafts ? 'animate-spin' : ''}`} />
                        <span>Re-render</span>
                      </button>
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                  {prompts.map((p, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="flex justify-between items-center">
                        <label className="text-sm font-bold text-slate-500 uppercase tracking-widest">
                          Visual Prompt Template {String.fromCharCode(65 + idx)}
                        </label>
                        {confirmedKeywords[idx] && (
                          <span className="bg-primary/5 text-primary text-sm font-bold px-2 py-0.5 rounded-[6px]">
                            Keyword Linked: {confirmedKeywords[idx]}
                          </span>
                        )}
                      </div>
                      <textarea
                        value={p}
                        onChange={(e) => {
                          const updated = [...prompts];
                          updated[idx] = e.target.value;
                          setPrompts(updated);
                          setIsPromptsModified(true);
                        }}
                        className="w-full bg-slate-50 border-none rounded-[6px] p-3 text-sm font-semibold leading-relaxed text-slate-700 focus:ring-2 focus:ring-primary/20 transition-all shadow-inner min-h-[60px] resize-none"
                      />
                    </div>
                  ))}
                </div>

                {!showDraftsSection && (
                  <div className="pt-4 flex justify-end border-t border-slate-100/60 mt-4">
                    <button
                      onClick={handleGenerateDrafts}
                      disabled={isGeneratingDrafts}
                      className="px-6 py-3 bg-linear-to-r from-primary to-blue-600 hover:opacity-95 text-white rounded-xl text-xs font-black uppercase tracking-widest cursor-pointer transition-all flex items-center gap-2 group shadow-lg shadow-primary/10 hover:scale-102 active:scale-98"
                    >
                      {isGeneratingDrafts ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Generating Drafts ({loadingProgress}%)...</span>
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-4 h-4 group-hover:scale-110 transition-transform" />
                          <span>Confirm & Generate Visual Drafts</span>
                        </>
                      )}
                    </button>
                  </div>
                )}
              </motion.section>
            )}
          </AnimatePresence>

          {/* Progress loader mapping */}
          <AnimatePresence>
            {isGeneratingDrafts && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-xl space-y-4"
              >
                <div className="flex justify-between items-center text-sm font-bold uppercase tracking-widest text-slate-500">
                  <span className="flex items-center gap-2">
                    <Loader2 className="w-5 h-5 text-primary animate-spin" />
                    {loadingStatus}
                  </span>
                  <span>{loadingProgress}%</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Generated Drafts cards */}
          <AnimatePresence>
            {showDraftsSection && (
              <motion.section 
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white p-6 rounded-[32px] shadow-xl shadow-slate-200/40 border border-slate-100 space-y-5 text-sm"
              >
                <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                  <h3 className="text-sm font-black uppercase tracking-wider text-slate-800 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-primary fill-current" />
                    Primary Visual Drafts Generated
                  </h3>
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-black uppercase text-emerald-600 tracking-widest bg-emerald-50 px-2 py-0.5 rounded">Render Success</span>
                    <button 
                      onClick={handleGenerateDrafts}
                      disabled={isGeneratingDrafts}
                      className="p-1 px-2 border border-slate-205 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-[6px] text-sm font-bold flex items-center gap-1 cursor-pointer transition-all"
                      title="Regenerate Drafts"
                    >
                      <RefreshCw className={`w-3.5 h-3.5 ${isGeneratingDrafts ? 'animate-spin' : ''}`} />
                      <span>Regenerate Drafts</span>
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {generatedDrafts.map((d) => (
                    <div key={d.id} className="group flex flex-col bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 hover:border-primary/20 transition-all">
                      <div className="aspect-video w-full overflow-hidden border-b border-slate-100 relative bg-slate-100">
                        <img 
                          src={d.img} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-2xl" 
                          referrerPolicy="no-referrer" 
                        />
                        <div className="absolute top-2 left-2 px-1.5 py-0.5 bg-white/95 rounded text-sm font-black uppercase text-slate-800 tracking-widest shadow-xs">
                          Draft {d.id}
                        </div>
                      </div>
                      <div className="p-3.5 space-y-1.5 flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-black text-slate-800 leading-tight">{d.title}</span>
                          </div>
                          <p className="text-sm font-medium leading-relaxed text-slate-400 mt-1">{d.desc}</p>
                        </div>
                        <div className="pt-2 border-t border-slate-150/50 flex justify-between items-center mt-2">
                          <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">{d.style}</span>
                          <span className="text-sm font-bold text-primary flex items-center gap-1">
                            <CheckSquare className="w-4 h-4" /> Active
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-primary/5 rounded-2xl flex items-start gap-3 border border-primary/10">
                  <CheckSquare className="text-primary w-5 h-5 shrink-0 mt-0.5" />
                  <span className="text-sm font-bold leading-normal text-slate-600">
                    Draft profiles verified. These assets are now committed to the comparative analysis console for evaluation mapping.
                  </span>
                </div>
              </motion.section>
            )}
          </AnimatePresence>

        </div>

      </div>

      <div className="flex flex-col items-center gap-6 w-full pt-8 border-t border-slate-100 max-w-7xl mt-6">
        <div className="flex items-center gap-4">
          <button 
            onClick={onBack}
            className="w-14 h-14 rounded-full border border-slate-200 bg-white text-slate-400 flex items-center justify-center hover:border-primary hover:text-primary transition-all shadow-sm group cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          </button>
          
          <button 
            onClick={onNext}
            className="px-12 py-4 bg-primary hover:bg-primary/95 rounded-full text-white font-bold text-sm shadow-xl hover:scale-103 active:scale-97 transition-all flex items-center gap-3 group uppercase tracking-widest cursor-pointer font-sans"
          >
            <span>go to Creative Visual Evaluation</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform shrink-0" />
          </button>
        </div>
        <p className="text-primary font-bold tracking-[0.2em] text-sm uppercase opacity-70 mb-4">Inspiration Generator Mapped</p>
      </div>
    </motion.div>
  );
}
