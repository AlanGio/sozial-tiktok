"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";

interface SlideProps {
  content: React.ReactNode;
  id: number;
  totalSlides: number;
}

export default function Slide({ content, id, totalSlides }: SlideProps) {
  const router = useRouter();
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "ArrowRight" && id < totalSlides) {
      router.push(`/s/${id + 1}`);
    } else if (event.key === "ArrowLeft" && id > 1) {
      router.push(`/s/${id - 1}`);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;

    const swipeDistance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50; // minimum distance to be considered a swipe

    if (swipeDistance > minSwipeDistance && id < totalSlides) {
      router.push(`/s/${id + 1}`);
    } else if (swipeDistance < -minSwipeDistance && id > 1) {
      router.push(`/s/${id - 1}`);
    }

    // Reset touch coordinates
    touchStartX.current = null;
    touchEndX.current = null;
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [id]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div
        className="relative w-full h-[calc(100vh-48px)]"
        onClick={() => id < totalSlides && router.push(`/s/${id + 1}`)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="w-full h-full flex flex-col justify-center items-start">
          {content}
        </div>
        <div className="absolute bottom-4 left-4 text-sm opacity-50 p-2">
          {id}/{totalSlides}
        </div>
      </div>
    </div>
  );
}
