import ImageResizer from "./ImageResizer";

export const metadata = {
  title: "Free Image Resizer | KREVEXO",
  description:
    "Resize JPG, PNG and WebP images online for free. Change image width and height directly in your browser.",
};

export default function ImageResizerPage() {
  return (
    <main className="single-tool-page">
      <section className="single-tool-hero">
        <div className="container">
          <span className="section-label">IMAGE TOOLS</span>
          <h1>Image Resizer</h1>
          <p>
            Resize images to custom dimensions directly in your browser while
            keeping control over the aspect ratio.
          </p>
        </div>
      </section>

      <section className="tool-workspace-section">
        <div className="container">
          <ImageResizer />

          <div className="tool-info-content">
            <h2>How to resize an image</h2>
            <ol>
              <li>Upload a JPG, PNG or WebP image.</li>
              <li>Enter your desired width or height.</li>
              <li>Keep aspect ratio locked to avoid distortion.</li>
              <li>Click Resize Image.</li>
              <li>Download the resized image.</li>
            </ol>

            <h2>Why keep the aspect ratio locked?</h2>
            <p>
              An image&apos;s aspect ratio describes the relationship between
              its width and height. Keeping it locked allows KREVEXO to
              automatically calculate the other dimension so the image does
              not become stretched or squashed.
            </p>

            <h2>Where can resized images be useful?</h2>
            <p>
              Image resizing is useful for website graphics, blog images,
              social media content, thumbnails, presentations and other
              situations where specific image dimensions are required.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}