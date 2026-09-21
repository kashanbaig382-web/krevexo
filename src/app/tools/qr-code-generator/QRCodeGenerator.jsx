"use client";

import { useState } from "react";
import QRCode from "qrcode";

export default function QRCodeGenerator() {
  const [value, setValue] = useState("");
  const [size, setSize] = useState(300);
  const [qrImage, setQrImage] = useState("");
  const [error, setError] = useState("");

  async function generateQRCode() {
    const cleanValue = value.trim();

    if (!cleanValue) {
      setError("Please enter some content first.");
      setQrImage("");
      return;
    }

    try {
      const image = await QRCode.toDataURL(cleanValue, {
        width: Number(size),
        margin: 2,
        errorCorrectionLevel: "M",
      });

      setQrImage(image);
      setError("");
    } catch {
      setError("We couldn't generate this QR code. Please try again.");
      setQrImage("");
    }
  }

  function downloadQRCode() {
    if (!qrImage) return;

    const link = document.createElement("a");
    link.href = qrImage;
    link.download = "krevexo-qr-code.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  function clearAll() {
    setValue("");
    setSize(300);
    setQrImage("");
    setError("");
  }

  return (
    <div className="qr-generator-app">
      <div className="qr-builder">
        <div className="qr-builder-heading">
          <div>
            <span className="tool-category">QR CONTENT</span>
            <h2>Create your QR code</h2>
          </div>

          <span className="qr-free-label">No signup</span>
        </div>

        <label className="qr-content-field">
          <span>URL or text</span>

          <textarea
            value={value}
            onChange={(event) => {
              setValue(event.target.value);
              setQrImage("");
              setError("");
            }}
            placeholder="https://example.com"
            spellCheck="false"
          />
        </label>

        <div className="qr-size-area">
          <div>
            <span>QR Code Size</span>
            <small>Choose the PNG image size.</small>
          </div>

          <div className="qr-size-options">
            {[200, 300, 500, 800].map((option) => (
              <button
                key={option}
                type="button"
                className={size === option ? "active" : ""}
                onClick={() => {
                  setSize(option);
                  setQrImage("");
                }}
              >
                {option}px
              </button>
            ))}
          </div>
        </div>

        {error && <div className="qr-error">{error}</div>}

        <div className="qr-actions">
          <button
            className="qr-clear-btn"
            onClick={clearAll}
            disabled={!value && !qrImage}
          >
            Clear
          </button>

          <button
            className="qr-generate-btn"
            onClick={generateQRCode}
            disabled={!value.trim()}
          >
            Generate QR Code
          </button>
        </div>
      </div>

      <div className="qr-preview-box">
        <div className="qr-preview-heading">
          <div>
            <span className="tool-category">PREVIEW</span>
            <h2>Your QR code</h2>
          </div>

          {qrImage && <span className="qr-ready">✓ Ready</span>}
        </div>

        {qrImage ? (
          <>
            <div className="qr-image-area">
              <img
                src={qrImage}
                alt="Generated QR code"
                width={size}
                height={size}
              />
            </div>

            <p className="qr-scan-note">
              Scan the QR code before using it publicly to confirm that it
              contains the correct information.
            </p>

            <button
              className="qr-download-btn"
              onClick={downloadQRCode}
            >
              Download PNG
            </button>
          </>
        ) : (
          <div className="qr-empty-preview">
            <div className="qr-placeholder">
              <span>▦</span>
            </div>

            <p>Your generated QR code will appear here.</p>
          </div>
        )}
      </div>
    </div>
  );
}