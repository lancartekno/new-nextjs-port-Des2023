import Link from 'next/link';
import { withRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

function Navbar({ router }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navs = [
    { text: 'Home', href: '/' },
    { text: 'About', href: '/about' },
    { text: 'Portfolio', href: '/portfolio' },
    { text: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <Link href="/" className="logo">
          <Sparkles size={24} className="text-primary" />
          <span>Faris.</span>
        </Link>

        <ul className="nav-links">
          {navs.map((nav, idx) => (
            <motion.li
              key={nav.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <Link
                href={nav.href}
                className={`nav-item ${router.pathname == nav.href ? 'active' : ''}`}
              >
                {nav.text}
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default withRouter(Navbar);
