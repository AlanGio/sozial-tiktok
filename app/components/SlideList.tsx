"use client";

interface SlideListProps {
  items: string[];
  className?: string;
  bulletColor?: string;
}

export default function SlideList({
  items,
  className = "",
  bulletColor = "text-pink-400",
}: SlideListProps) {
  return (
    <ul className={`space-y-2 sm:space-y-3 list-none ${className}`}>
      {items.map((item, index) => (
        <li key={index} className="flex items-start">
          <span
            className={`font-bold mr-2 sm:mr-3 text-xs sm:text-base ${bulletColor}`}
          >
            •
          </span>
          <span className="text-sm sm:text-base flex-1">{item}</span>
        </li>
      ))}
    </ul>
  );
}
