import React, { useEffect } from 'react';
import { Sparkles, Zap, Bot } from 'lucide-react';
import { motion } from 'motion/react';

interface Props {
  onComplete: () => void;
  key?: React.Key;
}

export default function Stage2Evaluating({ onComplete }: Props) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 3000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative z-10 w-full max-w-2xl flex flex-col items-center text-center py-12"
    >
      <div className="mb-16 relative">
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-56 h-56 md:w-72 md:h-72 rounded-3xl bg-white/80 backdrop-blur-xl shadow-2xl flex items-center justify-center border-2 border-slate-200"
        >
          <div className="absolute inset-4 rounded-2xl bg-gradient-to-br from-primary to-blue-400 opacity-10 animate-pulse"></div>
          
          <div className="relative transform -rotate-6">
            <Sparkles className="w-32 h-32 md:w-40 md:h-40 text-primary fill-current" />
          </div>
          
          <Zap className="absolute top-8 right-8 w-8 h-8 text-accent animate-pulse" />
          <Bot className="absolute bottom-8 left-8 w-8 h-8 text-secondary" />
        </motion.div>
        <div className="w-40 h-4 bg-slate-900/5 rounded-full blur-xl mx-auto mt-12 opacity-50"></div>
      </div>

      <div className="space-y-6">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
          Synthesizing TAB 2026 cognitive resonance...
        </h1>
        <p className="text-slate-500 text-lg font-medium max-w-md mx-auto">
          Mapping manuscript fragments to strategic value targets
        </p>
      </div>

      <div className="mt-16 w-full max-w-sm space-y-8">
        <div className="h-2.5 w-full bg-slate-200 rounded-full overflow-hidden">
          <motion.div 
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="h-full w-1/3 bg-gradient-to-r from-primary to-accent rounded-full"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <div className="flex items-center gap-2 px-4 py-1.5 bg-white rounded-full shadow-sm border border-slate-100">
            <div className="w-2 h-2 rounded-full bg-secondary"></div>
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-600">Cross-Fragment Syncing</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-1.5 bg-white rounded-full shadow-sm border border-slate-100">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-600">Resonance Mapping</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-1.5 bg-white rounded-full shadow-sm border border-slate-100">
            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-600">Temporal Alignment</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-1.5 bg-white rounded-full shadow-sm border border-slate-100">
            <div className="w-2 h-2 rounded-full bg-orange-500"></div>
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-600">Strategic Weighting</span>
          </div>
        </div>
      </div>

      <footer className="mt-24 flex flex-col items-center gap-4 opacity-40">
        <div className="flex items-center gap-2">
          <span className="font-headline font-black text-sm tracking-tighter text-primary">COGNITIVE SYNC AI</span>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Strategic Engine v3.1</span>
        </div>
        <p className="text-primary font-bold tracking-[0.2em] text-[9px] uppercase">Stage 4 of 5: Comparative Alignment</p>
      </footer>

      {/* Decorative Badges */}
      <div className="fixed top-24 left-12 hidden xl:block">
        <div className="p-5 bg-white/50 backdrop-blur-md rounded-xl border border-white/20 transform -rotate-3 shadow-sm">
          <span className="text-[10px] font-black text-primary block mb-1">SESSION_ID</span>
          <code className="text-[10px] text-slate-500">VL-9921-XLR</code>
        </div>
      </div>
      <div className="fixed bottom-24 right-12 hidden xl:block">
        <div className="p-5 bg-white/50 backdrop-blur-md rounded-xl border border-white/20 transform rotate-2 shadow-sm">
          <span className="text-[10px] font-black text-accent block mb-1">AI_CORE_STATUS</span>
          <code className="text-[10px] text-slate-500">OPTIMIZING_OUTPUT...</code>
        </div>
      </div>
    </motion.div>
  );
}
