import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const CultureSection = () => {
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
            {/* Featured Articles */}
            <div className="text-center text-muted-foreground py-16">
              <div className="space-y-4">
                <svg className="w-16 h-16 mx-auto text-muted-foreground/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <h3 className="text-xl font-semibold">No cultural articles yet</h3>
                <p>Food culture articles will be loaded when contributors start sharing their knowledge</p>
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
                <div className="text-center text-muted-foreground py-8">
                  <p>Regional content will be loaded from contributor articles</p>
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
                    { name: "Dr. Food History", expertise: "Food Historian", articles: "45" },
                    { name: "Culture Kitchen", expertise: "Cultural Writer", articles: "32" },
                    { name: "Heritage Chef", expertise: "Traditional Cook", articles: "28" }
                  ].map((contributor, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Avatar className="w-8 h-8">
                        <AvatarFallback>{contributor.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="font-medium text-sm">{contributor.name}</div>
                        <div className="text-xs text-muted-foreground">{contributor.articles} articles</div>
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