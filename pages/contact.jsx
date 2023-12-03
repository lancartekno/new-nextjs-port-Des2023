import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head'

function Contact() {
	return (
		<>
			<Head>
			  <title>Contact</title>
			</Head>

			<Navbar />

			<section className="hero">
			  <div className="container">
			    <div className="text-wrapper w-full">
			      <h1 className="title">Contact</h1>
			      <p className="description">
			      	Berikut kontak yang dapat dihubungi terkait web developer.
			      </p>
			      <ul className="contact-links">
			      	<li className="contact-item">Email: farishelmi127@gmail.com</li>
			      	<li className="contact-item">Phone: (+62)821-1673-5990</li>
			      </ul>
		      </div>
	      </div>
			</section>
		</>
	);
}

export default Contact;