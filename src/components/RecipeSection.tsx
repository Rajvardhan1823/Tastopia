import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const RecipeSection = () => {
  // Recipe data will be managed through backend
  const featuredRecipes: any[] = [];

  const categories = [
    { name: "Quick & Easy", icon: "⚡" },
    { name: "Traditional", icon: "🏛️" },
    { name: "Healthy", icon: "🥗" },
    { name: "Desserts", icon: "🍰" },
    { name: "Snacks", icon: "🍿" },
    { name: "Beverages", icon: "🧃" }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Recipe Corner</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover amazing recipes from home cooks and professional chefs. Share your own culinary creations!
          </p>
        </div>

        {/* Share Recipe CTA */}
        <div className="mb-12">
          <Card className="bg-gradient-accent text-white border-0 shadow-medium">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-2xl font-bold mb-2">Share Your Recipe</h3>
                  <p className="text-white/90">Have a family recipe or cooking tip? Share it with the community and help others discover new flavors!</p>
                </div>
                <Button size="lg" variant="secondary" className="bg-white text-accent hover:bg-white/90">
                  Post Recipe
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recipe Categories */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6">Browse by Category</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <Card key={index} className="hover:shadow-medium transition-all cursor-pointer group">
                <CardContent className="p-4 text-center">
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                    {category.icon}
                  </div>
                  <h4 className="font-semibold text-sm mb-1">{category.name}</h4>
                  <p className="text-xs text-muted-foreground">Browse</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Featured Recipes - Backend Integration Needed */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold">Recipe Platform</h3>
            <Button variant="outline">View All Recipes</Button>
          </div>

          <div className="text-center py-16">
            <div className="text-6xl mb-4">👨‍🍳</div>
            <h3 className="text-2xl font-bold mb-4">Recipe Sharing Platform Ready</h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Connect to backend for user-generated recipe content and community recipe sharing
            </p>
            <div className="max-w-2xl mx-auto">
              <div className="p-6 border rounded-lg">
                <h4 className="font-semibold mb-2">Recipe Features</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• User recipe submissions with photos</li>
                  <li>• Step-by-step cooking instructions</li>
                  <li>• Recipe ratings and community reviews</li>
                  <li>• Personal recipe collection & favorites</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Recipe Tips */}
        <div className="mt-16">
          <Card className="bg-muted/50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Recipe Sharing Tips</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-3">📸</div>
                  <h4 className="font-semibold mb-2">Great Photos</h4>
                  <p className="text-muted-foreground text-sm">Include step-by-step photos and final dish presentation</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">📝</div>
                  <h4 className="font-semibold mb-2">Clear Instructions</h4>
                  <p className="text-muted-foreground text-sm">Write detailed, easy-to-follow cooking instructions</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">💡</div>
                  <h4 className="font-semibold mb-2">Pro Tips</h4>
                  <p className="text-muted-foreground text-sm">Share your secret ingredients and cooking hacks</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RecipeSection;