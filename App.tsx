
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Journey from './components/Journey';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import WhatsAppButton from './components/AIChat'; // Using the floating button now renamed logic-wise
import { useReveal } from './hooks/useReveal';

const App: React.FC = () => {
  const containerRef = useReveal();
  const whatsappNumberFormatted = "+234 900 426 41264";

  return (
    <div className="relative selection:bg-green-500/30 selection:text-green-100" ref={containerRef}>
      <Navbar />
      <main>
        <Hero />
        <Journey />
        <Skills />
        <Projects />
        
        <section id="contact" className="py-20 md:py-32 px-6 border-t border-white/5 relative scroll-mt-24">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
              <div className="lg:w-1/2 space-y-8 md:space-y-10 reveal w-full">
                <h2 className="text-5xl md:text-8xl font-black leading-tight text-center lg:text-left uppercase">
                  LET'S <br /><span className="gradient-text italic">TALK.</span>
                </h2>
                <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
                  Ready to build high-performance green-standard web applications. Available for new opportunities.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10 pt-4">
                  <div className="space-y-6 text-center lg:text-left">
                    <div>
                      <p className="text-xs text-green-600 uppercase font-black tracking-widest mb-3">Electronic Mail</p>
                      <a href="mailto:contact@habeebullah.dev" className="text-lg md:text-xl font-medium hover:text-green-400 transition-colors border-b border-white/10 pb-1 break-words">
                        contact@habeebullah.dev
                      </a>
                    </div>
                    <div>
                      <p className="text-xs text-green-600 uppercase font-black tracking-widest mb-3">WhatsApp / Mobile</p>
                      <a href="https://wa.me/23490042641264" target="_blank" rel="noopener noreferrer" className="text-lg md:text-xl font-medium hover:text-green-400 transition-colors border-b border-white/10 pb-1">
                        {whatsappNumberFormatted}
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col items-center lg:items-start">
                    <p className="text-xs text-green-600 uppercase font-black tracking-widest mb-3">Social Threads</p>
                    <div className="flex gap-6 items-center">
                      <a 
                        href="https://github.com/IAMHABEEBULLAH?tab=repositories" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="group relative flex items-center justify-center w-12 h-12 glass rounded-full hover:bg-green-600 hover:text-white transition-all duration-300" 
                        title="GitHub"
                      >
                        <div className="absolute inset-0 bg-green-500/20 rounded-full blur opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500"></div>
                        <svg className="w-6 h-6 fill-current relative z-10" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                      </a>
                      <a 
                        href="https://x.com/Habib_Sulyman" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group relative flex items-center justify-center w-12 h-12 glass rounded-full hover:bg-green-600 hover:text-white transition-all duration-300" 
                        title="X (Twitter)"
                      >
                        <div className="absolute inset-0 bg-green-500/20 rounded-full blur opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500"></div>
                        <span className="text-xl font-bold relative z-10">𝕏</span>
                      </a>
                      <a 
                        href="#" 
                        className="group relative flex items-center justify-center w-12 h-12 glass rounded-full hover:bg-green-600 hover:text-white transition-all duration-300" 
                        title="LinkedIn"
                      >
                        <div className="absolute inset-0 bg-green-500/20 rounded-full blur opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500"></div>
                        <span className="text-lg font-bold relative z-10">in</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 w-full reveal">
                <div className="mt-12 lg:mt-0">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <WhatsAppButton />

      <footer className="py-10 md:py-16 border-t border-white/5 text-center bg-black">
        <p className="text-slate-600 text-sm tracking-widest uppercase font-bold">
          Made with <span className="text-green-500">♥</span> & React
        </p>
        <p className="text-slate-800 text-xs mt-2 uppercase font-black">
          © {new Date().getFullYear()} Habeebullah Sulyman
        </p>
      </footer>
    </div>
  );
};

export default App;
