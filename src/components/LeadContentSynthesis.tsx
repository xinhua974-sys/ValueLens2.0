import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import ReactMarkdown from 'react-markdown';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { 
  ArrowLeft, 
  Upload, 
  Link as LinkIcon, 
  FileText, 
  Users, 
  CheckCircle2, 
  Zap, 
  Download, 
  MessageSquare,
  Sparkles,
  Presentation,
  Share2,
  Layout,
  Database,
  History,
  Send,
  X,
  FileUp,
  FolderOpen,
  Brain,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface Props {
  onBack: () => void;
  onGenerateAsset: (content: string) => void;
  topic?: string;
  targetAudience?: string;
  strategy?: string;
  key?: React.Key;
}

type Audience = 'booth' | 'leads' | 'summit';

interface UploadedFile {
  name: string;
  size: string;
  type: 'paper' | 'data' | 'history';
}

const schwartzData: Record<Audience, any[]> = {
  booth: [
    { subject: 'Self-Direction', value: 85 },
    { subject: 'Stimulation', value: 90 },
    { subject: 'Hedonism', value: 70 },
    { subject: 'Achievement', value: 70 },
    { subject: 'Power', value: 40 },
    { subject: 'Security', value: 50 },
    { subject: 'Conformity', value: 35 },
    { subject: 'Tradition', value: 45 },
    { subject: 'Benevolence', value: 75 },
    { subject: 'Universalism', value: 80 },
  ],
  leads: [
    { subject: 'Self-Direction', value: 75 },
    { subject: 'Stimulation', value: 50 },
    { subject: 'Hedonism', value: 30 },
    { subject: 'Achievement', value: 95 },
    { subject: 'Power', value: 60 },
    { subject: 'Security', value: 70 },
    { subject: 'Conformity', value: 55 },
    { subject: 'Tradition', value: 40 },
    { subject: 'Benevolence', value: 80 },
    { subject: 'Universalism', value: 70 },
  ],
  summit: [
    { subject: 'Self-Direction', value: 90 },
    { subject: 'Stimulation', value: 75 },
    { subject: 'Hedonism', value: 50 },
    { subject: 'Achievement', value: 80 },
    { subject: 'Power', value: 45 },
    { subject: 'Security', value: 40 },
    { subject: 'Conformity', value: 30 },
    { subject: 'Tradition', value: 35 },
    { subject: 'Benevolence', value: 85 },
    { subject: 'Universalism', value: 95 },
  ],
};

const schwartzExplanations: Record<Audience, string> = {
  booth: "The TAB Booth Audience profile is highly driven by Stimulation (excitement, novelty) and Self-Direction (creativity). They engage strongest with striking visual concepts, active hands-on exploration, and immediate collaborative hooks.",
  leads: "Project Leads seek highly structured Achievement and team Benevolence. They focus on clear operational metrics, cross-functional risk mitigation, system alignment, and concrete long-term delivery plans.",
  summit: "The Summit Presentation targets peak Universalism (societal welfare, macro progress) and Self-Direction (visionary thinking). The narrative must emphasize systemic trust, deep human-AI synergy, and pluralistic tech policies.",
};

const schwartzKeyValues: Record<Audience, string[]> = {
  booth: ["Stimulation : High", "Self-Direction : High", "Hedonism : Moderate"],
  leads: ["Achievement : Peak", "Security : High", "Benevolence : Active"],
  summit: ["Universalism : Peak", "Self-Direction : Peak", "Benevolence : Active"],
};

export default function LeadContentSynthesis({ onBack, onGenerateAsset, topic, targetAudience, strategy }: Props) {
  const currentTopic = topic || "Diversity & Synergetic Innovation";
  const currentTargetAudience = targetAudience || "Global Tech Innovators, Researchers, and Developers";
  const currentStrategy = strategy || "Aiming for a pluralistic and open visual expression that facilitates 'New Collaborative Synergy' across the global technology landscape.";

  const [stage, setStage] = useState<'input' | 'output'>('input');
  const [selectedAudience, setSelectedAudience] = useState<Audience | null>('booth');
  const [isProcessing, setIsProcessing] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [chatMessage, setChatMessage] = useState('');
  const [isRefining, setIsRefining] = useState(false);
  const [showLeftPanel, setShowLeftPanel] = useState(true);
  
  const [contentOutputs, setContentOutputs] = useState<Record<Audience, string>>({
    booth: "## Diversity & Synergetic Innovation\n\nOur booth showcases how pluralistic perspectives drive new collaborative synergy. \n\nKey Highlights:\n- 40% Increase in Cross-sector efficiency\n- Open frontiers in AI governance\n- Global community-led development",
    leads: "## Strategy Lead Deck: Q3 Alignment\n\nStrategic priorities for TAB 2026 synergy phase. Focusing on decentralized asset management and open-source infrastructure parity.",
    summit: "## The Pluralistic Future\n\nA keynote presentation on the transition from monolithic innovation to synergetic, open-border technological development."
  });

  const audiences = [
    { id: 'booth' as Audience, label: 'TAB Booth Audience', description: 'Impactful, visual-forward messaging' },
    { id: 'leads' as Audience, label: 'Project Leads', description: 'Technical synergy & strategic alignment' },
    { id: 'summit' as Audience, label: 'Summit Presentation', description: 'Visionary, high-level narrative' }
  ];

  const handleUpload = (type: UploadedFile['type']) => {
    const names = {
      paper: 'Research_Insight_v2.pdf',
      data: 'System_Metrics_2026.csv',
      history: 'TAB_2025_Retrospective.zip'
    };
    const newFile: UploadedFile = {
      name: names[type],
      size: '2.4MB',
      type
    };
    setUploadedFiles(prev => [...prev, newFile]);
  };

  const removeFile = (name: string) => {
    setUploadedFiles(prev => prev.filter(f => f.name !== name));
  };

  const handleStartSynthesis = () => {
    if (!selectedAudience) return;
    setIsProcessing(true);
    setTimeout(() => {
      setStage('output');
      setIsProcessing(false);
    }, 2000);
  };

  const handleRefine = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatMessage || !selectedAudience) return;
    
    setIsRefining(true);
    const userMsg = chatMessage;
    setChatMessage('');

    // Simulate Agent Refinement
    setTimeout(() => {
      setContentOutputs(prev => ({
        ...prev,
        [selectedAudience]: `${prev[selectedAudience]}\n\n**Refined Update:** Added focus on ${userMsg} as requested by the user. Integration of new collaborative metrics now live.`
      }));
      setIsRefining(false);
    }, 1500);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="w-full max-w-7xl flex flex-col items-center gap-8 py-8"
    >
      <header className="text-center space-y-3 flex flex-col items-center">
        <div className="inline-block px-4 py-1 bg-white rounded-full border border-secondary/20 text-secondary font-bold text-[10px] tracking-widest uppercase shadow-sm">
          Project Lead Workspace
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
          Knowledge <span className="text-secondary italic">Translation</span>
        </h1>
        <p className="text-slate-500 text-lg font-medium max-w-2xl">
          Transform raw research insights, empirical data, and historic context into targeted visual narratives.
        </p>
      </header>

      <AnimatePresence mode="wait">
        {stage === 'input' ? (
          <motion.div 
            key="input-stage"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            className="w-full max-w-4xl space-y-8 mx-auto"
          >
            {/* Knowledge Ingestion */}
              <section className="bg-white rounded-[40px] p-10 border border-slate-100 shadow-2xl shadow-slate-200/50">
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary">
                    <FolderOpen className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-slate-800 tracking-tight">Knowledge Ingestion</h3>
                    <p className="text-slate-400 text-xs font-medium">Upload papers, datasets, and historic assets</p>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      { type: 'paper' as const, label: 'Research Papers', icon: FileText, color: 'text-blue-500', bg: 'bg-blue-50/50', border: 'border-blue-100' },
                      { type: 'data' as const, label: 'Project Data', icon: Database, color: 'text-emerald-500', bg: 'bg-emerald-50/50', border: 'border-emerald-100' },
                      { type: 'history' as const, label: 'Historical Assets', icon: History, color: 'text-amber-500', bg: 'bg-amber-50/50', border: 'border-amber-100' }
                    ].map((slot) => (
                      <button 
                        key={slot.type}
                        onClick={() => handleUpload(slot.type)}
                        className={`relative overflow-hidden p-8 ${slot.bg} rounded-3xl border-2 border-dashed ${slot.border} hover:border-secondary hover:bg-white transition-all group flex flex-col items-center gap-4`}
                      >
                        <div className={`p-4 bg-white rounded-2xl shadow-sm group-hover:shadow-md group-hover:-translate-y-1 transition-all`}>
                          <slot.icon className={`w-8 h-8 ${slot.color}`} />
                        </div>
                        <div className="text-center">
                          <span className="text-[10px] font-black uppercase text-slate-800 tracking-widest block mb-1">{slot.label}</span>
                          <div className="flex items-center gap-2 justify-center text-[8px] font-bold text-slate-400 uppercase tracking-widest">
                            <FileUp className="w-3 h-3" />
                            <span>Browse Files</span>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>

                  {uploadedFiles.length > 0 && (
                    <div className="bg-slate-50/50 rounded-2xl p-4 border border-slate-100">
                      <div className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-3 px-1">Ingested Nodes ({uploadedFiles.length})</div>
                      <div className="flex flex-wrap gap-2">
                         {uploadedFiles.map((file, i) => (
                           <div key={i} className="flex items-center gap-2 px-3 py-2 bg-white rounded-xl border border-slate-200 shadow-sm">
                             <FileText className="w-3 h-3 text-secondary" />
                             <span className="text-[10px] font-bold text-slate-600 tracking-tight">{file.name}</span>
                             <button onClick={() => removeFile(file.name)} className="ml-1 text-slate-300 hover:text-red-500 transition-colors">
                               <X className="w-3.5 h-3.5" />
                             </button>
                           </div>
                         ))}
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative">
                      <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input 
                        type="text" 
                        placeholder="External Research Nodes (URLs)..."
                        className="w-full bg-slate-50 border border-slate-100 rounded-[6px] py-4 pl-12 pr-4 text-sm font-medium focus:ring-2 focus:ring-secondary/20 focus:bg-white transition-all outline-none"
                      />
                    </div>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input 
                        type="text" 
                        placeholder="Brief Context Highlights..."
                        className="w-full bg-slate-50 border border-slate-100 rounded-[6px] py-4 pl-12 pr-4 text-sm font-medium focus:ring-2 focus:ring-secondary/20 focus:bg-white transition-all outline-none"
                      />
                    </div>
                  </div>

                  <textarea 
                    placeholder="Specific constraints or collaborative nuances required for this synthesis..."
                    className="w-full bg-slate-50 border border-slate-100 rounded-[6px] p-6 text-sm font-medium focus:ring-2 focus:ring-secondary/20 focus:bg-white transition-all outline-none min-h-[120px] resize-none"
                  />
                </div>
              </section>

              {/* Primary Channel */}
              <section className="bg-white rounded-[40px] p-10 border border-slate-100 shadow-2xl shadow-slate-200/50">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                    <Users className="w-6 h-6 animate-pulse" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-slate-800 tracking-tight">Primary Channel</h3>
                    <p className="text-slate-400 text-xs font-medium">Define the resonant target for the output</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {audiences.map(a => (
                    <button
                      key={a.id}
                      onClick={() => setSelectedAudience(a.id)}
                      className={`text-left p-6 rounded-3xl border transition-all ${
                        selectedAudience === a.id 
                        ? 'bg-secondary/5 border-secondary shadow-lg shadow-secondary/5 ring-1 ring-secondary' 
                        : 'bg-slate-50/50 border-slate-100 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className={`p-2 rounded-xl border ${selectedAudience === a.id ? 'bg-secondary text-white border-secondary' : 'bg-white text-slate-300 border-slate-100'}`}>
                          {a.id === 'booth' && <Share2 className="w-4 h-4" />}
                          {a.id === 'leads' && <FileText className="w-4 h-4" />}
                          {a.id === 'summit' && <Presentation className="w-4 h-4" />}
                        </div>
                        {selectedAudience === a.id && <CheckCircle2 className="w-5 h-5 text-secondary" />}
                      </div>
                      <span className={`text-xs font-black uppercase tracking-tight block mb-1 ${selectedAudience === a.id ? 'text-secondary' : 'text-slate-700'}`}>
                        {a.label}
                      </span>
                      <p className="text-[10px] font-medium text-slate-400 leading-tight">{a.description}</p>
                    </button>
                  ))}
                </div>

                <button
                  disabled={!selectedAudience || isProcessing}
                  onClick={handleStartSynthesis}
                  className={`mt-10 w-full py-6 rounded-3xl font-black text-sm uppercase tracking-[0.3em] transition-all flex items-center justify-center gap-4 cursor-pointer ${
                    selectedAudience 
                    ? 'bg-primary text-white shadow-2xl hover:bg-primary/90 hover:-translate-y-1 active:translate-y-0 active:scale-95' 
                    : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                  }`}
                >
                  {isProcessing ? (
                    <>
                      <RefreshCw className="w-5 h-5 animate-spin shrink-0" />
                      <span>Processing...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5 shrink-0 animate-bounce" />
                      <span>Synthesize & Amplify</span>
                    </>
                  )}
                </button>
              </section>
          </motion.div>
        ) : (
          <motion.div 
            key="output-stage"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full px-4 relative"
          >
            {/* Left Column (Your Strategic Input & AI Interpretation - Collapsible Unified Panel) */}
            {showLeftPanel && (
              <motion.div 
                initial={{ opacity: 0, x: -25 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -25 }}
                className="lg:col-span-3 flex flex-col relative"
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
                    
                    <div className="space-y-4 pt-1 text-xs font-sans">
                      <div className="space-y-1">
                        <span className="text-xs font-black uppercase text-slate-400 tracking-wider">TAB Topic</span>
                        <p className="text-xs font-bold text-slate-705 leading-snug">{currentTopic}</p>
                      </div>
                      <div className="space-y-1">
                        <span className="text-xs font-black uppercase text-slate-400 tracking-wider">Target Audience</span>
                        <p className="text-xs font-bold text-slate-705 leading-snug">{currentTargetAudience}</p>
                      </div>
                      <div className="space-y-1">
                        <span className="text-xs font-black uppercase text-slate-400 tracking-wider">Project Strategy</span>
                        <p className="text-xs font-bold text-slate-705 leading-snug">{currentStrategy}</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-slate-100 my-1" />

                  {/* AI Interpretation Content */}
                  <div className="space-y-4 flex-1 text-xs">
                    <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                      <Sparkles className="text-primary w-5 h-5 fill-current" />
                      <h3 className="text-xs font-black uppercase tracking-wider text-slate-800">AI Interpretation</h3>
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
                            <h4 className="text-xs font-black text-slate-800 leading-snug">{item.title}</h4>
                            <p className="text-[11px] text-slate-500 leading-normal mt-0.5">{item.desc}</p>
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

            {/* Workspace (Expanded/Contracted gracefully) */}
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

              {/* Schwartz Value Analysis */}
              <section className="bg-white rounded-[40px] p-10 border border-slate-100 shadow-2xl shadow-slate-200/50">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-rose-50 rounded-2xl flex items-center justify-center text-rose-500">
                      <Sparkles className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-slate-800 tracking-tight">Schwartz Value Profile</h3>
                      <p className="text-slate-400 text-xs font-medium">Recipient motivational profiles mapped to Schwartz Value theory</p>
                    </div>
                  </div>
                  <div className="self-start sm:self-auto px-4 py-1.5 bg-slate-50 border border-slate-200 text-[10px] font-black uppercase text-slate-500 rounded-full tracking-wider whitespace-nowrap">
                    Target: {selectedAudience ? audiences.find(a => a.id === selectedAudience)?.label : 'Default'}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  {/* Radar Chart */}
                  <div className="md:col-span-6 h-72 w-full flex items-center justify-center bg-slate-50/50 rounded-3xl border border-slate-100 p-4 relative">
                    <ResponsiveContainer width="100%" height="100%">
                      <RadarChart cx="50%" cy="50%" outerRadius="75%" data={schwartzData[selectedAudience || 'booth']}>
                        <PolarGrid stroke="#e2e8f0" strokeDasharray="3 3" />
                        <PolarAngleAxis 
                          dataKey="subject" 
                          tick={{ fill: '#64748b', fontSize: 10, fontWeight: 700 }}
                        />
                        <Radar
                          name="Audience Profile"
                          dataKey="value"
                          stroke="#E11D48"
                          strokeWidth={2.5}
                          fill="#E11D48"
                          fillOpacity={0.15}
                        />
                      </RadarChart>
                    </ResponsiveContainer>
                  </div>

                  {/* Analysis Explanations & Priorities */}
                  <div className="md:col-span-6 space-y-6">
                    <div className="p-6 rounded-3xl bg-secondary/[0.02] border border-secondary/10">
                      <span className="text-[10px] font-black uppercase text-secondary tracking-widest block mb-2">
                        Audience Value Analysis
                      </span>
                      <p className="text-sm text-slate-600 font-medium leading-relaxed font-sans">
                        {schwartzExplanations[selectedAudience || 'booth']}
                      </p>
                    </div>

                    <div className="bg-slate-50/50 rounded-3xl p-6 border border-slate-100">
                      <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest block mb-3">
                        Core Priorities
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {schwartzKeyValues[selectedAudience || 'booth'].map((v: string, idx: number) => (
                          <span key={idx} className="text-xs font-bold px-3.5 py-1.5 bg-white border border-slate-200 text-slate-600 rounded-xl shadow-sm">
                            {v}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="bg-white rounded-[40px] p-10 border border-slate-100 shadow-2xl relative overflow-hidden animate-fade-in">
                 <div className="absolute top-8 right-10 flex gap-2">
                   <button className="p-2.5 bg-slate-50 text-slate-400 rounded-xl hover:text-secondary transition-colors">
                     <Download className="w-5 h-5" />
                   </button>
                 </div>

                 <div className="mb-8 flex items-center gap-3">
                   {selectedAudience === 'booth' && <Share2 className="w-6 h-6 text-primary shrink-0" />}
                   {selectedAudience === 'leads' && <FileText className="w-6 h-6 text-primary shrink-0" />}
                   {selectedAudience === 'summit' && <Presentation className="w-6 h-6 text-primary shrink-0" />}
                   <h3 className="text-2xl font-black text-slate-800 tracking-tight">
                     {audiences.find(a => a.id === selectedAudience)?.label} Content
                   </h3>
                 </div>
                  
                 <div className="min-h-[300px] bg-slate-50 rounded-3xl p-10 shadow-inner mb-8">
                    <div className="markdown-body prose prose-slate max-w-none prose-headings:font-black prose-headings:tracking-tight prose-p:font-medium prose-p:text-slate-600 prose-p:leading-relaxed text-sm">
                       <ReactMarkdown>
                         {contentOutputs[selectedAudience!]}
                       </ReactMarkdown>
                    </div>
                 </div>

                 <div className="flex gap-4">
                   <button 
                     onClick={() => onGenerateAsset(contentOutputs[selectedAudience!])}
                     className="flex-1 py-5 bg-primary text-white rounded-2xl text-xs font-black uppercase tracking-[0.2em] shadow-xl hover:bg-primary/95 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 group cursor-pointer"
                   >
                     <span>Proceed to Fabrication</span>
                     <Layout className="w-4 h-4 group-hover:animate-pulse shrink-0" />
                   </button>
                 </div>
              </section>

              {/* AI Refinement Chat Interface */}
              <section className="bg-white border border-slate-100 rounded-[32px] p-6 shadow-xl flex flex-col gap-4">
                 <div className="flex items-center gap-2 px-2">
                   <Sparkles className="w-4 h-4 text-primary" />
                   <span className="text-[10px] font-black text-slate-700 uppercase tracking-widest">AI Narrator Refinement</span>
                 </div>

                 <form onSubmit={handleRefine} className="relative">
                    <input 
                      type="text" 
                      value={chatMessage}
                      onChange={(e) => setChatMessage(e.target.value)}
                      placeholder="Ask the Agent to tweak the narrative, add data, or change tone..."
                      className="w-full bg-slate-50 border border-slate-200/80 rounded-[6px] py-4 pl-6 pr-14 text-sm font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-inner"
                    />
                    <button 
                      type="submit"
                      disabled={!chatMessage || isRefining}
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white hover:scale-105 active:scale-95 transition-all disabled:opacity-30 disabled:grayscale"
                    >
                      {isRefining ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                    </button>
                 </form>
                 <p className="px-2 text-[8px] font-bold text-slate-500 uppercase tracking-widest">
                   Agent is trained to sync with the "Diversity & Synergy" baseline strategy.
                 </p>
              </section>

              <div className="flex justify-center pt-4">
                 <button 
                  onClick={() => setStage('input')}
                  className="px-8 py-3 bg-white border border-slate-200 text-slate-400 rounded-full text-xs font-black uppercase tracking-widest hover:border-secondary hover:text-secondary transition-all"
                >
                  Synthesize Other Channel
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="pt-8 w-full border-t border-slate-100 flex flex-col items-center gap-6">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-400 hover:text-secondary transition-colors text-xs font-black uppercase tracking-widest"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Dashboard</span>
        </button>
      </footer>
    </motion.div>
  );
}

// Add simple RefreshCw for chat
function RefreshCw(props: any) {
  return (
    <svg 
      {...props}
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
      <path d="M3 21v-5h5" />
    </svg>
  );
}

