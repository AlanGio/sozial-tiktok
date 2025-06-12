"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SlideContentProps {
  content: React.ReactNode;
  id: number;
  totalSlides: number;
}

export default function SlideContent({
  content,
  id,
  totalSlides,
}: SlideContentProps) {
  const router = useRouter();
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeout = useRef<NodeJS.Timeout>();

  const slideVariants = {
    enter: (direction: "left" | "right") => ({
      x: direction === "right" ? 1000 : -1000,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: "left" | "right") => ({
      zIndex: 0,
      x: direction === "right" ? -1000 : 1000,
      opacity: 0,
      scale: 0.95,
    }),
  };

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "ArrowRight" && id < totalSlides) {
      setDirection("right");
      router.push(`/s/${id + 1}`);
    } else if (event.key === "ArrowLeft" && id > 1) {
      setDirection("left");
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
    if (
      touchStartX.current === null ||
      touchEndX.current === null ||
      isScrolling
    )
      return;

    const swipeDistance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (swipeDistance > minSwipeDistance && id < totalSlides) {
      setDirection("right");
      router.push(`/s/${id + 1}`);
    } else if (swipeDistance < -minSwipeDistance && id > 1) {
      setDirection("left");
      router.push(`/s/${id - 1}`);
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const handleScroll = () => {
    setIsScrolling(true);
    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }
    scrollTimeout.current = setTimeout(() => {
      setIsScrolling(false);
    }, 150);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [id]);

  return (
    <div className="flex items-center justify-center min-h-screen overflow-hidden">
      <AnimatePresence initial={false} mode="wait" custom={direction}>
        <motion.div
          key={id}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
            scale: { duration: 0.2 },
          }}
          className="relative w-full min-h-screen md:h-[calc(100vh-48px)]"
          onClick={() => {
            if (!isScrolling && id < totalSlides) {
              setDirection("right");
              router.push(`/s/${id + 1}`);
            }
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <motion.div
            className="w-full h-full flex flex-col justify-center items-start overflow-y-auto md:overflow-y-visible px-4 sm:px-8 py-20 md:py-12"
            onScroll={handleScroll}
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "rgba(255, 255, 255, 0.1) transparent",
            }}
          >
            {content}
            <motion.div
              className="sticky bottom-4 left-4 text-sm opacity-50 p-2 bg-black/20 backdrop-blur-sm rounded-full self-start mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.3 }}
            >
              {id}/{totalSlides}
            </motion.div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
