import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Heading } from "./revamp/Sections";

export default function VideoSection() {
  return (
    <section className="ws-section ws-container ha-concept-video" id="demo">
      <Heading
        label="THE WEBSYNC CONCEPT"
        title="A closer look at how we work."
        copy="Watch our original introduction to WebSync Digital and the business concept behind our website subscription."
      />
      <div className="ha-video-frame">
        <iframe
          src="https://www.youtube.com/embed/k9E0YteooHY"
          title="WebSync Digital: our business concept and website subscription"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
      <div className="ha-video-links">
        <Link href="/pricing" className="ws-text-link">View current plans & terms <ArrowRight size={16} /></Link>
        <a href="https://www.youtube.com/watch?v=k9E0YteooHY" target="_blank" rel="noopener noreferrer">Watch on YouTube ↗</a>
      </div>
    </section>
  );
}
