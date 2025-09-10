import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <HeroSection />
      </main>
      
      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
                Tastopia
              </div>
              <p className="text-sm text-background/80">
                India's first food community network connecting food lovers, restaurants, and cultures.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Discover</h4>
              <ul className="space-y-2 text-sm text-background/80">
                <li>Restaurants</li>
                <li>Food Courts</li>
                <li>Recipes</li>
                <li>Culture</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Community</h4>
              <ul className="space-y-2 text-sm text-background/80">
                <li>Join Community</li>
                <li>Share Recipes</li>
                <li>Write Articles</li>
                <li>Food Reviews</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-background/80">
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm text-background/60">
            © 2024 Tastopia Community. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
