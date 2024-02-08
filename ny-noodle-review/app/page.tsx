import Image from "next/image";
import { getProjects } from "@/sanity/sanity-utils";
import project from "@/sanity/schemas/project-schema";

export default async function Home() {
  const projects = await getProjects();
  return (
    <>
      <div>Home</div>
      <div>
        {projects.map((project) => (
          <div key={project._id}>{project.name}</div>
        ))}
      </div>
    </>
  );
}
