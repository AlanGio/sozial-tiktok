"use client";

import { slides } from "../../slides";
import SlideContent from "../../components/SlideContent";
import { use } from "react";

export default function SlidePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const id = parseInt(resolvedParams.id);
  const slide = slides[id - 1];

  if (!slide) {
    return <div>Slide not found</div>;
  }

  return <SlideContent content={slide} id={id} totalSlides={slides.length} />;
}
