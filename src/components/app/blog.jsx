import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { blogs } from "@/config/data/home-page";

export const Blog1 = () => (
  <div className="w-full py-5 lg:py-10">
    <div className="container p-5 mx-auto flex flex-col gap-14">
      <div className="flex w-full flex-col sm:flex-row sm:justify-between sm:items-center gap-8">
        <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular">
          {blogs.latestArticles}
        </h4>
        <Button className="gap-4">
          {blogs.view} <MoveRight className="w-4 h-4" />
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex flex-col gap-2 hover:opacity-75 cursor-pointer">
          <div className="bg-muted rounded-md aspect-video mb-4"></div>
          <h3 className="text-xl tracking-tight">{blogs.invoices}</h3>
          <p className="text-muted-foreground text-base">
            {blogs.goal1}
          </p>
        </div>
        <div className="flex flex-col gap-2 hover:opacity-75 cursor-pointer">
          <div className="bg-muted rounded-md aspect-video mb-4"></div>
          <h3 className="text-xl tracking-tight">{blogs.invoices}</h3>
          <p className="text-muted-foreground text-base">
            {blogs.goal2}
          </p>
        </div>
        <div className="flex flex-col gap-2 hover:opacity-75 cursor-pointer">
          <div className="bg-muted rounded-md aspect-video mb-4"></div>
          <h3 className="text-xl tracking-tight">{blogs.invoices}</h3>
          <p className="text-muted-foreground text-base">
            {blogs.goal3}
          </p>
        </div>
        <div className="flex flex-col gap-2 hover:opacity-75 cursor-pointer">
          <div className="bg-muted rounded-md aspect-video mb-4"></div>
          <h3 className="text-xl tracking-tight">{blogs.invoices}</h3>
          <p className="text-muted-foreground text-base">
            {blogs.goal4}
          </p>
        </div>
      </div>
    </div>
  </div>
);
