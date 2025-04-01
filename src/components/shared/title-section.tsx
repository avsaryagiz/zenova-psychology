import React from "react";

interface TitleSectionProps {
  title: string;
  description: string;
}

export default function TitleSection({
  title,
  description,
}: TitleSectionProps) {
  return (
    <section className="text-center">
      <h2 className="mx-auto mb-4 w-fit border-b">{title}</h2>
      <p className="text-muted-foreground mx-auto max-w-2xl">{description}</p>
    </section>
  );
}
