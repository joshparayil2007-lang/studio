# LocalListings - Kerala's Modern Marketplace

A modernized, AI-enhanced classifieds platform specifically tailored for the Kerala market, inspired by the utility of Craigslist but built with a high-end visual experience.

## Features

- **Local Discovery**: Auto-location detection for Kerala cities (Kochi, Trivandrum, etc.).
- **AI Listing Assistant**: Generates engaging titles and descriptions using Genkit (Google Gemini).
- **Vibe Tracking**: Live viewer counts and regional insights for every listing.
- **Categorized Services**: Craigslist-aligned categories (Housing, Jobs, Services, For Sale, Gigs, Community).
- **Secure Messaging**: Integrated real-time messaging between buyers and sellers.
- **Mobile Responsive**: Fully optimized for browsing on any device.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS & ShadCN UI
- **Backend/Auth**: Firebase Authentication & Firestore
- **AI**: Genkit (Google Gemini)
- **Icons**: Lucide React

## Getting Started

To publish this to your GitHub account:

1. **Create a new repository** on [GitHub](https://github.com/new).
2. **Push your code**:
   ```bash
   git init
   git remote add origin https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME.git
   git add .
   git commit -m "Initial commit of LocalListings Kerala"
   git push -u origin main
   ```

3. **Setup Environment**:
   Ensure you have your `GOOGLE_GENAI_API_KEY` set in your environment variables for the AI features to work.

4. **Install and Run**:
   ```bash
   npm install
   npm run dev
   ```

## Deployment

This project is optimized for **Firebase App Hosting**:
1. Push your code to your GitHub repository.
2. Go to the [Firebase Console](https://console.firebase.google.com/).
3. Select "App Hosting" from the left sidebar.
4. Click "Get Started", connect your GitHub account, and select this repository.
5. Firebase will automatically build and host your app on every push to your main branch.

---
Project Contact: joshparayil2007@gmail.com
