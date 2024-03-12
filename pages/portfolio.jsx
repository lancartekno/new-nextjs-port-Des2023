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
					{/* awal box */}
						<div className="portfolio-item">
							<img src="/port4.png" className="portfolio-image" />
							<a href="https://faris-cv-des-2023.vercel.app/">
								<h4 className="portfolio-name">CV Faris Helmi P.</h4>
							</a>
							<div className="portfolio-category">Website Dev</div>
							
						</div>
					{/* akhir box */}
					{/* awal box */}
			      	<div className="portfolio-item">
			      		<img src="/port3.png" className="portfolio-image" />
							<a href="https://port2-faris.netlify.app/">
								<h4 className="portfolio-name">Kumpulan Portofolio</h4>
							</a>
			      		<div className="portfolio-category">Website Dev</div>
			      	</div>
					{/* akhir box */}
				
					{/* awal box */}
					<div className="portfolio-item">
			      		<img src="/portfolio.png" className="portfolio-image" />

			      		<h4 className="portfolio-name">Static Web</h4>
			      		<div className="portfolio-category">Website Dev</div>
			      	</div>
					{/* akhir box */}
					{/* awal box */}
			      	<div className="portfolio-item">
			      		<img src="/portfolio2.png" className="portfolio-image" />

			      		<h4 className="portfolio-name">Web App</h4>
			      		<div className="portfolio-category">Website Dev</div>
			      	</div>
					{/* akhir box */}
			      </div>
		      </div>
	      </div>
			</section>
		</>
	);
}

export default Portfolio;