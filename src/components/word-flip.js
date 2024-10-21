import React from "react";
import { FlipWords } from "./ui/flip-words";
import { Playfair_Display } from 'next/font/google';

// Ensure to import the Playfair_Display class
const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-playfair-display',
});

export function WordFlip() {
  const words = ["Software Engineer", "Full Stack Developer", "Data Analyst", "Mobile Developer"];
  
  return (
    <div className="h-[40rem] flex flex-col justify-center px-4">
      <h1 className={`text-7xl self-start font-normal text-neutral-600 dark:text-neutral-400 mb-5 ${playfairDisplay.className}`}>
        Hi, I&apos;m Ryan,
      </h1>
      <div className={`text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400 ${playfairDisplay.className}`}>
        I&apos;m a
        <FlipWords words={words} /> <br />
        at the University of Washington
      </div>
    </div>
  );
}
