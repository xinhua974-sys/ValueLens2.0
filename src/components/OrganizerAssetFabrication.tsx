import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  Layout, 
  Download, 
  Eye, 
  RefreshCw, 
  CheckCircle2,
  Sparkles,
  MapPin,
  Clock,
  Printer
} from 'lucide-react';

import MicrosoftTabMeetingGraphic from './MicrosoftTabMeetingGraphic';

interface Props {
  agenda?: any[];
  onBack: () => void;
}

export default function OrganizerAssetFabrication({ agenda = [], onBack }: Props) {
  const [activePage, setActivePage] = useState<'front' | 'back'>('front');

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="max-w-7xl w-full flex flex-col items-center gap-10 py-8"
    >
      <header className="text-center space-y-3 flex flex-col items-center">
        <div className="inline-block px-4 py-1 bg-white rounded-full border border-primary/20 text-primary font-bold text-[10px] tracking-widest uppercase shadow-sm">
          Organizer Console
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
          Tri-Fold <span className="text-primary italic">Asset Generator</span>
        </h1>
        <p className="text-slate-500 text-lg font-medium max-w-2xl">
          Instantly fabricate production-ready, beautiful trifold brochures mapped to the TAB 2026 visual style.
        </p>
      </header>

      <div className="w-full flex flex-col items-center gap-10">
        {/* Toggle View */}
        <div className="flex p-1 bg-slate-100 rounded-2xl shadow-inner">
           <button 
             onClick={() => setActivePage('front')}
             className={`px-8 py-2.5 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all ${
               activePage === 'front' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-400 hover:text-slate-600'
             }`}
           >
             Trifold Outside (Front)
           </button>
           <button 
             onClick={() => setActivePage('back')}
             className={`px-8 py-2.5 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all ${
               activePage === 'back' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-400 hover:text-slate-600'
             }`}
           >
             Trifold Inside (Agenda)
           </button>
        </div>

        {/* Trifold Preview Container - Scaled for visibility */}
        <div className="w-full overflow-x-auto pb-10 flex justify-center">
          <div className="min-w-[1000px] w-full max-w-6xl aspect-[1.785/1] bg-slate-100 p-10 rounded-[48px] shadow-2xl relative border border-slate-200/80 overflow-hidden">
             
             {/* Visual Mesh Background */}
             <div className="absolute inset-x-0 top-0 h-full opacity-20 pointer-events-none">
                <div className="absolute top-0 right-0 w-[800px] h-full rotate-12 -translate-y-1/2 translate-x-1/4">
                   <div className="w-full h-full bg-linear-to-bl from-primary/40 via-secondary/20 to-transparent blur-[120px]" />
                </div>
             </div>

             <section className="relative h-full grid grid-cols-3 gap-0 border border-slate-200/80 rounded-2xl overflow-hidden bg-white/40 backdrop-blur-md">
               {activePage === 'back' ? (
                 <>
                   {/* Column 1: Tuesday */}
                   <div className="bg-white/95 p-10 flex flex-col gap-6 border-r border-slate-100">
                     <div className="border-b-2 border-slate-900 pb-4">
                        <h3 className="text-xl font-black text-slate-900 tracking-tight">Tuesday, October 28</h3>
                     </div>
                     <div className="flex-1 space-y-6">
                        <div className="space-y-4">
                           <div className="flex justify-between items-center text-[8px] font-black uppercase text-slate-400 tracking-widest">
                             <span>Keynote Speech</span>
                             <span className="flex items-center gap-1"><MapPin className="w-2 h-2" /> Conf Rm 8/9F</span>
                           </div>
                           <div className="space-y-3">
                              <div className="flex gap-4">
                                <span className="text-[7px] font-bold text-slate-400 w-16">09:00 - 10:00</span>
                                <span className="text-[9px] font-black text-slate-900 flex-1 leading-tight">Welcome and Microsoft Research Asia Update</span>
                              </div>
                              <div className="flex gap-4">
                                <span className="text-[7px] font-bold text-slate-400 w-16">10:00 - 10:40</span>
                                <span className="text-[9px] font-black text-slate-700 flex-1 leading-tight italic">Keynote Session: Back to Fundamental Research</span>
                              </div>
                           </div>
                        </div>
                        <div className="space-y-4">
                           <div className="flex justify-between items-center text-[8px] font-black uppercase text-slate-400 tracking-widest">
                             <span>Sessions</span>
                           </div>
                           <div className="space-y-3">
                              {agenda.slice(2, 5).map(s => (
                                <div key={s.id} className="flex gap-4">
                                  <span className="text-[7px] font-bold text-slate-400 w-16">{s.time}</span>
                                  <span className="text-[9px] font-bold text-slate-600 flex-1 leading-tight">{s.title}</span>
                                </div>
                              ))}
                           </div>
                        </div>
                     </div>
                   </div>

                   {/* Column 2: Wednesday */}
                   <div className="bg-white/95 p-10 flex flex-col gap-6 border-r border-slate-100">
                     <div className="border-b-2 border-slate-900 pb-4">
                        <h3 className="text-xl font-black text-slate-900 tracking-tight">Wednesday, October 29</h3>
                     </div>
                     <div className="flex-1 space-y-6">
                        <div className="space-y-4">
                           <div className="flex justify-between items-center text-[8px] font-black uppercase text-slate-400 tracking-widest">
                             <span>Keynote Speech</span>
                           </div>
                           <div className="space-y-3">
                              <div className="flex gap-4">
                                <span className="text-[7px] font-bold text-slate-400 w-16">09:00 - 09:25</span>
                                <span className="text-[9px] font-black text-slate-700 flex-1 leading-tight italic">Keynote Session: AI for Cross-disciplinary Research</span>
                              </div>
                           </div>
                        </div>
                        <div className="space-y-4 pt-10">
                           <div className="flex justify-between items-center text-[8px] font-black uppercase text-slate-400 tracking-widest">
                             <span>Posters / Exhibition</span>
                             <span className="flex items-center gap-1"><MapPin className="w-2 h-2" /> Conf Rm 2/3F</span>
                           </div>
                           <div className="flex gap-4">
                              <span className="text-[7px] font-bold text-slate-400 w-16">13:00 - 17:00</span>
                              <span className="text-[9px] font-black text-slate-900 flex-1 leading-tight">TAB Poster & Demo Sessions Part II</span>
                           </div>
                        </div>
                     </div>
                   </div>

                   {/* Column 3: Thursday & Friday */}
                   <div className="bg-white/95 p-10 flex flex-col gap-8">
                     <div className="space-y-6">
                        <div className="border-b-2 border-slate-900 pb-4">
                           <h3 className="text-xl font-black text-slate-900 tracking-tight">Thursday, October 30</h3>
                        </div>
                        <div className="space-y-4">
                           <div className="flex justify-between items-center text-[8px] font-black uppercase text-slate-400 tracking-widest">
                             <span>MSRA Workshop Day</span>
                           </div>
                           <div className="flex gap-4">
                              <span className="text-[7px] font-bold text-slate-400 w-16">09:00 - 14:00</span>
                              <span className="text-[9px] font-black text-slate-900 flex-1 leading-tight">AI Companion: From Behavioral Science to Workplace Partnership</span>
                           </div>
                        </div>
                     </div>
                     <div className="space-y-6 pt-10">
                        <div className="border-b-2 border-slate-900 pb-4">
                           <h3 className="text-xl font-black text-slate-900 tracking-tight">Friday, October 31</h3>
                        </div>
                        <div className="space-y-4">
                           <div className="flex justify-between items-center text-[8px] font-black uppercase text-slate-400 tracking-widest">
                             <span>Team Hall</span>
                             <span className="flex items-center gap-1"><MapPin className="w-2 h-2" /> 10/11/12m</span>
                           </div>
                           <div className="flex gap-4">
                              <span className="text-[7px] font-bold text-slate-400 w-16">10:00 - 12:00</span>
                              <span className="text-[9px] font-black text-slate-900 flex-1 leading-tight italic text-primary">MSRA Special Team Hall @ All Hands</span>
                           </div>
                        </div>
                     </div>
                   </div>
                 </>
               ) : (
                 <>
                   {/* Front Side: Unified Cover Spread (Using provided Graphic) */}
                   <div className="col-span-3 bg-white relative overflow-hidden group/spread h-full w-full">
                      <MicrosoftTabMeetingGraphic className="w-full h-full object-cover" />
                      
                      {/* Subtly indicate the fold lines on top of the graphic */}
                      <div className="absolute inset-y-0 left-1/3 w-px bg-slate-900/5 z-20" />
                      <div className="absolute inset-y-0 right-1/3 w-px bg-slate-900/5 z-20" />
                   </div>
                 </>
               )}
             </section>

             <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3">
                <div className="px-5 py-2 bg-slate-200/90 backdrop-blur-xl border border-slate-300 rounded-full text-[8px] font-black text-slate-800 uppercase tracking-[0.3em]">
                   Production Draft 4.1-B
                </div>
             </div>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <button 
            onClick={onBack}
            className="px-12 py-5 bg-white border border-slate-200 text-slate-500 rounded-2xl font-bold text-xs shadow-sm hover:border-primary hover:text-primary transition-all uppercase tracking-[0.2em] flex items-center gap-3 cursor-pointer"
          >
            <RefreshCw className="w-4 h-4 shrink-0" />
            <span>Refine Sequence</span>
          </button>
          <button 
            className="px-16 py-5 bg-primary rounded-2xl text-white font-black text-xs shadow-2xl shadow-primary/30 hover:bg-primary/95 hover:scale-105 active:scale-95 transition-all flex items-center gap-4 group uppercase tracking-[0.2em] cursor-pointer"
          >
            <span>Download Print Ready PDF</span>
            <Printer className="w-6 h-6 group-hover:animate-bounce transition-transform shrink-0" />
          </button>
        </div>
      </div>

      <footer className="pt-8 w-full border-t border-slate-100 flex flex-col items-center gap-6">
        <button 
          onClick={onBack}
          className="flex items-center gap-3 text-slate-400 hover:text-primary transition-colors text-xs font-black uppercase tracking-[0.2em] cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 shrink-0" />
          <span>Back to Organizer Hub</span>
        </button>
      </footer>
    </motion.div>
  );
}
