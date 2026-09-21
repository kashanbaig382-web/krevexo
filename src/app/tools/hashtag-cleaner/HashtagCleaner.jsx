"use client";

import { useState } from "react";

export default function HashtagCleaner() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [lowercase, setLowercase] = useState(true);
  const [removed, setRemoved] = useState(0);
  const [copied, setCopied] = useState(false);

  function getHashtags(value) {
    return value
      .split(/[\s,;]+/)
      .map((item) => item.trim())
      .filter(Boolean)
      .map((item) => {
        const cleaned = item
          .replace(/^#+/, "")
          .replace(/[^\p{L}\p{N}_]/gu, "");

        if (!cleaned) return "";

        return lowercase
          ? `#${cleaned.toLowerCase()}`
          : `#${cleaned}`;
      })
      .filter(Boolean);
  }

  function cleanHashtags() {
    if (!input.trim()) {
      setOutput("");
      setRemoved(0);
      return;
    }

    const hashtags = getHashtags(input);

    const unique = [];
    const seen = new Set();

    hashtags.forEach((hashtag) => {
      const comparison = hashtag.toLowerCase();

      if (!seen.has(comparison)) {
        seen.add(comparison);
        unique.push(hashtag);
      }
    });

    setRemoved(hashtags.length - unique.length);
    setOutput(unique.join(" "));
    setCopied(false);
  }

  async function copyResult() {
    if (!output) return;

    try {
      await navigator.clipboard.writeText(output);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1500);
    } catch {
      setCopied(false);
    }
  }

  function clearAll() {
    setInput("");
    setOutput("");
    setRemoved(0);
    setCopied(false);
  }

  const outputCount = output
    ? output.split(/\s+/).filter(Boolean).length
    : 0;

  return (
    <div className="hashtag-cleaner-app">
      <div className="hashtag-cleaner-box">
        <div className="hashtag-top">
          <div>
            <span className="tool-category">HASHTAG LIST</span>
            <h2>Paste your hashtags</h2>
          </div>

          <label className="lowercase-toggle">
            <input
              type="checkbox"
              checked={lowercase}
              onChange={(event) => setLowercase(event.target.checked)}
            />

            <span>Convert to lowercase</span>
          </label>
        </div>

        <textarea
          value={input}
          onChange={(event) => {
            setInput(event.target.value);
            setOutput("");
            setRemoved(0);
            setCopied(false);
          }}
          placeholder="#Marketing, #SocialMedia  ##Content  #marketing #CreatorTips..."
          spellCheck="false"
        />

        <div className="hashtag-primary-actions">
          <button
            className="hashtag-clear-btn"
            onClick={clearAll}
            disabled={!input && !output}
          >
            Clear
          </button>

          <button
            className="hashtag-clean-btn"
            onClick={cleanHashtags}
            disabled={!input.trim()}
          >
            Clean Hashtags
          </button>
        </div>
      </div>

      {output && (
        <div className="hashtag-result">
          <div className="hashtag-result-top">
            <div>
              <span className="tool-category">CLEAN RESULT</span>
              <h2>Your hashtags are ready</h2>
            </div>

            <div className="hashtag-result-stats">
              <span>{outputCount} hashtags</span>

              {removed > 0 && (
                <span>{removed} duplicate{removed !== 1 ? "s" : ""} removed</span>
              )}
            </div>
          </div>

          <div className="hashtag-output">{output}</div>

          <button
            className="hashtag-copy-btn"
            onClick={copyResult}
          >
            {copied ? "✓ Copied" : "Copy Hashtags"}
          </button>
        </div>
      )}
    </div>
  );
}