import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Linkedin, Globe } from "lucide-react";
export default function FounderCards() {
  return (
    <div className="ha-founders ha-founders-compact">
      {[
        {
          name: "West Taylor",
          role: "CEO & Founder",
          image: "/assets/west_profile_updated.jpg",
          profile: "/west",
        },
        {
          name: "King Austin",
          role: "COO & Co-Founder",
          image: "/assets/king-austin-new.jpg",
          profile: "/king-austin",
        },
      ].map((person) => (
        <article key={person.name}>
          <Image
            src={person.image}
            alt={person.name}
            width={240}
            height={280}
            sizes="(max-width: 600px) 110px, 180px"
          />
          <div>
            <h3>{person.name}</h3>
            <span>{person.role}</span>
            <Link href={person.profile} className="ws-text-link">
              Meet {person.name.split(" ")[0]} <ArrowUpRight size={15} />
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
