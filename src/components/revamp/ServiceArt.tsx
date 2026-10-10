import {
  Check,
  ArrowUpRight,
  ShoppingBag,
  Link2,
  ShieldCheck,
} from "lucide-react";
export default function ServiceArt({
  kind = "business-website",
}: {
  kind?: string;
}) {
  const software = kind === "web-app";
  const care = kind === "website-care";
  const seo = kind === "seo-optimization";
  const migration = kind === "website-migration";
  const commerce = kind === "e-commerce";
  const integration = kind === "integrations";
  return (
    <div
      className={`ha-service-art ${software || kind === "business-website" || seo ? "ha-art-dark" : ""}`}
      role="img"
      aria-label={`${kind.replaceAll("-", " ")} interface illustration. Demo content.`}
    >
      <div className="ha-art-dots" />
      <div className="ha-browser">
        <div className="ws-browserbar">
          <i />
          <i />
          <i />
          <span>
            {software ? "workspace.yourbusiness.com" : "yourbusiness.com"}
          </span>
        </div>
        {software ? (
          <div className="ha-dashboard">
            <aside>
              <b>Workspace</b>
              <i />
              <i />
              <i />
              <i />
            </aside>
            <div>
              <b>Your overview</b>
              <div className="ha-stat-boxes">
                <span>Projects</span>
                <span>Requests</span>
                <span>Billing</span>
              </div>
              <div className="ha-dash-chart">
                <i />
                <i />
                <i />
                <i />
                <i />
              </div>
            </div>
          </div>
        ) : (
          <div className={`ha-site-demo ${commerce ? "ha-commerce-demo" : ""}`}>
            <div>
              <b>{commerce ? "your store" : "your business"}</b>
              <span>Home · About · Contact</span>
            </div>
            {seo && (
              <div className="ha-search-demo">
                Search your business <span>⌕</span>
              </div>
            )}
            <h4>
              {care
                ? "Your website, looked after."
                : seo
                  ? "A clearer search presence."
                  : migration
                    ? "Your next platform."
                    : commerce
                      ? "Find your next favourite."
                      : kind === "landing-page"
                        ? "One page. One clear purpose."
                        : "Your business, at its best."}
            </h4>
            <p>Thoughtful design. A clear next step.</p>
            <span className="ha-demo-cta">
              {commerce ? "Shop the collection" : "Get in touch"}{" "}
              <ArrowUpRight size={12} />
            </span>
            {care ? (
              <div className="ha-care-checks">
                <span>✓ Content updates</span>
                <span>✓ Technical care</span>
                <span>✓ Support</span>
              </div>
            ) : seo ? (
              <div className="ha-seo-results">
                <b>yourbusiness.com</b>
                <span>Your services, clearly explained</span>
                <i />
                <i />
              </div>
            ) : (
              <div className="ha-demo-blocks">
                <i />
                <i />
                <i />
              </div>
            )}
          </div>
        )}
      </div>
      <div className="ha-art-floating">
        <span>
          {integration ? (
            <Link2 size={18} />
          ) : commerce ? (
            <ShoppingBag size={18} />
          ) : (
            <ShieldCheck size={18} />
          )}
        </span>
        <div>
          <b>
            {software
              ? "One connected workspace"
              : commerce
                ? "From browse to order"
                : integration
                  ? "Tools working together"
                  : "Designed around your goals"}
          </b>
          <small>
            {software
              ? "Projects · requests · billing"
              : "Illustrative website preview"}
          </small>
        </div>
        <Check size={15} />
      </div>
      {migration && (
        <div className="ha-migration-label">
          <span>Existing website</span>
          <ArrowUpRight size={20} />
          <b>New platform</b>
        </div>
      )}
      {integration && (
        <div className="ha-integration-nodes">
          <span>Payments</span>
          <span>WhatsApp</span>
          <span>Analytics</span>
        </div>
      )}
    </div>
  );
}
