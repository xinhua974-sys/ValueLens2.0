import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Construction } from 'lucide-react';

interface Props {
  role: string;
  onBack: () => void;
  key?: React.Key;
}

export default function RolePlaceholder({ role, onBack }: Props) {
  const roleNames: Record<string, string> = {
    lead: 'Project Lead',
    organizer: 'Summit Organizer',
    audience: 'Audience'
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      className="max-w-2xl w-full text-center py-20"
    >
      <div className="w-20 h-20 bg-slate-100 rounded-3xl flex items-center justify-center text-slate-400 mx-auto mb-8">
        <Construction className="w-10 h-10" />
      </div>
      <h2 className="text-3xl font-black text-slate-900 mb-4">{roleNames[role]} Workspace</h2>
      <p className="text-slate-500 font-medium mb-12">
        We are currently configuring the synchronization modules for this perspective. This workspace will feature tools for cross-role cognitive alignment and strategic resonance tracking.
      </p>
      <button
        onClick={onBack}
        className="inline-flex items-center gap-3 px-8 py-4 bg-white border border-slate-200 rounded-full text-slate-600 font-bold text-sm hover:border-primary hover:text-primary transition-all group"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        Back to Perspective Selection
      </button>
    </motion.div>
  );
}
