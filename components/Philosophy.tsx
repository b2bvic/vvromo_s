import React from 'react';
import { PRINCIPLES, TESTIMONIALS } from '../constants';
import { motion } from 'framer-motion';
import { Cpu, Terminal, FileCode, MessageSquare, AlertCircle } from 'lucide-react';

const Philosophy: React.FC = () => {
  return (
    <section className="py-24 px-4 md:px-12 bg-bg border-b-4 border-ink relative overflow-hidden scroll-mt-24 transition-colors duration-300" id="philosophy">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid-sm opacity-40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
        
        {/* Column 1: Kernel Config (Principles) */}
        <div className="flex flex-col h-full">
          <div className="flex items-center gap-3 mb-6 border-b-4 border-ink pb-4 bg-surface p-4 shadow-brutal">
              <FileCode size={32} className="text-ink" strokeWidth={2} />
              <div>
                  <h2 className="text-2xl font-black text-ink uppercase tracking-tighter leading-none">
                    System_Kernel
                  </h2>
                  <span className="font-mono text-xs font-bold text-gray-500">kernel_config.json</span>
              </div>
          </div>

          <div className="bg-[#1e1e1e] border-4 border-ink shadow-brutal-lg p-6 font-mono text-sm md:text-base overflow-hidden relative flex-grow">
            <div className="absolute top-0 right-0 bg-ink text-white text-[10px] px-2 py-1 font-bold uppercase">read-only</div>
            <div className="text-gray-400 overflow-y-auto max-h-[600px] custom-scrollbar">
                <span className="text-purple-400">{"{"}</span>
                <br />
                <div className="pl-4">
                    <span className="text-blue-400">"system_version"</span>: <span className="text-green-400">"2.5.0"</span>,
                    <br />
                    <span className="text-blue-400">"core_axioms"</span>: <span className="text-purple-400">{"["}</span>
                    {PRINCIPLES.map((principle, idx) => (
                        <div key={principle.id} className="pl-4 my-1 group hover:bg-white/5 p-1 rounded cursor-default">
                            <span className="text-yellow-400">{"{"}</span>
                            <br/>
                            <div className="pl-4">
                                <span className="text-blue-300">"id"</span>: <span className="text-orange-400">{principle.id}</span>,
                                <br/>
                                <span className="text-blue-300">"protocol"</span>: <span className="text-green-300">"{principle.title}"</span>,
                                <br/>
                                <span className="text-blue-300">"definition"</span>: <span className="text-gray-300">"{principle.description}"</span>
                            </div>
                            <span className="text-yellow-400">{"}"}</span>
                            {idx < PRINCIPLES.length - 1 && <span className="text-gray-500">,</span>}
                        </div>
                    ))}
                    <span className="text-purple-400">{"]"}</span>
                </div>
                <span className="text-purple-400">{"}"}</span>
            </div>
          </div>
        </div>

        {/* Column 2: Reputation Log (Testimonials) */}
        <div className="flex flex-col h-full">
          <div className="flex items-center gap-3 mb-6 border-b-4 border-ink pb-4 bg-surface p-4 shadow-brutal">
              <Terminal size={32} className="text-ink" strokeWidth={2} />
              <div>
                  <h2 className="text-2xl font-black text-ink uppercase tracking-tighter leading-none">
                    Reputation_Log
                  </h2>
                  <span className="font-mono text-xs font-bold text-gray-500">/var/log/social_proof.log</span>
              </div>
          </div>

          <div className="overflow-y-auto max-h-[600px] pr-2 space-y-6 custom-scrollbar">
             {TESTIMONIALS.map((testimonial, index) => (
                 <motion.div 
                    key={testimonial.id}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="bg-surface border-4 border-ink shadow-brutal p-6 relative group hover:bg-ink hover:text-inverse transition-colors"
                 >
                    {/* Terminal Header Style */}
                    <div className="flex justify-between items-center mb-4 border-b-2 border-gray-200 group-hover:border-gray-700 pb-2 font-mono text-xs uppercase tracking-wider">
                        <span className="flex items-center gap-2 text-ink group-hover:text-inverse">
                            <AlertCircle size={14} className="text-accent" /> 
                            {testimonial.context}
                        </span>
                        <span className="text-gray-400 group-hover:text-gray-500">{testimonial.id}</span>
                    </div>

                    <div className="relative">
                        <MessageSquare size={40} className="absolute -top-2 -left-2 opacity-5 text-gray-400 group-hover:text-white group-hover:opacity-10" />
                        <p className="font-mono text-sm md:text-base font-bold leading-relaxed relative z-10 mb-4 text-ink group-hover:text-inverse">
                            "{testimonial.quote}"
                        </p>
                        
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-subtle border-2 border-ink group-hover:border-inverse group-hover:bg-gray-800 flex items-center justify-center font-black text-sm text-ink group-hover:text-white">
                                {testimonial.author.charAt(0)}
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-sm uppercase text-ink group-hover:text-inverse">{testimonial.author}</span>
                                <span className="text-xs font-mono text-gray-500 group-hover:text-gray-400">{testimonial.role}</span>
                            </div>
                        </div>
                    </div>

                    {/* Connector Line for flow feel */}
                    {index < TESTIMONIALS.length - 1 && (
                        <div className="absolute left-1/2 bottom-[-28px] w-1 h-6 bg-ink group-hover:bg-ink z-0"></div>
                    )}
                 </motion.div>
             ))}
             
             {/* Final System Status Block */}
             <div className="bg-ink text-inverse p-4 border-4 border-ink shadow-brutal mt-8 font-mono text-xs">
                <p className="mb-1"><span className="text-green-400">root@romo_s:~$</span> tail -f /var/log/reputation</p>
                <p className="text-gray-400">Monitoring incoming signals...</p>
                <div className="mt-2 w-3 h-5 bg-green-400 animate-pulse"></div>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Philosophy;