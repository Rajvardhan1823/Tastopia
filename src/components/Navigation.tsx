import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useNavigate, useLocation } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { id: "discover", label: "Discover", path: "/discover" },
    { id: "foodcourts", label: "Food Courts", path: "/food-courts" },
    { id: "community", label: "Community", path: "/community" },
    { id: "recipes", label: "Recipes", path: "/recipes" },
    { id: "culture", label: "Culture", path: "/culture" },
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
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z" />
              </svg>
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
                onClick={() => navigate(item.path)}
                className={`flex items-center space-x-2 px-6 py-3 text-sm font-medium transition-colors border-b-2 ${
                  currentPath === item.path
                    ? "border-primary text-primary bg-primary/5"
                    : "border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
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