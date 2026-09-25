import Link from "next/link";

export const metadata = {
  title: "Free Online Tools for Creators & Marketers",
  description:
    "Explore free online tools for images, text, social media, marketing and everyday digital work. No signup required.",
};

const tools = [
  {
    name: "Image Compressor",
    description: "Reduce image file size while keeping your visuals clear.",
    category: "Image Tools",
    icon: "▧",
    style: "purple",
    href: "/tools/image-compressor",
  },
  {
    name: "Image Resizer",
    description: "Resize images to the exact width and height you need.",
    category: "Image Tools",
    icon: "↔",
    style: "blue",
    href: "/tools/image-resizer",
  },
  {
    name: "Aspect Ratio Calculator",
    description: "Calculate image dimensions while preserving aspect ratio.",
    category: "Image Tools",
    icon: "⌗",
    style: "cyan",
    href: "/tools/aspect-ratio-calculator",
  },
  {
    name: "Word Counter",
    description: "Count words and characters instantly as you write.",
    category: "Text Tools",
    icon: "Aa",
    style: "purple",
    href: "/tools/word-counter",
  },
  {
    name: "Character Counter",
    description: "Check character length for captions, posts and content.",
    category: "Text Tools",
    icon: "123",
    style: "pink",
    href: "/tools/character-counter",
  },
  {
    name: "Case Converter",
    description: "Convert text between uppercase, lowercase and title case.",
    category: "Text Tools",
    icon: "aA",
    style: "blue",
    href: "/tools/case-converter",
  },
  {
    name: "Hashtag Cleaner",
    description: "Clean and organize messy hashtag lists in seconds.",
    category: "Social Tools",
    icon: "#",
    style: "pink",
    href: "/tools/hashtag-cleaner",
  },
  {
    name: "Social Caption Formatter",
    description: "Format captions into clean, readable social media posts.",
    category: "Social Tools",
    icon: "¶",
    style: "cyan",
    href: "/tools/social-caption-formatter",
  },
  {
    name: "UTM Builder",
    description: "Create clean campaign tracking URLs in seconds.",
    category: "Marketing Tools",
    icon: "↗",
    style: "orange",
    href: "/tools/utm-builder",
  },
  {
    name: "QR Code Generator",
    description: "Turn links and text into quick, shareable QR codes.",
    category: "Utility Tools",
    icon: "⌗",
    style: "green",
    href: "/tools/qr-code-generator",
  },
];

export default function ToolsPage() {
  return (
    <main className="all-tools-page">
      <section className="tools-page-hero">
        <div className="container">
          <span className="section-label">KREVEXO TOOLS</span>
          <h1>Free Online Tools for Creators & Marketers</h1>

          <p>
            Explore free browser-based tools for images, text, social media,
            marketing and everyday digital work. No signup required.
          </p>

          <div className="tools-summary">
            <span>10 free tools</span>
            <span>•</span>
            <span>No signup</span>
            <span>•</span>
            <span>Works in your browser</span>
          </div>
        </div>
      </section>

      <section className="all-tools-section">
        <div className="container">
          <div className="all-tools-grid">
            {tools.map((tool) => (
              <Link
                href={tool.href}
                className="tool-card"
                key={tool.name}
              >
                <div className={`tool-card-icon ${tool.style}`}>
                  {tool.icon}
                </div>

                <div className="tool-card-content">
                  <span className="tool-category">
                    {tool.category.toUpperCase()}
                  </span>

                  <h2>{tool.name}</h2>
                  <p>{tool.description}</p>
                </div>

                <span className="tool-arrow">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}