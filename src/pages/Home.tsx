import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Map, Hotel, Compass, Phone, Star, Quote, Play,
  ChevronDown, Send, Calendar, Users, MapPin, Clock, Shield,
  Award, CheckCircle, MessageCircle, Sparkles, X
} from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

/* ──────────────────────────────────────────────
   DATA
   ────────────────────────────────────────────── */

const testimonials = [
  { name: 'Arjun Mehta', loc: 'Delhi, India', quote: 'Our Golden Triangle trip was outstanding. Seamless coordination, insightful guides, and experiences that felt genuinely personal. SafarSathi4U turned our vacation into a lifelong memory.' },
  { name: 'Priya Sharma', loc: 'Mumbai, India', quote: 'The Udaipur sunset tour was pure magic. Every moment felt thoughtfully curated — from the private boat ride on Pichola to the rooftop dinner with live folk music.' },
  { name: 'Rahul Verma', loc: 'Bengaluru, India', quote: 'Best travel companion in Rajasthan. They know every hidden gem — the kind of authentic, local knowledge you simply cannot find anywhere online.' },
  { name: 'Sarah Mitchell', loc: 'London, UK', quote: 'A once-in-a-lifetime journey through royal palaces and desert landscapes. The attention to detail was extraordinary — every hotel, every guide, every meal was perfect.' },
  { name: 'David Chen', loc: 'Singapore', quote: 'From the moment we landed, SafarSathi4U took care of everything. The Jaisalmer desert camp under the stars was an experience we will never forget.' },
  { name: 'Ananya Kapoor', loc: 'Pune, India', quote: 'We have traveled extensively, but Rajasthan with SafarSathi4U was something else entirely. Their local connections opened doors we did not even know existed.' },
  { name: 'James Wilson', loc: 'New York, USA', quote: 'Incredible experience from start to finish. The private heritage walk through Jodhpur blue city was the highlight of our entire India trip.' },
  { name: 'Meera Patel', loc: 'Ahmedabad, India', quote: 'Professional, warm, and deeply knowledgeable. SafarSathi4U is not just a travel company — they are storytellers who bring Rajasthan alive.' },
];

const destinations = [
  { name: 'Udaipur', img: 'https://images.unsplash.com/photo-1715405155995-61757307e065?q=80&w=687&auto=format&fit=crop', desc: 'The City of Lakes — palaces, ghats & sunset views over Pichola.', price: '₹8,999', duration: '3D / 2N' },
  { name: 'Jaipur', img: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=600&h=900&fit=crop', desc: 'The Pink City — Hawa Mahal, Amber Fort & royal bazaars.', price: '₹9,999', duration: '3D / 2N' },
  { name: 'Jaisalmer', img: 'https://images.unsplash.com/photo-1713349881676-594b95a5742b?q=80&w=735&auto=format&fit=crop', desc: 'The Golden City — desert dunes, havelis & starlit nights.', price: '₹14,999', duration: '4D / 3N' },
  { name: 'Jodhpur', img: 'https://images.unsplash.com/photo-1569096610945-1a094be04c74?q=80&w=1130&auto=format&fit=crop', desc: 'The Blue City — Mehrangarh Fort & vibrant painted streets.', price: '₹7,999', duration: '2D / 1N' },
];

const faqs = [
  { q: 'How do I book a tour with SafarSathi4U?', a: 'Simply fill out our free itinerary form above or message us on WhatsApp. Our travel concierge will respond within 2 hours with a personalized itinerary tailored to your preferences, dates, and budget.' },
  { q: 'What is included in the tour packages?', a: 'All our packages include handpicked heritage hotel stays, private AC transportation, certified local guides, breakfast, sightseeing entrance fees, and 24/7 on-trip support. International flights and personal expenses are not included.' },
  { q: 'Can I fully customize my itinerary?', a: 'Absolutely. Every SafarSathi4U journey is bespoke. Tell us your interests — heritage, food, photography, adventure — and we will craft a one-of-a-kind itinerary around your passions and pace.' },
  { q: 'What is your cancellation & refund policy?', a: 'We offer a full refund for cancellations made 15+ days before departure, 50% refund for 7–14 days, and no refund within 7 days. We also offer flexible date rescheduling at no extra charge.' },
  { q: 'Is Rajasthan safe for solo / women travelers?', a: 'Yes. Rajasthan is one of India\'s most visited and well-policed tourist states. We provide vetted female guides on request, GPS-tracked vehicles, and a 24/7 helpline for complete peace of mind.' },
  { q: 'Do you offer group discounts?', a: 'Yes! Groups of 4+ receive 10% off, and groups of 8+ receive 15% off. We also offer special rates for corporate retreats, school trips, and wedding delegations.' },
];

const features = [
  { icon: <Map size={28} strokeWidth={1.2} />, title: 'Royal Envoys', desc: 'Certified local guides who reveal palace secrets and hidden stories of every kingdom.' },
  { icon: <Hotel size={28} strokeWidth={1.2} />, title: 'Sovereign Stays', desc: 'Hand-selected heritage hotels, boutique havelis, and luxury desert camps.' },
  { icon: <Compass size={28} strokeWidth={1.2} />, title: 'Bespoke Paths', desc: 'Every itinerary is custom-crafted to match your pace, interests, and budget.' },
  { icon: <Shield size={28} strokeWidth={1.2} />, title: '24/7 Concierge', desc: 'A dedicated travel concierge on call throughout your journey — always one message away.' },
];

/* ──────────────────────────────────────────────
   SUBCOMPONENTS
   ────────────────────────────────────────────── */

/* Infinite Testimonial Row */
const TestimonialRow: React.FC<{ items: typeof testimonials; direction?: 'left' | 'right' }> = ({
  items,
  direction = 'left',
}) => {
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;
    let animationId: number;
    let offset = 0;
    const halfWidth = row.scrollWidth / 2;

    const animate = () => {
      offset += direction === 'left' ? 0.5 : -0.5;
      if (direction === 'left' && offset >= halfWidth) offset = 0;
      if (direction === 'right' && Math.abs(offset) >= halfWidth) offset = 0;
      row.style.transform = `translateX(${-offset}px)`;
      animationId = requestAnimationFrame(animate);
    };
    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [direction]);

  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden" role="marquee" aria-label="Client testimonials">
      <div ref={rowRef} className="flex gap-6 will-change-transform" style={{ width: 'max-content' }}>
        {doubled.map((t, i) => (
          <article
            key={i}
            className="w-[360px] md:w-[420px] shrink-0 bg-white border border-metallic-gold/[0.08] rounded-sm p-8 md:p-10 group hover:border-metallic-gold/25 hover:shadow-2xl hover:shadow-metallic-gold/[0.06] transition-all duration-500 relative"
          >
            <Quote size={28} strokeWidth={1} className="text-metallic-gold/15 absolute top-6 right-6" aria-hidden="true" />
            <div className="flex gap-1 mb-5" aria-label="5 out of 5 stars">
              {Array(5).fill(0).map((_, si) => (
                <Star key={si} size={13} fill="#D4AF37" strokeWidth={0} className="text-metallic-gold" aria-hidden="true" />
              ))}
            </div>
            <p className="text-[14px] text-muted/90 italic leading-[1.9] font-serif font-light mb-8 line-clamp-4">
              "{t.quote}"
            </p>
            <div className="flex items-center gap-4 pt-6 border-t border-metallic-gold/[0.08]">
              <div className="w-10 h-10 rounded-full bg-royal-blue flex items-center justify-center font-serif text-metallic-gold text-lg font-light shrink-0" aria-hidden="true">
                {t.name[0]}
              </div>
              <div>
                <span className="block font-serif text-base text-royal-blue leading-none tracking-wide">{t.name}</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted/70 mt-1 block font-sans font-bold">{t.loc}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

/* Animated Counter */
const AnimatedCounter: React.FC<{ end: number; suffix?: string; label: string }> = ({ end, suffix = '', label }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const increment = end / (duration / 16);
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, 16);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <div ref={ref} className="bg-white text-center py-14 md:py-20 px-6 group hover:bg-royal-blue transition-all duration-700 cursor-default">
      <div className="font-serif text-4xl md:text-6xl font-light text-royal-blue group-hover:text-metallic-gold transition-colors duration-500 tracking-tighter">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-[9px] md:text-[10px] uppercase tracking-[0.35em] text-muted/80 mt-4 md:mt-6 group-hover:text-white/50 transition-colors font-bold">
        {label}
      </div>
    </div>
  );
};

/* FAQ Accordion Item */
const FAQItem: React.FC<{ q: string; a: string; isOpen: boolean; onToggle: () => void }> = ({ q, a, isOpen, onToggle }) => (
  <div className="border-b border-metallic-gold/[0.08] last:border-0">
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between py-6 md:py-7 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-metallic-gold/40 rounded-sm"
      aria-expanded={isOpen}
    >
      <span className="font-serif text-lg md:text-xl text-royal-blue group-hover:text-metallic-gold transition-colors duration-300 pr-6 leading-snug">
        {q}
      </span>
      <ChevronDown
        size={20}
        className={`text-metallic-gold/60 shrink-0 transition-transform duration-400 ${isOpen ? 'rotate-180' : ''}`}
        aria-hidden="true"
      />
    </button>
    <div
      className={`overflow-hidden transition-all duration-500 ease-out ${isOpen ? 'max-h-60 pb-6' : 'max-h-0'}`}
    >
      <p className="text-[14px] text-muted/80 leading-[1.9] font-sans max-w-3xl pl-0">
        {a}
      </p>
    </div>
  </div>
);

/* ──────────────────────────────────────────────
   MAIN PAGE COMPONENT
   ────────────────────────────────────────────── */

const Home = () => {
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  const [showVideo, setShowVideo] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', destination: 'Udaipur', month: '', groupSize: '2' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 900, once: true, offset: 60 });
    setTimeout(() => setHeroLoaded(true), 100);
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `🏰 *New Itinerary Request — SafarSathi4U*\n\n👤 Name: ${formData.name}\n📱 Phone: ${formData.phone}\n📍 Destination: ${formData.destination}\n📅 Travel Month: ${formData.month}\n👥 Group Size: ${formData.groupSize} people\n\n_Sent from safarsathi4u.com_`;
    window.open(`https://wa.me/919601258617?text=${encodeURIComponent(message)}`, '_blank');
    setFormSubmitted(true);
  };

  const delay = (ms: number) => ({ transitionDelay: `${ms}ms` });

  return (
    <div className="overflow-x-hidden">

      {/* ═══════════════════════════════════════════
          1. HERO SECTION
          ═══════════════════════════════════════════ */}

      <section className="relative min-h-screen flex items-center overflow-hidden" aria-label="Hero">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1709620220232-12ecd7ca33a8?q=80&w=1176&auto=format&fit=crop"
            className="w-full h-full object-cover"
            alt="Golden desert landscape of Rajasthan"
            loading="eager"
          />
        </div>
        <div className="absolute inset-0 bg-royal-blue/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-royal-blue/50 via-transparent to-royal-blue/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-royal-blue/85 via-royal-blue/30 to-transparent" />

        {/* Content */}
        <div className="relative z-10 w-full px-[6vw] md:px-[10vw] grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-center pt-24 pb-16">

          <div className="max-w-2xl">

            <div
              className={`flex items-center gap-4 mb-6 transition-all duration-1000 ease-out ${heroLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={delay(400)}
            >
              <span className="w-12 h-[1px] bg-metallic-gold/50" aria-hidden="true" />
              <span className="text-[10px] uppercase tracking-[0.35em] text-metallic-gold/80 font-sans font-bold">
                The Royal Heritage of Udaipur
              </span>
            </div>

            <h1
              className={`font-serif text-[clamp(2.8rem,7.5vw,5.5rem)] font-light leading-[1.05] text-white tracking-[-0.02em] transition-all duration-1000 ease-out ${heroLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={delay(550)}
            >
              Your <em className="italic text-metallic-gold not-italic font-normal">Royal</em> Rajasthan{' '}
              <br className="hidden sm:block" />
              Journey Starts Here.
            </h1>

            <p
              className={`text-[15px] md:text-[17px] text-white/60 font-sans font-light leading-[1.9] max-w-lg mt-8 tracking-wide transition-all duration-1000 ease-out ${heroLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={delay(700)}
            >
              Bespoke travel experiences through palaces, lakes, and the timeless soul of Rajasthan — curated by local experts who know every hidden gem.
            </p>

            {/* Unified CTAs */}
            <div
              className={`flex flex-wrap items-center gap-5 mt-12 transition-all duration-1000 ease-out ${heroLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={delay(850)}
            >
              <a
                href="#get-itinerary"
                className="btn-primary group"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Get Free Itinerary
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <Link
                to="/packages"
                className="btn-ghost-light"
              >
                Explore Packages
              </Link>
            </div>

            {/* Trust Badge */}
            <div
              className={`flex items-center gap-6 mt-14 pt-7 border-t border-white/[0.08] transition-all duration-1000 ease-out ${heroLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={delay(1000)}
            >
              <div className="flex -space-x-2">
                {[
                  'https://images.unsplash.com/photo-1546961329-78bef0414d7c?w=80&h=80&fit=crop&crop=face',
                  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face',
                  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face',
                  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop&crop=face'
                ].map((src, i) => (
                  <img key={i} src={src} alt="Happy traveler" className="w-10 h-10 rounded-full border-2 border-royal-blue object-cover" loading="lazy" />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 mb-1.5">
                  {Array(5).fill(0).map((_, i) => (
                    <Star key={i} size={14} fill="#D4AF37" strokeWidth={0} aria-hidden="true" />
                  ))}
                  <span className="text-[15px] text-metallic-gold font-serif font-semibold ml-2">4.9</span>
                </div>
                <span className="text-[11px] uppercase tracking-[0.18em] text-white/55 font-sans font-bold">
                  Rated by 500+ Happy Travelers
                </span>
              </div>
            </div>
          </div>

          {/* Hero Featured Card */}
          <div
            className={`hidden lg:block transition-all duration-[1200ms] ease-out ${heroLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            style={delay(800)}
          >
            <div className="relative w-[380px] xl:w-[420px]">
              <div className="absolute -inset-5 border border-metallic-gold/15 pointer-events-none" aria-hidden="true" />
              <div className="relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.6)] group">
                <img
                  src="https://images.unsplash.com/photo-1589901164570-f9de6556e1c1?q=80&w=1332&auto=format&fit=crop"
                  alt="Udaipur Lake Palace — a white marble palace floating on Lake Pichola"
                  className="w-full aspect-[3/4] object-cover scale-105 group-hover:scale-100 transition-transform duration-[3s] ease-out"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-royal-blue/90 via-royal-blue/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 backdrop-blur-2xl bg-white/[0.04] border-t border-white/10">
                  <span className="text-[9px] uppercase tracking-[0.4em] text-metallic-gold font-bold mb-2 block">
                    Featured Experience
                  </span>
                  <h3 className="font-serif text-2xl text-white leading-tight font-light">
                    The Lake Palace Heritage
                  </h3>
                  <span className="text-white/50 text-sm italic font-serif">— Udaipur</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-1000 ${heroLoaded ? 'opacity-100' : 'opacity-0'}`} style={delay(1200)}>
          <span className="text-[8px] uppercase tracking-[0.3em] text-white/30 font-sans">Scroll</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-metallic-gold/40 to-transparent relative overflow-hidden">
            <div className="absolute w-full h-3 bg-metallic-gold/80 animate-[scrollDot_1.5s_ease-in-out_infinite]" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          2. MARQUEE TICKER
          ═══════════════════════════════════════════ */}

      <div className="bg-metallic-gold py-4 overflow-hidden whitespace-nowrap border-y border-metallic-gold/30 relative" aria-hidden="true">
        <div className="inline-block animate-[marquee_30s_linear_infinite] text-[9px] sm:text-xs font-bold uppercase tracking-[0.4em] text-royal-blue">
          {Array(4).fill(0).map((_, i) => (
            <React.Fragment key={i}>
              <span className="mx-8 sm:mx-12">Udaipur</span><span className="opacity-30">◆</span>
              <span className="mx-8 sm:mx-12">Jaipur</span><span className="opacity-30">◆</span>
              <span className="mx-8 sm:mx-12">Jaisalmer</span><span className="opacity-30">◆</span>
              <span className="mx-8 sm:mx-12">Jodhpur</span><span className="opacity-30">◆</span>
              <span className="mx-8 sm:mx-12">Kumbhalgarh</span><span className="opacity-30">◆</span>
              <span className="mx-8 sm:mx-12">Ranakpur</span><span className="opacity-30">◆</span>
              <span className="mx-8 sm:mx-12">Nathdwara</span><span className="opacity-30">◆</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════════════
          3. DESTINATIONS WITH PRICING
          ═══════════════════════════════════════════ */}

      <section className="py-28 md:py-40 px-[6vw] md:px-[10vw] bg-ivory relative" aria-label="Destinations">
        <div className="mb-20 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8" data-aos="fade-up">
          <div className="max-w-2xl">
            <span className="section-subheading flex items-center gap-3">
              <span className="w-8 h-[1px] bg-metallic-gold/40" aria-hidden="true" />
              A World Untold
            </span>
            <h2 className="section-heading !mb-0">
              Explore the <em>Jewels</em> of Rajasthan
            </h2>
          </div>
          <p className="text-muted/80 text-sm max-w-sm leading-[1.9] font-sans tracking-wide">
            Uncover the timeless majesty of desert kingdoms and the serene beauty of the City of Lakes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {destinations.map((dest, i) => (
            <Link
              key={dest.name}
              to="/packages"
              className={`group relative overflow-hidden shadow-xl rounded-3xl hover:shadow-2xl hover:shadow-metallic-gold/10 transition-all duration-700 ${i % 2 === 1 ? 'lg:translate-y-8' : ''}`}
              data-aos="fade-up"
              data-aos-delay={i * 80}
              aria-label={`${dest.name} package starting from ${dest.price}`}
            >
              <div className="relative aspect-[3/4.2] overflow-hidden rounded-3xl">
                <img src={dest.img} alt={`${dest.name}, Rajasthan`} className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-royal-blue via-royal-blue/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                {/* Pricing Badge */}
                <div className="absolute top-4 right-4 bg-metallic-gold text-royal-blue px-3 py-1.5 font-sans font-bold text-[11px] uppercase tracking-wider shadow-lg">
                  From {dest.price}
                </div>

                {/* Duration Badge */}
                <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md border border-white/15 text-white/90 px-3 py-1.5 font-sans font-bold text-[10px] uppercase tracking-wider flex items-center gap-1.5">
                  <Clock size={10} aria-hidden="true" /> {dest.duration}
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-7">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="font-serif text-2xl md:text-3xl font-light text-white mb-2 tracking-wide">
                      {dest.name}
                    </div>
                    <div className="text-[12px] text-white/55 leading-relaxed font-sans max-h-0 group-hover:max-h-20 overflow-hidden transition-all duration-500 ease-out">
                      {dest.desc}
                    </div>
                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-metallic-gold mt-4 pt-3 border-t border-white/[0.08]">
                      Discover
                      <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-14" data-aos="fade-up">
          <Link to="/packages" className="btn-ghost">
            View All Packages <ArrowRight size={13} className="ml-1" />
          </Link>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          4. CINEMA / EXPERIENCE SECTION
          ═══════════════════════════════════════════ */}

      <section className="bg-royal-blue py-24 md:py-32 px-[6vw] md:px-[10vw] relative overflow-hidden" aria-label="Experience Rajasthan">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14 md:mb-16" data-aos="fade-up">
            <span className="section-subheading text-metallic-gold/70 justify-center flex items-center gap-3">
              <span className="w-8 h-[1px] bg-metallic-gold/30" aria-hidden="true" />
              Cinematic Preview
              <span className="w-8 h-[1px] bg-metallic-gold/30" aria-hidden="true" />
            </span>
            <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight font-light">
              Experience the <em className="italic text-metallic-gold not-italic">Majesty</em>
            </h2>
          </div>

          {/* Video Poster / Embed */}
          <div className="relative aspect-video max-w-5xl mx-auto rounded-sm overflow-hidden shadow-2xl shadow-black/40 group" data-aos="fade-up" data-aos-delay="100">
            {!showVideo ? (
              <>
                <img
                  src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1171&auto=format&fit=crop"
                  alt="Cinematic view of Rajasthan palace architecture"
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-[3s]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-royal-blue/40 group-hover:bg-royal-blue/30 transition-colors duration-500" />
                <button
                  onClick={() => setShowVideo(true)}
                  className="absolute inset-0 flex flex-col items-center justify-center gap-4 focus:outline-none focus-visible:ring-4 focus-visible:ring-metallic-gold/50"
                  aria-label="Play video showcase of SafarSathi4U experiences"
                >
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-metallic-gold/90 flex items-center justify-center shadow-2xl shadow-metallic-gold/30 group-hover:scale-110 transition-transform duration-500 animate-[whatsappPulse_2.5s_ease-in-out_infinite]">
                    <Play size={32} fill="white" strokeWidth={0} className="text-white ml-1" />
                  </div>
                  <span className="text-[11px] uppercase tracking-[0.3em] text-white/70 font-sans font-bold mt-2">
                    Watch Our Story
                  </span>
                </button>
              </>
            ) : (
              <div className="relative w-full h-full">
                <iframe
                  src="https://www.youtube.com/embed/AUNMxfQ187Y?autoplay=1&rel=0"
                  title="SafarSathi4U — Royal Rajasthan Experiences"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
                <button
                  onClick={() => setShowVideo(false)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors z-20"
                  aria-label="Close video"
                >
                  <X size={18} />
                </button>
              </div>
            )}
          </div>

          {/* Mini highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            {[
              { icon: <MapPin size={18} />, text: '21+ Destinations Covered' },
              { icon: <Award size={18} />, text: 'Rated 4.9 on Google Reviews' },
              { icon: <Users size={18} />, text: '1,000+ Happy Travelers Served' },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-center gap-3 py-4 border border-white/[0.06] rounded-4xl">
                <span className="text-metallic-gold/70" aria-hidden="true">{item.icon}</span>
                <span className="text-[11px] uppercase tracking-[0.15em] text-white/55 font-sans font-bold">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PHILOSOPHY / WHY CHOOSE US */}

      <section className="bg-royal-blue py-28 md:py-36 px-[6vw] md:px-[8vw] relative overflow-hidden border-t border-white/[0.03]" aria-label="Why choose SafarSathi4U">
        <div className="absolute right-[-2vw] top-1/2 -translate-y-1/2 font-serif text-[clamp(8rem,18vw,16rem)] font-bold text-white/[0.015] select-none leading-none pointer-events-none" aria-hidden="true">
          RAJASTHAN
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div data-aos="fade-right">
            <span className="section-subheading text-metallic-gold/70 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-metallic-gold/30" aria-hidden="true" />
              Why SafarSathi4U
            </span>
            <h2 className="text-4xl md:text-[3.4rem] font-serif text-white leading-[1.15] mb-0 font-light">
              Crafted with{' '}
              <em className="italic text-metallic-gold not-italic">Artisanal</em> Soul
            </h2>
            <p className="text-white/50 leading-[1.9] font-sans font-light mt-8 text-[15px] tracking-wide max-w-lg">
              SafarSathi4U is more than a travel concierge — we are your Rajasthani hosts. Every itinerary is hand-crafted, every guide is local, and every moment is designed to immerse you in the soul of this royal land.
            </p>
            <div className="flex flex-wrap items-center gap-6 mt-10">
              <Link
                to="/about"
                className="inline-flex items-center gap-3 text-metallic-gold font-bold uppercase tracking-[0.2em] text-[11px] border-b border-metallic-gold/25 pb-2 hover:gap-5 hover:border-metallic-gold/60 transition-all duration-500 group"
              >
                The SafarSathi Story
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://wa.me/919601258617?text=Hi!%20I%E2%80%99d%20like%20to%20know%20more%20about%20SafarSathi4U."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/50 font-bold uppercase tracking-[0.18em] text-[11px] hover:text-metallic-gold transition-colors duration-300"
              >
                <Phone size={13} />
                Chat with Us
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-5" data-aos="fade-left" data-aos-delay="150">
            {features.map((feat) => (
              <div
                key={feat.title}
                className="bg-white/[0.03] border border-white/[0.06] p-7 md:p-8 rounded-4xl hover:bg-metallic-gold/[0.05] hover:border-metallic-gold/20 transition-all duration-600 group relative overflow-hidden"
              >
                <div className="absolute -inset-8 bg-metallic-gold/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" aria-hidden="true" />
                <div className="relative z-10">
                  <div className="text-metallic-gold/80 mb-5 group-hover:text-metallic-gold group-hover:scale-110 transition-all duration-500 origin-left" aria-hidden="true">
                    {feat.icon}
                  </div>
                  <h4 className="font-serif text-lg md:text-xl text-white mb-2 font-light tracking-wide">
                    {feat.title}
                  </h4>
                  <p className="text-[12px] text-white/40 leading-[1.8] font-sans tracking-wider group-hover:text-white/55 transition-colors duration-500">
                    {feat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          6. IMPACT STATS (Animated Counters)
          ═══════════════════════════════════════════ */}

      <section className="bg-ivory py-24 md:py-28 px-[6vw] md:px-[10vw]" aria-label="Our impact in numbers" data-aos="fade-up">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-[1px] bg-metallic-gold/10 border border-metallic-gold/[0.08] shadow-xl">
          <AnimatedCounter end={21} label="Kingdoms Explored" />
          <AnimatedCounter end={18} suffix="+" label="Curated Collections" />
          <AnimatedCounter end={100} suffix="+" label="Royal Tours Completed" />
          <AnimatedCounter end={1000} suffix="+" label="Happy Travelers" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          7. TESTIMONIALS
          ═══════════════════════════════════════════ */}

      <section className="py-24 md:py-32 bg-silk-white relative overflow-hidden" aria-label="Client testimonials">
        <div className="px-[6vw] md:px-[10vw] mb-14 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6" data-aos="fade-up">
          <div>
            <span className="section-subheading flex items-center gap-3">
              <span className="w-8 h-[1px] bg-metallic-gold/40" aria-hidden="true" />
              Client Chronicles
            </span>
            <h2 className="section-heading !mb-0">
              Voices of <em>Our Guests</em>
            </h2>
          </div>
          <a
            href="#get-itinerary"
            className="btn-primary mb-1 shrink-0"
          >
            Start Your Story
          </a>
        </div>

        <div className="mb-6" data-aos="fade-up" data-aos-delay="100">
          <TestimonialRow items={testimonials} direction="left" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          9. FAQ
          ═══════════════════════════════════════════ */}

      <section className="py-24 md:py-32 px-[6vw] md:px-[10vw] bg-silk-white" aria-label="Frequently asked questions">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14 md:mb-16" data-aos="fade-up">
            <span className="section-subheading justify-center flex items-center gap-3">
              <span className="w-8 h-[1px] bg-metallic-gold/40" aria-hidden="true" />
              Common Questions
              <span className="w-8 h-[1px] bg-metallic-gold/40" aria-hidden="true" />
            </span>
            <h2 className="section-heading !mb-0">
              Everything You <em>Need to Know</em>
            </h2>
          </div>

          <div className="bg-white border border-metallic-gold/[0.06] shadow-xl p-6 md:p-10" data-aos="fade-up" data-aos-delay="100">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                q={faq.q}
                a={faq.a}
                isOpen={openFAQ === i}
                onToggle={() => setOpenFAQ(openFAQ === i ? null : i)}
              />
            ))}
          </div>

          <div className="text-center mt-10" data-aos="fade-up">
            <p className="text-[13px] text-muted/60 font-sans mb-4">Still have questions?</p>
            <a
              href="https://wa.me/919601258617?text=Hi!%20I%20have%20a%20question%20about%20SafarSathi4U."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <MessageCircle size={14} /> Ask Us on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          9. LEAD CAPTURE FORM
          ═══════════════════════════════════════════ */}

      <section id="get-itinerary" className="py-28 md:py-36 px-[6vw] md:px-[10vw] bg-ivory relative scroll-mt-20" aria-label="Get your free itinerary">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — Copy */}
          <div data-aos="fade-right">
            <span className="section-subheading flex items-center gap-3">
              <span className="w-8 h-[1px] bg-metallic-gold/40" aria-hidden="true" />
              Free & Personalized
            </span>
            <h2 className="section-heading !mb-6">
              Get Your <em>Royal Itinerary</em>
            </h2>
            <p className="text-muted/80 text-[15px] leading-[1.9] font-sans max-w-md mb-10">
              Tell us your preferences and our travel concierge will craft a bespoke, day-by-day itinerary — delivered to you via WhatsApp in under 24 hours. Completely free.
            </p>

            <div className="space-y-5">
              {[
                { icon: <CheckCircle size={16} />, text: '100% free — no hidden charges or obligations' },
                { icon: <CheckCircle size={16} />, text: 'Personalized to your dates, interests & budget' },
                { icon: <CheckCircle size={16} />, text: 'Delivered via WhatsApp in under 24 hours' },
                { icon: <CheckCircle size={16} />, text: 'Includes hotel options, activities & cost breakdown' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-metallic-gold" aria-hidden="true">{item.icon}</span>
                  <span className="text-[13px] text-muted/80 font-sans">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div data-aos="fade-left" data-aos-delay="100">
            {!formSubmitted ? (
              <form
                onSubmit={handleFormSubmit}
                className="bg-white border border-metallic-gold/[0.08] shadow-2xl shadow-royal-blue/5 p-8 md:p-10"
              >
                <h3 className="font-serif text-2xl text-royal-blue mb-8 font-light">Plan Your Journey</h3>

                <div className="space-y-5">
                  <div>
                    <label htmlFor="form-name" className="text-[10px] uppercase tracking-[0.25em] text-muted/70 font-sans font-bold mb-2 block">
                      Your Name *
                    </label>
                    <input
                      id="form-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full border border-royal-blue/10 px-4 py-3 text-[14px] font-sans text-royal-blue focus:border-metallic-gold focus:ring-1 focus:ring-metallic-gold/20 outline-none transition-all duration-300 bg-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="form-phone" className="text-[10px] uppercase tracking-[0.25em] text-muted/70 font-sans font-bold mb-2 block">
                      WhatsApp Number *
                    </label>
                    <div className="flex">
                      <span className="border border-r-0 border-royal-blue/10 px-3 py-3 text-[13px] text-muted/60 font-sans bg-silk-white flex items-center">+91</span>
                      <input
                        id="form-phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full border border-royal-blue/10 px-4 py-3 text-[14px] font-sans text-royal-blue focus:border-metallic-gold focus:ring-1 focus:ring-metallic-gold/20 outline-none transition-all duration-300 bg-transparent"
                        placeholder="9601258617"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="form-destination" className="text-[10px] uppercase tracking-[0.25em] text-muted/70 font-sans font-bold mb-2 block">
                        Destination
                      </label>
                      <select
                        id="form-destination"
                        value={formData.destination}
                        onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                        className="w-full border border-royal-blue/10 px-4 py-3 text-[14px] font-sans text-royal-blue focus:border-metallic-gold outline-none transition-all duration-300 bg-transparent appearance-none cursor-pointer"
                      >
                        <option>Udaipur</option>
                        <option>Jaipur</option>
                        <option>Jaisalmer</option>
                        <option>Jodhpur</option>
                        <option>Golden Triangle</option>
                        <option>Full Rajasthan</option>
                        <option>Custom / Not Sure</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="form-group" className="text-[10px] uppercase tracking-[0.25em] text-muted/70 font-sans font-bold mb-2 block">
                        Group Size
                      </label>
                      <select
                        id="form-group"
                        value={formData.groupSize}
                        onChange={(e) => setFormData({ ...formData, groupSize: e.target.value })}
                        className="w-full border border-royal-blue/10 px-4 py-3 text-[14px] font-sans text-royal-blue focus:border-metallic-gold outline-none transition-all duration-300 bg-transparent appearance-none cursor-pointer"
                      >
                        <option value="1">Solo (1)</option>
                        <option value="2">Couple (2)</option>
                        <option value="3-4">Small Group (3–4)</option>
                        <option value="5-8">Group (5–8)</option>
                        <option value="8+">Large Group (8+)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="form-month" className="text-[10px] uppercase tracking-[0.25em] text-muted/70 font-sans font-bold mb-2 block">
                      Preferred Travel Month
                    </label>
                    <input
                      id="form-month"
                      type="month"
                      value={formData.month}
                      onChange={(e) => setFormData({ ...formData, month: e.target.value })}
                      className="w-full border border-royal-blue/10 px-4 py-3 text-[14px] font-sans text-royal-blue focus:border-metallic-gold outline-none transition-all duration-300 bg-transparent"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full mt-8 group"
                >
                  <Send size={15} className="group-hover:translate-x-0.5 transition-transform" />
                  Get Free Itinerary via WhatsApp
                </button>

                <p className="text-[11px] text-muted/50 text-center mt-4 font-sans flex items-center justify-center gap-1.5">
                  <Shield size={11} aria-hidden="true" /> We respect your privacy. No spam, ever.
                </p>
              </form>
            ) : (
              <div className="bg-white border border-metallic-gold/[0.08] shadow-2xl shadow-royal-blue/5 p-10 md:p-14 text-center">
                <div className="w-16 h-16 rounded-full bg-metallic-gold/10 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={32} className="text-metallic-gold" />
                </div>
                <h3 className="font-serif text-2xl text-royal-blue mb-3 font-light">Thank You!</h3>
                <p className="text-[14px] text-muted/70 font-sans leading-relaxed max-w-sm mx-auto mb-6">
                  Your itinerary request has been sent to our WhatsApp. Our concierge will reach out within 2 hours.
                </p>
                <p className="text-[12px] text-muted/50 font-sans">
                  Didn't see the WhatsApp window?{' '}
                  <a
                    href="https://wa.me/919601258617"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-metallic-gold underline"
                  >
                    Click here to message us directly
                  </a>
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
