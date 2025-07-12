import Button from '../components/Button';
import { projects } from '../constants';
import Mobile from './ProjectMobile';

const Projects = () => {
  return (
    <section id="work" className="app-showcase py-10 text-white">
      <div className="w-full max-w-7xl mx-auto">
      <h1 className="text-5xl font-extrabold tracking-tight text-white xl:p-10 mb-10 text-center">
          Projects<span className="text-white-50">.</span>
        </h1>

        <div className="block lg:hidden">
          <Mobile />
        </div>

        <div className="hidden lg:flex flex-wrap overflow-hidden gap-4 px-8">
          {projects.details.map((project, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${project.imgPath})` }}
              className="group relative h-[500px] w-full flex-[1_1_60px] hover:flex-[4_1_0%] transition-all duration-500 ease-in-out cursor-pointer border border-white rounded-lg bg-cover bg-center shadow-lg"
            >
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/80 transition duration-500 z-0" />

              <h2 className="relative z-10 my-40 text-center text-2xl font-extrabold">
                {project.name}
              </h2>

              <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute inset-0 flex items-end justify-center p-4 mb-20 text-center z-10">
                {project.description}
              </p>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden group-hover:flex z-10 transition-all duration-500">
                <Button
                  src="/images/arrow-right.svg"
                  text="View Project"
                  className="md:w-80 md:h-16 w-60 h-12 bg-white/10 text-white hover:bg-white/20"
                  href={project.href}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
