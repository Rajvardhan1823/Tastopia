import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const CommunitySection = () => {
  // Community posts will be managed through backend
  const communityPosts: any[] = [];

  const trendingTopics = [
    { tag: "BiryaniChallenge" },
    { tag: "VeganRecipes" },
    { tag: "StreetFoodStory" },
    { tag: "HomeCooking" },
    { tag: "FoodieFinds" }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Food Community</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Share your food experiences, discover new recipes, and connect with fellow food enthusiasts
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Feed */}
          <div className="lg:col-span-3">
            {/* Post Creation */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <Avatar>
                    <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face" />
                    <AvatarFallback>YU</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="bg-muted/50 rounded-lg p-3 cursor-pointer hover:bg-muted transition-colors">
                      Share your food experience, recipe, or review...
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">Photo</Button>
                  <Button variant="outline" size="sm">Recipe</Button>
                  <Button variant="outline" size="sm">Review</Button>
                  <Button variant="outline" size="sm">Check-in</Button>
                </div>
              </CardContent>
            </Card>

            {/* Posts Feed - Backend Integration Needed */}
            <div className="text-center py-16">
              <div className="text-6xl mb-4">💬</div>
              <h3 className="text-2xl font-bold mb-4">Community Features Ready</h3>
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                Connect to Supabase backend for user authentication and real-time community features
              </p>
              <div className="p-6 border rounded-lg max-w-md mx-auto">
                <h4 className="font-semibold mb-2">Community Features</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• User posts and reviews</li>
                  <li>• Real-time interactions</li>
                  <li>• Photo sharing</li>
                  <li>• Restaurant check-ins</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Trending Topics */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg">Trending in Food</CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <div className="space-y-3">
                  {trendingTopics.map((topic, index) => (
                    <div key={index} className="flex justify-between items-center hover:bg-muted/50 p-2 rounded cursor-pointer transition-colors">
                      <div>
                        <div className="font-medium">#{topic.tag}</div>
                        <div className="text-sm text-muted-foreground">Trending</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Suggested Food Lovers */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Food Lovers to Follow</CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <div className="space-y-4">
                  {[
                    { name: "Chef Vikas", handle: "@chefvikas" },
                    { name: "Food Blogger Maya", handle: "@maya_eats" },
                    { name: "Street Food Guide", handle: "@streetfood_in" }
                  ].map((user, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Avatar className="w-8 h-8">
                          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium text-sm">{user.name}</div>
                          <div className="text-xs text-muted-foreground">Food Enthusiast</div>
                        </div>
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

export default CommunitySection;