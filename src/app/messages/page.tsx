
"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageSquare, Send, Phone, Info, MoreVertical } from "lucide-react";
import { useState } from "react";

const chats = [
  {
    id: "1",
    user: "Alex Johnson",
    lastMessage: "Is the Tesla still available for a test drive?",
    time: "10:30 AM",
    unread: true,
    listing: "2019 Tesla Model 3",
  },
  {
    id: "2",
    user: "Sarah Miller",
    lastMessage: "I can come pick up the dining table today at 5pm.",
    time: "Yesterday",
    unread: false,
    listing: "Vintage Mahogany Dining Table",
  },
  {
    id: "3",
    user: "Tech Garage",
    lastMessage: "The camera shutter count is 12,000.",
    time: "Tue",
    unread: false,
    listing: "Sony A7III Mirrorless Camera",
  },
];

export default function MessagesPage() {
  const [selectedChat, setSelectedChat] = useState(chats[0]);

  return (
    <div className="container mx-auto px-4 py-8 h-[calc(100vh-140px)]">
      <div className="bg-white rounded-2xl border shadow-sm h-full overflow-hidden flex">
        {/* Chat List */}
        <div className="w-full md:w-80 lg:w-96 border-r flex flex-col h-full">
          <div className="p-4 border-b flex items-center justify-between">
            <h2 className="font-bold text-xl">Messages</h2>
            <div className="bg-primary text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
              {chats.filter(c => c.unread).length}
            </div>
          </div>
          <ScrollArea className="flex-1">
            {chats.map((chat) => (
              <div
                key={chat.id}
                onClick={() => setSelectedChat(chat)}
                className={`p-4 border-b cursor-pointer transition-colors hover:bg-muted/50 ${
                  selectedChat?.id === chat.id ? "bg-primary/5 border-l-4 border-l-primary" : ""
                }`}
              >
                <div className="flex gap-3">
                  <Avatar className="h-12 w-12 border">
                    <AvatarFallback className="bg-accent/10 text-primary font-bold">
                      {chat.user.split(" ").map(n => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-0.5">
                      <h3 className="font-bold text-sm truncate">{chat.user}</h3>
                      <span className="text-[10px] text-muted-foreground whitespace-nowrap ml-2">{chat.time}</span>
                    </div>
                    <p className="text-[10px] font-bold text-primary mb-1 uppercase tracking-tighter">{chat.listing}</p>
                    <p className={`text-xs truncate ${chat.unread ? "font-semibold text-foreground" : "text-muted-foreground"}`}>
                      {chat.lastMessage}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </ScrollArea>
        </div>

        {/* Chat Window */}
        <div className="hidden md:flex flex-1 flex-col h-full bg-muted/20">
          {selectedChat ? (
            <>
              <div className="p-4 border-b bg-white flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-accent/10 text-primary">
                      {selectedChat.user.split(" ").map(n => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-bold leading-none">{selectedChat.user}</h3>
                    <p className="text-xs text-muted-foreground">Replying about: <span className="font-medium text-primary">{selectedChat.listing}</span></p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" className="rounded-full"><Phone className="h-4 w-4" /></Button>
                  <Button variant="ghost" size="icon" className="rounded-full"><Info className="h-4 w-4" /></Button>
                  <Button variant="ghost" size="icon" className="rounded-full"><MoreVertical className="h-4 w-4" /></Button>
                </div>
              </div>

              <ScrollArea className="flex-1 p-6">
                <div className="space-y-6">
                  <div className="flex flex-col items-center">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-4 bg-muted px-2 py-1 rounded">Conversation Started</div>
                  </div>

                  {/* Mock Messages */}
                  <div className="flex gap-3 max-w-[80%]">
                    <Avatar className="h-8 w-8 shrink-0">
                      <AvatarFallback className="text-[10px]">{selectedChat.user[0]}</AvatarFallback>
                    </Avatar>
                    <div className="bg-white p-3 rounded-2xl rounded-tl-none border shadow-sm">
                      <p className="text-sm">Hi there! I'm interested in the {selectedChat.listing}. Is it still available?</p>
                      <span className="text-[10px] text-muted-foreground mt-1 block">9:45 AM</span>
                    </div>
                  </div>

                  <div className="flex gap-3 max-w-[80%] ml-auto flex-row-reverse">
                    <div className="bg-primary text-white p-3 rounded-2xl rounded-tr-none shadow-sm shadow-primary/20">
                      <p className="text-sm">Yes, it is! I've had a few inquiries but no firm offers yet.</p>
                      <span className="text-[10px] text-primary-foreground/70 mt-1 block text-right">10:15 AM</span>
                    </div>
                  </div>

                  <div className="flex gap-3 max-w-[80%]">
                    <Avatar className="h-8 w-8 shrink-0">
                      <AvatarFallback className="text-[10px]">{selectedChat.user[0]}</AvatarFallback>
                    </Avatar>
                    <div className="bg-white p-3 rounded-2xl rounded-tl-none border shadow-sm">
                      <p className="text-sm">{selectedChat.lastMessage}</p>
                      <span className="text-[10px] text-muted-foreground mt-1 block">{selectedChat.time}</span>
                    </div>
                  </div>
                </div>
              </ScrollArea>

              <div className="p-4 bg-white border-t">
                <div className="flex gap-2 bg-muted/50 rounded-2xl p-2 items-center">
                  <Input 
                    placeholder="Type a message..." 
                    className="border-none bg-transparent focus-visible:ring-0 flex-1 shadow-none"
                  />
                  <Button size="icon" className="rounded-xl h-10 w-10 shrink-0">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-center p-12 space-y-4">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center">
                <MessageSquare className="h-8 w-8 text-muted-foreground" />
              </div>
              <div>
                <h3 className="font-bold text-xl">Select a conversation</h3>
                <p className="text-muted-foreground max-w-xs mx-auto">
                  Pick a chat from the sidebar to start messaging buyers or sellers.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
