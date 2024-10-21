"use client";
 
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function TechStackCards() {
    const images = [
      "/images/firebase-logo.webp",
      "/images/kotlin-logo.png",
      "/images/react-logo.webp",
      "/images/next-logo.webp",
      "/images/javascript-logo.png",
      "/images/python-logo.png",
      "/images/java-logo.png",
      "/images/sql-logo.png",
    ];
  
    return (
      <div className="h-[30rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards items={images} direction="right" speed="slow" />
      </div>
    );
  }