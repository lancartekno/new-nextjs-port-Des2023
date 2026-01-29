import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Send } from 'lucide-react';

function Contact() {
	return (
		<>
			<Head>
				<title>Contact | Faris Helmi Permana</title>
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
						<h1 className="title">Hubungi <span>Saya</span></h1>
						<p className="description">
							Tertarik untuk bekerja sama atau memiliki pertanyaan? Jangan ragu untuk menghubungi saya melalui saluran di bawah ini.
						</p>

						<div className="contact-links">
							<motion.div
								className="contact-item"
								whileHover={{ y: -5, borderColor: 'var(--primary)' }}
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: 0.2 }}
							>
								<div className="icon-box"><Mail /></div>
								<div className="contact-info-text">
									<div className="contact-label">Email</div>
									<div className="contact-value">permanafarishelmi@gmail.com</div>
								</div>
							</motion.div>

							<motion.a
								href="https://wa.me/6283131531052"
								target="_blank"
								rel="noopener noreferrer"
								className="contact-item"
								whileHover={{ y: -5, borderColor: '#25D366' }}
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: 0.3 }}
							>
								<div className="icon-box" style={{ color: '#25D366', background: 'rgba(37, 211, 102, 0.1)' }}>
									<MessageCircle />
								</div>
								<div className="contact-info-text">
									<div className="contact-label">WhatsApp</div>
									<div className="contact-value">(+62) 831-3153-1052</div>
								</div>
							</motion.a>
						</div>
					</motion.div>
				</div>
			</section>
		</>
	);
}

export default Contact;
