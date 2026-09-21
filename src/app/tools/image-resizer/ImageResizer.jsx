"use client";

import { useEffect, useRef, useState } from "react";

export default function ImageResizer() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [originalWidth, setOriginalWidth] = useState(0);
  const [originalHeight, setOriginalHeight] = useState(0);
  const [locked, setLocked] = useState(true);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const canvasRef = useRef(null);
  const ratioRef = useRef(1);

  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
      if (result?.url) URL.revokeObjectURL(result.url);
    };
  }, [preview, result]);

  function handleFile(event) {
    const selectedFile = event.target.files?.[0];

    setError("");
    setResult(null);

    if (!selectedFile) return;

    const allowed = ["image/jpeg", "image/png", "image/webp"];

    if (!allowed.includes(selectedFile.type)) {
      setError("Please upload a JPG, PNG or WebP image.");
      return;
    }

    if (selectedFile.size > 15 * 1024 * 1024) {
      setError("Please upload an image smaller than 15 MB.");
      return;
    }

    if (preview) URL.revokeObjectURL(preview);

    const url = URL.createObjectURL(selectedFile);
    const image = new Image();

    image.onload = () => {
      setOriginalWidth(image.naturalWidth);
      setOriginalHeight(image.naturalHeight);

      ratioRef.current = image.naturalWidth / image.naturalHeight;

      setWidth(image.naturalWidth);
      setHeight(image.naturalHeight);
      setFile(selectedFile);
      setPreview(url);
    };

    image.onerror = () => {
      URL.revokeObjectURL(url);
      setError("We could not read this image.");
    };

    image.src = url;
  }

  function changeWidth(value) {
    const newWidth = Number(value);

    setWidth(value);
    setResult(null);

    if (locked && newWidth > 0) {
      setHeight(Math.round(newWidth / ratioRef.current));
    }
  }

  function changeHeight(value) {
    const newHeight = Number(value);

    setHeight(value);
    setResult(null);

    if (locked && newHeight > 0) {
      setWidth(Math.round(newHeight * ratioRef.current));
    }
  }

  function resizeImage() {
    const finalWidth = Number(width);
    const finalHeight = Number(height);

    if (!file || !preview) return;

    if (
      !Number.isFinite(finalWidth) ||
      !Number.isFinite(finalHeight) ||
      finalWidth < 1 ||
      finalHeight < 1 ||
      finalWidth > 10000 ||
      finalHeight > 10000
    ) {
      setError("Enter dimensions between 1 and 10,000 pixels.");
      return;
    }

    setError("");

    const image = new Image();

    image.onload = () => {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");

      canvas.width = finalWidth;
      canvas.height = finalHeight;

      context.clearRect(0, 0, finalWidth, finalHeight);
      context.drawImage(image, 0, 0, finalWidth, finalHeight);

      canvas.toBlob(
        (blob) => {
          if (!blob) {
            setError("We could not resize this image.");
            return;
          }

          if (result?.url) URL.revokeObjectURL(result.url);

          setResult({
            url: URL.createObjectURL(blob),
            width: finalWidth,
            height: finalHeight,
          });
        },
        "image/webp",
        0.92
      );
    };

    image.onerror = () => {
      setError("We could not process this image.");
    };

    image.src = preview;
  }

  function resetTool() {
    if (preview) URL.revokeObjectURL(preview);
    if (result?.url) URL.revokeObjectURL(result.url);

    setFile(null);
    setPreview("");
    setWidth("");
    setHeight("");
    setOriginalWidth(0);
    setOriginalHeight(0);
    setLocked(true);
    setResult(null);
    setError("");
  }

  return (
    <div className="resizer-app">
      {!file ? (
        <label className="upload-zone">
          <input
            type="file"
            accept="image/jpeg,image/png,image/webp"
            onChange={handleFile}
          />

          <div className="upload-icon">↔</div>
          <h2>Upload your image</h2>
          <p>Click to choose the image you want to resize.</p>
          <span>JPG, PNG or WebP • Maximum 15 MB</span>
        </label>
      ) : (
        <div className="compressor-workspace">
          <div className="resizer-preview">
            <img src={preview} alt="Image selected for resizing" />

            <div>
              <strong>{file.name}</strong>
              <span>
                Original: {originalWidth} × {originalHeight}px
              </span>
            </div>
          </div>

          <div className="dimensions-area">
            <div className="dimensions-heading">
              <div>
                <strong>New dimensions</strong>
                <span>Maximum 10,000 × 10,000 pixels</span>
              </div>

              <button
                type="button"
                className={`ratio-toggle ${locked ? "active" : ""}`}
                onClick={() => setLocked((current) => !current)}
              >
                {locked ? "🔒 Ratio locked" : "🔓 Ratio unlocked"}
              </button>
            </div>

            <div className="dimension-inputs">
              <label>
                <span>Width</span>
                <div>
                  <input
                    type="number"
                    min="1"
                    max="10000"
                    value={width}
                    onChange={(event) => changeWidth(event.target.value)}
                  />
                  <b>px</b>
                </div>
              </label>

              <span className="dimension-x">×</span>

              <label>
                <span>Height</span>
                <div>
                  <input
                    type="number"
                    min="1"
                    max="10000"
                    value={height}
                    onChange={(event) => changeHeight(event.target.value)}
                  />
                  <b>px</b>
                </div>
              </label>
            </div>

            <button className="compress-btn" onClick={resizeImage}>
              Resize Image
            </button>
          </div>

          {result && (
            <div className="compression-result">
              <div className="result-heading">
                <div>
                  <span className="result-check">✓</span>
                  <div>
                    <strong>Image resized</strong>
                    <p>
                      {result.width} × {result.height}px
                    </p>
                  </div>
                </div>
              </div>

              <div className="resized-preview">
                <img src={result.url} alt="Resized result" />
              </div>

              <div className="result-actions">
                <a
                  href={result.url}
                  download={`krevexo-resized-${file.name.replace(
                    /\.[^/.]+$/,
                    ""
                  )}.webp`}
                  className="download-btn"
                >
                  Download Image
                </a>

                <button className="reset-btn" onClick={resetTool}>
                  Resize Another
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