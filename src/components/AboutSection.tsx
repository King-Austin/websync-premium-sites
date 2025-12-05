import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Target, Heart, Zap, Award, Users, Sparkles, TrendingUp, Globe, Clock, Star } from "lucide-react";

// Import profile images
import westProfileImage from "@/assets/gallery/west_profile_image.jpeg";
import kingAustinProfileImage from "@/assets/gallery/kingaustin_profile_images.jpg";

const stats = [
  { number: "50+", label: "Websites Built", icon: Globe },
  { number: "98%", label: "Client Satisfaction", icon: Star },
  { number: "3-5", label: "Days to Launch", icon: Clock },
  { number: "24/7", label: "Support Available", icon: Users },
];

const teamMembers = [
  {
    name: "West",
    role: "Founder & CEO",
    image: westProfileImage,
    initials: "W",
    bio: "Vibe coder and entrepreneur on a mission to empower Nigerian businesses online",
    expertise: ["Strategy", "Leadership", "Business Development"],
  },
  {
    name: "King Austin",
    role: "Co Founder & COO",
    image: kingAustinProfileImage,
    initials: "KA",
    bio: "Years of building web infrastructures that scale",
    expertise: ["Technical Architecture", "Operations", "Scalability"],
  },
];

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "We measure success by your growth, not just pretty designs.",
    gradient: "from-blue-500 to-purple-600",
  },
  {
    icon: Heart,
    title: "Client-First Approach",
    description: "Your success is our success. We're invested in your business.",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: Zap,
    title: "Speed & Efficiency",
    description: "Fast delivery without compromising quality. That's our promise.",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "Luxury-level websites at affordable monthly rates.",
    gradient: "from-green-500 to-teal-500",
  },
];

const differentiators = [
  {
    icon: Users,
    title: "Nigerian Business Experts",
    description: "We understand the local market, culture, and what Nigerian customers respond to.",
    highlight: "Local Expertise",
  },
  {
    icon: Sparkles,
    title: "All-Inclusive Service",
    description: "Design, development, hosting, maintenance - we handle everything so you can focus on business.",
    highlight: "Zero Hassle",
  },
];

export const AboutSection = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal();
  const { ref: statsRef, isVisible: statsVisible } = useScrollReveal();
  const { ref: missionRef, isVisible: missionVisible } = useScrollReveal();
  const { ref: teamRef, isVisible: teamVisible } = useScrollReveal();
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollReveal();
  const { ref: whyRef, isVisible: whyVisible } = useScrollReveal();

  return (
    <div id="about" className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/10" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center" ref={heroRef}>
          <div className={`inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm border border-primary/20 text-primary text-sm font-medium px-6 py-3 rounded-full mb-6 ${heroVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <Sparkles className="w-4 h-4" />
            About Vibe Coders
          </div>
          
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent ${heroVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            We Build Websites That 
            <span className="block bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Grow Businesses
            </span>
          </h1>
          
          <p className={`text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed ${heroVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            Websync by Vibe Coders is on a mission to empower every Nigerian business with a premium online presence, 
            without the premium price tag.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4" ref={statsRef}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className={`text-center p-6 bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm border border-border/50 rounded-2xl hover-scale ${statsVisible ? 'animate-scale-in' : 'opacity-0'}`}
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-1">{stat.number}</div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto" ref={missionRef}>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`${missionVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary text-sm font-medium px-4 py-2 rounded-full mb-6">
                <Target className="w-4 h-4" />
                Our Mission
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Empowering Nigerian Businesses 
                <span className="text-primary">Digitally</span>
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We believe every business deserves a professional website, not just the big corporations. 
                That's why we created an affordable monthly subscription model that gives you:
              </p>
              
              <div className="space-y-4">
                {[
                  "Luxury-level design at small business prices",
                  "No technical headaches - we handle everything",
                  "Ongoing support and updates included",
                  "You own your domain - full control"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                    <span className="text-muted-foreground leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className={`${missionVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl" />
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                  alt="Vibe Coders team collaboration"
                  className="relative rounded-3xl shadow-2xl border border-border/50"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-secondary/20 to-primary/5" ref={teamRef}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className={`inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm border border-primary/20 text-primary text-sm font-medium px-6 py-3 rounded-full mb-6 ${teamVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <Users className="w-4 h-4" />
              Meet the Founders
            </div>
            
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${teamVisible ? 'animate-slide-up' : 'opacity-0'}`}>
              The Visionaries Behind 
              <span className="text-primary">Vibe Coders</span>
            </h2>
            
            <p className={`text-xl text-muted-foreground max-w-3xl mx-auto ${teamVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
              Passionate entrepreneurs and tech experts dedicated to transforming Nigerian businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className={`group relative overflow-hidden bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-border/50 hover-scale hover:shadow-2xl transition-all duration-500 ${teamVisible ? 'animate-scale-in' : 'opacity-0'}`}
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardContent className="relative p-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full blur-xl opacity-20" />
                      <Avatar className="relative w-32 h-32 border-4 border-white shadow-xl">
                        <AvatarImage src={member.image} alt={member.name} className="object-cover" />
                        <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white text-2xl font-bold">
                          {member.initials}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary text-sm font-medium px-4 py-2 rounded-full mb-4">
                      {member.role}
                    </div>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">{member.bio}</p>
                    
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.expertise.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-4" ref={valuesRef}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className={`inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm border border-primary/20 text-primary text-sm font-medium px-6 py-3 rounded-full mb-6 ${valuesVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <Heart className="w-4 h-4" />
              Our Core Values
            </div>
            
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${valuesVisible ? 'animate-slide-up' : 'opacity-0'}`}>
              What Drives 
              <span className="text-primary">Everything We Do</span>
            </h2>
            
            <p className={`text-xl text-muted-foreground max-w-3xl mx-auto ${valuesVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
              Our values aren't just words - they're the foundation of how we serve our clients
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className={`group relative overflow-hidden bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-border/50 hover-scale hover:shadow-xl transition-all duration-500 ${valuesVisible ? 'animate-scale-in' : 'opacity-0'}`}
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  <CardContent className="relative p-8">
                    <div className="flex items-start gap-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Different Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-primary/5 to-secondary/10" ref={whyRef}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className={`inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm border border-primary/20 text-primary text-sm font-medium px-6 py-3 rounded-full mb-6 ${whyVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <TrendingUp className="w-4 h-4" />
              Why Choose Us
            </div>
            
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${whyVisible ? 'animate-slide-up' : 'opacity-0'}`}>
              Not Just Another 
              <span className="text-primary">Web Agency</span>
            </h2>
            
            <p className={`text-xl text-muted-foreground max-w-3xl mx-auto ${whyVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
              We're different because we understand the Nigerian market and deliver results that matter
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {differentiators.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={index}
                  className={`group relative overflow-hidden bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-border/50 hover-scale hover:shadow-xl transition-all duration-500 ${whyVisible ? 'animate-scale-in' : 'opacity-0'}`}
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <CardContent className="relative p-8">
                    <div className="flex items-start gap-6">
                      <div className="relative">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center shadow-lg">
                          <Icon className="w-8 h-8 text-primary" />
                        </div>
                        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold px-2 py-1 rounded-full">
                          {item.highlight}
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};