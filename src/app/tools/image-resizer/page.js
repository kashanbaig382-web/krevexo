import Link from "next/link";
import ImageResizer from "./ImageResizer";

export const metadata = {
  title: "Free Image Resizer - Resize Images Online",
  description:
    "Resize JPG, PNG and WebP images online for free. Change image width and height, keep the aspect ratio and download your resized image. No signup required.",
};

export default function ImageResizerPage() {
  return (
    <main className="single-tool-page">
      <section className="single-tool-hero">
        <div className="container">
          <span className="section-label">FREE IMAGE TOOL</span>

          <h1>Free Image Resizer</h1>

          <p>
            Resize JPG, PNG and WebP images online to custom dimensions.
            Change width and height directly in your browser for free.
          </p>
        </div>
      </section>

      <section className="tool-workspace-section">
        <div className="container">
          <ImageResizer />

          <div className="tool-info-content">
            <h2>Resize Images Online for Free</h2>

            <p>
              KREVEXO&apos;s free image resizer lets you change the width and
              height of an image directly in your browser. Upload an image,
              enter the dimensions you need and download the resized result
              without installing additional software.
            </p>

            <p>
              You can resize images for websites, blog posts, social media,
              thumbnails, presentations and other projects that require
              specific image dimensions.
            </p>

            <h2>How to Resize an Image</h2>

            <ol>
              <li>Upload a JPG, PNG or WebP image.</li>
              <li>Enter your desired image width or height.</li>
              <li>Keep the aspect ratio locked if you want to avoid distortion.</li>
              <li>Click the Resize Image button.</li>
              <li>Download the resized image to your device.</li>
            </ol>

            <h2>Resize Image Width and Height</h2>

            <p>
              Image dimensions are usually measured in pixels. Changing the
              width and height allows you to create an image that better fits
              the space where you plan to use it.
            </p>

            <p>
              If you already know the exact dimensions you need, enter them
              into the resizer. When aspect ratio locking is enabled, changing
              one dimension can automatically adjust the other to preserve the
              image&apos;s original proportions.
            </p>

            <h2>Why Keep the Aspect Ratio Locked?</h2>

            <p>
              An image&apos;s aspect ratio describes the relationship between
              its width and height. If width and height are changed
              independently, the image can become stretched or squashed.
            </p>

            <p>
              Keeping the aspect ratio locked helps maintain the original
              proportions while resizing the image.
            </p>

            <h2>When Is Image Resizing Useful?</h2>

            <p>
              Resizing can be useful when an image is too large or too small
              for a particular layout. Common uses include website graphics,
              blog images, social media content, thumbnails, presentations
              and other digital projects.
            </p>

            <h2>Supported Image Formats</h2>

            <p>
              The KREVEXO Image Resizer accepts JPG, PNG and WebP images, so
              you can quickly resize common web image formats without needing
              dedicated image editing software.
            </p>

            <h2>Image Resizer FAQ</h2>

            <h3>Is the KREVEXO Image Resizer free?</h3>
            <p>
              Yes. You can resize images for free without creating a KREVEXO
              account.
            </p>

            <h3>Can I resize an image to custom dimensions?</h3>
            <p>
              Yes. You can enter the width and height required for your image
              and create a resized version.
            </p>

            <h3>Will resizing an image stretch it?</h3>
            <p>
              An image can become distorted if its width and height are
              changed without preserving its proportions. Keeping the aspect
              ratio locked helps prevent stretching or squashing.
            </p>

            <h3>Which image formats are supported?</h3>
            <p>
              You can upload JPG, PNG and WebP images to the KREVEXO Image
              Resizer.
            </p>

            <h3>Do I need to install image editing software?</h3>
            <p>
              No. The image resizer works directly in your browser and does
              not require additional software.
            </p>

            <div className="tool-related-section">
              <h2>Related Image Tools</h2>

              <p>
                Need a smaller file size or want to calculate image
                proportions? Try these free KREVEXO tools.
              </p>

              <div className="tool-related-links">
                <Link href="/tools/image-compressor">
                  Image Compressor →
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