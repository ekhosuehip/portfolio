import Button from '../components/Button';
import { projects } from '../constants';

const Mobile = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 sm:px-8 w-full max-w-6xl">
        {projects.details.map((project) => (
          <div
            key={project.name}
            style={{ backgroundImage: `url(${project.imgPath})` }}
            className="relative h-[500px] w-full card card-bordr timeline-card bg-center bg-cover border border-white rounded-xl overflow-hidden shadow-lg flex flex-col justify-between"
          >
            <div className="flex-1 flex items-center justify-center bg-black/60 p-6">
              <p className="text-white text-center text-balance">
                {project.description}
              </p>
            </div>

            <div className="p-6 flex justify-center">
              <Button
                src="/images/arrow-right.svg"
                text="View Project"
                className="w-60 h-12 bg-white/10 text-white hover:bg-white/20"
                href={project.href}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mobile;
