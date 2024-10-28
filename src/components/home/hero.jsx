import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { hero } from "@/config/data/home-page";
import Link from "next/link";

export const Hero = () => (
  <div className="w-full">
    <div className="container mx-auto">
      <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
        <div>
          <Button variant="secondary" size="sm" className="gap-4">
            {hero.heroUpButton} <MoveRight className="w-4 h-4" />
          </Button>
        </div>
        <div className="flex gap-4 flex-col">
          <h1 className="text-4xl md:text-6xl max-w-2xl tracking-tighter text-center font-regular">
            {hero.heroTitle}
          </h1>
          <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
            {hero.heroSubTitle}
          </p>
        </div>
        <div className="flex flex-row gap-3">
          <Link href="/contact">
            <Button size="default" className="gap-3" variant="outline">
              Book a meeting
              <PhoneCall className="w-4 h-4" />
            </Button>
          </Link>
          <Button size="default" className="gap-3">
            {hero.heroSignupButton} <MoveRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  </div>
);
