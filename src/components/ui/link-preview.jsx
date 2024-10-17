// "use client";;
// import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
// import Image from "next/image";
// import { encode } from "qss";
// import React from "react";
// import {
//   AnimatePresence,
//   motion,
//   useMotionValue,
//   useSpring,
// } from "framer-motion";
// import Link from "next/link";
// import { cn } from "@/lib/utils";

// export const LinkPreview = ({
//   children,
//   url,
//   className,
//   width = 200,
//   height = 125,
//   quality = 50,
//   layout = "fixed",
//   isStatic = false,
//   imageSrc = ""
// }) => {
//   let src;
//   if (!isStatic) {
//     const params = encode({
//       url,
//       screenshot: true,
//       meta: false,
//       embed: "screenshot.url",
//       colorScheme: "dark",
//       "viewport.isMobile": true,
//       "viewport.deviceScaleFactor": 1,
//       "viewport.width": width * 3,
//       "viewport.height": height * 3,
//     });
//     src = `https://api.microlink.io/?${params}`;
//   } else {
//     src = imageSrc;
//   }

//   const [isOpen, setOpen] = React.useState(false);

//   const [isMounted, setIsMounted] = React.useState(false);

//   React.useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   const springConfig = { stiffness: 100, damping: 15 };
//   const x = useMotionValue(0);

//   const translateX = useSpring(x, springConfig);

//   const handleMouseMove = (event) => {
//     const targetRect = event.target.getBoundingClientRect();
//     const eventOffsetX = event.clientX - targetRect.left;
//     const offsetFromCenter = (eventOffsetX - targetRect.width / 2) / 2; // Reduce the effect to make it subtle
//     x.set(offsetFromCenter);
//   };

//   return (<>
//     {isMounted ? (
//       <div className="hidden">
//         <Image
//           src={src}
//           width={width}
//           height={height}
//           quality={quality}
//           layout={layout}
//           priority={true}
//           alt="hidden image" />
//       </div>
//     ) : null}
//     <HoverCardPrimitive.Root
//       openDelay={50}
//       closeDelay={100}
//       onOpenChange={(open) => {
//         setOpen(open);
//       }}>
//       <HoverCardPrimitive.Trigger
//         onMouseMove={handleMouseMove}
//         className={cn("text-black dark:text-white", className)}
//         href={url}>
//         {children}
//       </HoverCardPrimitive.Trigger>

//       <HoverCardPrimitive.Content
//         className="[transform-origin:var(--radix-hover-card-content-transform-origin)]"
//         side="top"
//         align="center"
//         sideOffset={10}>
//         <AnimatePresence>
//           {isOpen && (
//             <motion.div
//               initial={{ opacity: 0, y: 20, scale: 0.6 }}
//               animate={{
//                 opacity: 1,
//                 y: 0,
//                 scale: 1,
//                 transition: {
//                   type: "spring",
//                   stiffness: 260,
//                   damping: 20,
//                 },
//               }}
//               exit={{ opacity: 0, y: 20, scale: 0.6 }}
//               className="shadow-xl rounded-xl"
//               style={{
//                 x: translateX,
//               }}>
//               <Link
//                 href={url}
//                 className="block p-1 bg-white border-2 border-transparent shadow rounded-xl hover:border-neutral-200 dark:hover:border-neutral-800"
//                 style={{ fontSize: 0 }}>
//                 <Image
//                   src={isStatic ? imageSrc : src}
//                   width={width}
//                   height={height}
//                   quality={quality}
//                   layout={layout}
//                   priority={true}
//                   className="rounded-lg"
//                   alt="preview image" />
//               </Link>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </HoverCardPrimitive.Content>
//     </HoverCardPrimitive.Root>
//   </>);
// };

// export function LinkPreviewSection() {
//   return (
//     <div className="flex justify-center items-center h-[40rem] flex-col px-4">
//       <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto mb-10">
//         <LinkPreview url="https://tailwindcss.com" className="font-bold">
//           Tailwind CSS
//         </LinkPreview>{" "}
//         and{" "}
//         <LinkPreview url="https://framer.com/motion" className="font-bold">
//           Framer Motion
//         </LinkPreview>{" "}
//         are a great way to build modern websites.
//       </p>
//       <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto">
//         Visit{" "}
//         <LinkPreview
//           url="https://ui.aceternity.com"
//           className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
//         >
//           Aceternity UI
//         </LinkPreview>{" "}
//         for amazing Tailwind and Framer Motion components.
//       </p>
//     </div>
//   );
// }

"use client";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import Image from "next/image";
import React from "react";
import { AnimatePresence, motion, useSpring } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const LinkPreview = ({
  children,
  url,
  className,
  width = 200,
  height = 125,
  quality = 50,
  layout = "fixed",
  imageSrc = ""
}) => {
  const src = imageSrc;

  const [isOpen, setOpen] = React.useState(false);

  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const springConfig = { stiffness: 100, damping: 15 };
  const x = useSpring(0, springConfig);

  const handleMouseMove = (event) => {
    const targetRect = event.target.getBoundingClientRect();
    const eventOffsetX = event.clientX - targetRect.left;
    const offsetFromCenter = (eventOffsetX - targetRect.width / 2) / 2;
    x.set(offsetFromCenter);
  };

  return (
    <>
      {isMounted ? (
        <div className="hidden">
          <Image
            src={src}
            width={width}
            height={height}
            quality={quality}
            layout={layout}
            priority={true}
            alt="hidden image"
          />
        </div>
      ) : null}
      <HoverCardPrimitive.Root
        openDelay={50}
        closeDelay={100}
        onOpenChange={(open) => {
          setOpen(open);
        }}
      >
        <HoverCardPrimitive.Trigger
          onMouseMove={handleMouseMove}
          className={cn("text-black dark:text-white", className)}
          href={url}
        >
          {children}
        </HoverCardPrimitive.Trigger>

        <HoverCardPrimitive.Content
          className="[transform-origin:var(--radix-hover-card-content-transform-origin)]"
          side="top"
          align="center"
          sideOffset={10}
        >
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  }}
                }
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                className="shadow-xl rounded-xl"
                style={{
                  x: x,
                }}
              >
                <Link
                  href={url}
                  className="block p-1 bg-white border-2 border-transparent shadow rounded-xl hover:border-neutral-200 dark:hover:border-neutral-800"
                  style={{ fontSize: 0 }}
                >
                  <Image
                    src={src}
                    width={width}
                    height={height}
                    quality={quality}
                    layout={layout}
                    priority={true}
                    className="rounded-lg"
                    alt="preview image"
                  />
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </HoverCardPrimitive.Content>
      </HoverCardPrimitive.Root>
    </>
  );
};

// Export section component using strictly static images
export function LinkPreviewSection() {
  return (
    <div className="flex justify-center items-center h-[40rem] flex-col px-4">
      <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto mb-10">
        My Tech Stack includes{" "}
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
        I'm currently work on several projects using Python/SQL and other backend services. Check them out on my{" "}
        <LinkPreview
          url="https://github.com/ryancho7"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
          imageSrc="/images/github-profile.png"
        >
          GitHub
        </LinkPreview>
      </p>
    </div>
  );
}
