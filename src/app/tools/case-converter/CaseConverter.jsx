"use client";

import { useState } from "react";

export default function CaseConverter() {
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);

  function applyConversion(type) {
    if (!text) return;

    let converted = text;

    if (type === "uppercase") {
      converted = text.toUpperCase();
    }

    if (type === "lowercase") {
      converted = text.toLowerCase();
    }

    if (type === "title") {
      converted = text
        .toLowerCase()
        .replace(/\b\w/g, (character) => character.toUpperCase());
    }

    if (type === "sentence") {
      converted = text
        .toLowerCase()
        .replace(
          /(^\s*[a-z])|([.!?]\s+[a-z])/g,
          (match) => match.toUpperCase()
        );
    }

    if (type === "capitalize") {
      converted = text.replace(/\b\w/g, (character) =>
        character.toUpperCase()
      );
    }

    if (type === "alternating") {
      let shouldUppercase = false;

      converted = text
        .toLowerCase()
        .split("")
        .map((character) => {
          if (!/[a-z]/i.test(character)) {
            return character;
          }

          const result = shouldUppercase
            ? character.toUpperCase()
            : character.toLowerCase();

          shouldUppercase = !shouldUppercase;

          return result;
        })
        .join("");
    }

    setText(converted);
    setCopied(false);
  }

  async function copyText() {
    if (!text) return;

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1500);
    } catch {
      setCopied(false);
    }
  }

  function clearText() {
    setText("");
    setCopied(false);
  }

  return (
    <div className="case-converter-app">
      <div className="case-converter-box">
        <div className="case-top">
          <div>
            <span className="tool-category">YOUR TEXT</span>
            <h2>Convert text capitalization</h2>
          </div>

          <span className="case-count">
            {text.length.toLocaleString()} characters
          </span>
        </div>

        <textarea
          value={text}
          onChange={(event) => {
            setText(event.target.value);
            setCopied(false);
          }}
          placeholder="Type or paste your text here..."
          spellCheck="true"
        />

        <div className="case-actions">
          <button onClick={() => applyConversion("uppercase")}>
            UPPERCASE
          </button>

          <button onClick={() => applyConversion("lowercase")}>
            lowercase
          </button>

          <button onClick={() => applyConversion("title")}>
            Title Case
          </button>

          <button onClick={() => applyConversion("sentence")}>
            Sentence case
          </button>

          <button onClick={() => applyConversion("capitalize")}>
            Capitalize Words
          </button>

          <button onClick={() => applyConversion("alternating")}>
            aLtErNaTiNg
          </button>
        </div>

        <div className="case-bottom">
          <button
            className="case-clear"
            onClick={clearText}
            disabled={!text}
          >
            Clear Text
          </button>

          <button
            className="case-copy"
            onClick={copyText}
            disabled={!text}
          >
            {copied ? "✓ Copied" : "Copy Text"}
          </button>
        </div>
      </div>

      <div className="case-example">
        <div>
          <span>Original</span>
          <p>smart tools for modern creators</p>
        </div>

        <span className="case-example-arrow">→</span>

        <div>
          <span>Title Case</span>
          <p>Smart Tools For Modern Creators</p>
        </div>
      </div>
    </div>
  );
}