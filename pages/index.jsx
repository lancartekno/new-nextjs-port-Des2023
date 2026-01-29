import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Rocket, Send, ChevronRight } from 'lucide-react';

function Home() {
  return (
    <>
      <Head>
        <title>Faris Helmi Permana | Mahasiswa & Web Developer</title>
        <meta name="description" content="Portfolio Faris Helmi Permana - Mahasiswa Kewirausahaan & Web Developer yang berfokus pada solusi bisnis digital." />
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <motion.div
            className="text-wrapper"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="title">
              Halo, saya <br />
              <span>Faris Helmi Permana</span>
            </h1>
            <p className="description">
              Mahasiswa Kewirausahaan & Web Developer yang berfokus pada pembangunan solusi bisnis digital yang inovatif dan estetik.
            </p>

            <div className="cta-group">
              <Link href="/portfolio" className="cta">
                <Rocket size={20} />
                Lihat Portfolio
              </Link>
              <Link href="/contact" className="cta-secondary">
                Kontak Saya
                <ChevronRight size={20} />
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="image-wrapper"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="floating-icon">
              <Rocket size={320} className="text-primary opacity-20" />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Home;
