"use client";

import { useMemo, useState } from "react";

export default function WordCounter() {
  const [text, setText] = useState("");

  const stats = useMemo(() => {
    const trimmed = text.trim();

    const words = trimmed
      ? trimmed.split(/\s+/).filter(Boolean).length
      : 0;

    const characters = text.length;

    const charactersNoSpaces = text.replace(/\s/g, "").length;

    const sentences = trimmed
      ? trimmed
          .split(/[.!?]+(?:\s|$)/)
          .map((item) => item.trim())
          .filter(Boolean).length
      : 0;

    const paragraphs = trimmed
      ? text
          .split(/\n\s*\n/)
          .map((item) => item.trim())
          .filter(Boolean).length
      : 0;

    const readingSeconds =
      words === 0 ? 0 : Math.max(1, Math.ceil((words / 200) * 60));

    return {
      words,
      characters,
      charactersNoSpaces,
      sentences,
      paragraphs,
      readingSeconds,
    };
  }, [text]);

  function formatReadingTime(seconds) {
    if (seconds === 0) return "0 sec";
    if (seconds < 60) return `${seconds} sec`;

    const minutes = Math.ceil(seconds / 60);
    return `${minutes} min`;
  }

  function copyText() {
    if (!text) return;
    navigator.clipboard.writeText(text);
  }

  return (
    <div className="word-counter-app">
      <div className="word-stats-grid">
        <div className="word-stat primary-stat">
          <span>Words</span>
          <strong>{stats.words.toLocaleString()}</strong>
        </div>

        <div className="word-stat">
          <span>Characters</span>
          <strong>{stats.characters.toLocaleString()}</strong>
        </div>

        <div className="word-stat">
          <span>No Spaces</span>
          <strong>{stats.charactersNoSpaces.toLocaleString()}</strong>
        </div>

        <div className="word-stat">
          <span>Sentences</span>
          <strong>{stats.sentences.toLocaleString()}</strong>
        </div>

        <div className="word-stat">
          <span>Paragraphs</span>
          <strong>{stats.paragraphs.toLocaleString()}</strong>
        </div>

        <div className="word-stat">
          <span>Reading Time</span>
          <strong>{formatReadingTime(stats.readingSeconds)}</strong>
        </div>
      </div>

      <div className="word-editor">
        <div className="word-editor-top">
          <div>
            <span className="tool-category">YOUR TEXT</span>
            <h2>Start typing or paste your content</h2>
          </div>

          <div className="word-editor-actions">
            <button
              type="button"
              onClick={copyText}
              disabled={!text}
            >
              Copy
            </button>

            <button
              type="button"
              onClick={() => setText("")}
              disabled={!text}
            >
              Clear
            </button>
          </div>
        </div>

        <textarea
          value={text}
          onChange={(event) => setText(event.target.value)}
          placeholder="Type or paste your text here..."
          spellCheck="true"
        />

        <div className="word-editor-bottom">
          <span>
            {stats.words.toLocaleString()}{" "}
            {stats.words === 1 ? "word" : "words"}
          </span>

          <span>
            {stats.characters.toLocaleString()}{" "}
            {stats.characters === 1 ? "character" : "characters"}
          </span>
        </div>
      </div>
    </div>
  );
}