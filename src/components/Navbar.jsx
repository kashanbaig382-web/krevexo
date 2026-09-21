import Link from "next/link";

export default function Navbar() {
  return (
    <header className="site-header">
      <div className="container">
        <nav className="navbar">
          <Link href="/" className="nav-logo">
            <span className="nav-logo-icon">K</span>
            KREVEXO
          </Link>

          <div className="nav-links">
            <Link href="/tools">Tools</Link>
            <Link href="/#categories">Categories</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>

          <Link href="/tools" className="nav-cta">
            Explore Tools
          </Link>
        </nav>
      </div>
    </header>
  );
}