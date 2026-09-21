"use client";

import { useMemo, useState } from "react";

const limits = [
  { label: "No Limit", value: 0 },
  { label: "150", value: 150 },
  { label: "280", value: 280 },
  { label: "500", value: 500 },
  { label: "Custom", value: "custom" },
];

export default function CharacterCounter() {
  const [text, setText] = useState("");
  const [selectedLimit, setSelectedLimit] = useState(0);
  const [customLimit, setCustomLimit] = useState(1000);

  const stats = useMemo(() => {
    const characters = text.length;
    const noSpaces = text.replace(/\s/g, "").length;
    const words = text.trim()
      ? text.trim().split(/\s+/).filter(Boolean).length
      : 0;

    return { characters, noSpaces, words };
  }, [text]);

  const activeLimit =
    selectedLimit === "custom"
      ? Math.max(1, Number(customLimit) || 1)
      : Number(selectedLimit);

  const remaining =
    activeLimit > 0 ? activeLimit - stats.characters : null;

  const percentage =
    activeLimit > 0
      ? Math.min((stats.characters / activeLimit) * 100, 100)
      : 0;

  function clearText() {
    setText("");
  }

  return (
    <div className="character-counter-app">
      <div className="character-stats">
        <div className="character-stat main-character-stat">
          <span>Characters</span>
          <strong>{stats.characters.toLocaleString()}</strong>
        </div>

        <div className="character-stat">
          <span>Without Spaces</span>
          <strong>{stats.noSpaces.toLocaleString()}</strong>
        </div>

        <div className="character-stat">
          <span>Words</span>
          <strong>{stats.words.toLocaleString()}</strong>
        </div>

        <div
          className={`character-stat ${
            remaining !== null && remaining < 0 ? "limit-exceeded" : ""
          }`}
        >
          <span>Remaining</span>
          <strong>
            {remaining === null ? "—" : remaining.toLocaleString()}
          </strong>
        </div>
      </div>

      <div className="character-editor">
        <div className="character-limit-area">
          <div>
            <span className="tool-category">CHARACTER LIMIT</span>
            <h2>Choose your target</h2>
          </div>

          <div className="limit-options">
            {limits.map((limit) => (
              <button
                key={limit.label}
                type="button"
                className={
                  selectedLimit === limit.value ? "active" : ""
                }
                onClick={() => setSelectedLimit(limit.value)}
              >
                {limit.label}
              </button>
            ))}
          </div>
        </div>

        {selectedLimit === "custom" && (
          <div className="custom-limit">
            <label htmlFor="customCharacterLimit">
              Custom character limit
            </label>

            <input
              id="customCharacterLimit"
              type="number"
              min="1"
              max="1000000"
              value={customLimit}
              onChange={(event) => setCustomLimit(event.target.value)}
            />
          </div>
        )}

        {activeLimit > 0 && (
          <div className="character-progress-area">
            <div className="character-progress-info">
              <span>
                {stats.characters.toLocaleString()} /{" "}
                {activeLimit.toLocaleString()}
              </span>

              <strong className={remaining < 0 ? "over-limit-text" : ""}>
                {remaining >= 0
                  ? `${remaining.toLocaleString()} remaining`
                  : `${Math.abs(remaining).toLocaleString()} over limit`}
              </strong>
            </div>

            <div className="character-progress">
              <span
                className={remaining < 0 ? "over-limit-bar" : ""}
                style={{ width: `${percentage}%` }}
              ></span>
            </div>
          </div>
        )}

        <textarea
          value={text}
          onChange={(event) => setText(event.target.value)}
          placeholder="Type or paste your text here..."
          spellCheck="true"
        />

        <div className="character-editor-bottom">
          <span>
            Spaces and line breaks are included in the character count.
          </span>

          <button
            type="button"
            onClick={clearText}
            disabled={!text}
          >
            Clear Text
          </button>
        </div>
      </div>
    </div>
  );
}