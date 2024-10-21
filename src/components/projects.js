import React from "react";
import Image from "next/image";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { ExternalLink } from "lucide-react";
import { IconBrandGithub } from "@tabler/icons-react";

export function ProjectGrid() {
  return (
    (<BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          href={item.href}
          icon2={item.icon2}
          href2={item.href2}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""} />
      ))}
    </BentoGrid>)
  );
}

const Skeleton = ({ image }) => (
    <div className="flex flex-1 w-full h-full max-h-[10rem] rounded-xl bg-gradient-to-br from-white dark:from-neutral-900 dark:to-neutral-800 to-neutral-700 overflow-hidden">
      {image && (
        <Image
          src={image}
          alt="Image"
          width={300}
          height={192}
          className="rounded-xl w-full object-cover"
        />
      )}
    </div>
  );


const items = [
  {
    title: "Next.js Portfolio",
    description: "An updated portfolio built using Next.js and Tailwind CSS",
    header: <Skeleton image="/images/nextjs-portfolio.png"/>,
    icon: <ExternalLink className="h-4 w-4 text-neutral-500" />,
    href: "https://portfolioryancho.netlify.app/",
    icon2: <IconBrandGithub className="h-4 w-4 text-neutral-500" />,
    href2: "https://github.com/ryancho7/Next.js-Portfolio",
  },
  {
    title: "Minesweeper",
    description: "A classic game built using Java's awt and swing graphics library",
    header: <Skeleton image="/images/minesweeper.jpeg"/>,
    icon: <ExternalLink className="h-4 w-4 text-neutral-500" />,
    href: "https://github.com/ryancho7/MineSweeper",
    icon2: <IconBrandGithub className="h-4 w-4 text-neutral-500" />,
    href2: "https://github.com/ryancho7/MineSweeper",
  },
  {
    title: "Personality Quiz",
    description: "Website for creating and taking personality quizzes built using React and Firebase",
    header: <Skeleton image="/images/persona-playground.jpeg"/>,
    icon: <ExternalLink className="h-4 w-4 text-neutral-500" />,
    href: "https://sp24-persona-playground.web.app/",
    icon2: <IconBrandGithub className="h-4 w-4 text-neutral-500" />,
    href2: "https://github.com/info340-sp24a/project-erihuynh/tree/main",
  },
  {
    title: "Seoul Bites",
    description:
      "An mobile iOS-based Korean food delivery application built using React Native, NativeWind, Redux, and Sanity",
    header: <Skeleton image="/images/seoul-bites.png"/>,
    icon: <ExternalLink className="h-4 w-4 text-neutral-500" />,
    href: "https://github.com/ryancho7/seoul-bites",
    icon2: <IconBrandGithub className="h-4 w-4 text-neutral-500" />,
    href2: "https://github.com/ryancho7/seoul-bites",
  },
  {
    title: "React Portfolio",
    description: "Previous portflio built using React.js and Tailwind CSS",
    header: <Skeleton image="/images/react-portfolio-full.png"/>,
    icon: <ExternalLink className="h-4 w-4 text-neutral-500" />,
    href: "https://ryanchoportfolio1.netlify.app/",
    icon2: <IconBrandGithub className="h-4 w-4 text-neutral-500" />,
    href2: "https://github.com/ryancho7/portfolio",
  },
  {
    title: "Sports News",
    description: "A news article summarizer built with OpenAI GPT API, Vite, Redux, JSX, Tailwind CSS	",
    header: <Skeleton image="/images/sports-news.png"/>,
    icon: <ExternalLink className="h-4 w-4 text-neutral-500" />,
    href: "https://sports-news-summarized.netlify.app/",
    icon2: <IconBrandGithub className="h-4 w-4 text-neutral-500" />,
    href2: "https://github.com/ryancho7/sportsNews",
  },
  {
    title: "Coming Soon",
    description: "Python and SQL based applications coming soon",
    header: <Skeleton />,
    icon: <ExternalLink className="h-4 w-4 text-neutral-500" />,
    href: "https://github.com/ryancho7",
    icon2: <IconBrandGithub className="h-4 w-4 text-neutral-500" />,
    href2: "https://github.com/ryancho7",
  },
];
