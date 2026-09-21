import WordCounter from "./WordCounter";

export const metadata = {
  title: "Free Word Counter | KREVEXO",
  description:
    "Count words, characters, sentences and paragraphs instantly with KREVEXO's free online word counter.",
};

export default function WordCounterPage() {
  return (
    <main className="single-tool-page">
      <section className="single-tool-hero">
        <div className="container">
          <span className="section-label">TEXT TOOLS</span>
          <h1>Word Counter</h1>
          <p>
            Count words, characters, sentences and paragraphs instantly as you
            type or paste your text.
          </p>
        </div>
      </section>

      <section className="tool-workspace-section">
        <div className="container">
          <WordCounter />

          <div className="tool-info-content">
            <h2>How to use the Word Counter</h2>
            <ol>
              <li>Type or paste your text into the text box.</li>
              <li>Your statistics update automatically.</li>
              <li>Check words, characters, sentences and paragraphs.</li>
              <li>Use Clear Text when you want to start again.</li>
            </ol>

            <h2>What does the Word Counter measure?</h2>
            <p>
              KREVEXO counts the words and characters in your text and also
              provides sentence, paragraph and reading-time estimates. This can
              be useful when working with articles, assignments, captions,
              descriptions and other written content.
            </p>

            <h2>How is reading time estimated?</h2>
            <p>
              Reading time is estimated using an average reading speed of about
              200 words per minute. Actual reading speed can vary depending on
              the reader and the complexity of the text.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}