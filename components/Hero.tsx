
import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [displayName, setDisplayName] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullName = "HABEEBULLAH SULYMAN";
  
  // User provided profile picture link
  const dpUrl = "https://im.ge/i/1000216194.GFxblq";
  
  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      if (index < fullName.length) {
        setDisplayName(fullName.substring(0, index + 1));
        index++;
      } else {
        clearInterval(intervalId);
        setIsTypingComplete(true);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="about" className="min-h-screen flex flex-col justify-center items-center px-6 pt-28 relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="orb w-96 h-96 bg-green-600/10 top-[-10%] left-[-10%]" style={{ animationDelay: '0s' }}></div>
      <div className="orb w-80 h-80 bg-slate-100/5 bottom-[-5%] right-[-5%]" style={{ animationDelay: '-5s' }}></div>
      <div className="orb w-64 h-64 bg-emerald-600/10 top-[20%] right-[10%]" style={{ animationDelay: '-10s' }}></div>

      <div className="max-w-5xl text-center z-10 space-y-8 md:space-y-10">
        {/* Profile Picture with High-End Styling */}
        <div className="reveal flex justify-center mb-6">
          <div className="relative group">
            <div 
              className="absolute -inset-4 rounded-full blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-700 animate-pulse"
              style={{ backgroundColor: '#22c55e' }}
            ></div>
            
            <div className="relative w-36 h-36 md:w-48 md:h-48 rounded-full border-4 border-white/10 overflow-hidden glass p-1.5 shadow-2xl">
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden relative">
                 <img 
                    src={dpUrl} 
                    alt="Habeebullah Sulyman" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = '<span class="text-4xl md:text-6xl font-black font-display gradient-text">HS</span>';
                      }
                    }}
                 />
                 <div className="absolute inset-0 bg-gradient-to-tr from-green-500/10 to-transparent pointer-events-none"></div>
              </div>
              <div className="absolute inset-0 rounded-full border-2 border-green-500/0 group-hover:border-green-500/50 transition-all duration-500 pointer-events-none scale-95 group-hover:scale-100"></div>
            </div>
          </div>
        </div>

        <div className="reveal inline-block px-4 py-1.5 glass rounded-full text-xs md:text-sm font-medium text-green-400 border border-green-500/30 uppercase tracking-widest">
          Frontend Engineer & Dedicated Educator
        </div>
        
        <h1 className="font-display text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tight leading-[0.9] text-white min-h-[2.5em] md:min-h-[2em] uppercase break-words">
          <div className={`${!isTypingComplete ? 'typing-cursor' : ''} transition-all duration-1000 ${isTypingComplete ? 'name-fill' : ''}`}>
            {displayName.split(' ').map((word, i) => (
              <React.Fragment key={i}>
                {word}
                {i === 0 && <br className="block" />}
              </React.Fragment>
            ))}
          </div>
        </h1>
        
        <p className="reveal text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light px-2">
          Engineering pixel-perfect interfaces with <span className="text-white font-medium">Next.js</span> while 
          shaping minds as an <span className="text-green-400 font-medium italic underline underline-offset-4 decoration-green-500/30">Islamiyya & School Tutor</span>. 
          Bridging technical excellence with the art of knowledge sharing.
        </p>

        <div className="reveal flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center pt-4 w-full sm:w-auto px-6 sm:px-0">
          <a href="#crafted-logic" className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-white text-black hover:bg-green-500 hover:text-white hover:scale-105 rounded-full font-bold transition-all shadow-[0_0_20px_rgba(34,197,94,0.2)] text-center">
            View Projects
          </a>
          <a 
            href="https://wa.me/23490042641264" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 glass hover:bg-white/10 text-white rounded-full font-bold transition-all border-white/20 text-center"
          >
            Let's Talk
          </a>
        </div>

        <div className="reveal mt-16 md:mt-24 flex items-center justify-center gap-6 md:gap-10 opacity-30">
           <div className="group relative">
              <img src="https://cdn.worldvectorlogo.com/logos/next-js.svg" alt="Next.js" className="h-8 md:h-10 invert group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 bg-green-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
           </div>
           <div className="group relative">
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" className="h-8 md:h-10 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 bg-green-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
           </div>
           <div className="group relative">
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" alt="JS" className="h-8 md:h-10 group-hover:opacity-100 transition-opacity rounded" />
              <div className="absolute inset-0 bg-green-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
           </div>
           <div className="group relative">
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="GitHub" className="h-8 md:h-10 invert group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
