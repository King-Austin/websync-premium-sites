import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Linkedin, Globe } from "lucide-react";
export default function FounderCards() {
  return (
    <div className="ha-founders ha-founders-round">
      {[
        {
          name: "West Taylor",
          role: "CEO & Founder",
          image: "/assets/west_profile_updated.jpg",
          profile: "/west",
          bio: "Leads vision and product direction. Turns business needs into digital solutions.",
        },
        {
          name: "King Austin",
          role: "COO & Co-Founder",
          image: "/assets/king-austin-new.jpg",
          profile: "/king-austin",
          bio: "Builds backend and business software. Leads technical delivery and operations.",
        },
      ].map((person) => (
        <article key={person.name}>
          <Image
            src={person.image}
            alt={person.name}
            width={180}
            height={180}
            sizes="(max-width: 600px) 120px, 160px"
          />
          <div>
            <h3>{person.name}</h3>
            <span>{person.role}</span>
            <p className="ha-founder-bio">{person.bio.split(". ")[0]}.<br />{person.bio.split(". ")[1]}</p>
            <Link href={person.profile} className="ws-text-link">
              View more <span className="sr-only">about {person.name}</span> <ArrowUpRight size={15} />
            </Link>
            {person.name === "King Austin" && (
              <div className="ha-founder-socials">
                <a
                  href="https://nworahebuka.com.ng/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Globe size={15} /> Portfolio
                </a>
                <a
                  href="https://www.linkedin.com/in/amkingaustin/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={15} /> LinkedIn
                </a>
              </div>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}
