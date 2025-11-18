
import React from 'react';
import { RotateCw, Hammer, Zap, Share2, MessageSquare, GraduationCap, TrendingUp, Award } from 'lucide-react';
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
    <section className="py-24 px-4 md:px-8 bg-bg border-b-4 border-ink scroll-mt-24" id="methodology">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
           <div className="inline-block bg-white text-ink px-4 py-2 font-mono font-bold uppercase border-4 border-ink shadow-brutal mb-6 transform -rotate-1">
             Applied Information Systems
           </div>
           <h2 className="text-5xl md:text-7xl font-black text-ink uppercase tracking-tighter leading-none mb-6">
             The<br/><span className="text-secondary">Flywheel</span>
           </h2>
           <p className="max-w-2xl font-bold text-lg md:text-xl text-gray-600">
             How we structure information to scale intelligence. A self-reinforcing loop of build-in-public R&D and artifact generation.
           </p>
        </div>

        <div className="relative">
           {/* Connecting Line for Desktop */}
           <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-2 bg-ink -translate-y-1/2 z-0"></div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-6 relative z-10">
              {steps.map((step, index) => (
                 <motion.div 
                    key={step.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col h-full"
                 >
                    <div className={`relative bg-white border-4 border-ink p-4 flex flex-col items-center text-center h-full shadow-brutal hover:shadow-none hover:translate-y-[4px] hover:translate-x-[4px] transition-all`}>
                        
                        {/* Step Number Bubble */}
                        <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-white border-4 border-ink rounded-full flex items-center justify-center font-black z-20">
                            {step.id}
                        </div>

                        <div className={`w-12 h-12 ${step.color} text-white border-2 border-ink flex items-center justify-center mb-4 mt-4 shadow-sm`}>
                            {React.cloneElement(step.icon as React.ReactElement<any>, { strokeWidth: 3 })}
                        </div>
                        
                        <h3 className="font-black text-xl uppercase leading-none mb-1">{step.title}</h3>
                        <span className="font-mono text-[10px] font-bold uppercase bg-gray-200 px-2 py-0.5 mb-3 rounded-sm">{step.subtitle}</span>
                        
                        <p className="text-xs font-bold leading-tight text-gray-600">
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
        
        {/* Footer Label */}
        <div className="mt-16 text-center">
             <div className="inline-flex items-center gap-2 font-mono text-sm font-bold uppercase bg-ink text-white px-6 py-3 border-4 border-ink shadow-brutal">
                <RotateCw className="animate-spin-slow" />
                System Velocity: Maximum
             </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
