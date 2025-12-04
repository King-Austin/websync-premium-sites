import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const scrollToForm = () => {
  document.getElementById("onboarding-form")?.scrollIntoView({ behavior: "smooth" });
};

export const VSLSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="video" className="py-24 px-4 bg-secondary/30 scroll-mt-20">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <div className="text-center mb-12">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            🎬 See How Websync Transforms Your Business Online
          </h2>
          <p className={`text-lg text-muted-foreground max-w-3xl mx-auto ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            Watch this short video to learn how you can get a premium website for just ₦5,999/month —
            no hidden fees, no stress, just results.
          </p>
        </div>

        <div className={`bg-card rounded-2xl shadow-blue-strong overflow-hidden border border-border ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
          <div className="relative pt-[56.25%]">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/j50u35dP5II?rel=0"
              title="Websync Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg" onClick={scrollToForm}>
            Get Your Premium Site Now
          </Button>
        </div>
      </div>
    </section>
  );
};
