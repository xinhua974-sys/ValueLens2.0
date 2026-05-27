import React, { useState } from 'react';
import { motion, AnimatePresence, Reorder } from 'motion/react';
import { 
  ArrowLeft, 
  Upload, 
  FileText, 
  GripVertical, 
  Clock, 
  MapPin, 
  Sparkles,
  RefreshCw,
  FolderOpen,
  Layout,
  Plus
} from 'lucide-react';

interface Props {
  onBack: () => void;
  onFabricate: (agenda: any[]) => void;
}

interface ProjectSession {
  id: string;
  title: string;
  time: string;
  location: string;
  type: 'keynote' | 'session' | 'workshop' | 'poster';
  speaker?: string;
}

export default function OrganizerAgendaDraft({ onBack, onFabricate }: Props) {
  const [stage, setStage] = useState<'upload' | 'planning'>('upload');
  const [isProcessing, setIsProcessing] = useState(false);
  const [sessions, setSessions] = useState<ProjectSession[]>([
    { id: '1', title: 'Welcome and Microsoft Research Asia Update', time: '09:00 - 10:00', location: 'Conf Rm 8/9F 2/3F 10/11/12m', type: 'keynote' },
    { id: '2', title: 'Keynote Session: Back to Fundamental Research', time: '10:00 - 10:40', location: 'Conf Rm 8/9F 2/3F 10/11/12m', type: 'keynote' },
    { id: '3', title: 'Scaling Reinforcement Learning for Language Model Reasoning', time: '10:40 - 11:40', location: 'Conf Rm 8/9F 2/3F 10/11/12m', type: 'session' },
    { id: '4', title: 'Agents Reasoning: The New Frontier of AI Reasoning', time: '11:40 - 12:20', location: 'Conf Rm 8/9F 2/3F 10/11/12m', type: 'session' },
    { id: '5', title: 'TAB Poster & Demo Sessions Part I', time: '13:00 - 15:00', location: 'Conf Rm 8/9F 2/3F 10/11/12m', type: 'poster' },
  ]);

  const handleStartPlanning = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setStage('planning');
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="max-w-6xl w-full flex flex-col items-center gap-8 py-8"
    >
      <header className="text-center space-y-3 flex flex-col items-center">
        <div className="inline-block px-4 py-1 bg-white rounded-full border border-primary/20 text-primary font-bold text-[10px] tracking-widest uppercase shadow-sm">
          Organizer Console
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
          Agenda <span className="text-primary italic">Orchestration</span>
        </h1>
        <p className="text-slate-500 text-lg font-medium max-w-2xl">
          {stage === 'upload' ? 'Ingest project portfolios, research tracks, and historic event agendas.' : 'Sequence conference sessions, adjust room maps, and structure interactive flows.'}
        </p>
      </header>

      <AnimatePresence mode="wait">
        {stage === 'upload' ? (
          <motion.div 
            key="upload-stage"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            className="w-full max-w-4xl space-y-8"
          >
            <section className="bg-white rounded-[40px] p-10 border border-slate-100 shadow-2xl">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                  <FolderOpen className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-800 tracking-tight">Portfolio Ingestion</h3>
                  <p className="text-slate-400 text-xs font-medium">Upload all project materials for the summit</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <button className="flex flex-col items-center gap-4 p-12 bg-slate-50 rounded-[32px] border-2 border-dashed border-slate-200 hover:border-primary hover:bg-white transition-all group">
                   <Upload className="w-10 h-10 text-slate-300 group-hover:text-primary transition-colors" />
                   <div className="text-center">
                     <span className="text-xs font-black uppercase tracking-widest text-slate-800 block mb-1">Project Portfolios</span>
                     <p className="text-[10px] font-medium text-slate-400 uppercase tracking-widest">Multiple File Upload</p>
                   </div>
                </button>
                <button className="flex flex-col items-center gap-4 p-12 bg-slate-50 rounded-[32px] border-2 border-dashed border-slate-200 hover:border-primary hover:bg-white transition-all group">
                   <FileText className="w-10 h-10 text-slate-300 group-hover:text-primary transition-colors" />
                   <div className="text-center">
                     <span className="text-xs font-black uppercase tracking-widest text-slate-800 block mb-1">Historical Agendas</span>
                     <p className="text-[10px] font-medium text-slate-400 uppercase tracking-widest">Reference Ingestion</p>
                   </div>
                </button>
              </div>

              <button
                onClick={handleStartPlanning}
                disabled={isProcessing}
                className="mt-10 w-full py-6 bg-primary text-white rounded-3xl font-black text-sm uppercase tracking-[0.3em] shadow-2xl hover:bg-primary/95 transition-all flex items-center justify-center gap-4 group cursor-pointer"
              >
                {isProcessing ? (
                  <RefreshCw className="w-5 h-5 animate-spin shrink-0" />
                ) : (
                  <Sparkles className="w-5 h-5 shrink-0" />
                )}
                <span>Generate Agenda Draft</span>
              </button>
            </section>
          </motion.div>
        ) : (
          <motion.div 
            key="planning-stage"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full flex flex-col gap-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Settings */}
              <div className="lg:col-span-4 space-y-6">
                <section className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-xl">
                  <h4 className="text-sm font-black text-slate-800 uppercase tracking-widest mb-6 border-b border-slate-50 pb-4">Planning Metrics</h4>
                  <div className="space-y-4">
                    <div className="p-4 bg-slate-50 rounded-2xl">
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Total Duration</div>
                      <div className="text-xl font-black text-slate-800 tracking-tight">8.5 Hours</div>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-2xl">
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Project Density</div>
                      <div className="text-xl font-black text-slate-800 tracking-tight">12/15 Slots Filled</div>
                    </div>
                  </div>
                </section>
                
                <button className="w-full py-5 bg-white border border-slate-100 rounded-2xl text-slate-400 font-black text-[10px] uppercase tracking-widest hover:border-primary hover:text-primary transition-all flex items-center justify-center gap-2">
                   <Plus className="w-4 h-4" />
                   <span>Add Custom Session</span>
                </button>
              </div>

              {/* Right Agenda List */}
              <div className="lg:col-span-8 flex flex-col gap-4">
                <div className="bg-white rounded-[40px] p-10 shadow-2xl border border-slate-100 relative overflow-hidden">
                   <div className="flex items-center justify-between mb-10 pb-6 border-b border-slate-50">
                      <div className="flex items-center gap-4">
                         <div className="px-5 py-2 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] shadow-lg">Day 1</div>
                         <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            <span className="text-[10px] font-black text-slate-800 uppercase tracking-widest opacity-60">Interactive Sequence</span>
                         </div>
                      </div>
                      <span className="px-3 py-1 bg-slate-100 text-slate-400 rounded text-[8px] font-black uppercase tracking-widest border border-slate-200">Refining Flow</span>
                   </div>

                   <Reorder.Group axis="y" values={sessions} onReorder={setSessions} className="space-y-4">
                     {sessions.map((session) => (
                       <Reorder.Item 
                         key={session.id} 
                         value={session}
                         className="bg-slate-50/50 border border-slate-100 rounded-[32px] p-6 cursor-grab active:cursor-grabbing hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all group relative overflow-hidden"
                       >
                         <div className="flex items-center gap-8">
                            {/* Fixed Temporal Column */}
                            <div className="w-32 flex flex-col items-center justify-center border-r border-slate-200/50 pr-8">
                               <div className="text-[8px] font-black text-slate-300 uppercase tracking-widest mb-1">Time Slot</div>
                               <div className="flex items-center gap-1.5 text-xs font-black text-slate-900 tracking-tight">
                                  <Clock className="w-3.5 h-3.5 text-primary" />
                                  <span>{session.time.split(' - ')[0]}</span>
                               </div>
                               <div className="text-[10px] font-bold text-slate-400 mt-1">{session.time.split(' - ')[1]}</div>
                            </div>

                            <div className="flex-1">
                               <div className="flex items-center gap-3 mb-2">
                                  <span className={`px-2 py-0.5 rounded-[4px] text-[8px] font-black uppercase tracking-widest ${
                                    session.type === 'keynote' ? 'bg-primary text-white' : 'bg-slate-200 text-slate-600'
                                  }`}>
                                    {session.type}
                                  </span>
                               </div>
                               <h5 className="text-base font-black text-slate-800 tracking-tight leading-tight">{session.title}</h5>
                               <div className="flex items-center gap-2 mt-3 text-[10px] font-bold text-slate-400 tracking-wide uppercase">
                                  <MapPin className="w-3.5 h-3.5" />
                                  <span>{session.location}</span>
                                </div>
                            </div>

                            <GripVertical className="w-6 h-6 text-slate-300 group-hover:text-primary transition-colors pr-2" />
                         </div>
                       </Reorder.Item>
                     ))}
                   </Reorder.Group>
                </div>

                <div className="flex gap-4">
                  <button 
                    onClick={() => setStage('upload')}
                    className="flex-1 py-5 bg-white border border-slate-200 text-slate-500 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:border-primary hover:text-primary transition-all"
                  >
                    Resync Materials
                  </button>
                  <button 
                    onClick={() => onFabricate(sessions)}
                    className="flex-[2] py-5 value-gradient text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] shadow-xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3"
                  >
                    <span>Fabricate Agenda Asset</span>
                    <Layout className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="pt-8 w-full border-t border-slate-100 flex flex-col items-center gap-6">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-400 hover:text-primary transition-colors text-xs font-black uppercase tracking-widest cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 shrink-0" />
          <span>Back to Dashboard</span>
        </button>
      </footer>
    </motion.div>
  );
}
