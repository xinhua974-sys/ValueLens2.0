import React, { useState, useRef, useEffect } from 'react';
import { 
  Sparkles, 
  ChevronDown, 
  Target, 
  FileText, 
  Layout, 
  Map, 
  Compass,
  Zap,
  Menu,
  X,
  Brush,
  Users,
  Calendar
} from 'lucide-react';

interface HeaderProps {
  stage: number;
  onLogoClick: () => void;
  currentRole: string | null;
  onNavigate?: (role: any, options?: any) => void;
}

export default function Header({ 
  stage, 
  onLogoClick,
  currentRole,
  onNavigate
}: HeaderProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close menus when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const roleGroups = [
    {
      id: 'designer',
      label: 'Visual Designer',
      icon: Brush,
      accentColor: 'border-value-gold/30 text-value-gold bg-value-gold/10',
      items: [
        {
          label: 'Inspiration Generator',
          description: 'Asset diagnostics & Core value mapping.',
          icon: Target,
          color: 'text-value-gold bg-value-gold/10 hover:bg-value-gold/20',
          action: () => onNavigate?.('designer', { stage: 1, designerSub: 'baseline' })
        },
        {
          label: 'Creative Evaluation',
          description: 'Drafting engine & Visual iteration.',
          icon: FileText,
          color: 'text-primary bg-primary/10 hover:bg-primary/20',
          action: () => onNavigate?.('designer', { stage: 1, designerSub: 'manuscripts' })
        }
      ]
    },
    {
      id: 'lead',
      label: 'Speaker',
      icon: Users,
      accentColor: 'border-secondary/30 text-secondary bg-secondary/10',
      items: [
        {
          label: 'Poster Workspace',
          description: 'Parse research nodes & synthesize standardized layouts.',
          icon: Sparkles,
          color: 'text-secondary bg-secondary/10 hover:bg-secondary/20',
          action: () => onNavigate?.('lead', { leadSub: 'poster' })
        },
        {
          label: 'Keynote Workspace',
          description: 'Draft & customize premium 16:9 slide masters.',
          icon: Layout,
          color: 'text-rose-500 bg-rose-500/10 hover:bg-rose-500/20',
          action: () => onNavigate?.('lead', { leadSub: 'keynote' })
        }
      ]
    },
    {
      id: 'organizer',
      label: 'Organizer',
      icon: Calendar,
      accentColor: 'border-indigo-500/30 text-indigo-500 bg-indigo-500/10',
      items: [
        {
          label: 'Organizer Console',
          description: 'Agenda planning & Physical fabrication.',
          icon: Map,
          color: 'text-indigo-500 bg-indigo-500/10 hover:bg-indigo-500/20',
          action: () => onNavigate?.('organizer', { organizerSub: 'agenda' })
        }
      ]
    },
    {
      id: 'audience',
      label: 'Audience',
      icon: Compass,
      accentColor: 'border-teal-500/30 text-teal-500 bg-teal-500/10',
      items: [
        {
          label: 'Personalized Journey',
          description: 'Personalized maps & Research journey.',
          icon: Compass,
          color: 'text-teal-500 bg-teal-500/10 hover:bg-teal-500/20',
          action: () => onNavigate?.('audience', { audienceSub: 'dashboard' })
        }
      ]
    }
  ];

  const handleItemClick = (action: () => void) => {
    action();
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="w-full shrink-0 sticky top-0 bg-white/90 backdrop-blur-md z-50 border-b border-slate-100" ref={dropdownRef}>
      <div className="flex justify-between items-center px-6 py-3.5 max-w-7xl mx-auto w-full relative">
        
        {/* Left Area: Logo */}
        <div className="flex items-center gap-6">
          <button 
            type="button"
            onClick={onLogoClick}
            className="flex items-center gap-2.5 hover:opacity-80 transition-opacity cursor-pointer group"
          >
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
              <Zap className="w-4 h-4 fill-current text-white" />
            </div>
            <span className="text-sm font-black tracking-tight text-primary font-mono uppercase">Value Lens</span>
          </button>
        </div>

        {/* Center: Integrated Role Dropdowns for desktop */}
        <div className="hidden lg:flex items-center gap-1 bg-slate-50/80 border border-slate-200/50 p-1 rounded-full relative">
          {roleGroups.map((group) => {
            const isOpen = activeDropdown === group.id;
            return (
              <div key={group.id} className="relative">
                <button
                  type="button"
                  onClick={() => setActiveDropdown(isOpen ? null : group.id)}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-full cursor-pointer text-[10px] font-black uppercase tracking-wider transition-all ${
                    isOpen 
                      ? 'bg-white text-primary shadow-sm' 
                      : 'text-slate-500 hover:text-slate-800 hover:bg-white/50'
                  }`}
                >
                  <group.icon className="w-3 h-3 text-slate-400" />
                  <span>{group.label}</span>
                  <ChevronDown className={`w-3 h-3 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180 text-primary' : ''}`} />
                </button>

                {/* Individual Role Dropdown Floating List */}
                {isOpen && (
                  <div className="absolute left-1/2 -translate-x-1/2 mt-3 w-72 bg-white rounded-3xl border border-slate-100 shadow-2xl z-20 p-2.5 space-y-1 transform origin-top animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="px-3 py-1.5 border-b border-slate-50 mb-1">
                      <span className="text-[8px] font-black uppercase text-slate-400 tracking-[0.25em]">
                        {group.label} modules
                      </span>
                    </div>
                    {group.items.map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleItemClick(item.action)}
                        className="w-full text-left flex items-start gap-3 p-2.5 rounded-2xl hover:bg-slate-50 transition-colors group/item"
                      >
                        <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${item.color}`}>
                          <item.icon className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs font-black text-slate-700 group-hover/item:text-primary transition-colors truncate">
                            {item.label}
                          </div>
                          <div className="text-[9px] font-medium text-slate-400 leading-tight mt-0.5">
                            {item.description}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Right Area: Active Info & User Avatar, with mobile hamburger */}
        <div className="flex items-center gap-3">
          {currentRole && (
            <div className="hidden sm:flex items-center rounded-full bg-slate-50 border border-slate-100 px-3 py-1 gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-[9px] font-black uppercase tracking-wider text-slate-500">
                {currentRole === 'lead' ? 'speaker' : currentRole} view
              </span>
            </div>
          )}

          <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-primary/25 shrink-0 select-none hidden sm:block">
            <img 
              alt="User Avatar" 
              src="https://picsum.photos/seed/user/100/100" 
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Mobile hamburger menu trigger */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 -mr-1 rounded-xl hover:bg-slate-50 text-slate-500 lg:hidden transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Navigation overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white/95 backdrop-blur-md px-6 py-6 space-y-6 absolute left-0 right-0 top-full shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          {roleGroups.map((group) => (
            <div key={group.id} className="space-y-2">
              <div className="flex items-center gap-2 px-2">
                <group.icon className="w-3.5 h-3.5 text-slate-400" />
                <span className="text-[9px] font-black uppercase text-slate-400 tracking-[0.3em]">{group.label}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {group.items.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleItemClick(item.action)}
                    className="flex items-center gap-3 p-3 bg-slate-50 hover:bg-slate-100 border border-slate-100 rounded-2xl text-left w-full transition-colors"
                  >
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${item.color}`}>
                      <item.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-black text-slate-800">{item.label}</div>
                      <div className="text-[9px] font-medium text-slate-400">{item.description}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
