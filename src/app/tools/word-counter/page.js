import Link from "next/link";
import WordCounter from "./WordCounter";

export const metadata = {
  title: "Free Word Counter - Count Words & Characters Online",
  description:
    "Count words, characters, sentences and paragraphs online for free. Get instant text statistics and estimated reading time with KREVEXO.",
};

export default function WordCounterPage() {
  return (
    <main className="single-tool-page">
      <section className="single-tool-hero">
        <div className="container">
          <span className="section-label">FREE TEXT TOOL</span>

          <h1>Free Online Word Counter</h1>

          <p>
            Count words, characters, sentences and paragraphs instantly.
            Paste or type your text and get real-time statistics for free.
          </p>
        </div>
      </section>

      <section className="tool-workspace-section">
        <div className="container">
          <WordCounter />

          <div className="tool-info-content">
            <h2>Count Words and Characters Online</h2>

            <p>
              KREVEXO&apos;s free Word Counter gives you instant statistics
              for any text you type or paste. You can quickly check the number
              of words, characters, sentences and paragraphs without manually
              counting your content.
            </p>

            <p>
              The tool can be useful for articles, essays, assignments,
              captions, product descriptions, social media posts and other
              writing where length matters.
            </p>

            <h2>How to Use the Word Counter</h2>

            <ol>
              <li>Type or paste your text into the text box.</li>
              <li>Your text statistics update automatically.</li>
              <li>Check the word and character counts.</li>
              <li>Review the sentence and paragraph totals.</li>
              <li>Use Clear Text when you want to start again.</li>
            </ol>

            <h2>What Does the Word Counter Measure?</h2>

            <p>
              KREVEXO analyzes your text and displays several useful
              statistics, including the total number of words and characters.
              It also provides sentence and paragraph counts along with an
              estimated reading time.
            </p>

            <p>
              Having these statistics in one place makes it easier to check
              content against length requirements or understand the overall
              size of a piece of writing.
            </p>

            <h2>When Is a Word Counter Useful?</h2>

            <p>
              Word counts are commonly useful when writing content with a
              minimum or maximum length. Students may need to check assignment
              lengths, while writers and marketers may use word counts when
              preparing articles, descriptions or other content.
            </p>

            <p>
              Character counts can also be useful when writing text for
              platforms, forms or fields that have character limits.
            </p>

            <h2>How Is Reading Time Estimated?</h2>

            <p>
              KREVEXO estimates reading time using an average reading speed of
              approximately 200 words per minute. The result is only an
              estimate because actual reading speed varies depending on the
              reader and the complexity of the text.
            </p>

            <h2>Word Counter FAQ</h2>

            <h3>Is the KREVEXO Word Counter free?</h3>
            <p>
              Yes. You can use the Word Counter for free without creating an
              account.
            </p>

            <h3>Does the word count update automatically?</h3>
            <p>
              Yes. The statistics update as you type or paste text into the
              tool.
            </p>

            <h3>Does the tool count characters?</h3>
            <p>
              Yes. In addition to words, the tool displays character,
              sentence and paragraph counts.
            </p>

            <h3>Can I use the Word Counter for essays and assignments?</h3>
            <p>
              Yes. It can help you check the length of essays, assignments and
              other written content. Always follow the specific counting rules
              required by your school, platform or publisher.
            </p>

            <h3>Is reading time exact?</h3>
            <p>
              No. Reading time is an estimate based on approximately 200 words
              per minute, and individual reading speeds can vary.
            </p>

            <div className="tool-related-section">
              <h2>Related Text Tools</h2>

              <p>
                Need more control over your text? Try another free KREVEXO
                text tool.
              </p>

              <div className="tool-related-links">
                <Link href="/tools/character-counter">
                  Character Counter →
                </Link>

                <Link href="/tools/case-converter">
                  Case Converter →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}