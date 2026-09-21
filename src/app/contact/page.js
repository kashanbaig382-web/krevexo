import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contact KREVEXO | Get in Touch",
  description:
    "Contact KREVEXO with questions, feedback or suggestions about our free online tools.",
};

export default function ContactPage() {
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <span className="section-label">CONTACT KREVEXO</span>
          <h1>Have a question or suggestion?</h1>
          <p>
            Send us a message about KREVEXO, report an issue or suggest a tool
            you would like to see.
          </p>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <span className="section-label">GET IN TOUCH</span>

              <h2>We&apos;d like to hear from you.</h2>

              <p>
                Whether you found an issue, have feedback or want to suggest a
                useful new tool, you can send us a message using the form.
              </p>

              <div className="contact-info-cards">
                <div>
                  <span>01</span>
                  <h3>Tool Feedback</h3>
                  <p>
                    Tell us if a KREVEXO tool is not working as expected.
                  </p>
                </div>

                <div>
                  <span>02</span>
                  <h3>Tool Suggestions</h3>
                  <p>
                    Suggest a useful browser tool you would like us to build.
                  </p>
                </div>

                <div>
                  <span>03</span>
                  <h3>General Questions</h3>
                  <p>
                    Send questions related to KREVEXO and its tools.
                  </p>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}