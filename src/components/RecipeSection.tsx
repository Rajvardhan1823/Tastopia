import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const RecipeSection = () => {
  // Mock data for recipes
  const featuredRecipes = [
    {
      id: 1,
      title: "Authentic Hyderabadi Biryani",
      author: {
        name: "Chef Amira",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face",
        verified: true
      },
      image: "https://images.unsplash.com/photo-1563379091339-03246963d4a8?w=400&h=250&fit=crop",
      cookTime: "2 hours",
      difficulty: "Medium",
      rating: 4.8,
      saves: 1240,
      description: "Learn the authentic method of making Hyderabadi biryani with perfectly cooked rice and tender meat",
      tags: ["Non-Veg", "Traditional", "Spicy", "Rice"]
    },
    {
      id: 2,
      title: "Quick Veg Stir Fry",
      author: {
        name: "Healthy Kitchen",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face",
        verified: false
      },
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=250&fit=crop",
      cookTime: "15 mins",
      difficulty: "Easy",
      rating: 4.6,
      saves: 890,
      description: "Colorful and nutritious vegetable stir fry that's ready in minutes",
      tags: ["Vegan", "Quick", "Healthy", "Vegetables"]
    },
    {
      id: 3,
      title: "Homemade Pizza Dough",
      author: {
        name: "Italian Corner",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
        verified: true
      },
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=250&fit=crop",
      cookTime: "45 mins",
      difficulty: "Easy",
      rating: 4.7,
      saves: 2100,
      description: "Perfect pizza dough recipe that's crispy outside and soft inside",
      tags: ["Vegetarian", "Italian", "Bread", "Base"]
    }
  ];

  const categories = [
    { name: "Quick & Easy", count: "2.5K+", icon: "⚡" },
    { name: "Traditional", count: "1.8K+", icon: "🏛️" },
    { name: "Healthy", count: "1.2K+", icon: "🥗" },
    { name: "Desserts", count: "950+", icon: "🍰" },
    { name: "Snacks", count: "780+", icon: "🍿" },
    { name: "Beverages", count: "450+", icon: "🧃" }
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
                  <p className="text-xs text-muted-foreground">{category.count}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Featured Recipes */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold">Featured Recipes</h3>
            <Button variant="outline">View All Recipes</Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredRecipes.map((recipe) => (
              <Card key={recipe.id} className="overflow-hidden hover:shadow-medium transition-all group">
                <div className="relative">
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-2 py-1 rounded-full text-sm font-semibold">
                    ⭐ {recipe.rating}
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 text-foreground">
                      {recipe.difficulty}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h4 className="font-bold text-lg mb-2 line-clamp-1">{recipe.title}</h4>
                  
                  <div className="flex items-center space-x-3 mb-3">
                    <Avatar className="w-6 h-6">
                      <AvatarImage src={recipe.author.avatar} />
                      <AvatarFallback>{recipe.author.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-muted-foreground">{recipe.author.name}</span>
                    {recipe.author.verified && <span className="text-primary text-xs">✓</span>}
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {recipe.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {recipe.tags.slice(0, 3).map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex justify-between items-center text-sm text-muted-foreground mb-4">
                    <span>🕐 {recipe.cookTime}</span>
                    <span>🔖 {recipe.saves} saves</span>
                  </div>

                  <div className="space-y-2">
                    <Button className="w-full bg-gradient-primary hover:opacity-90 transition-opacity">
                      View Recipe
                    </Button>
                    <Button variant="outline" className="w-full">
                      Save Recipe
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
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