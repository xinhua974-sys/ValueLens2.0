import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white/50 backdrop-blur-sm py-8 border-t border-slate-100 shrink-0">
      <div className="max-w-7xl mx-auto px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
          <span className="font-bold text-slate-900 text-[10px] tracking-tight uppercase">VALUE LENS HQ</span>
          <span className="text-slate-400 text-[10px] font-medium hidden md:block">| AI-Powered Design Forge</span>
        </div>
        <div className="flex gap-8 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
          <a className="hover:text-primary transition-colors" href="#">Privacy</a>
          <a className="hover:text-primary transition-colors" href="#">Terms</a>
          <a className="hover:text-primary transition-colors" href="#">Support</a>
          <a className="hover:text-primary transition-colors" href="#">API</a>
        </div>
        <span className="text-slate-400 text-[10px] font-medium">© 2024 Value Lens AI.</span>
      </div>
    </footer>
  );
}
