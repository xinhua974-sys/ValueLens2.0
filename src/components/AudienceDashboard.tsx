import React from 'react';
import { motion } from 'motion/react';
import { 
  UserCircle2, 
  ArrowRight,
  BookOpen,
  PieChart
} from 'lucide-react';

interface Props {
  onStartSurvey: () => void;
  onBack: () => void;
}

export default function AudienceDashboard({ onStartSurvey, onBack }: Props) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-6xl w-full flex flex-col items-center gap-10 py-10"
    >
      <header className="text-center space-y-3 flex flex-col items-center">
        <div className="inline-block px-4 py-1 bg-white rounded-full border border-primary/20 text-primary font-bold text-[10px] tracking-widest uppercase shadow-sm">
          Audience Workspace
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
          Your Personalized <span className="text-primary italic">TAB Journey</span>
        </h1>
        <p className="text-slate-500 text-lg font-medium max-w-2xl">
          Craft a bespoke summit experience based on your research interests, historical engagement, and professional focus.
        </p>
      </header>

      <div className="w-full max-w-xl">
        <section className="group bg-white rounded-[40px] p-10 border border-slate-100 shadow-xl hover:shadow-2xl transition-all relative overflow-hidden">
          <div className="absolute -top-5 left-10 w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white shadow-lg transform -rotate-3 group-hover:rotate-0 transition-transform">
            <UserCircle2 className="w-6 h-6" />
          </div>
          
          <div className="mb-8">
            <h3 className="text-2xl font-black text-slate-800 tracking-tight">Discovery Survey</h3>
            <p className="text-slate-400 text-sm font-medium">5 questions to unlock your personalized map</p>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <BookOpen className="w-5 h-5 text-primary" />
              <div className="flex-1 text-xs font-bold text-slate-700">Align with your MSRA research group goals</div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <PieChart className="w-5 h-5 text-primary" />
              <div className="flex-1 text-xs font-bold text-slate-700">Optimize history-based interest clusters</div>
            </div>
          </div>

          <button 
            onClick={onStartSurvey}
            className="w-full py-5 bg-primary rounded-2xl text-white font-black text-xs uppercase tracking-[0.2em] shadow-xl hover:bg-primary/95 transition-all flex items-center justify-center gap-3 group/btn cursor-pointer"
          >
            <span>Begin Discovery</span>
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform shrink-0" />
          </button>
        </section>
      </div>

      <footer className="pt-8 w-full border-t border-slate-100 flex flex-col items-center gap-6">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-400 hover:text-primary transition-colors text-xs font-black uppercase tracking-widest"
        >
          <ArrowRight className="w-4 h-4 rotate-180" />
          <span>Exit Workspace</span>
        </button>
      </footer>
    </motion.div>
  );
}
