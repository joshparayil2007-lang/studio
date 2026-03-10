
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
import Link from "next/link";
import { useMemo } from "react";

const allListings = [
  {
    id: "1",
    title: "2019 Tesla Model 3 Performance",
    price: "$34,500",
    description: "Mint condition Tesla Model 3 Performance. Only 15,000 miles. Always garage kept and hand washed. Includes Full Self-Driving capability ($12k value). Upgraded 20\" Performance Wheels, carbon fiber spoiler, and aluminum alloy pedals. \n\nAcceleration: 0-60 mph in 3.1s. Range: Up to 310 miles. \n\nSerious inquiries only. No lowball offers.",
    location: "Downtown, Seattle",
    category: "Vehicles",
    imageUrl: "https://picsum.photos/seed/car1/1200/800",
    timeAgo: "2h ago",
    condition: "Used - Like New",
    postedAt: "Oct 24, 2024",
    seller: { name: "Alex J.", rating: 4.8, joined: "Mar 2021" }
  },
  {
    id: "2",
    title: "Vintage Mahogany Dining Table",
    price: "$450",
    description: "Solid mahogany dining table from the 1960s. Seats 6 comfortably, includes two 12-inch leaves for extra seating. Beautiful wood grain with minor surface scratches typical for its age. \n\nDimensions: 60\"L x 40\"W x 30\"H. \n\nPick up only in Ballard. Cash or Venmo preferred.",
    location: "Ballard, WA",
    category: "Home & Garden",
    imageUrl: "https://picsum.photos/seed/garden1/1200/800",
    timeAgo: "5h ago",
    condition: "Used - Good",
    postedAt: "Oct 24, 2024",
    seller: { name: "Sarah M.", rating: 5.0, joined: "Jun 2019" }
  },
  {
    id: "3",
    title: "Sony A7III Mirrorless Camera Body",
    price: "$1,100",
    description: "Selling my Sony A7III body only. Shutter count is low (approx 12k). Excellent condition, no scratches on the sensor or screen. Includes original box, 2 batteries, and dual charger. \n\nPerfect for professionals or enthusiasts starting with full-frame photography.",
    location: "Capitol Hill, Seattle",
    category: "Electronics",
    imageUrl: "https://picsum.photos/seed/elec1/1200/800",
    timeAgo: "1d ago",
    condition: "Used - Like New",
    postedAt: "Oct 23, 2024",
    seller: { name: "Tech Garage", rating: 4.9, joined: "Jan 2022" }
  },
  {
    id: "4",
    title: "1BR Apartment with Mountain View",
    price: "$2,200/mo",
    description: "Beautiful 1 bedroom apartment in the heart of Queen Anne. Top floor unit with stunning views of the Olympic Mountains. Modern kitchen with stainless steel appliances, in-unit laundry, and private balcony. \n\nAvailable for move-in Nov 1st. 12-month lease required.",
    location: "Queen Anne, WA",
    category: "Real Estate",
    imageUrl: "https://picsum.photos/seed/home1/1200/800",
    timeAgo: "3h ago",
    condition: "N/A",
    postedAt: "Oct 24, 2024",
    seller: { name: "Management Co.", rating: 4.5, joined: "Sep 2018" }
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
          Back to results
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
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Views</p>
                <p className="font-bold text-lg">452</p>
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
                    <span className="font-medium text-green-600">Verified Seller</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <Button className="w-full h-14 rounded-2xl text-lg font-bold shadow-xl shadow-primary/25 hover:shadow-primary/40 transition-all">
                  <MessageCircle className="mr-2 h-6 w-6" />
                  Reply to Ad
                </Button>
                <Button variant="outline" className="w-full h-14 rounded-2xl font-bold border-2 hover:bg-muted/50 transition-colors">
                  Make an Offer
                </Button>
              </div>

              <div className="pt-6 border-t space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">Pro Safety Guidelines</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0 shadow-sm shadow-primary/50" />
                    <span className="text-sm text-muted-foreground font-medium">Inspect item in person before payment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0 shadow-sm shadow-primary/50" />
                    <span className="text-sm text-muted-foreground font-medium">Cash or secure digital payment only</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0 shadow-sm shadow-primary/50" />
                    <span className="text-sm text-muted-foreground font-medium">Always meet in safe public locations</span>
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
              Location Details
            </h4>
            <div className="aspect-square bg-muted rounded-2xl relative overflow-hidden border">
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-primary/20">
                      <MapPin className="h-8 w-8 text-primary" />
                    </div>
                    <p className="text-lg font-bold">{listing.location}</p>
                    <p className="text-xs text-muted-foreground mt-2 font-medium">Exact address provided upon inquiry</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
