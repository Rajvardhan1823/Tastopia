import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const RecipeSection = () => {
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
          <div className="text-center text-muted-foreground">
            <p>Recipe categories will be loaded from community contributions</p>
          </div>
        </div>

        {/* Featured Recipes */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold">Featured Recipes</h3>
            <Button variant="outline">View All Recipes</Button>
          </div>

          <div className="text-center text-muted-foreground py-16">
            <div className="space-y-4">
              <svg className="w-16 h-16 mx-auto text-muted-foreground/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <h3 className="text-xl font-semibold">No recipes shared yet</h3>
              <p>Community recipes will appear here when users start sharing their cooking creations</p>
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
                  <div className="w-12 h-12 mx-auto mb-3 bg-primary/10 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-2">Great Photos</h4>
                  <p className="text-muted-foreground text-sm">Include step-by-step photos and final dish presentation</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 bg-primary/10 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-2">Clear Instructions</h4>
                  <p className="text-muted-foreground text-sm">Write detailed, easy-to-follow cooking instructions</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 bg-primary/10 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
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