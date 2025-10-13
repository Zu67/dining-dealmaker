import { useState } from "react";
import { Header } from "@/components/Header";
import { ExecutiveSearch } from "@/components/ExecutiveSearch";
import { ExecutiveProfile } from "@/components/ExecutiveProfile";
import { ContextForm } from "@/components/ContextForm";
import { VenueCard } from "@/components/VenueCard";
import { toast } from "sonner";

// Mock data for demonstration
const mockExecutive = {
  name: "Jane Doe",
  title: "Chief Financial Officer",
  company: "Atlassian",
  location: "San Francisco, CA",
  traits: [
    { label: "Diet", value: "Pescatarian", confidence: 0.92, type: "diet" as const },
    { label: "Alcohol", value: "Moderate wine", confidence: 0.78, type: "diet" as const },
    { label: "Cuisine", value: "Mediterranean", confidence: 0.85, type: "cuisine" as const },
    { label: "Cuisine", value: "Japanese", confidence: 0.73, type: "cuisine" as const },
    { label: "Ambiance", value: "Quiet & Private", confidence: 0.88, type: "preference" as const },
    { label: "Price Comfort", value: "Premium ($$$$)", confidence: 0.81, type: "preference" as const },
    { label: "Noise Tolerance", value: "Low (<65 dB)", confidence: 0.76, type: "preference" as const },
  ],
};

const mockVenues = [
  {
    id: "1",
    name: "Waterbar",
    cuisine: "Contemporary Seafood",
    imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    distance: "0.3 mi from HQ",
    priceLevel: 4,
    rating: 4.7,
    features: ["Pescatarian-friendly", "Private room", "Wine list"],
    aiRationale: "Perfect match for Jane's pescatarian preference with an exceptional seafood menu. Private room available for confidential deal discussions. Premium wine selection aligns with her moderate wine preference. Quiet waterfront setting matches low noise tolerance.",
    matchScore: 0.94,
    privateRoom: true,
    noiseLevel: "Quiet",
  },
  {
    id: "2",
    name: "Octavia",
    cuisine: "Mediterranean",
    imageUrl: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
    distance: "0.5 mi from HQ",
    priceLevel: 3,
    rating: 4.6,
    features: ["Mediterranean", "Intimate", "Vegetarian options"],
    aiRationale: "Strong Mediterranean focus aligns with Jane's top cuisine preference. Intimate setting with booth seating provides privacy for sales conversations. Extensive pescatarian and vegetarian menu. Well-regarded wine program.",
    matchScore: 0.89,
    privateRoom: false,
    noiseLevel: "Moderate",
  },
  {
    id: "3",
    name: "Kusakabe",
    cuisine: "Japanese Kaiseki",
    imageUrl: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&q=80",
    distance: "0.7 mi from HQ",
    priceLevel: 4,
    rating: 4.8,
    features: ["Omakase", "Intimate", "Premium sake"],
    aiRationale: "High-end Japanese kaiseki matches her cuisine preferences. Counter seating offers intimate, quiet experience. Exceptional seafood-focused menu perfect for pescatarian requirements. Premium sake and wine selection available.",
    matchScore: 0.87,
    privateRoom: false,
    noiseLevel: "Very Quiet",
  },
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showProfile, setShowProfile] = useState(false);
  const [showContext, setShowContext] = useState(false);
  const [showVenues, setShowVenues] = useState(false);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setShowProfile(true);
    setShowContext(false);
    setShowVenues(false);
    toast.success(`Found executive: ${mockExecutive.name}`);
    setTimeout(() => setShowContext(true), 800);
  };

  const handleContextSubmit = (context: any) => {
    setShowVenues(true);
    toast.success("Generated 3 personalized recommendations");
  };

  const handleBook = (venueId: string) => {
    const venue = mockVenues.find(v => v.id === venueId);
    toast.success(`Booking ${venue?.name}...`, {
      description: "Checking availability and sending calendar invite",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-foreground to-accent bg-clip-text text-transparent">
            Break bread. Close deals.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            AI-powered dining recommendations that understand executive preferences and accelerate your sales process.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-3xl mx-auto mb-8">
          <ExecutiveSearch onSearch={handleSearch} />
        </div>

        {/* Executive Profile */}
        {showProfile && (
          <div className="max-w-4xl mx-auto mb-8">
            <ExecutiveProfile executive={mockExecutive} />
          </div>
        )}

        {/* Context Form */}
        {showContext && (
          <div className="max-w-4xl mx-auto mb-8 animate-slide-up">
            <ContextForm onSubmit={handleContextSubmit} />
          </div>
        )}

        {/* Venue Recommendations */}
        {showVenues && (
          <div className="animate-slide-up">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Recommended Venues</h3>
              <p className="text-muted-foreground">Ranked by AI compatibility with Jane Doe's preferences</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockVenues.map((venue, idx) => (
                <VenueCard
                  key={venue.id}
                  venue={venue}
                  rank={idx + 1}
                  onBook={handleBook}
                />
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {!showProfile && (
          <div className="text-center py-16 text-muted-foreground">
            <p>Search for an executive to get started</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
