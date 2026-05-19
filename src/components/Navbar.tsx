import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Facebook, Youtube, ArrowRight, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Packages', path: '/packages' },
    { name: 'Adventure', path: '/adventure' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* ─── Main Navbar ─── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-[970] transition-all duration-500 ease-out flex items-center px-5 md:px-8 lg:px-12 ${
          isScrolled
            ? 'py-2.5 bg-royal-blue/95 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] border-b border-metallic-gold/[0.06]'
            : 'py-4 bg-transparent border-b border-white/[0.04]'
        }`}
      >
        {/* Logo + Brand */}
        <Link to="/" className="flex items-center gap-3 group shrink-0">
          <div
            className={`relative rounded-full transition-all duration-500 ${isScrolled ? 'p-[1.5px]' : 'p-[2px]'}`}
            style={{
              background: 'linear-gradient(135deg, rgba(212,175,55,0.7), rgba(212,175,55,0.1), rgba(212,175,55,0.7))',
            }}
          >
            <img
              src="/logo.jpg"
              alt="SafarSathi4U"
              className={`rounded-full object-cover transition-all duration-500 group-hover:scale-105 ${
                isScrolled ? 'h-8 w-8' : 'h-10 w-10'
              }`}
            />
          </div>
          <div className="flex flex-col">
            <span
              className={`font-serif font-light text-metallic-gold leading-none transition-all duration-500 ${
                isScrolled ? 'text-[17px] tracking-[0.06em]' : 'text-xl md:text-[22px] tracking-[0.08em]'
              }`}
            >
              SafarSathi4U
            </span>
            <span
              className={`text-[7px] uppercase tracking-[0.35em] text-white/30 font-sans font-medium transition-all duration-500 overflow-hidden ${
                isScrolled ? 'max-h-0 opacity-0 mt-0' : 'max-h-4 opacity-100 mt-0.5'
              }`}
            >
              Royal Udaipur Journeys
            </span>
          </div>
        </Link>

        {/* ── Centered Desktop Nav Links ── */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-1.5 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative px-3.5 xl:px-4 py-2 text-[10px] font-sans font-semibold uppercase tracking-[0.16em] transition-all duration-300 rounded-sm group whitespace-nowrap ${
                location.pathname === link.path
                  ? 'text-metallic-gold'
                  : 'text-white/55 hover:text-white/90'
              }`}
            >
              {link.name}
              {/* Active indicator — slim gold line */}
              <span
                className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[1.5px] rounded-full transition-all duration-500 ${
                  location.pathname === link.path
                    ? 'w-5 bg-metallic-gold'
                    : 'w-0 group-hover:w-4 bg-white/40 group-hover:bg-metallic-gold/60'
                }`}
              />
            </Link>
          ))}
        </div>

        {/* Book Now CTA (right side, desktop) */}
        <div className="hidden lg:flex items-center gap-5 ml-auto">
          <a
            href="https://wa.me/919601258617"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[9px] text-white/40 hover:text-metallic-gold tracking-[0.15em] uppercase font-sans font-semibold transition-colors duration-300"
          >
            <Phone size={11} strokeWidth={2} />
            <span className="hidden xl:inline">WhatsApp</span>
          </a>
          <span className="w-[1px] h-4 bg-white/10" />
          <Link
            to="/contact"
            className="btn-primary !px-5 !py-2 !text-[9px] !gap-2 group shadow-lg shadow-metallic-gold/10 hover:shadow-metallic-gold/30 hover:bg-gold-accent active:translate-y-0"
          >
            <span className="flex items-center gap-2">
              Book Now
              <ArrowRight
                size={12}
                strokeWidth={2.5}
                className="group-hover:translate-x-0.5 transition-transform duration-300"
              />
            </span>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="ml-auto lg:hidden z-[980] w-10 h-10 flex items-center justify-center rounded-full border border-metallic-gold/15 hover:border-metallic-gold/40 text-metallic-gold transition-all duration-300 focus:outline-none"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          <div className="relative w-5 h-5">
            <X
              size={20}
              strokeWidth={1.5}
              className={`absolute inset-0 transition-all duration-300 ${
                isOpen ? 'rotate-0 opacity-100' : 'rotate-90 opacity-0'
              }`}
            />
            <Menu
              size={20}
              strokeWidth={1.5}
              className={`absolute inset-0 transition-all duration-300 ${
                isOpen ? '-rotate-90 opacity-0' : 'rotate-0 opacity-100'
              }`}
            />
          </div>
        </button>
      </nav>

      {/* ─── Mobile Backdrop ─── */}
      <div
        className={`fixed inset-0 z-[950] bg-black/60 backdrop-blur-sm transition-opacity duration-500 lg:hidden ${
          isOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* ─── Mobile Drawer (right side) ─── */}
      <div
        className={`fixed top-0 right-0 z-[960] h-full w-[82%] max-w-[340px] bg-gradient-to-b from-[#001A4D] via-[#001240] to-[#000D29] border-l border-metallic-gold/[0.06] shadow-2xl shadow-black/50 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] lg:hidden flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="px-7 pt-20 pb-4">
          <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3 mb-6">
            <img src="/logo.jpg" alt="Logo" className="h-10 w-10 rounded-full object-cover border border-metallic-gold/30 p-[1px]" />
            <div>
              <div className="font-serif text-lg text-metallic-gold leading-none tracking-[0.06em]">SafarSathi4U</div>
              <div className="text-[7px] uppercase tracking-[0.35em] text-white/25 font-sans mt-0.5">Royal Udaipur</div>
            </div>
          </Link>
          <div className="flex items-center gap-2.5">
            <span className="w-5 h-[1px] bg-metallic-gold/30" />
            <span className="text-[8px] uppercase tracking-[0.4em] text-metallic-gold/40 font-sans font-bold">
              Navigation
            </span>
          </div>
        </div>

        {/* Drawer Links */}
        <div className="flex-1 overflow-y-auto px-7 py-2">
          {navLinks.map((link, index) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`flex items-center justify-between font-serif text-[22px] font-light tracking-[0.02em] py-3.5 border-b border-white/[0.03] transition-all group ${
                location.pathname === link.path
                  ? 'text-metallic-gold pl-2'
                  : 'text-white/70 hover:text-metallic-gold hover:pl-3'
              }`}
              style={{
                transitionDelay: isOpen ? `${80 + index * 50}ms` : '0ms',
                transitionDuration: '400ms',
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? 'translateX(0)' : 'translateX(20px)',
              }}
            >
              {link.name}
              {location.pathname === link.path && (
                <span className="w-1.5 h-1.5 rounded-full bg-metallic-gold/70" />
              )}
            </Link>
          ))}
        </div>

        {/* Drawer Footer: CTA + Socials */}
        <div
          className="px-7 py-7 border-t border-white/[0.04]"
          style={{
            opacity: isOpen ? 1 : 0,
            transitionDelay: isOpen ? '450ms' : '0ms',
            transition: 'opacity 400ms ease',
          }}
        >
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="btn-primary w-full !px-6 !py-3 !text-[10px] !gap-2.5 shadow-lg shadow-metallic-gold/15 mb-5"
          >
            Book Now
            <ArrowRight size={13} strokeWidth={2.5} />
          </Link>
          <a
            href="tel:+919601258617"
            className="btn-ghost-light w-full !px-6 !py-2.5 !text-[10px] !gap-2 mb-6"
          >
            <Phone size={12} />
            Call Now
          </a>
          <div className="flex gap-3.5 justify-center">
            {[
              { icon: Instagram, href: 'https://www.instagram.com/safarsathi4u' },
              { icon: Facebook, href: 'https://www.facebook.com/share/r/1CKLxnoMaA/' },
              { icon: Youtube, href: 'https://youtube.com/@safarsathi4u' },
            ].map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/[0.06] flex items-center justify-center text-white/30 hover:border-metallic-gold/30 hover:text-metallic-gold transition-all duration-400"
              >
                <Icon size={14} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
