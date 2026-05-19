import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Mail, Phone, MapPin, Send, Instagram, Facebook, Youtube,
  MessageSquare, Clock, ShieldCheck, Users, ArrowRight,
  CheckCircle2, Star, Sparkles, Globe, Heart, ChevronRight,
  ArrowUpRight, Zap, Award, CalendarDays, UserRound
} from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AnimatedCounter from '../components/AnimatedCounter';

/* ──────────────────────────────────────────────
   MAIN CONTACT PAGE COMPONENT
   ────────────────────────────────────────────── */
const Contact = () => {
  const [formStep, setFormStep] = useState(1);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeChannel, setActiveChannel] = useState<number | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    month: 'October - March (Peak)',
    travelers: '',
    tripType: 'Heritage & Culture',
    budget: 'Standard',
    message: ''
  });

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 80 });
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello SafarSathi4U! 🙏\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nTrip Type: ${formData.tripType}\nBudget: ${formData.budget}\nPlanned Month: ${formData.month}\nTravelers: ${formData.travelers}\n\nMessage: ${formData.message}`;
    const waUrl = `https://wa.me/919601258617?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormStep(1);
      setFormData({ name: '', email: '', phone: '', month: 'October - March (Peak)', travelers: '', tripType: 'Heritage & Culture', budget: 'Standard', message: '' });
    }, 6000);
  };

  const canProceedStep1 = formData.name.trim() !== '' && formData.email.trim() !== '';
  const canProceedStep2 = formData.travelers.trim() !== '';

  const contactChannels = [
    {
      icon: Phone,
      title: 'Call Concierge',
      detail: '+91 9601258617',
      sub: 'Primary Line • Instant Connect',
      href: 'tel:+919601258617',
      gradient: 'from-blue-500/20 to-indigo-600/20',
      iconBg: 'bg-gradient-to-br from-blue-500 to-indigo-600',
      response: 'Immediate',
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp Direct',
      detail: '+91 9829629697',
      sub: 'Fastest Response • Multimedia',
      href: 'https://wa.me/919829629697',
      gradient: 'from-emerald-500/20 to-green-600/20',
      iconBg: 'bg-gradient-to-br from-emerald-500 to-green-600',
      response: '< 30 min',
    },
    {
      icon: Mail,
      title: 'Curator Email',
      detail: 'safarsathi4u@gmail.com',
      sub: 'Complex Itineraries • Detailed Quotes',
      href: 'mailto:safarsathi4u@gmail.com',
      gradient: 'from-amber-500/20 to-orange-600/20',
      iconBg: 'bg-gradient-to-br from-amber-500 to-orange-600',
      response: '< 24 hrs',
    },
  ];

  const trustMetrics = [
    { value: 500, suffix: '+', label: 'Happy Travelers', icon: Heart },
    { value: 4.9, suffix: '★', label: 'Google Rating', icon: Star },
    { value: 24, suffix: '/7', label: 'Concierge Support', icon: Clock },
    { value: 100, suffix: '%', label: 'Satisfaction Rate', icon: Award },
  ];

  return (
    <div className="bg-silk-white overflow-hidden">

      {/* ═══════════════════════════════════════════
          1. HERO SECTION
          ═══════════════════════════════════════════ */}
      <section
        className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden"
        aria-label="Contact Hero"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1590766940554-634a7ed41450?w=1920&q=90"
            alt="Udaipur Palace at dusk"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-royal-blue/75" />
          <div className="absolute inset-0 bg-gradient-to-b from-royal-blue/50 via-transparent to-royal-blue/95" />
          <div className="absolute inset-0 bg-gradient-to-r from-royal-blue/85 via-royal-blue/30 to-transparent" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl" data-aos="zoom-out">
          <div className="inline-flex items-center gap-4 text-[10px] uppercase tracking-[0.45em] text-metallic-gold mb-8">
            <span className="w-12 h-[1px] bg-metallic-gold/40" />
            Royal Concierge Service
            <span className="w-12 h-[1px] bg-metallic-gold/40" />
          </div>
          <h1 className="font-serif text-[clamp(2.5rem,7vw,5rem)] font-light leading-[1.05] text-white mb-8 tracking-tight">
            Let's Craft Your{' '}
            <em className="italic text-metallic-gold not-italic font-normal">Royal Journey</em>
          </h1>
          <p className="text-white/60 text-lg md:text-xl font-sans font-light tracking-wide max-w-2xl mx-auto border-t border-white/15 pt-8 leading-relaxed">
            From a whispered dream to a meticulously curated expedition — our travel architects transform your vision into reality.
          </p>
          <div className="flex flex-wrap justify-center gap-5 mt-10">
            <a
              href="#inquiry-form"
              className="btn-primary group"
              onClick={(e) => { e.preventDefault(); document.getElementById('inquiry-form')?.scrollIntoView({ behavior: 'smooth' }); }}
            >
              <span className="relative z-10 flex items-center gap-3">
                Begin Your Safar <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <a
              href="https://wa.me/919601258617"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost-light"
            >
              <MessageSquare size={14} /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          2. TRUST METRICS STRIP
          ═══════════════════════════════════════════ */}
      <section className="bg-royal-blue border-t border-b border-metallic-gold/10 relative z-20" data-aos="fade-up">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 divide-x divide-metallic-gold/[0.08]">
          {trustMetrics.map((metric, i) => (
            <div
              key={i}
              className="group py-10 md:py-14 px-6 text-center hover:bg-white/[0.03] transition-all duration-500 cursor-default"
            >
              <metric.icon
                size={18}
                className="text-metallic-gold/50 mx-auto mb-4 group-hover:text-metallic-gold group-hover:scale-110 transition-all duration-500"
              />
              <div className="font-serif text-3xl md:text-4xl text-white font-light tracking-tighter mb-2 group-hover:text-metallic-gold transition-colors duration-500">
                {typeof metric.value === 'number' && metric.value % 1 === 0
                  ? <AnimatedCounter end={metric.value} suffix={metric.suffix} />
                  : <span>{metric.value}{metric.suffix}</span>
                }
              </div>
              <div className="text-[9px] uppercase tracking-[0.3em] text-white/40 font-sans font-bold group-hover:text-white/60 transition-colors">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          3. BENTO-GRID CONTACT CHANNELS + FORM
          ═══════════════════════════════════════════ */}
      <main id="inquiry-form" className="py-28 md:py-40 px-[6vw] bg-ivory relative scroll-mt-20">
        {/* Section Header */}
        <div className="max-w-7xl mx-auto mb-20" data-aos="fade-up">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <span className="section-subheading flex items-center gap-3">
                <span className="w-8 h-[1px] bg-metallic-gold/40" />
                Connect With Us
              </span>
              <h2 className="section-heading !mb-4">
                Multiple Ways to <em>Reach Us</em>
              </h2>
              <p className="text-muted/70 text-[15px] leading-[1.9] font-sans font-light max-w-lg">
                Choose the channel that suits you best. Our dedicated concierge team responds with the warmth and attentiveness worthy of royal guests.
              </p>
            </div>
            <div className="flex items-center gap-3 text-[11px] text-metallic-gold/70 font-sans font-bold uppercase tracking-[0.2em]">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Team Online Now
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col xl:flex-row gap-8 xl:gap-10">

            {/* LEFT COLUMN: Contact Channels + Social */}
            <div className="w-full xl:w-[42%] space-y-8" data-aos="fade-right" data-aos-delay="100">

              {/* CONTACT CHANNEL CARDS */}
              <div className="space-y-5">
                {contactChannels.map((ch, idx) => (
                  <a
                    key={idx}
                    href={ch.href}
                    target={ch.href.startsWith('http') ? '_blank' : undefined}
                    rel={ch.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group block relative"
                    onMouseEnter={() => setActiveChannel(idx)}
                    onMouseLeave={() => setActiveChannel(null)}
                  >
                    <div className={`
                      relative flex items-center gap-6 p-7 md:p-8
                      bg-white border border-metallic-gold/[0.06]
                      hover:border-metallic-gold/30 hover:shadow-2xl hover:shadow-metallic-gold/[0.06]
                      transition-all duration-700 hover:-translate-y-1
                      overflow-hidden
                    `}>
                      {/* Hover gradient bg */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${ch.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                      {/* Icon */}
                      <div className={`
                        relative z-10 w-16 h-16 ${ch.iconBg} text-white
                        flex items-center justify-center shrink-0
                        shadow-lg transition-transform duration-700
                        group-hover:scale-110 group-hover:rotate-3
                      `}>
                        <ch.icon size={24} />
                      </div>

                      {/* Content */}
                      <div className="relative z-10 flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-serif text-xl tracking-tight text-royal-blue group-hover:text-royal-blue transition-colors duration-500">
                            {ch.title}
                          </h4>
                          <ArrowUpRight size={16} className="text-metallic-gold/40 group-hover:text-metallic-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-500 shrink-0" />
                        </div>
                        <p className="text-royal-blue/90 text-sm font-semibold font-sans truncate">{ch.detail}</p>
                        <div className="flex items-center gap-3 mt-2">
                          <span className="text-muted/50 text-[9px] uppercase tracking-[0.2em] font-sans font-bold">{ch.sub}</span>
                        </div>
                      </div>

                      {/* Response time badge */}
                      <div className="relative z-10 hidden md:flex items-center gap-1.5 bg-royal-blue/[0.06] px-3 py-1.5 shrink-0">
                        <Zap size={10} className="text-metallic-gold" />
                        <span className="text-[9px] uppercase tracking-[0.15em] text-royal-blue/70 font-sans font-bold whitespace-nowrap">{ch.response}</span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* SOCIAL + HOURS BENTO GRID */}
              <div className="grid grid-cols-2 gap-5">
                {/* Social Links */}
                <div className="bg-royal-blue p-7 relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-metallic-gold/5 rounded-full blur-2xl pointer-events-none" />
                  <h5 className="text-[9px] uppercase tracking-[0.3em] text-metallic-gold/80 font-bold font-sans mb-6">Follow Us</h5>
                  <div className="space-y-4">
                    {[
                      { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/safarsathi4u' },
                      { icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/share/r/1CKLxnoMaA/' },
                      { icon: Youtube, label: 'YouTube', href: 'https://youtube.com/@safarsathi4u' },
                    ].map((s, i) => (
                      <a
                        key={i}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-white/60 hover:text-metallic-gold transition-all duration-300 group/link"
                      >
                        <s.icon size={16} />
                        <span className="text-sm font-sans font-light">{s.label}</span>
                        <ArrowUpRight size={11} className="ml-auto opacity-0 group-hover/link:opacity-100 transition-opacity" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Office Hours */}
                <div className="bg-white border border-metallic-gold/[0.06] p-7 relative overflow-hidden group hover:shadow-2xl hover:border-metallic-gold/20 transition-all duration-500">
                  <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-metallic-gold/[0.05] rounded-full blur-2xl pointer-events-none" />
                  <h5 className="text-[9px] uppercase tracking-[0.3em] text-metallic-gold font-bold font-sans mb-6 flex items-center gap-2">
                    <Clock size={12} /> Office Hours
                  </h5>
                  <div className="space-y-3">
                    <div>
                      <p className="font-serif text-lg text-royal-blue leading-tight">Mon — Sat</p>
                      <p className="text-muted/60 text-xs font-sans mt-1">10:00 AM — 7:00 PM</p>
                    </div>
                    <div className="w-8 h-[1px] bg-metallic-gold/20" />
                    <div>
                      <p className="font-serif text-lg text-royal-blue leading-tight">Sunday</p>
                      <p className="text-muted/60 text-xs font-sans mt-1">By Appointment</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick response guarantee */}
              <div className="bg-gradient-to-r from-metallic-gold/[0.06] to-transparent border border-metallic-gold/10 p-6 flex items-center gap-4">
                <div className="w-12 h-12 bg-metallic-gold/10 flex items-center justify-center shrink-0">
                  <ShieldCheck size={20} className="text-metallic-gold" />
                </div>
                <div>
                  <p className="font-serif text-base text-royal-blue mb-0.5">Response Guarantee</p>
                  <p className="text-muted/60 text-xs font-sans">Every inquiry receives a personal response within 2 hours during business hours.</p>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: MULTI-STEP LUXURY FORM */}
            <div className="w-full xl:w-[58%]" data-aos="fade-left" data-aos-delay="200">
              <div className="bg-royal-blue text-white p-8 md:p-14 lg:p-16 shadow-2xl relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-metallic-gold to-transparent opacity-80" />
                <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-metallic-gold/[0.03] blur-[120px] rounded-full pointer-events-none" />
                <div className="absolute -top-20 -left-20 w-60 h-60 bg-white/[0.02] blur-[80px] rounded-full pointer-events-none" />

                {/* Ornamental corner */}
                <div className="absolute top-6 right-6 w-12 h-12 border-t border-r border-metallic-gold/20 pointer-events-none" />
                <div className="absolute bottom-6 left-6 w-12 h-12 border-b border-l border-metallic-gold/20 pointer-events-none" />

                {/* Form Header */}
                <div className="text-center mb-12 relative z-10">
                  <span className="text-[10px] uppercase tracking-[0.5em] text-metallic-gold/60 font-sans font-bold mb-4 block">
                    Private Inquiry
                  </span>
                  <h3 className="font-serif text-4xl lg:text-5xl tracking-tight italic mb-4">
                    Request a Safar
                  </h3>
                  <div className="w-12 h-[1px] bg-metallic-gold mx-auto opacity-60" />
                </div>

                {/* Step Indicator */}
                {!formSubmitted && (
                  <div className="relative z-10 mb-14">
                    <div className="flex items-center justify-center gap-0">
                      {[
                        { num: 1, label: 'Your Details' },
                        { num: 2, label: 'Trip Preferences' },
                        { num: 3, label: 'Your Vision' },
                      ].map((step, i) => (
                        <React.Fragment key={step.num}>
                          <button
                            type="button"
                            onClick={() => {
                              if (step.num < formStep) setFormStep(step.num);
                            }}
                            className={`
                              flex flex-col items-center gap-2 group cursor-pointer
                              ${step.num <= formStep ? 'opacity-100' : 'opacity-40'}
                              transition-all duration-500
                            `}
                          >
                            <div className={`
                              w-10 h-10 flex items-center justify-center font-sans text-sm font-bold
                              transition-all duration-500 border
                              ${step.num < formStep
                                ? 'bg-metallic-gold text-royal-blue border-metallic-gold shadow-lg shadow-metallic-gold/20'
                                : step.num === formStep
                                  ? 'bg-white/10 text-metallic-gold border-metallic-gold/60'
                                  : 'bg-white/5 text-white/40 border-white/10'
                              }
                            `}>
                              {step.num < formStep ? <CheckCircle2 size={18} /> : step.num}
                            </div>
                            <span className="text-[8px] uppercase tracking-[0.25em] font-sans font-bold whitespace-nowrap hidden sm:block">
                              {step.label}
                            </span>
                          </button>
                          {i < 2 && (
                            <div className={`
                              w-16 md:w-24 h-[1px] mx-3 transition-all duration-700
                              ${step.num < formStep ? 'bg-metallic-gold/60' : 'bg-white/10'}
                            `} />
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                )}

                {formSubmitted ? (
                  /* ─── SUCCESS STATE ─── */
                  <div className="text-center py-16 relative z-10" data-aos="zoom-in">
                    <div className="w-24 h-24 bg-metallic-gold/10 mx-auto rounded-full flex items-center justify-center mb-8 border border-metallic-gold/30 relative">
                      <CheckCircle2 size={40} className="text-metallic-gold" />
                      <div className="absolute inset-0 rounded-full animate-ping bg-metallic-gold/10" />
                    </div>
                    <h3 className="font-serif text-3xl md:text-4xl text-white mb-4 tracking-tight">
                      The Royal Pigeon Has Flown
                    </h3>
                    <p className="text-white/50 font-sans font-light max-w-md mx-auto leading-relaxed mb-8">
                      Your inquiry is now in the hands of our finest travel architects. Expect a personalized response within 2 hours via WhatsApp.
                    </p>
                    <div className="flex justify-center gap-3">
                      {[1, 2, 3].map(i => (
                        <div
                          key={i}
                          className="w-2 h-2 rounded-full bg-metallic-gold/40"
                          style={{ animation: `pulse 1.5s ease-in-out ${i * 0.2}s infinite` }}
                        />
                      ))}
                    </div>
                  </div>
                ) : (
                  /* ─── MULTI-STEP FORM ─── */
                  <form className="relative z-10" onSubmit={handleSubmit}>

                    {/* STEP 1: Personal Details */}
                    <div className={`transition-all duration-500 ${formStep === 1 ? 'block' : 'hidden'}`}>
                      <div className="space-y-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                          <div className="space-y-3">
                            <label className="text-[9px] uppercase tracking-[0.3em] text-metallic-gold/80 font-bold flex items-center gap-2">
                              <UserRound size={10} /> Full Name
                            </label>
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                              className="w-full bg-transparent border-b-2 border-white/15 py-4 px-1 outline-none focus:border-metallic-gold transition-all duration-500 text-white font-serif text-xl placeholder:text-white/15"
                              placeholder="Maharana Pratap"
                            />
                          </div>
                          <div className="space-y-3">
                            <label className="text-[9px] uppercase tracking-[0.3em] text-metallic-gold/80 font-bold flex items-center gap-2">
                              <Mail size={10} /> Email Address
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              className="w-full bg-transparent border-b-2 border-white/15 py-4 px-1 outline-none focus:border-metallic-gold transition-all duration-500 text-white font-serif text-xl placeholder:text-white/15"
                              placeholder="guest@palace.com"
                            />
                          </div>
                        </div>

                        <div className="space-y-3">
                          <label className="text-[9px] uppercase tracking-[0.3em] text-metallic-gold/80 font-bold flex items-center gap-2">
                            <Phone size={10} /> WhatsApp Number
                          </label>
                          <div className="flex items-center gap-3">
                            <span className="text-white/30 font-sans text-sm border-b-2 border-white/15 py-4 px-3">+91</span>
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              className="w-full bg-transparent border-b-2 border-white/15 py-4 px-1 outline-none focus:border-metallic-gold transition-all duration-500 text-white font-serif text-xl placeholder:text-white/15"
                              placeholder="9601258617"
                            />
                          </div>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => canProceedStep1 && setFormStep(2)}
                        disabled={!canProceedStep1}
                        className="btn-primary w-full mt-14 disabled:opacity-50 disabled:pointer-events-none"
                      >
                        Continue to Preferences <ChevronRight size={16} />
                      </button>
                    </div>

                    {/* STEP 2: Trip Preferences */}
                    <div className={`transition-all duration-500 ${formStep === 2 ? 'block' : 'hidden'}`}>
                      <div className="space-y-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                          <div className="space-y-3">
                            <label className="text-[9px] uppercase tracking-[0.3em] text-metallic-gold/80 font-bold flex items-center gap-2">
                              <Globe size={10} /> Trip Style
                            </label>
                            <select
                              name="tripType"
                              value={formData.tripType}
                              onChange={handleChange}
                              className="w-full bg-transparent border-b-2 border-white/15 py-4 px-1 outline-none focus:border-metallic-gold transition-all duration-500 text-white font-serif text-xl cursor-pointer [&>option]:bg-royal-blue [&>option]:text-white"
                            >
                              <option>Heritage & Culture</option>
                              <option>Adventure & Safari</option>
                              <option>Luxury & Wellness</option>
                              <option>Photography Tour</option>
                              <option>Family Vacation</option>
                              <option>Honeymoon Special</option>
                              <option>Custom Experience</option>
                            </select>
                          </div>
                          <div className="space-y-3">
                            <label className="text-[9px] uppercase tracking-[0.3em] text-metallic-gold/80 font-bold flex items-center gap-2">
                              <CalendarDays size={10} /> Intended Arrival
                            </label>
                            <select
                              name="month"
                              value={formData.month}
                              onChange={handleChange}
                              className="w-full bg-transparent border-b-2 border-white/15 py-4 px-1 outline-none focus:border-metallic-gold transition-all duration-500 text-white font-serif text-xl cursor-pointer [&>option]:bg-royal-blue [&>option]:text-white"
                            >
                              <option>October - March (Peak)</option>
                              <option>April - June (Summer)</option>
                              <option>July - September (Monsoon)</option>
                              <option>Not Decided Yet</option>
                            </select>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                          <div className="space-y-3">
                            <label className="text-[9px] uppercase tracking-[0.3em] text-metallic-gold/80 font-bold flex items-center gap-2">
                              <Users size={10} /> Companions
                            </label>
                            <input
                              type="number"
                              name="travelers"
                              value={formData.travelers}
                              onChange={handleChange}
                              min="1"
                              required
                              className="w-full bg-transparent border-b-2 border-white/15 py-4 px-1 outline-none focus:border-metallic-gold transition-all duration-500 text-white font-serif text-xl placeholder:text-white/15"
                              placeholder="2 Adults"
                            />
                          </div>
                          <div className="space-y-3">
                            <label className="text-[9px] uppercase tracking-[0.3em] text-metallic-gold/80 font-bold flex items-center gap-2">
                              <Sparkles size={10} /> Budget Range
                            </label>
                            <select
                              name="budget"
                              value={formData.budget}
                              onChange={handleChange}
                              className="w-full bg-transparent border-b-2 border-white/15 py-4 px-1 outline-none focus:border-metallic-gold transition-all duration-500 text-white font-serif text-xl cursor-pointer [&>option]:bg-royal-blue [&>option]:text-white"
                            >
                              <option>Budget Friendly</option>
                              <option>Standard</option>
                              <option>Premium</option>
                              <option>Ultra Luxury</option>
                              <option>No Limit</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-4 mt-14">
                        <button
                          type="button"
                          onClick={() => setFormStep(1)}
                          className="btn-ghost-light"
                        >
                          Back
                        </button>
                        <button
                          type="button"
                          onClick={() => canProceedStep2 && setFormStep(3)}
                          disabled={!canProceedStep2}
                          className="btn-primary flex-1 disabled:opacity-50 disabled:pointer-events-none"
                        >
                          Final Step <ChevronRight size={16} />
                        </button>
                      </div>
                    </div>

                    {/* STEP 3: Vision / Message */}
                    <div className={`transition-all duration-500 ${formStep === 3 ? 'block' : 'hidden'}`}>
                      <div className="space-y-10">
                        <div className="space-y-3">
                          <label className="text-[9px] uppercase tracking-[0.3em] text-metallic-gold/80 font-bold">
                            Your Vision & Special Requests
                          </label>
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={5}
                            required
                            className="w-full bg-transparent border-2 border-white/15 py-5 px-5 outline-none focus:border-metallic-gold transition-all duration-500 text-white font-serif text-lg resize-none placeholder:text-white/15 leading-relaxed"
                            placeholder="Tell us what draws you to Rajasthan — the palaces, the deserts, the sunsets, the food... We'll weave it all into your safar."
                          />
                        </div>

                        {/* Summary Preview */}
                        <div className="bg-white/[0.04] border border-white/[0.08] p-6">
                          <h5 className="text-[9px] uppercase tracking-[0.3em] text-metallic-gold/80 font-bold mb-4">Inquiry Summary</h5>
                          <div className="grid grid-cols-2 gap-4 text-sm font-sans">
                            <div>
                              <span className="text-white/30 text-xs block">Name</span>
                              <span className="text-white/80">{formData.name || '—'}</span>
                            </div>
                            <div>
                              <span className="text-white/30 text-xs block">Trip Style</span>
                              <span className="text-white/80">{formData.tripType}</span>
                            </div>
                            <div>
                              <span className="text-white/30 text-xs block">Season</span>
                              <span className="text-white/80">{formData.month}</span>
                            </div>
                            <div>
                              <span className="text-white/30 text-xs block">Travelers</span>
                              <span className="text-white/80">{formData.travelers || '—'}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-4 mt-14">
                        <button
                          type="button"
                          onClick={() => setFormStep(2)}
                          className="btn-ghost-light"
                        >
                          Back
                        </button>
                        <button
                          type="submit"
                          className="btn-primary flex-1 group"
                        >
                          <span className="relative z-10 flex items-center gap-3">
                            Send to Concierge <Send size={15} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                          </span>
                        </button>
                      </div>
                    </div>
                  </form>
                )}

                {/* Form Footer */}
                <div className="mt-10 pt-8 border-t border-white/[0.06] relative z-10 flex items-center justify-center gap-6 flex-wrap">
                  <div className="flex items-center gap-2 text-[9px] uppercase tracking-[0.15em] text-white/30 font-sans font-bold">
                    <ShieldCheck size={12} className="text-metallic-gold/40" /> SSL Encrypted
                  </div>
                  <div className="flex items-center gap-2 text-[9px] uppercase tracking-[0.15em] text-white/30 font-sans font-bold">
                    <Clock size={12} className="text-metallic-gold/40" /> 2hr Response
                  </div>
                  <div className="flex items-center gap-2 text-[9px] uppercase tracking-[0.15em] text-white/30 font-sans font-bold">
                    <Heart size={12} className="text-metallic-gold/40" /> No Spam Promise
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* ═══════════════════════════════════════════
          4. ARCHITECTURAL MAP SECTION
          ═══════════════════════════════════════════ */}
      <section className="relative h-[750px] lg:h-[800px] bg-royal-blue overflow-hidden" data-aos="fade-up">
        {/* Map Background */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-[70%] bg-silk-white">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58097.74504782965!2d73.6727959!3d24.5854111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e56f8e5b49d3%3A0x6faefd29b63cf89a!2sUdaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1701000000000!5m2!1sen!2sin"
            className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-[2s] opacity-70 mix-blend-multiply"
            allowFullScreen
            loading="lazy"
            title="SafarSathi4U Location — Udaipur, Rajasthan"
          />
          <div className="absolute inset-y-0 right-0 w-80 bg-gradient-to-l from-royal-blue to-transparent pointer-events-none hidden lg:block" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-royal-blue to-transparent pointer-events-none lg:hidden" />
        </div>

        {/* Foreground Info Card */}
        <div className="absolute inset-0 max-w-7xl mx-auto flex items-center justify-end px-[6vw] pointer-events-none z-20">
          <div
            className="bg-royal-blue/95 backdrop-blur-xl p-10 md:p-14 shadow-2xl text-white w-full max-w-[480px] border border-white/10 pointer-events-auto relative mt-40 lg:mt-0"
            data-aos="fade-left" data-aos-delay="200"
          >
            {/* Corner pin */}
            <div className="absolute -top-7 -left-7 w-14 h-14 bg-metallic-gold flex items-center justify-center text-royal-blue shadow-xl transition-transform duration-500 hover:scale-110 hover:rotate-12">
              <MapPin size={26} />
            </div>

            {/* Corner decorations */}
            <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-metallic-gold/15" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-metallic-gold/15" />

            <h4 className="font-serif text-[clamp(2rem,4vw,3.2rem)] leading-[1.05] mb-8 mt-3 tracking-tight">
              The Royal <br />
              <em className="italic text-metallic-gold not-italic">Headquarters</em>
            </h4>

            <p className="text-white/50 font-sans text-sm md:text-base font-light leading-relaxed mb-10 border-b border-white/10 pb-10">
              Nestled against the timeless Aravalli Hills in the heart of Udaipur — where every great journey finds its beginning.
            </p>

            <div className="space-y-8">
              <div className="flex flex-col gap-2 border-l-2 border-metallic-gold/40 pl-5 group hover:border-metallic-gold transition-colors duration-500">
                <span className="text-[9px] uppercase tracking-[0.3em] text-metallic-gold font-bold">Address</span>
                <span className="font-serif text-xl tracking-tight text-white/90 leading-snug">
                  Lake Palace Road, near Jagdish Temple, Udaipur
                  <span className="font-sans text-sm tracking-wide text-white/40 block mt-1">Rajasthan 313001</span>
                </span>
              </div>
              <div className="flex flex-col gap-2 border-l-2 border-metallic-gold/40 pl-5 group hover:border-metallic-gold transition-colors duration-500">
                <span className="text-[9px] uppercase tracking-[0.3em] text-metallic-gold font-bold">Visiting Hours</span>
                <span className="font-serif text-xl tracking-tight text-white/90 leading-snug">
                  10:00 AM — 07:00 PM
                  <span className="font-sans text-sm tracking-wide text-white/40 block mt-1">Visits strictly by prior appointment</span>
                </span>
              </div>
            </div>

            {/* Get Directions CTA */}
            <a
              href="https://maps.google.com/?q=24.5854111,73.6727959"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost-light mt-10 group"
            >
              Get Directions <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Floating Animation Keyframes (injected via style tag) */}
      <style>{`
        @keyframes float {
          from { transform: translateY(0px) scale(1); opacity: 0.4; }
          to { transform: translateY(-20px) scale(1.5); opacity: 0.1; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.3); }
        }
      `}</style>
    </div>
  );
};

export default Contact;
