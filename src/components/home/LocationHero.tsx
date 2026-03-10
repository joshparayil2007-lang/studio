'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search, Map, Loader2, Navigation } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function LocationHero() {
  const [location, setLocation] = useState("Kerala, India");
  const [isDetecting, setIsDetecting] = useState(false);
  const { toast } = useToast();

  const detectLocation = () => {
    if (!("geolocation" in navigator)) {
      toast({
        title: "Not supported",
        description: "Geolocation is not supported by your browser.",
        variant: "destructive",
      });
      return;
    }

    setIsDetecting(true);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          const response = await fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
          );
          const data = await response.json();
          const city = data.city || data.locality || "Kerala";
          const principalSubdivision = data.principalSubdivision || "India";
          const detectedString = `${city}, ${principalSubdivision}`;
          
          setLocation(detectedString);
          toast({
            title: "Location detected",
            description: `We've set your location to ${detectedString}.`,
          });
        } catch (error) {
          toast({
            title: "Detection failed",
            description: "Could not determine your city name, but we have your coordinates.",
            variant: "destructive",
          });
        } finally {
          setIsDetecting(false);
        }
      },
      (error) => {
        setIsDetecting(false);
        let message = "An unknown error occurred.";
        if (error.code === 1) message = "Permission denied. Please enable location access.";
        else if (error.code === 2) message = "Position unavailable.";
        else if (error.code === 3) message = "Timeout reached.";
        
        toast({
          title: "Location error",
          description: message,
          variant: "destructive",
        });
      },
      { timeout: 10000 }
    );
  };

  return (
    <div className="relative bg-primary overflow-hidden py-16 md:py-24">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
          Kerala's Marketplace <span className="text-accent">Simplified.</span>
        </h1>
        <p className="text-primary-foreground/90 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
          Buy, sell, and connect in your local community. From Kochi to Trivandrum, find what you need on LocalListings.
        </p>
        
        <div className="w-full max-w-3xl bg-white p-2 rounded-2xl shadow-2xl flex flex-col sm:flex-row gap-2">
          <div className="flex-[2] flex items-center px-4 gap-3 bg-muted/50 rounded-xl">
            <Search className="h-5 w-5 text-muted-foreground" />
            <input 
              placeholder="Searching for cars, houses, or jobs?" 
              className="bg-transparent border-none focus:ring-0 w-full h-12 text-sm md:text-base outline-none"
            />
          </div>
          <div className="flex-1 flex items-center px-4 gap-3 bg-muted/50 rounded-xl min-w-[200px]">
            <Map className="h-5 w-5 text-muted-foreground" />
            <input 
              placeholder="Location" 
              className="bg-transparent border-none focus:ring-0 w-full h-12 text-sm outline-none"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8 rounded-full text-primary hover:bg-primary/10"
              onClick={detectLocation}
              disabled={isDetecting}
            >
              {isDetecting ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Navigation className="h-4 w-4" />
              )}
            </Button>
          </div>
          <Button size="lg" className="rounded-xl px-8 font-bold h-12 sm:h-auto">
            Search
          </Button>
        </div>
      </div>
    </div>
  );
}
