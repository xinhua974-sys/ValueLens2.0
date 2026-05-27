import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  Sparkles, 
  Presentation, 
  Layout, 
  Palette, 
  ChevronRight, 
  ChevronLeft, 
  Check, 
  Download, 
  Edit3, 
  RefreshCw, 
  Send, 
  Sliders, 
  FileText,
  Eye,
  Layers,
  HelpCircle
} from 'lucide-react';

interface Props {
  onBack: () => void;
}

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  content: string[];
  graphicType: 'diagram' | 'icons' | 'quote' | 'metrics';
}

export default function LeadKeynoteWorkspace({ onBack }: Props) {
  const [deckTheme, setDeckTheme] = useState('Classic Azure');
  const [presenterRole, setPresenterRole] = useState('Senior Strategy Lead');
  const [deckTitle, setDecktTitle] = useState('Dynamic Value Orchestration in Large-Scale Frontier Systems');
  const [audienceInterest, setAudienceInterest] = useState('Multi-Agent Core & Coordination Governance');

  const [isGenerating, setIsGenerating] = useState(false);
  const [showSlideshow, setShowSlideshow] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // Slides configuration
  const [slides, setSlides] = useState<Slide[]>([
    {
      id: 1,
      title: "Core Paradigm Shift",
      subtitle: "Moving beyond static alignments to continuous, conversational feedback loops.",
      content: [
        "Traditional benchmarks suffer from standard static test-quiz constraints.",
        "Dialogue-optimization captures subtle personal nuance in real time.",
        "Interactive IRT model delivers 4x faster parameter convergence."
      ],
      graphicType: 'diagram'
    },
    {
      id: 2,
      title: "Cognitive Response Modeling",
      subtitle: "The mathematical backbone of conversational psychometrics.",
      content: [
        "Nominal Response Model calculates immediate probability density curves.",
        "Open-ended natural dialogues are translated via prompt-entropy tokens.",
        "Dynamic updates happen seamlessly in background threat threads."
      ],
      graphicType: 'metrics'
    },
    {
      id: 3,
      title: "Strategic Safety Horizon",
      subtitle: "Why conversational validation is critical for alignment governance.",
      content: [
        "Multi-agent trust spaces require shared semantic values.",
        "Minimizes structural risks in reinforcement learning from human feedback.",
        "Paves way for robust pluralistic standard governance across cultures."
      ],
      graphicType: 'icons'
    }
  ]);

  const [activeThemeColor, setActiveThemeColor] = useState('indigo'); // indigo, emerald, fuchsia, slate

  const [editingSlideId, setEditingSlideId] = useState<number | null>(null);
  const [editedTitle, setEditedTitle] = useState('');
  const [editedSubtitle, setEditedSubtitle] = useState('');

  const handleStartGeneration = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setShowSlideshow(true);
    }, 1500);
  };

  const handleSaveSlideChanges = (id: number) => {
    setSlides(prev => prev.map(s => {
      if (s.id === id) {
        return { ...s, title: editedTitle, subtitle: editedSubtitle };
      }
      return s;
    }));
    setEditingSlideId(null);
  };

  const handleStartEdit = (slide: Slide) => {
    setEditingSlideId(slide.id);
    setEditedTitle(slide.title);
    setEditedSubtitle(slide.subtitle);
  };

  const getThemeGradient = () => {
    switch (activeThemeColor) {
      case 'indigo': return 'from-indigo-600 via-primary to-indigo-800';
      case 'emerald': return 'from-emerald-600 via-teal-600 to-emerald-800';
      case 'fuchsia': return 'from-fuchsia-600 via-rose-600 to-fuchsia-800';
      case 'slate': return 'from-slate-700 via-slate-800 to-slate-900';
      default: return 'from-primary to-secondary';
    }
  };

  const getThemeTextClass = () => {
    switch (activeThemeColor) {
      case 'indigo': return 'text-indigo-600';
      case 'emerald': return 'text-emerald-600';
      case 'fuchsia': return 'text-fuchsia-600';
      case 'slate': return 'text-slate-800';
      default: return 'text-primary';
    }
  };

  const getThemeBgClass = () => {
    switch (activeThemeColor) {
      case 'indigo': return 'bg-indigo-50 text-indigo-700 border-indigo-100';
      case 'emerald': return 'bg-emerald-50 text-emerald-700 border-emerald-100';
      case 'fuchsia': return 'bg-rose-50 text-rose-700 border-rose-100';
      case 'slate': return 'bg-slate-100 text-slate-800 border-slate-200';
      default: return 'bg-primary/5 text-primary border-primary/10';
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      className="max-w-5xl w-full flex flex-col items-center gap-8 py-4 px-2"
    >
      <header className="text-center space-y-3 flex flex-col items-center">
        <div className="inline-block px-4 py-1 bg-white rounded-full border border-secondary/20 text-secondary font-bold text-[10px] tracking-widest uppercase shadow-sm">
          Keynote Workspace
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
          Value <span className="text-secondary italic">Keynote Generator</span>
        </h1>
        <p className="text-slate-500 text-sm md:text-base font-medium max-w-2xl">
          Instantly draft, visualize, and edit 16:9 presentation slide masters. Adapt narrative sequences seamlessly to peak MSRA TAB benchmarks.
        </p>
      </header>

      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* INPUT OUTLINE FORM: Left Side */}
        <section className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-xl lg:col-span-4 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary">
              <Presentation className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-black text-slate-800 tracking-tight">Presentation Blueprint</h3>
              <p className="text-slate-400 text-xs font-medium">Design structural configurations</p>
            </div>
          </div>

          <form onSubmit={handleStartGeneration} className="space-y-4">
            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase text-slate-400 tracking-wider">Deck Title (Theme)</label>
              <textarea 
                value={deckTitle}
                onChange={(e) => setDecktTitle(e.target.value)}
                rows={2}
                className="w-full bg-slate-50 border border-slate-200 text-xs font-bold text-slate-700 p-3 rounded-xl outline-none focus:ring-2 focus:ring-secondary/25 focus:bg-white resize-none"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase text-slate-400 tracking-wider">Strategic Role</label>
              <input 
                type="text" 
                value={presenterRole}
                onChange={(e) => setPresenterRole(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 text-xs font-bold text-slate-700 p-3 rounded-xl outline-none focus:ring-2 focus:ring-secondary/25 focus:bg-white"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase text-slate-400 tracking-wider">Target Focus Audience</label>
              <input 
                type="text" 
                value={audienceInterest}
                onChange={(e) => setAudienceInterest(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 text-xs font-bold text-slate-700 p-3 rounded-xl outline-none focus:ring-2 focus:ring-secondary/25 focus:bg-white"
              />
            </div>

            {/* Visual Color Presets Selector */}
            <div className="space-y-2 pt-2">
              <label className="text-[10px] font-black uppercase text-slate-400 tracking-wider block">Deck Palette Presets</label>
              <div className="grid grid-cols-4 gap-2">
                {[
                  { id: 'indigo', label: 'Azure', bg: 'bg-indigo-600' },
                  { id: 'emerald', label: 'Forest', bg: 'bg-emerald-600' },
                  { id: 'fuchsia', label: 'Elegance', bg: 'bg-fuchsia-600' },
                  { id: 'slate', label: 'Cosmo', bg: 'bg-slate-800' }
                ].map((th) => (
                  <button 
                    type="button" 
                    key={th.id}
                    onClick={() => setActiveThemeColor(th.id)}
                    className={`p-2.5 rounded-xl border flex flex-col items-center gap-1.5 transition-all text-[8.5px] font-black uppercase tracking-wider cursor-pointer ${
                      activeThemeColor === th.id 
                        ? 'border-indigo-500 bg-indigo-50/100 text-indigo-700 ring-2 ring-indigo-500/30' 
                        : 'border-slate-100 bg-white text-slate-500 hover:border-slate-300'
                    }`}
                  >
                    <span className={`w-3.5 h-3.5 rounded-full ${th.bg} inline-block`} />
                    <span>{th.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              disabled={isGenerating}
              className="w-full mt-4 py-4 rounded-xl font-black text-xs uppercase tracking-widest bg-secondary text-white hover:bg-secondary/95 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-secondary/15"
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Configuring Slides...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>Generate Keynote Deck</span>
                </>
              )}
            </button>
          </form>
        </section>

        {/* WORKSPACE PREVIEW/SLIDESHOW: Right Side */}
        <section className="lg:col-span-8 flex flex-col gap-6">
          <AnimatePresence mode="wait">
            {!showSlideshow ? (
              <motion.div 
                key="empty-deck"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="bg-slate-100 rounded-[32px] border-2 border-dashed border-slate-200 p-12 text-center flex flex-col justify-center items-center gap-4 min-h-[440px] w-full"
              >
                <div className="w-16 h-16 bg-white border border-slate-200 text-slate-300 rounded-3xl flex items-center justify-center shadow-sm">
                  <Layout className="w-8 h-8" />
                </div>
                <div className="max-w-sm space-y-2">
                  <h4 className="text-base font-black text-slate-700">Presentation Deck Workspace</h4>
                  <p className="text-xs text-slate-400 leading-relaxed font-medium">
                    Configure your slide titles and design presets in the selector sidebar to launch the live 16:9 interactive generator.
                  </p>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key="slideshow-panel"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className="space-y-6 w-full"
              >
                {/* Visual Slide Master 16:9 Window */}
                <div className="bg-slate-900 rounded-[36px] p-6 shadow-2xl border border-slate-800 relative group overflow-hidden">
                  
                  {/* Top slide bar decoration */}
                  <div className="flex justify-between items-center text-[10px] text-slate-400/80 mb-4 px-2 tracking-widest font-mono">
                    <span className="font-bold">MICROSOFT RESEARCH MSRA TAB 2026</span>
                    <span>SLIDE {currentSlideIndex + 1} OF {slides.length}</span>
                  </div>

                  {/* High fidelity 16:9 Slide Canvas */}
                  <div className={`aspect-video w-full rounded-2xl p-8 bg-linear-to-br ${getThemeGradient()} text-white flex flex-col justify-between relative shadow-inner overflow-hidden transition-all duration-500`}>
                    
                    {/* Semi-transparent grid backdrop */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
                    
                    {/* Top slide indicator bubble */}
                    <div className="flex justify-between items-start relative z-10">
                      <div>
                        <span className="text-[9px] font-black uppercase tracking-widest bg-white/10 px-2 py-0.5 rounded border border-white/10 inline-block">
                          {deckTheme} Master Sequence
                        </span>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20 p-2">
                        <Presentation className="w-full h-full text-white" />
                      </div>
                    </div>

                    {/* Middle Core Content Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center relative z-10 flex-1 my-4">
                      
                      {/* Text Column */}
                      <div className="md:col-span-7 space-y-3">
                        <h2 className="text-2xl font-black tracking-tight leading-snug drop-shadow-sm">
                          {slides[currentSlideIndex].title}
                        </h2>
                        <p className="text-xs text-white/80 font-medium leading-relaxed drop-shadow-xs italic">
                          "{slides[currentSlideIndex].subtitle}"
                        </p>
                        
                        <div className="space-y-2 pt-2">
                          {slides[currentSlideIndex].content.map((point, i) => (
                            <div key={i} className="flex gap-2.5 items-start text-[11px] font-medium text-white/90">
                              <span className="w-1.5 h-1.5 bg-white rounded-full mt-1.5 shrink-0" />
                              <span className="leading-normal">{point}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Graphic Sim Column */}
                      <div className="md:col-span-5 h-full min-h-[140px] bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col items-center justify-center text-center relative overflow-hidden backdrop-blur-md">
                        {slides[currentSlideIndex].graphicType === 'diagram' && (
                          <div className="space-y-3 w-full">
                            <div className="flex justify-center gap-2">
                              <span className="w-7 h-7 bg-white/20 rounded-lg flex items-center justify-center border border-white/25 text-xs font-bold">1</span>
                              <span className="text-white/40 self-center">→</span>
                              <span className="w-7 h-7 bg-white/30 rounded-lg flex items-center justify-center border border-white/35 text-xs font-bold">2</span>
                              <span className="text-white/40 self-center">→</span>
                              <span className="w-7 h-7 bg-white/40 rounded-lg flex items-center justify-center border border-white/45 text-xs font-bold font-mono">N</span>
                            </div>
                            <span className="text-[9px] font-black uppercase tracking-widest block text-white/60">Dynamic Alignment Path</span>
                          </div>
                        )}
                        {slides[currentSlideIndex].graphicType === 'metrics' && (
                          <div className="space-y-2 w-full">
                            <div className="text-2xl font-black tracking-tighter text-white">92%</div>
                            <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden">
                              <div className="bg-white h-full rounded-full" style={{ width: '92%' }} />
                            </div>
                            <span className="text-[9px] font-black uppercase tracking-widest block text-white/60">Entropy Rate Optimized</span>
                          </div>
                        )}
                        {slides[currentSlideIndex].graphicType === 'icons' && (
                          <div className="space-y-2 w-full flex flex-col items-center">
                            <Sliders className="w-10 h-10 text-white/90 animate-pulse" />
                            <span className="text-[9px] font-black uppercase tracking-widest text-white/60">Governance Constraints</span>
                          </div>
                        )}
                      </div>

                    </div>

                    {/* Bottom Status bar */}
                    <div className="flex justify-between items-center text-[8.5px] text-white/60 border-t border-white/10 pt-2 font-mono relative z-10">
                      <span>PRESENTER: {presenterRole}</span>
                      <span>FOCUS: {audienceInterest}</span>
                    </div>

                  </div>

                  {/* Slideshow Control Buttons */}
                  <div className="flex items-center justify-between mt-4 px-2">
                    <button 
                      onClick={() => setCurrentSlideIndex(p => Math.max(0, p - 1))}
                      disabled={currentSlideIndex === 0}
                      className="p-2.5 bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 disabled:opacity-30 rounded-xl transition-colors cursor-pointer"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    
                    <div className="flex gap-1.5">
                      {slides.map((_, i) => (
                        <button 
                          key={i}
                          onClick={() => setCurrentSlideIndex(i)}
                          className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${currentSlideIndex === i ? 'bg-primary scale-110 w-6' : 'bg-slate-700 hover:bg-slate-500'}`}
                        />
                      ))}
                    </div>

                    <button 
                      onClick={() => setCurrentSlideIndex(p => Math.min(slides.length - 1, p + 1))}
                      disabled={currentSlideIndex === slides.length - 1}
                      className="p-2.5 bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 disabled:opacity-30 rounded-xl transition-colors cursor-pointer"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>

                </div>

                {/* Edit Slide Content Form */}
                <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-xl space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Sliders className="w-4 h-4 text-primary" />
                      <span className="text-xs font-black text-slate-700 uppercase tracking-widest">Active Slide Customizer</span>
                    </div>
                  </div>

                  {editingSlideId === slides[currentSlideIndex].id ? (
                    <div className="space-y-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="text-[10px] font-black uppercase text-slate-400">Header Title</label>
                          <input 
                            type="text" 
                            value={editedTitle} 
                            onChange={(e) => setEditedTitle(e.target.value)} 
                            className="w-full text-xs font-bold text-slate-700 p-2.5 bg-white border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-primary/25"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] font-black uppercase text-slate-400">Slide Subtitle / Concept</label>
                          <input 
                            type="text" 
                            value={editedSubtitle} 
                            onChange={(e) => setEditedSubtitle(e.target.value)} 
                            className="w-full text-xs font-bold text-slate-705 p-2.5 bg-white border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-primary/25"
                          />
                        </div>
                      </div>
                      <div className="flex justify-end gap-2 pt-2">
                        <button 
                          onClick={() => setEditingSlideId(null)}
                          className="px-4 py-2 text-xs font-bold text-slate-500 hover:text-slate-700 cursor-pointer"
                        >
                          Cancel
                        </button>
                        <button 
                          onClick={() => handleSaveSlideChanges(slides[currentSlideIndex].id)}
                          className="px-5 py-2 text-xs font-black uppercase tracking-widest bg-emerald-500 hover:bg-emerald-600 rounded-xl text-white flex items-center gap-1 cursor-pointer"
                        >
                          <Check className="w-3.5 h-3.5" />
                          <span>Update Slide</span>
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100">
                      <div className="space-y-1">
                        <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 block">Editable Node Content</span>
                        <h4 className="text-xs font-bold text-slate-700 max-w-md">"{slides[currentSlideIndex].title}: {slides[currentSlideIndex].subtitle}"</h4>
                      </div>
                      <button 
                        onClick={() => handleStartEdit(slides[currentSlideIndex])}
                        className="px-4 py-2 bg-white border border-slate-200 text-slate-600 rounded-xl text-xs font-bold hover:scale-105 active:scale-95 transition-all text-primary border-primary/20 flex items-center gap-2 cursor-pointer"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                        <span>Customize Content</span>
                      </button>
                    </div>
                  )}

                  {/* Core Export Actions */}
                  <div className="pt-2 flex justify-end gap-3">
                    <button className="px-6 py-3 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl text-xs font-black uppercase tracking-widest text-slate-600 flex items-center gap-2 cursor-pointer">
                      <span>Reset Layout Outline</span>
                    </button>
                    <button className="px-8 py-3 bg-primary text-white rounded-xl text-xs font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-md shadow-primary/20 flex items-center gap-2 cursor-pointer">
                      <Download className="w-4 h-4" />
                      <span>Download PPT Deck (16:9)</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

      </div>

      <footer className="pt-8 w-full border-t border-slate-100 flex flex-col items-center gap-6">
        <button 
          onClick={onBack}
          className="flex items-center gap-3 text-slate-400 hover:text-primary transition-colors text-xs font-black uppercase tracking-[0.2em] cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Speaker Workspace Selection</span>
        </button>
      </footer>
    </motion.div>
  );
}
