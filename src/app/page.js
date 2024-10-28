import { Blog1 } from "@/components/home/blog";
import { Faq } from "@/components/home/faq";
import { Feature } from "@/components/home/feature";
import { FooterComp } from "@/components/home/footer";
import { Hero } from "@/components/home/hero";

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
