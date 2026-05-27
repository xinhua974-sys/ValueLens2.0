import React from 'react';
import { Plus, FileText, ArrowLeft, Swords } from 'lucide-react';
import { motion } from 'motion/react';

interface Props {
  onNext: () => void;
  onBack: () => void;
  key?: React.Key;
}

export default function StageManuscriptUpload({ onNext, onBack }: Props) {
  const fragments = [
    { id: 'A', name: 'tech_v1.png', img: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=1000', color: 'bg-secondary/10 text-secondary' },
    { id: 'B', name: 'abstract_node.jpg', img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000', color: 'bg-primary/10 text-primary' },
    { id: 'C', name: 'global_network_v2.png', img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000', color: 'bg-blue-500/10 text-blue-500' },
    { id: 'D', name: 'silicon_edge_final.jpg', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000', color: 'bg-orange-500/10 text-orange-500' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="max-w-4xl w-full flex flex-col items-center gap-8 py-8"
    >
      <header className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
          Creative <span className="text-primary italic">Evaluation</span>
        </h1>
        <p className="text-slate-500 text-lg font-medium max-w-lg mx-auto">
          Upload up to 4 design fragments to compare against the inspiration generator profile.
        </p>
      </header>

      <section className="bg-white rounded-3xl p-10 border border-slate-100 shadow-xl shadow-slate-200/50 relative group transition-all w-full max-w-2xl">
        <div className="absolute -top-4 left-8 w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-md transform -rotate-6 group-hover:rotate-0 transition-transform">
          <FileText className="w-5 h-5" />
        </div>
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-slate-800 tracking-tight">Design Fragments</h3>
            <p className="text-slate-400 text-sm font-medium">Multiple variants for cognitive analysis</p>
          </div>
          <button className="flex items-center gap-2 p-2 px-4 bg-primary text-white rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
            <Plus className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-widest">Add Fragment</span>
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {fragments.map((frag) => (
            <div key={frag.id} className="group/file w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 flex items-center gap-4 transition-all hover:border-primary/20 hover:bg-white hover:shadow-md">
              <div className="w-16 h-20 rounded-xl shadow-sm border border-white shrink-0 overflow-hidden relative">
                <img 
                  src={frag.img} 
                  alt={frag.name} 
                  className="w-full h-full object-cover group-hover/file:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-slate-700 truncate">{frag.name}</p>
                <span className={`px-2 py-0.5 ${frag.color} text-[8px] font-black uppercase rounded mt-1.5 inline-block`}>
                  Draft {frag.id}
                </span>
              </div>
              <button className="text-[10px] font-bold text-slate-300 hover:text-red-500 transition-colors uppercase tracking-widest">Remove</button>
            </div>
          ))}
        </div>
      </section>

      <div className="flex flex-col items-center gap-8 w-full pt-8 border-t border-slate-100">
        <div className="flex gap-2 w-32">
          <div className="h-1 flex-1 bg-primary rounded-full"></div>
          <div className="h-1 flex-1 bg-primary rounded-full"></div>
          <div className="h-1 flex-1 bg-primary rounded-full"></div>
          <div className="h-1 flex-1 bg-slate-200 rounded-full"></div>
          <div className="h-1 flex-1 bg-slate-200 rounded-full"></div>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={onBack}
            className="w-14 h-14 rounded-full border border-slate-200 bg-white text-slate-400 flex items-center justify-center hover:border-primary hover:text-primary transition-all shadow-sm group"
          >
            <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={onNext}
            className="px-12 py-4 value-gradient rounded-full text-white font-bold text-sm shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-3 group uppercase tracking-widest"
          >
            <span>Generate Diagnostic Report</span>
            <Swords className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        <p className="text-primary font-bold tracking-[0.2em] text-[10px] uppercase opacity-70">Stage 3 of 5: Fragment Ingestion</p>
      </div>
    </motion.div>
  );
}
