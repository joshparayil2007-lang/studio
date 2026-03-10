import { Button } from "@/components/ui/button";
import { CategoryNav } from "@/components/listings/CategoryNav";
import { ListingCard } from "@/components/listings/ListingCard";
import { LocationHero } from "@/components/home/LocationHero";
import { ArrowRight, TrendingUp, ShieldCheck, Sparkles } from "lucide-react";

const featuredListings = [
  {
    id: "1",
    title: "2022 Royal Enfield Classic 350",
    price: "₹1,85,000",
    location: "Kochi, Kerala",
    category: "Vehicles",
    type: "Bike",
    timeAgo: "1h ago",
    isPromoted: true
  },
  {
    id: "2",
    title: "3BHK Luxury Villa with Pool",
    price: "₹85,00,000",
    location: "Trivandrum, Kerala",
    category: "Housing",
    type: "Villa",
    timeAgo: "4h ago"
  },
  {
    id: "3",
    title: "Full Stack Developer - React/Node",
    price: "₹8L - 15L PA",
    location: "Kochi, Kerala",
    category: "Jobs",
    type: "Tech",
    timeAgo: "2h ago"
  },
  {
    id: "4",
    title: "Professional House Painting",
    price: "₹15/sq.ft",
    location: "Thrissur, Kerala",
    category: "Services",
    type: "Home Improvement",
    timeAgo: "12h ago",
    isPromoted: true
  },
  {
    id: "5",
    title: "Used Teak Wood Dining Set",
    price: "₹25,000",
    location: "Kollam, Kerala",
    category: "For Sale",
    type: "Furniture",
    timeAgo: "8h ago"
  },
  {
    id: "6",
    title: "Volunteer Beach Cleanup Kochi",
    price: "Free",
    location: "Fort Kochi, Kerala",
    category: "Community",
    type: "Activity",
    timeAgo: "1d ago"
  }
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <LocationHero />

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
          <Button variant="ghost" className="text-primary font-semibold hover:text-primary/80 group" asChild>
            <a href="/listings">
              Browse all listings <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
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
