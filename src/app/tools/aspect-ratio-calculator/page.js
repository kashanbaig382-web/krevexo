import AspectRatioCalculator from "./AspectRatioCalculator";

export const metadata = {
  title: "Aspect Ratio Calculator | KREVEXO",
  description:
    "Calculate image dimensions and aspect ratios online for free. Resize width or height while preserving the original proportions.",
};

export default function AspectRatioCalculatorPage() {
  return (
    <main className="single-tool-page">
      <section className="single-tool-hero">
        <div className="container">
          <span className="section-label">IMAGE TOOLS</span>
          <h1>Aspect Ratio Calculator</h1>
          <p>
            Calculate proportional image dimensions while keeping the original
            width-to-height ratio intact.
          </p>
        </div>
      </section>

      <section className="tool-workspace-section">
        <div className="container">
          <AspectRatioCalculator />

          <div className="tool-info-content">
            <h2>How to use the aspect ratio calculator</h2>
            <ol>
              <li>Enter the original width and height.</li>
              <li>Enter either a new width or a new height.</li>
              <li>KREVEXO calculates the matching dimension automatically.</li>
              <li>Use the calculated dimensions when resizing your image.</li>
            </ol>

            <h2>What is an aspect ratio?</h2>
            <p>
              An aspect ratio describes the proportional relationship between
              the width and height of an image or screen. For example, 1920 ×
              1080 has a 16:9 aspect ratio.
            </p>

            <h2>Why preserve aspect ratio?</h2>
            <p>
              Preserving the original ratio helps prevent images from looking
              stretched, compressed or distorted when their dimensions are
              changed.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}