
import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  const chartData = SKILLS.map(s => ({
    subject: s.name,
    A: s.level,
    fullMark: 100,
  }));

  return (
    <section id="skills" className="py-20 md:py-32 px-6 relative overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <div className="flex-1 space-y-10 w-full">
            <div className="reveal">
              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight uppercase">THE <span className="gradient-text">TOOLKIT</span></h2>
              <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed max-w-xl">
                Bridging the gap between pixel-perfect design and production-ready code with a Green-standard workflow.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SKILLS.map((skill, index) => (
                <div 
                  key={skill.name} 
                  className={`reveal glass p-4 rounded-2xl border border-white/5 transition-all group hover:border-green-500/30 hover:bg-green-500/5`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-slate-200 group-hover:text-green-400 transition-colors text-sm uppercase tracking-tight">
                      {skill.name}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 group-hover:text-green-600">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-black h-1.5 rounded-full overflow-hidden border border-white/5">
                    <div 
                      className="skill-bar-fill h-full rounded-full bg-gradient-to-r from-green-600 to-green-300 group-hover:shadow-[0_0_10px_#22c55e]"
                      style={{ 
                        // We use a CSS variable to pass the target width to the triggered animation
                        '--target-width': `${skill.level}%` 
                      } as React.CSSProperties}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal flex-1 w-full h-[350px] md:h-[500px] relative group">
            <div className="radar-container w-full h-full glass rounded-[2rem] md:rounded-[3rem] p-4 md:p-10 border-white/10 relative">
              <div className="absolute inset-0 bg-green-600/5 group-hover:bg-green-600/10 transition-colors rounded-[2rem] md:rounded-[3rem]"></div>
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={chartData}>
                  <PolarGrid stroke="#052e16" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#4ade80', fontSize: 10, fontWeight: 500 }} />
                  <Radar
                    name="Proficiency"
                    dataKey="A"
                    stroke="#22c55e"
                    fill="url(#radarGradient)"
                    fillOpacity={0.5}
                  />
                  <defs>
                    <linearGradient id="radarGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#22c55e" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#ffffff" stopOpacity={0.8}/>
                    </linearGradient>
                  </defs>
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
