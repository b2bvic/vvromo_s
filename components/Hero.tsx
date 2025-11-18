import React, { useState, useEffect } from 'react';
import { Terminal, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  onOpenChat: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenChat }) => {
  const [bootText, setBootText] = useState<string[]>([]);
  
  useEffect(() => {
    const sequences = [
      "BOOT_KERNEL...",
      "LOADING_DIGITAL_TWIN...",
      "OPTIMIZING_NEURAL_PATHWAYS...",
      "SYNCING_KNOWLEDGE_GRAPH...",
      "ROMO_S_ONLINE."
    ];
    
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < sequences.length) {
        const text = sequences[currentIndex];
        if (text) {
            setBootText(prev => [...prev, text]);
        }
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 400); // Reverted to 400ms for deliberate retro feel
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center border-b-4 border-ink bg-bg overflow-hidden transition-colors duration-300">
      
      {/* Top Bar - Tech Spec */}
      <header className="w-full border-b-4 border-ink bg-surface px-4 py-2 flex justify-between items-center text-xs font-mono font-bold uppercase tracking-widest z-30 relative">
        <span className="bg-ink text-inverse px-2 py-0.5">SYS_ID: ROMO_S</span>
        <span className="flex items-center gap-2">
          STATUS: ONLINE
          <span className="w-3 h-3 bg-green-500 border-2 border-ink animate-pulse"></span>
        </span>
      </header>

      <div className="flex-1 flex flex-col items-center justify-center z-10 relative p-6 md:p-12">
        
        {/* Centered Main Content */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative w-full max-w-6xl text-center"
        >
            <div className="font-mono text-sm font-bold text-gray-500 mb-6 text-left md:text-center max-w-lg mx-auto min-h-[80px]">
               {bootText.map((txt, i) => (
                 <div key={i} className="text-xs md:text-sm leading-tight text-ink opacity-70">
                   {`> ${txt}`}
                 </div>
               ))}
            </div>
            
            <div className="relative inline-block mb-6">
                <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-black text-ink font-sans tracking-tighter leading-[0.9] uppercase mix-blend-normal relative z-10">
                STRUCTURE<br/>
                INFORMATION<br/>
                <span className="text-suit">SCALE</span> INTELLIGENCE
                </h1>
                <div className="absolute top-[4px] left-[4px] text-5xl md:text-7xl lg:text-[7rem] font-black text-transparent font-sans tracking-tighter leading-[0.9] uppercase z-0 text-outline-ink w-full select-none" aria-hidden="true">
                STRUCTURE<br/>
                INFORMATION<br/>
                SCALE INTELLIGENCE
                </div>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center mb-10">
                <div className="bg-ink text-inverse px-4 py-2 inline-block transform -rotate-1 shadow-brutal border-2 border-inverse outline outline-3 outline-ink">
                    <h2 className="text-lg md:text-2xl font-mono font-bold">
                    HYBRID_INTELLIGENCE
                    </h2>
                </div>
                <div className="bg-surface text-ink border-3 border-ink px-4 py-2 inline-block transform rotate-1 shadow-brutal">
                    <h2 className="text-lg md:text-2xl font-mono font-bold">
                    INFO_ARCHITECT
                    </h2>
                </div>
            </div>

            <div className="text-lg md:text-2xl font-bold text-ink max-w-3xl mx-auto leading-tight mb-12 bg-surface/80 backdrop-blur-sm p-6 border-4 border-ink shadow-brutal-sm">
              <p className="mb-4">
                Applying the principles of Information Retrieval to architect proprietary AI moats and autonomous acquisition systems.
              </p>
              <p className="text-base md:text-lg font-medium text-ink opacity-80">
                The same rules that master Google—the world's largest AI—are the rules for building your own.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4 w-full">
              <button 
                onClick={onOpenChat}
                className="group relative w-full md:w-auto px-8 py-5 bg-ink border-4 border-ink text-inverse font-black text-xl shadow-brutal hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all flex items-center justify-center gap-3 uppercase overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                    <Terminal size={24} strokeWidth={3} className="text-accent" /> INITIALIZE_CHAT
                </span>
              </button>
              <a href="https://scalewithsearch.com/consulting" target="_blank" rel="noreferrer" className="group w-full md:w-auto px-8 py-5 bg-surface border-4 border-ink text-ink font-black text-xl shadow-brutal hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all flex items-center justify-center gap-3 uppercase">
                HIRE_THE_ARCHITECT <ArrowRight size={24} strokeWidth={3} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;