
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
    }
    ];

function MyProjects() {
  return (
    <div className="bg-white rounded-lg drop-shadow-lg w-full min-h-96  p-4" >
      <h1 className="text-blue text-3xl font-semibold">My Projects</h1>
      {
        ProjectsData.map((project) => {
          return (
            <div key={project.id}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
          );
        })
      }
    </div>
  );
}

export default MyProjects;