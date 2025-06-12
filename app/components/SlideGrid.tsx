"use client";

interface SlideGridProps {
  children: React.ReactNode;
  columns?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
  };
  gap?: string;
}

export default function SlideGrid({
  children,
  columns = { mobile: 1, tablet: 2, desktop: 3 },
  gap = "gap-6 sm:gap-8",
}: SlideGridProps) {
  const getGridCols = () => {
    const { mobile = 1, tablet = 2, desktop = 3 } = columns;
    return `grid-cols-${mobile} md:grid-cols-${tablet} lg:grid-cols-${desktop}`;
  };

  return <div className={`grid ${getGridCols()} ${gap}`}>{children}</div>;
}
