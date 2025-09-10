import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const Navigation = () => {
  const [activeTab, setActiveTab] = useState("discover");

  const navItems = [
    { id: "discover", label: "Discover", icon: "🔍" },
    { id: "foodcourts", label: "Food Courts", icon: "🏢" },
    { id: "community", label: "Community", icon: "👥" },
    { id: "recipes", label: "Recipes", icon: "📝" },
    { id: "culture", label: "Culture", icon: "🌍" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Tastopia
          </div>
          <Badge variant="secondary" className="hidden sm:inline-flex">
            Community
          </Badge>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-lg mx-8">
          <div className="relative">
            <Input
              placeholder="Search restaurants, dishes, or recipes..."
              className="w-full pl-10 bg-muted/50 border-muted-foreground/20 focus:bg-background transition-colors"
            />
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              🔍
            </div>
          </div>
        </div>

        {/* Profile & Actions */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm">
            Sign In
          </Button>
          <Button size="sm" className="bg-gradient-primary hover:opacity-90 transition-opacity">
            Join Community
          </Button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="border-t">
        <div className="container">
          <div className="flex space-x-0">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center space-x-2 px-6 py-3 text-sm font-medium transition-colors border-b-2 ${
                  activeTab === item.id
                    ? "border-primary text-primary bg-primary/5"
                    : "border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;