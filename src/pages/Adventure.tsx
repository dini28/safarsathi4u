import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Compass, Wind, Mountain, Camera, ArrowRight, Zap, Shield,
  MapPin, Activity, Star, Clock, Users,
  Flame, Waves, Sun, Binoculars,
  Heart, Award, CheckCircle, Sparkles, X
} from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

/* ──────────────────────────────────────────────
   DATA
   ────────────────────────────────────────────── */

const adventures = [
  {
    title: 'Thar Desert Safari',
    intensity: 'Medium',
    intensityColor: 'from-amber-500 to-orange-600',
    icon: Wind,
    duration: '6 Hours',
    price: '₹2,499',
    rating: 4.9,
    reviews: 127,
    groupSize: '2-12',
    desc: 'Experience the magic of the golden sands on camelback or in an open 4x4 jeep. As the sun dips below the dunes, enjoy a traditional Rajasthani dinner under a canopy of stars at our exclusive desert camp.',
    highlights: ['Camel & Jeep Safari', 'Sunset Dinner Under Stars', 'Folk Music & Dance'],
    img: 'https://images.unsplash.com/photo-1607922276202-5007ffe552ca?w=1200&q=85',
    location: 'Jaisalmer',
    bestFor: 'Families & Couples',
  },
  {
    title: 'Aravalli Trekking',
    intensity: 'High',
    intensityColor: 'from-red-500 to-rose-600',
    icon: Mountain,
    duration: '5 Hours',
    price: '₹1,999',
    rating: 4.8,
    reviews: 89,
    groupSize: '4-8',
    desc: 'Hike through the oldest fold mountains in the world. Discover hidden temples, tribal villages, and breathtaking valley views that remain untouched by time. Expert naturalist guides lead every expedition.',
    highlights: ['Hidden Temple Discovery', 'Tribal Village Visits', 'Valley Panoramas'],
    img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=85',
    location: 'Udaipur',
    bestFor: 'Adventure Seekers',
  },
  {
    title: 'Kumbhalgarh Zipline',
    intensity: 'Extreme',
    intensityColor: 'from-purple-500 to-violet-600',
    icon: Zap,
    duration: '2 Hours',
    price: '₹3,499',
    rating: 4.9,
    reviews: 64,
    groupSize: '1-6',
    desc: 'Soar over the dense forests and rugged hills surrounding the "Great Wall of India". A high-altitude adrenaline rush with unparalleled views of the 36km fortress — the second longest wall in the world.',
    highlights: ['360° Fort Views', 'Multi-Line Course', 'Professional Harness Gear'],
    img: 'https://images.unsplash.com/photo-1526481280693-3bfa75618077?w=1200&q=85',
    location: 'Kumbhalgarh',
    bestFor: 'Thrill Seekers',
  },
  {
    title: 'Rural Photography',
    intensity: 'Low',
    intensityColor: 'from-emerald-500 to-teal-600',
    icon: Camera,
    duration: '4 Hours',
    price: '₹1,499',
    rating: 5.0,
    reviews: 43,
    groupSize: '2-6',
    desc: 'Capture the vibrant colors and soul of rural Rajasthan. Guided tours to remote villages for authentic cultural photography. Your mentor is a published National Geographic contributor.',
    highlights: ['NatGeo Mentor', 'Remote Village Access', 'Portrait Sessions'],
    img: 'https://images.unsplash.com/photo-1681731030636-8f09daaa2bf3?w=1200&q=85',
    location: 'Various',
    bestFor: 'Creatives & Storytellers',
  },
  {
    title: 'Lake Pichola Kayaking',
    intensity: 'Medium',
    intensityColor: 'from-cyan-500 to-blue-600',
    icon: Waves,
    duration: '3 Hours',
    price: '₹1,799',
    rating: 4.7,
    reviews: 56,
    groupSize: '2-8',
    desc: 'Paddle through the serene waters of Lake Pichola at dawn, gliding past the floating Lake Palace and ancient ghats. A meditative adventure that reveals Udaipur\'s soul from the water.',
    highlights: ['Sunrise Session', 'Lake Palace Views', 'Heritage Ghat Tour'],
    img: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&q=85',
    location: 'Udaipur',
    bestFor: 'Peace Seekers',
  },
  {
    title: 'Jungle Safari – Sajjangarh',
    intensity: 'Medium',
    intensityColor: 'from-lime-600 to-emerald-700',
    icon: Binoculars,
    duration: '4 Hours',
    price: '₹2,199',
    rating: 4.8,
    reviews: 71,
    groupSize: '2-10',
    desc: 'Explore the Sajjangarh Wildlife Sanctuary in an open 4x4 jeep. Spot leopards, sambhar deer, wild boar, and rare bird species amidst the rugged Aravalli backdrop. Sunset at Monsoon Palace included.',
    highlights: ['Leopard Territory', 'Monsoon Palace Sunset', 'Bird Watching'],
    img: 'https://images.unsplash.com/photo-1549490349-8643362247b5?w=1200&q=85',
    location: 'Udaipur',
    bestFor: 'Nature Lovers',
  },
];

const experienceStats = [
  { icon: Mountain, value: '21+', label: 'Adventure Routes' },
  { icon: Users, value: '1,000+', label: 'Adventurers Guided' },
  { icon: Star, value: '4.9', label: 'Average Rating' },
  { icon: Shield, value: '0', label: 'Safety Incidents' },
];

const safetyFeatures = [
  { icon: Shield, title: 'Certified Guides', desc: 'Every guide holds international adventure certification and first-aid training.' },
  { icon: Activity, title: 'Premium Safety Gear', desc: 'Professional-grade equipment inspected before every expedition.' },
  { icon: MapPin, title: 'GPS Tracking', desc: 'Real-time location monitoring on all remote expeditions.' },
  { icon: Compass, title: '24/7 Ground Support', desc: 'Dedicated ground team with satellite phone connectivity.' },
];

/* ──────────────────────────────────────────────
   FILTER PILL COMPONENT
   ────────────────────────────────────────────── */
const FilterPill: React.FC<{
  label: string;
  active: boolean;
  onClick: () => void;
  icon?: React.ReactNode;
}> = ({ label, active, onClick, icon }) => (
  <button
    onClick={onClick}
    className={`
      inline-flex items-center gap-2 px-5 py-2.5 text-[10px] uppercase tracking-[0.2em] font-sans font-bold
      border transition-all duration-500 cursor-pointer whitespace-nowrap
      ${active
        ? 'bg-metallic-gold text-royal-blue border-metallic-gold shadow-lg shadow-metallic-gold/15'
        : 'bg-white border-metallic-gold/[0.08] text-muted/70 hover:border-metallic-gold/30 hover:text-royal-blue'
      }
    `}
  >
    {icon}
    {label}
  </button>
);

/* ──────────────────────────────────────────────
   MAIN ADVENTURE PAGE
   ────────────────────────────────────────────── */
const Adventure = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 80 });
    window.scrollTo(0, 0);
  }, []);

  const filters = ['All', 'Low', 'Medium', 'High', 'Extreme'];
  const filterIcons: Record<string, React.ReactNode> = {
    All: <Compass size={11} />,
    Low: <Sun size={11} />,
    Medium: <Flame size={11} />,
    High: <Mountain size={11} />,
    Extreme: <Zap size={11} />,
  };

  const filteredAdventures = activeFilter === 'All'
    ? adventures
    : adventures.filter(a => a.intensity === activeFilter);

  return (
    <div className="bg-silk-white overflow-hidden">

      {/* ═══════════════════════════════════════════
          1. HERO SECTION
          ═══════════════════════════════════════════ */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden" aria-label="Adventure Hero">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1607922276202-5007ffe552ca?w=1920&q=90"
            alt="Golden Thar Desert at sunset"
            className="w-full h-full object-cover scale-105"
            loading="eager"
          />
          <div className="absolute inset-0 bg-royal-blue/75" />
          <div className="absolute inset-0 bg-gradient-to-b from-royal-blue/50 via-transparent to-royal-blue/95" />
          <div className="absolute inset-0 bg-gradient-to-r from-royal-blue/85 via-royal-blue/30 to-transparent" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl" data-aos="zoom-out">
          <div className="inline-flex items-center gap-4 text-[10px] uppercase tracking-[0.45em] text-metallic-gold mb-8">
            <span className="w-12 h-[1px] bg-metallic-gold/40" />
            Unleash Your Spirit
            <span className="w-12 h-[1px] bg-metallic-gold/40" />
          </div>
          <h1 className="font-serif text-[clamp(2.5rem,7vw,5rem)] font-light leading-[1.05] text-white mb-8 tracking-tight">
            The Wild <em className="italic text-metallic-gold not-italic font-normal">Side</em>{' '}
            of Royalty
          </h1>
          <p className="text-white/60 text-lg md:text-xl font-sans font-light tracking-wide max-w-2xl mx-auto border-t border-white/15 pt-8 leading-relaxed">
            Beyond the marble palaces lie rugged mountains, vast deserts, and untamed paths —
            experience Rajasthan through the lens of adrenaline and authentic adventure.
          </p>
          <div className="flex flex-wrap justify-center gap-5 mt-10">
            <a
              href="#experiences"
              className="btn-primary group"
              onClick={(e) => { e.preventDefault(); document.getElementById('experiences')?.scrollIntoView({ behavior: 'smooth' }); }}
            >
              <span className="relative z-10 flex items-center gap-3">
                Explore Activities <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <Link
              to="/contact"
              className="btn-ghost-light"
            >
              Custom Adventure
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3">
          <span
            className="text-[8px] uppercase tracking-[0.4em] text-white/30 font-sans cursor-pointer"
            onClick={() => document.getElementById('experiences')?.scrollIntoView({ behavior: 'smooth' })}
          >Scroll</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-metallic-gold/40 to-transparent relative overflow-hidden">
            <div className="absolute w-full h-3 bg-metallic-gold/80 animate-[scrollDot_1.5s_ease-in-out_infinite]" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          2. ADVENTURE STATS MARQUEE
          ═══════════════════════════════════════════ */}
      <section className="bg-royal-blue border-y border-metallic-gold/10 relative z-20" data-aos="fade-up">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 divide-x divide-metallic-gold/[0.08]">
          {experienceStats.map((stat, i) => (
            <div
              key={i}
              className="group py-12 md:py-16 px-6 text-center hover:bg-white/[0.03] transition-all duration-500 cursor-default"
            >
              <stat.icon
                size={18}
                className="text-metallic-gold/50 mx-auto mb-4 group-hover:text-metallic-gold group-hover:scale-110 transition-all duration-500"
              />
              <div className="font-serif text-3xl md:text-4xl text-white font-light tracking-tighter mb-2 group-hover:text-metallic-gold transition-colors duration-500">
                {stat.value}
              </div>
              <div className="text-[9px] uppercase tracking-[0.3em] text-white/40 font-sans font-bold group-hover:text-white/60 transition-colors">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          3. MAIN ADVENTURE SHOWCASE
          ═══════════════════════════════════════════ */}
      <main id="experiences" className="py-28 md:py-40 px-[6vw] bg-ivory border-b border-metallic-gold/10 scroll-mt-20">
        <div className="max-w-7xl mx-auto">

          {/* Section Header + Filters */}
          <div className="mb-16 md:mb-20" data-aos="fade-up">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10">
              <div className="max-w-2xl">
                <span className="section-subheading flex items-center gap-3">
                  <span className="w-8 h-[1px] bg-metallic-gold/40" />
                  Curated Expeditions
                </span>
                <h2 className="section-heading !mb-4">Beyond the <em>Ordinary</em></h2>
                <p className="text-muted/70 text-[15px] leading-[1.9] font-sans font-light max-w-lg">
                  Each adventure is personally scouted, safety-certified, and led by experts who know these terrains like the back of their hand.
                </p>
              </div>
              <p className="text-muted/60 max-w-xs text-sm font-light leading-relaxed border-l-2 border-metallic-gold/30 pl-6 py-2 font-sans italic hidden lg:block">
                "We don't just guide; we create memories that last long after the desert sun sets."
              </p>
            </div>

            {/* Filter Bar */}
            <div className="flex flex-wrap gap-3 mt-12">
              {filters.map(f => (
                <FilterPill
                  key={f}
                  label={f}
                  active={activeFilter === f}
                  onClick={() => setActiveFilter(f)}
                  icon={filterIcons[f]}
                />
              ))}
            </div>
          </div>

          {/* Adventure Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 md:gap-8">
            {filteredAdventures.map((adv, i) => (
              <div
                key={adv.title}
                className="group relative bg-white border border-metallic-gold/[0.06] hover:border-metallic-gold/25 transition-all duration-700 hover:shadow-2xl hover:shadow-metallic-gold/[0.06] hover:-translate-y-1 overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                {/* Image */}
                <div className="relative h-72 md:h-80 overflow-hidden">
                  <img
                    src={adv.img}
                    alt={adv.title}
                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-royal-blue/90 via-royal-blue/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

                  {/* Badges */}
                  <div className="absolute top-5 left-5 flex flex-col gap-2">
                    <div className={`px-3 py-1.5 bg-gradient-to-r ${adv.intensityColor} text-white text-[9px] uppercase tracking-[0.18em] font-bold shadow-lg`}>
                      {adv.intensity}
                    </div>
                    <div className="px-3 py-1.5 bg-white/10 backdrop-blur-md text-white/90 text-[9px] uppercase tracking-[0.15em] font-bold border border-white/15 flex items-center gap-1.5">
                      <Clock size={10} /> {adv.duration}
                    </div>
                  </div>

                  {/* Price badge */}
                  <div className="absolute top-5 right-5 bg-metallic-gold text-royal-blue px-3 py-1.5 font-sans font-bold text-[11px] tracking-wider shadow-lg">
                    {adv.price}
                  </div>

                  {/* Bottom overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-2 text-metallic-gold text-[10px] uppercase tracking-[0.2em] font-bold mb-2">
                      <MapPin size={11} /> {adv.location}
                    </div>
                    <h3 className="font-serif text-2xl md:text-3xl text-white tracking-tight leading-tight">
                      {adv.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 md:p-8">
                  {/* Rating + Group */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-0.5">
                        {Array(5).fill(0).map((_, si) => (
                          <Star key={si} size={11} fill="#D4AF37" strokeWidth={0} className="text-metallic-gold" />
                        ))}
                      </div>
                      <span className="text-xs font-sans text-muted/70 font-semibold">{adv.rating} ({adv.reviews})</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-muted/50 text-[10px] font-sans font-bold uppercase tracking-wider">
                      <Users size={11} /> {adv.groupSize}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted/70 text-[13px] leading-[1.8] font-sans font-light mb-6 line-clamp-3">
                    {adv.desc}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-7">
                    {adv.highlights.map((h, hi) => (
                      <span
                        key={hi}
                        className="inline-flex items-center gap-1 text-[9px] uppercase tracking-[0.12em] font-sans font-bold text-royal-blue/60 bg-royal-blue/[0.04] px-2.5 py-1 border border-royal-blue/[0.06]"
                      >
                        <CheckCircle size={8} className="text-metallic-gold" /> {h}
                      </span>
                    ))}
                  </div>

                  {/* Best For + CTA */}
                  <div className="flex items-center justify-between pt-6 border-t border-metallic-gold/[0.06]">
                    <div className="flex items-center gap-2">
                      <Heart size={12} className="text-metallic-gold/60" />
                      <span className="text-[10px] uppercase tracking-[0.15em] text-muted/50 font-sans font-bold">{adv.bestFor}</span>
                    </div>
                    <Link
                      to="/contact"
                      className="btn-text group"
                    >
                      Reserve <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty state */}
          {filteredAdventures.length === 0 && (
            <div className="text-center py-24" data-aos="fade-up">
              <Compass size={48} className="text-metallic-gold/20 mx-auto mb-6" />
              <h3 className="font-serif text-2xl text-royal-blue mb-3">No Adventures Found</h3>
              <p className="text-muted/60 font-sans text-sm">Try selecting a different intensity level.</p>
              <button
                onClick={() => setActiveFilter('All')}
                className="mt-6 text-[10px] uppercase tracking-[0.2em] text-metallic-gold font-bold font-sans border-b border-metallic-gold/30 pb-1 hover:border-metallic-gold transition-colors cursor-pointer"
              >
                Show All Adventures
              </button>
            </div>
          )}
        </div>
      </main>

      {/* ═══════════════════════════════════════════
          4. SAFETY & STANDARDS — SPLIT LAYOUT
          ═══════════════════════════════════════════ */}
      <section className="bg-royal-blue relative overflow-hidden" data-aos="fade-up">
        {/* Subtle bg pattern */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(rgba(212,175,55,0.5) 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
          }}
        />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[700px]">
          {/* Left: Content */}
          <div className="py-20 md:py-28 px-[6vw] lg:px-16 flex flex-col justify-center relative z-10">
            <span className="section-subheading text-metallic-gold/70 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-metallic-gold/30" />
              Safety Standards
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-8 font-light leading-[1.15]">
              Professional <em className="italic text-metallic-gold not-italic">Gear</em><br />& Security
            </h2>
            <p className="text-white/40 text-[15px] font-light font-sans leading-relaxed mb-14 max-w-md">
              Your safety is our non-negotiable priority. Every expedition is monitored by certified professionals equipped with the finest gear suited for the Rajasthani terrain.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {safetyFeatures.map((item, idx) => (
                <div key={idx} className="flex gap-4 group">
                  <div className="w-12 h-12 bg-metallic-gold/10 text-metallic-gold flex items-center justify-center shrink-0 group-hover:bg-metallic-gold/20 group-hover:scale-110 transition-all duration-500">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-serif text-lg mb-1 group-hover:text-metallic-gold transition-colors duration-500">{item.title}</h4>
                    <p className="text-white/30 text-xs leading-relaxed font-sans">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust badge */}
            <div className="mt-14 pt-8 border-t border-white/[0.06] flex items-center gap-4">
              <div className="flex items-center gap-1">
                {Array(5).fill(0).map((_, i) => (
                  <Star key={i} size={12} fill="#D4AF37" strokeWidth={0} />
                ))}
              </div>
              <span className="text-[10px] uppercase tracking-[0.15em] text-white/40 font-sans font-bold">
                Zero safety incidents since inception
              </span>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative hidden lg:block">
            <img
              src="https://images.unsplash.com/photo-1549490349-8643362247b5?w=1000&q=85"
              alt="Professional adventure safety gear and equipment"
              className="w-full h-full object-cover grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-[1.5s]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-royal-blue via-royal-blue/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-royal-blue/60 via-transparent to-royal-blue/30" />

            {/* Floating quote card */}
            <div className="absolute bottom-12 right-12 left-12 bg-royal-blue/80 backdrop-blur-xl p-8 border border-white/10">
              <Sparkles size={16} className="text-metallic-gold/40 mb-4" />
              <p className="text-white/70 italic font-serif text-lg leading-relaxed">
                "Prepared for the unexpected,<br />designed for the thrill."
              </p>
              <div className="w-8 h-[1px] bg-metallic-gold/30 mt-4" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          5. "HOW IT WORKS" PROCESS STRIP
          ═══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-[6vw] bg-ivory" data-aos="fade-up">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <span className="section-subheading justify-center flex items-center gap-3">
              <span className="w-8 h-[1px] bg-metallic-gold/40" />
              Your Journey
              <span className="w-8 h-[1px] bg-metallic-gold/40" />
            </span>
            <h2 className="section-heading !mb-0">How It <em>Works</em></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-0 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-[1px] bg-metallic-gold/15 z-0" />

            {[
              { num: '01', title: 'Choose', desc: 'Pick an adventure that matches your spirit — or let us recommend one.', icon: Compass },
              { num: '02', title: 'Customize', desc: 'We tailor every detail — difficulty, duration, group size — to your preferences.', icon: Sparkles },
              { num: '03', title: 'Gear Up', desc: 'We provide all professional safety gear and certified guides for your expedition.', icon: Shield },
              { num: '04', title: 'Experience', desc: 'Immerse yourself in Rajasthan\'s wild side — memories that last forever.', icon: Heart },
            ].map((step, i) => (
              <div
                key={i}
                className="relative text-center px-6 group"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                {/* Step circle */}
                <div className="w-24 h-24 mx-auto mb-8 relative z-10 bg-white border-2 border-metallic-gold/15 flex items-center justify-center group-hover:border-metallic-gold/50 group-hover:shadow-xl group-hover:shadow-metallic-gold/[0.06] transition-all duration-500">
                  <step.icon size={28} strokeWidth={1.2} className="text-metallic-gold/70 group-hover:text-metallic-gold group-hover:scale-110 transition-all duration-500" />
                  <div className="absolute -top-3 -right-3 w-7 h-7 bg-metallic-gold text-royal-blue flex items-center justify-center text-[10px] font-sans font-bold shadow-md">
                    {step.num}
                  </div>
                </div>

                <h4 className="font-serif text-xl text-royal-blue mb-3 group-hover:text-metallic-gold transition-colors duration-500 tracking-wide">{step.title}</h4>
                <p className="text-muted/60 text-[13px] font-sans font-light leading-[1.8] max-w-[220px] mx-auto">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          6. FINAL CTA SECTION
          ═══════════════════════════════════════════ */}
      <section className="relative py-32 md:py-44 px-[6vw] md:px-[10vw] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1607922276202-5007ffe552ca?w=1920&q=80"
            alt="Desert landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-royal-blue/88" />
          <div className="absolute inset-0 bg-gradient-to-r from-royal-blue/95 via-royal-blue/85 to-royal-blue/75" />
        </div>

        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/az-subtle.png')]" />

        <div className="relative z-10 max-w-5xl mx-auto text-center" data-aos="fade-up">
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="w-16 h-[1px] bg-metallic-gold/30" />
            <span className="text-[10px] uppercase tracking-[0.5em] text-metallic-gold/60 font-sans font-bold">
              Ready for the Wild?
            </span>
            <div className="w-16 h-[1px] bg-metallic-gold/30" />
          </div>

          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] font-light tracking-tight">
            Adventure <em className="italic text-metallic-gold not-italic">Awaits</em>
          </h2>

          <p className="text-white/40 text-lg font-sans font-light max-w-xl mx-auto mt-8 leading-relaxed">
            Ready to push your boundaries? Our adventure specialists are standing by to curate your personal expedition through the wild heart of Mewar.
          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-14">
            <Link
              to="/contact"
              className="btn-primary group"
            >
              <span className="relative z-10 flex items-center gap-3">
                Book Your Safar <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              to="/packages"
              className="btn-ghost-light"
            >
              Explore Packages
            </Link>
          </div>

          {/* Bottom trust */}
          <div className="mt-16 pt-8 border-t border-white/[0.06] flex flex-wrap items-center justify-center gap-8">
            {[
              { icon: Shield, text: 'Safety Certified' },
              { icon: Award, text: 'Expert-Led Expeditions' },
              { icon: Star, text: '4.9★ Adventure Rating' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <item.icon size={13} className="text-metallic-gold/50" />
                <span className="text-[10px] uppercase tracking-[0.15em] text-white/35 font-sans font-bold">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Adventure;
