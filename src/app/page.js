import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="eyebrow">
              <span>✦</span>
              Free tools for smarter digital work
            </div>

            <h1>
              Smart tools for
              <span> modern creators.</span>
            </h1>

            <p>
              Compress images, format content, build campaign links and handle
              everyday digital tasks — fast, free and directly in your browser.
            </p>

            <div className="hero-actions">
              <a href="/tools" className="primary-btn">
                Explore Tools
                <span>→</span>
              </a>

              <a href="#tools" className="secondary-btn">
                Popular Tools
              </a>
            </div>

            <div className="trust-row">
              <span>✓ Free</span>
              <span>✓ Fast</span>
              <span>✓ No signup</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-glow"></div>

            <div className="tool-window">
              <div className="window-top">
                <div className="window-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <span className="window-label">KREVEXO TOOLS</span>
              </div>

              <div className="window-content">
                <div className="mini-tool compressor">
                  <div className="mini-icon">▧</div>
                  <div>
                    <strong>Image Compressor</strong>
                    <small>Reduce image size instantly</small>
                  </div>
                  <span className="tool-status">Ready</span>
                </div>

                <div className="mini-grid">
                  <div className="mini-card">
                    <span>Aa</span>
                    <strong>Word Counter</strong>
                  </div>

                  <div className="mini-card">
                    <span>#</span>
                    <strong>Hashtag Cleaner</strong>
                  </div>
                </div>

                <div className="progress-box">
                  <div className="progress-info">
                    <span>Fast. Simple. Useful.</span>
                    <strong>100%</strong>
                  </div>
                  <div className="progress">
                    <span></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="floating-card floating-one">
              <span>⚡</span>
              Instant results
            </div>

            <div className="floating-card floating-two">
              <span>✓</span>
              No signup
            </div>
          </div>
        </div>
      </section>
      {/* POPULAR TOOLS */}
      <section className="popular-tools" id="tools">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="section-label">POPULAR TOOLS</span>
              <h2>Everything you need, one click away.</h2>
            </div>

            <p>
              Simple, focused tools designed to make everyday digital work faster.
              No signup, no unnecessary steps.
            </p>
          </div>

          <div className="tools-grid">
            <Link href="/tools/image-compressor" className="tool-card">
              <div className="tool-card-icon purple">▧</div>
              <div className="tool-card-content">
                <span className="tool-category">IMAGE TOOLS</span>
                <h3>Image Compressor</h3>
                <p>Reduce image file size while keeping your visuals clear.</p>
              </div>
              <span className="tool-arrow">→</span>
            </Link>

            <Link href="/tools/image-resizer" className="tool-card">
              <div className="tool-card-icon blue">↔</div>
              <div className="tool-card-content">
                <span className="tool-category">IMAGE TOOLS</span>
                <h3>Image Resizer</h3>
                <p>Resize images to the exact width and height you need.</p>
              </div>
              <span className="tool-arrow">→</span>
            </Link>

            <Link href="/tools/word-counter" className="tool-card">
              <div className="tool-card-icon cyan">Aa</div>
              <div className="tool-card-content">
                <span className="tool-category">TEXT TOOLS</span>
                <h3>Word Counter</h3>
                <p>Count words and characters instantly as you write.</p>
              </div>
              <span className="tool-arrow">→</span>
            </Link>

            <Link href="/tools/character-counter" className="tool-card">
              <div className="tool-card-icon pink">123</div>
              <div className="tool-card-content">
                <span className="tool-category">TEXT TOOLS</span>
                <h3>Character Counter</h3>
                <p>Check character length for captions, posts and content.</p>
              </div>
              <span className="tool-arrow">→</span>
            </Link>

            <Link href="/tools/utm-builder" className="tool-card">
              <div className="tool-card-icon orange">↗</div>
              <div className="tool-card-content">
                <span className="tool-category">MARKETING TOOLS</span>
                <h3>UTM Builder</h3>
                <p>Create clean campaign tracking URLs in seconds.</p>
              </div>
              <span className="tool-arrow">→</span>
            </Link>

            <Link href="/tools/qr-code-generator" className="tool-card">
              <div className="tool-card-icon green">⌗</div>
              <div className="tool-card-content">
                <span className="tool-category">UTILITY TOOLS</span>
                <h3>QR Code Generator</h3>
                <p>Turn links and text into quick, shareable QR codes.</p>
              </div>
              <span className="tool-arrow">→</span>
            </Link>
          </div>

          <div className="tools-bottom">
            <Link href="/tools" className="view-all-btn">
              View all tools <span>→</span>
            </Link>
          </div>
        </div>
      </section>
      {/* BROWSE BY CATEGORY */}
      <section className="categories-section" id="categories">
        <div className="container">
          <div className="categories-heading">
            <span className="section-label">BROWSE BY CATEGORY</span>
            <h2>Find the right tool for the job.</h2>
            <p>
              Explore focused collections built for images, text, social content,
              marketing and everyday digital tasks.
            </p>
          </div>

          <div className="categories-grid">
            <Link href="/tools?category=image" className="category-card">
              <div className="category-icon category-purple">▧</div>

              <div className="category-info">
                <h3>Image Tools</h3>
                <p>Compress, resize and calculate image dimensions.</p>
                <span>3 tools</span>
              </div>

              <div className="category-arrow">→</div>
            </Link>

            <Link href="/tools?category=text" className="category-card">
              <div className="category-icon category-blue">Aa</div>

              <div className="category-info">
                <h3>Text Tools</h3>
                <p>Count, clean and transform text instantly.</p>
                <span>3 tools</span>
              </div>

              <div className="category-arrow">→</div>
            </Link>

            <Link href="/tools?category=social" className="category-card">
              <div className="category-icon category-pink">#</div>

              <div className="category-info">
                <h3>Social Tools</h3>
                <p>Prepare cleaner captions and hashtags.</p>
                <span>2 tools</span>
              </div>

              <div className="category-arrow">→</div>
            </Link>

            <Link href="/tools?category=marketing" className="category-card">
              <div className="category-icon category-orange">↗</div>

              <div className="category-info">
                <h3>Marketing Tools</h3>
                <p>Build cleaner links for campaign tracking.</p>
                <span>1 tool</span>
              </div>

              <div className="category-arrow">→</div>
            </Link>

            <Link href="/tools?category=utility" className="category-card">
              <div className="category-icon category-green">⌗</div>

              <div className="category-info">
                <h3>Utility Tools</h3>
                <p>Useful tools for everyday digital work.</p>
                <span>1 tool</span>
              </div>

              <div className="category-arrow">→</div>
            </Link>
          </div>
        </div>
      </section>
      {/* WHY KREVEXO */}
      <section className="why-section">
        <div className="container">
          <div className="why-heading">
            <span className="section-label">WHY KREVEXO</span>
            <h2>Useful tools without the unnecessary stuff.</h2>
            <p>
              KREVEXO is built to make everyday digital tasks simpler, faster and
              easier to complete.
            </p>
          </div>

          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">⚡</div>
              <h3>Works in your browser</h3>
              <p>
                Open a tool and start working directly from your browser without
                complicated setup.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">✓</div>
              <h3>No account required</h3>
              <p>
                Use the tools without creating an account or going through unnecessary
                signup steps.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">✦</div>
              <h3>Built for digital work</h3>
              <p>
                Practical utilities for creators, marketers and anyone working with
                content online.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">◎</div>
              <h3>Fast & focused</h3>
              <p>
                Each tool focuses on one clear job so you can get the result you need
                without distractions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-box">
            <div className="cta-glow cta-glow-one"></div>
            <div className="cta-glow cta-glow-two"></div>

            <div className="cta-content">
              <span className="cta-label">10 FREE TOOLS</span>

              <h2>Ready to make digital work easier?</h2>

              <p>
                Explore KREVEXO&apos;s growing collection of simple tools built for
                modern creators and marketers.
              </p>

              <a href="/tools" className="cta-btn">
                Explore Tools <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}