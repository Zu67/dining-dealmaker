import { Utensils, Sparkles } from "lucide-react";

export const Header = () => {
  return (
    <header className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full animate-glow" />
              <div className="relative bg-primary/10 p-2 rounded-xl border border-primary/20">
                <Utensils className="w-6 h-6 text-primary" />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold">Table Talk</h1>
              <p className="text-xs text-muted-foreground">AI Sales Dining Assistant</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Sparkles className="w-4 h-4 text-primary" />
            <span>Powered by AI</span>
          </div>
        </div>
      </div>
    </header>
  );
};
