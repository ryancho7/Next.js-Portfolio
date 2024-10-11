import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";
import { WordFlip } from "@/components/ui/flip-words";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start lg:items-center">
        {/* <h1 className="flex justify-center">Project</h1> */}
        <div>
          <WordFlip />
        </div>
        <div className="timeline">
          <Timeline />
        </div>
      </main>
    </div>
  );
}
