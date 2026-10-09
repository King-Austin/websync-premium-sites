"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Instagram, ExternalLink, Cpu, Target, Rocket } from "lucide-react";
import logo from "../../../public/assets/logo.png";

export default function WestProfile() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white">

      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
        <div className="container-custom py-6 flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 hover:text-primary transition-colors group">
            <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
            WebSync Digital
          </Link>
          <div className="flex items-center gap-4">
            <Image src={logo} alt="WebSync Logo" width={120} height={28} className="h-6 w-auto object-contain" />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-primary text-[10px] uppercase font-bold tracking-[0.4em] mb-6 block">Expert Profile</span>
                <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-black tracking-tight leading-[0.85] text-black">
                  West <span className="text-primary italic font-light block md:inline">Taylor.</span>
                </h1>
                <p className="mt-12 text-xl md:text-2xl font-body text-black/80 font-light leading-snug">
                  Visionary entrepreneur, software engineer, and <strong>Founder & CEO of WebSync Digital</strong>, architecting the future of
                  accessible high-level technology and AI infrastructure. 🛡️🇳🇬
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9, x: 30 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border border-zinc-100"
              >
                <Image
                  src="/assets/west-portrait.png"
                  alt="West Taylor - Founder and CEO of WebSync Digital"
                  itemProp="image"
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="pb-32">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24">

            {/* Left Column: Core Body Text */}
            <article className="md:col-span-8 space-y-20 md:space-y-32">

              {/* Introduction */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="w-12 h-1 bg-primary mb-10" />
                <p className="text-lg md:text-xl font-body text-foreground leading-relaxed">
                  West is a visionary entrepreneur and web developer, driven by a philosophy that high-level technology
                  should be accessible, not exclusionary. As the founder and CEO of <strong>WebSync Digital</strong>,
                  he has established a corporate ecosystem designed to solve complex problems through lean,
                  high-impact digital solutions.
                </p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="relative aspect-[4/5] md:aspect-[16/10] rounded-3xl overflow-hidden shadow-xl border border-zinc-100 my-12"
                >
                  <Image
                    src="/assets/west-action.png"
                    alt="West Taylor leading digital strategy at WebSync Digital"
                    itemProp="image"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 80vw"
                  />
                </motion.div>
              </motion.div>

              {/* The Mindset */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="flex items-center gap-4 text-primary">
                  <Cpu size={32} strokeWidth={1.5} />
                  <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">The Mindset: Engineering Simplicity</h2>
                </div>
                <div className="space-y-6 text-muted-foreground font-body text-base md:text-lg leading-relaxed">
                  <p>
                    West approaches problem-solving with a rare blend of creative storytelling and technical rigor.
                    Whether he is architecting an enterprise application or developing the <strong>Clark AI model</strong>
                    using Mixture of Experts (MoE) architecture, his goal is to bridge the gap between &quot;cutting-edge&quot; and &quot;usable.&quot;
                  </p>
                  <p>
                    He thrives on the challenge of taking a friction-filled process and refining it into a seamless user experience.
                  </p>
                </div>
              </motion.div>

              {/* First Principles */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="flex items-center gap-4 text-primary">
                  <Target size={32} strokeWidth={1.5} />
                  <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">First Principles Thinking: Deconstructing the Impossible</h2>
                </div>
                <div className="space-y-6 text-muted-foreground font-body text-base md:text-lg leading-relaxed">
                  <p>
                    At the core of his process is a First Principles mindset—the same mental framework utilized by innovators like Elon Musk.
                    Rather than following industry &quot;best practices,&quot; West breaks every problem down to its fundamental truths.
                  </p>
                  <p>
                    By stripping away assumptions and rebuilding from the ground up, he identifies where costs are bloated and efficiency is lost,
                    allowing him to engineer solutions that others deem impossible or too expensive.
                  </p>
                </div>
              </motion.div>

              {/* Building for Growth */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="flex items-center gap-4 text-primary">
                  <Rocket size={32} strokeWidth={1.5} />
                  <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">Building for Growth, Not Debt</h2>
                </div>
                <div className="space-y-6 text-muted-foreground font-body text-base md:text-lg leading-relaxed">
                  <p>
                    In an era where software costs can cripple a growing business, West focuses on building SaaS products and websites
                    that prioritize affordability and scalability.
                  </p>
                  <p>
                    His work, such as the e-commerce platform <strong>Storely</strong>, is built on the belief that entrepreneurs
                    shouldn&apos;t have to &quot;sell a kidney&quot; to establish a digital presence. His products are designed to help people grow
                    their ventures without the &quot;neck-breaking&quot; financial pressure associated with professional tech.
                  </p>
                </div>
              </motion.div>
            </article>

            {/* Right Column: Dynamic Info Sidebar */}
            <aside className="md:col-span-4">
              <div className="sticky top-32 space-y-12">
                <div className="p-8 bg-secondary rounded-[2.5rem] border border-border/50">
                  <h3 className="font-display text-xl font-bold mb-6">Connect with West</h3>
                  <div className="space-y-6">
                    <p className="text-sm font-body text-muted-foreground leading-relaxed">
                      Follow West's journey as he shares insights on engineering high-impact digital solutions.
                    </p>
                    <a
                      href="https://www.instagram.com/west_taylor_?igsh=Y2J1b3BvdDlnODAy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 bg-white dark:bg-black rounded-2xl border border-border shadow-sm hover:shadow-md transition-all group"
                    >
                      <div className="p-2 bg-gradient-to-tr from-orange-500 to-pink-500 text-white rounded-lg group-hover:scale-110 transition-transform">
                        <Instagram size={20} />
                      </div>
                      <div className="flex-1">
                        <span className="block text-xs font-bold uppercase tracking-widest text-muted-foreground">Instagram</span>
                        <span className="text-sm font-display font-bold">@west_taylor_</span>
                      </div>
                      <ExternalLink size={14} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </div>
                </div>

                <div className="p-8 border border-border rounded-[2.5rem]">
                  <h3 className="font-display text-xs font-bold uppercase tracking-[0.3em] text-primary mb-6">Core Focus</h3>
                  <ul className="space-y-4 text-sm font-body text-muted-foreground">
                    <li>• Mixture of Experts (MoE) Architecture</li>
                    <li>• Lean Digital Infrastructure</li>
                    <li>• First Principles Engineering</li>
                    <li>• SaaS Economic Scalability</li>
                    <li>• High-Impact Visual Branding</li>
                  </ul>
                </div>
              </div>
            </aside>

          </div>
        </div>
      </section>

      {/* Footer / Call back */}
      <footer className="py-20 border-t border-border/50 bg-secondary/30">
        <div className="container-custom text-center">
          <p className="font-display text-sm font-bold uppercase tracking-[0.5em] text-muted-foreground/40 mb-10">WebSync Digital Founders Page</p>
          <Link href="/" className="btn-hero inline-flex items-center gap-2">
            Explore Our Solutions
          </Link>
        </div>
      </footer>
    </main>
  );
}
