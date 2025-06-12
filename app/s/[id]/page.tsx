import { slides } from "../../slides";
import Slide from "../../components/Slide";

export default async function SlidePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: idString } = await params;
  const id = parseInt(idString);
  const slide = slides[id - 1];

  if (!slide) {
    return <div>Slide not found</div>;
  }

  return <Slide content={slide} id={id} totalSlides={slides.length} />;
}

export async function generateStaticParams() {
  return slides.map((_, index) => ({
    id: (index + 1).toString(),
  }));
}
