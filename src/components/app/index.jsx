import { Blog1 } from "./blog";
import { Contact } from "./contract";
import { Faq } from "./faq";
import { Feature, Feature2 } from "./feature";
import { Footer1 } from "./footer";
import { HeaderNav } from "./head-nav";
import { Hero } from "./hero";
import { Pricing2 } from "./price";

export function HomeComp() {
  return (
    <div className="w-full">
      <HeaderNav />
      <Hero />
      <Feature />
      <Feature2 />
      <Pricing2 />
      <Blog1 />
      <Faq />
      <Contact />
      <Footer1 />
    </div>
  );
}
