import { ArrowUpRight, Check, Smartphone, TrendingUp } from "lucide-react";
export default function HeroStage() {
  return (
    <div
      className="ha-stage"
      role="img"
      aria-label="Illustrative mobile website with responsive design, search setup and enquiry journey. Demo interface."
    >
      <div className="ha-stage-back" />
      <div className="ha-device">
        <div className="ha-notch" />
        <div className="ha-device-nav">
          <b>your business</b>
          <i />
          <i />
        </div>
        <div className="ha-device-intro">
          <span>Your next chapter</span>
          <b>
            Good things
            <br />
            start here.
          </b>
          <small>Let’s talk ↗</small>
        </div>
        <div className="ha-device-chart">
          <span>Website enquiries</span>
          <svg viewBox="0 0 230 70" aria-hidden="true">
            <path
              d="M0 65 L25 55 L45 59 L72 41 L97 47 L130 22 L158 31 L190 11 L225 2"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
            />
          </svg>
        </div>
        <div className="ha-device-products">
          <i />
          <i />
        </div>
        <div className="ha-device-lines">
          <i />
          <i />
        </div>
      </div>
      <div className="ha-metric ha-metric-one">
        <span>
          <Smartphone size={13} /> MOBILE-FIRST DESIGN
        </span>
        <strong>Every screen.</strong>
        <div className="ha-meter" />
        <small>Built for your customers</small>
      </div>
      <div className="ha-metric ha-metric-two">
        <span>
          <TrendingUp size={13} /> SEARCH FOUNDATIONS
        </span>
        <div className="ha-bars">
          {[24, 32, 29, 45, 61].map((h, i) => (
            <i key={i} style={{ height: h }} />
          ))}
        </div>
        <small>
          <ArrowUpRight size={14} /> Ready to be discovered
        </small>
      </div>
      <div className="ha-metric ha-metric-three">
        <span>
          <Check size={13} /> A CLEAR NEXT STEP
        </span>
        <div>Explore</div>
        <div>Enquire</div>
        <div>Start a conversation</div>
        <small>One purposeful customer journey</small>
      </div>
    </div>
  );
}
