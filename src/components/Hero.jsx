import React, { useEffect, useRef } from "react";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
import bannerImg from '../assets/Banner.png';
import bgLeft from '../assets/Background.png';

const Hero = () => {
  // cursor and animation setup
  const cursorRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMove);

    let raf = null;
    const loop = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.15;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.15;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  // mount custom cursor element
  useEffect(() => {
    const el = document.createElement('div');
    el.className = 'custom-cursor';
    document.body.appendChild(el);
    cursorRef.current = el;
    const handleOver = (e) => {
      if (!cursorRef.current) return;
      if (e.target.closest && e.target.closest('a,button,button[class*="btn"],[role="button"]')) {
        cursorRef.current.classList.add('custom-cursor--active');
      }
    };
    const handleOut = (e) => {
      if (!cursorRef.current) return;
      if (e.target.closest && e.target.closest('a,button,button[class*="btn"],[role="button"]')) {
        cursorRef.current.classList.remove('custom-cursor--active');
      }
    };
    document.addEventListener('mouseover', handleOver);
    document.addEventListener('mouseout', handleOut);

    return () => {
      document.removeEventListener('mouseover', handleOver);
      document.removeEventListener('mouseout', handleOut);
      document.body.removeChild(el);
    };
  }, []);

  const headingContainer = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { staggerChildren: 0.06 } }
  };

  const headingChild = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-[#090A17] cursor-none">

      {/* Soft Background Gradient to add depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#090A17] z-10" />

  {/* Left background image (subtle) - placed behind the content but over the main background */}
  <div className="absolute left-0 top-0 bottom-0 md:w-5/12 w-0 z-10 pointer-events-none hidden md:block">
    <img src={bgLeft} alt="Background left" className="w-full h-full object-cover opacity-75" />
    <div className="absolute inset-0 bg-gradient-to-r from-[#090A17] via-[#090A17]/80 to-transparent" />
  </div>

  {/* Hero Content: responsive 12-column grid. Right column is the large banner */}
  <div className="relative z-20 grid grid-cols-1 md:grid-cols-12 items-center h-full px-6 md:px-16 py-12">
        {/* Left Side: Names & Tagline */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9 }}
          className="md:col-span-4 md:col-start-3 md:-ml-[100px] w-full max-w-xl text-left text-white mt-8 md:mt-0 relative z-30"
        >
          {/* Decorative background vectors behind text */}
          <div className="absolute inset-0 -z-10 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 0.18, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.15 }}
              className="absolute -top-12 -left-12 w-56 h-56 rounded-full bg-gradient-to-br from-purple-600 to-blue-400 blur-[48px]"
              aria-hidden
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 0.12, scale: 1 }}
              transition={{ duration: 1.4, delay: 0.35 }}
              className="absolute bottom-20 left-6 w-40 h-40 rounded-full bg-gradient-to-tr from-pink-500 to-indigo-500 blur-[28px]"
              aria-hidden
            />
            {/* Floating particle shapes (flying things) */}
            <div className="absolute inset-0 pointer-events-none">
              {[0,1,2,3].map((i) => {
                const posStyle = i % 2 ? { right: '18%' } : { left: '12%' };
                const topPct = `${10 + i * 8}%`;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0.08, 0.06, 0.08, 0], x: [i % 2 ? -40 : 40, i % 2 ? 20 : -20], y: [0, -8, 8, 0] }}
                    transition={{ duration: 6 + i, repeat: Infinity, ease: 'easeInOut', repeatType: 'loop', delay: i * 0.6 }}
                    className={`absolute`}
                    style={{ top: topPct, ...posStyle, width: 12 + i*6, height: 12 + i*6, borderRadius: 8, background: i % 2 ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.03)', boxShadow: '0 6px 24px rgba(0,0,0,0.4)' }}
                  />
                );
              })}
            </div>
          </div>

          <motion.div variants={headingContainer} initial="hidden" animate="show">
            <motion.h1 variants={headingChild} className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold mb-4 leading-tight tracking-tight">
              <span className="block">Uwayo</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400">Pascaline</span>
            </motion.h1>

            <motion.p variants={headingChild} className="text-lg md:text-xl mb-6 text-white/80 max-w-lg font-body tracking-wide leading-relaxed">
              You dream it — we build it. Beautiful interfaces and reliable backends, designed end-to-end.
            </motion.p>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }} whileHover={{ scale: 1.02 }} className="flex gap-4">
            <motion.button
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 text-white rounded-lg font-semibold shadow-lg"
            >
              Get Started
            </motion.button>

            <a href="#projects" className="px-6 py-3 border border-white/10 rounded-lg text-white/80 hover:text-white transition-all">
              See Projects
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side: the grid leaves space for the full-bleed banner which is rendered absolutely */}
        {/* (banner is rendered absolutely below to allow it to reach the viewport edge with no padding/margin) */}
      </div>

      {/* Full-bleed banner on the right (no border-radius, no padding/margin) */}
      <div className="absolute top-0 right-0 bottom-0 md:w-7/12 w-full z-0">
        <img src={bannerImg} alt="Banner" className="w-full h-full object-cover" />
        {/* fade towards the left so the image is strongest at the right and fades into the page on the left.
            Use an inline linear-gradient so we can control the stop points and make the strong (transparent) area wider. */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(to left, rgba(9,10,23,0) 60%, rgba(9,10,23,0.95) 100%)' }}
        />
      </div>
  </section>
  );
};

export default Hero;
