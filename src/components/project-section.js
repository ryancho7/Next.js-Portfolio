import { ProjectGrid } from "./projects";
import { ProjectText
 } from "./project-text";
export function ProjectSection() {
  return (
    // <div className="flex flex-row justify-center">
    //   <h3 className="text-7xl self-start font-normal text-neutral-600 dark:text-neutral-400">
    //     Some<br />
    //     of<br />
    //     my<br />
    //     Recent<br />
    //     Projects
    //   </h3>
    //   <ProjectGrid />
    // </div>
    <div className="flex flex-col justify-center">
      {/* <h3 className="text-7xl self-start font-normal text-neutral-600 dark:text-neutral-400">
        Some of my Recent Projects
      </h3> */}
      <div className="flex justify-center mt-40 mb-40">
        <ProjectText />
      </div>
      <ProjectGrid />
    </div>
  );
}
