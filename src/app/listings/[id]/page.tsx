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
  Info,
  TrendingUp,
  Award,
  Zap,
  CheckCircle2
} from "lucide-react";
import { useMemo } from "react";

const allListings = [
  {
    id: "1",
    title: "2022 Royal Enfield Classic 350",
    price: "₹1,85,000",
    description: "Well maintained Royal Enfield Classic 350 (Stealth Black). Just 8,000 kms driven. Single owner, all service records available at authorized showroom. Includes aftermarket leg guards and premium seat covers. \n\nReason for selling: Moving abroad. \n\nPrice slightly negotiable for immediate buyers. Located near Lulu Mall, Kochi.",
    location: "Kochi, Kerala",
    category: "Vehicles",
    timeAgo: "1h ago",
    condition: "Used - Like New",
    postedAt: "Oct 25, 2024",
    seller: { name: "Rahul K.", rating: 4.9, joined: "Jan 2022" },
    insight: "The Classic 350 is currently the #1 most searched motorcycle in Ernakulam district."
  },
  {
    id: "2",
    title: "3BHK Luxury Villa with Pool",
    price: "₹85,00,000",
    description: "Modern 3BHK Villa in a gated community at Kazhakkoottam. 2200 sq.ft built-up area on 5 cents land. Private swimming pool, modular kitchen, and centralized AC in all bedrooms. \n\nWalking distance to Technopark. 24/7 security and water supply. Excellent investment opportunity or family home.",
    location: "Trivandrum, Kerala",
    category: "Real Estate",
    timeAgo: "4h ago",
    condition: "New",
    postedAt: "Oct 25, 2024",
    seller: { name: "Abhilash Nair", rating: 5.0, joined: "Jun 2019" },
    insight: "Properties in Kazhakkoottam have seen a 12% value increase since last year due to IT expansion."
  },
  {
    id: "3",
    title: "iPhone 15 Pro Max 256GB - Seal Packed",
    price: "₹1,15,000",
    description: "Brand new, unopened iPhone 15 Pro Max. Natural Titanium color. Indian unit with full warranty. Bill available. Received as a gift, already using one. \n\nNo exchange. Fixed price.",
    location: "Kozhikode, Kerala",
    category: "Electronics",
    timeAgo: "2h ago",
    condition: "New",
    postedAt: "Oct 25, 2024",
    seller: { name: "Digital Hub", rating: 4.8, joined: "Feb 2023" },
    insight: "This price is 5% lower than the average retail price in Kozhikode electronic markets."
  },
  {
    id: "4",
    title: "Traditional Kerala Kasavu Saree",
    price: "₹4,500",
    description: "Handwoven premium Kasavu saree with golden tissue border. 100% pure cotton. Perfect for weddings and festivals. Includes unstitched blouse piece. \n\nAuthentic Kuthampully handloom.",
    location: "Thrissur, Kerala",
    category: "Apparel",
    timeAgo: "12h ago",
    condition: "New",
    postedAt: "Oct 24, 2024",
    seller: { name: "Lakshmi Handlooms", rating: 4.7, joined: "Sep 2020" },
    insight: "Authentic Kuthampully sarees are currently in high demand for the upcoming festive season."
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
          className="hover:bg-primary/5 text-primary w-fit rounded-xl"
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to Results
        </Button>
        <div className="flex gap-2">
          <Button variant="outline" className="rounded-xl gap-2 font-bold text-xs uppercase tracking-widest">
            <Share2 className="h-4 w-4" />
            Share
          </Button>
          <Button variant="outline" className="rounded-xl gap-2 font-bold text-xs uppercase tracking-widest text-primary border-primary/20">
            <Heart className="h-4 w-4" />
            Save
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Replacement for Image: Dynamic Data Visualization/Header */}
          <div className="p-10 rounded-[2.5rem] bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Zap className="h-64 w-64 rotate-12" />
            </div>
            
            <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-3">
                <Badge className="bg-white/20 hover:bg-white/30 text-white border-none backdrop-blur-md px-4 py-1 rounded-full font-bold">
                  {listing.category}
                </Badge>
                <div className="flex items-center gap-1.5 text-xs font-bold text-white/80">
                  <TrendingUp className="h-4 w-4" />
                  HIGH INTEREST ITEM
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight max-w-lg">
                {listing.title}
              </h1>
              
              <div className="pt-4">
                <p className="text-5xl font-black tracking-tighter">
                  {listing.price}
                </p>
                <p className="text-white/60 text-sm font-bold mt-2 flex items-center gap-2">
                  <Award className="h-4 w-4" />
                  Estimated Fair Market Value in {listing.location.split(',')[0]}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-none shadow-sm bg-primary/5 rounded-3xl">
              <CardContent className="p-6 space-y-4">
                <h3 className="font-bold flex items-center gap-2 text-primary">
                  <Info className="h-5 w-5" />
                  Local Insight
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed italic">
                  "{listing.insight}"
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-sm bg-accent/10 rounded-3xl">
              <CardContent className="p-6 space-y-4">
                <h3 className="font-bold flex items-center gap-2 text-accent-foreground">
                  <CheckCircle2 className="h-5 w-5" />
                  Vibe Score: 9.8/10
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Based on demand in Kerala, this listing is currently performing better than 95% of other {listing.category} ads.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <div className="prose prose-lg max-w-none">
              <h3 className="text-2xl font-black mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Info className="h-5 w-5 text-primary" />
                </div>
                Detailed Description
              </h3>
              <p className="whitespace-pre-line text-muted-foreground leading-relaxed text-lg bg-white p-8 rounded-[2rem] border shadow-sm">
                {listing.description}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-10 border-y border-dashed">
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
          <Card className="border-none shadow-2xl rounded-[2.5rem] overflow-hidden bg-white">
            <CardContent className="p-8 space-y-8">
              <div className="flex items-center gap-4 p-5 rounded-3xl bg-muted/30 border border-muted">
                <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20">
                  <User className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl">{listing.seller.name}</h3>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                    <ShieldCheck className="h-4 w-4 text-green-500" />
                    <span className="font-bold text-green-600">VERIFIED KERALA SELLER</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <Button className="w-full h-16 rounded-2xl text-lg font-black shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all uppercase tracking-widest">
                  <MessageCircle className="mr-3 h-6 w-6" />
                  Contact Seller
                </Button>
                <Button variant="outline" className="w-full h-16 rounded-2xl font-black border-2 hover:bg-muted/50 transition-colors uppercase tracking-widest">
                  Make an Offer
                </Button>
              </div>

              <div className="pt-6 border-t border-dashed space-y-4">
                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Regional Safety Protocol</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="h-3 w-3 text-green-600" />
                    </div>
                    <span className="text-sm text-muted-foreground font-medium">Meet in public landmarks (e.g. Malls, Metro Stations).</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="h-3 w-3 text-green-600" />
                    </div>
                    <span className="text-sm text-muted-foreground font-medium">Verify Kerala identity documents for high-value items.</span>
                  </li>
                </ul>
              </div>
              
              <Button variant="ghost" className="w-full text-destructive hover:text-destructive hover:bg-destructive/5 text-[10px] font-black tracking-widest gap-2">
                <AlertTriangle className="h-4 w-4" />
                REPORT THIS AD
              </Button>
            </CardContent>
          </Card>

          <div className="bg-white rounded-[2.5rem] p-8 border-none shadow-xl">
            <h4 className="font-black text-lg mb-6 flex items-center gap-3">
              <MapPin className="h-5 w-5 text-primary" />
              Location Context
            </h4>
            <div className="aspect-square bg-muted/50 rounded-3xl relative overflow-hidden border border-dashed border-primary/20">
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-6 space-y-4">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto shadow-sm">
                      <MapPin className="h-10 w-10 text-primary" />
                    </div>
                    <div>
                      <p className="text-xl font-black tracking-tight">{listing.location}</p>
                      <p className="text-[10px] text-muted-foreground mt-2 font-black uppercase tracking-widest">Active Region</p>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
