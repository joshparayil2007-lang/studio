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

## How to Publish to your GitHub

Since I am an AI, you will need to perform the final push to your account. Follow these steps:

1. **Create a new repository** on [GitHub](https://github.com/new). Name it `local-listings-kerala`.
2. **Open your terminal** in this project's root folder.
3. **Initialize and Push**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of LocalListings Kerala"
   git branch -M main
   git remote add origin https://github.com/YOUR_GITHUB_USERNAME/local-listings-kerala.git
   git push -u origin main
   ```
   *(Replace YOUR_GITHUB_USERNAME with your actual username)*

4. **Setup Environment**:
   In your GitHub Repository Settings, go to **Secrets and variables > Actions** and add your `GOOGLE_GENAI_API_KEY`.

## Deployment

This project is optimized for **Firebase App Hosting**:
1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Select your project.
3. Select **App Hosting** from the left sidebar.
4. Click "Get Started", connect your GitHub account, and select the repository you just created.
5. Firebase will automatically build and host your app. It will provide you with a unique URL once finished.

---
Project Contact: joshparayil2007@gmail.com
