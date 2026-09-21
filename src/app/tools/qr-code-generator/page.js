import QRCodeGenerator from "./QRCodeGenerator";

export const metadata = {
  title: "Free QR Code Generator | KREVEXO",
  description:
    "Create and download QR codes for URLs, text and other content with KREVEXO's free online QR Code Generator.",
};

export default function QRCodeGeneratorPage() {
  return (
    <main className="single-tool-page">
      <section className="single-tool-hero">
        <div className="container">
          <span className="section-label">UTILITY TOOLS</span>
          <h1>QR Code Generator</h1>
          <p>
            Create a clean QR code from a URL or text and download it as a PNG
            image.
          </p>
        </div>
      </section>

      <section className="tool-workspace-section">
        <div className="container">
          <QRCodeGenerator />

          <div className="tool-info-content">
            <h2>How to create a QR code</h2>
            <ol>
              <li>Enter a website URL, text or other content.</li>
              <li>Choose the QR code size.</li>
              <li>Click Generate QR Code.</li>
              <li>Scan the preview to test it.</li>
              <li>Download the finished QR code as a PNG image.</li>
            </ol>

            <h2>What can I put inside a QR code?</h2>
            <p>
              You can encode website links, plain text and many other short
              text-based values. When someone scans the QR code, their device
              can read the information stored inside it.
            </p>

            <h2>Do I need an account?</h2>
            <p>
              No. KREVEXO generates the QR code directly when you use the tool,
              and no account is required.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}