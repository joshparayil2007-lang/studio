
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
  timeAgo,
  isPromoted
}: ListingCardProps) {
  return (
    <Link href={`/listings/${id}`} className="group block">
      <Card className="overflow-hidden h-full border-none shadow-sm hover:shadow-md transition-all duration-300 bg-white">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {isPromoted && (
            <Badge className="absolute top-2 left-2 bg-accent text-accent-foreground hover:bg-accent">
              Promoted
            </Badge>
          )}
          <button className="absolute top-2 right-2 p-1.5 rounded-full bg-black/20 backdrop-blur-sm text-white hover:bg-black/40 transition-colors">
            <Heart className="h-4 w-4" />
          </button>
          <div className="absolute bottom-2 left-2 px-2 py-1 bg-black/60 backdrop-blur-md rounded text-white font-bold text-sm">
            {price}
          </div>
        </div>
        <CardContent className="p-4 space-y-2">
          <p className="text-xs font-medium text-primary uppercase tracking-wider">{category}</p>
          <h3 className="font-semibold text-lg line-clamp-1 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <div className="flex items-center text-muted-foreground text-sm gap-1">
            <MapPin className="h-3.5 w-3.5" />
            <span>{location}</span>
          </div>
        </CardContent>
        <CardFooter className="px-4 pb-4 pt-0 flex justify-between items-center text-muted-foreground text-xs">
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            <span>{timeAgo}</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
