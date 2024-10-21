import { ProjectGrid } from "./projects";
import { ProjectText
 } from "./project-text";

export function ProjectSection() {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex justify-start mt-20 mb-20">
        <ProjectText />
      </div>
      <ProjectGrid />
    </div>
  );
}
