import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ShieldCheck, Heart, Compass, Sparkles, Users, ArrowRight, Quote, ArrowDown, History, CheckCircle } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';



const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 50 });
    window.scrollTo(0, 0);
  }, []);

  const coreValues = [
    {
      icon: <MapPin size={24} />,
      title: "Local Pedigree",
      desc: "Born and raised in the alleys of Mewar, we offer stories and secret shortcuts that no guidebook can provide."
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Royal Guardian",
      desc: "From premium sanitized vehicles to certified heritage guides, your safety is handled with royal precision."
    },
    {
      icon: <Heart size={24} />,
      title: "Atithi Devo Bhava",
      desc: "In our philosophy, you aren't a tourist; you are an honored guest. We serve with the soul of Rajasthan."
    },
    {
      icon: <Sparkles size={24} />,
      title: "Bespoke Curation",
      desc: "No templates. Every itinerary is a unique narrative crafted to match your pace, curiosity, and comfort."
    }
  ];

  const milestones = [
    { year: "2018", title: "The First Step", desc: "Founded with a single vintage jeep and a profound dream to reveal Udaipur's true, unfiltered soul." },
    { year: "2021", title: "Royal Expansion", desc: "Scaling into a luxury fleet and establishing exclusive haveli partnerships across the Golden Triangle." },
    { year: "2024", title: "The Artisan Network", desc: "Building a collective of master craftsmen, royal historians, and dedicated local guides." },
    { year: "2026", title: "Global Heritage", desc: "Curating impeccable Rajasthani narratives for a global community of discerning, luxury travelers." }
  ];

  return (
    <div className="overflow-x-hidden font-sans bg-silk-white">

      {/* ─── Hero Section ───────────────────────────────────── */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1594911425633-149f64c6ed74?q=80&w=2000&auto=format&fit=crop"
            alt="Udaipur Lake Palace"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-royal-blue/75" />
          <div className="absolute inset-0 bg-gradient-to-b from-royal-blue/50 via-transparent to-royal-blue/95" />
          <div className="absolute inset-0 bg-gradient-to-r from-royal-blue/85 via-royal-blue/30 to-transparent" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl" data-aos="zoom-out">
          <div className="inline-flex items-center gap-4 text-[10px] uppercase tracking-[0.45em] text-metallic-gold mb-8">
            <span className="w-12 h-[1px] bg-metallic-gold/40" />
            Our Royal Heritage
            <span className="w-12 h-[1px] bg-metallic-gold/40" />
          </div>
          <h1 className="font-serif text-[clamp(2.5rem,7vw,5rem)] font-light leading-[1.05] text-white mb-8 tracking-tight">
            The <em className="italic text-metallic-gold not-italic font-normal">Narrative</em> Behind{' '}
            SafarSathi4U
          </h1>
          <p className="text-white/60 text-lg md:text-xl font-sans font-light tracking-wide max-w-2xl mx-auto border-t border-white/15 pt-8 leading-relaxed">
            A chronicle of passion, curating profound journeys through the lakes, deserts, and the timeless soul of Rajasthan since 2018.
          </p>
        </div>
      </section>

      {/* ─── Story Section ──────────────────────────────────── */}
      <section className="py-32 md:py-48 px-[6vw] lg:px-[8vw] bg-silk-white relative">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-20 lg:gap-32 items-center relative z-10">

          <div data-aos="fade-right" className="order-2 lg:order-1">
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted/70 font-bold font-sans mb-6 flex items-center gap-3">
              <span className="w-6 h-[1px] bg-metallic-gold/40" />
              Born in Mewar
            </span>
            <h2 className="text-royal-blue mb-10 leading-[1.1] font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-light">
              Where Passion <br /><em className="italic text-metallic-gold not-italic">Meets Inheritance</em>
            </h2>
            <div className="space-y-6 text-[15px] md:text-[17px] text-muted/80 font-sans leading-[2] tracking-wide max-w-xl">
              <p>
                SafarSathi4U was born in the narrow, sun-kissed alleys of Udaipur. Our founder realized that discerning travelers were seeing the sights, but missing the <em className="italic text-royal-blue font-semibold not-italic">safar</em> — the intimate, true essence of the journey.
              </p>
              <p>
                "Khamma Ghani" is more than a greeting for us; it is a sacred decree. A promise to experience Rajasthan not as a fleeting visitor, but as an honored guest of the Mewar soil, guided by those who call its grand palaces home.
              </p>
            </div>

            {/* Stats Glass Counter */}
            <div className="mt-16 flex flex-wrap gap-8 border-t border-metallic-gold/10 pt-12">
              <div className="bg-white border border-metallic-gold/10 shadow-lg p-6 pr-16 border-l-[3px] border-l-metallic-gold">
                <div className="text-4xl md:text-5xl text-royal-blue mb-2 tracking-tighter font-serif font-light">1000<span className="text-metallic-gold">+</span></div>
                <div className="text-[9px] uppercase tracking-[0.3em] text-muted/70 font-bold font-sans">Royal Journeys</div>
              </div>
              <div className="bg-white border border-metallic-gold/10 shadow-lg p-6 pr-16 border-l-[3px] border-l-metallic-gold">
                <div className="text-4xl md:text-5xl text-royal-blue mb-2 tracking-tighter font-serif font-light">100<span className="text-metallic-gold">%</span></div>
                <div className="text-[9px] uppercase tracking-[0.3em] text-muted/70 font-bold font-sans">Local Artisans</div>
              </div>
            </div>
          </div>

          <div className="relative order-1 lg:order-2" data-aos="fade-left">
            {/* Offset Gold Frame */}
            <div className="absolute inset-0 border border-metallic-gold/30 translate-x-8 translate-y-8 z-0 hidden md:block"></div>

            <div className="relative z-10 ss-image-wrap shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1590766940554-634a7ed41450?w=1000&fit=crop"
                alt="Udaipur Heritage View"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>

            {/* Floating Quote Badge */}
            <div className="absolute -bottom-10 -left-10 bg-royal-blue p-8 lg:p-12 border border-metallic-gold/20 shadow-2xl z-20 hidden md:block max-w-[320px]">
              <Quote size={28} strokeWidth={1.5} className="text-metallic-gold/40 mb-6" />
              <div className="text-white/95 leading-[1.3] tracking-wide font-serif text-[1.7rem] font-light italic">
                "Born in the lakes of <span className="not-italic text-metallic-gold">Udaipur</span>, crafted for the world."
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ─── Founder / Artisans Section ─────────────────────── */}
      <section className="py-28 px-[6vw] bg-ivory border-y border-metallic-gold/10 relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[auto_1fr] gap-12 lg:gap-24 items-center relative z-10" data-aos="fade-up">
          <div className="w-full max-w-[400px] mx-auto md:w-[350px] aspect-[3/4] relative p-3 border border-metallic-gold/20 bg-white shadow-xl">
            <div className="w-full h-full ss-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1525048999335-502a9b3a32f6?w=800&fit=crop"
                alt="The Royal Artisans"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div>
            <span className="text-[9px] uppercase tracking-[0.4em] text-muted/70 font-bold font-sans mb-6 block">The Curators</span>
            <h3 className="text-royal-blue mb-6 leading-[1.2] font-serif text-[clamp(2.5rem,4vw,3.5rem)] font-light">
              Guided by the Local <br /><em className="italic text-metallic-gold not-italic">Lords of Travel</em>
            </h3>
            <p className="text-muted/80 text-[15px] font-sans leading-[1.9] max-w-xl mb-8">
              We are not a faceless corporation. SafarSathi4U is operated by a consortium of Udaipur natives — historians, former palace concierges, and local connoisseurs. We open doors to havelis and experiences that remain fiercely closed to traditional operators.
            </p>
            <div className="inline-block border-b border-metallic-gold/30 pb-2">
              <img src="/logo.jpg" alt="Signet" className="h-10 w-10 border border-royal-blue/20 p-0.5 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Core Principles ────────────────────────────────── */}
      {/* Kept as a dark accent section identical to the Philosophy section in Home */}
      <section className="py-32 md:py-48 px-[6vw] bg-royal-blue relative overflow-hidden">
        {/* Massive watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none flex opacity-[0.015] select-none uppercase items-center justify-center w-full overflow-hidden font-serif font-bold tracking-widest text-[clamp(8rem,18vw,20rem)]" aria-hidden="true">
          PRINCIPLES
        </div>

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="text-center mb-24" data-aos="fade-up">
            <span className="text-[10px] uppercase tracking-[0.3em] text-metallic-gold/70 font-bold font-sans mb-6 flex justify-center items-center gap-3">
              <span className="w-8 h-[1px] bg-metallic-gold/30" />
              The Foundation
              <span className="w-8 h-[1px] bg-metallic-gold/30" />
            </span>
            <h2 className="text-white leading-[1.1] font-serif text-[clamp(2.5rem,5vw,4rem)] font-light">
              Our Enduring <em className="italic ss-gold-text not-italic border-b border-metallic-gold/20 pb-2">Ethos</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, idx) => (
              <div
                key={idx}
                className="p-8 md:p-10 border border-white/5 bg-white/[0.015] hover:bg-white/[0.03] ss-gold-border-hover relative group flex flex-col items-start rounded-sm"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                {/* Subtle glare */}
                <div className="absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-metallic-gold/40 transition-colors duration-500" />

                <div className="text-metallic-gold/80 mb-6 group-hover:text-metallic-gold group-hover:scale-110 transition-all duration-500">
                  {value.icon}
                </div>
                <h3 className="text-white mb-4 tracking-wide font-serif text-2xl font-light">{value.title}</h3>
                <p className="text-white/40 text-[13px] font-sans leading-[1.8] group-hover:text-white/60 transition-colors">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Experiential Timeline ──────────────────────────── */}
      <section className="py-32 md:py-48 px-[6vw] bg-silk-white relative border-t border-metallic-gold/10">
        <div className="max-w-[1200px] mx-auto text-center mb-28" data-aos="fade-up">
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted/60 font-bold font-sans mb-6 flex justify-center items-center gap-3">
            <span className="w-8 h-[1px] bg-metallic-gold/40" />
            The Chronicle
            <span className="w-8 h-[1px] bg-metallic-gold/40" />
          </span>
          <h2 className="text-royal-blue leading-[1.1] font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-light">
            Evolution of an <em className="italic text-metallic-gold not-italic">Experience</em>
          </h2>
        </div>

        <div className="max-w-[1000px] mx-auto relative pb-10">
          {/* Vertical Spine */}
          <div className="absolute top-0 bottom-0 left-[20px] md:left-1/2 md:-translate-x-1/2 w-[1px] bg-gradient-to-b from-transparent via-royal-blue/10 to-transparent" />

          <div className="space-y-24 w-full">
            {milestones.map((ms, i) => {
              const isEven = i % 2 === 0;
              return (
                <div
                  key={i}
                  className={`flex flex-col md:flex-row relative z-10 ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block w-1/2" />

                  {/* Node */}
                  <div className="absolute left-[16px] md:left-1/2 w-[11px] h-[11px] border-2 border-metallic-gold bg-white transform -translate-x-1/2 md:-translate-x-1/2 md:translate-y-8 rounded-full shadow-lg" />

                  {/* Content */}
                  <div
                    className="w-full md:w-1/2 pl-16 md:pl-0 pt-[-6px] md:pt-0"
                    data-aos={isEven ? 'fade-left' : 'fade-right'}
                  >
                    <div className={`relative ${isEven ? 'md:pl-20 md:text-left' : 'md:pr-20 md:text-right'}`}>
                      {/* Enormous background year */}
                      <div
                        className={`absolute top-[-30px] md:top-[-60px] ${isEven ? 'md:left-10 left-0' : 'md:right-10 left-0'} text-royal-blue/[0.04] select-none pointer-events-none font-bold leading-none font-serif text-[clamp(6rem,12vw,10rem)]`}
                      >
                        {ms.year}
                      </div>

                      <div className="relative z-10 pt-4">
                        <div className="text-royal-blue mb-3 font-serif text-[2.5rem] font-light leading-none">{ms.year}</div>
                        <h4 className="text-[10px] uppercase tracking-[0.25em] text-metallic-gold font-bold font-sans mb-4">{ms.title}</h4>
                        <p className="text-[15px] text-muted/80 leading-[1.9] font-sans max-w-sm mx-auto md:mx-0 ${isEven ? 'md:ml-0' : 'md:-ml-[auto] md:mr-0'}">
                          {ms.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
