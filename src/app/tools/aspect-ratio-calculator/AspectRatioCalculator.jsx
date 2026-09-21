"use client";

import { useMemo, useState } from "react";

function gcd(a, b) {
  a = Math.abs(Math.round(a));
  b = Math.abs(Math.round(b));

  while (b) {
    const temp = b;
    b = a % b;
    a = temp;
  }

  return a || 1;
}

export default function AspectRatioCalculator() {
  const [originalWidth, setOriginalWidth] = useState(1920);
  const [originalHeight, setOriginalHeight] = useState(1080);
  const [newWidth, setNewWidth] = useState(1280);
  const [newHeight, setNewHeight] = useState(720);

  const ratio = useMemo(() => {
    const width = Number(originalWidth);
    const height = Number(originalHeight);

    if (width <= 0 || height <= 0) return null;

    const divisor = gcd(width, height);

    return {
      width: Math.round(width / divisor),
      height: Math.round(height / divisor),
      decimal: width / height,
    };
  }, [originalWidth, originalHeight]);

  function handleOriginalWidth(value) {
    setOriginalWidth(value);

    const width = Number(value);
    const height = Number(originalHeight);

    if (width > 0 && height > 0 && Number(newWidth) > 0) {
      setNewHeight(Math.round(Number(newWidth) * (height / width)));
    }
  }

  function handleOriginalHeight(value) {
    setOriginalHeight(value);

    const width = Number(originalWidth);
    const height = Number(value);

    if (width > 0 && height > 0 && Number(newWidth) > 0) {
      setNewHeight(Math.round(Number(newWidth) * (height / width)));
    }
  }

  function handleNewWidth(value) {
    setNewWidth(value);

    const width = Number(originalWidth);
    const height = Number(originalHeight);
    const targetWidth = Number(value);

    if (width > 0 && height > 0 && targetWidth > 0) {
      setNewHeight(Math.round(targetWidth * (height / width)));
    } else {
      setNewHeight("");
    }
  }

  function handleNewHeight(value) {
    setNewHeight(value);

    const width = Number(originalWidth);
    const height = Number(originalHeight);
    const targetHeight = Number(value);

    if (width > 0 && height > 0 && targetHeight > 0) {
      setNewWidth(Math.round(targetHeight * (width / height)));
    } else {
      setNewWidth("");
    }
  }

  function resetCalculator() {
    setOriginalWidth(1920);
    setOriginalHeight(1080);
    setNewWidth(1280);
    setNewHeight(720);
  }

  return (
    <div className="ratio-calculator">
      <div className="ratio-panel">
        <div className="ratio-panel-heading">
          <div>
            <span className="tool-category">ORIGINAL DIMENSIONS</span>
            <h2>Enter your image size</h2>
          </div>

          {ratio && (
            <div className="ratio-badge">
              {ratio.width}:{ratio.height}
            </div>
          )}
        </div>

        <div className="ratio-input-grid">
          <label>
            <span>Width</span>
            <div>
              <input
                type="number"
                min="1"
                value={originalWidth}
                onChange={(e) => handleOriginalWidth(e.target.value)}
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
                value={originalHeight}
                onChange={(e) => handleOriginalHeight(e.target.value)}
              />
              <b>px</b>
            </div>
          </label>
        </div>
      </div>

      <div className="ratio-result-panel">
        <span className="tool-category">PROPORTIONAL SIZE</span>
        <h2>Calculate new dimensions</h2>

        <p className="ratio-help">
          Change either value and the other dimension updates automatically.
        </p>

        <div className="ratio-input-grid">
          <label>
            <span>New Width</span>
            <div>
              <input
                type="number"
                min="1"
                value={newWidth}
                onChange={(e) => handleNewWidth(e.target.value)}
              />
              <b>px</b>
            </div>
          </label>

          <span className="dimension-x">×</span>

          <label>
            <span>New Height</span>
            <div>
              <input
                type="number"
                min="1"
                value={newHeight}
                onChange={(e) => handleNewHeight(e.target.value)}
              />
              <b>px</b>
            </div>
          </label>
        </div>

        {ratio && (
          <div className="ratio-summary">
            <div>
              <span>Aspect Ratio</span>
              <strong>
                {ratio.width}:{ratio.height}
              </strong>
            </div>

            <div>
              <span>Decimal Ratio</span>
              <strong>{ratio.decimal.toFixed(3)}</strong>
            </div>

            <div>
              <span>New Size</span>
              <strong>
                {newWidth || "—"} × {newHeight || "—"}
              </strong>
            </div>
          </div>
        )}

        <button className="reset-btn ratio-reset" onClick={resetCalculator}>
          Reset Calculator
        </button>
      </div>

      <div className="common-ratios">
        <span className="tool-category">COMMON RATIOS</span>

        <div className="common-ratio-grid">
          <div>
            <strong>16:9</strong>
            <span>Widescreen</span>
          </div>

          <div>
            <strong>4:3</strong>
            <span>Standard</span>
          </div>

          <div>
            <strong>1:1</strong>
            <span>Square</span>
          </div>

          <div>
            <strong>9:16</strong>
            <span>Vertical</span>
          </div>

          <div>
            <strong>3:2</strong>
            <span>Photography</span>
          </div>
        </div>
      </div>
    </div>
  );
}