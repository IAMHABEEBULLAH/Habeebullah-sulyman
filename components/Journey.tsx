
import React from 'react';

const Journey: React.FC = () => {
  const milestones = [
    {
      year: 'The Spark',
      title: 'Foundations & Mentorship',
      description: 'The journey began with mastering the core trio of HTML, CSS, and JavaScript. Simultaneously, I discovered a love for teaching, starting as a tutor where I learned to break down complex logic into digestible concepts.',
      icon: '🌱'
    },
    {
      year: 'The Evolution',
      title: 'Component Architect & Educator',
      description: 'Mastering React.js shifted my focus to modular systems. During this phase, I balanced intensive coding with my role in school and Islamiyya, refining the patience and communication needed for technical leadership.',
      icon: '⚛️'
    },
    {
      year: 'The Vision',
      title: 'High-Performance Delivery',
      description: 'Specializing in Next.js and the modern web stack. My goal is to build digital products that excel in performance while continuing to mentor and educate the next generation of developers and students.',
      icon: '🚀'
    }
  ];

  return (
    <section id="journey" className="py-20 md:py-32 px-6 relative overflow-hidden scroll-mt-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="reveal mb-16">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic">
            THE <span className="gradient-text">ODYSSEY</span>
          </h2>
          <div className="h-1 w-24 bg-green-500 mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-5 reveal space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
              A Journey of <br />
              <span className="text-green-400">Code and Mentorship.</span>
            </h3>
            <p className="text-slate-400 text-lg leading-relaxed font-light">
              My path into web development is intertwined with my life as an educator. Whether teaching in a school setting or guiding students in Islamiyya, I bring the same discipline and clarity to my engineering projects.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed font-light">
              I believe that the best developers are those who can explain their "why". Being a tutor has made me a better engineer—sharpening my ability to document, simplify, and build maintainable software.
            </p>
            
            <div className="pt-4 space-y-4">
               <div className="flex items-center gap-4 text-sm font-bold text-white uppercase tracking-widest">
                  <span className="w-8 h-px bg-green-500"></span>
                  Determined to Lead
               </div>
               <div className="flex items-center gap-4 text-sm font-bold text-green-500 uppercase tracking-widest">
                  <span className="w-8 h-px bg-white/20"></span>
                  Passionate to Educate
               </div>
            </div>
          </div>

          {/* Right Column: Timeline Cards */}
          <div className="lg:col-span-7 space-y-6 relative">
            {/* Background Line for decoration */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-green-500/50 via-green-500/10 to-transparent hidden md:block"></div>

            {milestones.map((item, index) => (
              <div 
                key={index} 
                className="reveal glass p-8 rounded-3xl border border-white/5 hover:border-green-500/30 transition-all duration-500 group relative ml-0 md:ml-12"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Milestone Dot */}
                <div className="absolute -left-12 top-10 w-4 h-4 rounded-full bg-black border-2 border-green-500 hidden md:block z-10 group-hover:scale-125 transition-transform group-hover:bg-green-500"></div>
                
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                  <span className="text-4xl">{item.icon}</span>
                  <div>
                    <span className="text-xs font-black text-green-500 uppercase tracking-[0.2em]">{item.year}</span>
                    <h4 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">{item.title}</h4>
                  </div>
                </div>
                <p className="text-slate-400 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
