import LabelComponent from '@/components/LabelComponent';
const ExperienceData = [
  {
    id: 1,
    position: "Frontend Developer",
    company: "Company 1",
    description: "This is a description of the job",
  },
  {
    id: 2,
    position: "Backend Developer",
    company: "Company 2",
    description: "This is a description of the job",
  },
  {
    id: 3,
    position: "Fullstack Developer",
    company: "Company 3",
    description: "This is a description of the job",
  },
  {
    id: 4,
    position: "DevOps",
    company: "Company 4",
    description: "This is a description of the job",
  },
];
function Experience() {
  return (
    <div className='h-full w-full rounded-lg bg-white p-4  drop-shadow-lg'>
      <h3 className='text-xl font-bold text-blue'>
        <LabelComponent label='my-experience' />
      </h3>
      <div className='h-full w-full flex flex-col overflow-y-auto gap-2' >
      {
        ExperienceData.map((job) => {
          return (
              <div key={job.id} className='w-full' >
                <span className='font-semibold' >{job.position}</span> at <span className='font-semibold' >{job.company}</span>, {job.description}.
              </div>
          );
        })
      }
      </div>
    </div>
  );
}

export default Experience;
