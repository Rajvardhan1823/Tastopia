import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const CommunitySection = () => {
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

            {/* Posts Feed */}
            <div className="text-center text-muted-foreground py-16">
              <div className="space-y-4">
                <svg className="w-16 h-16 mx-auto text-muted-foreground/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <h3 className="text-xl font-semibold">No community posts yet</h3>
                <p>Community posts will be loaded when users start sharing their food experiences</p>
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
                <div className="text-center text-muted-foreground py-8">
                  <p>Trending topics will be loaded from community activity</p>
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