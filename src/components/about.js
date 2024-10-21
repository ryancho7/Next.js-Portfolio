"use client";
import React from "react";
import { LinkPreview } from "@/components/ui/link-preview";

export function About() {
    return (
      <div className="flex justify-center items-center flex-col px-4 mt-20">
        <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto mb-10">
          My primary Tech Stack includes{" "}
          <LinkPreview
            url="https://sports-news-summarized.netlify.app/"
            className="font-bold"
            imageSrc="/images/sports-news.png"
          >
            React/Next.js
          </LinkPreview>{" "}
          and{" "}
          <LinkPreview
            url="https://github.com/ryancho7/seoul-bites"
            className="font-bold"
            imageSrc="/images/seoul-bites.png"
          >
            React Native/Kotlin,
          </LinkPreview>{" "}
          and {" "}
          <LinkPreview
            url="https://github.com/ryancho7/MineSweeper"
            className="font-bold"
            imageSrc="/images/minesweeper.jpeg"
          >
            Java.
          </LinkPreview>{" "}
        </p>
        <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto">
          I'm currently working on projects using{" "}
          <span className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-orange-500 to-yellow-500">Python/SQL</span>
          {" "}and other backend services. Check them out on my{" "}
          <LinkPreview
            url="https://github.com/ryancho7"
            className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
            imageSrc="/images/github-profile.png"
          >
            GitHub.
          </LinkPreview>
        </p>
      </div>
    );
  }
  