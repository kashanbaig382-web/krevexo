import CharacterCounter from "./CharacterCounter";

export const metadata = {
  title: "Free Character Counter | KREVEXO",
  description:
    "Count characters, characters without spaces and words instantly with KREVEXO's free online character counter.",
};

export default function CharacterCounterPage() {
  return (
    <main className="single-tool-page">
      <section className="single-tool-hero">
        <div className="container">
          <span className="section-label">TEXT TOOLS</span>
          <h1>Character Counter</h1>
          <p>
            Count characters instantly and check your text against common
            content limits while you type.
          </p>
        </div>
      </section>

      <section className="tool-workspace-section">
        <div className="container">
          <CharacterCounter />

          <div className="tool-info-content">
            <h2>How to use the Character Counter</h2>
            <ol>
              <li>Type or paste your text into the editor.</li>
              <li>Character and word counts update automatically.</li>
              <li>Select a character limit or enter your own custom limit.</li>
              <li>Check how many characters you have remaining.</li>
            </ol>

            <h2>What counts as a character?</h2>
            <p>
              Characters include letters, numbers, punctuation marks and
              spaces. KREVEXO also shows a separate count that excludes
              whitespace.
            </p>

            <h2>Why check character limits?</h2>
            <p>
              Character limits are useful when preparing headlines,
              descriptions, captions, form fields and other content where
              available space is limited.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}