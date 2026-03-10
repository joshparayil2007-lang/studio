"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Clock, 
  Heart, 
  Users, 
  ShieldCheck,
  Car, 
  Home, 
  Briefcase, 
  Hammer, 
  ShoppingBag, 
  Zap,
  HelpCircle,
  Tag,
  CircleHelp
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface ListingCardProps {
  id: string;
  title: string;
  price: string;
  location: string;
  category: string;
  type?: string;
  timeAgo: string;
  isPromoted?: boolean;
}

const categoryIcons: Record<string, any> = {
  "Vehicles": Car,
  "Housing": Home,
  "Real Estate": Home,
  "Jobs": Briefcase,
  "Community": Users,
  "Services": Hammer,
  "For Sale": ShoppingBag,
  "Gigs": Zap,
  "Electronics": ShoppingBag,
  "Apparel": ShoppingBag,
  "Pets": Users,
};

export function ListingCard({
  id,
  title,
  price,
  location,
  category,
  type,
  timeAgo,
  isPromoted
}: ListingCardProps) {
  const [viewers, setViewers] = useState(0);

  useEffect(() => {
    setViewers(Math.floor(Math.random() * 12) + 2);
  }, []);

  const CategoryIcon = categoryIcons[category] || CircleHelp;

  return (
    <Link href={`/listings/${id}`} className="group block">
      <Card className="overflow-hidden h-full border-none shadow-sm hover:shadow-xl transition-all duration-300 bg-white group-hover:-translate-y-1">
        <div className="relative aspect-[4/3] bg-gradient-to-br from-primary/10 via-background to-accent/10 flex items-center justify-center border-b p-6">
          <div className="text-center space-y-3">
            <div className="w-16 h-16 bg-white rounded-3xl shadow-lg flex items-center justify-center mx-auto text-primary group-hover:scale-110 transition-transform duration-500">
              <CategoryIcon className="h-8 w-8" />
            </div>
            <div className="flex flex-col items-center">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/60">{category}</p>
              {type && (
                <Badge variant="outline" className="mt-1 text-[9px] font-bold uppercase py-0 px-2 h-4 border-primary/20 text-primary">
                  {type}
                </Badge>
              )}
            </div>
          </div>

          {isPromoted && (
            <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground hover:bg-accent border-none font-bold animate-pulse text-[10px]">
              TRENDING
            </Badge>
          )}
          
          <button 
            className="absolute top-3 right-3 p-2 rounded-xl bg-white/80 backdrop-blur-sm text-muted-foreground hover:text-primary hover:bg-white transition-all shadow-sm"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <Heart className="h-4 w-4" />
          </button>

          <div className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-black/5 px-2 py-1 rounded-lg text-[10px] font-bold text-primary/80">
            <Users className="h-3 w-3" />
            {viewers} PEOPLE VIEWING
          </div>
        </div>

        <CardContent className="p-5 space-y-3">
          <div className="flex justify-between items-start gap-2">
            <h3 className="font-bold text-lg line-clamp-2 group-hover:text-primary transition-colors leading-tight min-h-[3rem]">
              {title}
            </h3>
            <div className="text-right">
              <p className="font-black text-primary text-lg">{price}</p>
            </div>
          </div>
          
          <div className="flex items-center text-muted-foreground text-xs gap-1.5 font-medium bg-muted/30 p-2 rounded-lg">
            <MapPin className="h-3.5 w-3.5 text-primary/70" />
            <span className="truncate">{location}</span>
          </div>
        </CardContent>

        <CardFooter className="px-5 pb-5 pt-0 flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">
          <div className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            <span>{timeAgo}</span>
          </div>
          <div className="flex items-center gap-1 text-green-600">
            <ShieldCheck className="h-3.5 w-3.5" />
            VERIFIED
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
