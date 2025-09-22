import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import foodCourtImage from "@/assets/food-court-hero.jpg";

const FoodCourtsSection = () => {
  // Data will be fetched from PetPooja API
  const foodCourts: any[] = [];
  const cities = ["Select City"]; // Will be populated from API

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

        {/* Food Courts Grid - Will populate from API */}
        <div className="text-center py-16">
          <div className="text-6xl mb-4">🏬</div>
          <h3 className="text-2xl font-bold mb-4">Food Courts Integration Ready</h3>
          <p className="text-muted-foreground mb-8">
            Connect with PetPooja API to display food courts and enable ordering
          </p>
          <div className="max-w-2xl mx-auto">
            <div className="p-6 border rounded-lg">
              <h4 className="font-semibold mb-2">Features Ready</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Fetch restaurant menus from food courts</li>
                <li>• Place orders directly to POS systems</li>
                <li>• Real-time order status updates</li>
                <li>• Skip traditional token systems</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-16">
          <Card className="bg-gradient-secondary text-white border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Why Choose Tastopia Food Courts?</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-2">Skip Token System</h4>
                  <p className="text-white/90 text-sm">Order directly without standing in long queues</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-2">Order & Pay Online</h4>
                  <p className="text-white/90 text-sm">Seamless digital ordering and payment</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM4.5 5.653c0-1.337 1.5-3.653 1.5-3.653s1.5 2.316 1.5 3.653a1.5 1.5 0 11-3 0zM15 5h2a2 2 0 012 2v6.5M6 20V4a2 2 0 012-2h6v6.5" />
                    </svg>
                  </div>
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