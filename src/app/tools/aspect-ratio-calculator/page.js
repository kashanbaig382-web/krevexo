import Link from "next/link";
import AspectRatioCalculator from "./AspectRatioCalculator";

export const metadata = {
  title: "Free Aspect Ratio Calculator - Calculate Image Dimensions",
  description:
    "Calculate aspect ratio and proportional image dimensions online for free. Enter width and height to resize images without changing their proportions.",
};

export default function AspectRatioCalculatorPage() {
  return (
    <main className="single-tool-page">
      <section className="single-tool-hero">
        <div className="container">
          <span className="section-label">FREE IMAGE TOOL</span>

          <h1>Free Aspect Ratio Calculator</h1>

          <p>
            Calculate proportional width and height while preserving the
            original aspect ratio of your image, video or screen.
          </p>
        </div>
      </section>

      <section className="tool-workspace-section">
        <div className="container">
          <AspectRatioCalculator />

          <div className="tool-info-content">
            <h2>Calculate Aspect Ratio and Image Dimensions</h2>

            <p>
              KREVEXO&apos;s free aspect ratio calculator helps you calculate
              proportional image dimensions when changing width or height.
              Enter the original dimensions and a new width or height to find
              the matching dimension automatically.
            </p>

            <p>
              This is useful when resizing images, videos, thumbnails, website
              graphics and other visual content without changing their
              original proportions.
            </p>

            <h2>How to Use the Aspect Ratio Calculator</h2>

            <ol>
              <li>Enter the original width of your image.</li>
              <li>Enter the original height.</li>
              <li>Enter either your desired new width or new height.</li>
              <li>
                KREVEXO calculates the matching dimension automatically.
              </li>
              <li>Use the calculated dimensions when resizing your content.</li>
            </ol>

            <h2>What Is an Aspect Ratio?</h2>

            <p>
              An aspect ratio describes the proportional relationship between
              the width and height of an image, video or screen. It is commonly
              written as two numbers separated by a colon, such as 16:9, 4:3
              or 1:1.
            </p>

            <p>
              For example, an image that is 1920 pixels wide and 1080 pixels
              high uses a 16:9 aspect ratio. Smaller dimensions can maintain
              the same proportions as long as the relationship between width
              and height stays the same.
            </p>

            <h2>Why Preserve the Aspect Ratio?</h2>

            <p>
              Preserving the original aspect ratio helps prevent visual
              distortion when dimensions are changed. If width and height are
              changed independently, an image may appear stretched, squashed
              or otherwise distorted.
            </p>

            <p>
              Calculating proportional dimensions lets you resize visual
              content while maintaining its intended shape.
            </p>

            <h2>Common Aspect Ratios</h2>

            <p>
              Different types of visual content often use different
              proportions. Common examples include 1:1 for square content,
              16:9 for widescreen content and 4:3 for more traditional image
              or display dimensions.
            </p>

            <p>
              The correct dimensions depend on where your content will be
              used, so an aspect ratio calculator can help when you need to
              scale an existing size proportionally.
            </p>

            <h2>Aspect Ratio Calculator FAQ</h2>

            <h3>Is the KREVEXO Aspect Ratio Calculator free?</h3>
            <p>
              Yes. You can calculate proportional dimensions for free without
              creating an account.
            </p>

            <h3>How do I calculate a new height from a new width?</h3>
            <p>
              Enter the original width and height, then enter your desired new
              width. The calculator determines the proportional new height.
            </p>

            <h3>Can I calculate a new width from a new height?</h3>
            <p>
              Yes. Enter the original dimensions and your desired new height
              to calculate the corresponding width.
            </p>

            <h3>What does a 16:9 aspect ratio mean?</h3>
            <p>
              A 16:9 ratio means that for every 16 units of width, there are
              9 units of height. For example, 1920 × 1080 uses a 16:9 ratio.
            </p>

            <h3>Why does an image look stretched after resizing?</h3>
            <p>
              This usually happens when the width and height are changed
              without preserving their original proportional relationship.
            </p>

            <div className="tool-related-section">
              <h2>Related Image Tools</h2>

              <p>
                Once you know the dimensions you need, resize your image or
                reduce its file size with another free KREVEXO tool.
              </p>

              <div className="tool-related-links">
                <Link href="/tools/image-resizer">
                  Image Resizer →
                </Link>

                <Link href="/tools/image-compressor">
                  Image Compressor →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}