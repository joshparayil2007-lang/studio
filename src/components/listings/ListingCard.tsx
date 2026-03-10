
"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ListingCardProps {
  id: string;
  title: string;
  price: string;
  location: string;
  category: string;
  imageUrl: string;
  imageHint?: string;
  timeAgo: string;
  isPromoted?: boolean;
}

export function ListingCard({
  id,
  title,
  price,
  location,
  category,
  imageUrl,
  imageHint,
  timeAgo,
  isPromoted
}: ListingCardProps) {
  return (
    <Link href={`/listings/${id}`} className="group block">
      <Card className="overflow-hidden h-full border-none shadow-sm hover:shadow-lg transition-all duration-300 bg-white group-hover:-translate-y-1">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            data-ai-hint={imageHint}
          />
          {isPromoted && (
            <Badge className="absolute top-2 left-2 bg-accent text-accent-foreground hover:bg-accent border-none font-bold">
              Promoted
            </Badge>
          )}
          <button 
            className="absolute top-2 right-2 p-2 rounded-full bg-black/20 backdrop-blur-sm text-white hover:bg-primary transition-colors"
            onClick={(e) => {
              e.preventDefault();
              // Handle wishlist logic
            }}
          >
            <Heart className="h-4 w-4" />
          </button>
          <div className="absolute bottom-3 left-3 px-3 py-1.5 bg-black/70 backdrop-blur-md rounded-lg text-white font-bold text-base shadow-lg">
            {price}
          </div>
        </div>
        <CardContent className="p-4 space-y-2">
          <p className="text-[10px] font-extrabold text-primary uppercase tracking-[0.2em]">{category}</p>
          <h3 className="font-bold text-lg line-clamp-1 group-hover:text-primary transition-colors leading-tight">
            {title}
          </h3>
          <div className="flex items-center text-muted-foreground text-sm gap-1.5 font-medium">
            <MapPin className="h-3.5 w-3.5 text-primary/70" />
            <span className="truncate">{location}</span>
          </div>
        </CardContent>
        <CardFooter className="px-4 pb-4 pt-0 flex justify-between items-center text-muted-foreground text-xs font-medium">
          <div className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            <span>{timeAgo}</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
