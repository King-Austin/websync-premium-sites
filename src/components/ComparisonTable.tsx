import { Check, X, Zap, Clock, Sparkles, Shield, Headphones, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const comparisonData = [
  {
    feature: "Upfront Cost",
    icon: Zap,
    traditional: "₦300,000 - ₦500,000",
    websync: "₦5,999/month",
  },
  {
    feature: "Time to Launch",
    icon: Clock,
    traditional: "3-6 weeks",
    websync: "3-5 days",
  },
  {
    feature: "Content Updates",
    icon: Sparkles,
    traditional: "₦15,000+ per update",
    websync: "Free unlimited",
  },
  {
    feature: "Hosting & Domain",
    icon: Rocket,
    traditional: "₦50,000+/year extra",
    websync: "Included free",
  },
  {
    feature: "Support",
    icon: Headphones,
    traditional: "Pay per hour",
    websync: "24/7 included",
  },
  {
    feature: "Maintenance",
    icon: Shield,
    traditional: "₦100,000+/year",
    websync: "Free forever",
  },
];

const scrollToForm = () => {
  document.getElementById("onboarding-form")?.scrollIntoView({ behavior: "smooth" });
};

export const ComparisonTable = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="comparison" className="py-24 px-4 bg-secondary/30 scroll-mt-20">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            Traditional vs Websync
          </h2>
          <p className={`text-muted-foreground ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            See the difference
          </p>
        </div>

        <div className={`bg-card rounded-xl overflow-hidden border border-border ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
          {/* Header */}
          <div className="grid grid-cols-3 bg-muted/50 border-b border-border">
            <div className="p-4 font-semibold">Feature</div>
            <div className="p-4 text-center font-semibold text-muted-foreground">Traditional</div>
            <div className="p-4 text-center font-semibold text-primary">Websync</div>
          </div>

          {/* Rows */}
          {comparisonData.map((row, index) => {
            const Icon = row.icon;
            return (
              <div
                key={index}
                className={`grid grid-cols-3 ${index !== comparisonData.length - 1 ? "border-b border-border/50" : ""}`}
              >
                <div className="p-4 flex items-center gap-3">
                  <Icon className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">{row.feature}</span>
                </div>
                <div className="p-4 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <X className="w-4 h-4 text-destructive" />
                    <span className="text-sm text-muted-foreground">{row.traditional}</span>
                  </div>
                </div>
                <div className="p-4 text-center bg-primary/5">
                  <div className="flex items-center justify-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">{row.websync}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-8">
          <Button variant="hero" size="lg" onClick={scrollToForm}>
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};