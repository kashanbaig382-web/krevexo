import Link from "next/link";
import CaseConverter from "./CaseConverter";

export const metadata = {
  title: "Free Case Converter - Convert Text Case Online",
  description:
    "Convert text to uppercase, lowercase, title case, sentence case and alternating case online for free with KREVEXO. No signup required.",
};

export default function CaseConverterPage() {
  return (
    <main className="single-tool-page">
      <section className="single-tool-hero">
        <div className="container">
          <span className="section-label">FREE TEXT TOOL</span>

          <h1>Free Online Case Converter</h1>

          <p>
            Convert text to uppercase, lowercase, title case, sentence case
            and more instantly with our free online text case converter.
          </p>
        </div>
      </section>

      <section className="tool-workspace-section">
        <div className="container">
          <CaseConverter />

          <div className="tool-info-content">
            <h2>Convert Text Case Online for Free</h2>

            <p>
              KREVEXO&apos;s free Case Converter lets you quickly change the
              capitalization of any text. Paste or type your content, choose
              the case format you need and convert it instantly without
              manually rewriting your text.
            </p>

            <p>
              The tool is useful for headings, titles, captions, documents,
              product descriptions, social media content and other writing
              where consistent capitalization is important.
            </p>

            <h2>How to Use the Case Converter</h2>

            <ol>
              <li>Type or paste your text into the editor.</li>
              <li>Select the text case format you want.</li>
              <li>Your text is converted instantly.</li>
              <li>Review the converted text.</li>
              <li>Copy the result when you are finished.</li>
            </ol>

            <h2>Available Text Case Formats</h2>

            <p>
              KREVEXO provides several common capitalization formats,
              including uppercase, lowercase, title case, sentence case and
              alternating case. You can also capitalize the first letter of
              each word.
            </p>

            <h3>UPPERCASE</h3>
            <p>
              Uppercase converts letters to capital letters. It can be useful
              for short labels, headings or text that specifically requires
              all-capital formatting.
            </p>

            <h3>lowercase</h3>
            <p>
              Lowercase converts letters to their lowercase form, making it
              useful when you need to remove inconsistent capitalization from
              text.
            </p>

            <h3>Title Case</h3>
            <p>
              Title case capitalizes words to create title-style formatting.
              It can be useful as a starting point for headings and titles,
              although specific style guides may use different capitalization
              rules.
            </p>

            <h3>Sentence case</h3>
            <p>
              Sentence case formats text in a sentence-style structure,
              helping you quickly normalize text that has inconsistent
              capitalization.
            </p>

            <h3>Alternating Case</h3>
            <p>
              Alternating case changes capitalization between letters to
              create a stylized text effect.
            </p>

            <h2>When Is a Case Converter Useful?</h2>

            <p>
              Manually changing capitalization can take time, especially when
              working with longer pieces of text. A case converter lets you
              quickly reformat existing content instead of typing it again.
            </p>

            <p>
              This can be useful when preparing headings, captions, titles,
              notes, descriptions and other digital content.
            </p>

            <h2>Case Converter FAQ</h2>

            <h3>Is the KREVEXO Case Converter free?</h3>
            <p>
              Yes. You can use the Case Converter for free without creating an
              account.
            </p>

            <h3>Can I convert text to uppercase?</h3>
            <p>
              Yes. Paste or type your text and select the uppercase option to
              convert letters to capital letters.
            </p>

            <h3>Can I convert uppercase text to lowercase?</h3>
            <p>
              Yes. Select the lowercase option to convert your text to
              lowercase.
            </p>

            <h3>Can I convert text to title case?</h3>
            <p>
              Yes. The tool includes a title case option for quickly creating
              title-style capitalization.
            </p>

            <h3>Do I need to install anything?</h3>
            <p>
              No. The Case Converter works directly in your browser and does
              not require additional software.
            </p>

            <div className="tool-related-section">
              <h2>Related Text Tools</h2>

              <p>
                Check your text length and writing statistics with other free
                KREVEXO text tools.
              </p>

              <div className="tool-related-links">
                <Link href="/tools/word-counter">
                  Word Counter →
                </Link>

                <Link href="/tools/character-counter">
                  Character Counter →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}