"use client";

import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Clock, 
  ChevronLeft, 
  Share2, 
  Heart, 
  MessageCircle, 
  ShieldCheck,
  AlertTriangle,
  User,
  ExternalLink,
  Camera
} from "lucide-react";
import Image from "next/image";
import { useMemo } from "react";

const allListings = [
  {
    id: "1",
    title: "2022 Royal Enfield Classic 350",
    price: "₹1,85,000",
    description: "Well maintained Royal Enfield Classic 350 (Stealth Black). Just 8,000 kms driven. Single owner, all service records available at authorized showroom. Includes aftermarket leg guards and premium seat covers. \n\nReason for selling: Moving abroad. \n\nPrice slightly negotiable for immediate buyers. Located near Lulu Mall, Kochi.",
    location: "Kochi, Kerala",
    category: "Vehicles",
    imageUrl: "https://picsum.photos/seed/bike1/1200/800",
    timeAgo: "1h ago",
    condition: "Used - Like New",
    postedAt: "Oct 25, 2024",
    seller: { name: "Rahul K.", rating: 4.9, joined: "Jan 2022" }
  },
  {
    id: "2",
    title: "3BHK Luxury Villa with Pool",
    price: "₹85,00,000",
    description: "Modern 3BHK Villa in a gated community at Kazhakkoottam. 2200 sq.ft built-up area on 5 cents land. Private swimming pool, modular kitchen, and centralized AC in all bedrooms. \n\nWalking distance to Technopark. 24/7 security and water supply. Excellent investment opportunity or family home.",
    location: "Trivandrum, Kerala",
    category: "Real Estate",
    imageUrl: "https://picsum.photos/seed/villa1/1200/800",
    timeAgo: "4h ago",
    condition: "New",
    postedAt: "Oct 25, 2024",
    seller: { name: "Abhilash Nair", rating: 5.0, joined: "Jun 2019" }
  },
  {
    id: "3",
    title: "iPhone 15 Pro Max 256GB - Seal Packed",
    price: "₹1,15,000",
    description: "Brand new, unopened iPhone 15 Pro Max. Natural Titanium color. Indian unit with full warranty. Bill available. Received as a gift, already using one. \n\nNo exchange. Fixed price.",
    location: "Kozhikode, Kerala",
    category: "Electronics",
    imageUrl: "https://picsum.photos/seed/phone1/1200/800",
    timeAgo: "2h ago",
    condition: "New",
    postedAt: "Oct 25, 2024",
    seller: { name: "Digital Hub", rating: 4.8, joined: "Feb 2023" }
  },
  {
    id: "4",
    title: "Traditional Kerala Kasavu Saree",
    price: "₹4,500",
    description: "Handwoven premium Kasavu saree with golden tissue border. 100% pure cotton. Perfect for weddings and festivals. Includes unstitched blouse piece. \n\nAuthentic Kuthampully handloom.",
    location: "Thrissur, Kerala",
    category: "Apparel",
    imageUrl: "https://picsum.photos/seed/saree1/1200/800",
    timeAgo: "12h ago",
    condition: "New",
    postedAt: "Oct 24, 2024",
    seller: { name: "Lakshmi Handlooms", rating: 4.7, joined: "Sep 2020" }
  }
];

export default function ListingDetailsPage() {
  const { id } = useParams();
  const router = useRouter();
  
  const listing = useMemo(() => {
    return allListings.find(item => item.id === id) || allListings[0];
  }, [id]);

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <Button 
          variant="ghost" 
          onClick={() => router.back()}
          className="hover:bg-primary/5 text-primary w-fit"
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to Kerala listings
        </Button>
        <div className="flex gap-2">
          <Button variant="outline" className="rounded-xl gap-2 font-medium">
            <Share2 className="h-4 w-4" />
            Share
          </Button>
          <Button variant="outline" className="rounded-xl gap-2 font-medium">
            <Heart className="h-4 w-4" />
            Save
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="relative aspect-video rounded-3xl overflow-hidden border shadow-xl bg-muted group">
            <Image 
              src={listing.imageUrl} 
              alt={listing.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
            <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md text-white p-2 rounded-xl">
               <Camera className="h-5 w-5" />
            </div>
            <div className="absolute bottom-6 left-6 px-6 py-3 bg-primary backdrop-blur-md rounded-2xl text-white font-extrabold text-3xl shadow-2xl">
              {listing.price}
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex flex-col gap-4 border-b pb-8">
              <h1 className="text-4xl font-extrabold tracking-tight leading-tight">{listing.title}</h1>
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground font-medium">
                <div className="flex items-center gap-2 bg-primary/5 px-3 py-1.5 rounded-full">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-primary">{listing.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>Posted {listing.timeAgo}</span>
                </div>
                <Badge variant="secondary" className="px-4 py-1.5 rounded-full text-xs uppercase tracking-widest border-none">
                  {listing.category}
                </Badge>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <ExternalLink className="h-5 w-5 text-primary" />
                Description
              </h3>
              <p className="whitespace-pre-line text-muted-foreground leading-relaxed text-lg">
                {listing.description}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-8 border-y">
              <div className="space-y-1">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Condition</p>
                <p className="font-bold text-lg">{listing.condition}</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Category</p>
                <p className="font-bold text-lg">{listing.category}</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Posted</p>
                <p className="font-bold text-lg">{listing.postedAt}</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Location</p>
                <p className="font-bold text-lg">Kerala</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <Card className="border-none shadow-2xl rounded-3xl overflow-hidden bg-white">
            <CardContent className="p-8 space-y-8">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-muted/30">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20">
                  <User className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-xl">{listing.seller.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                    <ShieldCheck className="h-4 w-4 text-green-500" />
                    <span className="font-medium text-green-600">Verified Kerala Seller</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <Button className="w-full h-14 rounded-2xl text-lg font-bold shadow-xl shadow-primary/25 hover:shadow-primary/40 transition-all">
                  <MessageCircle className="mr-2 h-6 w-6" />
                  Contact Seller
                </Button>
                <Button variant="outline" className="w-full h-14 rounded-2xl font-bold border-2 hover:bg-muted/50 transition-colors">
                  Make an Offer
                </Button>
              </div>

              <div className="pt-6 border-t space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">Safety Guidelines</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-sm text-muted-foreground font-medium">Inspect the item in person before paying.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-sm text-muted-foreground font-medium">Meet in a safe, public place.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-sm text-muted-foreground font-medium">Avoid high-value cash transactions alone.</span>
                  </li>
                </ul>
              </div>
              
              <Button variant="ghost" className="w-full text-destructive hover:text-destructive hover:bg-destructive/5 text-xs font-bold gap-2">
                <AlertTriangle className="h-4 w-4" />
                REPORT THIS AD
              </Button>
            </CardContent>
          </Card>

          <div className="bg-white rounded-3xl p-8 border-none shadow-xl">
            <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              Area Information
            </h4>
            <div className="aspect-square bg-muted rounded-2xl relative overflow-hidden border">
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-primary/20">
                      <MapPin className="h-8 w-8 text-primary" />
                    </div>
                    <p className="text-lg font-bold">{listing.location}</p>
                    <p className="text-xs text-muted-foreground mt-2 font-medium">Verified local listing</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
