/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Video, 
  Monitor, 
  Presentation, 
  Layers, 
  Rocket, 
  Box, 
  ArrowRight, 
  Mail, 
  Linkedin, 
  CheckCircle2, 
  Menu, 
  X,
  Play,
  ChevronRight,
  Zap,
  Target,
  PenTool,
  Cpu,
  Users
} from 'lucide-react';
import profile from "./assets/profile.jpg";
import project1 from "./assets/project-1.jpg";
import project2 from "./assets/project-2.jpg";
// --- Components ---

const VideoModal = ({ isOpen, onClose, videoUrl, title }: { isOpen: boolean, onClose: () => void, videoUrl: string, title: string }) => {
  if (!isOpen) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
    >
      <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" onClick={onClose} />
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative w-full max-w-5xl aspect-video glass rounded-[2rem] overflow-hidden border-white/20 shadow-2xl"
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 hover:bg-white/20 transition-colors"
        >
          <X size={24} />
        </button>
    
        <div className="absolute top-6 left-8 z-10">
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>

        <div className="w-full h-full bg-zinc-900 flex items-center justify-center">
          {/* In a real app, you'd use an iframe or video tag here */}
          <div className="text-center p-8">
            <Video size={64} className="text-blue-500 mx-auto mb-4 animate-pulse" />
            <p className="text-xl font-bold mb-2">Video Player Placeholder</p>
            <p className="text-zinc-400">Ready to play: {videoUrl}</p>
            <p className="text-sm text-zinc-500 mt-4 italic">Connect your YouTube, Vimeo, or Mux link here.</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4 bg-black/80 backdrop-blur-md border-b border-white/10' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-xl font-display font-bold tracking-tighter">
          PRABHAKARAN<span className="text-blue-500">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
              {link.name}
            </a>
          ))}
          <a href="#contact" className="px-5 py-2 bg-white text-black text-sm font-semibold rounded-full hover:bg-zinc-200 transition-colors">
            Start a Project
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-black border-b border-white/10 p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-medium text-zinc-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="w-full py-3 bg-white text-black text-center font-semibold rounded-xl"
              onClick={() => setMobileMenuOpen(false)}
            >
              Start a Project
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[120px] animate-pulse pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs font-medium text-blue-400 mb-8 backdrop-blur-sm"
          >
            <Zap size={14} className="animate-pulse" />
            <span className="tracking-wider uppercase">Product Storytelling & Experience Designer</span>
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl font-display font-bold leading-[1.05] tracking-tight mb-8 text-gradient">
            Turning Complex Products into <span className="text-gradient-blue">Clear Stories.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-xl leading-relaxed font-light">
            I help startups and tech companies communicate their products through UX design, explainer videos, and visual storytelling.
          </p>
          
          <div className="flex flex-wrap gap-6">
            <a href="#work" className="group px-10 py-5 bg-white text-black font-bold rounded-full hover:scale-105 transition-all duration-300 flex items-center gap-2 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
              View My Work <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="px-10 py-5 glass text-white font-bold rounded-full hover:bg-white/10 transition-all duration-300 border-white/20">
              Start a Project
            </a>
            <a href="mailto:manicprabhakar13@gmail.com" className="px-10 py-5 text-zinc-400 hover:text-white transition-all duration-300 flex items-center gap-2">
              <Mail size={20} /> Email Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, rotateY: 10 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          className="relative perspective-1000"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/30 to-purple-500/30 rounded-[2.5rem] blur-[60px] animate-float" />
          <div className="relative aspect-square glass rounded-[2.5rem] overflow-hidden flex items-center justify-center group cursor-pointer border-white/20 shadow-2xl">
            <div className="absolute inset-0 bg-[url('https://i.ytimg.com/vi/Uh0KOaSsL8E/hqdefault.jpg')] bg-cover bg-center opacity-30 group-hover:scale-105 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="relative z-10 w-24 h-24 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/30 shadow-2xl group-hover:bg-white/20 transition-all"
            >
             <Play className="text-white fill-white ml-1" size={36} onClick={() => window.open('https://youtu.be/Uh0KOaSsL8E', '_blank')} />
            </motion.div>
            
            <div className="absolute bottom-10 left-10 right-10 p-6 glass rounded-2xl border-white/20">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-xs font-bold text-blue-400 uppercase tracking-[0.2em] mb-1">Showreel 2024</p>
                  <p className="text-lg font-bold">Visualizing the Future</p>
                </div>
                <div className="text-zinc-500 text-xs font-mono">03:20</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden glass relative">
              <img 
                src={profile} 
                alt="Prabhakaran" 
                className="w-full h-full object-cover hover:scale-105 transition-all duration-700"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://img.youtube.com/vi/Uh0KOaSsL8E/maxresdefault.jpg";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8">
                <h3 className="text-3xl font-display font-bold">Prabhakaran</h3>
                <p className="text-zinc-400">Product Storytelling & Experience Designer</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-sm font-bold text-blue-500 uppercase tracking-[0.2em] mb-4">About Me</h2>
            <h3 className="text-4xl font-display font-bold mb-8 leading-tight">
              Bridging the gap between <span className="text-blue-500">complex technology</span> and human understanding.
            </h3>
            <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
              <p>
                With over 20 years of design experience, I've witnessed the evolution of digital products from simple interfaces to complex AI-driven ecosystems. My background in UX and Product Design gives me a unique perspective on how users interact with technology.
              </p>
              <p>
                I specialize in visual storytelling—the art of taking a complex product and distilling its value into a clear, compelling narrative. Whether it's through a high-fidelity product demo, a cinematic explainer video, or an executive presentation, I help startups and tech giants communicate their "why."
              </p>
              <p>
                By combining traditional design principles with modern AI-assisted tools, I produce high-impact visuals that resonate with founders, investors, and users alike. My mission is to turn your product's complexity into your greatest competitive advantage.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 mt-12">
              <div>
                <p className="text-3xl font-display font-bold text-white mb-1">20+</p>
                <p className="text-sm text-zinc-500 uppercase tracking-widest">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-display font-bold text-white mb-1">150+</p>
                <p className="text-sm text-zinc-500 uppercase tracking-widest">Projects Delivered</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Product Demo Videos",
      description: "High-fidelity walkthroughs that showcase your product's best features in action.",
      icon: <Monitor className="text-blue-400" />,
    },
    {
      title: "Explainer Videos",
      description: "Cinematic narratives that explain the problem you solve and how you solve it.",
      icon: <Video className="text-purple-400" />,
    },
    {
      title: "Startup Pitch Presentations",
      description: "Investor-ready decks that combine data with compelling visual storytelling.",
      icon: <Presentation className="text-emerald-400" />,
    },
    {
      title: "UX / Product Interface Design",
      description: "Modern, intuitive interfaces designed for clarity, usability, and growth.",
      icon: <Layers className="text-orange-400" />,
    },
    {
      title: "Product Launch Creatives",
      description: "High-impact marketing assets for social media, ads, and launch campaigns.",
      icon: <Rocket className="text-pink-400" />,
    },
    {
      title: "3D Walkthrough Experiences",
      description: "Immersive 3D environments that bring your product vision to life.",
      icon: <Box className="text-cyan-400" />,
    },
  ];

  return (
    <section id="services" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-blue-500 uppercase tracking-[0.3em] mb-4"
          >
            Capabilities
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-display font-bold text-gradient"
          >
            Design for the Next Era.
          </motion.h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 glass rounded-[2.5rem] hover:bg-white/[0.08] transition-all duration-500 group cursor-default gradient-border"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 group-hover:glow">
                {service.icon}
              </div>
              <h4 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">{service.title}</h4>
              <p className="text-zinc-400 leading-relaxed text-lg font-light">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Work = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<{ title: string, videoUrl: string } | null>(null);
  
  const categories = ['All', 'Videos', 'UX Design', 'Presentations', '3D'];
  
  const projects = [
    { title: "AI Analytics Dashboard", category: "UX Design", image: project1, videoUrl: "https://vimeo.com/123456" },
    { title: "Fintech Explainer", category: "Videos", image: project2, videoUrl: "https://vimeo.com/234567" },
    { title: "SaaS Product Demo", category: "Videos", image: "https://picsum.photos/seed/saas-dark/800/600", videoUrl: "https://vimeo.com/345678" },
    { title: "Web3 Pitch Deck", category: "Presentations", image: "https://picsum.photos/seed/pitch-dark/800/600", videoUrl: "https://vimeo.com/456789" },
    { title: "Metaverse Walkthrough", category: "3D", image: "https://picsum.photos/seed/meta-dark/800/600", videoUrl: "https://vimeo.com/567890" },
    { title: "Cloud Security UI", category: "UX Design", image: "https://picsum.photos/seed/sec-dark/800/600", videoUrl: "https://vimeo.com/678901" },
  ];

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter || (filter === 'Videos' && p.category.includes('Video')));

  return (
    <section id="work" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-20">
          <div>
            <h2 className="text-sm font-bold text-blue-500 uppercase tracking-[0.3em] mb-4">Portfolio</h2>
            <h3 className="text-5xl md:text-6xl font-display font-bold text-gradient">Selected Works.</h3>
          </div>
          <div className="flex flex-wrap gap-3 p-1.5 glass rounded-full">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${filter === cat ? 'bg-white text-black shadow-lg' : 'text-zinc-400 hover:text-white'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="group relative"
              >
                <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden glass mb-6 gradient-border">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 grayscale-[0.2] group-hover:grayscale-0"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${project.title.replace(/\s+/g, '-').toLowerCase()}/800/600`;
                    }}
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-sm">
                    <button 
                      onClick={() => setSelectedProject({ title: project.title, videoUrl: project.videoUrl })}
                      className="px-8 py-4 bg-white text-black font-bold rounded-full flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                    >
                      View Project <ChevronRight size={20} />
                    </button>
                  </div>
                </div>
                <div className="px-2">
                  <p className="text-xs font-bold text-blue-400 uppercase tracking-[0.2em] mb-2">{project.category}</p>
                  <h4 className="text-2xl font-bold group-hover:text-blue-400 transition-colors">{project.title}</h4>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <VideoModal 
            isOpen={!!selectedProject} 
            onClose={() => setSelectedProject(null)} 
            videoUrl={selectedProject.videoUrl} 
            title={selectedProject.title} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

const Process = () => {
  const steps = [
    { title: "Understand", desc: "Deep dive into your product, audience, and goals.", icon: <Target size={20} /> },
    { title: "Craft", desc: "Developing a narrative that resonates and simplifies.", icon: <PenTool size={20} /> },
    { title: "Design", desc: "Creating high-fidelity visuals and interfaces.", icon: <Layers size={20} /> },
    { title: "Produce", desc: "Animating and polishing the final narrative.", icon: <Video size={20} /> },
    { title: "Impact", desc: "Delivering assets that drive results and growth.", icon: <Rocket size={20} /> },
  ];

  return (
    <section id="process" className="py-24 bg-zinc-950/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-blue-500 uppercase tracking-[0.2em] mb-4">Process</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold">How We Tell Your Story.</h3>
        </div>

        <div className="relative">
          {/* Connector Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-y-1/2" />
          
          <div className="grid lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-full glass flex items-center justify-center mb-6 relative z-10 group-hover:glow transition-all duration-500">
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-blue-500 text-[10px] font-bold flex items-center justify-center">0{index + 1}</span>
                  {step.icon}
                </div>
                <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                <p className="text-zinc-400 text-sm leading-relaxed px-4">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const WhyMe = () => {
  const points = [
    { title: "UX + Storytelling", desc: "I don't just make things look pretty; I design for understanding and conversion.", icon: <Cpu /> },
    { title: "Complex Tech Expert", desc: "AI, Web3, Cloud Infrastructure—I speak the language of engineering.", icon: <Zap /> },
    { title: "Idea to Visuals", desc: "Give me a rough concept, and I'll return a polished visual narrative.", icon: <Layers /> },
    { title: "AI-Assisted Speed", desc: "Leveraging the latest tools to deliver premium quality at startup speed.", icon: <Rocket /> },
    { title: "Founder-First", desc: "Collaborative, transparent, and aligned with your business goals.", icon: <Users /> },
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold text-blue-500 uppercase tracking-[0.2em] mb-4">Why Me</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-8">The Advantage of Experience.</h3>
            <p className="text-zinc-400 text-lg mb-12">
              In a world of noise, clarity is your most valuable asset. I provide the bridge between your innovation and your audience's perception.
            </p>
            
            <div className="space-y-8">
              {points.map((point, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-blue-500">
                    {point.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">{point.title}</h4>
                    <p className="text-zinc-400 text-sm">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="glass rounded-3xl p-8 relative z-10">
              <h4 className="text-2xl font-bold mb-8">Ideal Partners</h4>
              <div className="space-y-4">
                {['Startups', 'SaaS Companies', 'AI Product Teams', 'Technology Companies', 'Founders Launching New Products'].map((type, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/20 transition-colors">
                    <CheckCircle2 className="text-blue-500" size={20} />
                    <span className="font-medium">{type}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px]" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-purple-600/10 rounded-full blur-[100px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '', projectType: 'Explainer Video' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this to a backend or service like Formspree
    console.log('Form submitted:', formState);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-blue-600/10 blur-[150px] rounded-full -translate-y-1/2" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-blue-500 uppercase tracking-[0.3em] mb-4">Get in Touch</h2>
            <h3 className="text-5xl md:text-6xl font-display font-bold mb-8 leading-tight text-gradient">
              Ready to Start Your <span className="text-gradient-blue">Next Project?</span>
            </h3>
            <p className="text-xl text-zinc-400 mb-12 max-w-xl leading-relaxed">
              Whether you have a fully-formed idea or just a rough concept, I'm here to help you visualize it. Let's create something extraordinary together.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-500">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 uppercase font-bold tracking-wider">Email Me Directly</p>
                  <a href="mailto:manicprabhakar13@gmail.com" className="text-lg font-bold hover:text-blue-400 transition-colors">
                    manicprabhakar13@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-500">
                  <Linkedin size={24} />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 uppercase font-bold tracking-wider">Connect on LinkedIn</p>
                  <a href="#" className="text-lg font-bold hover:text-purple-400 transition-colors">
                    linkedin.com/in/prabhakaran
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-12 rounded-[2.5rem] border-white/20 relative"
          >
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h4 className="text-2xl font-bold mb-2">Message Sent!</h4>
                <p className="text-zinc-400">Thank you for reaching out. I'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-400 ml-1">Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Your Name"
                      className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-blue-500 transition-colors"
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-400 ml-1">Email</label>
                    <input 
                      type="email" 
                      required
                      placeholder="your@email.com"
                      className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-blue-500 transition-colors"
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-400 ml-1">Project Type</label>
                  <select 
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-blue-500 transition-colors appearance-none"
                    value={formState.projectType}
                    onChange={(e) => setFormState({...formState, projectType: e.target.value})}
                  >
                    <option className="bg-zinc-900">Explainer Video</option>
                    <option className="bg-zinc-900">UX Design</option>
                    <option className="bg-zinc-900">3D Visualization</option>
                    <option className="bg-zinc-900">Pitch Deck</option>
                    <option className="bg-zinc-900">Full Branding</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-400 ml-1">Message</label>
                  <textarea 
                    required
                    rows={4}
                    placeholder="Tell me about your project..."
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full py-5 bg-white text-black font-bold rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-xl"
                >
                  Send Message <ArrowRight size={20} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <a href="#" className="text-xl font-display font-bold tracking-tighter mb-2 block">
            PRABHAKARAN<span className="text-blue-500">.</span>
          </a>
          <p className="text-zinc-500 text-sm">Visualizing the future of technology, one story at a time.</p>
        </div>
        
        <div className="flex items-center gap-6">
          <a href="#" className="text-zinc-400 hover:text-white transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="mailto:manicprabhakar13@gmail.com" className="text-zinc-400 hover:text-white transition-colors">
            <Mail size={20} />
          </a>
        </div>
        
        <p className="text-zinc-500 text-sm">
          © {new Date().getFullYear()} Prabhakaran. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen bg-[#030303] selection:bg-blue-500/30">
      <div className="atmosphere" />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Work />
      <Process />
      <WhyMe />
      <CTA />
      <Footer />
    </div>
  );
}
