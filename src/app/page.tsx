
import { Button } from "@/components/ui/button";
import { CategoryNav } from "@/components/listings/CategoryNav";
import { ListingCard } from "@/components/listings/ListingCard";
import { Search, ArrowRight, TrendingUp, ShieldCheck, Map, Sparkles } from "lucide-react";

const featuredListings = [
  {
    id: "1",
    title: "2019 Tesla Model 3 Performance",
    price: "$34,500",
    location: "Downtown, Seattle",
    category: "Vehicles",
    imageUrl: "https://picsum.photos/seed/car1/600/400",
    timeAgo: "2h ago",
    isPromoted: true
  },
  {
    id: "2",
    title: "Vintage Mahogany Dining Table",
    price: "$450",
    location: "Ballard, WA",
    category: "Home & Garden",
    imageUrl: "https://picsum.photos/seed/garden1/600/400",
    timeAgo: "5h ago"
  },
  {
    id: "3",
    title: "Sony A7III Mirrorless Camera Body",
    price: "$1,100",
    location: "Capitol Hill, Seattle",
    category: "Electronics",
    imageUrl: "https://picsum.photos/seed/elec1/600/400",
    timeAgo: "1d ago"
  },
  {
    id: "4",
    title: "1BR Apartment with Mountain View",
    price: "$2,200/mo",
    location: "Queen Anne, WA",
    category: "Real Estate",
    imageUrl: "https://picsum.photos/seed/home1/600/400",
    timeAgo: "3h ago",
    isPromoted: true
  },
  {
    id: "5",
    title: "Brand New Winter Parka - Size M",
    price: "$120",
    location: "Bellevue, WA",
    category: "Apparel",
    imageUrl: "https://picsum.photos/seed/wear1/600/400",
    timeAgo: "8h ago"
  },
  {
    id: "6",
    title: "Apple Watch Series 7 (GPS)",
    price: "$280",
    location: "Redmond, WA",
    category: "Electronics",
    imageUrl: "https://picsum.photos/seed/watch1/600/400",
    timeAgo: "12h ago"
  }
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative bg-primary overflow-hidden py-16 md:py-24">
        {/* Abstract background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Find everything, <span className="text-accent">locally.</span>
          </h1>
          <p className="text-primary-foreground/90 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
            LocalListings is the modern, safe, and intuitive way to buy and sell in your community. Optimized with AI to help you post faster and sell better.
          </p>
          
          <div className="w-full max-w-2xl bg-white p-2 rounded-2xl shadow-2xl flex flex-col sm:flex-row gap-2">
            <div className="flex-1 flex items-center px-4 gap-3 bg-muted/50 rounded-xl">
              <Search className="h-5 w-5 text-muted-foreground" />
              <input 
                placeholder="What are you looking for?" 
                className="bg-transparent border-none focus:ring-0 w-full h-12 text-sm md:text-base outline-none"
              />
            </div>
            <div className="hidden sm:flex items-center px-4 gap-3 bg-muted/50 rounded-xl w-48">
              <Map className="h-5 w-5 text-muted-foreground" />
              <input 
                placeholder="Location" 
                className="bg-transparent border-none focus:ring-0 w-full h-12 text-sm outline-none"
                defaultValue="Seattle, WA"
              />
            </div>
            <Button size="lg" className="rounded-xl px-8 font-bold h-12 sm:h-auto">
              Search
            </Button>
          </div>
        </div>
      </div>

      <CategoryNav />

      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row justify-between items-end gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest mb-2">
              <TrendingUp className="h-4 w-4" />
              <span>Recommended</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight">Fresh near you</h2>
          </div>
          <Button variant="ghost" className="text-primary font-semibold hover:text-primary/80 group">
            Browse all listings <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredListings.map((item) => (
            <ListingCard key={item.id} {...item} />
          ))}
        </div>
      </div>

      <div className="bg-white border-y py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold">Safe & Secure</h3>
              <p className="text-muted-foreground leading-relaxed">
                In-app messaging and verified profiles keep your transactions safe and your contact info private.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-accent/20 text-accent-foreground rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold">Fast Selling</h3>
              <p className="text-muted-foreground leading-relaxed">
                Reach thousands of active buyers in your immediate area within minutes of posting.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold">AI Assistant</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our AI helps you craft the perfect title and description so your items sell faster and for better prices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
