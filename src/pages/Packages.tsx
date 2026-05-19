import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, ArrowRight, Star, Check, Sparkles, ShieldCheck, Heart, Map, Award, MessageCircle } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AnimatedCounter from '../components/AnimatedCounter';

const Packages = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 100 });
    window.scrollTo(0, 0);
  }, []);

  const packages = [
    {
      title: 'Royal Udaipur Escape',
      days: '3 Days / 2 Nights',
      price: '₹12,499',
      img: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200&q=80',
      description: 'Explore the City of Lakes with private palace tours, sunset boat rides on Lake Pichola, and dinner at a heritage haveli. A perfect introduction to Mewar royalty.',
      inclusions: ['Private Boat Ride', 'Heritage Stay', 'Palace Entry'],
      category: 'Best Seller'
    },
    {
      title: 'Golden Thar Expedition',
      days: '4 Days / 3 Nights',
      price: '₹18,999',
      img: 'https://images.unsplash.com/photo-1607922276202-5007ffe552ca?w=1200&q=80',
      description: 'Journey to Jaisalmer for dune bashing, camel safaris, and a night under the stars in a luxury desert camp. Experience the raw beauty of the Thar.',
      inclusions: ['Luxury Tents', 'Jeep Safari', 'Cultural Show'],
      category: 'Adventure'
    },
    {
      title: 'Heritage Rajasthan Grand',
      days: '7 Days / 6 Nights',
      price: '₹42,000',
      img: 'https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=1200&q=80',
      description: 'The ultimate royal circuit: Udaipur, Jodhpur, and Jaipur. Experience the full majesty of the Pink, Blue, and White cities in absolute luxury.',
      inclusions: ['3 Major Cities', 'Vintage Car Ride', 'Butler Service'],
      category: 'Elite'
    },
    {
      title: 'Sacred Trails & Forts',
      days: '5 Days / 4 Nights',
      price: '₹22,500',
      img: 'https://images.unsplash.com/photo-1526481280693-3bfa75618077?w=1200&q=80',
      description: 'A spiritual and historical journey through Nathdwara, the Great Wall of Kumbhalgarh, and the intricate marble carvings of Ranakpur.',
      inclusions: ['Temple VIP Tours', 'Fort Trek', 'Local Chauffeur'],
      category: 'Heritage'
    }
  ];

  return (
    <div className="bg-silk-white overflow-hidden">
      {/* ─── Hero Section ─── */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden text-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1712775206368-a580c8441093?w=1600&q=95"
            alt="Mehrangarh Fort Jodhpur"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-royal-blue/75" />
          <div className="absolute inset-0 bg-gradient-to-b from-royal-blue/50 via-transparent to-royal-blue/95" />
          <div className="absolute inset-0 bg-gradient-to-r from-royal-blue/85 via-royal-blue/30 to-transparent" />
        </div>

        <div className="relative z-10 px-6 max-w-4xl" data-aos="zoom-out">
          <div className="inline-flex items-center gap-4 text-[10px] uppercase tracking-[0.45em] text-metallic-gold mb-8">
            <span className="w-12 h-[1px] bg-metallic-gold/40"></span>
            Curated Journeys
            <span className="w-12 h-[1px] bg-metallic-gold/40"></span>
          </div>
          <h1 className="font-serif text-[clamp(2.5rem,7vw,5rem)] font-light leading-[1.1] text-white mb-8 tracking-tight">
            Hand-Picked <em className="italic text-metallic-gold not-italic font-normal">Safars</em> <br />
            of Rajasthan
          </h1>
          <p className="text-white/60 text-lg md:text-xl font-sans font-light tracking-wide max-w-2xl mx-auto border-t border-white/15 pt-8 leading-relaxed">
            Every itinerary is a masterpiece, designed to immerse you in the authentic soul, history, and hospitality of the Royal Territory.
          </p>
        </div>
      </section>

      {/* ─── Stats Bar ─── */}
      <section className="bg-royal-blue border-y border-metallic-gold/10" data-aos="fade-up">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 divide-x divide-metallic-gold/[0.08]">
          {[
            { end: 4, suffix: ' Circuits', label: 'Signature Packages', icon: Map },
            { end: 21, suffix: '+', label: 'Destinations', icon: Award },
            { end: 1000, suffix: '+', label: 'Nights Curated', icon: Clock },
            { end: 100, suffix: '%', label: 'Bespoke by Design', icon: Sparkles },
          ].map((stat, i) => (
            <div key={i} className="group py-12 md:py-16 px-6 text-center hover:bg-white/[0.03] transition-all duration-500 cursor-default">
              <stat.icon size={18} className="text-metallic-gold/50 mx-auto mb-4 group-hover:text-metallic-gold group-hover:scale-110 transition-all duration-500" />
              <div className="font-serif text-3xl md:text-4xl text-white font-light tracking-tighter mb-2 group-hover:text-metallic-gold transition-colors duration-500">
                <AnimatedCounter end={stat.end} suffix={stat.suffix} />
              </div>
              <div className="text-[9px] uppercase tracking-[0.3em] text-white/40 font-sans font-bold group-hover:text-white/60 transition-colors">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <main className="py-32 px-[6vw] bg-ivory border-t border-metallic-gold/10">
        <div className="max-w-7xl mx-auto">
          {/* INTRO */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8" data-aos="fade-up">
            <div className="max-w-2xl">
              <span className="section-subheading flex items-center gap-3">
                <span className="w-8 h-[1px] bg-metallic-gold/40" />
                The Selection
              </span>
              <h2 className="section-heading">Exclusive <em>Itineraries</em></h2>
            </div>
            <p className="text-muted max-w-xs text-sm font-light leading-relaxed">
              From weekend escapes to grand heritage circuits, choose the path that resonates with your spirit.
            </p>
          </div>

          {/* PACKAGE GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-metallic-gold/10 border border-metallic-gold/8 shadow-xl overflow-hidden">
            {packages.map((pkg, i) => (
              <div
                key={i}
                className="group flex flex-col bg-white transition-all duration-700 hover:z-10"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="relative h-[400px] overflow-hidden">
                  <img
                    src={pkg.img}
                    alt={pkg.title}
                    className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-royal-blue/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity"></div>

                  <div className="absolute top-6 left-6 flex flex-col gap-2">
                    <div className="px-3 py-1 bg-metallic-gold text-royal-blue text-[9px] uppercase tracking-widest font-bold rounded-sm">
                      {pkg.category}
                    </div>
                    <div className="px-3 py-1 bg-white/10 backdrop-blur-md text-white text-[9px] uppercase tracking-widest font-medium border border-white/20 rounded-sm">
                      {pkg.days}
                    </div>
                  </div>

                  <div className="absolute bottom-8 left-8 right-8 text-white">
                    <div className="flex items-center gap-1.5 mb-2 text-metallic-gold">
                      {[...Array(5)].map((_, i) => <Star key={i} size={10} fill="currentColor" strokeWidth={0} />)}
                    </div>
                    <h3 className="font-serif text-3xl tracking-tight mb-2">{pkg.title}</h3>
                    <div className="text-2xl font-light text-metallic-gold">{pkg.price}<span className="text-xs text-white/50 lowercase ml-2">/ person</span></div>
                  </div>
                </div>

                <div className="p-10 lg:p-12 flex-grow flex flex-col justify-between">
                  <div>
                    <p className="text-muted/80 text-sm leading-relaxed mb-8 font-light font-sans italic">
                      {pkg.description}
                    </p>
                    <div className="flex flex-wrap gap-4 mb-10">
                      {pkg.inclusions.map((inc, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-royal-blue/50 text-[10px] uppercase tracking-widest font-bold">
                          <Check size={12} className="text-metallic-gold" /> {inc}
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link to="/contact" className="btn-primary w-full group">
                    Explore Details <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* BESPOKE SECTION */}
          <section className="mt-60 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center" data-aos="fade-up">
            <div className="relative group">
              <div className="absolute -inset-4 border border-metallic-gold/15 rounded-sm translate-x-4 translate-y-4 -z-1"></div>
              <div className="relative aspect-[4/5] lg:aspect-video overflow-hidden rounded-sm shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=1000&q=80"
                  alt="Custom Journey"
                  className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-[2s]"
                />
              </div>
              {/* FLOATING BADGE */}
              <div className="absolute -bottom-10 -right-10 bg-royal-blue p-10 shadow-2xl text-white hidden lg:block border border-white/5">
                <Sparkles className="text-metallic-gold mb-4" size={32} />
                <div className="font-serif text-2xl leading-tight italic">Your Vision, <br />Our Expertise.</div>
              </div>
            </div>

            <div className="lg:pl-10">
              <span className="section-subheading flex items-center gap-3">
                <span className="w-8 h-[1px] bg-metallic-gold/40" />
                Tailor-Made
              </span>
              <h2 className="section-heading mb-8">Bespoke <em>Itineraries</em></h2>
              <p className="text-muted/80 text-lg font-light leading-relaxed mb-10 font-sans">
                Can't find exactly what you're looking for? Our travel architects specialize in crafting unique journeys tailored to your budget, pace, and specific curiosities.
              </p>
              <div className="space-y-6 mb-12">
                {[
                  { icon: Heart, text: 'Anniversary & Honeymoon Specials' },
                  { icon: Users, text: 'Private Family Gatherings' },
                  { icon: ShieldCheck, text: 'Solo Female Traveler Safe-Zones' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 text-royal-blue font-medium text-sm font-sans">
                    <item.icon size={18} className="text-metallic-gold" /> {item.text}
                  </div>
                ))}
              </div>
              <Link to="/contact" className="btn-primary">Design Your Safar <ArrowRight size={15} /></Link>
            </div>
          </section>

          {/* TRUST SIGNALS */}
          <div className="mt-40 grid grid-cols-1 md:grid-cols-3 gap-12 bg-royal-blue/5 p-12 lg:p-20 rounded-sm" data-aos="fade-up">
            {[
              { title: 'Transparent Pricing', desc: 'Zero hidden fees. You see exactly where your royal inheritance goes.' },
              { title: 'Local Custodians', desc: 'Born and raised in the Mewar soil, we protect your experience.' },
              { title: '24/7 Royal Support', desc: 'A dedicated concierge available every step of your journey.' }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 bg-white flex items-center justify-center mx-auto text-metallic-gold mb-6 shadow-sm rounded-full">
                  <Star size={20} fill="currentColor" strokeWidth={0} />
                </div>
                <h4 className="font-serif text-xl text-royal-blue mb-3 tracking-tight">{item.title}</h4>
                <p className="text-muted/70 text-xs leading-relaxed font-light font-sans italic px-4">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* ─── Final CTA Section ─── */}
      <section className="relative py-32 md:py-44 px-[6vw] md:px-[10vw] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1712775206368-a580c8441093?w=1920&q=80"
            alt="Mehrangarh Fort Jodhpur at dusk"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-royal-blue/88" />
          <div className="absolute inset-0 bg-gradient-to-r from-royal-blue/95 via-royal-blue/85 to-royal-blue/75" />
        </div>

        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/az-subtle.png')]" />

        <div className="relative z-10 max-w-5xl mx-auto text-center" data-aos="fade-up">
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="w-16 h-[1px] bg-metallic-gold/30" />
            <span className="text-[10px] uppercase tracking-[0.5em] text-metallic-gold/60 font-sans font-bold">
              The Royal Invitation
            </span>
            <div className="w-16 h-[1px] bg-metallic-gold/30" />
          </div>

          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] font-light tracking-tight">
            Begin Your <em className="italic text-metallic-gold not-italic">Royal Safar</em>
          </h2>

          <p className="text-white/40 text-lg font-sans font-light max-w-xl mx-auto mt-8 leading-relaxed">
            Every great journey deserves a perfect itinerary. Let our travel architects design yours — completely free, completely bespoke.
          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-14">
            <Link
              to="/contact"
              className="btn-primary group"
            >
              <span className="relative z-10 flex items-center gap-3">
                Design Your Itinerary <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <a
              href="https://wa.me/919601258617?text=Hi!%20I%20want%20to%20know%20more%20about%20your%20packages."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost-light"
            >
              <MessageCircle size={15} /> WhatsApp Us
            </a>
          </div>

          <div className="mt-16 pt-8 border-t border-white/[0.06] flex flex-wrap items-center justify-center gap-8">
            {[
              { icon: ShieldCheck, text: 'Transparent Pricing' },
              { icon: Heart, text: 'Bespoke Itineraries' },
              { icon: Star, text: '4.9★ Guest Rating' },
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

export default Packages;
