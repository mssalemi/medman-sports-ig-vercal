import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const meta: MetaFunction = () => {
  return [
    { title: "MedMan Sports" },
    { name: "description", content: "Train With Hustle. Move With Purpose." },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero Section with athletic background */}
      <div className="w-full bg-gradient-to-br from-primary/5 to-primary/20 relative overflow-hidden">
        {/* Optional background pattern overlay */}
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMC0zMHY2aDZ2LTZoLTZ6bTAgMTJ2Nmg2di02aC02em0wIDEydjZoNnYtNmgtNnptLTEyIDB2Nmg2di02aC02em0wLTEydjZoNnYtNmgtNnptMC0xMnY2aDZ2LTZoLTZ6bTAgMzB2Nmg2di02aC02em0xMiAwaC02djZoNnYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
        
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
              Train With Hustle.<br />Move With Purpose.
            </h1>
            
            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              MedMan Sports is the home of everyday athletes chasing the edge — from full-body workouts to sports-level grind. Pick your plan, hit the court, and train like you mean it.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 pt-4 md:pt-8">
              <Link to="/workouts">
                <Button 
                  size="lg"
                  className="w-full sm:w-auto transition-all active:scale-95 focus:outline-none"
                  onMouseUp={(e) => e.currentTarget.blur()}
                >
                  🔥 Free Workouts
                </Button>
              </Link>
              
              <a href="https://youtube.com/@medmansports" target="_blank" rel="noopener noreferrer">
                <Button 
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto transition-all active:scale-95 focus:outline-none"
                  onMouseUp={(e) => e.currentTarget.blur()}
                >
                  🎥 YouTube
                </Button>
              </a>
              
              <a href="https://instagram.com/medmansports" target="_blank" rel="noopener noreferrer">
                <Button 
                  variant="outline"
                  size="lg" 
                  className="w-full sm:w-auto transition-all active:scale-95 focus:outline-none"
                  onMouseUp={(e) => e.currentTarget.blur()}
                >
                  📸 Instagram
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Additional content section */}
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-foreground text-center">Ready to Level Up?</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <CardTitle>Free Workouts</CardTitle>
                <CardDescription>Access our collection of workout routines for all fitness levels.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-foreground">Full-body workouts, mobility drills, and sport-specific training to help you achieve your athletic goals.</p>
              </CardContent>
              <CardFooter>
                <Link to="/workouts" className="w-full">
                  <Button variant="default" className="w-full" onMouseUp={(e) => e.currentTarget.blur()}>View Workouts</Button>
                </Link>
              </CardFooter>
            </Card>
            
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <CardTitle>Training Tips</CardTitle>
                <CardDescription>Expert advice to maximize your results and prevent injuries.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-foreground">Learn proper form, recovery techniques, and nutrition strategies from experienced coaches.</p>
              </CardContent>
              <CardFooter>
                <a href="https://youtube.com/@medmansports" target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button variant="outline" className="w-full" onMouseUp={(e) => e.currentTarget.blur()}>Watch Videos</Button>
                </a>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
