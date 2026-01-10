
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Journey', id: 'journey' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'crafted-logic' },
    { name: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    // Intersection Observer for active section tracking
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px', // Trigger when section is in the middle of the viewport
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Observe each section
    navLinks.forEach((link) => {
      const element = document.getElementById(link.id);
      if (element) observer.observe(element);
    });

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen ? 'py-4 glass border-b border-green-500/10' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#about" className="text-xl font-bold tracking-tighter flex items-center gap-2 relative z-50 group">
          <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center text-white font-extrabold group-hover:scale-110 transition-transform">H</div>
          <span className="inline group-hover:text-green-400 transition-colors">Habeebullah.dev</span>
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <a 
              key={link.id}
              href={`#${link.id}`} 
              className={`transition-all duration-300 relative group ${activeSection === link.id ? 'text-green-400' : 'text-slate-400 hover:text-white'}`}
            >
              {link.name === 'Projects' ? 'Projects' : link.name}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-green-500 transition-all duration-300 ${activeSection === link.id ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </a>
          ))}
        </div>

        <div className="hidden md:block">
            <a 
            href="#contact" 
            className="bg-white text-slate-950 px-6 py-2.5 rounded-full text-sm font-bold hover:bg-green-500 hover:text-white transition-all shadow-[0_0_15px_rgba(255,255,255,0.05)]"
            >
            Hire Me
            </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden relative z-50 w-10 h-10 flex flex-col justify-center items-center gap-1.5 group"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-black z-40 flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
          <div className="absolute inset-0 bg-green-600/5 backdrop-blur-3xl"></div>
          {navLinks.map((link) => (
            <a 
              key={link.id}
              href={`#${link.id}`} 
              onClick={closeMenu} 
              className={`text-3xl font-black transition-colors ${activeSection === link.id ? 'text-green-400' : 'text-white hover:text-green-400'}`}
            >
              {link.name === 'Projects' ? 'Projects' : link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={closeMenu}
            className="mt-8 bg-green-600 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-white hover:text-black transition-all"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
