'use server';
/**
 * @fileOverview An AI assistant for creating classified listings.
 *
 * - aiListingAssistant - A function that generates an engaging title, suggests relevant categories, and refines an ad description.
 * - AiListingAssistantInput - The input type for the aiListingAssistant function.
 * - AiListingAssistantOutput - The return type for the aiListingAssistant function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiListingAssistantInputSchema = z.object({
  rawDescription: z.string().describe('The raw description provided by the user for the classified listing.'),
  photoDataUri: z
    .string()
    .optional()
    .describe(
      "An optional photo of the item, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type AiListingAssistantInput = z.infer<typeof AiListingAssistantInputSchema>;

const AiListingAssistantOutputSchema = z.object({
  suggestedTitle: z.string().describe('An engaging and catchy title for the classified listing.'),
  refinedDescription: z.string().describe('A refined and appealing description for the classified listing.'),
  suggestedCategories: z.array(z.string()).max(3).describe('An array of up to 3 relevant categories for the listing, chosen from a predefined list.'),
});
export type AiListingAssistantOutput = z.infer<typeof AiListingAssistantOutputSchema>;

export async function aiListingAssistant(input: AiListingAssistantInput): Promise<AiListingAssistantOutput> {
  return aiListingAssistantFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiListingAssistantPrompt',
  input: {schema: AiListingAssistantInputSchema},
  output: {schema: AiListingAssistantOutputSchema},
  prompt: `You are an AI assistant for a classifieds app called LocalListings. Your task is to help users create compelling classified ads. Based on the provided description (and optionally a photo), you will generate an engaging title, refine the ad description for clarity and appeal, and suggest up to 3 relevant categories from the following predefined list.

Available Categories: Vehicles, Real Estate, Electronics, Home & Garden, Apparel, Services, Jobs, Pets, Collectibles, Free Stuff.

User input:
Description: {{{rawDescription}}}
{{#if photoDataUri}}Photo: {{media url=photoDataUri}}{{/if}}

Please provide your suggestions as a JSON object with the following structure:
- "suggestedTitle": A concise and attractive title for the listing.
- "refinedDescription": An improved version of the raw description, making it more appealing and informative.
- "suggestedCategories": An array of strings, containing up to 3 most relevant categories from the available list.`,
});

const aiListingAssistantFlow = ai.defineFlow(
  {
    name: 'aiListingAssistantFlow',
    inputSchema: AiListingAssistantInputSchema,
    outputSchema: AiListingAssistantOutputSchema,
  },
  async (input) => {
    const {output} = await prompt(input);
    return output!;
  }
);
