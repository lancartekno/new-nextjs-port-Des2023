import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Code2 } from 'lucide-react';

function About() {
	return (
		<>
			<Head>
				<title>About | Faris Helmi Permana</title>
			</Head>

			<Navbar />

			<section className="hero">
				<div className="container">
					<motion.div
						className="text-wrapper w-full"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
					>
						<h1 className="title">Tentang <span>Saya</span></h1>
						<div className="description" style={{ textAlign: 'justify', maxWidth: '900px', margin: '0 auto 3rem auto' }}>
							<p style={{ marginBottom: '1.5rem' }}>
								Saya adalah seorang mahasiswa Kewirausahaan yang memiliki keahlian mendalam di bidang <strong>Web Development</strong>.
								Dengan latar belakang pendidikan bisnis, saya memiliki cara pandang unik dalam membangun aplikasi web—memastikan setiap baris kode yang saya tulis memberikan nilai tambah bagi bisnis dan pengalaman pengguna yang optimal.
							</p>
							<p>
								Saya menguasai berbagai teknologi modern seperti React.js untuk frontend, Node.js untuk backend, serta pembuatan API dan integrasi sistem.
								Kombinasi antara jiwa wirausaha dan kemampuan teknis memungkinkan saya untuk membangun solusi digital yang inovatif, efisien, dan siap bersaing di era digital.
							</p>
						</div>

						<div className="contact-links" style={{ justifyContent: 'center' }}>
							<motion.div className="contact-item" whileHover={{ scale: 1.05 }}>
								<div className="icon-box"><GraduationCap /></div>
								<div className="contact-label">Pendidikan</div>
								<div className="contact-value">Kewirausahaan</div>
							</motion.div>
							<motion.div className="contact-item" whileHover={{ scale: 1.05 }}>
								<div className="icon-box"><Code2 /></div>
								<div className="contact-label">Keahlian</div>
								<div className="contact-value">Fullstack Dev</div>
							</motion.div>
							<motion.div className="contact-item" whileHover={{ scale: 1.05 }}>
								<div className="icon-box"><Briefcase /></div>
								<div className="contact-label">Fokus</div>
								<div className="contact-value">Business Solution</div>
							</motion.div>
						</div>
					</motion.div>
				</div>
			</section>
		</>
	);
}

export default About;
