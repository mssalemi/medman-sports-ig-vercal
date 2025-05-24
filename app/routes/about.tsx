import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const meta: MetaFunction = () => {
  return [{ title: "About This | MedMan Sports" }];
};

export default function AboutThis() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-foreground">About This</h1>
        
        <div className="prose dark:prose-invert max-w-none mb-12">
          <p className="text-lg text-foreground leading-relaxed mb-6">
            Hey, I'm Mehdi — but most people know me as MedMan. I'm a former varsity soccer player
            turned software dev and fitness enthusiast who's building this thing one rep at a time.
          </p>
          
          <p className="text-foreground leading-relaxed mb-6">
            MedMan Sports isn't some polished corporate fitness brand with a team of experts in white coats. 
            It's just me and my crew sharing what actually works from years of real training, real mistakes, 
            and real breakthroughs. No BS, no miracle promises — just honest training that makes you move better, 
            feel stronger, and stay in the game.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>The Mission</CardTitle>
              <CardDescription>Train with intensity, joy, and real-life hustle</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                The goal? Help everyday athletes build strength that lasts, find joy in the process,
                and keep showing up — even when life gets chaotic. This isn't about perfection or
                Instagram aesthetics. It's about building a sustainable training practice that makes
                your whole life better.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>My Story</CardTitle>
              <CardDescription>Soccer field → Gym owner → Developer → Fit-for-life mentor</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                My journey has been anything but linear. From competitive soccer to running my own gym,
                then diving into software development — each chapter has shaped how I approach fitness.
                Every workout I share comes from my actual training log. If I haven't tested it, I don't
                recommend it.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">The MedMan Philosophy</h2>
          <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center bg-primary text-primary-foreground rounded-full h-6 w-6 min-w-6 mr-3 mt-0.5">1</span>
                <div>
                  <h3 className="font-medium text-foreground">Consistency Trumps Everything</h3>
                  <p className="text-muted-foreground">Showing up regularly with decent effort beats perfect workouts done sporadically. Progress is built in the daily grind.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center bg-primary text-primary-foreground rounded-full h-6 w-6 min-w-6 mr-3 mt-0.5">2</span>
                <div>
                  <h3 className="font-medium text-foreground">Train For Life, Not Just Looks</h3>
                  <p className="text-muted-foreground">Build a body that performs well, feels strong, and stays healthy for decades, not just for beach season.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center bg-primary text-primary-foreground rounded-full h-6 w-6 min-w-6 mr-3 mt-0.5">3</span>
                <div>
                  <h3 className="font-medium text-foreground">Community Makes You Better</h3>
                  <p className="text-muted-foreground">We're all stronger with accountability, shared knowledge, and the occasional kick in the ass from people who care.</p>
                </div>
              </li>
            </ul>
          </div>
        </section>
        
        <div className="mb-10 p-6 border border-border rounded-lg bg-card">
          <h2 className="text-xl font-semibold mb-3 text-foreground">The Raw Truth</h2>
          <p className="text-foreground italic">
            "I'm not here to sell you on becoming the next fitness influencer or Olympic athlete. 
            I'm here to help you build a training practice that fits your real life — with all its 
            deadlines, family commitments, and random chaos. Because staying strong and athletic isn't 
            a luxury, it's the foundation that makes everything else in life better."
          </p>
          <p className="text-right mt-2 text-muted-foreground">— Mehdi</p>
        </div>
        
        <div className="text-center">
          <p className="text-foreground">
            Ready to train like you mean it? Check out my <Link to="/workouts" className="text-primary underline">free workouts</Link> and let's get after it.
          </p>
        </div>
      </div>
    </div>
  );
}