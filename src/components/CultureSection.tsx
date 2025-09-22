import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const CultureSection = () => {
  // Cultural content will be managed through backend  
  const culturalPosts: any[] = [];

  const regions = [
    { name: "North India", flag: "🏔️" },
    { name: "South India", flag: "🌴" },
    { name: "East India", flag: "🐟" },
    { name: "West India", flag: "🌊" },
    { name: "Central India", flag: "🌾" },
    { name: "Northeast", flag: "🏔️" }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Food Culture & Heritage</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore the rich culinary heritage of India and the world. Discover stories, traditions, and cultural significance behind your favorite dishes
          </p>
        </div>

        {/* Write Article CTA */}
        <div className="mb-12">
          <Card className="bg-gradient-hero text-white border-0 shadow-medium">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-2xl font-bold mb-2">Share Cultural Food Stories</h3>
                  <p className="text-white/90">Have knowledge about food traditions, regional specialties, or cultural significance? Write and share your insights!</p>
                </div>
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                  Write Article
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
          {/* Featured Articles - Backend Integration Needed */}
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📚</div>
            <h3 className="text-2xl font-bold mb-4">Cultural Food Stories Platform</h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Platform ready for cultural food content, stories, and blog management with user contributions
            </p>
            <div className="max-w-2xl mx-auto">
              <div className="p-6 border rounded-lg">
                <h4 className="font-semibold mb-2">Culture Features</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Food history and cultural stories</li>
                  <li>• Regional cuisine insights and traditions</li>
                  <li>• User-contributed articles and experiences</li>
                  <li>• Cultural food photography and heritage</li>
                </ul>
              </div>
            </div>
          </div>

            {/* Load More */}
            <div className="text-center mt-8">
              <Button variant="outline" size="lg">
                Load More Articles
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Explore by Region */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg">Explore by Region</CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <div className="space-y-3">
                  {regions.map((region, index) => (
                    <div key={index} className="flex justify-between items-center hover:bg-muted/50 p-2 rounded cursor-pointer transition-colors">
                      <div className="flex items-center space-x-2">
                        <span>{region.flag}</span>
                        <span className="font-medium">{region.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">Browse</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Popular Topics */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg">Popular Topics</CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <div className="space-y-2">
                  {[
                    "Festival Foods",
                    "Street Food History", 
                    "Royal Cuisines",
                    "Cooking Techniques",
                    "Spice Stories",
                    "Food Traditions"
                  ].map((topic, index) => (
                    <div key={index} className="p-2 hover:bg-muted/50 rounded cursor-pointer transition-colors">
                      <span className="text-sm font-medium">#{topic}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Featured Contributors */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Featured Contributors</CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <div className="space-y-4">
                  {[
                    { name: "Dr. Food History", expertise: "Food Historian" },
                    { name: "Culture Kitchen", expertise: "Cultural Writer" },
                    { name: "Heritage Chef", expertise: "Traditional Cook" }
                  ].map((contributor, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Avatar className="w-8 h-8">
                        <AvatarFallback>{contributor.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="font-medium text-sm">{contributor.name}</div>
                        <div className="text-xs text-muted-foreground">{contributor.expertise}</div>
                      </div>
                      <Button size="sm" variant="outline">Follow</Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CultureSection;