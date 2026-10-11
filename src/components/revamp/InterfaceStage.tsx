import {
  Check,
  ArrowUpRight,
  Globe,
  MessageSquare,
  LayoutDashboard,
  CreditCard,
  BarChart3,
} from "lucide-react";
export default function InterfaceStage({
  portal = false,
}: {
  portal?: boolean;
}) {
  return (
    <div
      className={`ws-stage ${portal ? "ws-stage-portal" : ""}`}
      role="img"
      aria-label={
        portal
          ? "Illustrative client portal with project progress, requests, billing and analytics"
          : "Illustration of a business website, mobile view and client portal. Demo content."
      }
    >
      <div className="ws-orbit ws-orbit-one" />
      <div className="ws-orbit ws-orbit-two" />
      <div className="ws-demo-window">
        <div className="ws-browserbar">
          <i />
          <i />
          <i />
          <span>
            {portal ? "app.websyncdigital.com.ng" : "yourbusiness.com.ng"}
          </span>
          <Globe size={12} />
        </div>
        {portal ? (
          <div className="ws-portal-body">
            <aside>
              <b>
                W<span>↗</span>
              </b>
              <LayoutDashboard />
              <MessageSquare />
              <CreditCard />
              <BarChart3 />
            </aside>
            <div className="ws-portal-main">
              <span className="ws-micro">YOUR WORKSPACE</span>
              <h3>Good things in progress.</h3>
              <div className="ws-portal-stats">
                <div>
                  <small>Project status</small>
                  <b>In review</b>
                </div>
                <div>
                  <small>Next milestone</small>
                  <b>Your launch</b>
                </div>
              </div>
              <div className="ws-task">
                <span>Homepage design</span>
                <Check size={14} />
              </div>
              <div className="ws-task">
                <span>Mobile experience</span>
                <Check size={14} />
              </div>
              <div className="ws-task">
                <span>Content review</span>
                <small>In progress</small>
              </div>
              <div className="ws-progress">
                <span />
              </div>
              <small className="ws-demo-label">
                Illustrative workspace · demo content
              </small>
            </div>
          </div>
        ) : (
          <div className="ws-demo-site">
            <div className="ws-demo-nav">
              <b>
                the everyday<span>®</span>
              </b>
              <span>
                Our story &nbsp; Shop &nbsp; <ArrowUpRight size={13} />
              </span>
            </div>
            <div className="ws-demo-hero">
              <small>GOOD THINGS. WELL MADE.</small>
              <h3>
                Make room
                <br />
                for <em>better.</em>
              </h3>
              <span className="ws-demo-pill">Explore the collection ↗</span>
              <div className="ws-art-object">
                <div className="ws-object-top" />
                <div className="ws-object-base" />
                <span>
                  every
                  <br />
                  day.
                </span>
              </div>
            </div>
            <div className="ws-demo-benefits">
              <span>Thoughtfully designed</span>
              <span>Made for everyday life</span>
            </div>
          </div>
        )}
      </div>
      {!portal && (
        <>
          <div className="ws-float-card ws-float-top">
            <span className="ws-check">
              <Check size={17} />
            </span>
            <div>
              <b>Your website. Ready.</b>
              <small>Designed for your business</small>
            </div>
          </div>
          <div className="ws-phone">
            <div className="ws-phone-notch" />
            <small>the everyday®</small>
            <div className="ws-phone-art" />
            <h4>
              Good things,
              <br />
              on the go.
            </h4>
            <span>Explore ↗</span>
          </div>
          <div className="ws-float-card ws-float-bottom">
            <div className="ws-small-icon">
              <MessageSquare size={20} />
            </div>
            <div>
              <b>One place for everything.</b>
              <small>Projects · requests · billing</small>
            </div>
          </div>
          <span className="ws-handnote">
            built around you <span>↗</span>
          </span>
        </>
      )}
    </div>
  );
}
