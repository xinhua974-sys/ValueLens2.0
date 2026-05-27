import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  Upload, 
  Link as LinkIcon, 
  FileText, 
  Sparkles, 
  Edit3, 
  Check, 
  Trash2, 
  Cpu, 
  Globe, 
  AlertTriangle, 
  TrendingUp, 
  CornerDownRight, 
  CheckCircle2, 
  RefreshCw, 
  Plus, 
  FileUp,
  X,
  PlayCircle,
  Dribbble,
  HelpCircle,
  FileCode,
  Gauge
} from 'lucide-react';

interface Props {
  onBack: () => void;
}

interface AttachedFile {
  id: string;
  name: string;
  size: string;
  type: string; // 'pdf' | 'ppt' | 'video' | 'demo' | 'other'
}

import screenshot1 from '../assets/images/dashboard_screenshot_1_1779774835828.png';
import screenshot2 from '../assets/images/dashboard_screenshot_2_1779774855383.png';

export default function LeadPosterWorkspace({ onBack }: Props) {
  // User survey profile states (editable info at the top)
  const [userName, setUserName] = useState('Dr. Alex Wei-Han Chen');
  const [userTeam, setUserTeam] = useState('Social sciences Group');
  const [projectName, setProjectName] = useState('Know Your Value: A Conversational Dynamic Value Assessment Framework');
  const [posterStatus, setPosterStatus] = useState('Drafting');
  const [viewMode, setViewMode] = useState<'workspace' | 'preview'>('workspace');
  
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [posterPreviewEditMode, setPosterPreviewEditMode] = useState(false);

  // Editable Parsing Results
  const [motivationText, setMotivationText] = useState('Bridging Human & LLM Value Assessment. For better human-Al interaction, Shared value-space evaluation is necessary. Human-centered: Expert-Designed Questionnaire, Data contamination, Option-bound. Al-community: Large Scale Benchmark, Too many items, Knowledge-heavy.');
  const [methodText, setMethodText] = useState('Adaptive, Psychometrics-Driven Conversation. DOCAV: Dynamic Optimization for Conversational Assessment of Values. Features a Nominal Response Model and 10-turn search algorithm for personalized, natural dialogue.');
  const [resultText, setResultText] = useState('Faster, More Stable & Interaction Design.');

  const [isEditingResults, setIsEditingResults] = useState(false);

  // Inputs
  const [files, setFiles] = useState<AttachedFile[]>([
    { id: '1', name: 'DOCAV_Theory_Draft_V4.pdf', size: '4.2 MB', type: 'pdf' },
    { id: '2', name: 'Cognitive_Architecture_Slides.ppt', size: '12.8 MB', type: 'ppt' }
  ]);
  const [paperLink, setPaperLink] = useState('https://msra.microsoft.com/research/docav-value-alignment');
  const [briefDescription, setBriefDescription] = useState('A highly conversational framework that leverages large language models and cognitive psychometric theory to assess values dynamically.');
  const [supplementaryNotes, setSupplementaryNotes] = useState('');

  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showAnalysisResults, setShowAnalysisResults] = useState(false);

  // AI analyzed metrics states
  const [researchGoal, setResearchGoal] = useState(
    'Establish a standardized, high-alignment value assessment model through interactive dialogue, eliminating static quiz biases.'
  );
  const [techHighlights, setTechHighlights] = useState([
    { id: 'th1', title: 'Sequential Bayesian Selection (N-turn optimization)', active: true, rating: 92 },
    { id: 'th2', title: 'Cognitive Response Modeling for open questions', active: true, rating: 88 }
  ]);
  const [strategicMeaning, setStrategicMeaning] = useState(
    'Provides robust multi-agent coordination frameworks and safety governance benchmarks for next-generation frontier intelligence.'
  );
  const [commDifficulty, setCommDifficulty] = useState({
    rating: 78,
    summary: 'Explaining psychometric Item Response Theory (IRT) mechanics to general corporate stakeholder audiences.'
  });

  // Editing state for AI results cards
  const [editingResultId, setEditingResultId] = useState<string | null>(null);
  const [editTempText, setEditTempText] = useState('');
  const [editTempRating, setEditTempRating] = useState<number>(75);

  const simulateFileInput = () => {
    const filePresets = [
      { name: 'Technical_Spec_DOCAV_2026.pdf', size: '1.8 MB', type: 'pdf' },
      { name: 'Prototype_Interactive_Demo.mp4', size: '45.1 MB', type: 'video' },
      { name: 'System_Deployment_Blueprint.pptx', size: '8.4 MB', type: 'ppt' },
      { name: 'Live_Codebase_Sandboxed_Demo.zip', size: '3.1 MB', type: 'demo' }
    ];
    const randomIndex = Math.floor(Math.random() * filePresets.length);
    const chosen = filePresets[randomIndex];
    const newFile: AttachedFile = {
      id: Date.now().toString(),
      name: chosen.name,
      size: chosen.size,
      type: chosen.type
    };
    setFiles(prev => [...prev, newFile]);
  };

  const removeFile = (id: string) => {
    setFiles(prev => prev.filter(f => f.id !== id));
  };

  const handleStartAnalysis = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowAnalysisResults(true);
      setPosterStatus('AI Analyze');
    }, 1800);
  };

  const handleEditHighlightTitle = (id: string, newTitle: string) => {
    setTechHighlights(prev => prev.map(h => h.id === id ? { ...h, title: newTitle } : h));
  };

  const handleEditHighlightRating = (id: string, val: number) => {
    setTechHighlights(prev => prev.map(h => h.id === id ? { ...h, rating: val } : h));
  };

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'pdf': return <FileText className="w-5 h-5 text-red-500" />;
      case 'ppt': return <FileText className="w-5 h-5 text-orange-500" />;
      case 'video': return <PlayCircle className="w-5 h-5 text-blue-500" />;
      case 'demo': return <FileCode className="w-5 h-5 text-emerald-500" />;
      default: return <FileText className="w-5 h-5 text-slate-500" />;
    }
  };  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      className="max-w-5xl w-full flex flex-col items-center gap-8 py-4 px-2"
    >
      <header className="text-center space-y-3 flex flex-col items-center">
        <div className="inline-block px-4 py-1 bg-white rounded-full border border-primary/20 text-primary font-bold text-[10px] tracking-widest uppercase shadow-sm">
          Poster Workspace
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
          AIGC <span className="text-primary italic">Poster translation</span> center
        </h1>
      </header>

      {/* Progress Tracker */}
      <div className="w-full flex items-center justify-between bg-white p-2 rounded-full border border-slate-100 shadow-sm max-w-3xl">
        {['Drafting', 'AI Analyze', 'Poster Preview', 'Completed'].map((step, index) => {
          const stepIndex = ['Drafting', 'AI Analyze', 'Poster Preview', 'Completed'].indexOf(posterStatus);
          const active = index <= stepIndex;
          return (
            <div key={step} className="flex items-center gap-2 px-4 py-2">
              <div className={`w-7 h-7 rounded-full flex items-center justify-center font-black text-[10px] ${active ? 'bg-primary text-white' : 'bg-slate-100 text-slate-400'}`}>
                {index + 1}
              </div>
              <span className={`text-[10px] font-bold uppercase tracking-wider ${active ? 'text-primary' : 'text-slate-400'}`}>{step}</span>
              {index < 3 && <div className={`w-8 h-0.5 mx-2 ${index < stepIndex ? 'bg-primary' : 'bg-slate-100'}`} />}
            </div>
          );
        })}
      </div>
      
      {posterStatus === 'Poster Preview' ? (
        <div className="space-y-4">
          <div className="w-[800px] aspect-[1920/2880] bg-white p-12 shadow-2xl border border-slate-100 relative">
            <button 
              onClick={() => setPosterPreviewEditMode(!posterPreviewEditMode)}
              className="absolute top-4 right-4 px-3 py-1 bg-slate-100 hover:bg-slate-200 rounded-lg text-xs font-bold text-slate-600 transition-all cursor-pointer"
            >
              {posterPreviewEditMode ? 'Finish Editing' : 'Edit'}
            </button>
            <div className="border-l-4 border-[#a170dd] pl-6 mb-10">
              <h1 className="text-5xl font-black text-slate-950 mb-3 break-words">{projectName}</h1>
              <p className="text-lg text-slate-600 font-bold tracking-wide break-words">{userName} | {userTeam}</p>
            </div>
            
            <div className="space-y-10">
              <div className="space-y-3">
                <h2 className="text-2xl font-black text-[#a170dd] uppercase tracking-widest text-left">Motivation</h2>
                {posterPreviewEditMode ? (
                   <textarea value={motivationText} onChange={(e) => setMotivationText(e.target.value)} className="w-full text-lg text-slate-700 font-medium leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200" rows={3} />
                ) : (
                   <ul className="text-lg text-slate-700 font-medium leading-relaxed list-disc pl-5 space-y-2 break-words">
                     {motivationText.split('.').filter(s => s.trim()).map((s, i) => <li key={i}>{s.trim()}</li>)}
                   </ul>
                )}
              </div>
              
              <div className="space-y-3">
                <h2 className="text-2xl font-black text-[#a170dd] uppercase tracking-widest text-left">Method</h2>
                {posterPreviewEditMode ? (
                   <textarea value={methodText} onChange={(e) => setMethodText(e.target.value)} className="w-full text-lg text-slate-700 font-medium leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200" rows={5} />
                ) : (
                   <ul className="text-lg text-slate-700 font-medium leading-relaxed list-disc pl-5 space-y-2 break-words">
                     {methodText.split('.').filter(s => s.trim()).map((s, i) => <li key={i}>{s.trim()}</li>)}
                   </ul>
                )}
              </div>
              
              <div className="space-y-3">
                <h2 className="text-2xl font-black text-[#a170dd] uppercase tracking-widest text-left">Result</h2>
                {posterPreviewEditMode ? (
                   <textarea value={resultText} onChange={(e) => setResultText(e.target.value)} className="w-full text-lg text-slate-700 font-medium leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200" rows={2} />
                ) : (
                   <p className="text-lg text-slate-700 font-medium leading-relaxed break-words">{resultText}</p>
                )}
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <img src={screenshot1} alt="Screenshot 1" className="w-full h-56 object-cover rounded-2xl border border-slate-200" />
                  <img src={screenshot2} alt="Screenshot 2" className="w-full h-56 object-cover rounded-2xl border border-slate-200" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center pb-12">
            <button 
              onClick={() => { setPosterStatus('Completed'); setPosterPreviewEditMode(false); }}
              className="bg-[#a170dd] text-white px-8 py-3 rounded-full font-black text-sm uppercase tracking-widest shadow-lg hover:bg-[#865bc0] transition-all cursor-pointer"
            >
              Save and Submit
            </button>
          </div>
        </div>
      ) : (
        <>
          {/* User Profile Info */}
          <section className="w-full bg-white rounded-[32px] p-8 border border-slate-100 shadow-xl relative overflow-hidden bg-linear-to-br from-white to-slate-50/50">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative z-10">
              <div className="space-y-4 flex-1 w-full">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-black uppercase tracking-widest text-primary flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    User Profile
                  </div>
                  <button 
                    onClick={() => setIsEditingProfile(!isEditingProfile)}
                    className="px-3 py-1 bg-slate-50 hover:bg-slate-100 border border-slate-200/80 rounded-xl text-xs font-bold text-slate-600 transition-all flex items-center gap-2 cursor-pointer"
                  >
                    {isEditingProfile ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Done</span>
                      </>
                    ) : (
                      <>
                        <Edit3 className="w-3.5 h-3.5" />
                        <span>Edit Profile</span>
                      </>
                    )}
                  </button>
                </div>

                {isEditingProfile ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-50/50 p-6 rounded-2xl border border-slate-200/50">
                    <div className="space-y-1 md:col-span-2">
                       <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Project Name</label>
                      <input 
                        type="text" 
                        value={projectName} 
                        onChange={(e) => setProjectName(e.target.value)} 
                        className="w-full text-sm font-bold bg-white border border-slate-200 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Presenter Name</label>
                      <input 
                        type="text" 
                        value={userName} 
                        onChange={(e) => setUserName(e.target.value)} 
                        className="w-full text-sm font-bold bg-white border border-slate-200 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Team / Laboratory</label>
                      <input 
                        type="text" 
                        value={userTeam} 
                        onChange={(e) => setUserTeam(e.target.value)} 
                        className="w-full text-sm font-bold bg-white border border-slate-200 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <h2 className="text-xl font-bold text-slate-800 tracking-tight leading-snug">{projectName}</h2>
                    <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium text-slate-500">
                      <div className="flex items-center gap-2">
                        <span className="text-slate-400 text-[10px] font-black uppercase">Presenter:</span>
                        <span className="text-slate-700 font-bold">{userName}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-slate-400 text-[10px] font-black uppercase">Team:</span>
                        <span className="text-slate-700 font-bold">{userTeam}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Source Material - Full Width */}
          <section className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-xl w-full">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                <Upload className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <h3 className="text-lg font-black text-slate-800 tracking-tight">Source Material</h3>
                <p className="text-slate-400 text-xs font-medium">Input your core research context</p>
              </div>
            </div>

            <form onSubmit={handleStartAnalysis} className="space-y-6">
                
              {/* Attachment Area */}
              <div className="space-y-3">
                <label className="text-xs font-black uppercase text-slate-500 tracking-widest block">Attachments & Assets</label>
                
                <div 
                  onClick={simulateFileInput}
                  className="w-full py-8 border-2 border-dashed border-slate-200 hover:border-primary/50 rounded-2xl flex flex-col items-center justify-center gap-3 bg-slate-50/50 hover:bg-slate-50/20 active:bg-slate-100/50 transition-all cursor-pointer group"
                >
                  <div className="p-3 bg-white rounded-xl shadow-sm border border-slate-100 group-hover:scale-105 transition-all">
                    <FileUp className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-center">
                    <span className="text-xs font-black uppercase tracking-wider text-slate-700 block mb-1">Add Research Attachments</span>
                    <p className="text-[10px] text-slate-400 font-medium">Supports multiple: PDF, PPT, Video, Demo etc.</p>
                  </div>
                </div>

                {/* Show attached file checklist */}
                {files.length > 0 && (
                  <div className="bg-slate-50/50 border border-slate-100 rounded-xl p-4 space-y-2">
                    <div className="text-[10px] text-slate-400 uppercase tracking-widest font-black flex justify-between">
                      <span>Attached files ({files.length})</span>
                      <span className="text-primary font-bold">Simulated</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {files.map(f => (
                        <div key={f.id} className="flex items-center justify-between p-2.5 bg-white border border-slate-200/60 rounded-xl hover:border-primary/20 transition-all shadow-2xs">
                          <div className="flex items-center gap-2 min-w-0 flex-1">
                            {getFileIcon(f.type)}
                            <span className="text-xs text-slate-700 font-bold truncate pr-3">{f.name}</span>
                          </div>
                          <button 
                            type="button" 
                            onClick={(e) => { e.stopPropagation(); removeFile(f.id); }}
                            className="text-slate-300 hover:text-red-500 transition-colors p-1 rounded-md"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Supplementary Notes & Keywords Area */}
              <div className="space-y-2 pt-2">
                <label className="text-xs font-black uppercase text-slate-500 tracking-widest block">Supplementary Notes & Keywords</label>
                <textarea
                  value={supplementaryNotes}
                  onChange={(e) => setSupplementaryNotes(e.target.value)}
                  placeholder="Enter additional background notes, content guidelines, or key terms (e.g., Cognitive Psychometrics, Shared value-space, Value assessment...)"
                  className="w-full text-xs font-medium text-slate-700 bg-slate-50/50 p-4 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-primary/20 leading-relaxed placeholder-slate-400"
                  rows={4}
                />
              </div>
              
              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  disabled={isAnalyzing}
                  className={`py-3 px-6 rounded-xl font-black text-xs uppercase tracking-[0.2em] shadow-xl hover:scale-[1.01] transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    isAnalyzing 
                      ? 'bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200'
                      : 'bg-primary text-white hover:bg-primary/95 shadow-primary/20'
                  }`}
                >
                  {isAnalyzing ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Synthesizing...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      <span>Submit for AI Parser</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </section>

          {/* Analysis Results Area */}
          <section className="w-full flex flex-col gap-6">
            <AnimatePresence mode="wait">
              {!showAnalysisResults ? (
                <motion.div 
                  key="empty-state"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-slate-100 rounded-[32px] border-2 border-dashed border-slate-200 p-12 text-center flex flex-col justify-center items-center gap-4 min-h-[480px] w-full"
                >
                  <div className="w-16 h-16 bg-white border border-slate-200 text-slate-300 rounded-3xl flex items-center justify-center shadow-sm">
                    <Sparkles className="w-8 h-8" />
                  </div>
                  <div className="max-w-sm space-y-2">
                    <h4 className="text-base font-black text-slate-700">Awaiting Material Node Content</h4>
                    <p className="text-xs text-slate-400 leading-relaxed font-medium">
                      Upload your research papers or outline summaries above to trigger Microsoft Cognitive AI engine mapping.
                    </p>
                  </div>
                </motion.div>
              ) : (
                  <motion.div 
                    key="results-panel"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="space-y-6 w-full"
                  >
                    {/* Unified Card with Header Nested Inside */}
                    <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-xl space-y-6">
                      {/* Visual Header */}
                      <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                        <h4 className="text-xs font-black uppercase text-slate-500 tracking-widest flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                          Interactive AI Semantic Parser Results
                        </h4>
                        <button
                          onClick={() => setIsEditingResults(!isEditingResults)}
                          className="text-[10px] font-bold text-primary bg-primary/10 px-4 py-1.5 rounded-full cursor-pointer hover:bg-primary/20 transition-all"
                        >
                          {isEditingResults ? 'Save Changes' : 'Edit Results'}
                        </button>
                      </div>

                      {/* Motivation */}
                      <div className="space-y-2">
                        <h3 className="text-xs font-black uppercase text-slate-800 tracking-widest">Motivation</h3>
                        {isEditingResults ? (
                           <textarea 
                              value={motivationText} 
                              onChange={(e) => setMotivationText(e.target.value)} 
                              className="w-full text-xs text-slate-600 font-medium bg-slate-50 p-3 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-primary/20 leading-relaxed" 
                              rows={3} 
                           />
                        ) : (
                          <div className="text-xs text-slate-600 font-medium leading-relaxed">{motivationText}</div>
                        )}
                      </div>

                      {/* Method */}
                      <div className="space-y-2 border-t border-slate-100 pt-4">
                        <h3 className="text-xs font-black uppercase text-slate-800 tracking-widest">Method</h3>
                        {isEditingResults ? (
                           <textarea 
                              value={methodText} 
                              onChange={(e) => setMethodText(e.target.value)} 
                              className="w-full text-xs text-slate-600 font-medium bg-slate-50 p-3 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-primary/20 leading-relaxed" 
                              rows={3} 
                           />
                        ) : (
                           <div className="text-xs text-slate-600 font-medium leading-relaxed">{methodText}</div>
                        )}
                      </div>

                      {/* Result */}
                      <div className="space-y-2 border-t border-slate-100 pt-4">
                        <h3 className="text-xs font-black uppercase text-slate-800 tracking-widest">Result</h3>
                        {isEditingResults ? (
                           <textarea 
                              value={resultText} 
                              onChange={(e) => setResultText(e.target.value)} 
                              className="w-full text-xs text-slate-600 font-medium bg-slate-50 p-3 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-primary/20 leading-relaxed" 
                              rows={3} 
                           />
                        ) : (
                           <div className="text-xs text-slate-600 font-medium leading-relaxed">{resultText}</div>
                        )}
                        <div className="grid grid-cols-2 gap-4 mt-4">
                          <img src={screenshot1} alt="Website Screenshot 1" className="h-40 w-full object-cover rounded-xl border border-slate-200" />
                          <img src={screenshot2} alt="Website Screenshot 2" className="h-40 w-full object-cover rounded-xl border border-slate-200" />
                        </div>
                      </div>
                    </div>

                    {/* Simulated Poster Generation Area */}
                    <div className="bg-primary/5 border border-primary/20 rounded-[28px] p-6 text-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
                      <div className="space-y-1 text-center md:text-left">
                        <span className="text-[9px] font-black uppercase tracking-widest text-primary block">Ready for Next Step</span>
                        <h5 className="text-sm font-black text-slate-800">Would you like to synthesize this into a Hi-Res Poster?</h5>
                      </div>
                      <button 
                        onClick={() => setPosterStatus('Poster Preview')}
                        className="px-6 py-3 bg-primary text-white rounded-xl font-black text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-md shadow-primary/20 shrink-0 cursor-pointer"
                      >
                        Generate Poster Preview
                      </button>
                    </div>
                  </motion.div>
                )}
            </AnimatePresence>
          </section>
        </>
      )}
    </motion.div>

  );
}
