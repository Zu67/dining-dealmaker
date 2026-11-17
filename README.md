# Table Talk

Table Talk is the AI sales dining assistant named in `index.html` ("Table Talk - AI Sales Dining Assistant"). The home page says "Break bread. Close deals." and "AI-powered dining recommendations that understand executive preferences and accelerate your sales process."

The screen in `src` is:

- Executive search (`src/components/ExecutiveSearch.tsx`): a "Find Executive" form. The note under the field says "AI-powered search with entity disambiguation and preference inference".
- Profile (`src/components/ExecutiveProfile.tsx`): name, title, company, location, and diet, cuisine, and preference traits, each with a confidence percentage.
- Venue cards (`src/components/VenueCard.tsx`): rank, match score, cuisine, distance, price, noise, rating, feature badges, an AI rationale, and a "Book This Venue" button.

Any search shows the same mock profile in `src/pages/Index.tsx`: Jane Doe, Chief Financial Officer at Atlassian, in San Francisco, CA. The traits, with the badge showing confidence times 100 and no decimal, are Pescatarian 92%, Moderate wine 78%, Mediterranean 85%, Japanese 73%, Quiet & Private 88%, Premium ($$$$) 81%, and Low (<65 dB) 76%. A badge is the primary color at 80% or above, the accent color from 60% up to 80%, and muted below 60%. None of these seven traits is below 60%. The field placeholder is already "e.g., Jane Doe, CFO at Atlassian". A blank search does not submit. Any other text is stored and is not used to choose a person. A toast says "Found executive: Jane Doe", and the Meeting Context form appears after 800ms. Its button says "Generate Recommendations". Date, time, and location are required. A missing date says "Please select a date", a missing time says "Please select a time", and a missing location says "Please enter a location". Party size starts at "2 people" and budget starts at "Moderate ($$)". Those values are not used. A complete submit toasts "Generated 3 personalized recommendations". The heading says "Recommended Venues" and "Ranked by AI compatibility with Jane Doe's preferences". The rank is the array position, not a sort. Waterbar is #1, Contemporary Seafood, "0.3 mi from HQ", $$$$, Quiet, 4.7 ★, and a 94% Match badge. It is the only card with a Private Room badge. Octavia is #2, Mediterranean, "0.5 mi from HQ", $$$, Moderate, 4.6 ★, and 89% Match. Kusakabe is #3, Japanese Kaiseki, "0.7 mi from HQ", $$$$, Very Quiet, 4.8 ★, and 87% Match. The price is a dollar sign repeated `priceLevel` times. The match badge is the stored score times 100, with no decimal. "Book This Venue" toasts "Booking {name}..." and "Checking availability and sending calendar invite". Before a search, the page says "Search for an executive to get started". The commits on 2025-10-13 are from gpt-engineer-app[bot].

From the repository root:

```bash
npm install
npm run dev
```

Vite serves the app. `npm run build` writes the production bundle. The UI uses React, TypeScript, Tailwind CSS, and shadcn-ui.
