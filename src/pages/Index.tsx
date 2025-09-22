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
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-background/80">
                <li>Restaurants</li>
                <li>Food Courts</li>
                <li>Community</li>
                <li>Recipes</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Features</h4>
              <ul className="space-y-2 text-sm text-background/80">
                <li>Order Management</li>
                <li>Real-time Updates</li>
                <li>POS Integration</li>
                <li>Stock Management</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-background/80">
                <li>API Documentation</li>
                <li>Integration Guide</li>
                <li>Contact Support</li>
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
