import { Timeline } from "@/components/ui/timeline";
import { WordFlip } from "@/components/word-flip";
import { Navbar } from "@/components/regular-navbar";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { ThreeDCardDemo } from "@/components/ui/3d-card";
import { About } from "@/components/about";
import { TechStackCards } from "@/components/tech-stack-cards";
import { Contact } from "@/components/contact";
import { ProjectSection } from "@/components/project-section";

export default function Home() {
  return (
    <div className="scroll-smooth grid grid-rows-[0px_1fr_20px] items-center justify-items-center min-h-screen p-8 gap-16 sm:pr-20 px-20 prl-20 font-[family-name:var(--font-geist-sans)]">
      <div className="w-full">
        <Navbar />
      </div>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start lg:items-center">
        <FloatingNav />
        <div id="home" className="flex flex-row gap-40">
          <WordFlip />
          <ThreeDCardDemo />
        </div>
        <div id="about" className="h-screen mt-20">
          <About />
          <TechStackCards />
        </div>
        <div id="timeline" className="mt-20">
          <Timeline />
        </div>
        <div id="projects">
          <ProjectSection />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>
    </div>
  );
}
