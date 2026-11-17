# Table Talk

Table Talk is the AI sales dining assistant named in `index.html` ("Table Talk - AI Sales Dining Assistant"). The home page says "Break bread. Close deals." and "AI-powered dining recommendations that understand executive preferences and accelerate your sales process."

The screen in `src` is:

- Executive search (`src/components/ExecutiveSearch.tsx`): a "Find Executive" form. The note under the field says "AI-powered search with entity disambiguation and preference inference".
- Profile (`src/components/ExecutiveProfile.tsx`): name, title, company, location, and diet, cuisine, and preference traits, each with a confidence percentage.
- Venue cards (`src/components/VenueCard.tsx`): rank, match score, cuisine, distance, price, noise, rating, feature badges, an AI rationale, and a "Book This Venue" button.

Any search shows the same mock profile in `src/pages/Index.tsx`: Jane Doe, Chief Financial Officer at Atlassian, in San Francisco. The traits are pescatarian, moderate wine, Mediterranean and Japanese, quiet and private, premium price, and low noise. The field placeholder is already "e.g., Jane Doe, CFO at Atlassian". A blank search does not submit. Any other text is stored and is not used to choose a person. A toast says "Found executive: Jane Doe", and the Meeting Context form appears after 800ms. Its button says "Generate Recommendations". Date, time, and location are required. A missing date says "Please select a date", a missing time says "Please select a time", and a missing location says "Please enter a location". Party size starts at "2 people" and budget starts at "Moderate ($$)". Those values are not used. A complete submit toasts "Generated 3 personalized recommendations" and shows three venues: Waterbar (Contemporary Seafood, 0.3 mi, match 0.94), Octavia (Mediterranean, 0.5 mi, match 0.89), and Kusakabe (Japanese Kaiseki, 0.7 mi, match 0.87). "Book This Venue" toasts "Booking {name}..." and "Checking availability and sending calendar invite". Before a search, the page says "Search for an executive to get started". The commits on 2025-10-13 are from gpt-engineer-app[bot].

From the repository root:

```bash
npm install
npm run dev
```

Vite serves the app. `npm run build` writes the production bundle. The UI uses React, TypeScript, Tailwind CSS, and shadcn-ui.
