import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  Download, 
  Map as MapIcon, 
  Sparkles, 
  Clock, 
  Route,
  Navigation,
  QrCode,
  UserCircle2,
  Brain,
  Calendar,
  BookOpen
} from 'lucide-react';
import MicrosoftTabMeetingGraphic from './MicrosoftTabMeetingGraphic';

interface Props {
  data: any;
  onBack: () => void;
}

export default function AudienceRecommendation({ data, onBack }: Props) {
  const recommendations = {
    morning: [
      { 
        time: '10:00 AM', 
        title: 'Fundamental Research Foundation', 
        loc: 'Rm 801',
        brief: 'Exploring the core architecture of foundational models.',
        research: 'Machine Learning, Theory',
        discussion: 'Scaling laws, data diversity, model robustness.',
      },
      { 
        time: '11:40 AM', 
        title: 'Agentic Reasoning Deep-Dive', 
        loc: 'Rm 1102',
        brief: 'Advanced agentic workflows and multi-step reasoning.',
        research: 'Agentic Reasoning, Systems',
        discussion: 'Planning, execution error, goal decomposition.',
      }
    ],
    booths: [
      { 
        id: 'B2', 
        title: 'Neural Systems Alpha', 
        focus: 'Agentic Infrastructure',
        brief: 'Scalable infrastructure for agentic reasoning workflows.',
        research: 'System Architecture, Agentic Frameworks',
        discussion: 'Latency optimization, deployment strategies.'
      },
      { 
        id: 'C9', 
        title: 'Synergy Viz Hub', 
        focus: 'Multimodal Interfaces',
        brief: 'High-fidelity multimodal interactive data visualization.',
        research: 'Visualization, Multimodal Learning',
        discussion: 'Latent space analysis, interactive tool design.'
      },
      { 
        id: 'D4', 
        title: 'Security Enclave', 
        focus: 'Privacy Preservation',
        brief: 'Privacy-aware infrastructure for distributed AI.',
        research: 'Security, Decentralized Intelligence',
        discussion: 'Differential privacy, secure computation.'
      },
      { 
        id: 'E1', 
        title: 'Theory Lab Demos', 
        focus: 'Geometric Deep Learning',
        brief: 'Leveraging graph structures in deep learning.',
        research: 'Geometric ML, Fundamental Theory',
        discussion: 'Graph representation, invariance, complexity.'
      },
      { 
        id: 'A7', 
        title: 'MSRA Heritage', 
        focus: 'Historical Milestones',
        brief: 'Celebrating the legacy and core breakthroughs of MSRA.',
        research: 'History of AI, Human-Centered Tech',
        discussion: 'Impact, future directions, core MSRA ethos.'
      }
    ]
  };

  const group = data?.group || 'Machine Learning';
  const history = data?.history || 'Theory';
  const interest = data?.interest || 'Agentic Reasoning';
  const goal = data?.goal || 'Technical Deep-dives';
  const format = data?.format || 'Interactive Demos';

  // Compute calculated values
  const getAIPersona = (grp: string, intr: string) => {
    const gr = grp.toLowerCase();
    const it = intr.toLowerCase();
    if (gr.includes('theory')) return 'Foundational Synthesizer';
    if (gr.includes('language') || it.includes('agentic')) return 'Cognitive Agent Architect';
    if (gr.includes('vision') || it.includes('multimodal')) return 'Perceptual Synergy Pioneer';
    if (gr.includes('systems')) return 'Decentralized Core Engineer';
    return 'Strategic AI Harmonizer';
  };

  const getAISynergy = (gl: string, fmt: string) => {
    return `Cross-disciplinary pathways bridging "${gl}" with high-fidelity, "${fmt}"-based discovery pipelines.`;
  };

  const getStrategicAlignment = (intr: string) => {
    switch (intr) {
      case 'Agentic Reasoning':
        return 'Synergizing multi-step goal compilation with robust system execution bounds.';
      case 'Embodied AI':
        return 'Integrating continuous spatial-temporal grounding maps with discrete action planners.';
      case 'Secure Foundations':
        return 'Enforcing privacy guarantees and formal validation bounds on decentralized models.';
      case 'Multimodal Synergy':
        return 'Aligning cross-modal representative latent spaces to facilitate real-time action models.';
      case 'Decentralized Intelligence':
        return 'Deploying collaborative consensus mechanisms over distributed peer node infrastructures.';
      default:
        return 'Orchestrating pluralistic technology layers onto open-source infrastructure parity.';
    }
  };

  const [showLeftColumn, setShowLeftColumn] = React.useState(true);

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="max-w-7xl w-full flex flex-col items-center gap-10 py-8"
    >
      <header className="text-center space-y-3 flex flex-col items-center">
        <div className="inline-block px-4 py-1 bg-white rounded-full border border-primary/20 text-primary font-bold text-xs tracking-widest uppercase shadow-sm">
          Audience Workspace
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
          Your TAB <span className="text-primary italic">Concierge</span>
        </h1>
        <p className="text-slate-500 text-xl font-medium max-w-2xl">
          Tailored for {group} // Focus: {interest}
        </p>
      </header>

      {/* Main Grid Switch */}
      <div className="w-full flex justify-center">
        <button 
          onClick={() => setShowLeftColumn(!showLeftColumn)}
          className="px-6 py-2 bg-white border border-slate-200 rounded-full text-xs font-black uppercase text-slate-500 hover:text-primary transition-colors flex items-center gap-2"
        >
          {showLeftColumn ? 'Hide AI Inferences' : 'Show AI Inferences'}
        </button>
      </div>

      {/* Main Grid: Left Side profile/Inferences, Right Side concierge */}
      <div className="w-full flex flex-col lg:flex-row gap-8 items-start max-w-7xl px-4 md:px-0">
        
        {/* Left Column: Selections & AI Inferences */}
        {showLeftColumn && (
          <div className="w-full lg:w-96 flex flex-col gap-8 shrink-0">
            {/* Card 1: User Survey Selections */}
            <section className="bg-white rounded-[40px] p-10 border border-slate-100 shadow-xl relative group transition-all hover:shadow-2xl flex flex-col h-full bg-linear-to-br from-white to-slate-50/50">
              <div className="absolute -top-5 left-10 w-12 h-12 bg-value-gold rounded-2xl flex items-center justify-center text-white shadow-lg transform -rotate-3 group-hover:rotate-0 transition-transform">
                <UserCircle2 className="w-6 h-6" />
              </div>
              
              <div className="mb-8">
                <h3 className="text-2xl font-black text-slate-800 tracking-tight">Survey Profile</h3>
                <p className="text-slate-400 text-sm font-medium">Your declared professional focus</p>
              </div>

              <div className="space-y-6 flex-1">
                <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm space-y-4">
                  <div>
                    <label className="text-xs font-black uppercase text-slate-500 tracking-widest mb-2 block">Research Group</label>
                    <div className="w-full bg-slate-50 border-none rounded-[6px] p-4 text-sm font-bold text-slate-700 shadow-inner">
                      {group}
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-black uppercase text-slate-500 tracking-widest mb-2 block">TAB Engagement</label>
                    <div className="w-full bg-slate-50 border-none rounded-[6px] p-4 text-sm font-bold text-slate-700 shadow-inner">
                      {history}
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-black uppercase text-slate-500 tracking-widest mb-2 block">Core Interest</label>
                    <div className="w-full bg-slate-50 border-none rounded-[6px] p-4 text-sm font-bold text-slate-700 shadow-inner">
                      {interest}
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-black uppercase text-slate-500 tracking-widest mb-2 block">Summit Goal</label>
                    <div className="w-full bg-slate-50 border-none rounded-[6px] p-4 text-sm font-bold text-slate-700 shadow-inner">
                      {goal}
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-black uppercase text-slate-500 tracking-widest mb-2 block">Preferred Content</label>
                    <div className="w-full bg-slate-50 border-none rounded-[6px] p-4 text-sm font-bold text-slate-700 shadow-inner">
                      {format}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Card 2: AI Cognitive Inferences */}
            <section className="bg-white rounded-[40px] p-10 border border-slate-100 shadow-xl relative group transition-all hover:shadow-2xl flex flex-col bg-linear-to-br from-white to-slate-50/50">
              <div className="absolute -top-5 left-10 w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white shadow-lg transform rotate-3 group-hover:rotate-0 transition-transform">
                <Brain className="w-6 h-6" />
              </div>
              
              <div className="mb-8">
                <h3 className="text-2xl font-black text-slate-800 tracking-tight">AI Inferences</h3>
                <p className="text-slate-400 text-sm font-medium">Cognitive synthesis by TAB Intelligence</p>
              </div>

              <div className="space-y-6 flex-1">
                <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm space-y-4">
                  <div>
                    <label className="text-xs font-black uppercase text-slate-500 tracking-widest mb-2 block">Reconstructed Role</label>
                    <div className="w-full bg-linear-to-r from-primary/5 to-secondary/5 border border-primary/20 rounded-[8px] p-4 text-sm font-black text-primary uppercase tracking-wider">
                      {getAIPersona(group, interest)}
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-black uppercase text-slate-500 tracking-widest mb-2 block">Strategic Target</label>
                    <div className="w-full bg-slate-50 border-none rounded-[6px] p-4 text-sm font-medium text-slate-600 leading-normal shadow-inner">
                      {getStrategicAlignment(interest)}
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-black uppercase text-slate-500 tracking-widest mb-2 block">Synergy Vector</label>
                    <div className="w-full bg-slate-50 border-none rounded-[6px] p-4 text-sm font-medium text-slate-600 leading-normal shadow-inner">
                      {getAISynergy(goal, format)}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Right Column: Original Personalized TAB Recommendations */}
        <div className="flex-1 w-full bg-slate-100 p-1 rounded-[48px] shadow-2xl relative border border-slate-200/85 overflow-hidden">
          <div className="bg-white rounded-[44px] overflow-hidden flex flex-col">
            
            {/* Recommendations Panels: Stacked Vertical Layout */}
            <div className="flex flex-col">
              {/* Top Panel: Recommendations */}
              <div className="p-12 border-b border-slate-100 flex flex-col">
              <div className="flex items-center gap-4 mb-10 pb-6 border-b border-slate-100">
                 <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white">
                    <Sparkles className="w-6 h-6" />
                 </div>
                 <div>
                    <div className="text-xs font-black text-primary uppercase tracking-[0.4em] mb-1">Morning Selection</div>
                    <div className="text-2xl font-black text-slate-900 tracking-tight">Priority Focus Sessions</div>
                 </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
                 {recommendations.morning.map((m, i) => (
                   <div key={i} className="flex gap-6 p-6 bg-slate-50 rounded-3xl border border-slate-100 group hover:border-primary transition-all">
                      <div className="flex flex-col items-center justify-center w-20 h-20 bg-white rounded-2xl shadow-sm shrink-0">
                         <Clock className="w-5 h-5 text-slate-400 mb-1" />
                         <span className="text-xs font-black text-slate-900">{m.time}</span>
                      </div>
                      <div className="flex-1 space-y-3">
                         <h4 className="text-base font-black text-slate-800 tracking-tight">{m.title}</h4>
                         <div className="flex items-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
                            <span className="flex items-center gap-1"><Navigation className="w-4 h-4" /> {m.loc}</span>
                         </div>
                         <div className="p-4 bg-white rounded-xl border border-slate-100/60 text-sm text-slate-600">
                           {m.brief}
                         </div>
                         <div className="p-3 bg-slate-50 rounded-lg text-sm text-slate-500 italic font-medium">
                            Topics: {m.discussion}
                         </div>
                         <div className="flex items-center justify-between gap-4">
                            <div className="text-xs font-bold text-primary bg-primary/5 px-3 py-1.5 rounded">Research: {m.research}</div>
                            <button className="text-slate-400 hover:text-primary transition-colors">
                               <Calendar className="w-5 h-5" />
                            </button>
                         </div>
                      </div>
                   </div>
                 ))}
              </div>

              <div className="mt-8 pt-8 border-t border-slate-100 flex items-center justify-between">
                <div className="flex flex-col">
                   <span className="text-sm font-black text-slate-400 uppercase tracking-widest">Personalized ID</span>
                   <span className="text-sm font-black text-slate-900">0x92f...ABC_2026</span>
                </div>
                <QrCode className="w-12 h-12 text-slate-200" />
              </div>
            </div>

            {/* Bottom Panel: Afternoon Booth Map */}
            <div className="bg-slate-50 p-12 relative overflow-hidden flex flex-col text-slate-800">
               <div className="absolute top-0 right-0 w-[500px] h-full opacity-10 pointer-events-none">
                   <div className="w-full h-full bg-linear-to-bl from-primary via-secondary to-transparent blur-[80px]" />
               </div>

               <div className="relative z-10 flex items-center justify-between mb-10 pb-6 border-b border-slate-200">
                  <div className="flex items-center gap-4">
                     <Route className="w-10 h-10 text-primary" />
                     <div>
                        <div className="text-xs font-black text-slate-400 uppercase tracking-[0.4em] mb-1">Afternoon Circuit</div>
                        <div className="text-2xl font-black text-slate-900 tracking-tight">Exhibition Strategy Map</div>
                     </div>
                  </div>
                  <div className="px-6 py-3 bg-slate-100 rounded-xl border border-slate-200 text-slate-700 text-sm font-black uppercase tracking-widest">
                     5 Interlinked Booths
                  </div>
               </div>

               <div className="relative z-10 flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {recommendations.booths.map((b, i) => (
                    <div key={b.id} className="p-6 bg-white border border-slate-150 rounded-2xl flex flex-col gap-4 hover:bg-slate-50 hover:border-primary/40 transition-all cursor-pointer group shadow-sm hover:shadow-md">
                       <div className="flex items-start gap-4">
                          <span className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center text-xs font-black group-hover:scale-110 transition-transform shrink-0">
                             {b.id}
                          </span>
                          <div className="flex-1 min-w-0">
                             <div className="text-sm font-black text-slate-800 mb-0.5 group-hover:text-primary transition-colors truncate">{b.title}</div>
                             <div className="text-sm font-bold text-slate-400 uppercase tracking-widest truncate">{b.focus}</div>
                          </div>
                       </div>
                       <div className="text-sm text-slate-600 px-1 font-medium">
                         {b.brief}
                       </div>
                       <div className="p-3 bg-slate-50 rounded-lg text-sm text-slate-500 italic font-medium">
                          Topics: {b.discussion}
                       </div>
                       <div className="flex items-center justify-between gap-3 mt-1">
                         <div className="text-sm font-bold text-slate-400 uppercase tracking-widest bg-slate-100 px-3 py-1.5 rounded truncate flex-1 min-w-0">
                            {b.research}
                         </div>
                         <button className="text-slate-400 hover:text-primary transition-colors">
                            <BookOpen className="w-5 h-5" />
                         </button>
                       </div>
                    </div>
                  ))}
                  
                  {/* Visual Map Connector Simulated */}
                  <div className="col-span-1 md:col-span-2 lg:col-span-3 mt-4 p-6 border-2 border-dashed border-slate-200 rounded-3xl flex items-center justify-center text-slate-400">
                     <div className="flex flex-col items-center gap-3">
                       <MapIcon className="w-16 h-16 text-slate-300" />
                       <span className="text-sm font-black uppercase tracking-[0.4em] text-slate-400">Interactive Floor Plan Injected</span>
                     </div>
                  </div>
               </div>
            </div>
            </div>
          </div>
        </div>

      </div>

      <div className="flex items-center gap-6">
        <button 
          onClick={onBack}
          className="px-12 py-5 bg-white border border-slate-200 text-slate-500 rounded-2xl font-bold text-sm shadow-sm hover:border-primary hover:text-primary transition-all uppercase tracking-[0.2em] flex items-center gap-3"
        >
          <RefreshCwIcon className="w-4 h-4" />
          <span>Update Interests</span>
        </button>
        <button 
          className="px-16 py-5 value-gradient rounded-2xl text-white font-black text-sm shadow-2xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all flex items-center gap-4 group uppercase tracking-[0.2em]"
        >
          <span>Save Map to Mobile</span>
          <Download className="w-6 h-6 group-hover:translate-y-1 transition-transform" />
        </button>
      </div>

      <footer className="pt-8 w-full border-t border-slate-100 flex flex-col items-center gap-6">
        <button 
          onClick={onBack}
          className="flex items-center gap-3 text-slate-400 hover:text-primary transition-colors text-sm font-black uppercase tracking-[0.2em]"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Audience Hub</span>
        </button>
      </footer>
    </motion.div>
  );
}

function RefreshCwIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
      <path d="M3 21v-5h5" />
    </svg>
  );
}
