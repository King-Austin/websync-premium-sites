import { Check, X, Zap, Clock, Sparkles, Shield, Headphones, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Badge } from "@/components/ui/badge";

const comparisonData = [
  {
    feature: "Initial Cost",
    icon: Zap,
    traditional: "₦300,000 - ₦500,000 upfront",
    websync: "Just ₦5,999/month",
    highlight: "Save 98% upfront",
  },
  {
    feature: "Launch Time",
    icon: Clock,
    traditional: "3-6 weeks waiting",
    websync: "Live in 3-5 days",
    highlight: "10x faster",
  },
  {
    feature: "Content Updates",
    icon: Sparkles,
    traditional: "₦15,000+ per update",
    websync: "Unlimited updates FREE",
    highlight: "Always fresh",
  },
  {
    feature: "Hosting & Domain",
    icon: Rocket,
    traditional: "Pay separately (₦50k+/year)",
    websync: "Included FREE forever",
    highlight: "No hidden costs",
  },
  {
    feature: "Technical Support",
    icon: Headphones,
    traditional: "Extra charges per hour",
    websync: "24/7 support included",
    highlight: "Always there",
  },
  {
    feature: "Maintenance & Security",
    icon: Shield,
    traditional: "₦100k+ yearly contracts",
    websync: "Fully managed FREE",
    highlight: "Worry-free",
  },
  {
    feature: "Design Updates",
    icon: Sparkles,
    traditional: "Redesign = ₦200k+",
    websync: "Evolve anytime FREE",
    highlight: "Never outdated",
  },
  {
    feature: "Total First Year Cost",
    icon: Zap,
    traditional: "₦450,000 - ₦800,000",
    websync: "Only ₦83,988",
    highlight: "Save ₦400k+",
  },
];

const scrollToForm = () => {
  document.getElementById("onboarding-form")?.scrollIntoView({ behavior: "smooth" });
};

export const ComparisonTable = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="comparison" className="py-24 px-4 bg-secondary/30 scroll-mt-20">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-4 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          ₦300,000 Websites vs Websync ₦5,999
        </h2>
        <p className={`text-center text-muted-foreground mb-12 text-xl ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          The Difference is Clear.
        </p>

        <div className={`bg-card rounded-2xl shadow-blue-strong overflow-hidden border border-border ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
          {/* Header */}
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr_1fr] bg-primary/5 border-b-2 border-border">
            <div className="hidden md:block p-6 border-r border-border">
              <h3 className="text-lg font-bold">Feature</h3>
            </div>
            <div className="p-6 text-center border-b md:border-b-0 md:border-r border-border">
              <h3 className="text-lg md:text-xl font-semibold text-muted-foreground">
                Traditional Web Agency
              </h3>
              <p className="text-sm text-muted-foreground/70 mt-1">The old expensive way</p>
            </div>
            <div className="p-6 text-center bg-primary/10">
              <h3 className="text-lg md:text-xl font-bold text-primary">
                Websync
              </h3>
              <p className="text-sm text-primary/80 mt-1">The smart affordable way</p>
            </div>
          </div>

          {/* Rows */}
          {comparisonData.map((row, index) => {
            const Icon = row.icon;
            return (
              <div
                key={index}
                className={`grid grid-cols-1 md:grid-cols-[200px_1fr_1fr] ${index !== comparisonData.length - 1 ? "border-b border-border" : ""
                  } hover:bg-accent/5 transition-colors`}
              >
                <div className="p-4 md:p-6 border-b md:border-b-0 md:border-r border-border bg-muted/30">
                  <div className="flex items-center gap-3">
                    <Icon className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="font-semibold text-sm md:text-base">{row.feature}</span>
                  </div>
                </div>
                <div className="p-4 md:p-6 border-b md:border-b-0 md:border-r border-border">
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm md:text-base">{row.traditional}</span>
                  </div>
                </div>
                <div className="p-4 md:p-6 bg-primary/5">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="font-semibold text-sm md:text-base">{row.websync}</span>
                    </div>
                    <Badge variant="secondary" className="w-fit ml-8 text-xs bg-primary/20 text-primary border-primary/30">
                      {row.highlight}
                    </Badge>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 p-8 bg-primary/10 rounded-2xl border-2 border-primary/30">
          <p className="text-center text-lg md:text-2xl font-bold text-foreground mb-2">
            💰 Bottom Line: Save Over ₦400,000 in Year 1 Alone!
          </p>
          <p className="text-center text-base md:text-lg text-muted-foreground">
            Plus unlimited updates, support, and hosting — all included forever.
          </p>
        </div>

        <p className="text-center text-lg md:text-xl mt-8 mb-8 text-foreground max-w-4xl mx-auto">
          Stop paying premium prices for basic service. Get premium quality at revolutionary pricing.
        </p>

        <div className="text-center">
          <Button variant="hero" size="lg" onClick={scrollToForm}>
            Get Your Premium Site for ₦5,999 Today
          </Button>
        </div>
      </div>
    </section>
  );
};
