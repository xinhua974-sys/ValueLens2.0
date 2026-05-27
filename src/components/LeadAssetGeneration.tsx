import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  Layout, 
  Presentation, 
  Share2, 
  Download, 
  Eye, 
  RefreshCw, 
  CheckCircle2,
  FileText,
  Sparkles,
  Send,
  X,
  Palette,
  Radar,
  Users
} from 'lucide-react';

interface Props {
  initialContent?: string;
  onBack: () => void;
  key?: React.Key;
}

type TemplateType = 'poster' | 'deck';

export default function LeadAssetGeneration({ initialContent = '', onBack }: Props) {
  const [stage, setStage] = useState<'content' | 'preview'>('content');
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateType>('poster');
  const [content, setContent] = useState(initialContent);
  const [isGenerating, setIsGenerating] = useState(false);
  const [chatMessage, setChatMessage] = useState('');
  const [isRefining, setIsRefining] = useState(false);
  const [assetVersion, setAssetVersion] = useState(1.2);

  const templates = [
    { id: 'poster' as TemplateType, label: 'Booth Poster', icon: Share2, description: 'TAB Official A0 Portrait Layout' },
    { id: 'deck' as TemplateType, label: 'Presentation Deck', icon: Presentation, description: 'TAB Official 16:9 Slide Master' }
  ];

  const handleGenerate = () => {
    if (!content) return;
    setIsGenerating(true);
    setTimeout(() => {
      setStage('preview');
      setIsGenerating(false);
    }, 1500);
  };

  const handleRefine = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatMessage) return;
    
    setIsRefining(true);
    // Simulate Agent Refinement
    setTimeout(() => {
      setAssetVersion(prev => parseFloat((prev + 0.1).toFixed(1)));
      setIsRefining(false);
      setChatMessage('');
    }, 1200);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="max-w-6xl w-full flex flex-col items-center gap-8 py-8"
    >
      <header className="text-center space-y-3 flex flex-col items-center">
        <div className="inline-block px-4 py-1 bg-white rounded-full border border-secondary/20 text-secondary font-bold text-[10px] tracking-widest uppercase shadow-sm">
          Project Lead Workspace
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
          Asset <span className="text-secondary italic">Generator</span>
        </h1>
        <p className="text-slate-500 text-lg font-medium max-w-2xl">
          {stage === 'content' ? 'Define content structures and select target templates for asset synthesis.' : 'Review generated high-fidelity asset bundles ready for deployment.'}
        </p>
      </header>

      <AnimatePresence mode="wait">
        {stage === 'content' ? (
          <motion.div 
            key="content-stage"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            <section className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-2xl shadow-slate-200/50 flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">Content Baseline</h3>
              </div>
              <textarea 
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Paste synthesized content or draft text here..."
                className="flex-1 w-full bg-slate-50 border-none rounded-[6px] p-8 text-sm font-medium text-slate-600 focus:ring-2 focus:ring-primary/20 min-h-[350px] shadow-inner resize-none leading-relaxed"
              />
            </section>

            <section className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-2xl shadow-slate-200/50 flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary">
                  <Palette className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">Visual Mapping</h3>
              </div>

              <div className="space-y-4 mb-10 flex-1">
                {templates.map(t => (
                  <button
                    key={t.id}
                    onClick={() => setSelectedTemplate(t.id)}
                    className="w-full text-left p-6 rounded-2xl border transition-all flex items-center gap-4 bg-white border-slate-100 hover:border-slate-300"
                  >
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center transition-colors bg-slate-100 text-slate-400">
                      <t.icon className="w-7 h-7" />
                    </div>
                    <div>
                      <div className="text-sm font-black uppercase tracking-tight text-slate-700">
                        {t.label}
                      </div>
                      <p className="text-[10px] font-medium text-slate-400">{t.description}</p>
                    </div>
                  </button>
                ))}
              </div>

              <button
                disabled={!content || isGenerating}
                onClick={handleGenerate}
                className={`w-full py-6 rounded-2xl font-black text-xs uppercase tracking-[0.3em] transition-all flex items-center justify-center gap-4 cursor-pointer ${
                  content 
                  ? 'bg-primary text-white shadow-2xl hover:bg-primary/95 hover:-translate-y-0.5 active:scale-95' 
                  : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                }`}
              >
                {isGenerating ? (
                  <>
                    <RefreshCw className="w-5 h-5 animate-spin shrink-0" />
                    <span>Generating Assets...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5 shrink-0" />
                    <span>Generate Asset</span>
                  </>
                )}
              </button>
            </section>
          </motion.div>
        ) : (
          <motion.div 
            key="preview-stage"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full flex flex-col items-center gap-8"
          >
            {/* Mock Preview Area */}
            <div className="bg-slate-50 px-10 pt-16 pb-10 rounded-[48px] shadow-2xl relative group max-w-4xl w-full border border-slate-100/80">
              <div className="absolute top-6 left-1/2 -translate-x-1/2 flex items-center gap-4">
                 <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                 <span className="text-[10px] font-black text-slate-800 uppercase tracking-[0.4em] opacity-40">Draft Version {assetVersion} Preview</span>
              </div>
              
              <div className="absolute top-6 right-10 flex gap-2">
                <span className="px-3 py-1 bg-primary text-white rounded text-[8px] font-black uppercase tracking-widest">Production Ready</span>
              </div>

              <div className={`${selectedTemplate === 'poster' ? 'aspect-[1/1.41] max-w-lg mx-auto' : 'aspect-video'} bg-white rounded-xl shadow-inner overflow-hidden relative group/preview transition-all duration-700 p-6 flex flex-col gap-4 border border-slate-200`}>
                 {/* Header Area */}
                 <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-start">
                       <span className="text-[6px] font-bold text-slate-400">Microsoft Research Asia TAB Meeting 2026</span>
                       <div className="w-8 h-8 rounded-full border-2 border-primary flex items-center justify-center p-1">
                          <div className="w-full h-full bg-primary rounded-full" />
                       </div>
                    </div>
                    <h1 className="text-xl font-black text-secondary text-center leading-tight tracking-tight px-4">
                       Know Your Value: A Conversational Dynamic Value Assessment Framework
                    </h1>
                 </div>

                 {/* Motivation Section */}
                 <div className="space-y-1">
                    <div className="flex items-center gap-2">
                       <div className="bg-secondary px-3 py-0.5 rounded-full text-white text-[7px] font-black uppercase tracking-widest">Motivation</div>
                       <div className="flex-1 h-px bg-secondary/20" />
                       <span className="text-[7px] font-bold text-secondary">Bridging Human & LLM Value Assessment</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 py-1">
                       <div className="bg-slate-50 p-2 rounded-lg border border-slate-100 flex flex-col gap-1">
                          <div className="text-[5px] font-bold leading-tight">Shared value-space evaluation is necessary</div>
                          <div className="aspect-square bg-white rounded border border-slate-100 flex items-center justify-center">
                             <div className="w-4 h-4 border border-slate-200 rotate-45" />
                          </div>
                       </div>
                       <div className="col-span-2 grid grid-cols-2 gap-2">
                          <div className="bg-rose-50/50 p-2 rounded-lg border border-rose-100 flex flex-col gap-1 items-center text-center">
                             <Users className="w-3 h-3 text-rose-400" />
                             <div className="text-[6px] font-black text-rose-900">Human-centered</div>
                             <div className="text-[5px] text-rose-700 opacity-70">Expert-Designed Questionnaire</div>
                          </div>
                          <div className="bg-rose-50/50 p-2 rounded-lg border border-rose-100 flex flex-col gap-1 items-center text-center">
                             <Sparkles className="w-3 h-3 text-rose-400" />
                             <div className="text-[6px] font-black text-rose-900">AI-community</div>
                             <div className="text-[5px] text-rose-700 opacity-70">Large Scale Benchmark</div>
                          </div>
                       </div>
                    </div>
                 </div>

                 {/* Method Section */}
                 <div className="space-y-1 flex-1">
                    <div className="flex items-center gap-2">
                       <div className="bg-secondary px-3 py-0.5 rounded-full text-white text-[7px] font-black uppercase tracking-widest">Method</div>
                       <div className="flex-1 h-px bg-secondary/20" />
                       <span className="text-[7px] font-bold text-secondary">Adaptive, Psychometrics-Driven Conversation</span>
                    </div>
                    <div className="text-[6px] font-black text-slate-800 mt-1 px-1">DOCAV — Dynamic Optimization for Conversational Assessment of Values</div>
                    
                    <div className="grid grid-cols-2 gap-3 mt-1">
                       <div className="space-y-2">
                          <div className="bg-white border border-slate-100 rounded-lg p-2 flex flex-col items-center gap-2">
                             <div className="flex justify-between w-full">
                                <div className="w-4 h-4 bg-slate-100 rounded-full" />
                                <RefreshCw className="w-3 h-3 text-slate-300" />
                                <div className="w-4 h-4 bg-slate-100 rounded-full" />
                             </div>
                             <div className="text-[5px] font-bold text-slate-400 text-center">Model & update value</div>
                          </div>
                          <div className="aspect-square bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center p-2">
                             <Radar className="w-full h-full text-secondary opacity-30" />
                          </div>
                       </div>
                       <div className="flex flex-col gap-2">
                          <div className="bg-white border border-slate-200 border-dashed rounded-lg p-2 text-center flex flex-col gap-1 items-center">
                             <div className="text-[6px] font-black text-slate-800 italic">Nominal Response Model</div>
                             <div className="w-full h-4 bg-slate-50 rounded flex items-center justify-center text-[5px] font-mono text-slate-400">p(v) = exp(a v + b) / Σ...</div>
                          </div>
                          <div className="flex-1 bg-slate-50 rounded-lg p-2 flex flex-col gap-2">
                             <div className="h-full border-l-2 border-secondary/20 pl-2 flex flex-col justify-between">
                                <div className="text-[5px] font-bold"><span className="text-secondary">Fast:</span> only need 10 turns</div>
                                <div className="text-[5px] font-bold"><span className="text-secondary">Natural:</span> continuous dialogue</div>
                                <div className="text-[5px] font-bold"><span className="text-secondary">Personalized:</span> custom questions</div>
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>

                 {/* Result Section */}
                 <div className="space-y-1">
                    <div className="flex items-center gap-2">
                       <div className="bg-secondary px-3 py-0.5 rounded-full text-white text-[7px] font-black uppercase tracking-widest">Result</div>
                       <div className="flex-1 h-px bg-secondary/20" />
                       <span className="text-[7px] font-bold text-secondary">Faster, More Stable & Interaction Design</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mt-1">
                       <div className="aspect-[4/3] bg-blue-50/30 rounded-lg border border-blue-100 p-2 overflow-hidden flex flex-col gap-1">
                          <div className="w-full h-2 bg-white rounded-full" />
                          <div className="w-2/3 h-2 bg-blue-500/20 rounded-full self-end" />
                          <div className="w-3/4 h-2 bg-white rounded-full" />
                       </div>
                       <div className="aspect-[4/3] bg-white rounded-lg border border-slate-100 p-2 flex flex-col items-center justify-center gap-2">
                          <div className="w-8 h-8 rounded-full border-2 border-secondary flex items-center justify-center p-1">
                             <div className="w-full h-full bg-secondary rounded-full opacity-20" />
                          </div>
                          <div className="flex gap-1">
                             <div className="px-1.5 py-0.5 bg-rose-100 text-rose-500 rounded-[2px] text-[4px] font-black">Achievement</div>
                             <div className="px-1.5 py-0.5 bg-blue-100 text-blue-500 rounded-[2px] text-[4px] font-black">Power</div>
                          </div>
                       </div>
                    </div>
                 </div>

                 {/* Footer Area */}
                 <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between">
                    <div className="text-[5px] font-bold text-slate-400">Contact: Lead Researcher (v-researcher@tab2026.com)</div>
                    <div className="w-6 h-6 bg-slate-200 rounded p-0.5">
                       <div className="w-full h-full bg-white rounded-sm border-[0.5px] border-slate-300" />
                    </div>
                 </div>

                 {/* Focus view overlay */}
                 <div className="absolute inset-0 bg-black/0 group-hover/preview:bg-black/5 transition-all flex items-center justify-center opacity-0 group-hover/preview:opacity-100">
                    <button className="px-10 py-4 bg-white text-slate-900 rounded-2xl font-black text-xs uppercase tracking-widest shadow-2xl flex items-center gap-3 border border-slate-100 hover:scale-105 active:scale-95 transition-all">
                       <Eye className="w-5 h-5" />
                       <span>High-Res Focus</span>
                    </button>
                 </div>
              </div>
            </div>

            {/* AI Narrator Refinement panel */}
            <section className="w-full max-w-4xl bg-white border border-slate-100 rounded-[32px] p-6 shadow-xl flex flex-col gap-4">
               <div className="flex items-center gap-2 px-2">
                 <Sparkles className="w-4 h-4 text-primary" />
                 <span className="text-[10px] font-black text-slate-700 uppercase tracking-widest">Asset Refinement Console</span>
               </div>

               <form onSubmit={handleRefine} className="relative">
                  <input 
                    type="text" 
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                    placeholder="Describe adjustments (e.g., 'Make the header more aggressive', 'Add focus to efficiency data')..."
                    className="w-full bg-slate-50 border border-slate-200/85 rounded-[6px] py-5 pl-8 pr-16 text-sm font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-inner"
                  />
                  <button 
                    type="submit"
                    disabled={!chatMessage || isRefining}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white hover:scale-105 active:scale-95 transition-all disabled:opacity-30 disabled:grayscale ring-4 ring-white"
                  >
                    {isRefining ? <RefreshCw className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                  </button>
               </form>
               <p className="px-2 text-[8px] font-bold text-slate-500 uppercase tracking-widest">
                 Agent tweaks fabrication parameters based on natural language constraints.
               </p>
            </section>

            <div className="flex items-center gap-6">
              <button 
                onClick={() => setStage('content')}
                className="px-12 py-5 bg-white border border-slate-200 text-slate-500 rounded-2xl font-bold text-xs shadow-sm hover:border-primary hover:text-primary transition-all uppercase tracking-[0.2em] flex items-center gap-3"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Adjust Mapping</span>
              </button>
              <button 
                className="px-16 py-5 value-gradient rounded-2xl text-white font-black text-xs shadow-2xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all flex items-center gap-4 group uppercase tracking-[0.2em]"
              >
                <span>Download Assets</span>
                <Download className="w-6 h-6 group-hover:translate-y-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="pt-8 w-full border-t border-slate-100 flex flex-col items-center gap-6">
        <button 
          onClick={onBack}
          className="flex items-center gap-3 text-slate-400 hover:text-primary transition-colors text-xs font-black uppercase tracking-[0.2em]"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Dashboard</span>
        </button>
      </footer>
    </motion.div>
  );
}

