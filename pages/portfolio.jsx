import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head'

function Portfolio() {
	return (
		<>
			<Head>
				<title>Portfolio</title>
			</Head>

			<Navbar />

			<section className="hero">
				<div className="container">
					<div className="text-wrapper w-full">
						<h1 className="title">Portfolio</h1>
						<p className="description">
							Berikut portfolio yang pernah saya buat sebelumnya.
						</p>

						<div className="portfolio-wrapper">

							<div className="portfolio-item">
								<img src="/ngopi heula.png" className="portfolio-image" />
								<div className="portfolio-info">
									<span className="portfolio-subtitle">Official Coffee Shop Web</span>
									<a href="https://ngopiheula.vercel.app/" target="_blank" rel="noopener noreferrer">
										<h4 className="portfolio-name">Web Cafe Ngopi Heula</h4>
									</a>
									<div className="portfolio-category">Website Dev</div>
								</div>
							</div>

							<div className="portfolio-item">
								<img src="/cekrekwe.png" className="portfolio-image" />
								<div className="portfolio-info">
									<span className="portfolio-subtitle">Photo Booth Service</span>
									<a href="https://cekrekwe.vercel.app/" target="_blank" rel="noopener noreferrer">
										<h4 className="portfolio-name">Cekrekwe</h4>
									</a>
									<div className="portfolio-category">Web Application</div>
								</div>
							</div>

							<div className="portfolio-item">
								<img src="/drgemay.png" className="portfolio-image" />
								<div className="portfolio-info">
									<span className="portfolio-subtitle">AI Health Assistant</span>
									<a href="https://drgemay.vercel.app/" target="_blank" rel="noopener noreferrer">
										<h4 className="portfolio-name">DrGemay</h4>
									</a>
									<div className="portfolio-category">Web Application</div>
								</div>
							</div>



							<div className="portfolio-item">
								<img src="/portfolio.png" className="portfolio-image" />
								<div className="portfolio-info">
									<span className="portfolio-subtitle">Web Design</span>
									<h4 className="portfolio-name">Static Web</h4>
									<div className="portfolio-category">Website Dev</div>
								</div>
							</div>

							<div className="portfolio-item">
								<img src="/portfolio2.png" className="portfolio-image" />
								<div className="portfolio-info">
									<span className="portfolio-subtitle">Application</span>
									<h4 className="portfolio-name">Web App</h4>
									<div className="portfolio-category">Website Dev</div>
								</div>
							</div>

						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Portfolio;