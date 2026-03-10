
import { ListingForm } from "@/components/listings/ListingForm";

export default function CreateListingPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <div className="mb-10 space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Post an Ad</h1>
        <p className="text-muted-foreground text-lg">
          Create a new listing for your item or service. Use our AI assistant to make it stand out.
        </p>
      </div>
      <ListingForm />
    </div>
  );
}
