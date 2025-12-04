import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const features = [
  "Full design, hosting, maintenance — everything",
  "You only buy your domain",
  "Hosting included",
  "Unlimited updates",
  "Mobile-friendly design",
  "SEO-optimized",
  "Fast WhatsApp support",
  "Live in 3–5 days",
];

const scrollToForm = () => {
  document.getElementById("onboarding-form")?.scrollIntoView({ behavior: "smooth" });
};

export const PricingSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="pricing" className="py-24 px-4 bg-background scroll-mt-20">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-4 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          Simple, Transparent Pricing
        </h2>
        <p className={`text-center text-muted-foreground mb-16 text-lg ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          Everything you need, nothing you don't
        </p>

        <div className="max-w-lg mx-auto">
          <div className={`bg-card border-2 border-primary rounded-3xl p-10 shadow-blue-strong relative overflow-hidden ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            {/* Popular badge */}
            <div className="absolute -top-3 -right-3 bg-primary text-primary-foreground px-6 py-2 rounded-full font-semibold text-sm shadow-blue-strong rotate-12">
              Most Popular
            </div>

            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-2">Websync</h3>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-5xl font-bold text-primary">₦5,999</span>
                <span className="text-muted-foreground">/ month</span>
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              variant="hero"
              size="lg"
              className="w-full text-lg py-6"
              onClick={scrollToForm}
            >
              Get Your Website Now
            </Button>

            <p className="text-center text-sm text-muted-foreground mt-4">
              No setup fee • Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
