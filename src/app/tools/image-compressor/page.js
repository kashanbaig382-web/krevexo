import ImageCompressor from "./ImageCompressor";

export const metadata = {
  title: "Free Image Compressor | KREVEXO",
  description:
    "Compress JPG, PNG and WebP images online for free. Reduce image file size directly in your browser without signing up.",
};

export default function ImageCompressorPage() {
  return (
    <main className="single-tool-page">
      <section className="single-tool-hero">
        <div className="container">
          <span className="section-label">IMAGE TOOLS</span>
          <h1>Image Compressor</h1>
          <p>
            Reduce image file size directly in your browser while keeping
            control over image quality.
          </p>
        </div>
      </section>

      <section className="tool-workspace-section">
        <div className="container">
          <ImageCompressor />

          <div className="tool-info-content">
            <h2>How to compress an image</h2>
            <ol>
              <li>Upload a JPG, PNG or WebP image.</li>
              <li>Choose your preferred compression quality.</li>
              <li>Click Compress Image.</li>
              <li>Compare the original and compressed file sizes.</li>
              <li>Download the compressed image.</li>
            </ol>

            <h2>Why compress images?</h2>
            <p>
              Smaller image files can make websites faster, reduce upload
              times and use less storage. KREVEXO processes the image directly
              in your browser, so you can quickly create a smaller copy without
              installing additional software.
            </p>

            <h2>Supported image formats</h2>
            <p>
              The compressor accepts JPG, PNG and WebP images. The compressed
              result is exported as a WebP image for efficient file size and
              broad modern browser support.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}