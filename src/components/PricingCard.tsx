import { Check, Globe, Server, Wrench, RefreshCw, Zap } from "lucide-react";

const features = [
  { icon: Globe, text: "Free domain setup" },
  { icon: Server, text: "Free hosting" },
  { icon: Wrench, text: "Website maintenance" },
  { icon: RefreshCw, text: "Unlimited updates" },
];

const PricingCard = () => {
  return (
    <div className="price-card animate-fade-in" style={{ animationDelay: "0.1s" }}>
      <div className="absolute top-4 right-4">
        <div className="flex items-center gap-1.5 bg-success/10 text-success text-xs font-semibold px-2.5 py-1 rounded-full">
          <Zap className="w-3 h-3" />
          Best Value
        </div>
      </div>

      <div className="text-center mb-8 pt-4">
        <div className="text-5xl font-bold text-foreground tracking-tight">
          ₦5,999
        </div>
        <div className="text-muted-foreground mt-1">per month</div>
        <div className="inline-flex items-center gap-2 mt-3 text-sm">
          <span className="text-muted-foreground line-through">₦5,999</span>
          <span className="bg-destructive/10 text-destructive text-xs font-medium px-2 py-0.5 rounded">
            Save ₦1,000
          </span>
        </div>
      </div>

      <div className="space-y-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-3 rounded-xl bg-secondary/50 transition-colors hover:bg-secondary"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <feature.icon className="w-5 h-5 text-primary" />
            </div>
            <span className="text-foreground font-medium flex-1">{feature.text}</span>
            <div className="w-6 h-6 rounded-full bg-success/10 flex items-center justify-center">
              <Check className="w-4 h-4 text-success" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCard;
