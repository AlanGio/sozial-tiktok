import { slides } from "../slides";
import { use } from "react";
import Header from "../components/Header";

export function generateStaticParams() {
  return slides.map((_, index) => ({
    id: (index + 1).toString(),
  }));
}

export default function SlideLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  return (
    <>
      <Header />
      {children}
    </>
  );
}
