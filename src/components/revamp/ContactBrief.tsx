"use client";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";
export default function ContactBrief() {
  const [ready, setReady] = useState("");
  return (
    <form
      className="ha-brief"
      onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const text = `Hello WebSync, my name is ${data.get("name")}. Business: ${data.get("business")}. Service: ${data.get("service")}. Project: ${data.get("project")}`;
        setReady(
          `https://wa.me/2349111719701?text=${encodeURIComponent(text)}`,
        );
      }}
    >
      <label>
        Your name
        <input
          name="name"
          autoComplete="name"
          required
          placeholder="Your name"
        />
      </label>
      <label>
        Business or project
        <input name="business" required placeholder="Business name" />
      </label>
      <label>
        What do you need?
        <select name="service">
          {services.map((s) => (
            <option key={s.slug}>{s.name}</option>
          ))}
          <option>Help choosing a service</option>
        </select>
      </label>
      <label>
        A little about the project
        <textarea
          name="project"
          rows={4}
          required
          placeholder="Your goals, the features you need and your preferred timeline"
        />
      </label>
      <button className="ws-button" type="submit">
        Prepare my WhatsApp message <ArrowUpRight size={17} />
      </button>
      {ready && (
        <div className="ha-brief-ready" role="status">
          <p>Your message is ready. Open WhatsApp to review and send it.</p>
          <a
            className="ws-button ws-button-outline"
            href={ready}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open WhatsApp ↗
          </a>
        </div>
      )}
      <small>Nothing is submitted to a server by this form.</small>
    </form>
  );
}
