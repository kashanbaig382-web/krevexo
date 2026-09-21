"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
  event.preventDefault();

  if (status === "sending") return;

  setStatus("sending");

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "593f66f9-b0e2-4e92-976e-38f6aba5f39d",
        name: form.name,
        email: form.email,
        subject: `KREVEXO Contact: ${form.subject}`,
        message: form.message,
        from_name: "KREVEXO Contact Form",
      }),
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(result.message || "Submission failed");
    }

    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    setStatus("success");
  } catch (error) {
    console.error("Contact form error:", error);
    setStatus("error");
  }
}

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form-heading">
        <span className="tool-category">SEND A MESSAGE</span>
        <h2>Contact us</h2>
      </div>

      <div className="contact-field-grid">
        <label>
          <span>Name</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            required
          />
        </label>

        <label>
          <span>Email</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            required
          />
        </label>
      </div>

      <label>
        <span>Subject</span>
        <input
          type="text"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          placeholder="What is this about?"
          maxLength={120}
          required
        />
      </label>

      <label>
        <span>Message</span>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Write your message..."
          minLength={10}
          maxLength={3000}
          required
        />
      </label>

      {status === "success" && (
        <div className="contact-success">
          ✓ Your message has been sent successfully.
        </div>
      )}

      {status === "error" && (
        <div className="contact-error">
          Something went wrong. Please try again.
        </div>
      )}

      <button
        type="submit"
        className="contact-submit"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}