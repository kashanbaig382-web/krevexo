import Link from "next/link";
import UTMBuilder from "./UTMBuilder";

export const metadata = {
  title: "Free UTM Builder - Create Campaign Tracking URLs",
  description:
    "Create UTM tracking URLs online for free. Add campaign source, medium, name, term and content parameters with KREVEXO's free UTM Builder.",
};

export default function UTMBuilderPage() {
  return (
    <main className="single-tool-page">
      <section className="single-tool-hero">
        <div className="container">
          <span className="section-label">FREE MARKETING TOOL</span>

          <h1>Free Online UTM Builder</h1>

          <p>
            Create campaign tracking URLs with UTM parameters for marketing,
            social media, email and other campaigns.
          </p>
        </div>
      </section>

      <section className="tool-workspace-section">
        <div className="container">
          <UTMBuilder />

          <div className="tool-info-content">
            <h2>Create UTM Tracking URLs Online</h2>

            <p>
              KREVEXO&apos;s free UTM Builder helps you add campaign tracking
              parameters to a destination URL. Enter your website address and
              campaign details to generate a complete tracking URL that you
              can copy and use in your marketing campaigns.
            </p>

            <p>
              UTM parameters can help you identify where campaign traffic came
              from when the resulting visits are measured by a compatible
              analytics platform.
            </p>

            <h2>How to Build a UTM Tracking URL</h2>

            <ol>
              <li>Enter the destination website URL.</li>
              <li>Add your campaign source.</li>
              <li>Enter the campaign medium.</li>
              <li>Add a campaign name.</li>
              <li>Add optional campaign term or content values if needed.</li>
              <li>Copy the generated UTM tracking URL.</li>
            </ol>

            <h2>What Are UTM Parameters?</h2>

            <p>
              UTM parameters are pieces of campaign information added to the
              end of a URL. They allow compatible analytics tools to identify
              details about the marketing campaign associated with a visit.
            </p>

            <p>
              Instead of creating a different webpage for every campaign, you
              can use the same destination URL with different UTM values to
              distinguish traffic sources and campaigns in your analytics
              data.
            </p>

            <h2>What Do the UTM Parameters Mean?</h2>

            <h3>utm_source</h3>
            <p>
              Campaign source identifies where the traffic is coming from.
              Examples might include a newsletter, search platform, social
              network or another traffic source.
            </p>

            <h3>utm_medium</h3>
            <p>
              Campaign medium describes the type of marketing channel being
              used, such as email, social or another channel label used in
              your tracking structure.
            </p>

            <h3>utm_campaign</h3>
            <p>
              Campaign name identifies the specific campaign or promotion you
              want to distinguish in your analytics reports.
            </p>

            <h3>utm_term</h3>
            <p>
              Campaign term is an optional parameter that can be used when you
              need an additional value for identifying a term or targeting
              detail associated with a campaign.
            </p>

            <h3>utm_content</h3>
            <p>
              Campaign content is optional and can help distinguish different
              links, creatives or variations that belong to the same campaign.
            </p>

            <h2>When Is a UTM Builder Useful?</h2>

            <p>
              UTM tracking URLs can be useful when sharing links across
              different marketing channels and you want to distinguish those
              visits in your analytics data.
            </p>

            <p>
              For example, a marketer might create separate tracking URLs for
              an email campaign and a social media campaign even when both
              links lead to the same landing page.
            </p>

            <h2>UTM Builder FAQ</h2>

            <h3>Is the KREVEXO UTM Builder free?</h3>
            <p>
              Yes. You can create UTM tracking URLs for free without creating
              an account.
            </p>

            <h3>Does a UTM URL change my destination page?</h3>
            <p>
              The destination remains the URL you provide. The generated link
              adds campaign parameters that can be read by compatible
              analytics systems.
            </p>

            <h3>Which UTM fields should I use?</h3>
            <p>
              Source, medium and campaign name are commonly used to identify
              the main campaign details. Term and content can provide
              additional information when your tracking structure requires
              them.
            </p>

            <h3>Can I use UTM links for social media?</h3>
            <p>
              Yes. UTM parameters can be added to links shared through social
              campaigns when you want compatible analytics tools to identify
              that campaign traffic.
            </p>

            <h3>Does KREVEXO track visitors through the URL I create?</h3>
            <p>
              No. The UTM Builder creates the parameterized URL. Traffic
              measurement depends on the analytics setup used on the
              destination website.
            </p>

            <div className="tool-related-section">
              <h2>Related KREVEXO Tools</h2>

              <p>
                After creating your campaign URL, you can turn the link into a
                QR code or prepare social content with another KREVEXO tool.
              </p>

              <div className="tool-related-links">
                <Link href="/tools/qr-code-generator">
                  QR Code Generator →
                </Link>

                <Link href="/tools/social-caption-formatter">
                  Social Caption Formatter →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}