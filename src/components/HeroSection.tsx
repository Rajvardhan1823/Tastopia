import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-food-community.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Food community hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Hero Badge */}
          <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
            India's First Food Community Network
          </Badge>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Discover, Order & 
            <span className="bg-gradient-food bg-clip-text text-transparent"> Share</span>
            <br />
            Food Experiences
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
            Find the perfect restaurant, book your table, order ahead, and connect with fellow food lovers in your city
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Input
                placeholder="Search restaurants, food courts, or dishes near you..."
                className="h-14 pl-12 pr-32 text-lg bg-white/95 backdrop-blur border-0 shadow-strong"
              />
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z" />
                </svg>
              </div>
              <Button
                size="lg"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-primary hover:opacity-90 transition-opacity"
              >
                Search
              </Button>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-primary hover:opacity-90 transition-opacity text-lg px-8 py-3 h-auto"
            >
              Find Restaurants
            </Button>
            <Button
              size="lg"
              className="bg-gradient-primary hover:opacity-90 transition-opacity text-lg px-8 py-3 h-auto"
            >
              Explore Food Courts
            </Button>
          </div>

          {/* Stats */}
          <div className="flex justify-center items-center space-x-8 mt-12 text-white/80">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">Restaurants</div>
              <div className="text-sm">Partner Network</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">Food Courts</div>
              <div className="text-sm">Easy Ordering</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">Community</div>
              <div className="text-sm">Food Lovers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;