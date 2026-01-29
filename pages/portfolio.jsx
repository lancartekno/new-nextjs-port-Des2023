import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { ExternalLink, Layout, Smartphone, Globe } from 'lucide-react';

const portfolioData = [
	{
		title: "Web Cafe Ngopi Heula",
		subtitle: "Official Coffee Shop Web",
		category: "Website Cafe",
		image: "/ngopi heula.png",
		url: "https://ngopiheula.vercel.app/",
		icon: <Globe size={18} />
	},
	{
		title: "Cekrekwe",
		subtitle: "Photo Booth Service",
		category: "Web Application",
		image: "/cekrekwe.png",
		url: "https://cekrekwe.vercel.app/",
		icon: <Smartphone size={18} />
	},
	{
		title: "Drg. Emay Marlina",
		subtitle: "Static Landing Page",
		category: "Integrasi Whatsapp",
		image: "/drgemay.png",
		url: "https://drgemay.vercel.app/",
		icon: <Layout size={18} />
	},
	{
		title: "Momentum",
		subtitle: "Jasa Undangan Digital",
		category: "Website Undangan",
		image: "/momentum.png",
		url: "https://momentum-invite.vercel.app/",
		icon: <Globe size={18} />
	},
	{
		title: "Undangan Momentum (30rb)",
		subtitle: "Contoh Undangan Digital",
		category: "Website Undangan",
		image: "/romeo.png",
		url: "https://undangan-digital-momentum.vercel.app/",
		icon: <Globe size={18} />
	},
	{
		title: "Ngopi Heula Poin",
		subtitle: "Digital Stamp Card",
		category: "Web Application",
		image: "/stempel online.png",
		url: "https://ngopi-heula-poin.vercel.app/",
		icon: <Smartphone size={18} />
	},
	{
		title: "Static Web",
		subtitle: "Web Design",
		category: "Website Dev",
		image: "/portfolio.png",
		url: "#",
		icon: <Layout size={18} />
	},
	{
		title: "Asmaraku Radio",
		subtitle: "Online Radio Streamer",
		category: "Web Application",
		image: "/asmaraku.png",
		url: "https://asmaraku.vercel.app/",
		icon: <Smartphone size={18} />
	}
];

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1
		}
	}
};

const itemVariants = {
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: "easeOut" }
	}
};

function Portfolio() {
	return (
		<>
			<Head>
				<title>Portfolio | Faris Helmi Permana</title>
			</Head>

			<Navbar />

			<section className="hero" style={{ minHeight: 'auto', paddingTop: '140px' }}>
				<div className="container">
					<motion.div
						className="text-wrapper w-full"
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						<h1 className="title">Portfolio <span>Karya</span></h1>
						<p className="description">
							Kumpulan proyek yang telah saya kerjakan, mulai dari website statis hingga aplikasi web tingkat lanjut.
						</p>
					</motion.div>
				</div>
			</section>

			<section className="portfolio-content" style={{ marginTop: '-40px' }}>
				<div className="container">
					<motion.div
						className="portfolio-wrapper"
						variants={containerVariants}
						initial="hidden"
						animate="visible"
					>
						{portfolioData.map((item, index) => (
							<motion.div
								key={index}
								className="portfolio-item"
								variants={itemVariants}
								whileHover={{ y: -10 }}
							>
								<div className="image-container">
									<img src={item.image} className="portfolio-image" alt={item.title} />
									<div className="portfolio-overlay">
										<a href={item.url} target="_blank" rel="noopener noreferrer" className="cta" style={{ padding: '0.75rem 1.5rem', fontSize: '0.9rem' }}>
											View Project
											<ExternalLink size={16} />
										</a>
									</div>
								</div>
								<div className="portfolio-info">
									<span className="portfolio-subtitle">{item.subtitle}</span>
									<h4 className="portfolio-name">{item.title}</h4>
									<div className="portfolio-category">
										{item.icon}
										<span>{item.category}</span>
									</div>
								</div>
							</motion.div>
						))}
					</motion.div>
				</div>
			</section>
		</>
	);
}

export default Portfolio;
