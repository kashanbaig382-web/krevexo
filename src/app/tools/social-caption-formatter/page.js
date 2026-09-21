import SocialCaptionFormatter from "./SocialCaptionFormatter";

export const metadata = {
  title: "Free Social Caption Formatter | KREVEXO",
  description:
    "Clean and format social media captions online. Fix spacing, organize paragraphs and move hashtags to the bottom with KREVEXO.",
};

export default function SocialCaptionFormatterPage() {
  return (
    <main className="single-tool-page">
      <section className="single-tool-hero">
        <div className="container">
          <span className="section-label">SOCIAL TOOLS</span>
          <h1>Social Caption Formatter</h1>
          <p>
            Turn messy social media captions into clean, readable content in
            seconds.
          </p>
        </div>
      </section>

      <section className="tool-workspace-section">
        <div className="container">
          <SocialCaptionFormatter />

          <div className="tool-info-content">
            <h2>How to format a social media caption</h2>
            <ol>
              <li>Paste your caption into the input box.</li>
              <li>Choose your formatting options.</li>
              <li>Click Format Caption.</li>
              <li>Review the cleaned version.</li>
              <li>Copy the formatted caption when you are ready.</li>
            </ol>

            <h2>What does the Caption Formatter clean?</h2>
            <p>
              KREVEXO can remove unnecessary spaces, reduce excessive blank
              lines and organize your caption into cleaner paragraphs. You can
              also move hashtags to the bottom of the caption.
            </p>

            <h2>Why format captions before publishing?</h2>
            <p>
              Cleaner spacing can make longer captions easier to scan and edit.
              Formatting your draft before publishing can also help keep the
              main message separate from hashtags and other supporting text.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}