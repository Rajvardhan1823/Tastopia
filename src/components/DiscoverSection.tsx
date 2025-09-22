import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const DiscoverSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        {/* AI Assistant Bot */}
        <div className="mb-12">
          <Card className="bg-gradient-primary text-white border-0 shadow-medium">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <div className="text-center text-muted-foreground">
            <p>Cuisine categories will be loaded from your restaurant data</p>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="cursor-pointer hover:bg-secondary/80">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Dine-in Available
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-muted">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2v0a2 2 0 01-2-2v-5H8z" />
              </svg>
              Parking Available
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-muted">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
              Highly Rated
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-muted">
              Budget Friendly
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-muted">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              Veg Only
            </Badge>
          </div>
        </div>

        {/* Restaurant Grid */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold">Popular Near You</h2>
            <Button variant="outline">View All</Button>
          </div>
          
          <div className="text-center text-muted-foreground py-16">
            <div className="space-y-4">
              <svg className="w-16 h-16 mx-auto text-muted-foreground/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <h3 className="text-xl font-semibold">No restaurants loaded</h3>
              <p>Restaurant data will be loaded from PetPooja API</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;