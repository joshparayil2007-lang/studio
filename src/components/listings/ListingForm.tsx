
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { aiListingAssistant } from "@/ai/flows/ai-listing-assistant-flow";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Loader2, Camera, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters"),
  description: z.string().min(20, "Please provide a more detailed description"),
  price: z.string().min(1, "Price is required"),
  category: z.string().min(1, "Please select a category"),
  location: z.string().min(3, "Location is required"),
});

export function ListingForm() {
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [aiSuggestions, setAiSuggestions] = useState<{
    suggestedTitle: string;
    refinedDescription: string;
    suggestedCategories: string[];
  } | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      price: "",
      category: "",
      location: "",
    },
  });

  async function handleAiAssist() {
    const rawDescription = form.getValues("description");
    if (!rawDescription || rawDescription.length < 10) {
      toast({
        title: "More info needed",
        description: "Please write at least a basic description first for the AI to help.",
        variant: "destructive",
      });
      return;
    }

    setIsAiLoading(true);
    try {
      const result = await aiListingAssistant({ rawDescription });
      setAiSuggestions(result);
      toast({
        title: "AI Analysis Complete",
        description: "We've generated suggestions for your listing.",
      });
    } catch (error) {
      toast({
        title: "AI Error",
        description: "Could not reach the AI assistant. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsAiLoading(false);
    }
  }

  function applySuggestion(type: "title" | "description" | "category") {
    if (!aiSuggestions) return;
    if (type === "title") form.setValue("title", aiSuggestions.suggestedTitle);
    if (type === "description") form.setValue("description", aiSuggestions.refinedDescription);
    if (type === "category" && aiSuggestions.suggestedCategories.length > 0) {
      form.setValue("category", aiSuggestions.suggestedCategories[0]);
    }
  }

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Listing Created!",
      description: "Your ad has been successfully posted to LocalListings.",
    });
    console.log(values);
  }

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 bg-white p-6 rounded-xl shadow-sm border">
              <div className="space-y-4">
                <h2 className="text-xl font-bold">Listing Details</h2>
                
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tell us what you're selling</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Provide as much detail as possible..." 
                          className="min-h-[120px] resize-none"
                          {...field} 
                        />
                      </FormControl>
                      <FormDescription>
                        A good description helps buyers find your item.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex justify-end">
                  <Button
                    type="button"
                    variant="outline"
                    className="border-primary/50 text-primary hover:bg-primary/5 gap-2"
                    onClick={handleAiAssist}
                    disabled={isAiLoading}
                  >
                    {isAiLoading ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Sparkles className="h-4 w-4" />
                    )}
                    Optimize with AI
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Listing Title</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g. 2019 MacBook Pro 16-inch" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="price"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Price ($)</FormLabel>
                        <FormControl>
                          <Input type="text" placeholder="e.g. 1,200" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Category</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g. Electronics" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Location</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g. Seattle, WA" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="pt-4 border-t">
                  <FormLabel className="block mb-2">Photos</FormLabel>
                  <div className="grid grid-cols-4 gap-4">
                    <div className="aspect-square rounded-lg border-2 border-dashed flex flex-col items-center justify-center text-muted-foreground hover:bg-muted/50 cursor-pointer transition-colors">
                      <Camera className="h-6 w-6 mb-1" />
                      <span className="text-xs">Add Photo</span>
                    </div>
                  </div>
                </div>

                <Button type="submit" className="w-full h-12 text-lg font-bold">
                  Post Listing
                </Button>
              </div>
            </form>
          </Form>
        </div>

        <div className="space-y-6">
          <div className="bg-primary/5 rounded-xl border border-primary/20 p-6 space-y-4">
            <div className="flex items-center gap-2 text-primary font-bold">
              <Sparkles className="h-5 w-5" />
              <h3>AI Suggestions</h3>
            </div>
            
            {!aiSuggestions && !isAiLoading && (
              <p className="text-sm text-muted-foreground">
                Write a description and click "Optimize with AI" to see suggestions here.
              </p>
            )}

            {isAiLoading && (
              <div className="flex flex-col items-center justify-center py-8 text-muted-foreground gap-2">
                <Loader2 className="h-8 w-8 animate-spin" />
                <p className="text-sm">Analysing your listing...</p>
              </div>
            )}

            {aiSuggestions && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Suggested Title</span>
                    <Button variant="link" size="sm" className="h-auto p-0 text-primary" onClick={() => applySuggestion("title")}>
                      Apply
                    </Button>
                  </div>
                  <p className="text-sm font-medium leading-tight">{aiSuggestions.suggestedTitle}</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Suggested Categories</span>
                    <Button variant="link" size="sm" className="h-auto p-0 text-primary" onClick={() => applySuggestion("category")}>
                      Apply First
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {aiSuggestions.suggestedCategories.map((cat, i) => (
                      <Badge key={i} variant="secondary" className="bg-white border text-xs">{cat}</Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Refined Description</span>
                    <Button variant="link" size="sm" className="h-auto p-0 text-primary" onClick={() => applySuggestion("description")}>
                      Apply
                    </Button>
                  </div>
                  <p className="text-sm italic text-muted-foreground line-clamp-4">"{aiSuggestions.refinedDescription}"</p>
                </div>
              </div>
            )}
          </div>

          <div className="bg-white rounded-xl border p-6 space-y-4">
            <h3 className="font-bold flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              Posting Tips
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Use clear, well-lit photos.</li>
              <li>• Be honest about the condition.</li>
              <li>• Price fairly using market research.</li>
              <li>• Mention if delivery is available.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
