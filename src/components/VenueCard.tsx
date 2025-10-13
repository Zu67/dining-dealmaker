import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, DollarSign, Users, Volume2, Sparkles, CheckCircle2 } from "lucide-react";

interface Venue {
  id: string;
  name: string;
  cuisine: string;
  imageUrl: string;
  distance: string;
  priceLevel: number;
  rating: number;
  features: string[];
  aiRationale: string;
  matchScore: number;
  privateRoom: boolean;
  noiseLevel: string;
}

interface VenueCardProps {
  venue: Venue;
  rank: number;
  onBook: (venueId: string) => void;
}

export const VenueCard = ({ venue, rank, onBook }: VenueCardProps) => {
  return (
    <Card className="bg-gradient-card border-border shadow-card hover:shadow-elevated transition-all duration-300 overflow-hidden group">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={venue.imageUrl} 
          alt={venue.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <Badge className="bg-primary text-primary-foreground border-0 font-mono">
            #{rank}
          </Badge>
          <Badge className="bg-background/80 backdrop-blur-sm text-foreground border-0">
            {(venue.matchScore * 100).toFixed(0)}% Match
          </Badge>
        </div>
        {venue.privateRoom && (
          <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground border-0">
            Private Room
          </Badge>
        )}
      </div>

      <div className="p-5">
        {/* Header */}
        <div className="mb-3">
          <h3 className="text-xl font-bold mb-1">{venue.name}</h3>
          <p className="text-sm text-muted-foreground">{venue.cuisine}</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="flex items-center gap-2 text-sm">
            <MapPin className="w-4 h-4 text-muted-foreground" />
            <span>{venue.distance}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <DollarSign className="w-4 h-4 text-muted-foreground" />
            <span>{"$".repeat(venue.priceLevel)}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Volume2 className="w-4 h-4 text-muted-foreground" />
            <span>{venue.noiseLevel}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Users className="w-4 h-4 text-muted-foreground" />
            <span>{venue.rating} ★</span>
          </div>
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-4">
          {venue.features.map((feature, idx) => (
            <Badge key={idx} variant="secondary" className="text-xs">
              <CheckCircle2 className="w-3 h-3 mr-1" />
              {feature}
            </Badge>
          ))}
        </div>

        {/* AI Rationale */}
        <div className="bg-gradient-ai rounded-lg p-3 mb-4 border border-primary/20">
          <div className="flex items-start gap-2">
            <Sparkles className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
            <p className="text-xs text-foreground/90 leading-relaxed">{venue.aiRationale}</p>
          </div>
        </div>

        {/* Actions */}
        <Button 
          onClick={() => onBook(venue.id)}
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
        >
          Book This Venue
        </Button>
      </div>
    </Card>
  );
};
