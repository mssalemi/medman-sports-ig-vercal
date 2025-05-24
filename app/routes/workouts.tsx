import type { MetaFunction } from "@remix-run/node";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const meta: MetaFunction = () => {
  return [{ title: "Free Workouts | MedMan Sports" }];
};

export default function FreeWorkouts() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-foreground">Free Workouts</h1>
        
        <div className="prose dark:prose-invert max-w-none mb-10">
          <p className="text-lg text-foreground leading-relaxed">
            No fluff. Just the workouts that actually get you strong, mobile, and ready for life.
          </p>
          <p className="text-foreground leading-relaxed mb-4">
            These are the exact routines I use — or the minimum I'd recommend for staying sharp. 
            Whether you're getting back in shape or training like a hybrid athlete, pick your lane and get moving.
          </p>
        </div>
        
        <div className="my-8 border-t border-border"></div>
        
        <div className="grid gap-10 md:grid-cols-1 lg:grid-cols-2 mb-12">
          <Card className="border-2 border-primary/40 overflow-hidden">
            <div className="bg-primary/10 px-6 py-2">
              <span className="font-mono font-bold text-sm">💪 MEDMAN BASICS</span>
            </div>
            <CardHeader>
              <CardTitle>Stay fit. Stay moving. Stay ready.</CardTitle>
              <CardDescription>This is the minimum effective dose. Perfect for busy weeks, starting over, or staying locked in when life gets chaotic.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-foreground mb-2">Weekly Plan:</h3>
                  <ul className="space-y-1 text-foreground list-disc pl-5">
                    <li>3 workouts/week (full-body focus)</li>
                    <li>1–2 cardio sessions (20–30 min)</li>
                    <li>Short + intense, all under 40 min</li>
                  </ul>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                  <div>
                    <span className="text-sm font-semibold text-foreground">✅ Ideal for:</span>
                    <p className="text-sm text-muted-foreground">beginners, weekend warriors, comeback szn.</p>
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-foreground">🧠 Goal:</span>
                    <p className="text-sm text-muted-foreground">Build momentum, move pain-free, feel strong again.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-2 border-primary/40 overflow-hidden">
            <div className="bg-primary/10 px-6 py-2">
              <span className="font-mono font-bold text-sm">🔸 MEDMAN PRO</span>
            </div>
            <CardHeader>
              <CardTitle>This is my actual training.</CardTitle>
              <CardDescription>Sports, strength, mobility, and all the chaos in between.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-foreground mb-2">Weekly Plan:</h3>
                  <ul className="space-y-1 text-foreground list-disc pl-5">
                    <li>5–6 workouts/week
                      <ul className="pl-5 space-y-1 mt-1">
                        <li>2 leg days (mobility + strength focus)</li>
                        <li>2 upper days (bench press + back work)</li>
                        <li>1–2 accessory days (abs, shoulders, arms)</li>
                      </ul>
                    </li>
                    <li>Cardio: 60 mins minimum (running, Peloton, sports)</li>
                    <li>Plus: 8–9 sports sessions/week (tennis, pickleball, golf)</li>
                  </ul>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                  <div>
                    <span className="text-sm font-semibold text-foreground">⚡ Ideal for:</span>
                    <p className="text-sm text-muted-foreground">athletes, ex-athletes, and anyone chasing the edge.</p>
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-foreground">🧠 Goal:</span>
                    <p className="text-sm text-muted-foreground">Train for performance, longevity, and a body that holds up.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="my-12 border-t border-border"></div>
        
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm mb-8">
          <h2 className="text-xl font-bold mb-4 text-foreground">MedMan Training Tips</h2>
          <ul className="space-y-3 text-foreground">
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Always warm up. Don't skip this.</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Proper form {'>'} more reps.</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Track your wins — even small ones.</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>You don't need to go 100%. You need to go again tomorrow.</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Do it for future you. He's gonna be jacked and grateful.</span>
            </li>
          </ul>
        </div>
        
        <div className="text-center">
          <p className="text-foreground font-medium">
            Questions about which plan is right for you? <a href="https://instagram.com/medmansports" target="_blank" rel="noopener noreferrer" className="text-primary underline">Hit me up</a> and let's talk.
          </p>
        </div>
      </div>
    </div>
  );
}