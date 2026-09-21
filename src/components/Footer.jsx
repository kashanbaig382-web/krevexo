import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="nav-logo footer-logo">
              <span className="nav-logo-icon">K</span>
              KREVEXO
            </Link>

            <p>
              Smart, fast and free browser tools for creators, marketers and
              everyday digital work.
            </p>
          </div>

          <div className="footer-column">
            <h3>Tools</h3>
            <Link href="/tools">All Tools</Link>
            <Link href="/tools/image-compressor">Image Compressor</Link>
            <Link href="/tools/word-counter">Word Counter</Link>
            <Link href="/tools/utm-builder">UTM Builder</Link>
          </div>

          <div className="footer-column">
            <h3>KREVEXO</h3>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Use</Link>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} KREVEXO. All rights reserved.
          </p>

          <p>Smart Tools for Modern Creators.</p>
        </div>
      </div>
    </footer>
  );
}