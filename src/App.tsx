import React, { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import Header from './components/Header';
import Footer from './components/Footer';
import Stage1Discovery from './components/Stage1Discovery';
import StageManuscriptUpload from './components/StageManuscriptUpload';
import Stage2Evaluating from './components/Stage2Evaluating';
import Stage3Results from './components/Stage3Results';
import Stage4Feedback from './components/Stage4Feedback';
import RoleSelection from './components/RoleSelection';
import RolePlaceholder from './components/RolePlaceholder';
import LeadDashboard from './components/LeadDashboard';
import LeadPosterWorkspace from './components/LeadPosterWorkspace';
import LeadKeynoteWorkspace from './components/LeadKeynoteWorkspace';
import OrganizerAgendaDraft from './components/OrganizerAgendaDraft';
import OrganizerAssetFabrication from './components/OrganizerAssetFabrication';
import AudienceDashboard from './components/AudienceDashboard';
import AudienceSurvey from './components/AudienceSurvey';
import AudienceRecommendation from './components/AudienceRecommendation';

type Role = 'designer' | 'lead' | 'organizer' | 'audience';
type Stage = 1 | 2 | 3 | 4 | 5;
type LeadSubStage = 'dashboard' | 'poster' | 'keynote';
type OrganizerSubStage = 'agenda' | 'fabrication';
type AudienceSubStage = 'dashboard' | 'survey' | 'recommendation';
type DesignerSubStage = 'baseline' | 'manuscripts';

export default function App() {
  const [role, setRole] = useState<Role | null>(null);
  const [stage, setStage] = useState<Stage>(1);
  const [leadSubStage, setLeadSubStage] = useState<LeadSubStage>('dashboard');
  const [organizerSubStage, setOrganizerSubStage] = useState<OrganizerSubStage>('agenda');
  const [audienceSubStage, setAudienceSubStage] = useState<AudienceSubStage>('dashboard');
  const [designerSubStage, setDesignerSubStage] = useState<DesignerSubStage>('baseline');
  const [sharedContent, setSharedContent] = useState<string>('');
  const [sharedAgenda, setSharedAgenda] = useState<any[]>([]);
  const [audienceData, setAudienceData] = useState<any>(null);

  // States for Inspiration Generator inputs in Designer Workspace
  const [topic, setTopic] = useState("Diversity & Synergetic Innovation");
  const [targetAudience, setTargetAudience] = useState("Global Tech Innovators, Researchers, and Developers");
  const [strategy, setStrategy] = useState("Aiming for a pluralistic and open visual expression that facilitates 'New Collaborative Synergy' across the global technology landscape.");

  const nextStage = () => {
    if (stage < 5) setStage((stage + 1) as Stage);
  };

  const prevStage = () => {
    if (stage > 1) setStage((stage - 1) as Stage);
  };

  const resetRole = () => {
    setRole(null);
    setStage(1);
    setLeadSubStage('dashboard');
    setOrganizerSubStage('agenda');
    setAudienceSubStage('dashboard');
    setDesignerSubStage('baseline');
    setSharedContent('');
    setSharedAgenda([]);
    setAudienceData(null);
  };

  const resetStage = () => setStage(1);

  const startFabricationWithAgenda = (agenda: any[]) => {
    setSharedAgenda(agenda);
    setOrganizerSubStage('fabrication');
  };

  const completeAudienceSurvey = (data: any) => {
    setAudienceData(data);
    setAudienceSubStage('recommendation');
  };

  const navigateTo = (r: Role, options?: { stage?: Stage, leadSub?: LeadSubStage, organizerSub?: OrganizerSubStage, audienceSub?: AudienceSubStage, designerSub?: DesignerSubStage }) => {
    setRole(r);
    if (options?.stage) setStage(options.stage);
    if (options?.leadSub) setLeadSubStage(options.leadSub);
    if (options?.organizerSub) setOrganizerSubStage(options.organizerSub);
    if (options?.audienceSub) setAudienceSubStage(options.audienceSub);
    if (options?.designerSub) setDesignerSubStage(options.designerSub);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-primary/20 selection:text-primary">
      <Header stage={stage} onLogoClick={resetRole} currentRole={role} onNavigate={navigateTo} />
      
      <main className="flex-grow flex flex-col items-center justify-center px-6 py-12">
        <AnimatePresence mode="wait">
          {!role && (
            <RoleSelection key="role-selection" onNavigate={navigateTo} />
          )}

          {role === 'designer' && (
            <div className="w-full flex flex-col items-center gap-2">
              {/* Top-level unified Tab switcher for the entire designer workspace */}
              <div className="flex bg-slate-100 p-1 rounded-2xl border border-slate-200/50 mb-4 shadow-sm shrink-0">
                <button
                  onClick={() => {
                    setDesignerSubStage('baseline');
                    setStage(1);
                  }}
                  className={`px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all cursor-pointer ${
                    (stage === 1 && designerSubStage === 'baseline') || stage === 2
                      ? 'bg-primary text-white shadow-md'
                      : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  Inspiration Generator
                </button>
                <button
                  onClick={() => {
                    setDesignerSubStage('manuscripts');
                    setStage(1);
                  }}
                  className={`px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all cursor-pointer ${
                    (stage === 1 && designerSubStage === 'manuscripts') || stage === 4 || stage === 5
                      ? 'bg-primary text-white shadow-md'
                      : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  Creative Evaluation
                </button>
              </div>

              {stage === 1 && (
                <Stage1Discovery 
                  key="stage1" 
                  designerSubStage={designerSubStage}
                  setDesignerSubStage={setDesignerSubStage}
                  topic={topic}
                  setTopic={setTopic}
                  targetAudience={targetAudience}
                  setTargetAudience={setTargetAudience}
                  strategy={strategy}
                  setStrategy={setStrategy}
                  onBaseline={() => setStage(2)} 
                  onEvaluation={() => setStage(4)} 
                  onBack={resetRole} 
                />
              )}
              {stage === 2 && (
                <Stage3Results 
                  key="stage2" 
                  topic={topic}
                  targetAudience={targetAudience}
                  strategy={strategy}
                  onBack={() => setStage(1)} 
                  onNext={() => setStage(4)} 
                />
              )}
              {stage === 4 && (
                <Stage2Evaluating key="stage4" onComplete={() => setStage(5)} />
              )}
              {stage === 5 && (
                <Stage4Feedback key="stage5" onBack={() => {
                  setStage(1);
                  setDesignerSubStage('manuscripts');
                }} onReset={resetStage} />
              )}
            </div>
          )}

          {role === 'lead' && (
            <>
              {leadSubStage === 'dashboard' && (
                <LeadDashboard 
                  key="lead-dashboard"
                  onPosterWorkspace={() => setLeadSubStage('poster')} 
                  onKeynoteWorkspace={() => setLeadSubStage('keynote')}
                  onBack={resetRole}
                />
              )}
              {leadSubStage === 'poster' && (
                <LeadPosterWorkspace 
                  key="lead-poster"
                  onBack={() => setLeadSubStage('dashboard')}
                />
              )}
              {leadSubStage === 'keynote' && (
                <LeadKeynoteWorkspace 
                  key="lead-keynote"
                  onBack={() => setLeadSubStage('dashboard')}
                />
              )}
            </>
          )}

          {role === 'organizer' && (
            <>
              {organizerSubStage === 'agenda' && (
                <OrganizerAgendaDraft 
                  key="organizer-agenda"
                  onBack={resetRole}
                  onFabricate={startFabricationWithAgenda}
                />
              )}
              {organizerSubStage === 'fabrication' && (
                <OrganizerAssetFabrication 
                  key="organizer-fabrication"
                  agenda={sharedAgenda}
                  onBack={() => setOrganizerSubStage('agenda')}
                />
              )}
            </>
          )}

          {role === 'audience' && (
            <>
              {audienceSubStage === 'dashboard' && (
                <AudienceDashboard 
                  key="audience-dashboard"
                  onStartSurvey={() => setAudienceSubStage('survey')}
                  onBack={resetRole}
                />
              )}
              {audienceSubStage === 'survey' && (
                <AudienceSurvey 
                  key="audience-survey"
                  onBack={() => setAudienceSubStage('dashboard')}
                  onComplete={completeAudienceSurvey}
                />
              )}
              {audienceSubStage === 'recommendation' && (
                <AudienceRecommendation 
                  key="audience-recommendation"
                  data={audienceData}
                  onBack={() => setAudienceSubStage('survey')}
                />
              )}
            </>
          )}

          {role && role !== 'designer' && role !== 'lead' && role !== 'organizer' && role !== 'audience' && (
            <RolePlaceholder key="role-placeholder" role={role} onBack={resetRole} />
          )}
        </AnimatePresence>
      </main>

      <Footer />

      {/* Background Abstract Shapes */}
      <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-accent/5 rounded-full blur-[150px]"></div>
        <div className="absolute top-[20%] right-[15%] w-[30%] h-[30%] bg-secondary/5 rounded-full blur-[100px]"></div>
      </div>
    </div>
  );
}
