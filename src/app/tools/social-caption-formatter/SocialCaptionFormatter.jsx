"use client";

import { useState } from "react";

export default function SocialCaptionFormatter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [paragraphSpacing, setParagraphSpacing] = useState(true);
  const [moveHashtags, setMoveHashtags] = useState(true);
  const [copied, setCopied] = useState(false);

  function formatCaption() {
    if (!input.trim()) {
      setOutput("");
      return;
    }

    let cleaned = input
      .replace(/\r\n/g, "\n")
      .split("\n")
      .map((line) => line.trim().replace(/[ \t]+/g, " "))
      .join("\n")
      .replace(/\n{3,}/g, "\n\n")
      .trim();

    let hashtags = [];

    if (moveHashtags) {
      const hashtagRegex = /(^|\s)(#[\p{L}\p{N}_]+)/gu;

      hashtags = [
        ...cleaned.matchAll(hashtagRegex),
      ].map((match) => match[2]);

      const uniqueHashtags = [];
      const seen = new Set();

      hashtags.forEach((hashtag) => {
        const key = hashtag.toLowerCase();

        if (!seen.has(key)) {
          seen.add(key);
          uniqueHashtags.push(hashtag);
        }
      });

      hashtags = uniqueHashtags;

      cleaned = cleaned
        .replace(hashtagRegex, " ")
        .split("\n")
        .map((line) => line.trim().replace(/[ \t]+/g, " "))
        .join("\n")
        .replace(/\n{3,}/g, "\n\n")
        .trim();
    }

    if (paragraphSpacing) {
      cleaned = cleaned
        .split(/\n+/)
        .map((line) => line.trim())
        .filter(Boolean)
        .join("\n\n");
    } else {
      cleaned = cleaned
        .split(/\n+/)
        .map((line) => line.trim())
        .filter(Boolean)
        .join("\n");
    }

    if (moveHashtags && hashtags.length > 0) {
      cleaned = `${cleaned}${cleaned ? "\n\n" : ""}${hashtags.join(" ")}`;
    }

    setOutput(cleaned);
    setCopied(false);
  }

  async function copyCaption() {
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
    setCopied(false);
  }

  return (
    <div className="caption-formatter-app">
      <div className="caption-input-box">
        <div className="caption-heading">
          <div>
            <span className="tool-category">ORIGINAL CAPTION</span>
            <h2>Paste your caption</h2>
          </div>

          <span className="caption-character-count">
            {input.length.toLocaleString()} characters
          </span>
        </div>

        <textarea
          value={input}
          onChange={(event) => {
            setInput(event.target.value);
            setOutput("");
            setCopied(false);
          }}
          placeholder="Paste your social media caption here..."
          spellCheck="true"
        />

        <div className="caption-options">
          <label>
            <input
              type="checkbox"
              checked={paragraphSpacing}
              onChange={(event) =>
                setParagraphSpacing(event.target.checked)
              }
            />
            <span>Add clean paragraph spacing</span>
          </label>

          <label>
            <input
              type="checkbox"
              checked={moveHashtags}
              onChange={(event) =>
                setMoveHashtags(event.target.checked)
              }
            />
            <span>Move hashtags to the bottom</span>
          </label>
        </div>

        <div className="caption-actions">
          <button
            className="caption-clear-btn"
            onClick={clearAll}
            disabled={!input && !output}
          >
            Clear
          </button>

          <button
            className="caption-format-btn"
            onClick={formatCaption}
            disabled={!input.trim()}
          >
            Format Caption
          </button>
        </div>
      </div>

      {output && (
        <div className="caption-output-box">
          <div className="caption-output-heading">
            <div>
              <span className="tool-category">FORMATTED CAPTION</span>
              <h2>Clean and ready to copy</h2>
            </div>

            <span>{output.length.toLocaleString()} characters</span>
          </div>

          <div className="caption-output">
            {output}
          </div>

          <button
            className="caption-copy-btn"
            onClick={copyCaption}
          >
            {copied ? "✓ Copied" : "Copy Caption"}
          </button>
        </div>
      )}
    </div>
  );
}