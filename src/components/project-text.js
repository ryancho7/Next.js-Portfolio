"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `Some of my Recent Projects`;

export function ProjectText() {
  return (
    <div>
        <TextGenerateEffect words={words} />
    </div>
  );
}
