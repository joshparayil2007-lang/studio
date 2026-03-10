
"use client";

import { useSearchParams } from "next/navigation";
import { CategoryNav } from "@/components/listings/CategoryNav";
import { ListingCard } from "@/components/listings/ListingCard";
import { Button } from "@/components/ui/button";
import { Search, SlidersHorizontal, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState, useMemo } from "react";

const allListings = [
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
  },
  {
    id: "7",
    title: "DJI Mavic Air 2 Fly More Combo",
    price: "$750",
    location: "Fremont, Seattle",
    category: "Electronics",
    imageUrl: "https://picsum.photos/seed/drone1/600/400",
    timeAgo: "1h ago"
  },
  {
    id: "8",
    title: "Professional Lawn Mowing Service",
    price: "$50/hr",
    location: "Kirkland, WA",
    category: "Services",
    imageUrl: "https://picsum.photos/seed/service1/600/400",
    timeAgo: "4h ago"
  }
];

export default function ListingsPage() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredListings = useMemo(() => {
    return allListings.filter(item => {
      const matchesCategory = !categoryParam || item.category.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-") === categoryParam;
      const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            item.location.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [categoryParam, searchQuery]);

  return (
    <div className="flex flex-col min-h-screen bg-muted/20">
      <CategoryNav />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          <div className="w-full md:max-w-xl relative">
            <Input 
              placeholder="Search in this category..." 
              className="pl-10 h-12 bg-white rounded-xl"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          </div>
          <div className="flex items-center gap-2 w-full md:w-auto">
            <Button variant="outline" className="flex-1 md:flex-none rounded-xl h-12 gap-2">
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </Button>
            <Button variant="outline" className="flex-1 md:flex-none rounded-xl h-12 gap-2">
              Sort: Newest
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">
            {categoryParam ? (
              <span>Listings in <span className="text-primary capitalize">{categoryParam.replace("-", " ")}</span></span>
            ) : (
              "All Local Listings"
            )}
            <span className="ml-2 text-sm font-normal text-muted-foreground">({filteredListings.length} results)</span>
          </h2>
        </div>

        {filteredListings.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredListings.map((item) => (
              <ListingCard key={item.id} {...item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-white rounded-3xl border shadow-sm">
            <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-20" />
            <h3 className="text-xl font-bold">No results found</h3>
            <p className="text-muted-foreground mt-2">Try adjusting your filters or search query.</p>
            <Button 
              variant="link" 
              className="mt-4 text-primary" 
              onClick={() => {
                setSearchQuery("");
                window.history.pushState({}, "", "/listings");
              }}
            >
              Clear all filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
