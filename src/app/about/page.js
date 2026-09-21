import Link from "next/link";

export const metadata = {
  title: "About KREVEXO | Smart Tools for Modern Creators",
  description:
    "Learn about KREVEXO and our collection of free browser-based tools built for creators, marketers and everyday digital work.",
};

export default function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="container">
          <span className="section-label">ABOUT KREVEXO</span>

          <h1>Simple tools should make digital work easier.</h1>

          <p>
            KREVEXO is a growing collection of free browser-based tools built
            for creators, marketers and anyone handling everyday digital tasks.
          </p>

          <Link href="/tools" className="about-primary-btn">
            Explore All Tools
          </Link>
        </div>
      </section>

      <section className="about-content-section">
        <div className="container">
          <div className="about-story-grid">
            <div>
              <span className="section-label">WHY KREVEXO</span>
              <h2>Useful tools without unnecessary complexity.</h2>
            </div>

            <div className="about-story-text">
              <p>
                Digital work often involves small repetitive tasks: resizing an
                image, checking a character limit, cleaning hashtags, building
                a tracking URL or generating a QR code.
              </p>

              <p>
                KREVEXO brings focused tools for these tasks together in one
                place. Our goal is to keep each tool simple, fast and useful
                without requiring an account for basic use.
              </p>
            </div>
          </div>

          <div className="about-values-grid">
            <article>
              <span>01</span>
              <h3>Focused</h3>
              <p>
                Each tool is designed around a clear task instead of adding
                unnecessary features.
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>Accessible</h3>
              <p>
                Core KREVEXO tools are available without requiring users to
                create an account.
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>Practical</h3>
              <p>
                We focus on tools that can help with real content, marketing
                and everyday digital workflows.
              </p>
            </article>
          </div>

          <div className="about-tool-section">
            <div>
              <span className="section-label">WHAT YOU CAN DO</span>
              <h2>One place for everyday creator tools.</h2>

              <p>
                KREVEXO currently includes tools for images, text, social
                content, marketing and general digital tasks.
              </p>
            </div>

            <div className="about-category-list">
              <div>
                <strong>Image Tools</strong>
                <span>Compress, resize and calculate aspect ratios.</span>
              </div>

              <div>
                <strong>Text Tools</strong>
                <span>Count, check and transform written content.</span>
              </div>

              <div>
                <strong>Social Tools</strong>
                <span>Clean hashtags and format social captions.</span>
              </div>

              <div>
                <strong>Marketing Tools</strong>
                <span>Create structured UTM campaign links.</span>
              </div>

              <div>
                <strong>Utility Tools</strong>
                <span>Generate downloadable QR codes.</span>
              </div>
            </div>
          </div>

          <div className="about-final-cta">
            <span className="section-label">START USING KREVEXO</span>

            <h2>Smart tools. Less friction.</h2>

            <p>
              Explore the complete collection and choose the tool you need.
            </p>

            <Link href="/tools" className="about-primary-btn">
              Browse Free Tools
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}