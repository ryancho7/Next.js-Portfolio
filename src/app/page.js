import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";
import { WordFlip } from "@/components/ui/flip-words";
// import { Nav } from "@/components/navbar";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { SpinningCarousel } from "@/components/carousel";
import { ThreeDCardDemo } from "@/components/ui/3d-card";

export default function Home() {
  return (
    <div className="grid grid-rows-[0px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:pr-20 prl-20 pb-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start lg:items-center">
        <FloatingNav />
        <div className="flex flex-row gap-40">
          <WordFlip />
          <ThreeDCardDemo />
        </div>
        <div className="timeline">
          <Timeline />
        </div>
        <SpinningCarousel />
      </main>
    </div>
  );
}
