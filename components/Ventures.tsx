import React from 'react';
import { VENTURES } from '../constants';
import { ExternalLink, Box, ArrowUpRight, Disc, Lock, LayoutTemplate, FileText, Users, Archive, Laptop } from 'lucide-react';

const Ventures: React.FC = () => {
  const getIcon = (id: string) => {
      switch(id) {
          case 'founder-os': return <LayoutTemplate size={40} strokeWidth={2} />;
          case 'cohort': return <FileText size={40} strokeWidth={2} />;
          case 'collective': return <Users size={40} strokeWidth={2} />;
          case 'focus': return <Laptop size={40} strokeWidth={2} />;
          default: return <Box size={40} strokeWidth={2} />;
      }
  }

  return (
    <section className="py-24 px-4 md:px-8 bg-surface scroll-mt-24 transition-colors duration-300" id="ecosystem">
      <div className="max-w-7xl mx-auto">
         {/* Header */}
         <header className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-4 border-ink pb-6">
            <div>
                <div className="flex items-center gap-2 mb-2">
                    <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="font-mono text-xs font-bold uppercase text-gray-500">SWS_ECOSYSTEM_V2.0</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-black text-ink uppercase tracking-tighter">
                  The<br/>
                  <span className="text-transparent text-outline-ink">Value Ladder</span>
                </h2>
            </div>
            <div className="hidden md:flex items-center gap-4">
                <div className="p-4 bg-brand-blue text-white border-4 border-ink font-mono text-xs font-bold uppercase shadow-brutal rotate-2">
                    Full Stack
                </div>
                <div className="p-4 bg-subtle border-4 border-ink -rotate-1">
                    <Disc size={48} strokeWidth={2} className="text-ink animate-spin-slow" />
                </div>
            </div>
         </header>

         {/* Main Grid */}
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {VENTURES.map((venture) => (
              <article key={venture.id} className="group relative flex flex-col h-full">
                 {/* 3D Block Effect Base */}
                 <div className={`absolute inset-0 translate-x-3 translate-y-3 border-2 border-ink ${
                     venture.color === 'brand-blue' ? 'bg-brand-blue' : 
                     venture.color === 'suit' ? 'bg-suit' : 
                     venture.color === 'found' ? 'bg-found' :
                     venture.color === 'browser-os' ? 'bg-browser-os' :
                     venture.color === 'accent' ? 'bg-accent' : 'bg-ink'
                 }`}></div>
                 
                 <div className="relative flex-1 bg-surface border-4 border-ink p-6 md:p-10 flex flex-col transition-transform duration-200 hover:-translate-y-1 hover:-translate-x-1">
                    
                    {/* Coming Soon Badge */}
                    {venture.isComingSoon && (
                        <div className="absolute top-0 right-0 bg-ink text-inverse px-3 py-1 font-mono text-xs font-bold uppercase border-l-4 border-b-4 border-ink z-20 shadow-sm">
                            WAITLIST_OPEN
                        </div>
                    )}

                    {/* Card Header */}
                    <div className="flex justify-between items-start mb-6 border-b-4 border-ink pb-6">
                        <div>
                             <div className="flex gap-2 mb-3">
                                 <div className={`inline-block px-3 py-1 text-white font-mono text-xs font-bold uppercase border-2 border-ink ${
                                     venture.color === 'brand-blue' ? 'bg-brand-blue' : 
                                     venture.color === 'suit' ? 'bg-suit' : 
                                     venture.color === 'found' ? 'bg-found' :
                                     venture.color === 'browser-os' ? 'bg-browser-os' :
                                     venture.color === 'accent' ? 'bg-accent' : 'bg-ink'
                                 }`}>
                                    {venture.role}
                                 </div>
                                 {venture.level && (
                                    <div className="inline-block px-3 py-1 bg-subtle text-ink font-mono text-xs font-bold uppercase border-2 border-ink">
                                        {venture.level}
                                    </div>
                                 )}
                             </div>
                             <h3 className="text-3xl md:text-4xl font-black text-ink uppercase leading-none tracking-tight">
                                {venture.name}
                             </h3>
                        </div>
                        <div className="hidden md:block opacity-100 text-ink">
                            {getIcon(venture.id)}
                        </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-lg font-bold text-ink mb-8 leading-relaxed">
                        {venture.description}
                    </p>

                    {/* Identity Tags (Implicit Audience) */}
                    <div className="mb-8">
                        <div className="flex flex-wrap gap-2">
                            {venture.audience.map((aud, i) => (
                                <span key={i} className="px-3 py-1.5 bg-subtle border-2 border-ink text-xs font-bold uppercase flex items-center gap-2 text-ink">
                                    <span className={`w-1.5 h-1.5 rounded-full ${
                                     venture.color === 'brand-blue' ? 'bg-brand-blue' : 
                                     venture.color === 'suit' ? 'bg-suit' : 
                                     venture.color === 'found' ? 'bg-found' :
                                     venture.color === 'browser-os' ? 'bg-browser-os' :
                                     venture.color === 'accent' ? 'bg-accent' : 'bg-ink'
                                    }`}></span>
                                    {aud}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Features / Content Pillars */}
                    <div className="bg-subtle border-2 border-ink p-4 mb-8 flex-grow">
                        <div className="font-mono text-xs font-bold uppercase text-gray-500 mb-3 border-b-2 border-ink/20 pb-2">
                            Core Modules
                        </div>
                        <ul className="space-y-3">
                            {venture.features.map((feat, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm font-bold text-ink">
                                    <div className={`mt-1 w-2 h-2 flex-shrink-0 ${
                                        venture.color === 'brand-blue' ? 'bg-brand-blue' : 
                                        venture.color === 'suit' ? 'bg-suit' : 
                                        venture.color === 'found' ? 'bg-found' :
                                        venture.color === 'browser-os' ? 'bg-browser-os' :
                                        venture.color === 'accent' ? 'bg-accent' : 'bg-ink'
                                    }`}></div>
                                    {feat}
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    {/* CTA */}
                    <a 
                        href={venture.link} 
                        target={venture.link === '#' ? '_self' : '_blank'}
                        rel="noreferrer"
                        onClick={(e) => venture.link === '#' && e.preventDefault()}
                        className={`w-full py-4 text-white border-4 border-ink font-black text-lg uppercase text-center hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-brutal-sm active:shadow-none active:translate-x-[2px] active:translate-y-[2px] ${
                            venture.color === 'brand-blue' ? 'bg-brand-blue' : 
                            venture.color === 'suit' ? 'bg-suit' : 
                            venture.color === 'found' ? 'bg-found' :
                            venture.color === 'browser-os' ? 'bg-browser-os' :
                            venture.color === 'accent' ? 'bg-accent' : 'bg-ink'
                        } ${venture.isComingSoon ? 'cursor-not-allowed opacity-90' : ''}`}
                    >
                        {venture.cta} {venture.isComingSoon ? <Lock size={20} strokeWidth={3} /> : <ArrowUpRight size={24} strokeWidth={3} />}
                    </a>
                 </div>
              </article>
            ))}
         </div>
      </div>
    </section>
  );
};

export default Ventures;