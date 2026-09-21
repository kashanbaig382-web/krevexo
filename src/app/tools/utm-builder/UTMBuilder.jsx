"use client";

import { useMemo, useState } from "react";

export default function UTMBuilder() {
  const [website, setWebsite] = useState("");
  const [source, setSource] = useState("");
  const [medium, setMedium] = useState("");
  const [campaign, setCampaign] = useState("");
  const [term, setTerm] = useState("");
  const [content, setContent] = useState("");
  const [copied, setCopied] = useState(false);

  const result = useMemo(() => {
    if (!website.trim()) return "";

    try {
      let urlValue = website.trim();

      if (!/^https?:\/\//i.test(urlValue)) {
        urlValue = `https://${urlValue}`;
      }

      const url = new URL(urlValue);

      if (source.trim()) {
        url.searchParams.set("utm_source", source.trim());
      }

      if (medium.trim()) {
        url.searchParams.set("utm_medium", medium.trim());
      }

      if (campaign.trim()) {
        url.searchParams.set("utm_campaign", campaign.trim());
      }

      if (term.trim()) {
        url.searchParams.set("utm_term", term.trim());
      }

      if (content.trim()) {
        url.searchParams.set("utm_content", content.trim());
      }

      return url.toString();
    } catch {
      return "";
    }
  }, [website, source, medium, campaign, term, content]);

  const requiredComplete =
    website.trim() &&
    source.trim() &&
    medium.trim() &&
    campaign.trim();

  async function copyURL() {
    if (!result || !requiredComplete) return;

    try {
      await navigator.clipboard.writeText(result);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1500);
    } catch {
      setCopied(false);
    }
  }

  function clearBuilder() {
    setWebsite("");
    setSource("");
    setMedium("");
    setCampaign("");
    setTerm("");
    setContent("");
    setCopied(false);
  }

  return (
    <div className="utm-builder-app">
      <div className="utm-builder-box">
        <div className="utm-heading">
          <div>
            <span className="tool-category">CAMPAIGN DETAILS</span>
            <h2>Create your tracking URL</h2>
          </div>

          <span className="utm-required">* Required fields</span>
        </div>

        <div className="utm-form">
          <label className="utm-full-field">
            <span>
              Website URL <b>*</b>
            </span>

            <input
              type="text"
              value={website}
              onChange={(event) => {
                setWebsite(event.target.value);
                setCopied(false);
              }}
              placeholder="https://example.com/page"
            />
          </label>

          <div className="utm-field-grid">
            <label>
              <span>
                Campaign Source <b>*</b>
              </span>

              <input
                type="text"
                value={source}
                onChange={(event) => {
                  setSource(event.target.value);
                  setCopied(false);
                }}
                placeholder="instagram"
              />

              <small>Where is the traffic coming from?</small>
            </label>

            <label>
              <span>
                Campaign Medium <b>*</b>
              </span>

              <input
                type="text"
                value={medium}
                onChange={(event) => {
                  setMedium(event.target.value);
                  setCopied(false);
                }}
                placeholder="social"
              />

              <small>What type of marketing channel?</small>
            </label>

            <label>
              <span>
                Campaign Name <b>*</b>
              </span>

              <input
                type="text"
                value={campaign}
                onChange={(event) => {
                  setCampaign(event.target.value);
                  setCopied(false);
                }}
                placeholder="summer_launch"
              />

              <small>Name your campaign.</small>
            </label>

            <label>
              <span>Campaign Term</span>

              <input
                type="text"
                value={term}
                onChange={(event) => {
                  setTerm(event.target.value);
                  setCopied(false);
                }}
                placeholder="running_shoes"
              />

              <small>Optional keyword or targeting term.</small>
            </label>
          </div>

          <label className="utm-full-field">
            <span>Campaign Content</span>

            <input
              type="text"
              value={content}
              onChange={(event) => {
                setContent(event.target.value);
                setCopied(false);
              }}
              placeholder="blue_cta"
            />

            <small>
              Optional value for distinguishing creatives or links.
            </small>
          </label>
        </div>

        <div className="utm-actions">
          <button
            className="utm-clear-btn"
            onClick={clearBuilder}
            disabled={
              !website &&
              !source &&
              !medium &&
              !campaign &&
              !term &&
              !content
            }
          >
            Clear
          </button>
        </div>
      </div>

      <div className="utm-result-box">
        <div className="utm-result-heading">
          <div>
            <span className="tool-category">GENERATED URL</span>
            <h2>Your campaign URL</h2>
          </div>

          {requiredComplete && result && (
            <span className="utm-ready">✓ Ready</span>
          )}
        </div>

        {!requiredComplete ? (
          <div className="utm-empty-result">
            Complete the website URL, source, medium and campaign name to
            create your tracking URL.
          </div>
        ) : result ? (
          <>
            <div className="utm-result-url">{result}</div>

            <button className="utm-copy-btn" onClick={copyURL}>
              {copied ? "✓ Copied" : "Copy Tracking URL"}
            </button>
          </>
        ) : (
          <div className="utm-error-result">
            Please enter a valid website URL.
          </div>
        )}
      </div>
    </div>
  );
}