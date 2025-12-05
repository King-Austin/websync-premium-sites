import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ExternalLink } from "lucide-react";

// Import local images
import glamBeautyImage from "@/assets/gallery/de_angelica_redefine_your_look.jpeg";
import restaurantImage from "@/assets/gallery/bottom_pot_where flavour_meet_passion.jpeg";
import fashionImage from "@/assets/gallery/profile_west.jpeg";
import fitnessImage from "@/assets/gallery/victoryHub_making_your_home_ownership_a_reality.jpeg";
import energyImage from "@/assets/gallery/cworth_energy_poweirng_a_cleaner_future_with_cworth_energy.jpeg";
import agricultureImage from "@/assets/gallery/johnrep_sustainable_agriculture.jpeg";

const portfolioItems = [
  {
    title: "De Angelica Beauty Studio",
    category: "Beauty & Salon",
    description: "Redefine your look with modern booking website and online appointment system",
    image: glamBeautyImage,
    websiteUrl: "https://www.deangelika.com.ng/",
    tags: ["E-commerce", "Booking System"],
  },
  {
    title: "Bottom Pot Restaurant",
    category: "Food & Restaurant", 
    description: "Where flavour meets passion - Full-featured restaurant website with menu and delivery integration",
    image: restaurantImage,
    websiteUrl: "https://bottompot-eats.vercel.app/",
    tags: ["Restaurant", "Online Orders"],
  },

  {
    title: "Cworth Energy Solutions", 
    category: "Clean Energy",
    description: "Powering a cleaner future with sustainable energy solutions and modern web presence",
    image: energyImage,
    websiteUrl: "https://www.cworthsolarenergy.com.ng",
    tags: ["Energy", "Sustainability"],
  },
  {
    title: "Johnrep Agribusiness",
    category: "Agriculture",
    description: "Sustainable agriculture solutions with modern farming techniques and online marketplace",
    image: agricultureImage,
    websiteUrl: "https://johrep-vision-forge.vercel.app/",
    tags: ["Agriculture", "Marketplace"],
  },
];

export const PortfolioSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 px-4 bg-secondary/30 scroll-mt-20" id="portfolio">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            Real Results. Real Businesses.
          </h2>
          <p className={`text-lg text-muted-foreground max-w-2xl mx-auto ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            See how Nigerian businesses like yours are growing with Websync
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
          {portfolioItems.map((item, index) => (
            <a 
              key={index}
              href={item.websiteUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block"
            >
              <Card
                className={`group overflow-hidden ${isVisible ? 'animate-scale-in' : 'opacity-0'} hover-scale border-border cursor-pointer`}
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.category}</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <p className="text-muted-foreground mb-4 text-sm">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};