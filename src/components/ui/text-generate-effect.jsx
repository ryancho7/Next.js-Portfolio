// "use client";
// import { useEffect } from "react";
// import { motion, stagger, useAnimate } from "framer-motion";
// import { cn } from "@/lib/utils";

// export const TextGenerateEffect = ({
//   words,
//   className,
//   filter = true,
//   duration = 0.5
// }) => {
//   const [scope, animate] = useAnimate();
//   let wordsArray = words.split(" ");
//   useEffect(() => {
//     animate("span", {
//       opacity: 1,
//       filter: filter ? "blur(0px)" : "none",
//     }, {
//       duration: duration ? duration : 1,
//       delay: stagger(0.2),
//     });
//   }, [scope.current]);

//   const renderWords = () => {
//     return (
//       (<motion.div ref={scope}>
//         {wordsArray.map((word, idx) => {
//           return (
//             (<motion.span
//               key={word + idx}
//               className="font-normal text-neutral-600 dark:text-neutral-400 opacity-0"
//               style={{
//                 filter: filter ? "blur(10px)" : "none",
//               }}>
//               {word}{" "}
//             </motion.span>)
//           );
//         })}
//       </motion.div>)
//     );
//   };

//   return (
//     (<div className={cn("font-bold", className)}>
//       <div className="mt-4">
//         <div
//           className="text-7xl leading-snug tracking-wide">
//           {renderWords()}
//         </div>
//       </div>
//     </div>)
//   );
// };


"use client";
import { useEffect, useState } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 2
}) => {
  const [scope, animate] = useAnimate();
  const [isVisible, setIsVisible] = useState(false);
  let wordsArray = words.split(" ");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect(); // Stop observing after it becomes visible
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    const currentRef = scope.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [scope]);

  useEffect(() => {
    if (isVisible) {
      animate("span", {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      }, {
        duration: duration ? duration : 1,
        delay: stagger(0.2),
      });
    }
  }, [isVisible, scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="font-normal text-neutral-600 dark:text-neutral-400 opacity-0"
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="text-7xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
