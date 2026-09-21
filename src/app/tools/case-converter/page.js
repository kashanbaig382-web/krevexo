import CaseConverter from "./CaseConverter";

export const metadata = {
  title: "Free Case Converter | KREVEXO",
  description:
    "Convert text to uppercase, lowercase, title case, sentence case and alternating case instantly with KREVEXO.",
};

export default function CaseConverterPage() {
  return (
    <main className="single-tool-page">
      <section className="single-tool-hero">
        <div className="container">
          <span className="section-label">TEXT TOOLS</span>
          <h1>Case Converter</h1>
          <p>
            Convert your text between uppercase, lowercase, title case,
            sentence case and more in one click.
          </p>
        </div>
      </section>

      <section className="tool-workspace-section">
        <div className="container">
          <CaseConverter />

          <div className="tool-info-content">
            <h2>How to use the Case Converter</h2>
            <ol>
              <li>Type or paste your text into the editor.</li>
              <li>Select the case format you want.</li>
              <li>Your text is converted instantly.</li>
              <li>Copy the converted result when you are finished.</li>
            </ol>

            <h2>Available text case formats</h2>
            <p>
              KREVEXO can convert text to uppercase, lowercase, title case,
              sentence case and alternating case. You can also capitalize the
              first letter of every word.
            </p>

            <h2>When is a case converter useful?</h2>
            <p>
              A case converter can save time when formatting headings,
              captions, titles, documents, product descriptions and other
              written content without manually changing capitalization.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}