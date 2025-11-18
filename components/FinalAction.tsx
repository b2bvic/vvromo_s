

import React from 'react';
import { ArrowRight, Zap, FileText, BarChart } from 'lucide-react';

const FinalAction: React.FC = () => {
  return (
    <section className="relative z-20 border-t-4 border-ink">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[500px]">
        
        {/* Channel A: STRUCTURE (Blue) */}
        <div className="group relative bg-brand-blue border-b-4 md:border-b-0 md:border-r-4 border-ink overflow-hidden flex flex-col justify-between p-8 md:p-16 hover:brightness-110 transition-all">
           {/* Background Decos */}
           <div className="absolute top-0 right-0 p-4 opacity-20 text-white">
               <BarChart size={200} strokeWidth={1} />
           </div>
           
           <div className="relative z-10">
               <div className="inline-block bg-white text-brand-blue font-mono text-xs font-black uppercase px-3 py-1 border-2 border-ink mb-6 shadow-brutal-sm transform -rotate-2">
                   Level 3: High_Frequency
               </div>
               <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-6">
                   Structure<br/>Information
               </h2>
               <p className="text-white font-medium text-lg md:text-xl max-w-md leading-relaxed border-l-4 border-white pl-4 mb-8">
                   Founder's AI Operating System. Architect proprietary digital moats and autonomous acquisition.
               </p>
               <ul className="text-blue-100 font-mono text-sm space-y-2 mb-10">
                   <li className="flex items-center gap-2">
                       <span className="w-2 h-2 bg-white"></span> HYBRID_INTELLIGENCE
                   </li>
                   <li className="flex items-center gap-2">
                       <span className="w-2 h-2 bg-white"></span> INFERENCE_CLUSTERS
                   </li>
                   <li className="flex items-center gap-2">
                       <span className="w-2 h-2 bg-white"></span> ZERO_TRUST_DATA
                   </li>
               </ul>
           </div>

           <a 
             href="https://scalewithsearch.com/consulting" 
             target="_blank" 
             rel="noreferrer"
             className="relative z-10 bg-white text-brand-blue border-4 border-ink px-8 py-5 font-black text-xl uppercase flex items-center justify-between group-hover:translate-x-2 transition-transform shadow-brutal hover:shadow-none"
           >
               <span>Build The Moat</span>
               <ArrowRight size={24} strokeWidth={3} />
           </a>
        </div>

        {/* Channel B: SCALE (Purple) */}
        <div className="group relative bg-suit overflow-hidden flex flex-col justify-between p-8 md:p-16 hover:brightness-110 transition-all">
           {/* Background Decos */}
           <div className="absolute bottom-0 left-0 p-4 opacity-20 text-white">
               <FileText size={200} strokeWidth={1} />
           </div>

           <div className="relative z-10">
               <div className="inline-block bg-white text-suit font-mono text-xs font-black uppercase px-3 py-1 border-2 border-ink mb-6 shadow-brutal-sm transform rotate-2">
                   Level 2: Strategy_Layer
               </div>
               <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-6">
                   Scale<br/>Intelligence
               </h2>
               <p className="text-white font-medium text-lg md:text-xl max-w-md leading-relaxed border-l-4 border-white pl-4 mb-8">
                   Strategic SEO in the AI Era. Position information as a strategic asset for the C-Suite.
               </p>
               <ul className="text-purple-100 font-mono text-sm space-y-2 mb-10">
                   <li className="flex items-center gap-2">
                       <span className="w-2 h-2 bg-white"></span> EXECUTIVE_COHORTS
                   </li>
                   <li className="flex items-center gap-2">
                       <span className="w-2 h-2 bg-white"></span> STRATEGIC_BRIEFS
                   </li>
                   <li className="flex items-center gap-2">
                       <span className="w-2 h-2 bg-white"></span> KNOWLEDGE_MANAGEMENT
                   </li>
               </ul>
           </div>

           <a 
             href="https://maven.com/course/strategy" 
             target="_blank" 
             rel="noreferrer"
             className="relative z-10 bg-white text-suit border-4 border-ink px-8 py-5 font-black text-xl uppercase flex items-center justify-between group-hover:translate-x-2 transition-transform shadow-brutal hover:shadow-none"
           >
               <span>Join Cohort</span>
               <Zap size={24} strokeWidth={3} />
           </a>
        </div>

      </div>
    </section>
  );
};

export default FinalAction;