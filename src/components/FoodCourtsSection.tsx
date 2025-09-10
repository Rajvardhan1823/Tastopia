import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import foodCourtImage from "@/assets/food-court-hero.jpg";

const FoodCourtsSection = () => {
  // Mock data for food courts and malls
  const foodCourts = [
    {
      id: 1,
      name: "Phoenix Mall Food Court",
      location: "Velachery, Chennai",
      totalStores: 24,
      status: "Open",
      timing: "10 AM - 10 PM",
      image: foodCourtImage,
      popularStores: ["KFC", "McDonald's", "Subway", "Taco Bell"],
      offers: "20% off on orders above ₹300"
    },
    {
      id: 2,
      name: "Express Avenue Food Court",
      location: "Royapettah, Chennai",
      totalStores: 18,
      status: "Open",
      timing: "11 AM - 11 PM",
      image: foodCourtImage,
      popularStores: ["Pizza Hut", "Domino's", "Burger King", "Starbucks"],
      offers: "Buy 1 Get 1 Free on beverages"
    },
    {
      id: 3,
      name: "Forum Mall Food Junction",
      location: "Vadapalani, Chennai",
      totalStores: 16,
      status: "Open",
      timing: "10 AM - 9 PM",
      image: foodCourtImage,
      popularStores: ["Wow! Momo", "Faasos", "Behrouz Biryani", "Oven Story"],
      offers: "Free delivery on food court orders"
    }
  ];

  const cities = ["Chennai", "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Pune"];

  return (
    <section className="py-16 bg-background">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Food Courts Near You</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Skip the token system! Order directly from your favorite food court stores and enjoy hassle-free dining
          </p>
        </div>

        {/* City Selection */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-4">
            <span className="font-medium">Select your city:</span>
            <Select defaultValue="chennai">
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Choose city" />
              </SelectTrigger>
              <SelectContent>
                {cities.map((city) => (
                  <SelectItem key={city.toLowerCase()} value={city.toLowerCase()}>
                    {city}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Food Courts Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {foodCourts.map((court) => (
            <Card key={court.id} className="overflow-hidden hover:shadow-medium transition-all">
              <div className="relative">
                <img
                  src={court.image}
                  alt={court.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                    {court.status}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-semibold">
                  {court.totalStores} Stores
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{court.name}</h3>
                <p className="text-muted-foreground mb-4">📍 {court.location}</p>
                
                <div className="mb-4">
                  <p className="text-sm text-muted-foreground mb-2">🕐 {court.timing}</p>
                  {court.offers && (
                    <Badge variant="outline" className="text-xs bg-primary/10 text-primary border-primary/20">
                      🎁 {court.offers}
                    </Badge>
                  )}
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Popular Stores:</h4>
                  <div className="flex flex-wrap gap-2">
                    {court.popularStores.map((store, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {store}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Button className="w-full bg-gradient-primary hover:opacity-90 transition-opacity">
                    View All Stores & Order
                  </Button>
                  <Button variant="outline" className="w-full">
                    See Menu & Prices
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="mt-16">
          <Card className="bg-gradient-secondary text-white border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Why Choose Tastopia Food Courts?</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-3">⚡</div>
                  <h4 className="font-semibold mb-2">Skip Token System</h4>
                  <p className="text-white/90 text-sm">Order directly without standing in long queues</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">📱</div>
                  <h4 className="font-semibold mb-2">Order & Pay Online</h4>
                  <p className="text-white/90 text-sm">Seamless digital ordering and payment</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">🍽️</div>
                  <h4 className="font-semibold mb-2">Ready When You Arrive</h4>
                  <p className="text-white/90 text-sm">Your food will be prepared and waiting</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FoodCourtsSection;