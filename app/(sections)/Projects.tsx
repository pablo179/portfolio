import LabelComponent from "@/components/LabelComponent";
import Image from "next/image";
//TODO: move data to a separate json file
const ProjectsData = [
    {
        id: 1,
        title: "Project 1",
        description: "This is project 1"
    },
    {
        id: 2,
        title: "Project 2",
        description: "This is project 2"
    },
    {
        id: 3,
        title: "Project 2",
        description: "This is project 3"
    },
    {
        id: 4,
        title: "Project 4",
        description: "This is project 4"
    }
    ];

function Projects() {
  return (
    <div className="section" >
      <h3 className="text-blue font-bold text-2xl"><LabelComponent label="my-projects" /></h3>
      <div className="w-full flex flex-row flex-wrap gap-2 mt-3" >
      {
        ProjectsData.map((project) => {
          return (
            <div key={project.id} className=" rounded-4xl border-stroke border-2 drop-shadow-lg flex flex-row justify-center overflow-hidden w-32 h-20 relative cursor-pointer hover:-translate-y-1 transition-all duration-75">
              <Image src="/assets/thumbnail.jpg" alt="project-thumbnail" width={127} height={104} style={{ width: "110%", height: "110%", top: '-5%', right: '-5%', maxWidth: "110%", position: 'absolute'}} />
            </div>
          );
        })
      }
      </div>
    </div>
  );
}

export default Projects;