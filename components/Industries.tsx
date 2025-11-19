
import React from 'react';
import { INDUSTRIES_DATA } from '../constants';
import { motion } from 'framer-motion';
import { Database, Globe, Building2, Activity, HardHat, Briefcase, ShoppingBag } from 'lucide-react';

const Industries: React.FC = () => {
  const getIcon = (sectorName: string) => {
    if (sectorName.includes('Industrial')) return <Building2 size={28} />;
    if (sectorName.includes('Technology')) return <Database size={28} />;
    if (sectorName.includes('Healthcare')) return <Activity size={28} />;
    if (sectorName.includes('Construction')) return <HardHat size={28} />;
    if (sectorName.includes('Finance')) return <Briefcase size={28} />;
    if (sectorName.includes('Consumer')) return <ShoppingBag size={28} />;
    return <Globe size={28} />;
  };

  return (
    <section className="py-24 px-4 md:px-12 bg-surface border-b-4 border-ink relative transition-colors duration-300" id="industries">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="flex flex-col items-start">
                <div className="bg-ink text-inverse px-4 py-2 font-mono font-bold text-sm uppercase mb-4 inline-block shadow-brutal">
                    Proof_Of_Ubiquity
                </div>
                <h2 className="text-5xl md:text-7xl font-black text-ink uppercase tracking-tighter leading-none">
                    Sector<br/>
                    <span className="text-stroke-3 text-transparent bg-clip-text bg-gradient-to-r from-ink to-ink" style={{ WebkitTextStroke: '2px var(--ink)' }}>Agnostic</span>
                </h2>
            </div>
            <div className="max-w-md text-right md:text-left">
                <p className="font-bold text-lg text-ink opacity-80 border-l-4 border-accent pl-4">
                    The system doesn't care about the vertical. The principles of information architecture work everywhere.
                </p>
            </div>
        </div>

        {/* Grid Refactor: strict 1 col mobile, 2 col tablet, 3 col desktop for uniform 6-item grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INDUSTRIES_DATA.map((industry, index) => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05, ease: "easeOut" }}
              className="bg-subtle border-4 border-ink p-0 shadow-brutal hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all group flex flex-col h-full"
            >
                {/* Header */}
                <div className="bg-surface border-b-4 border-ink p-6 flex items-center gap-4 min-h-[100px]">
                    <div className="p-3 bg-ink text-inverse border-2 border-ink rounded-sm flex-shrink-0">
                        {getIcon(industry.sector)}
                    </div>
                    <h3 className="font-black text-xl uppercase text-ink leading-tight">
                        {industry.sector}
                    </h3>
                </div>

                {/* Body */}
                <div className="p-6 flex-1 flex flex-col">
                    <p className="font-mono text-xs font-bold text-gray-500 mb-6 leading-relaxed uppercase min-h-[48px]">
                        {industry.description}
                    </p>
                    
                    <div className="flex items-center gap-2 mb-2">
                         <span className="w-2 h-2 bg-accent animate-pulse"></span>
                         <span className="font-mono text-[10px] font-black uppercase text-ink">Deployment_Log:</span>
                    </div>

                    {/* Tablature Style Client List */}
                    {/* CHANGED: bg-neutral-900 instead of bg-ink to ensure terminal stays dark in Dark Mode */}
                    <div className="bg-neutral-900 border-2 border-ink p-3 flex-1 overflow-hidden flex flex-col">
                        <div className="font-mono text-[10px] text-green-400 mb-2 border-b border-gray-700 pb-1 uppercase flex justify-between">
                           <span>ENTITY_ID</span>
                           <span>STATUS: INDEXED</span>
                        </div>
                        <div className="overflow-y-auto max-h-[400px] custom-scrollbar pr-1 space-y-1">
                            {industry.clients.map((client, i) => (
                                <div key={i} className="flex items-center gap-2 text-[11px] font-bold text-gray-300 font-mono hover:text-white hover:bg-gray-800 px-1 transition-colors cursor-default">
                                    <span className="text-gray-600 text-[9px]">{i < 9 ? `0${i+1}` : i+1}</span>
                                    <span className="text-gray-500">|</span>
                                    <span className="truncate">{client}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer Decoration */}
                <div className="bg-ink p-1 flex justify-between items-center px-3">
                    <div className="flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    </div>
                    <span className="text-[9px] font-mono text-inverse uppercase tracking-widest">
                        SEC_ID: {industry.id}
                    </span>
                </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Industries;
