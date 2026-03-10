
"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Star, Edit, Trash2, Package, History, Heart } from "lucide-react";
import Link from "next/link";

const myActiveListings = [
  {
    id: "1",
    title: "2019 Tesla Model 3 Performance",
    price: "$34,500",
    status: "Active",
    views: 124,
    inquiries: 8,
  },
  {
    id: "7",
    title: "DJI Mavic Air 2 Fly More Combo",
    price: "$750",
    status: "Active",
    views: 45,
    inquiries: 2,
  }
];

export default function ProfilePage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Profile Card */}
        <div className="lg:col-span-1 space-y-6">
          <Card className="border-none shadow-sm overflow-hidden">
            <div className="h-24 bg-primary" />
            <CardContent className="pt-0 relative px-6 pb-6">
              <div className="flex flex-col items-center -mt-12 mb-4">
                <Avatar className="h-24 w-24 border-4 border-white shadow-lg">
                  <AvatarImage src="https://picsum.photos/seed/user1/200" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <h2 className="text-xl font-bold mt-4">John Doe</h2>
                <div className="flex items-center gap-1 text-muted-foreground text-sm mt-1">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>Seattle, WA</span>
                </div>
              </div>
              
              <div className="space-y-4 pt-4 border-t">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Rating</span>
                  <div className="flex items-center gap-1 font-bold text-primary">
                    <Star className="h-3.5 w-3.5 fill-current" />
                    <span>4.9 (12 reviews)</span>
                  </div>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Joined</span>
                  <div className="flex items-center gap-1 font-medium">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>Mar 2021</span>
                  </div>
                </div>
              </div>
              
              <Button variant="outline" className="w-full mt-6 rounded-xl border-primary/20 text-primary">
                Edit Profile
              </Button>
            </CardContent>
          </Card>

          <Card className="border-none shadow-sm p-4 space-y-4">
            <h3 className="font-bold text-sm uppercase tracking-widest text-muted-foreground">Account Summary</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-muted/50 p-3 rounded-xl text-center">
                <p className="text-2xl font-bold">12</p>
                <p className="text-[10px] text-muted-foreground uppercase font-bold">Sold</p>
              </div>
              <div className="bg-muted/50 p-3 rounded-xl text-center">
                <p className="text-2xl font-bold">2</p>
                <p className="text-[10px] text-muted-foreground uppercase font-bold">Active</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Main Content Area */}
        <div className="lg:col-span-3 space-y-8">
          <Tabs defaultValue="active" className="w-full">
            <TabsList className="bg-transparent border-b rounded-none w-full justify-start p-0 h-auto gap-8 mb-6">
              <TabsTrigger value="active" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-0 pb-3 text-sm font-bold flex items-center gap-2">
                <Package className="h-4 w-4" />
                Active Listings
              </TabsTrigger>
              <TabsTrigger value="past" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-0 pb-3 text-sm font-bold flex items-center gap-2">
                <History className="h-4 w-4" />
                Past Sales
              </TabsTrigger>
              <TabsTrigger value="saved" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-0 pb-3 text-sm font-bold flex items-center gap-2">
                <Heart className="h-4 w-4" />
                Saved
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="active" className="space-y-4">
              {myActiveListings.length > 0 ? (
                myActiveListings.map((listing) => (
                  <Card key={listing.id} className="border-none shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                    <CardContent className="p-0">
                      <div className="flex flex-col sm:flex-row">
                        <div className="w-full sm:w-48 h-40 bg-muted relative">
                          <img 
                            src={`https://picsum.photos/seed/list${listing.id}/400/300`} 
                            className="w-full h-full object-cover" 
                            alt={listing.title} 
                          />
                        </div>
                        <div className="flex-1 p-6 flex flex-col justify-between">
                          <div className="flex justify-between items-start">
                            <div>
                              <Badge variant="secondary" className="mb-2 bg-primary/10 text-primary border-none">
                                {listing.status}
                              </Badge>
                              <h3 className="font-bold text-lg">{listing.title}</h3>
                              <p className="text-xl font-bold text-primary mt-1">{listing.price}</p>
                            </div>
                            <div className="flex gap-2">
                              <Button variant="ghost" size="icon" className="rounded-full text-muted-foreground">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="icon" className="rounded-full text-destructive">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-6 mt-4 pt-4 border-t text-sm text-muted-foreground">
                            <div className="flex flex-col">
                              <span className="text-[10px] uppercase font-bold tracking-tighter">Total Views</span>
                              <span className="font-bold text-foreground">{listing.views}</span>
                            </div>
                            <div className="flex flex-col">
                              <span className="text-[10px] uppercase font-bold tracking-tighter">Inquiries</span>
                              <span className="font-bold text-foreground">{listing.inquiries}</span>
                            </div>
                            <div className="ml-auto">
                              <Button variant="link" className="text-primary font-bold p-0">View Details</Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div className="text-center py-20 bg-white rounded-2xl border">
                  <Package className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-bold">No active listings</h3>
                  <p className="text-muted-foreground mt-2 mb-6">Ready to clear some space? Post your first item.</p>
                  <Link href="/create">
                    <Button>Post an Ad</Button>
                  </Link>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="past" className="text-center py-20 bg-white rounded-2xl border">
               <History className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
               <h3 className="text-xl font-bold">No past sales yet</h3>
               <p className="text-muted-foreground mt-2">When you mark a listing as sold, it will appear here.</p>
            </TabsContent>

            <TabsContent value="saved" className="text-center py-20 bg-white rounded-2xl border">
               <Heart className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
               <h3 className="text-xl font-bold">No saved items</h3>
               <p className="text-muted-foreground mt-2">Keep track of things you're interested in by hearting them.</p>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
