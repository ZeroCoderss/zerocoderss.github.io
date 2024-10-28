import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { blogs } from "@/config/data/home-page";

export const Blog1 = () => (
  <div className="w-full p-5 md:p-10">
    <div className="container   mx-auto flex flex-col gap-14">
      <div className="flex w-full flex-col sm:flex-row sm:justify-between sm:items-center gap-8">
        <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular">
          Latest articles
        </h4>
        <Button className="gap-4">
          View all articles <MoveRight className="w-4 h-4" />
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 hover:opacity-75 cursor-pointer"
          >
            <div className="bg-muted rounded-md aspect-video mb-4">
              <img src={blog.videoUrl} alt="" />
            </div>
            <h3 className="text-xl tracking-tight">{blog.title}</h3>
            <p className="text-muted-foreground text-base">{blog.goal}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);
