import React from 'react';
import { motion } from 'motion/react';
import { 
  Brush, 
  Users, 
  Calendar, 
  Footprints, 
  ArrowRight,
  Target,
  FileText,
  Sparkles,
  Layers,
  Map,
  Compass
} from 'lucide-react';

interface EntryButtonProps {
  icon: React.ElementType;
  title: string;
  description: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

function EntryButton({ icon: Icon, title, description, onClick, variant = 'secondary' }: EntryButtonProps) {
  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`w-full group relative p-5 rounded-2xl border text-left transition-all ${
        variant === 'primary' 
          ? 'bg-primary border-primary shadow-lg shadow-primary/10' 
          : 'bg-white border-slate-100 hover:border-primary/30 shadow-sm hover:shadow-md'
      }`}
    >
      <div className="flex items-center gap-4">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
          variant === 'primary' ? 'bg-white/20 text-white' : 'bg-slate-50 text-slate-400 group-hover:bg-primary/10 group-hover:text-primary'
        }`}>
          <Icon className="w-5 h-5" />
        </div>
        <div className="flex-1">
          <h4 className={`text-sm font-black tracking-tight ${
            variant === 'primary' ? 'text-white' : 'text-slate-800'
          }`}>{title}</h4>
          
          <p className={`text-[10px] font-medium pt-1 leading-tight ${
            variant === 'primary' ? 'text-white/70' : 'text-slate-400'
          }`}>
            {description}
          </p>
        </div>
        <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${
          variant === 'primary' ? 'text-white/40' : 'text-slate-200 group-hover:text-primary'
        }`} />
      </div>
    </motion.button>
  );
}

interface Props {
  onNavigate: (role: any, options?: any) => void;
}

export default function RoleSelection({ onNavigate }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-6xl w-full space-y-12"
    >
      <div className="text-center space-y-2">
        <div className="inline-block px-3 py-1 bg-primary/5 rounded-full border border-primary/10 text-primary text-[9px] font-black uppercase tracking-[0.3em] mb-2">
           TAB 2026 Summit Platform
        </div>
        <h1 className="text-4xl font-black text-slate-900 tracking-tighter">
           TAB 2026 Cognition Collaboration System
        </h1>
        <p className="text-slate-500 text-sm font-medium">
           Connecting Research, Creativity, and Organizational Intelligence
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Designer Role */}
        <div className="space-y-6">
           <div className="flex items-center gap-3 px-2">
              <Brush className="w-5 h-5 text-slate-300" />
              <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Designer</h3>
           </div>
           <div className="space-y-3">
              <EntryButton 
                icon={Target}
                title="Inspiration Generator"
                description="Asset diagnostics & Core value mapping."
                onClick={() => onNavigate('designer', { stage: 1, designerSub: 'baseline' })}
              />
              <EntryButton 
                icon={FileText}
                title="Creative Evaluation"
                description="Drafting engine & Visual iteration."
                onClick={() => onNavigate('designer', { stage: 1, designerSub: 'manuscripts' })}
              />
           </div>
        </div>

        {/* Speaker / Project Lead renamed */}
        <div className="space-y-6">
           <div className="flex items-center gap-3 px-2">
              <Users className="w-5 h-5 text-slate-300" />
              <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Speaker</h3>
           </div>
           <div className="space-y-3">
              <EntryButton 
                icon={Sparkles}
                title="Poster Workspace"
                description="Parse research nodes & synthesize standardized layouts."
                onClick={() => onNavigate('lead', { leadSub: 'poster' })}
              />
              <EntryButton 
                icon={Layers}
                title="Keynote Workspace"
                description="Draft & customize premium 16:9 slide masters."
                onClick={() => onNavigate('lead', { leadSub: 'keynote' })}
              />
           </div>
        </div>

        {/* Organizer */}
        <div className="space-y-6">
           <div className="flex items-center gap-3 px-2">
              <Calendar className="w-5 h-5 text-slate-300" />
              <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Organizer</h3>
           </div>
           <div className="space-y-3">
              <EntryButton 
                icon={Map}
                title="Organizer Console"
                description="Agenda planning & Physical fabrication."
                onClick={() => onNavigate('organizer', { organizerSub: 'agenda' })}
              />
           </div>
        </div>

        {/* Audience */}
        <div className="space-y-6">
           <div className="flex items-center gap-3 px-2">
              <Compass className="w-5 h-5 text-slate-300" />
              <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Audience</h3>
           </div>
           <div className="space-y-3">
              <EntryButton 
                icon={Footprints}
                title="Personalized Journey"
                description="Personalized maps & Research journey."
                onClick={() => onNavigate('audience', { audienceSub: 'dashboard' })}
              />
           </div>
        </div>
      </div>

      <div className="pt-8 flex items-center justify-center gap-6 opacity-30">
        <div className="w-12 h-px bg-slate-300" />
        <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.5em]">MSRA SYNERGY // 2026</div>
        <div className="w-12 h-px bg-slate-300" />
      </div>
    </motion.div>
  );
}
