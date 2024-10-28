import { Blog1 } from "@/components/app/blog";
import { Faq } from "@/components/app/faq";
import { Feature } from "@/components/app/feature";
import { FooterComp } from "@/components/app/footer";
import { Hero } from "@/components/app/hero";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <Feature />
      <Blog1 />
      <Faq />
      <FooterComp />
    </div>
  );
}
