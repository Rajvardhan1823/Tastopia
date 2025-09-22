import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const CultureSection = () => {
  // Mock data for cultural food content
  const culturalPosts = [
    {
      id: 1,
      title: "The Rich History of South Indian Filter Coffee",
      author: {
        name: "Dr. Meera Rajesh",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face",
        expertise: "Food Historian"
      },
      image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=250&fit=crop",
      region: "South India",
      readTime: "5 min read",
      excerpt: "Discover how filter coffee became an integral part of Tamil culture and the traditional brewing methods passed down through generations...",
      tags: ["Coffee Culture", "Tamil Nadu", "Traditional", "History"],
      likes: 1420,
      type: "article"
    },
    {
      id: 2,
      title: "Street Food Chronicles: Mumbai's Vada Pav Journey",
      author: {
        name: "Rohit Shah",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
        expertise: "Food Blogger"
      },
      image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&h=250&fit=crop",
      region: "Maharashtra",
      readTime: "7 min read", 
      excerpt: "From humble beginnings to becoming Mumbai's most beloved street food, the story of Vada Pav is a testament to the city's spirit...",
      tags: ["Street Food", "Mumbai", "Innovation", "Culture"],
      likes: 2100,
      type: "story"
    },
    {
      id: 3,
      title: "The Art of Bengali Sweets: More Than Just Desserts",
      author: {
        name: "Anita Banerjee",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face",
        expertise: "Cultural Food Writer"
      },
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=250&fit=crop",
      region: "West Bengal",
      readTime: "6 min read",
      excerpt: "Bengali sweets are not just confections but carriers of culture, emotion, and celebration. Each sweet tells a story of tradition...",
      tags: ["Bengali Cuisine", "Sweets", "Tradition", "Festivals"],
      likes: 1850,
      type: "article"
    }
  ];

  const regions = [
    { name: "North India", count: "450+", flag: "🏔️" },
    { name: "South India", count: "380+", flag: "🌴" },
    { name: "East India", count: "290+", flag: "🐟" },
    { name: "West India", count: "320+", flag: "🌊" },
    { name: "Central India", count: "180+", flag: "🌾" },
    { name: "Northeast", count: "120+", flag: "🏔️" }
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
            {/* Featured Articles */}
            <div className="space-y-6">
              {culturalPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-medium transition-all">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-2 mb-3">
                          <Badge variant="secondary">{post.region}</Badge>
                          <Badge variant="outline" className="capitalize">{post.type}</Badge>
                        </div>

                        <h3 className="text-xl font-bold mb-3 hover:text-primary cursor-pointer transition-colors">
                          {post.title}
                        </h3>

                        <div className="flex items-center space-x-3 mb-3">
                          <Avatar className="w-8 h-8">
                            <AvatarImage src={post.author.avatar} />
                            <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium text-sm">{post.author.name}</div>
                            <div className="text-xs text-muted-foreground">{post.author.expertise}</div>
                          </div>
                        </div>

                        <p className="text-muted-foreground mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>

                        <div className="flex flex-wrap gap-1 mb-4">
                          {post.tags.slice(0, 3).map((tag, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex justify-between items-center">
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <span>📖 {post.readTime}</span>
                            <span>❤️ {post.likes}</span>
                          </div>
                          <Button variant="outline" size="sm">
                            Read Article
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
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
                      <span className="text-sm text-muted-foreground">{region.count}</span>
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