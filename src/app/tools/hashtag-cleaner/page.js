import HashtagCleaner from "./HashtagCleaner";

export const metadata = {
  title: "Free Hashtag Cleaner | KREVEXO",
  description:
    "Clean, organize and remove duplicate hashtags instantly with KREVEXO's free online Hashtag Cleaner.",
};

export default function HashtagCleanerPage() {
  return (
    <main className="single-tool-page">
      <section className="single-tool-hero">
        <div className="container">
          <span className="section-label">SOCIAL TOOLS</span>
          <h1>Hashtag Cleaner</h1>
          <p>
            Turn messy hashtag lists into clean, organized hashtags in seconds.
          </p>
        </div>
      </section>

      <section className="tool-workspace-section">
        <div className="container">
          <HashtagCleaner />

          <div className="tool-info-content">
            <h2>How to clean your hashtags</h2>
            <ol>
              <li>Paste your hashtag list into the input box.</li>
              <li>Choose whether you want lowercase hashtags.</li>
              <li>Click Clean Hashtags.</li>
              <li>Review the cleaned result and copy it.</li>
            </ol>

            <h2>What does the Hashtag Cleaner do?</h2>
            <p>
              KREVEXO removes duplicate hashtags, unnecessary commas, repeated
              hash symbols and extra spacing. It then creates a cleaner hashtag
              list that is easier to copy and reuse.
            </p>

            <h2>Why remove duplicate hashtags?</h2>
            <p>
              Duplicate hashtags add unnecessary clutter to a hashtag list.
              Cleaning them makes your saved hashtag groups easier to manage
              and edit before publishing content.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}