import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroLaptop from "@/assets/hero-laptop.jpg";
import heroBusinessOwner from "@/assets/hero-business-owner.jpg";
import heroMobile from "@/assets/hero-mobile.jpg";
import heroTeam from "@/assets/hero-team.jpg";

const slides = [
  { image: heroLaptop, alt: "Professional working on laptop in modern workspace" },
  { image: heroBusinessOwner, alt: "Business professional with laptop" },
  { image: heroMobile, alt: "Modern office workspace interior" },
  { image: heroTeam, alt: "Mountain hiking adventure landscape" },
];

export const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const scrollToForm = () => {
    document.getElementById("onboarding-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const openWhatsApp = () => {
    const phoneNumber = "+2348012345678"; // Replace with actual WhatsApp number
    const message = "Hi, I'd like to know more about Websync";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
        >
          <div className="relative w-full h-full overflow-hidden">
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover ken-burns"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40" />
          </div>
        </div>
      ))}

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in">
            Premium Websites. One Small Monthly Fee.
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/95 mb-8 max-w-3xl mx-auto animate-fade-in">
            Get a luxury-level website for just ₦5,999/month. Built and managed by our Vibe Coders team.
            You own your domain — we handle everything else.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
            <Button
              variant="hero"
              size="lg"
              className="text-lg px-12 py-6 h-auto animate-fade-in"
              onClick={scrollToForm}
            >
              Get Started for ₦5,999/month
            </Button>
            <Button
              size="lg"
              className="text-lg px-8 py-6 h-auto bg-[#25D366] hover:bg-[#20BA5A] text-white animate-fade-in"
              onClick={openWhatsApp}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Chat on WhatsApp
            </Button>
          </div>
          <p className="text-sm text-primary-foreground/90 animate-fade-in">
            No setup fee. No stress. Just results.
          </p>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-primary-foreground/10 hover:bg-primary-foreground/20 backdrop-blur-sm p-3 rounded-full transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-primary-foreground group-hover:scale-110 transition-transform" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-primary-foreground/10 hover:bg-primary-foreground/20 backdrop-blur-sm p-3 rounded-full transition-all duration-300 group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-primary-foreground group-hover:scale-110 transition-transform" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                ? "bg-primary-foreground w-12"
                : "bg-primary-foreground/50 hover:bg-primary-foreground/75"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
