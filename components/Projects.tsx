
import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="crafted-logic" className="py-32 px-6 bg-black/50 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="reveal mb-20 text-center max-w-3xl mx-auto">
          <h2 className="text-5xl font-black mb-6 italic uppercase tracking-tighter">CRAFTED <span className="gradient-text">LOGIC</span></h2>
          <p className="text-slate-400 text-lg">A premium showcase of frontend engineering and technical excellence.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {PROJECTS.map((project, index) => (
            <div 
              key={project.id} 
              className="reveal group glass rounded-[2.5rem] overflow-hidden flex flex-col h-full border-white/5 hover:border-green-500/20 transition-all hover:-translate-y-2 duration-500"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                
                {/* Overlay Tags - Updated to Green */}
                <div className="absolute bottom-6 left-8 flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="text-[10px] uppercase font-black bg-green-600/90 backdrop-blur-md px-3 py-1.5 rounded-full text-white">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="p-10 flex flex-col flex-grow">
                <h3 className="text-3xl font-black mb-4 group-hover:text-green-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-400 text-lg mb-8 leading-relaxed font-light">
                  {project.description}
                </p>
                
                <div className="flex gap-8 items-center mt-auto">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white text-black hover:bg-green-500 hover:text-white rounded-full text-sm font-bold transition-all">
                    Launch Project ↗
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-sm font-bold flex items-center gap-2 text-slate-500 hover:text-green-400 transition-colors">
                    <span className="text-xl">📦</span> Repository
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
