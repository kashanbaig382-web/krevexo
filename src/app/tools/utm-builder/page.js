import UTMBuilder from "./UTMBuilder";

export const metadata = {
  title: "Free UTM Builder | KREVEXO",
  description:
    "Create campaign tracking URLs with UTM parameters using KREVEXO's free online UTM Builder.",
};

export default function UTMBuilderPage() {
  return (
    <main className="single-tool-page">
      <section className="single-tool-hero">
        <div className="container">
          <span className="section-label">MARKETING TOOLS</span>
          <h1>UTM Builder</h1>
          <p>
            Build clean campaign tracking URLs with UTM parameters in seconds.
          </p>
        </div>
      </section>

      <section className="tool-workspace-section">
        <div className="container">
          <UTMBuilder />

          <div className="tool-info-content">
            <h2>How to build a UTM tracking URL</h2>
            <ol>
              <li>Enter the destination website URL.</li>
              <li>Add your campaign source, medium and campaign name.</li>
              <li>Add optional term or content values when needed.</li>
              <li>Copy the generated campaign URL.</li>
            </ol>

            <h2>What are UTM parameters?</h2>
            <p>
              UTM parameters are values added to a URL to identify marketing
              traffic. They can help analytics tools distinguish between
              different campaign sources, mediums and campaign names.
            </p>

            <h2>What do the main UTM fields mean?</h2>
            <p>
              Campaign source identifies where traffic comes from, such as a
              newsletter or social platform. Medium describes the marketing
              channel, while campaign name identifies the specific promotion
              or campaign you want to track.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}