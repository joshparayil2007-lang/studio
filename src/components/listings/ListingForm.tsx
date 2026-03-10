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
import { Sparkles, Loader2, Info, CheckCircle2, MessageSquareText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters"),
  description: z.string().min(20, "Please provide a more detailed description"),
  price: z.string().min(1, "Price is required"),
  category: z.string().min(1, "Please select a category"),
  location: z.string().min(3, "Location is required"),
  funFact: z.string().optional(),
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
      funFact: "",
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
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 bg-white p-10 rounded-[2.5rem] shadow-sm border">
              <div className="space-y-6">
                <div className="flex items-center gap-3 border-b pb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <MessageSquareText className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-black">Listing Details</h2>
                    <p className="text-xs text-muted-foreground uppercase font-bold tracking-widest">No photos required—Focus on the description.</p>
                  </div>
                </div>
                
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs font-black uppercase tracking-widest">Tell us what you're selling</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Provide as much detail as possible to help buyers understand the value..." 
                          className="min-h-[160px] resize-none rounded-2xl p-4 border-2 focus:border-primary transition-all"
                          {...field} 
                        />
                      </FormControl>
                      <FormDescription>
                        A high-quality description is the best way to sell your item.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex justify-end">
                  <Button
                    type="button"
                    variant="outline"
                    className="border-primary/50 text-primary hover:bg-primary/5 gap-2 rounded-xl h-12 px-6 font-bold"
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs font-black uppercase tracking-widest">Listing Title</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g. 2022 Royal Enfield Classic" className="h-14 rounded-2xl px-4 border-2" {...field} />
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
                        <FormLabel className="text-xs font-black uppercase tracking-widest">Price (₹)</FormLabel>
                        <FormControl>
                          <Input type="text" placeholder="e.g. 1,85,000" className="h-14 rounded-2xl px-4 border-2" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs font-black uppercase tracking-widest">Category</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g. Vehicles" className="h-14 rounded-2xl px-4 border-2" {...field} />
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
                        <FormLabel className="text-xs font-black uppercase tracking-widest">Location</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g. Kochi, Kerala" className="h-14 rounded-2xl px-4 border-2" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="funFact"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs font-black uppercase tracking-widest">Local Insight / Fun Fact (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. Rare color combination in Thrissur..." className="h-14 rounded-2xl px-4 border-2" {...field} />
                      </FormControl>
                      <FormDescription>
                        Something unique that makes your listing stand out.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full h-16 text-lg font-black rounded-2xl shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all uppercase tracking-widest">
                  Post Listing
                </Button>
              </div>
            </form>
          </Form>
        </div>

        <div className="space-y-6">
          <div className="bg-primary/5 rounded-[2rem] border border-primary/20 p-8 space-y-6">
            <div className="flex items-center gap-2 text-primary font-black uppercase tracking-widest text-sm">
              <Sparkles className="h-5 w-5" />
              <h3>AI Suggestions</h3>
            </div>
            
            {!aiSuggestions && !isAiLoading && (
              <p className="text-sm text-muted-foreground leading-relaxed">
                Write your description and click "Optimize with AI" to generate a professional title and refined content.
              </p>
            )}

            {isAiLoading && (
              <div className="flex flex-col items-center justify-center py-12 text-muted-foreground gap-4">
                <Loader2 className="h-10 w-10 animate-spin text-primary" />
                <p className="text-xs font-black tracking-widest uppercase">Analysing Listing...</p>
              </div>
            )}

            {aiSuggestions && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Recommended Title</span>
                    <Button variant="link" size="sm" className="h-auto p-0 text-primary font-black text-[10px] uppercase tracking-widest" onClick={() => applySuggestion("title")}>
                      Apply
                    </Button>
                  </div>
                  <p className="text-sm font-bold leading-snug text-foreground">{aiSuggestions.suggestedTitle}</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Smart Categories</span>
                    <Button variant="link" size="sm" className="h-auto p-0 text-primary font-black text-[10px] uppercase tracking-widest" onClick={() => applySuggestion("category")}>
                      Apply
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {aiSuggestions.suggestedCategories.map((cat, i) => (
                      <Badge key={i} variant="secondary" className="bg-white border text-[10px] font-bold uppercase tracking-widest py-1 px-3">{cat}</Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Optimized Copy</span>
                    <Button variant="link" size="sm" className="h-auto p-0 text-primary font-black text-[10px] uppercase tracking-widest" onClick={() => applySuggestion("description")}>
                      Apply
                    </Button>
                  </div>
                  <p className="text-xs italic text-muted-foreground leading-relaxed">"{aiSuggestions.refinedDescription}"</p>
                </div>
              </div>
            )}
          </div>

          <div className="bg-white rounded-[2rem] border p-8 space-y-6 shadow-sm">
            <h3 className="font-black flex items-center gap-2 uppercase tracking-widest text-sm">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              Success Checklist
            </h3>
            <ul className="space-y-4 text-sm text-muted-foreground font-medium">
              <li className="flex gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span>Include specific area (e.g. Ernakulam, Palakkad).</span>
              </li>
              <li className="flex gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span>List any modifications or service history.</span>
              </li>
              <li className="flex gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span>Specify if price is fixed or negotiable.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
