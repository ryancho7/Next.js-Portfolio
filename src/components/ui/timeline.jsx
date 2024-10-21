"use client";;
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Image from 'next/image';
import { Playfair_Display } from 'next/font/google';

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-playfair-display',
});


export const Timeline = ({
  data = []
}) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  const timelineData = [
    {
      title: "Sep, 2023",
      content: (
        <div>
          <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200">
            Front-End Developer
          </h3>
          <h3 className="text-md font-semibold text-neutral-800 dark:text-neutral-200">
            Web Impact
          </h3>
          <p className="italic text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 max-w-xs overflow-hidden">
            Worked with a small team to create websites for small businesses in the Greater Seattle area.
          </p>
          <div className="grid grid-cols-1 gap-4">
            <Image
              src="/images/veganism1.png"
              alt="viable veganism image"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Oct, 2023",
      content: (
        <div>
          <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200">
            Data Analyst Intern
          </h3>
          <h3 className="text-md font-semibold text-neutral-800 dark:text-neutral-200">
            Hazing Info
          </h3>
          <p className="italic text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 max-w-xs overflow-hidden">
            Created backend for beta and v2 launches and developed automated scripts with Javascript
          </p>
          <div className="grid grid-cols-1 gap-4">
            <Image
              src="/images/hazing-info1.png"
              alt="hazing info website"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "May 2024",
      content: (
        <div>
          <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200">
            Software Engineer
          </h3>
          <h3 className="text-md font-semibold text-neutral-800 dark:text-neutral-200">
            Erie Insurance
          </h3>
          <p className="italic text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 max-w-xs overflow-hidden">
            Built and optimized unit testing scripts for incremental data loads and conducted API regression and load testing via SoapUI
          </p>
          <div className="grid grid-cols-1 gap-4">
            <Image
              src="/images/erie-insurance1.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Oct, 2024",
      content: (
        <div>
          <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200">
            Frontend Developer
          </h3>
          <h3 className="text-md font-semibold text-neutral-800 dark:text-neutral-200">
            Washington Hyperloop
          </h3>
          <p className="italic text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 max-w-xs overflow-hidden">
            Managed Hyperloop website and spearheaded replatforming project as lead developer
          </p>
          <div className="grid grid-cols-1 gap-4">
            <Image
              src="/images/hyperloop.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Oct, 2024",
      content: (
        <div>
          <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200">
            Fullstack Web Developer
          </h3>
          <h3 className="text-md font-semibold text-neutral-800 dark:text-neutral-200">
            TEDxUofW
          </h3>
          <p className="italic text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 max-w-xs overflow-hidden">
          Developed a full-stack website for the 2024-2025 TEDxUofW event using Next.js and Node.js, collaborating closely with the UX/UI design team
          </p>
          <div className="grid grid-cols-1 gap-4">
            <Image
              src="/images/tedx.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    }
  ];

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    (<div
      className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10 max-w-full overflow-x-auto"
      ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <h2 className={`text-lg md:text-6xl mb-4 text-black dark:text-white max-w-4xl ${playfairDisplay.className}`}>
          A Look of At My Recent <br /> Experiences
        </h2>
        <p
          className={`text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm ${playfairDisplay.className}`}>
          Here&apos;s a brief timeline of my journey
        </p>
      </div>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {timelineData.map((item, index) => (
          <div key={index} className="flex justify-start pt-10 md:pt-40 md:gap-10">
            <div
              className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div
                className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div
                  className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3
                className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 ">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3
                className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] ">
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full" />
        </div>
      </div>
    </div>)
  );
};
