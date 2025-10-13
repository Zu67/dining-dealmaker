import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalendarIcon, Users, MapPin, DollarSign } from "lucide-react";
import { toast } from "sonner";

interface ContextFormProps {
  onSubmit: (context: any) => void;
}

export const ContextForm = ({ onSubmit }: ContextFormProps) => {
  const [context, setContext] = useState({
    date: "",
    time: "",
    partySize: "2",
    location: "",
    budget: "moderate",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!context.date) {
      toast.error("Please select a date");
      return;
    }
    
    if (!context.time) {
      toast.error("Please select a time");
      return;
    }
    
    if (!context.location) {
      toast.error("Please enter a location");
      return;
    }
    
    onSubmit(context);
  };

  return (
    <Card className="bg-gradient-card border-border shadow-card p-6">
      <h3 className="text-lg font-semibold mb-4">Meeting Context</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="date" className="text-sm text-muted-foreground">
              <CalendarIcon className="w-4 h-4 inline mr-2" />
              Date
            </Label>
            <Input
              id="date"
              type="date"
              value={context.date}
              onChange={(e) => setContext({ ...context, date: e.target.value })}
              className="bg-background/50 border-border/50"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="time" className="text-sm text-muted-foreground">Time</Label>
            <Input
              id="time"
              type="time"
              value={context.time}
              onChange={(e) => setContext({ ...context, time: e.target.value })}
              className="bg-background/50 border-border/50"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="location" className="text-sm text-muted-foreground">
            <MapPin className="w-4 h-4 inline mr-2" />
            Location/Area
          </Label>
          <Input
            id="location"
            placeholder="e.g., Downtown San Francisco, near HQ"
            value={context.location}
            onChange={(e) => setContext({ ...context, location: e.target.value })}
            className="bg-background/50 border-border/50"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="partySize" className="text-sm text-muted-foreground">
              <Users className="w-4 h-4 inline mr-2" />
              Party Size
            </Label>
            <Select value={context.partySize} onValueChange={(val) => setContext({ ...context, partySize: val })}>
              <SelectTrigger className="bg-background/50 border-border/50">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2">2 people</SelectItem>
                <SelectItem value="3">3 people</SelectItem>
                <SelectItem value="4">4 people</SelectItem>
                <SelectItem value="5">5+ people</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="budget" className="text-sm text-muted-foreground">
              <DollarSign className="w-4 h-4 inline mr-2" />
              Budget
            </Label>
            <Select value={context.budget} onValueChange={(val) => setContext({ ...context, budget: val })}>
              <SelectTrigger className="bg-background/50 border-border/50">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="budget">Budget ($)</SelectItem>
                <SelectItem value="moderate">Moderate ($$)</SelectItem>
                <SelectItem value="upscale">Upscale ($$$)</SelectItem>
                <SelectItem value="premium">Premium ($$$$)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
          Generate Recommendations
        </Button>
      </form>
    </Card>
  );
};
