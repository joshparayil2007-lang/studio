import { Button } from "@/components/ui/button";
import { CategoryNav } from "@/components/listings/CategoryNav";
import { ListingCard } from "@/components/listings/ListingCard";
import { LocationHero } from "@/components/home/LocationHero";
import { ArrowRight, TrendingUp, ShieldCheck, Sparkles } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const featuredListings = [
  {
    id: "1",
    title: "2022 Royal Enfield Classic 350",
    price: "₹1,85,000",
    location: "Kochi, Kerala",
    category: "Vehicles",
    imageUrl: PlaceHolderImages.find(img => img.id === 'bike-kerala')?.imageUrl || "https://picsum.photos/seed/kerala-bike/1200/800",
    imageHint: PlaceHolderImages.find(img => img.id === 'bike-kerala')?.imageHint || "classic motorcycle",
    timeAgo: "1h ago",
    isPromoted: true
  },
  {
    id: "2",
    title: "3BHK Luxury Villa with Pool",
    price: "₹85,00,000",
    location: "Trivandrum, Kerala",
    category: "Real Estate",
    imageUrl: PlaceHolderImages.find(img => img.id === 'villa-kerala')?.imageUrl || "https://picsum.photos/seed/kerala-villa/1200/800",
    imageHint: PlaceHolderImages.find(img => img.id === 'villa-kerala')?.imageHint || "luxury villa",
    timeAgo: "4h ago"
  },
  {
    id: "3",
    title: "iPhone 15 Pro Max 256GB - Seal Packed",
    price: "₹1,15,000",
    location: "Kozhikode, Kerala",
    category: "Electronics",
    imageUrl: PlaceHolderImages.find(img => img.id === 'iphone-listing')?.imageUrl || "https://picsum.photos/seed/kerala-iphone/1200/800",
    imageHint: PlaceHolderImages.find(img => img.id === 'iphone-listing')?.imageHint || "iphone titanium",
    timeAgo: "2h ago"
  },
  {
    id: "4",
    title: "Traditional Kerala Kasavu Saree",
    price: "₹4,500",
    location: "Thrissur, Kerala",
    category: "Apparel",
    imageUrl: PlaceHolderImages.find(img => img.id === 'saree-kerala')?.imageUrl || "https://picsum.photos/seed/kerala-saree/1200/800",
    imageHint: PlaceHolderImages.find(img => img.id === 'saree-kerala')?.imageHint || "indian saree",
    timeAgo: "12h ago",
    isPromoted: true
  },
  {
    id: "5",
    title: "Used Teak Wood Dining Set",
    price: "₹25,000",
    location: "Kollam, Kerala",
    category: "Home & Garden",
    imageUrl: PlaceHolderImages.find(img => img.id === 'furniture-kerala')?.imageUrl || "https://picsum.photos/seed/kerala-furniture/1200/800",
    imageHint: PlaceHolderImages.find(img => img.id === 'furniture-kerala')?.imageHint || "wooden table",
    timeAgo: "8h ago"
  },
  {
    id: "6",
    title: "Pet Persian Kittens for Adoption",
    price: "₹8,000",
    location: "Palakkad, Kerala",
    category: "Pets",
    imageUrl: PlaceHolderImages.find(img => img.id === 'kitten-listing')?.imageUrl || "https://picsum.photos/seed/kerala-kitten/1200/800",
    imageHint: PlaceHolderImages.find(img => img.id === 'kitten-listing')?.imageHint || "persian kitten",
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
