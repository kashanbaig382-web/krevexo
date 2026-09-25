import Link from "next/link";
import QRCodeGenerator from "./QRCodeGenerator";

export const metadata = {
  title: "Free QR Code Generator - Create QR Codes Online",
  description:
    "Create QR codes online for free from URLs or text. Generate, preview and download your QR code as a PNG image with KREVEXO. No signup required.",
};

export default function QRCodeGeneratorPage() {
  return (
    <main className="single-tool-page">
      <section className="single-tool-hero">
        <div className="container">
          <span className="section-label">FREE UTILITY TOOL</span>

          <h1>Free Online QR Code Generator</h1>

          <p>
            Create a QR code from a website URL or text, preview the result
            and download it as a PNG image for free.
          </p>
        </div>
      </section>

      <section className="tool-workspace-section">
        <div className="container">
          <QRCodeGenerator />

          <div className="tool-info-content">
            <h2>Create a QR Code Online for Free</h2>

            <p>
              KREVEXO&apos;s free QR Code Generator lets you turn a website
              URL or text into a QR code directly in your browser. Enter the
              content you want to encode, select a size and generate your QR
              code in seconds.
            </p>

            <p>
              Once generated, you can preview the QR code, test it with a
              compatible scanner and download the finished result as a PNG
              image.
            </p>

            <h2>How to Create a QR Code</h2>

            <ol>
              <li>Enter a website URL, text or other supported text value.</li>
              <li>Choose the QR code size you want.</li>
              <li>Click the Generate QR Code button.</li>
              <li>Scan the preview to make sure it works as expected.</li>
              <li>Download the finished QR code as a PNG image.</li>
            </ol>

            <h2>What Is a QR Code?</h2>

            <p>
              A QR code is a two-dimensional code that can store information
              in a pattern that compatible devices can scan and read.
            </p>

            <p>
              QR codes are commonly used to make information such as website
              links easier to access without manually typing the full text or
              URL.
            </p>

            <h2>What Can I Put in a QR Code?</h2>

            <p>
              You can use the KREVEXO QR Code Generator to encode website
              URLs, plain text and other short text-based values supported by
              the generator.
            </p>

            <p>
              When the QR code is scanned, the scanning application can read
              the information stored inside it. How that information is
              handled depends on the content and the scanning device or app.
            </p>

            <h2>QR Codes for Website URLs</h2>

            <p>
              A website URL can be converted into a QR code so people can scan
              the code instead of manually entering the address.
            </p>

            <p>
              Before sharing or printing a generated QR code, scan it yourself
              to confirm that it contains the correct destination URL.
            </p>

            <h2>Download Your QR Code as PNG</h2>

            <p>
              After generating the QR code, you can download it as a PNG image
              and save it to your device for later use.
            </p>

            <p>
              Always test the downloaded QR code before using it in important
              digital or printed materials.
            </p>

            <h2>QR Code Generator FAQ</h2>

            <h3>Is the KREVEXO QR Code Generator free?</h3>
            <p>
              Yes. You can generate and download QR codes for free without
              creating a KREVEXO account.
            </p>

            <h3>Can I create a QR code for a website?</h3>
            <p>
              Yes. Enter the complete website URL into the generator and
              create a QR code containing that address.
            </p>

            <h3>Can I create a QR code from plain text?</h3>
            <p>
              Yes. The generator can encode plain text and other supported
              text-based values.
            </p>

            <h3>Can I download my QR code?</h3>
            <p>
              Yes. Generated QR codes can be downloaded as PNG images.
            </p>

            <h3>Do I need an account?</h3>
            <p>
              No. You do not need to create an account to use the QR Code
              Generator.
            </p>

            <h3>Should I test the QR code before using it?</h3>
            <p>
              Yes. Scan the generated QR code before publishing, sharing or
              printing it to make sure it contains the information you
              intended.
            </p>

            <div className="tool-related-section">
              <h2>Related KREVEXO Tools</h2>

              <p>
                Building a marketing campaign? Create a tracking URL first,
                then turn that URL into a QR code.
              </p>

              <div className="tool-related-links">
                <Link href="/tools/utm-builder">
                  UTM Builder →
                </Link>

                <Link href="/tools/image-resizer">
                  Image Resizer →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}