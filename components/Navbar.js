import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <div className="brand">
          <Link href="/" legacyBehavior>
            <a>
              <img src="/images/logo alok.png" alt="ALOK" className="nav-logo" />
            </a>
          </Link>
        </div>
        <nav className="nav-links">
          <Link href="/" legacyBehavior><a>Home</a></Link>
          <Link href="/about" legacyBehavior><a>About</a></Link>
          <Link href="/projects" legacyBehavior><a>Projects</a></Link>
          <Link href="/contact" legacyBehavior><a>Contact Me</a></Link>
        </nav>
        <Link href="/login" legacyBehavior>
          <a className="login-btn">
            <i className="fas fa-arrow-right-to-bracket"></i> Login
          </a>
        </Link>
      </div>
    </header>
  );
}
