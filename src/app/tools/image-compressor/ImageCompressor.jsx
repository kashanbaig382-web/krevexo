"use client";

import { useEffect, useRef, useState } from "react";

export default function ImageCompressor() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [quality, setQuality] = useState(75);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const canvasRef = useRef(null);

  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
      if (result?.url) URL.revokeObjectURL(result.url);
    };
  }, [preview, result]);

  function formatBytes(bytes) {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;

    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  }

  function handleFile(event) {
    const selectedFile = event.target.files?.[0];

    setError("");
    setResult(null);

    if (!selectedFile) return;

    const allowedTypes = ["image/jpeg", "image/png", "image/webp"];

    if (!allowedTypes.includes(selectedFile.type)) {
      setError("Please upload a JPG, PNG or WebP image.");
      return;
    }

    if (selectedFile.size > 15 * 1024 * 1024) {
      setError("Please upload an image smaller than 15 MB.");
      return;
    }

    if (preview) URL.revokeObjectURL(preview);

    const objectUrl = URL.createObjectURL(selectedFile);

    setFile(selectedFile);
    setPreview(objectUrl);
  }

  function compressImage() {
    if (!file || !preview) return;

    setError("");

    const image = new Image();

    image.onload = () => {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");

      canvas.width = image.naturalWidth;
      canvas.height = image.naturalHeight;

      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(image, 0, 0);

      canvas.toBlob(
        (blob) => {
          if (!blob) {
            setError("We could not compress this image. Please try another.");
            return;
          }

          if (result?.url) {
            URL.revokeObjectURL(result.url);
          }

          const url = URL.createObjectURL(blob);

          setResult({
            blob,
            url,
            size: blob.size,
          });
        },
        "image/webp",
        quality / 100
      );
    };

    image.onerror = () => {
      setError("We could not read this image.");
    };

    image.src = preview;
  }

  function resetTool() {
    if (preview) URL.revokeObjectURL(preview);
    if (result?.url) URL.revokeObjectURL(result.url);

    setFile(null);
    setPreview("");
    setResult(null);
    setError("");
    setQuality(75);
  }

  const reduction =
    file && result && result.size < file.size
      ? Math.round((1 - result.size / file.size) * 100)
      : 0;

  return (
    <div className="compressor-app">
      {!file ? (
        <label className="upload-zone">
          <input
            type="file"
            accept="image/jpeg,image/png,image/webp"
            onChange={handleFile}
          />

          <div className="upload-icon">↑</div>
          <h2>Upload your image</h2>
          <p>Drag an image here or click to choose a file.</p>
          <span>JPG, PNG or WebP • Maximum 15 MB</span>
        </label>
      ) : (
        <div className="compressor-workspace">
          <div className="compressor-preview">
            <img src={preview} alt="Image selected for compression" />

            <div>
              <strong>{file.name}</strong>
              <span>{formatBytes(file.size)}</span>
            </div>
          </div>

          <div className="compression-settings">
            <div className="quality-heading">
              <div>
                <strong>Compression quality</strong>
                <span>
                  Higher quality usually creates a larger output file.
                </span>
              </div>

              <b>{quality}%</b>
            </div>

            <input
              className="quality-slider"
              type="range"
              min="20"
              max="95"
              value={quality}
              onChange={(event) => setQuality(Number(event.target.value))}
            />

            <button className="compress-btn" onClick={compressImage}>
              Compress Image
            </button>
          </div>

          {result && (
            <div className="compression-result">
              <div className="result-heading">
                <div>
                  <span className="result-check">✓</span>
                  <div>
                    <strong>Compression complete</strong>
                    <p>Your compressed image is ready.</p>
                  </div>
                </div>

                {reduction > 0 && (
                  <span className="saving-badge">{reduction}% smaller</span>
                )}
              </div>

              <div className="size-comparison">
                <div>
                  <span>Original</span>
                  <strong>{formatBytes(file.size)}</strong>
                </div>

                <span className="comparison-arrow">→</span>

                <div>
                  <span>Compressed</span>
                  <strong>{formatBytes(result.size)}</strong>
                </div>
              </div>

              {result.size >= file.size && (
                <p className="compression-note">
                  This image was already efficiently compressed, so the new
                  file may not be smaller. Try a lower quality setting.
                </p>
              )}

              <div className="result-actions">
                <a
                  href={result.url}
                  download={`krevexo-${file.name.replace(/\.[^/.]+$/, "")}.webp`}
                  className="download-btn"
                >
                  Download Image
                </a>

                <button className="reset-btn" onClick={resetTool}>
                  Compress Another
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {error && <p className="tool-error">{error}</p>}

      <canvas ref={canvasRef} className="hidden-canvas" />
    </div>
  );
}