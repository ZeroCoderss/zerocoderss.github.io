import { PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { faq } from "@/config/data/home-page";
import { Link } from "react-router-dom";

export const Faq = () => (
  <div className="w-full p-5 md:px-5 lg:py-10">
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex justify-center gap-4 flex-col md:px-6 px-0 ">
          <div>
            <Badge variant="outline">{faq.badge}</Badge>
          </div>

          <div className="flex gap-2 flex-col">
            <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl   font-regular">
              {faq.text}
            </h4>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl ">
              {faq.description}
            </p>
          </div>
          <div>
            <Link to="/contact">
              <Button className="gap-4" variant="outline">
                Any questions? Reach out <PhoneCall className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="max-w-3xl w-full mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faq.faqs.map((data, index) => (
              <AccordionItem key={index} value={"index-" + index}>
                <AccordionTrigger>{data.question}</AccordionTrigger>
                <AccordionContent>{data.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  </div>
);
