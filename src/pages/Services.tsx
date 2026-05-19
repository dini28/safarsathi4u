import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Map, Car, Hotel, Users, Compass, ArrowRight, CheckCircle2, MessageCircle, Star, Award } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AnimatedCounter from '../components/AnimatedCounter';

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 50 });
    window.scrollTo(0, 0);
  }, []);

  const mainServices = [
    {
      title: 'Private Guided Tours',
      icon: Map,
      tagline: 'Local Storytellers',
      desc: 'Expert local storytellers who bring the history of palaces and forts to life, beyond what you\'ll find in books. Our guides are born and raised in Mewar, offering an insider\'s perspective on every legendary stone.',
      img: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=1200&q=85',
      highlights: ['Authentic Mewari Insights', 'Hidden Gem Access', 'Royal Narrative Focus']
    },
    {
      title: 'Luxury Transport',
      icon: Car,
      tagline: 'Royal Comfort',
      desc: 'Premium fleet of AC sedans, vintage jeeps, and luxury coaches for a comfortable journey across Rajasthan. Whether it\'s a desert safari or a smooth ride to the airport, we ensure every mile is royal.',
      img: 'https://images.unsplash.com/photo-1677787798983-32af28bc6b22?w=1200&q=85',
      highlights: ['Professional Chauffeurs', 'WiFi Enabled', 'Complimentary Refreshments']
    },
    {
      title: 'Heritage Accommodations',
      icon: Hotel,
      tagline: 'Palatial Stays',
      desc: 'Curated selection of boutique havelis and heritage resorts that offer a true taste of Rajasthani royalty. We partner only with properties that maintain the soul of Mewar architecture while offering modern luxury.',
      img: 'https://images.unsplash.com/photo-1590766940554-634a7ed41450?w=1200&q=85',
      highlights: ['Lake-view Suites', 'Authentic Cuisine', 'Heritage Architecture']
    }
  ];

  const secondaryServices = [
    {
      title: 'Event Management',
      icon: Users,
      desc: 'Planning destination weddings, royal gala dinners, and corporate retreats in Udaipur\'s most iconic venues.'
    },
    {
      title: 'Adventure Activities',
      icon: Compass,
      desc: 'Ziplining over Kumbhalgarh, camel safaris in Jaisalmer, and trekking in the Aravali hills.'
    },
    {
      title: 'Verified Safety',
      icon: ShieldCheck,
      desc: 'Your safety is our priority. Verified drivers, sanitized vehicles, and 24/7 on-ground assistance.'
    }
  ];

  return (
    <div className="bg-silk-white overflow-hidden">
      {/* ─── Hero Section ─── */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1715405155707-adfad05f5543?w=1920&q=85"
            alt="Udaipur Lake Palace"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-royal-blue/75" />
          <div className="absolute inset-0 bg-gradient-to-b from-royal-blue/50 via-transparent to-royal-blue/95" />
          <div className="absolute inset-0 bg-gradient-to-r from-royal-blue/85 via-royal-blue/30 to-transparent" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl" data-aos="zoom-out">
          <div className="inline-flex items-center gap-4 text-[10px] uppercase tracking-[0.45em] text-metallic-gold mb-8">
            <span className="w-12 h-[1px] bg-metallic-gold/40"></span>
            Elevated Experiences
            <span className="w-12 h-[1px] bg-metallic-gold/40"></span>
          </div>
          <h1 className="font-serif text-[clamp(2.5rem,8vw,5.5rem)] font-light leading-[1.05] text-white mb-8 tracking-tight">
            Bespeak <em className="italic text-metallic-gold not-italic font-normal">Hospitality</em> <br />
            Redefined
          </h1>
          <p className="text-white/60 text-lg md:text-xl font-sans font-light tracking-wide max-w-2xl mx-auto border-t border-white/15 pt-8 leading-relaxed">
            From the moment you arrive in the Royal Territory, every detail is managed with local expertise, precision, and soul.
          </p>
        </div>
      </section>

      {/* ─── Stats Bar ─── */}
      <section className="bg-royal-blue border-y border-metallic-gold/10" data-aos="fade-up">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 divide-x divide-metallic-gold/[0.08]">
          {[
            { end: 500, suffix: '+', label: 'Happy Travelers', icon: Users },
            { end: 21, suffix: '+', label: 'Destinations Covered', icon: Map },
            { end: 4, suffix: '.9★', label: 'Avg. Guest Rating', icon: Star },
            { end: 100, suffix: '%', label: 'Satisfaction Rate', icon: Award },
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

      {/* ─── Main Services Showcase ─── */}
      <main className="py-32 md:py-44 px-[6vw] bg-ivory border-y border-metallic-gold/10">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-40">
            {mainServices.map((service, i) => (
              <div
                key={i}
                className={`flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 lg:gap-24 items-center`}
              >
                <div className="w-full lg:w-1/2 group relative" data-aos={i % 2 === 1 ? "fade-left" : "fade-right"}>
                  <div className="absolute -inset-5 md:-inset-7 border border-metallic-gold/10 translate-x-5 translate-y-5 -z-1 transition-all duration-700 group-hover:translate-x-0 group-hover:translate-y-0 pointer-events-none"></div>
                  <div className="relative aspect-[4/5] lg:aspect-[3.4] overflow-hidden rounded-sm shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)]">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-[2.5s] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-royal-blue/60 via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-1000"></div>

                    {/* Icon Overlay Badge */}
                    <div className="absolute top-8 left-8 w-16 h-16 bg-royal-blue text-metallic-gold border border-white/5 flex items-center justify-center rounded-sm shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:bg-metallic-gold group-hover:text-royal-blue">
                      <service.icon size={28} strokeWidth={1.5} />
                    </div>
                  </div>
                </div>

                <div className="w-full lg:w-1/2" data-aos={i % 2 === 1 ? "fade-right" : "fade-left"}>
                  <div className="inline-block py-1.5 px-4 rounded-full bg-metallic-gold/10 text-metallic-gold text-[10px] uppercase tracking-[0.35em] font-bold mb-8">
                    {service.tagline}
                  </div>
                  <h2 className="section-heading mb-8">
                    {service.title.split(' ').slice(0, -1).join(' ')} <em className="italic text-metallic-gold not-italic font-normal">{service.title.split(' ').pop()}</em>
                  </h2>
                  <p className="text-muted/80 text-[15px] md:text-lg leading-relaxed font-sans font-light mb-12 tracking-wide">
                    {service.desc}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-14 border-t border-royal-blue/5 pt-12">
                    {service.highlights.map((h, idx) => (
                      <div key={idx} className="flex items-center gap-4 text-royal-blue/80 text-[13px] md:text-sm font-sans font-medium tracking-wide">
                        <div className="w-5 h-5 rounded-full bg-metallic-gold/10 flex items-center justify-center">
                          <CheckCircle2 size={12} className="text-metallic-gold" />
                        </div>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  <Link to="/contact" className="btn-primary">
                    Inquire Details <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* ─── Additional Expertise ─── */}
          <div className="mt-64" data-aos="fade-up">
            <div className="text-center mb-28">
              <span className="section-subheading justify-center flex items-center gap-3">
                <span className="w-8 h-[1px] bg-metallic-gold/30" />
                Specialized Expertise
                <span className="w-8 h-[1px] bg-metallic-gold/30" />
              </span>
              <h2 className="text-4xl md:text-[3.5rem] font-serif text-royal-blue leading-tight font-light mt-4">
                More than just <em className="italic text-metallic-gold not-italic">Safars</em>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {secondaryServices.map((service, i) => (
                <div
                  key={i}
                  className="group bg-white p-14 border border-royal-blue/5 shadow-2xl transition-all duration-700 hover:-translate-y-2 relative overflow-hidden"
                >
                  <div className="absolute -right-10 -top-10 w-32 h-32 bg-metallic-gold/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />

                  <div className="w-14 h-14 bg-royal-blue text-metallic-gold flex items-center justify-center rounded-sm mb-10 group-hover:bg-metallic-gold group-hover:text-royal-blue transition-all duration-500 shadow-xl group-hover:rotate-[360deg]">
                    <service.icon size={26} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-2xl mb-5 text-royal-blue tracking-wide group-hover:text-metallic-gold transition-colors">{service.title}</h3>
                  <p className="text-muted/70 text-[13px] leading-relaxed font-sans font-light mb-12">
                    {service.desc}
                  </p>
                  <Link
                    to="/contact"
                    className="btn-text"
                  >
                    Curate Yours <ArrowRight size={14} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* ─── Final Call to Action ─── */}
      <section className="relative py-28 md:py-44 px-[6vw] md:px-[10vw] overflow-hidden">
        {/* Background Overlay Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1599661046289-e31897846e41?w=1920&q=85"
            alt="Amer Fort Evening"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-royal-blue/85" />
          <div className="absolute inset-0 bg-gradient-to-r from-royal-blue/95 via-royal-blue/80 to-royal-blue/70" />
        </div>

        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/az-subtle.png')]" />

        <div className="relative z-10 max-w-5xl mx-auto text-center" data-aos="fade-up">
          <span className="section-subheading text-metallic-gold/60 justify-center flex items-center gap-3">
            <span className="w-8 h-[1px] bg-metallic-gold/30" />
            The Concierge Awaits
            <span className="w-8 h-[1px] bg-metallic-gold/30" />
          </span>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] font-light mt-6 tracking-tight">
            Ready for your<br />
            <em className="italic text-metallic-gold not-italic">Royal Narrative?</em>
          </h2>
          <p className="text-white/40 font-sans font-light text-sm md:text-base max-w-xl mx-auto mt-10 leading-relaxed tracking-wide">
            Our travel architects are standing by to craft a journey that feels less like a tour and more like an inheritance.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 mt-14">
            <Link
              to="/contact"
              className="btn-primary !px-14 shadow-2xl"
            >
              Consult an Expert
              <ArrowRight size={15} />
            </Link>
            <a
              href="https://wa.me/919601258617"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost-light flex items-center gap-3 !px-10"
            >
              <MessageCircle size={18} className="text-metallic-gold" />
              WhatsApp Concierge
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
