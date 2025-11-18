import React from 'react';
import { RotateCw, Hammer, Zap, Share2, MessageSquare, GraduationCap, TrendingUp, Award, GitBranch, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Methodology: React.FC = () => {
  const steps = [
    { id: 1, title: "BUILD", subtitle: "The Engine", icon: <Hammer size={24} />, desc: "Consulting work & R&D executed via Build-in-Public (BiP).", color: "bg-accent" },
    { id: 2, title: "GENERATE", subtitle: "The Fuel", icon: <Zap size={24} />, desc: "BiP generates Artifacts (code, diagrams, insights).", color: "bg-ink" },
    { id: 3, title: "DISTRIBUTE", subtitle: "Awareness", icon: <Share2 size={24} />, desc: "Artifacts distributed via Socials & Newsletter.", color: "bg-brand-blue" },
    { id: 4, title: "ENGAGE", subtitle: "Community", icon: <MessageSquare size={24} />, desc: "Traffic drives to the central hub (Skool).", color: "bg-secondary" },
    { id: 5, title: "EDUCATE", subtitle: "Enrollment", icon: <GraduationCap size={24} />, desc: "Engagement leads to enrollment (Courses/Maven).", color: "bg-suit" },
    { id: 6, title: "ASCEND", subtitle: "High-Ticket", icon: <TrendingUp size={24} />, desc: "Education nurtures leads for Enterprise Consulting.", color: "bg-green-600" },
    { id: 7, title: "PROVE", subtitle: "Case Studies", icon: <Award size={24} />, desc: "Success generates proof, fueling the engine.", color: "bg-found" },
  ];

  return (
    <section className="py-24 px-4 md:px-8 bg-bg border-b-4 border-ink scroll-mt-24 transition-colors duration-300" id="methodology">
      <div className="max-w-7xl mx-auto">
        
        {/* Header: The Frame */}
        <div className="flex flex-col items-center text-center mb-16">
           <div className="inline-flex items-center gap-2 bg-surface text-ink px-4 py-2 font-mono font-bold uppercase border-4 border-ink shadow-brutal mb-6 transform -rotate-1">
             <GitBranch size={16} />
             <span>Open Source Architecture</span>
           </div>
           <h2 className="text-5xl md:text-7xl font-black text-ink uppercase tracking-tighter leading-none mb-6">
             The<br/><span className="text-secondary">Living Lab</span>
           </h2>
           <p className="max-w-3xl font-bold text-lg md:text-xl text-ink opacity-70">
             We don't just architect systems; we exist inside one. <br className="hidden md:block"/>
             Below is the <span className="text-ink underline decoration-accent decoration-4">exact flywheel</span> running this business right now. We use radical transparency to prove the model works.
           </p>
        </div>

        {/* The Instance Container */}
        <div className="relative border-4 border-ink bg-subtle p-4 md:p-8 mb-12">
           {/* Label */}
           <div className="absolute -top-4 left-4 md:left-8 bg-ink text-inverse px-3 py-1 font-mono text-xs font-bold uppercase shadow-brutal-sm">
              INSTANCE: ROMO_S_V2.0
           </div>

           {/* Connecting Line for Desktop */}
           <div className="hidden lg:block absolute top-1/2 left-4 right-4 h-2 bg-ink -translate-y-1/2 z-0"></div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-6 relative z-10 pt-6">
              {steps.map((step, index) => (
                 <motion.div 
                    key={step.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col h-full"
                 >
                    <div className={`relative bg-surface border-4 border-ink p-4 flex flex-col items-center text-center h-full shadow-brutal hover:shadow-none hover:translate-y-[4px] hover:translate-x-[4px] transition-all`}>
                        
                        {/* Step Number Bubble */}
                        <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-surface border-4 border-ink rounded-full flex items-center justify-center font-black z-20 text-ink">
                            {step.id}
                        </div>

                        <div className={`w-12 h-12 ${step.color} text-white border-2 border-ink flex items-center justify-center mb-4 mt-4 shadow-sm`}>
                            {React.cloneElement(step.icon as React.ReactElement<any>, { strokeWidth: 3 })}
                        </div>
                        
                        <h3 className="font-black text-xl uppercase text-ink leading-none mb-1">{step.title}</h3>
                        <span className="font-mono text-[10px] font-bold uppercase bg-subtle text-ink px-2 py-0.5 mb-3 rounded-sm">{step.subtitle}</span>
                        
                        <p className="text-xs font-bold leading-tight text-gray-500 dark:text-gray-400">
                            {step.desc}
                        </p>

                        {/* Mobile Connector */}
                        {index < steps.length - 1 && (
                            <div className="lg:hidden absolute -bottom-10 left-1/2 -translate-x-1/2 w-2 h-8 bg-ink"></div>
                        )}
                    </div>
                 </motion.div>
              ))}
           </div>
        </div>
        
        {/* The Translation Layer (Context Switcher) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-surface border-4 border-ink p-8 shadow-brutal-lg relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute right-0 top-0 p-32 bg-accent opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

            <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-black text-ink uppercase mb-4 leading-none">
                    Universal Physics,<br/>
                    <span className="text-transparent text-outline-ink">Custom Nodes.</span>
                </h3>
                <p className="font-medium text-ink opacity-80 mb-6">
                    This diagram shows <span className="font-bold italic">my</span> implementation. Yours will look different. 
                    While the physics (Structure Information &rarr; Scale Intelligence) remain constant, the nodes adapt to your business model.
                </p>
                <div className="inline-flex items-center gap-2 font-mono text-sm font-bold uppercase bg-ink text-inverse px-6 py-3 border-4 border-ink shadow-brutal hover:bg-accent transition-colors cursor-default">
                    <RotateCw className="animate-spin-slow" />
                    Engineered to Order
                </div>
            </div>

            <div className="relative z-10 font-mono text-xs md:text-sm bg-subtle border-2 border-ink p-4 md:p-6">
                <div className="flex justify-between border-b-2 border-gray-300 pb-2 mb-4 uppercase font-bold text-gray-500">
                    <span>Variable</span>
                    <span>My Instance</span>
                    <span>Enterprise Instance</span>
                </div>
                
                <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-4 items-center">
                        <span className="font-bold text-ink">Input Source</span>
                        <span className="text-accent">Build-in-Public</span>
                        <span className="text-gray-500 flex items-center gap-1">Internal Data <ArrowRight size={10} /></span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 items-center">
                        <span className="font-bold text-ink">Knowledge Base</span>
                        <span className="text-accent">Skool / Maven</span>
                        <span className="text-gray-500 flex items-center gap-1">Proprietary RAG <ArrowRight size={10} /></span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 items-center">
                        <span className="font-bold text-ink">Output Value</span>
                        <span className="text-accent">Education</span>
                        <span className="text-gray-500 flex items-center gap-1">Market Dominance <ArrowRight size={10} /></span>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Methodology;