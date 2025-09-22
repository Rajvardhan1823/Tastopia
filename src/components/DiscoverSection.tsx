import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const DiscoverSection = () => {
  // Data will be fetched from PetPooja API
  const restaurants: any[] = [];

  const cuisineTypes = [
    { name: "Indian", icon: "🍛" },
    { name: "Chinese", icon: "🥢" },
    { name: "Italian", icon: "🍝" },
    { name: "Mexican", icon: "🌮" },
    { name: "Thai", icon: "🍜" },
    { name: "American", icon: "🍔" }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        {/* AI Assistant Bot */}
        <div className="mb-12">
          <Card className="bg-gradient-primary text-white border-0 shadow-medium">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">AI Food Assistant</h3>
                  <p className="text-white/90 mb-4">Ask me anything about food! "Best veg dishes near me?" or "Restaurants with parking?"</p>
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Ask about food, restaurants, or dietary preferences..."
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                    />
                    <Button variant="secondary" className="bg-white text-primary hover:bg-white/90">
                      Ask
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Cuisine Categories */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Browse by Cuisine</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {cuisineTypes.map((cuisine, index) => (
              <Card key={index} className="hover:shadow-medium transition-all cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                    {cuisine.icon}
                  </div>
                  <h4 className="font-semibold mb-1">{cuisine.name}</h4>
                  <p className="text-sm text-muted-foreground">Browse</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Filters */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="cursor-pointer hover:bg-secondary/80">
              🍴 Dine-in Available
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-muted">
              🅿️ Parking Available
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-muted">
              ⭐ Highly Rated
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-muted">
              Budget Friendly
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-muted">
              🌱 Veg Only
            </Badge>
          </div>
        </div>

        {/* Restaurant Grid - Will populate from PetPooja API */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold">Restaurant Discovery</h2>
            <Button variant="outline">View All</Button>
          </div>
          
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🍽️</div>
            <h3 className="text-2xl font-bold mb-4">Ready for PetPooja Integration</h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              This section will display restaurants with menus fetched from PetPooja API. 
              Features include real-time menu updates, order placement, and table booking.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="p-6 border rounded-lg">
                <h4 className="font-semibold mb-2">Menu Management</h4>
                <p className="text-sm text-muted-foreground">Push/Fetch Menu APIs integrated</p>
              </div>
              <div className="p-6 border rounded-lg">
                <h4 className="font-semibold mb-2">Order Processing</h4>
                <p className="text-sm text-muted-foreground">Direct POS integration for orders</p>
              </div>
              <div className="p-6 border rounded-lg">
                <h4 className="font-semibold mb-2">Real-time Updates</h4>
                <p className="text-sm text-muted-foreground">Stock status and store management</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;