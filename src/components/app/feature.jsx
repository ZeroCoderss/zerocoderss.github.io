import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { User } from "lucide-react";
import { feature } from "@/config/data/home-page";

export const Feature = () => (
  <div className="w-full py-5 lg:py-10">
    <div className="container p-5 mx-auto">
      <div className="grid border rounded-lg container p-8 grid-cols-1 gap-8 items-center lg:grid-cols-2">
        <div className="flex gap-10 flex-col">
          <div className="flex gap-4 flex-col">
            <div>
              <Badge variant="outline">{feature.badge}</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl lg:text-5xl tracking-tighter max-w-xl text-left font-regular">
                {feature.h2}
              </h2>
              <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                {feature.p1}
              </p>
            </div>
          </div>
          <div className="grid lg:pl-6 grid-cols-1 sm:grid-cols-3 items-start lg:grid-cols-1 gap-6">
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>{feature.p2}</p>
                <p className="text-muted-foreground text-sm">
                  {feature.p3}
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>{feature.p4}</p>
                <p className="text-muted-foreground text-sm">
                  {feature.p5}
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>{feature.p6}</p>
                <p className="text-muted-foreground text-sm">
                  {feature.p7}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-muted rounded-md aspect-square"></div>
      </div>
    </div>
  </div>
);

export const Feature2 = () => (
  <div className="w-full py-5 lg:py-10">
    <div className="container mx-auto">
      <div className="flex p-5 flex-col gap-10">
        <div className="flex gap-4 flex-col items-start">
          <div>
            <Badge>{feature.feature2.badge}</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
              {feature.feature2.h2}
            </h2>
            <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground  text-left">
              {feature.feature2.p1}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-muted rounded-md h-full lg:col-span-2 p-6 aspect-square lg:aspect-auto flex justify-between flex-col">
            <User className="w-8 h-8 stroke-1" />
            <div className="flex flex-col">
              <h3 className="text-xl tracking-tight">{feature.feature2.h3}</h3>
              <p className="text-muted-foreground max-w-xs text-base">
                {feature.feature2.p}
              </p>
            </div>
          </div>
          <div className="bg-muted rounded-md  aspect-square p-6 flex justify-between flex-col">
            <User className="w-8 h-8 stroke-1" />
            <div className="flex flex-col">
              <h3 className="text-xl tracking-tight">{feature.feature2.h3}</h3>
              <p className="text-muted-foreground max-w-xs text-base">
                {feature.feature2.p}
              </p>
            </div>
          </div>

          <div className="bg-muted rounded-md aspect-square p-6 flex justify-between flex-col">
            <User className="w-8 h-8 stroke-1" />
            <div className="flex flex-col">
              <h3 className="text-xl tracking-tight">{feature.feature2.h3}</h3>
              <p className="text-muted-foreground max-w-xs text-base">
                {feature.feature2.p}
              </p>
            </div>
          </div>
          <div className="bg-muted rounded-md h-full lg:col-span-2 p-6 aspect-square lg:aspect-auto flex justify-between flex-col">
            <User className="w-8 h-8 stroke-1" />
            <div className="flex flex-col">
              <h3 className="text-xl tracking-tight">{feature.feature2.h3}</h3>
              <p className="text-muted-foreground max-w-xs text-base">
                {feature.feature2.p}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
