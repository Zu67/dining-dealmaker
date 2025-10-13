import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Building2, MapPin, TrendingUp } from "lucide-react";

interface Trait {
  label: string;
  value: string;
  confidence: number;
  type: "diet" | "cuisine" | "preference";
}

interface ExecutiveProfileProps {
  executive: {
    name: string;
    title: string;
    company: string;
    location: string;
    traits: Trait[];
  };
}

const ConfidenceBadge = ({ confidence }: { confidence: number }) => {
  const getColor = () => {
    if (confidence >= 0.8) return "text-primary bg-primary/10 border-primary/20";
    if (confidence >= 0.6) return "text-accent bg-accent/10 border-accent/20";
    return "text-muted-foreground bg-muted border-border";
  };

  return (
    <span className={`text-xs font-mono px-2 py-0.5 rounded border ${getColor()}`}>
      {(confidence * 100).toFixed(0)}%
    </span>
  );
};

export const ExecutiveProfile = ({ executive }: ExecutiveProfileProps) => {
  const dietTraits = executive.traits.filter(t => t.type === "diet");
  const cuisineTraits = executive.traits.filter(t => t.type === "cuisine");
  const preferenceTraits = executive.traits.filter(t => t.type === "preference");

  return (
    <Card className="bg-gradient-card border-border shadow-elevated animate-fade-in">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">{executive.name}</h2>
            <div className="flex flex-col gap-1 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4" />
                <span>{executive.title} at {executive.company}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{executive.location}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs text-primary">
            <TrendingUp className="w-4 h-4" />
            <span>AI Verified</span>
          </div>
        </div>

        {/* Dietary Restrictions */}
        {dietTraits.length > 0 && (
          <div className="mb-4">
            <h3 className="text-sm font-medium text-muted-foreground mb-2">Dietary Restrictions</h3>
            <div className="flex flex-wrap gap-2">
              {dietTraits.map((trait, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-background/50 border border-border rounded-lg px-3 py-2">
                  <span className="text-sm">{trait.value}</span>
                  <ConfidenceBadge confidence={trait.confidence} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Cuisine Preferences */}
        {cuisineTraits.length > 0 && (
          <div className="mb-4">
            <h3 className="text-sm font-medium text-muted-foreground mb-2">Preferred Cuisines</h3>
            <div className="flex flex-wrap gap-2">
              {cuisineTraits.map((trait, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-background/50 border border-border rounded-lg px-3 py-2">
                  <span className="text-sm">{trait.value}</span>
                  <ConfidenceBadge confidence={trait.confidence} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Other Preferences */}
        {preferenceTraits.length > 0 && (
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-2">Preferences</h3>
            <div className="grid grid-cols-2 gap-3">
              {preferenceTraits.map((trait, idx) => (
                <div key={idx} className="bg-background/50 border border-border rounded-lg p-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-muted-foreground">{trait.label}</span>
                    <ConfidenceBadge confidence={trait.confidence} />
                  </div>
                  <p className="text-sm font-medium">{trait.value}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};
