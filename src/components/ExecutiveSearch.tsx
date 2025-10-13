import { useState } from "react";
import { Search, Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface ExecutiveSearchProps {
  onSearch: (query: string) => void;
}

export const ExecutiveSearch = ({ onSearch }: ExecutiveSearchProps) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-ai rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
        <div className="relative bg-card border border-border rounded-xl p-6 shadow-card">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Sparkles className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-lg font-semibold">Find Executive</h2>
          </div>
          
          <div className="flex gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="e.g., Jane Doe, CFO at Atlassian"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pl-10 bg-background/50 border-border/50 focus-visible:border-primary focus-visible:ring-primary/20"
              />
            </div>
            <Button 
              type="submit"
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow-ai"
            >
              Search
            </Button>
          </div>
          
          <p className="text-xs text-muted-foreground mt-3">
            AI-powered search with entity disambiguation and preference inference
          </p>
        </div>
      </div>
    </form>
  );
};
