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
				  Faris Helmi Permana, seorang pengembang perangkat lunak profesional, menguasai berbagai aspek dalam pengembangan web. Keahliannya di front-end mencakup manajemen state dengan React Hooks, pengambilan data melalui React APIs, JSX, dan tampilan daftar menggunakan React. Di bidang backend, Faris memiliki keahlian dalam pemodelan data, SQL, pengembangan API, serta integrasi frontend React dengan backend Flask. Dengan pengalaman dalam pengujian unit Flask dan penyebaran aplikasi Flask menggunakan kontainerisasi, ia mengimplementasikan praktik terbaik untuk menciptakan solusi perangkat lunak yang dinamis, efisien, dan responsif. Dedikasinya terhadap kualitas perangkat lunak membuatnya menjadi kontributor yang berharga dalam setiap proyek.
			      </p>
		      </div>
	      </div>
			</section>
		</>
	);
}

export default About;