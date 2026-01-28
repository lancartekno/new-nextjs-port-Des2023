import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head'

function About() {
	return (
		<>
			<Head>
				<title>About</title>
			</Head>

			<Navbar />

			<section className="hero">
				<div className="container">
					<div className="text-wrapper w-full">
						<h1 className="title">About</h1>
						<p className="description">
							Saya adalah seorang mahasiswa Kewirausahaan yang memiliki keahlian mendalam di bidang Web Development. Dengan latar belakang pendidikan bisnis, saya memiliki cara pandang unik dalam membangun aplikasi web—memastikan setiap baris kode yang saya tulis memberikan nilai tambah bagi bisnis dan pengalaman pengguna yang optimal. Saya menguasai berbagai teknologi modern seperti React.js untuk frontend, Node.js untuk backend, serta pembuatan API dan integrasi sistem. Kombinasi antara jiwa wirausaha dan kemampuan teknis memungkinkan saya untuk membangun solusi digital yang inovatif, efisien, dan siap bersaing di era digital.
						</p>
					</div>
				</div>
			</section>
		</>
	);
}

export default About;