"use client";

import { cn } from "@/lib/utils";
import { 
  Car, 
  Home, 
  Briefcase, 
  Users, 
  Hammer, 
  ShoppingBag, 
  Zap,
  Heart,
  HelpCircle
} from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const categories = [
  { name: "Community", icon: Users, slug: "community" },
  { name: "Housing", icon: Home, slug: "housing" },
  { name: "Jobs", icon: Briefcase, slug: "jobs" },
  { name: "Services", icon: Hammer, slug: "services" },
  { name: "For Sale", icon: ShoppingBag, slug: "for-sale" },
  { name: "Gigs", icon: Zap, slug: "gigs" },
  { name: "Vehicles", icon: Car, slug: "vehicles" },
  { name: "Missed Connections", icon: Heart, slug: "missed-connections" },
  { name: "Discussion", icon: HelpCircle, slug: "discussion" },
];

export function CategoryNav() {
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("category");

  return (
    <div className="w-full bg-white border-b overflow-x-auto no-scrollbar">
      <div className="container mx-auto px-4 py-4 flex space-x-8 min-w-max">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/listings?category=${cat.slug}`}
            className={cn(
              "flex flex-col items-center gap-2 group transition-all",
              activeCategory === cat.slug ? "text-primary" : "text-muted-foreground hover:text-primary"
            )}
          >
            <div className={cn(
              "w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300",
              activeCategory === cat.slug 
                ? "bg-primary text-white shadow-lg shadow-primary/20 scale-110" 
                : "bg-muted group-hover:bg-accent group-hover:text-accent-foreground"
            )}>
              <cat.icon className="h-6 w-6" />
            </div>
            <span className="text-xs font-medium">{cat.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
