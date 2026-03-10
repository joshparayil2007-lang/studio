
"use client";

import Link from "next/link";
import { Search, PlusCircle, MessageSquare, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center space-x-2 shrink-0">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">L</span>
          </div>
          <span className="text-xl font-bold tracking-tight hidden sm:inline-block">LocalListings</span>
        </Link>

        <div className="hidden md:flex flex-1 max-w-md relative">
          <Input
            placeholder="Search listings..."
            className="pl-10 bg-muted/50 border-none rounded-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        </div>

        <div className="flex items-center space-x-2 sm:space-x-4">
          <Link href="/create">
            <Button variant="default" className="rounded-full shadow-sm">
              <PlusCircle className="mr-2 h-4 w-4" />
              <span className="hidden sm:inline">Post Ad</span>
            </Button>
          </Link>
          <Link href="/messages">
            <Button variant="ghost" size="icon" className="rounded-full">
              <MessageSquare className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="/profile">
            <Button variant="ghost" size="icon" className="rounded-full">
              <User className="h-5 w-5" />
            </Button>
          </Link>
          <Button variant="ghost" size="icon" className="md:hidden rounded-full">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
}
