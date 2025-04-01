import { cn } from "@/lib/utils";
import type { ITitleSection } from "@/types/shared-types";

export default function TitleSection({
  title,
  description,
  titleClassName,
  descriptionClassName,
}: ITitleSection) {
  return (
    <section className={cn("flex flex-col items-center gap-4", titleClassName)}>
      <h2 className="border-b">{title}</h2>
      {description ? (
        typeof description === "string" ? (
          <p
            className={cn(
              "text-muted-foreground mx-auto max-w-2xl text-center",
              descriptionClassName,
            )}
          >
            {description}
          </p>
        ) : (
          description
        )
      ) : null}
    </section>
  );
}
