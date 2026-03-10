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
    imageUrl: "https://picsum.photos/seed/bike1/600/400",
    timeAgo: "1h ago",
    isPromoted: true
  },
  {
    id: "2",
    title: "3BHK Luxury Villa with Pool",
    price: "₹85,00,000",
    location: "Trivandrum, Kerala",
    category: "Real Estate",
    imageUrl: "https://picsum.photos/seed/villa1/600/400",
    timeAgo: "4h ago"
  },
  {
    id: "3",
    title: "iPhone 15 Pro Max 256GB - Seal Packed",
    price: "₹1,15,000",
    location: "Kozhikode, Kerala",
    category: "Electronics",
    imageUrl: "https://picsum.photos/seed/phone1/600/400",
    timeAgo: "2h ago"
  },
  {
    id: "4",
    title: "Traditional Kerala Kasavu Saree",
    price: "₹4,500",
    location: "Thrissur, Kerala",
    category: "Apparel",
    imageUrl: "https://picsum.photos/seed/saree1/600/400",
    timeAgo: "12h ago",
    isPromoted: true
  },
  {
    id: "5",
    title: "Used Teak Wood Dining Set",
    price: "₹25,000",
    location: "Kollam, Kerala",
    category: "Home & Garden",
    imageUrl: "https://picsum.photos/seed/wood1/600/400",
    timeAgo: "8h ago"
  },
  {
    id: "6",
    title: "Pet Persian Kittens for Adoption",
    price: "₹8,000",
    location: "Palakkad, Kerala",
    category: "Pets",
    imageUrl: "https://picsum.photos/seed/cat1/600/400",
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
            <h2 className="text-3xl font-bold tracking-tight">Fresh near Kerala</h2>
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
                Verified profiles and local meetups ensure a trustworthy Kerala classifieds experience.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-accent/20 text-accent-foreground rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold">Fast Selling</h3>
              <p className="text-muted-foreground leading-relaxed">
                Connect with thousands of active buyers across Kerala in minutes.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold">AI Assistant</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our AI helps you craft descriptions that resonate with the local market.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
