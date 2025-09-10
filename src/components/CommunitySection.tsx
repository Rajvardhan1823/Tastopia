import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const CommunitySection = () => {
  // Mock data for community posts
  const communityPosts = [
    {
      id: 1,
      user: {
        name: "Priya Sharma",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face",
        handle: "@priya_foodie",
        verified: true
      },
      type: "review",
      restaurant: "Mumbai Spice Kitchen",
      rating: 5,
      content: "Amazing biryani experience! The flavors were authentic and the portion size was generous. Perfect for family dining.",
      images: ["https://images.unsplash.com/photo-1563379091339-03246963d4a8?w=300&h=200&fit=crop"],
      timestamp: "2 hours ago",
      likes: 24,
      comments: 8
    },
    {
      id: 2,
      user: {
        name: "Raj Patel",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
        handle: "@raj_eats",
        verified: false
      },
      type: "post",
      content: "Just tried making my grandmother's secret dal recipe! The trick is to add jaggery at the end. Who wants the recipe?",
      images: ["https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=300&h=200&fit=crop"],
      timestamp: "4 hours ago",
      likes: 67,
      comments: 15
    },
    {
      id: 3,
      user: {
        name: "Sarah Chen",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face",
        handle: "@sarah_cooks",
        verified: true
      },
      type: "review",
      restaurant: "Tokyo Ramen House",
      rating: 4,
      content: "Authentic ramen experience in the heart of the city. The broth was rich and flavorful. Definitely coming back!",
      images: ["https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=300&h=200&fit=crop"],
      timestamp: "6 hours ago",
      likes: 41,
      comments: 12
    }
  ];

  const trendingTopics = [
    { tag: "BiryaniChallenge", posts: "2.5K" },
    { tag: "VeganRecipes", posts: "1.8K" },
    { tag: "StreetFoodStory", posts: "1.2K" },
    { tag: "HomeCooking", posts: "950" },
    { tag: "FoodieFinds", posts: "780" }
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
                  <Button variant="outline" size="sm">📷 Photo</Button>
                  <Button variant="outline" size="sm">📝 Recipe</Button>
                  <Button variant="outline" size="sm">⭐ Review</Button>
                  <Button variant="outline" size="sm">📍 Check-in</Button>
                </div>
              </CardContent>
            </Card>

            {/* Posts Feed */}
            <div className="space-y-6">
              {communityPosts.map((post) => (
                <Card key={post.id} className="hover:shadow-medium transition-all">
                  <CardContent className="p-6">
                    {/* User Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <Avatar>
                          <AvatarImage src={post.user.avatar} />
                          <AvatarFallback>{post.user.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="font-semibold">{post.user.name}</span>
                            {post.user.verified && <span className="text-primary">✓</span>}
                          </div>
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <span>{post.user.handle}</span>
                            <span>•</span>
                            <span>{post.timestamp}</span>
                          </div>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">⋯</Button>
                    </div>

                    {/* Restaurant Review Header */}
                    {post.type === "review" && post.restaurant && (
                      <div className="mb-3">
                        <div className="flex items-center space-x-2">
                          <Badge variant="secondary">Restaurant Review</Badge>
                          <span className="font-medium">{post.restaurant}</span>
                          <div className="flex text-yellow-500">
                            {Array.from({ length: post.rating }, (_, i) => (
                              <span key={i}>⭐</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Content */}
                    <p className="mb-4 text-foreground leading-relaxed">{post.content}</p>

                    {/* Images */}
                    {post.images && post.images.length > 0 && (
                      <div className="mb-4">
                        <img
                          src={post.images[0]}
                          alt="Food post"
                          className="w-full max-w-md h-64 object-cover rounded-lg"
                        />
                      </div>
                    )}

                    {/* Actions */}
                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="flex items-center space-x-6">
                        <button className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
                          <span>❤️</span>
                          <span>{post.likes}</span>
                        </button>
                        <button className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
                          <span>💬</span>
                          <span>{post.comments}</span>
                        </button>
                        <button className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
                          <span>🔄</span>
                          <span>Share</span>
                        </button>
                      </div>
                      <button className="text-muted-foreground hover:text-primary transition-colors">
                        🔖
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
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
                        <div className="text-sm text-muted-foreground">{topic.posts} posts</div>
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
                    { name: "Chef Vikas", handle: "@chefvikas", followers: "45K" },
                    { name: "Food Blogger Maya", handle: "@maya_eats", followers: "23K" },
                    { name: "Street Food Guide", handle: "@streetfood_in", followers: "67K" }
                  ].map((user, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Avatar className="w-8 h-8">
                          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium text-sm">{user.name}</div>
                          <div className="text-xs text-muted-foreground">{user.followers} followers</div>
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