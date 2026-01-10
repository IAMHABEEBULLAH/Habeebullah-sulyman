
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (status === 'success') {
    return (
      <div className="glass p-8 rounded-2xl text-center animate-in fade-in zoom-in duration-500 border-green-500/20">
        <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-[0_0_20px_rgba(34,197,94,0.2)]">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold mb-2">Message Received!</h3>
        <p className="text-slate-400 mb-6">Thank you for reaching out. I'll get back to you within 24 hours.</p>
        <button 
          onClick={() => setStatus('idle')}
          className="text-green-400 font-semibold hover:text-green-300 transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass p-8 rounded-2xl space-y-6 border-white/5 shadow-2xl text-left bg-black/40">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-slate-400 ml-1 uppercase tracking-wider text-[10px]">Your Name</label>
          <input
            required
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-green-500 transition-colors placeholder:text-slate-700"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-slate-400 ml-1 uppercase tracking-wider text-[10px]">Email Address</label>
          <input
            required
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-green-500 transition-colors placeholder:text-slate-700"
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium text-slate-400 ml-1 uppercase tracking-wider text-[10px]">Subject</label>
        <input
          required
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Project Inquiry"
          className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-green-500 transition-colors placeholder:text-slate-700"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-slate-400 ml-1 uppercase tracking-wider text-[10px]">The Mission</label>
        <textarea
          required
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Describe your project vision..."
          className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-green-500 transition-colors placeholder:text-slate-700 resize-none"
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full bg-green-600 hover:bg-green-700 disabled:bg-green-800 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 group shadow-lg shadow-green-900/20"
      >
        {status === 'submitting' ? (
          <>
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            <span>TRANSMITTING...</span>
          </>
        ) : (
          <>
            <span className="uppercase tracking-widest text-sm">Initiate Contact</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
