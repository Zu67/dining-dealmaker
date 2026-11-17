# Table Talk

Table Talk is the AI sales dining assistant named in `index.html` ("Table Talk - AI Sales Dining Assistant"). The home page says "Break bread. Close deals." and "AI-powered dining recommendations that understand executive preferences and accelerate your sales process."

The screen in `src` is:

- Executive search (`src/components/ExecutiveSearch.tsx`): a "Find Executive" form. The note under the field says "AI-powered search with entity disambiguation and preference inference".
- Profile (`src/components/ExecutiveProfile.tsx`): name, title, company, location, and diet, cuisine, and preference traits, each with a confidence percentage.
- Venue cards (`src/components/VenueCard.tsx`): rank, match score, cuisine, distance, price, noise, rating, feature badges, an AI rationale, and a "Book This Venue" button.

`src/pages/Index.tsx` fills those components from mock executive and venue data. A meeting context form (date, time, location, party size, and budget) sits between the profile and the venue cards. The commits on 2025-10-13 are from gpt-engineer-app[bot].

From the repository root:

```bash
npm install
npm run dev
```

Vite serves the app. `npm run build` writes the production bundle. The UI uses React, TypeScript, Tailwind CSS, and shadcn-ui.
