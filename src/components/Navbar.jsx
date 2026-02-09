import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Briefcase, Zap, Palette, Wrench, FolderOpen, MessageCircle, Mail } from 'lucide-react';

const Navbar = () => {
    const [hoveredItem, setHoveredItem] = useState(null);
    const [activeItem, setActiveItem] = useState('home');

    const navItems = [
        { Icon: Home, label: 'Home', id: 'home' },
        { Icon: User, label: 'About', id: 'about' },
        { Icon: Briefcase, label: 'Experience', id: 'experience' },
        { Icon: Zap, label: 'Skills', id: 'skills' },
        { Icon: Palette, label: 'Expertise', id: 'expertise' },
        { Icon: Wrench, label: 'Services', id: 'services' },
        { Icon: FolderOpen, label: 'Projects', id: 'projects' },
        { Icon: MessageCircle, label: 'Testimonials', id: 'testimonials' },
        { Icon: Mail, label: 'Contact', id: 'contact' },
    ];

    React.useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveItem(entry.target.id);
                }
            });
        }, { threshold: 0.2 }); // 20% section visibility triggers update

        navItems.forEach(item => {
            const element = document.getElementById(item.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    const handleClick = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    return (
        <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50">
            <nav className="pill-nav px-2 py-3 rounded-3xl flex flex-col items-center gap-3 shadow-2xl backdrop-blur-xl">
                {navItems.map((item, index) => (
                    <div
                        key={index}
                        className="relative flex items-center"
                        onMouseEnter={() => setHoveredItem(index)}
                        onMouseLeave={() => setHoveredItem(null)}
                    >
                        <motion.a
                            href={`#${item.id}`}
                            onClick={(e) => handleClick(e, item.id)}
                            whileHover={{ scale: 1.08, x: 4 }}
                            whileTap={{ scale: 0.95 }}
                            className={`transition-all duration-300 cursor-pointer w-10 h-10 rounded-lg flex items-center justify-center relative z-10 ${activeItem === item.id ? 'text-white scale-105' : 'text-white/70 hover:text-white hover:bg-white/5'}`}
                        >
                            {/* Render icon component and attach neon class to the SVG when active */}
                            <item.Icon size={18} className={activeItem === item.id ? 'neon-icon' : 'nav-icon'} />
                        </motion.a>

                        {/* Tooltip (appear to the right when vertical) */}
                        <AnimatePresence>
                            {hoveredItem === index && (
                                <motion.div
                                    initial={{ opacity: 0, x: -6, scale: 0.95 }}
                                    animate={{ opacity: 1, x: 0, scale: 1 }}
                                    exit={{ opacity: 0, x: -6, scale: 0.95 }}
                                    transition={{ duration: 0.15 }}
                                    className="absolute left-full top-1/2 -translate-y-1/2 pointer-events-none"
                                >
                                    <div className="relative">
                                        {/* Tooltip Content */}
                                        <div className="px-3 py-2 bg-white/7 backdrop-blur-md border border-white/10 rounded-lg shadow-lg">
                                            <span className="text-white text-xs font-semibold uppercase tracking-[0.12em] whitespace-nowrap">
                                                {item.label}
                                            </span>
                                        </div>
                                        {/* Arrow pointing left */}
                                        <div className="absolute left-[-6px] top-1/2 -translate-y-1/2 w-2 h-2 bg-white/7 border-r border-b border-white/10 rotate-45" />
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </nav>
        </div>
    );
};

export default Navbar;
