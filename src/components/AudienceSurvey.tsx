import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  ChevronRight, 
  ChevronLeft, 
  Sparkles, 
  CheckCircle2,
  Brain,
  History,
  Building,
  Target,
  Zap
} from 'lucide-react';

interface Props {
  onComplete: (data: any) => void;
  onBack: () => void;
}

const questions = [
  {
    id: 'group',
    icon: Building,
    title: 'Research Group',
    question: 'Which research area best describes your current work at MSRA?',
    options: ['Machine Learning', 'Systems & Networking', 'Language & Knowledge', 'Theory', 'Computer Vision']
  },
  {
    id: 'history',
    icon: History,
    title: 'TAB Engagement',
    question: 'What was your primary focus in previous TAB summits?',
    options: ['Theoretical Breakthroughs', 'Cross-disciplinary Applications', 'Systems Infrastructure', 'AI for Science', 'Societal Impact']
  },
  {
    id: 'interest',
    icon: Brain,
    title: 'Core Interest',
    question: 'Select your most prioritized technology focus for 2026.',
    options: ['Agentic Reasoning', 'Embodied AI', 'Secure Foundations', 'Multimodal Synergy', 'Decentralized Intelligence']
  },
  {
    id: 'goal',
    icon: Target,
    title: 'Summit Goal',
    question: 'What do you hope to achieve most from this TAB?',
    options: ['Collaborative Networking', 'Technical Deep-dives', 'Resource Solicitation', 'Strategic Alignment', 'Broad Inspiration']
  },
  {
    id: 'format',
    icon: Zap,
    title: 'Preferred Content',
    question: 'Which presentation format resonates most with your learning style?',
    options: ['Structured Keynotes', 'Interactive Demos', 'Deep-dive Workshops', 'Lightning Talks', 'Open Panel Discussions']
  }
];

export default function AudienceSurvey({ onComplete, onBack }: Props) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isFinishing, setIsFinishing] = useState(false);

  const handleSelect = (option: string) => {
    const q = questions[currentStep];
    setAnswers(prev => ({ ...prev, [q.id]: option }));
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setIsFinishing(true);
      setTimeout(() => onComplete(answers), 2000);
    }
  };

  const Icon = questions[currentStep].icon;

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="max-w-4xl w-full flex flex-col items-center gap-8 py-10"
    >
      <header className="text-center space-y-3 flex flex-col items-center mb-8">
        <div className="inline-block px-4 py-1 bg-white rounded-full border border-primary/20 text-primary font-bold text-[10px] tracking-widest uppercase shadow-sm">
          Audience Workspace
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
          Discovery <span className="text-primary italic">Survey</span>
        </h1>
        <p className="text-slate-500 text-lg font-medium max-w-2xl">
          Question {currentStep + 1} of 5: {questions[currentStep].title}
        </p>

        <div className="flex gap-1.5 mt-2">
          {questions.map((_, i) => (
            <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i <= currentStep ? 'w-6 bg-primary' : 'w-3 bg-slate-100'}`} />
          ))}
        </div>
      </header>

      <AnimatePresence mode="wait">
        {!isFinishing ? (
          <motion.div 
            key="question-box"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            className="w-full bg-white rounded-[40px] p-10 border border-slate-100 shadow-2xl relative"
          >
            <h3 className="text-2xl font-black text-slate-800 tracking-tight mb-10 leading-tight">
              {questions[currentStep].question}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {questions[currentStep].options.map(option => (
                <button
                  key={option}
                  onClick={() => handleSelect(option)}
                  className={`w-full text-left p-6 rounded-2xl border transition-all flex items-center justify-between group ${
                    answers[questions[currentStep].id] === option 
                    ? 'bg-primary border-primary shadow-xl shadow-primary/20 scale-[1.02]' 
                    : 'bg-white border-slate-100 hover:border-slate-300'
                  }`}
                >
                  <span className={`font-bold text-sm ${
                    answers[questions[currentStep].id] === option ? 'text-white' : 'text-slate-600 group-hover:text-slate-900'
                  }`}>
                    {option}
                  </span>
                  {answers[questions[currentStep].id] === option && (
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  )}
                </button>
              ))}
            </div>

            <div className="mt-12 flex justify-between items-center">
              <button 
                onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))}
                disabled={currentStep === 0}
                className="flex items-center gap-2 text-slate-400 hover:text-slate-600 transition-colors disabled:opacity-0 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4 shrink-0" />
                <span className="text-xs font-bold uppercase tracking-widest">Back</span>
              </button>
              
              <button 
                onClick={handleNext}
                disabled={!answers[questions[currentStep].id]}
                className={`py-4 px-10 rounded-2xl font-black text-xs uppercase tracking-widest transition-all flex items-center gap-2 cursor-pointer ${
                  answers[questions[currentStep].id] 
                  ? 'bg-primary text-white shadow-xl hover:bg-primary/95 hover:scale-[1.01]' 
                  : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                }`}
              >
                <span>{currentStep === questions.length - 1 ? 'Generate Experience' : 'Continue'}</span>
                <ChevronRight className="w-4 h-4 shrink-0" />
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            key="loading-box"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full flex flex-col items-center justify-center py-20 gap-6"
          >
            <div className="relative">
              <div className="w-20 h-20 border-4 border-slate-100 rounded-full animate-spin border-t-primary" />
              <Sparkles className="absolute inset-0 m-auto w-8 h-8 text-primary" />
            </div>
            <div className="text-center space-y-2">
              <h4 className="text-xl font-black text-slate-800 tracking-tight">Synthesizing Your TAB Journey</h4>
              <p className="text-slate-400 text-sm font-medium">Matching your research profile with 120+ sessions...</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="pt-8 w-full border-t border-slate-100 flex flex-col items-center gap-6">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-400 hover:text-primary transition-colors text-xs font-black uppercase tracking-widest"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Exit Survey</span>
        </button>
      </footer>
    </motion.div>
  );
}
