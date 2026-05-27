import React from 'react';
import { Map, Users, History, ArrowLeft, Swords, Plus, FileText, Sparkles, Wand2 } from 'lucide-react';
import { motion } from 'motion/react';

interface Props {
  designerSubStage: 'baseline' | 'manuscripts';
  setDesignerSubStage: (stage: 'baseline' | 'manuscripts') => void;
  topic: string;
  setTopic: (val: string) => void;
  targetAudience: string;
  setTargetAudience: (val: string) => void;
  strategy: string;
  setStrategy: (val: string) => void;
  onBaseline: () => void;
  onEvaluation: () => void;
  onBack: () => void;
  key?: React.Key;
}

export default function Stage1Discovery({ 
  designerSubStage, 
  setDesignerSubStage, 
  topic,
  setTopic,
  targetAudience,
  setTargetAudience,
  strategy,
  setStrategy,
  onBaseline, 
  onEvaluation, 
  onBack 
}: Props) {
  const fragments = [
    { id: 'A', name: 'tech_v1.png', img: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=1000' },
    { id: 'B', name: 'abstract_node.jpg', img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000' },
    { id: 'C', name: 'global_network.jpg', img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000' },
    { id: 'D', name: 'silicon_edge.jpg', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000' },
  ];

  const [useAlignment, setUseAlignment] = React.useState(true);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-6xl w-full flex flex-col items-center gap-10"
    >
      <header className="text-center space-y-3 flex flex-col items-center">
        <div className="inline-block px-4 py-1 bg-white rounded-full border border-primary/20 text-primary font-bold text-[10px] tracking-widest uppercase shadow-sm">
          Designer Workspace
        </div>
        
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
          {designerSubStage === 'baseline' ? (
            <>Visual Inspiration <span className="text-primary italic">Generator</span></>
          ) : (
            <>Creative Visual <span className="text-primary italic">Evaluation</span></>
          )}
        </h1>
        
        <p className="text-slate-500 text-lg font-medium max-w-2xl">
          {designerSubStage === 'baseline' 
            ? 'Define core strategic intent and target audience demographics to guide your visual direction.' 
            : 'Evaluate cognitive and thematic resonance across manuscript drafts to ensure alignment.'
          }
        </p>
      </header>

      <div className="w-full max-w-2xl mx-auto">
        {designerSubStage === 'baseline' ? (
          /* Branch A: Inspiration Generator */
          <section className="bg-white rounded-[40px] p-10 border border-slate-100 shadow-xl relative group transition-all hover:shadow-2xl flex flex-col h-full bg-linear-to-br from-white to-slate-50/50">
            <div className="absolute -top-5 left-10 w-12 h-12 bg-value-gold rounded-2xl flex items-center justify-center text-white shadow-lg transform -rotate-3 group-hover:rotate-0 transition-transform">
              <Sparkles className="w-6 h-6" />
            </div>
            
            <div className="mb-8">
              <h3 className="text-2xl font-black text-slate-800 tracking-tight">Inspiration Generator</h3>
              <p className="text-slate-400 text-sm font-medium">Define the core cognitive targets for TAB 2026</p>
            </div>

            <div className="space-y-6 flex-1">
              <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm space-y-4">
                <div>
                  <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest mb-2 block">TAB Topic</label>
                  <input 
                    type="text" 
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    placeholder="Theme"
                    className="w-full bg-slate-50 border-none rounded-[6px] p-4 text-sm font-bold text-slate-700 focus:ring-2 focus:ring-primary/20 transition-all shadow-inner"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest mb-2 block">Target Audience</label>
                  <input 
                    type="text" 
                    value={targetAudience}
                    onChange={(e) => setTargetAudience(e.target.value)}
                    placeholder="Target Audience"
                    className="w-full bg-slate-50 border-none rounded-[6px] p-4 text-sm font-bold text-slate-700 focus:ring-2 focus:ring-primary/20 transition-all shadow-inner"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest mb-2 block">Project Strategy</label>
                  <textarea 
                    className="w-full bg-slate-50 border-none rounded-[6px] p-4 text-sm font-medium focus:ring-2 focus:ring-primary/20 transition-all min-h-[120px] placeholder:text-slate-300 resize-none shadow-inner" 
                    value={strategy}
                    onChange={(e) => setStrategy(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <button 
              onClick={onBaseline}
              className="mt-8 w-full py-5 bg-primary rounded-2xl text-white font-black text-xs uppercase tracking-[0.2em] shadow-xl hover:bg-primary/95 transition-all flex items-center justify-center gap-3 group cursor-pointer"
            >
              <span>Get Inspiration</span>
              <Wand2 className="w-4 h-4 group-hover:animate-pulse shrink-0 text-white" />
            </button>


          </section>
        ) : (
          /* Branch B: Visual Evaluation */
          <section className="bg-white rounded-[40px] p-10 border border-slate-100 shadow-xl relative group transition-all hover:shadow-2xl flex flex-col h-full bg-linear-to-br from-white to-slate-50/50">
            <div className="absolute -top-5 left-10 w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white shadow-lg transform rotate-3 group-hover:rotate-0 transition-transform">
              <FileText className="w-6 h-6" />
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-black text-slate-800 tracking-tight leading-tight">Creative Evaluation</h3>
              <p className="text-slate-400 text-sm font-medium">Evaluate resonance across multiple design fragments</p>
            </div>

            <div className="space-y-4 flex-1">
              <div className="grid grid-cols-2 gap-4">
                {fragments.map((f, i) => (
                  <div key={i} className="aspect-video bg-slate-50 rounded-2xl border border-slate-150 p-2 relative group/item overflow-hidden">
                    <img src={f.img} className="w-full h-full object-cover rounded-2xl opacity-90 group-hover/item:opacity-100 transition-opacity" referrerPolicy="no-referrer" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="px-2 py-1 bg-white/90 backdrop-blur-md rounded text-[8px] font-black text-slate-700 uppercase tracking-widest border border-slate-100 shadow-sm">{f.name} (Draft {f.id})</span>
                    </div>
                  </div>
                ))}
                <div className="col-span-2 mt-4 flex items-center gap-3 px-2">
                  <input 
                    type="checkbox" 
                    id="alignment-toggle"
                    checked={useAlignment}
                    onChange={(e) => setUseAlignment(e.target.checked)}
                    className="w-4 h-4 rounded border-slate-200 bg-slate-50 text-primary focus:ring-primary/40 focus:ring-offset-white"
                  />
                  <label htmlFor="alignment-toggle" className="text-[10px] font-bold text-slate-500 uppercase tracking-widest cursor-pointer select-none">
                    Value alignment with TAB Topic & Project Strategy
                  </label>
                </div>
              </div>
            </div>

            <button 
              onClick={onEvaluation}
              className="mt-8 w-full py-5 value-gradient rounded-2xl text-white font-black text-xs uppercase tracking-[0.2em] shadow-xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 group"
            >
              <span>Run Diagnostic Report</span>
              <Sparkles className="w-4 h-4 group-hover:animate-pulse" />
            </button>


          </section>
        )}
      </div>


    </motion.div>
  );
}
