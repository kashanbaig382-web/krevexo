import Link from "next/link";
import ImageCompressor from "./ImageCompressor";

export const metadata = {
  title: "Free Image Compressor - Compress Images Online",
  description:
    "Compress JPG, PNG and WebP images online for free. Reduce image file size directly in your browser with KREVEXO. No signup or software required.",
};

export default function ImageCompressorPage() {
  return (
    <main className="single-tool-page">
      <section className="single-tool-hero">
        <div className="container">
          <span className="section-label">FREE IMAGE TOOL</span>

          <h1>Free Image Compressor</h1>

          <p>
            Compress JPG, PNG and WebP images online to reduce file size.
            Fast, free and processed directly in your browser.
          </p>
        </div>
      </section>

      <section className="tool-workspace-section">
        <div className="container">
          <ImageCompressor />

          <div className="tool-info-content">
            <h2>Compress Images Online for Free</h2>

            <p>
              KREVEXO&apos;s free image compressor helps you reduce image file
              size without installing additional software. Upload an image,
              choose the compression quality and create a smaller version
              directly in your browser.
            </p>

            <p>
              Smaller images are useful for websites, blogs, social media,
              email attachments and other situations where large image files
              can slow down uploads or use unnecessary storage.
            </p>

            <h2>How to Compress an Image</h2>

            <ol>
              <li>Upload a JPG, PNG or WebP image.</li>
              <li>Select your preferred compression quality.</li>
              <li>Click the Compress Image button.</li>
              <li>Compare the original and compressed file sizes.</li>
              <li>Download the compressed image to your device.</li>
            </ol>

            <h2>Why Compress Image File Size?</h2>

            <p>
              Large image files can increase webpage loading time and take
              longer to upload or share. Image compression reduces the amount
              of storage required by an image, making the resulting file
              easier to use online.
            </p>

            <p>
              For website owners and creators, smaller images can also help
              reduce page weight while keeping images practical for normal
              web use.
            </p>

            <h2>Supported Image Formats</h2>

            <p>
              The KREVEXO Image Compressor accepts JPG, PNG and WebP images.
              Compressed results are exported as WebP, a modern image format
              designed to provide efficient file sizes for web use.
            </p>

            <h2>Browser-Based Image Compression</h2>

            <p>
              The main image compression process happens directly in your
              browser. You do not need to create a KREVEXO account or install
              desktop software to use the tool.
            </p>

            <h2>Image Compressor FAQ</h2>

            <h3>Is the KREVEXO Image Compressor free?</h3>
            <p>
              Yes. You can use the image compressor for free without creating
              an account.
            </p>

            <h3>Which image formats can I compress?</h3>
            <p>
              You can upload JPG, PNG and WebP images. The compressed result
              is exported as a WebP image.
            </p>

            <h3>Does image compression reduce quality?</h3>
            <p>
              Compression can reduce some image quality depending on the
              quality level you select. You can adjust the setting to balance
              visual quality and file size.
            </p>

            <h3>Why should I compress images for a website?</h3>
            <p>
              Smaller image files reduce the amount of data a browser needs to
              load. This can help reduce overall page size and improve loading
              efficiency.
            </p>

            <h3>Do I need to install anything?</h3>
            <p>
              No. The compressor works in your web browser, so no additional
              application or extension is required.
            </p>

            <div className="tool-related-section">
              <h2>Related Image Tools</h2>

              <p>
                Need to change image dimensions or calculate the correct
                proportions? Try another free KREVEXO image tool.
              </p>

              <div className="tool-related-links">
                <Link href="/tools/image-resizer">
                  Image Resizer →
                </Link>

                <Link href="/tools/aspect-ratio-calculator">
                  Aspect Ratio Calculator →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}