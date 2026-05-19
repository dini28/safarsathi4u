import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, MessageCircle, ShieldCheck, Compass, Map, Coffee, Wifi, Car, CheckCircle } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AnimatedCounter from '../components/AnimatedCounter';

const HotelBooking = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 50 });
    window.scrollTo(0, 0);
  }, []);

  const hotels = [
    {
      name: 'Lake Palace View',
      price: '₹5,999/night',
      img: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=85',
      features: ['Lake Frontage', 'Traditional Décor', 'Breakfast Included'],
      category: 'Heritage',
    },
    {
      name: 'Heritage Haveli',
      price: '₹3,499/night',
      img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=85',
      features: ['Central Location', 'Rooftop Dining', 'Free WiFi'],
      category: 'Boutique',
    },
    {
      name: 'Luxury Resort',
      price: '₹8,999/night',
      img: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=85',
      features: ['Swimming Pool', 'Spa Services', 'Airport Transfer'],
      category: 'Elite',
    },
    {
      name: 'Desert Camp',
      price: '₹6,499/night',
      img: 'https://images.unsplash.com/photo-1607922276202-5007ffe552ca?w=800&q=85',
      features: ['Luxury Tents', 'Starlit Dining', 'Folk Performances'],
      category: 'Adventure',
    },
    {
      name: 'Fort-View Retreat',
      price: '₹4,999/night',
      img: 'https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=800&q=85',
      features: ['Fort Panorama', 'Heritage Pool', 'Authentic Cuisine'],
      category: 'Heritage',
    },
    {
      name: 'Royal Hilltop Villa',
      price: '₹11,999/night',
      img: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=85',
      features: ['Private Villa', 'Butler Service', 'Infinity Pool'],
      category: 'Elite',
    },
  ];

  const whyUs = [
    {
      icon: ShieldCheck,
      title: 'Personally Vetted',
      desc: 'Every property is personally inspected by our team for heritage character, cleanliness, and authentic hospitality.',
    },
    {
      icon: Map,
      title: 'Prime Locations',
      desc: 'All stays are within reach of major landmarks — no long commutes, just seamless immersion in royal Rajasthan.',
    },
    {
      icon: Compass,
      title: 'Local Insider Access',
      desc: "Our hotel partners open exclusive experiences: private rooftop sunsets, chef's table dinners, and guided heritage walks.",
    },
    {
      icon: Car,
      title: 'Seamless Transfers',
      desc: 'Airport pick-up, inter-hotel transfers, and 24/7 concierge are included with every booking arranged through us.',
    },
  ];

  const amenityIcons = [
    { icon: Coffee, label: 'Breakfast' },
    { icon: Wifi, label: 'High-Speed WiFi' },
    { icon: Car, label: 'Transfers' },
    { icon: Star, label: 'Heritage Experience' },
    { icon: CheckCircle, label: 'Vetted Properties' },
    { icon: ShieldCheck, label: '24/7 Support' },
  ];

  return (
    <div className="bg-silk-white overflow-hidden">

      {/* ─── Hero Section ─── */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1590766940554-634a7ed41450?w=1920&q=85"
            alt="Royal Rajasthan Heritage Stay"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-royal-blue/75" />
          <div className="absolute inset-0 bg-gradient-to-b from-royal-blue/50 via-transparent to-royal-blue/95" />
          <div className="absolute inset-0 bg-gradient-to-r from-royal-blue/85 via-royal-blue/30 to-transparent" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl" data-aos="fade-up">
          <div className="inline-flex items-center gap-4 text-[10px] uppercase tracking-[0.45em] text-metallic-gold mb-8">
            <span className="w-12 h-[1px] bg-metallic-gold/40"></span>
            Sovereign Stays
            <span className="w-12 h-[1px] bg-metallic-gold/40"></span>
          </div>
          <h1 className="font-serif text-[clamp(2.5rem,7vw,5rem)] font-light leading-[1.05] text-white mb-8 tracking-tight">
            Where <em className="italic text-metallic-gold not-italic font-normal">Royalty</em> Rests
          </h1>
          <p className="text-white/60 text-lg md:text-xl font-sans font-light tracking-wide max-w-2xl mx-auto border-t border-white/15 pt-8 leading-relaxed">
            Handpicked havelis, palatial resorts, and desert camps — each property chosen to deepen your experience of Rajasthan's timeless soul.
          </p>
        </div>
      </section>

      {/* ─── Stats Bar ─── */}
      <section className="bg-royal-blue border-y border-metallic-gold/10" data-aos="fade-up">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 divide-x divide-metallic-gold/[0.08]">
          {[
            { end: 50, suffix: '+', label: 'Curated Properties' },
            { end: 6, suffix: '', label: 'Destinations' },
            { end: 1000, suffix: '+', label: 'Nights Booked' },
            { end: 100, suffix: '%', label: 'Verified & Vetted' },
          ].map((stat, i) => (
            <div key={i} className="group py-12 md:py-16 px-6 text-center hover:bg-white/[0.03] transition-all duration-500 cursor-default">
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

      {/* ─── Hotel Cards ─── */}
      <main className="py-28 md:py-40 px-[6vw] bg-ivory border-b border-metallic-gold/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8" data-aos="fade-up">
            <div>
              <span className="section-subheading flex items-center gap-3">
                <span className="w-8 h-[1px] bg-metallic-gold/40" />
                Curated Accommodations
              </span>
              <h2 className="section-heading">Palatial <em>Retreats</em></h2>
            </div>
            <p className="text-muted/70 text-[15px] font-sans font-light leading-[1.9] max-w-sm mb-8">
              From lake-front havelis to star-lit desert camps — every property is a story in itself.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hotels.map((hotel, i) => (
              <div
                key={i}
                className="bg-white border border-metallic-gold/[0.08] group rounded-sm overflow-hidden hover:shadow-2xl hover:shadow-metallic-gold/[0.06] transition-all duration-500"
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                <div className="h-72 overflow-hidden relative">
                  <img src={hotel.img} alt={hotel.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-royal-blue/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-5 left-5 bg-royal-blue/80 text-metallic-gold text-[9px] uppercase tracking-[0.25em] font-bold px-3 py-1.5 border border-metallic-gold/20">
                    {hotel.category}
                  </div>
                  <div className="absolute top-5 right-5 bg-metallic-gold text-royal-blue font-bold px-4 py-2 text-sm rounded-sm shadow-lg">
                    {hotel.price}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-serif text-2xl text-royal-blue mb-2 tracking-wide">{hotel.name}</h3>
                  <div className="flex gap-0.5 mb-5">
                    {Array(5).fill(0).map((_, si) => (
                      <Star key={si} size={12} fill="#D4AF37" strokeWidth={0} className="text-metallic-gold" />
                    ))}
                  </div>
                  <ul className="space-y-3 mb-8">
                    {hotel.features.map((feat) => (
                      <li key={feat} className="text-xs text-muted flex items-center gap-3 font-sans">
                        <span className="text-metallic-gold text-sm">✦</span> {feat}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`https://wa.me/919601258617?text=Hi, I am interested in booking ${hotel.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost w-full"
                  >
                    <MessageCircle size={14} className="text-metallic-gold" />
                    Inquire Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* ─── Why Book With Us ─── */}
      <section className="py-28 md:py-40 px-[6vw] bg-royal-blue relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.015] select-none uppercase font-serif font-bold tracking-widest text-[clamp(8rem,18vw,20rem)] text-white overflow-hidden" aria-hidden="true">
          STAYS
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20" data-aos="fade-up">
            <span className="text-[10px] uppercase tracking-[0.3em] text-metallic-gold/70 font-bold font-sans mb-6 flex justify-center items-center gap-3">
              <span className="w-8 h-[1px] bg-metallic-gold/30" />
              The SafarSathi Difference
              <span className="w-8 h-[1px] bg-metallic-gold/30" />
            </span>
            <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] font-light text-white leading-tight">
              Why Book Through <em className="italic text-metallic-gold not-italic">Us</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item, i) => (
              <div
                key={i}
                className="p-8 md:p-10 border border-white/[0.05] bg-white/[0.015] hover:bg-white/[0.03] ss-gold-border-hover relative group flex flex-col items-start rounded-sm"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-metallic-gold/40 transition-colors duration-500" />
                <div className="text-metallic-gold/80 mb-6 group-hover:text-metallic-gold group-hover:scale-110 transition-all duration-500">
                  <item.icon size={26} strokeWidth={1.3} />
                </div>
                <h3 className="text-white mb-4 tracking-wide font-serif text-xl font-light">{item.title}</h3>
                <p className="text-white/40 text-[13px] font-sans leading-[1.8] group-hover:text-white/60 transition-colors">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Standard Amenities Strip ─── */}
      <section className="py-16 px-[6vw] bg-silk-white border-y border-metallic-gold/10" data-aos="fade-up">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-[10px] uppercase tracking-[0.35em] text-muted/60 font-bold font-sans mb-10">Standard Inclusions Across All Properties</p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6 text-center">
            {amenityIcons.map((a, i) => (
              <div key={i} className="flex flex-col items-center gap-3 group cursor-default">
                <div className="w-12 h-12 flex items-center justify-center border border-metallic-gold/15 bg-white group-hover:border-metallic-gold/40 group-hover:bg-metallic-gold/5 transition-all duration-300">
                  <a.icon size={18} strokeWidth={1.3} className="text-metallic-gold/70 group-hover:text-metallic-gold transition-colors" />
                </div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted/70 font-sans font-bold">{a.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Final CTA Section ─── */}
      <section className="relative py-32 md:py-44 px-[6vw] md:px-[10vw] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1590766940554-634a7ed41450?w=1920&q=80"
            alt="Royal Rajasthan heritage hotel at dusk"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-royal-blue/88" />
          <div className="absolute inset-0 bg-gradient-to-r from-royal-blue/95 via-royal-blue/85 to-royal-blue/75" />
        </div>

        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/az-subtle.png')]" />

        <div className="relative z-10 max-w-4xl mx-auto text-center" data-aos="fade-up">
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="w-16 h-[1px] bg-metallic-gold/30" />
            <span className="text-[10px] uppercase tracking-[0.5em] text-metallic-gold/60 font-sans font-bold">
              Custom Requests
            </span>
            <div className="w-16 h-[1px] bg-metallic-gold/30" />
          </div>

          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] font-light tracking-tight">
            Need Something <em className="italic text-metallic-gold not-italic">Special?</em>
          </h2>

          <p className="text-white/40 text-lg font-sans font-light max-w-xl mx-auto mt-8 leading-relaxed">
            Looking for a private villa, a honeymoon suite, or a heritage camp for your group?
            Our concierge will hand-pick the perfect property for your requirements.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-5 mt-14">
            <Link
              to="/contact"
              className="btn-primary group"
            >
              <span className="relative z-10 flex items-center gap-3">
                Talk to the Concierge <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <a
              href="https://wa.me/919601258617?text=Hi, I need help finding a hotel in Rajasthan"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost-light"
            >
              <MessageCircle size={15} /> WhatsApp Us
            </a>
          </div>

          <div className="mt-16 pt-8 border-t border-white/[0.06] flex flex-wrap items-center justify-center gap-8">
            {[
              { icon: ShieldCheck, text: 'Personally Vetted' },
              { icon: CheckCircle, text: 'Best Price Guarantee' },
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
  )
}


export default HotelBooking;
