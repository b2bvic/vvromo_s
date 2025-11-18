

import React from 'react';
import { TIMELINE_DATA } from '../constants';
import { motion } from 'framer-motion';
import { MapPin, Terminal, AlertTriangle, CheckCircle2, BarChart3 } from 'lucide-react';

const Timeline: React.FC = () => {
  return (
    <section className="py-24 px-4 md:px-12 bg-surface border-b-4 border-ink relative scroll-mt-24" id="timeline">
      {/* Decorative vertical line */}
      <div className="absolute left-8 md:left-16 top-0 bottom-0 w-1 bg-gray-200 z-0 hidden md:block"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="mb-20 flex flex-col items-start">
          <div className="bg-ink text-white px-4 py-2 font-mono font-bold text-sm uppercase transform -rotate-2 shadow-brutal mb-4 inline-block">
             System_Logs.log
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-ink uppercase tracking-tighter leading-none">
            Operational<br/><span className="text-stroke-3 text-transparent bg-clip-text bg-gradient-to-r from-ink to-ink" style={{ WebkitTextStroke: '2px black' }}>History</span>
          </h2>
        </div>

        <div className="space-y-12">
          {TIMELINE_DATA.map((event, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-0 md:pl-12"
            >
              {/* Connector for Desktop */}
              <div className="hidden md:block absolute left-0 top-8 w-8 h-1 bg-ink"></div>
              <div className="hidden md:block absolute -left-[6px] top-[26px] w-4 h-4 bg-white border-4 border-ink rounded-full"></div>

              <div className={`border-4 border-ink p-0 bg-white shadow-brutal hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200 ${
                  event.category === 'crucible' ? 'border-l-[12px] border-l-accent' : 
                  event.category === 'mastery' ? 'border-l-[12px] border-l-secondary' : ''
              }`}>
                
                {/* Header Bar */}
                <div className="bg-gray-100 border-b-4 border-ink p-3 flex flex-wrap justify-between items-center gap-2">
                    <div className="font-mono font-bold text-lg flex items-center gap-3">
                        <span className="bg-ink text-white px-2 py-0.5">{event.year}</span>
                        <span className="uppercase text-xs md:text-sm text-gray-600 flex items-center gap-1">
                            <MapPin size={12} /> {event.location}
                        </span>
                    </div>
                    <div className="flex gap-2">
                        <div className="w-3 h-3 border-2 border-ink bg-white rounded-full"></div>
                        <div className="w-3 h-3 border-2 border-ink bg-white rounded-full"></div>
                    </div>
                </div>

                {/* Content Body */}
                <div className="p-6 md:p-8">
                    <div className="flex items-start justify-between mb-4">
                        <h3 className="text-2xl md:text-3xl font-black uppercase leading-none">
                            {event.title}
                        </h3>
                        {event.category === 'crucible' && <AlertTriangle size={28} className="text-accent" strokeWidth={3} />}
                        {event.category === 'mastery' && <CheckCircle2 size={28} className="text-secondary" strokeWidth={3} />}
                    </div>
                    
                    <p className="font-mono text-sm md:text-base font-medium leading-relaxed text-gray-800 mb-6">
                        <span className="text-accent font-bold mr-2">{'>'}</span>
                        {event.description}
                    </p>

                    {/* Execution Metrics Callout */}
                    {event.stats && (
                        <div className="bg-gray-50 border-2 border-ink p-4 font-mono text-xs mb-6 relative">
                            <div className="absolute -top-3 left-3 bg-white px-1 border-2 border-ink text-[10px] font-black uppercase text-brand-blue flex items-center gap-1">
                                <BarChart3 size={10} /> EXECUTION_METRICS
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-1">
                                {event.stats.map((stat, i) => (
                                    <div key={i} className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-accent flex-shrink-0"></span>
                                        <span className="font-bold text-ink">{stat}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Footer Tags */}
                    <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 border-2 border-ink text-[10px] font-bold uppercase bg-white text-gray-500">
                            cat: {event.category}
                        </span>
                    </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;