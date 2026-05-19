import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Instagram, Facebook, Youtube, Phone, Mail, MapPin,
  ArrowRight, ChevronUp, Send, Star, Compass, Clock, Shield
} from 'lucide-react';

/* ─────────────────────────────────────────────────────────────
   Rajasthani-inspired mandala silhouette (pure SVG, no image)
───────────────────────────────────────────────────────────── */
const MandalaSilhouette = () => (
  <svg
    viewBox="0 0 400 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute pointer-events-none select-none"
    style={{
      right: '-6%',
      bottom: '-10%',
      width: 'clamp(280px, 38vw, 520px)',
      opacity: 0.028,
    }}
    aria-hidden="true"
  >
    {/* Outer ring */}
    <circle cx="200" cy="200" r="195" stroke="#D4AF37" strokeWidth="0.6" />
    <circle cx="200" cy="200" r="175" stroke="#D4AF37" strokeWidth="0.3" />
    {/* 16-petal lotus */}
    {Array.from({ length: 16 }).map((_, i) => {
      const angle = (i * 360) / 16;
      const rad = (angle * Math.PI) / 180;
      const x1 = 200 + Math.cos(rad) * 80;
      const y1 = 200 + Math.sin(rad) * 80;
      const x2 = 200 + Math.cos(rad + 0.2) * 155;
      const y2 = 200 + Math.sin(rad + 0.2) * 155;
      const x3 = 200 + Math.cos(rad - 0.2) * 155;
      const y3 = 200 + Math.sin(rad - 0.2) * 155;
      return (
        <path
          key={i}
          d={`M200 200 Q${x1} ${y1} ${x2} ${y2} Q${200 + Math.cos(rad) * 170} ${200 + Math.sin(rad) * 170} ${x3} ${y3} Z`}
          stroke="#D4AF37"
          strokeWidth="0.5"
          fill="none"
        />
      );
    })}
    {/* 8 inner petals */}
    {Array.from({ length: 8 }).map((_, i) => {
      const angle = (i * 360) / 8 + 22.5;
      const rad = (angle * Math.PI) / 180;
      const x1 = 200 + Math.cos(rad) * 50;
      const y1 = 200 + Math.sin(rad) * 50;
      const x2 = 200 + Math.cos(rad + 0.35) * 100;
      const y2 = 200 + Math.sin(rad + 0.35) * 100;
      const x3 = 200 + Math.cos(rad - 0.35) * 100;
      const y3 = 200 + Math.sin(rad - 0.35) * 100;
      return (
        <path
          key={i}
          d={`M200 200 Q${x1} ${y1} ${x2} ${y2} Q${200 + Math.cos(rad) * 110} ${200 + Math.sin(rad) * 110} ${x3} ${y3} Z`}
          stroke="#D4AF37"
          strokeWidth="0.4"
          fill="none"
        />
      );
    })}
    {/* Diamond grid rings */}
    {[60, 130].map((r, ri) => (
      Array.from({ length: 32 }).map((_, i) => {
        const a1 = ((i * 360) / 32 * Math.PI) / 180;
        const a2 = (((i + 1) * 360) / 32 * Math.PI) / 180;
        return (
          <line
            key={`${ri}-${i}`}
            x1={200 + Math.cos(a1) * r}
            y1={200 + Math.sin(a1) * r}
            x2={200 + Math.cos(a2) * r}
            y2={200 + Math.sin(a2) * r}
            stroke="#D4AF37"
            strokeWidth="0.3"
          />
        );
      })
    ))}
    {/* Centre jewel */}
    <circle cx="200" cy="200" r="18" stroke="#D4AF37" strokeWidth="0.8" />
    <circle cx="200" cy="200" r="9" stroke="#D4AF37" strokeWidth="0.5" />
    {Array.from({ length: 8 }).map((_, i) => {
      const a = ((i * 45) * Math.PI) / 180;
      return (
        <line
          key={i}
          x1={200 + Math.cos(a) * 9}
          y1={200 + Math.sin(a) * 9}
          x2={200 + Math.cos(a) * 18}
          y2={200 + Math.sin(a) * 18}
          stroke="#D4AF37"
          strokeWidth="0.5"
        />
      );
    })}
  </svg>
);

/* ─────────────────────────────────────────────────────────────
   Ornamental rule
───────────────────────────────────────────────────────────── */
const GoldRule = ({ className = '' }: { className?: string }) => (
  <div className={`flex items-center gap-4 ${className}`}>
    <div className="flex-1 h-[0.5px] bg-gradient-to-r from-transparent to-metallic-gold/25" />
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <rect x="5" y="0" width="4" height="4" transform="rotate(45 7 7)" fill="#D4AF37" fillOpacity="0.5" />
      <rect x="3" y="0" width="2" height="2" transform="rotate(45 7 7) translate(-4, 0)" fill="#D4AF37" fillOpacity="0.25" />
      <rect x="3" y="0" width="2" height="2" transform="rotate(45 7 7) translate(4, 0)" fill="#D4AF37" fillOpacity="0.25" />
    </svg>
    <div className="flex-1 h-[0.5px] bg-gradient-to-l from-transparent to-metallic-gold/25" />
  </div>
);

/* ─────────────────────────────────────────────────────────────
   Main Footer
───────────────────────────────────────────────────────────── */
const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    const msg = `📬 *New Newsletter Subscriber — SafarSathi4U*\n\n📧 Email: ${email}\n\n_Subscribed from safarsathi4u.com_`;
    window.open(`https://wa.me/919601258617?text=${encodeURIComponent(msg)}`, '_blank');
    setSubscribed(true);
  };

  const quickLinks = [
    { label: 'Home', to: '/' },
    { label: 'About Us', to: '/aboutus' },
    { label: 'Services', to: '/services' },
    { label: 'Packages', to: '/packages' },
    { label: 'Adventure', to: '/adventure' },
    { label: 'Contact', to: '/contact' },
  ];

  const experiences = [
    { label: 'Heritage Walk Tours', to: '/services' },
    { label: 'Desert Safari', to: '/adventure' },
    { label: 'Palace Visits', to: '/packages' },
    { label: 'Lake Excursions', to: '/packages' },
    { label: 'Custom Itineraries', to: '/contact' },
  ];

  const socials = [
    { icon: Instagram, href: 'https://www.instagram.com/safarsathi4u?igsh=Y2pyYXVwYWdib2Q2', label: 'Instagram' },
    { icon: Facebook, href: 'https://www.facebook.com/share/r/1CKLxnoMaA/', label: 'Facebook' },
    { icon: Youtube, href: 'https://youtube.com/@safarsathi4u?si=EleCK7Ed4D0nSATY', label: 'YouTube' },
  ];

  return (
    <>
      <footer
        className="relative overflow-hidden font-sans"
      >
        {/* ── Newsletter Strip ───────────────────────────────── */}
        <section
          className="relative ss-grain overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #000D29 0%, #000F30 60%, #00122E 100%)' }}
        >
          {/* Soft vignette blobs */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div
              className="absolute rounded-full"
              style={{
                width: 480,
                height: 480,
                top: '-30%',
                right: '-8%',
                background: 'radial-gradient(circle, rgba(212,175,55,0.05) 0%, transparent 70%)',
              }}
            />
            <div
              className="absolute rounded-full"
              style={{
                width: 360,
                height: 360,
                bottom: '-40%',
                left: '5%',
                background: 'radial-gradient(circle, rgba(212,175,55,0.035) 0%, transparent 70%)',
              }}
            />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
            {/* Section eyebrow */}
            <p
              className="text-center mb-3"
              style={{
                fontSize: 9,
                letterSpacing: '0.5em',
                color: 'rgba(212,175,55,0.55)',
                fontWeight: 600,
                textTransform: 'uppercase',
              }}
            >
              Royal Dispatch
            </p>

            <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20">
              <div className="max-w-lg text-center lg:text-left">
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 300,
                    fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
                    color: '#ffffff',
                    lineHeight: 1.3,
                    letterSpacing: '0.01em',
                  }}
                >
                  Stay inspired.{' '}
                  <em
                    style={{
                      fontStyle: 'italic',
                      background: 'linear-gradient(90deg, #D4AF37, #F0D060, #C9A227)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    Travel stories &amp; exclusive offers.
                  </em>
                </h3>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)', marginTop: 10, fontWeight: 300, letterSpacing: '0.02em' }}>
                  Curated tales from Udaipur's lakes, palaces &amp; heritage lanes — delivered gently.
                </p>
              </div>

              {!subscribed ? (
                <form
                  onSubmit={handleSubscribe}
                  className="flex w-full lg:w-auto"
                  style={{ minWidth: 'min(100%, 420px)' }}
                >
                  <div className="flex flex-1 relative group">
                    {/* Left gold accent on input focus */}
                    <div
                      className="absolute left-0 top-0 bottom-0 w-[2px] transition-all duration-500"
                      style={{ background: 'linear-gradient(180deg, transparent, #D4AF37, transparent)' }}
                    />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      style={{
                        flex: 1,
                        background: 'rgba(255,255,255,0.035)',
                        border: '0.5px solid rgba(255,255,255,0.08)',
                        borderRight: 'none',
                        color: '#fff',
                        fontSize: 12.5,
                        fontFamily: "'Jost', sans-serif",
                        fontWeight: 300,
                        letterSpacing: '0.04em',
                        padding: '0 20px',
                        height: 52,
                        outline: 'none',
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(212,175,55,0.35)')}
                      onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
                    />
                  </div>
                  <button
                    type="submit"
                    style={{
                      background: 'linear-gradient(135deg, #D4AF37 0%, #C9A227 100%)',
                      color: '#000D29',
                      padding: '0 24px',
                      height: 52,
                      fontFamily: "'Jost', sans-serif",
                      fontWeight: 600,
                      fontSize: 10,
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      border: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      flexShrink: 0,
                      transition: 'opacity 0.25s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.88')}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                  >
                    Subscribe
                    <Send size={12} />
                  </button>
                </form>
              ) : (
                <div
                  className="flex items-center gap-4"
                  style={{
                    border: '0.5px solid rgba(212,175,55,0.25)',
                    background: 'rgba(212,175,55,0.07)',
                    padding: '16px 28px',
                  }}
                >
                  <Star size={14} fill="#D4AF37" strokeWidth={0} style={{ color: '#D4AF37', flexShrink: 0 }} />
                  <span style={{ fontSize: 11, color: '#D4AF37', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                    Welcome to the Royal Circle
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Animated shimmer divider */}
          <div className="ss-shimmer-bar" style={{ height: 1 }} />
        </section>

        {/* ── Main Footer Body ────────────────────────────────── */}
        <div
          className="relative ss-grain overflow-hidden"
          style={{ background: '#00091E' }}
        >
          {/* Radial depth blob */}
          <div
            className="absolute pointer-events-none"
            style={{
              top: '-20%',
              left: '-10%',
              width: '60%',
              paddingBottom: '60%',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(212,175,55,0.018) 0%, transparent 65%)',
            }}
          />

          {/* Mandala watermark */}
          <MandalaSilhouette />

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pt-20 pb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-14 lg:gap-10">

              {/* ── Brand Column ── */}
              <div className="lg:col-span-2 space-y-7">
                <Link to="/" className="flex items-center gap-4 group" style={{ textDecoration: 'none' }}>
                  <div
                    className="relative"
                    style={{
                      padding: 3,
                      background: 'linear-gradient(135deg, rgba(212,175,55,0.35), rgba(212,175,55,0.07))',
                    }}
                  >
                    <img
                      src="/logo.jpg"
                      alt="SafarSathi4U"
                      style={{ display: 'block', width: 48, height: 48, objectFit: 'cover' }}
                    />
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: 22,
                        color: '#fff',
                        fontWeight: 400,
                        letterSpacing: '0.06em',
                        lineHeight: 1,
                        transition: 'color 0.3s',
                      }}
                      className="group-hover:text-metallic-gold"
                    >
                      SafarSathi4U
                    </div>
                    <div style={{ fontSize: 8, letterSpacing: '0.55em', color: 'rgba(212,175,55,0.45)', fontWeight: 600, textTransform: 'uppercase', marginTop: 5 }}>
                      Royal Udaipur Journeys
                    </div>
                  </div>
                </Link>

                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.28)', lineHeight: 1.9, fontWeight: 300, maxWidth: 300, letterSpacing: '0.02em' }}>
                  Crafting bespoke, royal experiences in the Heart of Udaipur. We don't just provide tours — we create memories steeped in heritage and luxury.
                </p>

                {/* Trust badges — refined pill design */}
                <div className="flex flex-wrap gap-2.5">
                  {[
                    { icon: <Shield size={10} />, text: 'Verified Business' },
                    { icon: <Clock size={10} />, text: '24/7 Support' },
                    { icon: <Compass size={10} />, text: '100+ Tours' },
                  ].map((b, i) => (
                    <span
                      key={i}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 6,
                        border: '0.5px solid rgba(212,175,55,0.12)',
                        background: 'rgba(212,175,55,0.035)',
                        padding: '6px 12px',
                        fontSize: 9,
                        letterSpacing: '0.18em',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        color: 'rgba(255,255,255,0.28)',
                      }}
                    >
                      <span style={{ color: 'rgba(212,175,55,0.6)' }}>{b.icon}</span>
                      {b.text}
                    </span>
                  ))}
                </div>

                {/* Social icons */}
                <div className="flex gap-2.5 pt-1">
                  {socials.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="ss-social-btn"
                      style={{
                        width: 38,
                        height: 38,
                        border: '0.5px solid rgba(255,255,255,0.07)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'rgba(255,255,255,0.28)',
                        transition: 'border-color 0.35s, color 0.35s, transform 0.35s cubic-bezier(0.34,1.56,0.64,1)',
                        textDecoration: 'none',
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.borderColor = 'rgba(212,175,55,0.35)';
                        el.style.color = '#D4AF37';
                        el.style.transform = 'translateY(-3px) scale(1.05)';
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.borderColor = 'rgba(255,255,255,0.07)';
                        el.style.color = 'rgba(255,255,255,0.28)';
                        el.style.transform = '';
                      }}
                    >
                      <Icon size={14} strokeWidth={1.5} />
                    </a>
                  ))}
                </div>
              </div>

              {/* ── Quick Links ── */}
              <nav>
                <p style={{ fontSize: 9, letterSpacing: '0.35em', color: 'rgba(212,175,55,0.65)', fontWeight: 600, textTransform: 'uppercase', marginBottom: 20 }}>
                  Navigate
                </p>
                <ul className="space-y-4" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {quickLinks.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        className="ss-link-line"
                        style={{
                          fontSize: 12.5,
                          color: 'rgba(255,255,255,0.32)',
                          fontWeight: 400,
                          letterSpacing: '0.06em',
                          textDecoration: 'none',
                          transition: 'color 0.3s',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 0,
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.color = '#D4AF37';
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.32)';
                        }}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* ── Experiences ── */}
              <nav>
                <p style={{ fontSize: 9, letterSpacing: '0.35em', color: 'rgba(212,175,55,0.65)', fontWeight: 600, textTransform: 'uppercase', marginBottom: 20 }}>
                  Experiences
                </p>
                <ul className="space-y-4" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {experiences.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        className="ss-link-line"
                        style={{
                          fontSize: 12.5,
                          color: 'rgba(255,255,255,0.32)',
                          fontWeight: 400,
                          letterSpacing: '0.04em',
                          textDecoration: 'none',
                          transition: 'color 0.3s',
                          display: 'inline-flex',
                          alignItems: 'center',
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.color = '#D4AF37';
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.32)';
                        }}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* ── Contact ── */}
              <div>
                <p style={{ fontSize: 9, letterSpacing: '0.35em', color: 'rgba(212,175,55,0.65)', fontWeight: 600, textTransform: 'uppercase', marginBottom: 20 }}>
                  Get in Touch
                </p>
                <div className="space-y-3">

                  {/* Email */}
                  <a
                    href="mailto:safarsathi4u@gmail.com"
                    className="ss-contact-card"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 14,
                      padding: '12px 14px',
                      border: '0.5px solid rgba(255,255,255,0.05)',
                      background: 'rgba(255,255,255,0.02)',
                      textDecoration: 'none',
                      transition: 'border-color 0.35s, background 0.35s',
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = 'rgba(212,175,55,0.18)';
                      el.style.background = 'rgba(212,175,55,0.04)';
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = 'rgba(255,255,255,0.05)';
                      el.style.background = 'rgba(255,255,255,0.02)';
                    }}
                  >
                    <div style={{ width: 34, height: 34, background: 'rgba(212,175,55,0.07)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Mail size={13} strokeWidth={1.2} style={{ color: 'rgba(212,175,55,0.7)' }} />
                    </div>
                    <div style={{ minWidth: 0 }}>
                      <div style={{ fontSize: 8.5, letterSpacing: '0.22em', color: 'rgba(255,255,255,0.18)', fontWeight: 600, textTransform: 'uppercase', marginBottom: 3 }}>Email</div>
                      <div style={{ fontSize: 11.5, color: 'rgba(255,255,255,0.45)', fontWeight: 300, letterSpacing: '0.02em', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        safarsathi4u@gmail.com
                      </div>
                    </div>
                  </a>

                  {/* Phone */}
                  <a
                    href="tel:+919601258617"
                    className="ss-contact-card"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 14,
                      padding: '12px 14px',
                      border: '0.5px solid rgba(255,255,255,0.05)',
                      background: 'rgba(255,255,255,0.02)',
                      textDecoration: 'none',
                      transition: 'border-color 0.35s, background 0.35s',
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = 'rgba(212,175,55,0.18)';
                      el.style.background = 'rgba(212,175,55,0.04)';
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = 'rgba(255,255,255,0.05)';
                      el.style.background = 'rgba(255,255,255,0.02)';
                    }}
                  >
                    <div style={{ width: 34, height: 34, background: 'rgba(212,175,55,0.07)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Phone size={13} strokeWidth={1.2} style={{ color: 'rgba(212,175,55,0.7)' }} />
                    </div>
                    <div>
                      <div style={{ fontSize: 8.5, letterSpacing: '0.22em', color: 'rgba(255,255,255,0.18)', fontWeight: 600, textTransform: 'uppercase', marginBottom: 3 }}>Phone</div>
                      <div style={{ fontSize: 11.5, color: 'rgba(255,255,255,0.45)', fontWeight: 300, letterSpacing: '0.04em' }}>+91 9601258617</div>
                    </div>
                  </a>

                  {/* Location */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 14,
                      padding: '12px 14px',
                      border: '0.5px solid rgba(255,255,255,0.05)',
                      background: 'rgba(255,255,255,0.02)',
                    }}
                  >
                    <div style={{ width: 34, height: 34, background: 'rgba(212,175,55,0.07)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <MapPin size={13} strokeWidth={1.2} style={{ color: 'rgba(212,175,55,0.7)' }} />
                    </div>
                    <div>
                      <div style={{ fontSize: 8.5, letterSpacing: '0.22em', color: 'rgba(255,255,255,0.18)', fontWeight: 600, textTransform: 'uppercase', marginBottom: 3 }}>Location</div>
                      <div style={{ fontSize: 11.5, color: 'rgba(255,255,255,0.45)', fontWeight: 300, letterSpacing: '0.02em' }}>Udaipur, Rajasthan, India</div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* ── Bottom Bar ── */}
          <div className="relative z-10">
            <div
              className="max-w-7xl mx-auto px-6 md:px-10 py-7 flex flex-col sm:flex-row items-center justify-between gap-5"
            >
              <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.18)', letterSpacing: '0.28em', textTransform: 'uppercase', fontWeight: 400 }}>
                &copy; 2026 SafarSathi4U. All Rights Reserved.
              </p>

              {/* Back to Top */}
              <button
                onClick={scrollToTop}
                className="ss-top-btn"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  color: 'rgba(255,255,255,0.22)',
                  fontFamily: "'Jost', sans-serif",
                  fontSize: 9,
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                  transition: 'color 0.3s',
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#D4AF37')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.22)')}
                aria-label="Back to top"
              >
                Back to Top
                <div
                  style={{
                    width: 30,
                    height: 30,
                    border: '0.5px solid rgba(255,255,255,0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <ChevronUp size={12} />
                </div>
              </button>

              <p
                style={{
                  fontSize: 10,
                  color: 'rgba(255,255,255,0.13)',
                  letterSpacing: '0.22em',
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: 'italic',
                  fontWeight: 300,
                }}
              >
                Crafted with ♥ in Udaipur
              </p>
            </div>

            {/* Final gold accent — animated shimmer */}
            <div
              style={{
                height: 2,
                background: 'linear-gradient(90deg, transparent 0%, #D4AF37 30%, #F0D060 50%, #D4AF37 70%, transparent 100%)',
                backgroundSize: '300% 100%',
                animation: 'ss-shimmer 5s linear infinite',
                opacity: 0.45,
              }}
            />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;