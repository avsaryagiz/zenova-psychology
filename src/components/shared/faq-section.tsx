import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui";
import TitleSection from "./title-section";
import type { IFAQItem, ITitleSection } from "@/types/shared-types";

interface IFAQSectionProps {
  id: string;
  titleSection: Partial<ITitleSection>;
  ITEMS: IFAQItem[];
}
export default function FAQSection({
  id,
  titleSection: { title, description },
  ITEMS,
}: IFAQSectionProps) {
  return (
    <section
      id={id}
      className="bg-card flex min-h-[80svh] flex-col items-center py-20 shadow-inner md:py-32"
    >
      <div className="container">
        <TitleSection
          title={title || "Sıkça Sorulan Sorular"}
          description={description}
        />

        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {ITEMS.map(({ question, answer }, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left md:text-lg">
                  {question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground ml-2 pb-4">
                  {answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
