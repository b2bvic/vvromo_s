
import React from 'react';
import { EXPERIENCE_DATA } from '../constants';
import { motion } from 'framer-motion';
import { ClipboardList, CheckSquare } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section className="py-24 px-4 md:px-12 bg-surface border-b-4 border-ink relative" id="experience">
      <div className="max-w-5xl mx-auto">
        <header className="mb-16 flex flex-col items-start">
          <div className="flex items-center gap-3 mb-4">
            <ClipboardList size={32} strokeWidth={2} className="text-ink" />
            <span className="font-mono font-bold text-sm uppercase bg-gray-200 px-2 py-1 border-2 border-ink">
                System_Data
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-ink uppercase tracking-tighter leading-none">
            Execution<br/>
            <span className="text-transparent text-outline-ink">Log</span>
          </h2>
        </header>

        <div className="grid grid-cols-1 gap-0 border-4 border-ink shadow-brutal-lg bg-white">
          {EXPERIENCE_DATA.map((job, index) => (
            <article 
                key={index} 
                className={`p-6 md:p-8 border-b-4 border-ink last:border-b-0 transition-colors hover:bg-gray-50 group relative`}
            >
               <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                  <header>
                      <h3 className="text-2xl md:text-3xl font-black uppercase text-ink leading-tight">
                          {job.role}
                      </h3>
                      <div className="font-bold text-lg text-brand-blue mt-1">
                          {job.company}
                      </div>
                  </header>
                  <div className="text-right flex flex-col items-start md:items-end">
                      <span className="bg-ink text-white px-3 py-1 font-mono text-xs font-bold uppercase mb-1 shadow-brutal-sm">
                          {job.period}
                      </span>
                      <span className="font-mono text-xs font-bold text-gray-500 uppercase">
                          {job.location}
                      </span>
                  </div>
               </div>

               <ul className="space-y-3">
                   {job.points.map((point, idx) => (
                       <li key={idx} className="flex items-start gap-3 text-sm md:text-base font-medium leading-relaxed text-gray-800">
                           <CheckSquare size={18} className="flex-shrink-0 mt-1 text-accent" strokeWidth={2.5} />
                           <span>{point}</span>
                       </li>
                   ))}
               </ul>
               
               {/* Decorative Index Number */}
               <div className="absolute top-4 right-4 font-mono text-6xl font-black text-gray-100 pointer-events-none -z-10 group-hover:text-gray-200 transition-colors">
                   0{index + 1}
               </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
