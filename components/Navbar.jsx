import Link from 'next/link';
import { withRouter } from 'next/router';

function Navbar({ router }) {
  const navs = [
    { text: 'Home', href: '/' },
    { text: 'About', href: '/about' },
    { text: 'Portfolio', href: '/portfolio' },
    { text: 'Contact', href: '/contact' },
    // { text: '', href: '' },
  ];

  return (
    <nav className="navbar">
      <div className="container">
        <Link href="/" className="logo">Faris.</Link>

        <ul className="nav-links">
          { navs.map(nav => (
            <li><Link
              href={nav.href}
              className={`nav-item ${ router.pathname == nav.href ? 'active' : '' }`}>{nav.text}</Link></li>
          )) }
        </ul>
      </div>
    </nav>
  );
}

export default withRouter(Navbar);