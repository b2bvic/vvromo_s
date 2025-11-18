
import React from 'react';
import { ArrowRight, Zap, FileText, BarChart } from 'lucide-react';

const FinalAction: React.FC = () => {
  return (
    <section className="relative z-20 border-t-4 border-ink">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[500px]">
        
        {/* Channel A: SCALE (Blue) */}
        <div className="group relative bg-brand-blue border-b-4 md:border-b-0 md:border-r-4 border-ink overflow-hidden flex flex-col justify-between p-8 md:p-16 hover:brightness-110 transition-all">
           {/* Background Decos */}
           <div className="absolute top-0 right-0 p-4 opacity-20 text-white">
               <BarChart size={200} strokeWidth={1} />
           </div>
           
           <div className="relative z-10">
               <div className="inline-block bg-white text-brand-blue font-mono text-xs font-black uppercase px-3 py-1 border-2 border-ink mb-6 shadow-brutal-sm transform -rotate-2">
                   Channel_A: High_Frequency
               </div>
               <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-6">
                   Scale<br/>With<br/>Search
               </h2>
               <p className="text-white font-medium text-lg md:text-xl max-w-md leading-relaxed border-l-4 border-white pl-4 mb-8">
                   Architect proprietary digital moats. Transform manual chaos into self-evolving systems.
               </p>
               <ul className="text-blue-100 font-mono text-sm space-y-2 mb-10">
                   <li className="flex items-center gap-2">
                       <span className="w-2 h-2 bg-white"></span> AGENCY_ARCHITECTURE
                   </li>
                   <li className="flex items-center gap-2">
                       <span className="w-2 h-2 bg-white"></span> TECHNICAL_AUDITS
                   </li>
                   <li className="flex items-center gap-2">
                       <span className="w-2 h-2 bg-white"></span> HYBRID_INTELLIGENCE
                   </li>
               </ul>
           </div>

           <a 
             href="https://scalewithsearch.com/meet" 
             target="_blank" 
             rel="noreferrer"
             className="relative z-10 bg-white text-brand-blue border-4 border-ink px-8 py-5 font-black text-xl uppercase flex items-center justify-between group-hover:translate-x-2 transition-transform shadow-brutal hover:shadow-none"
           >
               <span>Start Audit</span>
               <ArrowRight size={24} strokeWidth={3} />
           </a>
        </div>

        {/* Channel B: LEAD (Purple) */}
        <div className="group relative bg-suit overflow-hidden flex flex-col justify-between p-8 md:p-16 hover:brightness-110 transition-all">
           {/* Background Decos */}
           <div className="absolute bottom-0 left-0 p-4 opacity-20 text-white">
               <FileText size={200} strokeWidth={1} />
           </div>

           <div className="relative z-10">
               <div className="inline-block bg-white text-suit font-mono text-xs font-black uppercase px-3 py-1 border-2 border-ink mb-6 shadow-brutal-sm transform rotate-2">
                   Channel_B: Strategy_Layer
               </div>
               <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-6">
                   SEO<br/>For<br/>Executives
               </h2>
               <p className="text-white font-medium text-lg md:text-xl max-w-md leading-relaxed border-l-4 border-white pl-4 mb-8">
                   Position SEO as a strategic asset. Connect search physics to executive cognition.
               </p>
               <ul className="text-purple-100 font-mono text-sm space-y-2 mb-10">
                   <li className="flex items-center gap-2">
                       <span className="w-2 h-2 bg-white"></span> STRATEGIC_BRIEFS
                   </li>
                   <li className="flex items-center gap-2">
                       <span className="w-2 h-2 bg-white"></span> THOUGHT_LEADERSHIP
                   </li>
                   <li className="flex items-center gap-2">
                       <span className="w-2 h-2 bg-white"></span> KNOWLEDGE_MANAGEMENT
                   </li>
               </ul>
           </div>

           <a 
             href="https://seoforexecutives.com" 
             target="_blank" 
             rel="noreferrer"
             className="relative z-10 bg-white text-suit border-4 border-ink px-8 py-5 font-black text-xl uppercase flex items-center justify-between group-hover:translate-x-2 transition-transform shadow-brutal hover:shadow-none"
           >
               <span>Read The Brief</span>
               <Zap size={24} strokeWidth={3} />
           </a>
        </div>

      </div>
    </section>
  );
};

export default FinalAction;