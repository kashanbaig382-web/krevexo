import Link from "next/link";

export const metadata = {
  title: "Terms of Use | KREVEXO",
  description:
    "Read the Terms of Use for accessing and using KREVEXO and its free browser-based tools.",
};

export default function TermsPage() {
  return (
    <main className="legal-page">
      <section className="legal-hero">
        <div className="container">
          <span className="section-label">LEGAL</span>

          <h1>Terms of Use</h1>

          <p>
            These Terms of Use explain the conditions that apply when you
            access KREVEXO and use our browser-based tools.
          </p>

          <span className="legal-updated">
            Last updated: September 21, 2026
          </span>
        </div>
      </section>

      <section className="legal-content-section">
        <div className="container">
          <div className="legal-content">
            <section>
              <h2>1. Acceptance of Terms</h2>

              <p>
                By accessing or using KREVEXO, you agree to these Terms of Use.
                If you do not agree with these terms, you should not use the
                website or its tools.
              </p>
            </section>

            <section>
              <h2>2. About KREVEXO</h2>

              <p>
                KREVEXO provides browser-based tools designed to help with
                tasks involving images, text, social content, marketing and
                other everyday digital work.
              </p>

              <p>
                We may add, modify, improve or remove tools and features over
                time.
              </p>
            </section>

            <section>
              <h2>3. Permitted Use</h2>

              <p>
                You may use KREVEXO for lawful personal, educational,
                professional or commercial tasks, subject to these Terms of
                Use and applicable laws.
              </p>

              <p>
                You are responsible for the content you process or create
                using KREVEXO and for ensuring that your use of that content
                does not violate the rights of others.
              </p>
            </section>

            <section>
              <h2>4. Prohibited Use</h2>

              <p>
                You may not misuse KREVEXO, attempt to interfere with the
                website or its infrastructure, intentionally disrupt its
                operation, or use the service for unlawful activities.
              </p>

              <p>
                You must not attempt to gain unauthorized access to systems,
                accounts, data or functionality associated with KREVEXO.
              </p>
            </section>

            <section>
              <h2>5. Your Content</h2>

              <p>
                You remain responsible for content that you enter, upload or
                process using KREVEXO tools.
              </p>

              <p>
                You should only use content that you have the right or
                permission to use. KREVEXO does not grant you rights to
                third-party content simply because it can be processed using
                one of our tools.
              </p>
            </section>

            <section>
              <h2>6. Tool Results</h2>

              <p>
                We aim to make KREVEXO tools useful and reliable, but results
                may not always be accurate, complete or suitable for every
                purpose.
              </p>

              <p>
                You should review important outputs before relying on them,
                especially when they will be used for professional,
                commercial or other significant purposes.
              </p>
            </section>

            <section>
              <h2>7. Availability</h2>

              <p>
                We do not guarantee that KREVEXO or every tool will always be
                available without interruption. Features may occasionally be
                unavailable because of maintenance, technical issues, updates
                or circumstances outside our control.
              </p>
            </section>

            <section>
              <h2>8. Third-Party Services</h2>

              <p>
                KREVEXO may use or link to third-party services. Those
                services are operated independently and may have their own
                terms, privacy policies and conditions.
              </p>

              <p>
                KREVEXO is not responsible for the content, availability or
                practices of third-party websites and services.
              </p>
            </section>

            <section>
              <h2>9. Intellectual Property</h2>

              <p>
                The KREVEXO name, website design, original content and other
                materials created for KREVEXO may be protected by applicable
                intellectual property laws.
              </p>

              <p>
                These Terms do not transfer ownership of KREVEXO branding,
                website content or other proprietary materials to users.
              </p>
            </section>

            <section>
              <h2>10. Disclaimer</h2>

              <p>
                KREVEXO is provided on an &quot;as is&quot; and &quot;as
                available&quot; basis. To the extent permitted by applicable
                law, we make no guarantee that every tool or result will be
                error-free, uninterrupted or suitable for a particular
                purpose.
              </p>
            </section>

            <section>
              <h2>11. Limitation of Liability</h2>

              <p>
                To the extent permitted by applicable law, KREVEXO will not be
                responsible for indirect or consequential losses resulting
                from your use of, or inability to use, the website or its
                tools.
              </p>

              <p>
                You are responsible for reviewing outputs and maintaining
                appropriate backups of important files or information.
              </p>
            </section>

            <section>
              <h2>12. Changes to These Terms</h2>

              <p>
                We may update these Terms of Use as KREVEXO changes. The
                latest version will be published on this page together with
                its revision date.
              </p>
            </section>

            <section>
              <h2>13. Contact</h2>

              <p>
                If you have questions about these Terms of Use, please use our{" "}
                <Link href="/contact">Contact page</Link>.
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}