import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const DiscoverSection = () => {
  // Mock data for restaurants
  const restaurants = [
    {
      id: 1,
      name: "Mumbai Spice Kitchen",
      cuisine: "Indian",
      rating: 4.8,
      deliveryTime: "25-35 min",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300&h=200&fit=crop",
      specialty: "Biryani",
      price: "₹₹",
      tags: ["Dine-in", "Book Table", "Popular"]
    },
    {
      id: 2,
      name: "Tokyo Ramen House",
      cuisine: "Japanese",
      rating: 4.6,
      deliveryTime: "30-40 min",
      image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=300&h=200&fit=crop",
      specialty: "Authentic Ramen",
      price: "₹₹₹",
      tags: ["Dine-in", "Chef Special"]
    },
    {
      id: 3,
      name: "Italian Corner",
      cuisine: "Italian",
      rating: 4.7,
      deliveryTime: "20-30 min",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop",
      specialty: "Wood-fired Pizza",
      price: "₹₹",
      tags: ["Dine-in", "Book Table", "Family"]
    }
  ];

  const cuisineTypes = [
    { name: "Indian", count: "2.5K+", icon: "🍛" },
    { name: "Chinese", count: "1.8K+", icon: "🥢" },
    { name: "Italian", count: "950+", icon: "🍝" },
    { name: "Mexican", count: "450+", icon: "🌮" },
    { name: "Thai", count: "380+", icon: "🍜" },
    { name: "American", count: "320+", icon: "🍔" }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        {/* AI Assistant Bot */}
        <div className="mb-12">
          <Card className="bg-gradient-primary text-white border-0 shadow-medium">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="text-4xl">🤖</div>
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
                  <p className="text-sm text-muted-foreground">{cuisine.count}</p>
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
              💰 Budget Friendly
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-muted">
              🌱 Veg Only
            </Badge>
          </div>
        </div>

        {/* Restaurant Grid */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold">Popular Near You</h2>
            <Button variant="outline">View All</Button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {restaurants.map((restaurant) => (
              <Card key={restaurant.id} className="hover:shadow-medium transition-all cursor-pointer group overflow-hidden">
                <div className="relative">
                  <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-2 py-1 rounded-full text-sm font-semibold">
                    ⭐ {restaurant.rating}
                  </div>
                  <div className="absolute bottom-4 left-4 flex space-x-1">
                    {restaurant.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs bg-white/90 text-foreground">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg">{restaurant.name}</h3>
                    <span className="text-sm text-muted-foreground">{restaurant.price}</span>
                  </div>
                  
                  <p className="text-muted-foreground mb-2">{restaurant.cuisine} • {restaurant.specialty}</p>
                  
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-sm text-muted-foreground">🕐 {restaurant.deliveryTime}</span>
                    <div className="space-x-2">
                      <Button size="sm" variant="outline">View Menu</Button>
                      <Button size="sm" className="bg-gradient-primary hover:opacity-90">Book Table</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;