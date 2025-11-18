import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Philosophy from './components/Philosophy';
import Ventures from './components/Ventures';
import ChatInterface from './components/ChatInterface';
import FinalAction from './components/FinalAction';
import Methodology from './components/Methodology';
import { Linkedin, Twitter, Cpu, Moon, Sun } from 'lucide-react';

const App: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  
  // Theme State Management
  const [theme, setTheme] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      // Check localStorage first
      const saved = localStorage.getItem('theme');
      if (saved) return saved;
      // Fallback to device preference
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="min-h-screen bg-bg text-ink font-sans selection:bg-accent selection:text-white transition-colors duration-300">
      {/* Background Grid */}
      <div className="fixed inset-0 bg-grid-pattern bg-grid-sm pointer-events-none z-0 opacity-30 dark:opacity-10"></div>

      {/* Navigation Bar - Heavy Duty */}
      <nav className="sticky top-0 left-0 w-full z-40 bg-surface border-b-4 border-ink shadow-brutal transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-suit border-4 border-ink flex items-center justify-center">
              <Cpu size={20} className="text-white" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-black text-xl tracking-tighter uppercase italic">ROMO_S</span>
              <span className="font-mono text-[10px] font-bold bg-ink text-inverse px-1 inline-block self-start">SYS.V2.5</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-6 text-sm font-bold font-mono uppercase tracking-tight">
            <a 
              href="#ecosystem" 
              className="relative px-3 py-2 border-2 border-transparent hover:border-ink hover:bg-highlight hover:text-ink hover:shadow-brutal-sm transition-all active:translate-y-1 active:shadow-none"
            >
              Ecosystem
            </a>
            <a 
              href="#methodology" 
              className="relative px-3 py-2 border-2 border-transparent hover:border-ink hover:bg-highlight hover:text-ink hover:shadow-brutal-sm transition-all active:translate-y-1 active:shadow-none"
            >
              The Flywheel
            </a>
            <a 
              href="#timeline" 
              className="relative px-3 py-2 border-2 border-transparent hover:border-ink hover:bg-highlight hover:text-ink hover:shadow-brutal-sm transition-all active:translate-y-1 active:shadow-none"
            >
              History
            </a>
          </div>

          <div className="flex items-center gap-3">
             <button 
              onClick={toggleTheme}
              className="w-10 h-10 flex items-center justify-center border-3 border-ink bg-surface hover:bg-ink hover:text-inverse transition-colors hover:shadow-brutal-sm"
              aria-label="Toggle Dark Mode"
            >
              {theme === 'light' ? <Moon size={20} strokeWidth={3} /> : <Sun size={20} strokeWidth={3} />}
            </button>
            <a href="https://twitter.com/b2bvic" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center border-3 border-ink bg-surface hover:bg-secondary hover:text-white transition-colors hover:shadow-brutal-sm">
              <Twitter size={20} strokeWidth={3} />
            </a>
            <a href="https://linkedin.com/in/victorvalentineromo" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center border-3 border-ink bg-surface hover:bg-secondary hover:text-white transition-colors hover:shadow-brutal-sm">
              <Linkedin size={20} strokeWidth={3} />
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content - Container */}
      <main className="relative z-10 border-x-0 md:border-x-4 border-ink max-w-7xl mx-auto bg-surface shadow-brutal-xl my-0 md:my-12 transition-colors duration-300">
        <Hero onOpenChat={() => setIsChatOpen(true)} />
        
        {/* Divider Tape */}
        <div className="w-full h-12 bg-ink flex items-center overflow-hidden select-none">
           <div className="whitespace-nowrap font-mono text-highlight font-bold uppercase text-sm animate-marquee">
              /// STRUCTURE INFORMATION /// SCALE INTELLIGENCE /// APPLIED INFORMATION SYSTEMS /// HYBRID INTELLIGENCE ARCHITECTURE /// 
              /// STRUCTURE INFORMATION /// SCALE INTELLIGENCE /// APPLIED INFORMATION SYSTEMS /// HYBRID INTELLIGENCE ARCHITECTURE /// 
           </div>
        </div>
        
        <Ventures />

        <Methodology />

        <div className="w-full h-4 bg-accent border-y-4 border-ink bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')]"></div>

        <Timeline />
        
        <div className="w-full border-b-4 border-ink"></div>
        
        <Philosophy />
        
        <FinalAction />
        
      </main>

      {/* Footer */}
      <footer className="py-16 border-t-4 border-ink bg-ink text-inverse text-center relative z-10 transition-colors duration-300" id="contact">
        <div className="max-w-7xl mx-auto px-4">
            <div className="inline-block border-2 border-inverse p-4 mb-8 rotate-1 hover:rotate-0 transition-transform bg-suit text-white shadow-[4px_4px_0px_0px_var(--inverse)]">
                <p className="font-black uppercase text-2xl italic">"Structure is Strategy."</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-mono text-xs text-left border-t border-gray-600 pt-8">
                <div>
                    <h4 className="font-bold text-accent mb-2 uppercase">Location Data</h4>
                    <p>Raleigh, NC (Current)</p>
                    <p>Inland Empire, CA (Origin)</p>
                </div>
                <div>
                    <h4 className="font-bold text-accent mb-2 uppercase">Connect</h4>
                    <p>@b2bvic (All Networks)</p>
                    <p><a href="https://scalewithsearch.com" className="underline hover:text-white">scalewithsearch.com</a></p>
                </div>
                <div>
                    <h4 className="font-bold text-accent mb-2 uppercase">Legal</h4>
                    <p>&copy; {new Date().getFullYear()} V.V.R.</p>
                    <p>Information Architect</p>
                </div>
            </div>
        </div>
      </footer>

      {/* Gemini Chat Interface */}
      <ChatInterface isOpen={isChatOpen} setIsOpen={setIsChatOpen} />
    </div>
  );
};

export default App;