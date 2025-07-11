import { techStacks, aboutMe } from "../constants";
import { motion } from 'framer-motion';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/Tabs";
import { experience, education } from "../constants";
import { ScrollArea, ScrollBar } from "../components/Scroll";
import { Tooltip, TooltipContent, TooltipTrigger } from "../components/Tooltip"
import { TooltipProvider } from "@radix-ui/react-tooltip";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      id="resume"
      className="w-full max-w-7xl mx-auto min-h-[86vh] flex justify-center items-center padding-x-lg xl:mt-0 mt-32"
    >
      <div className="mx-auto w-full flex flex-col px-8">
        <h1 className="text-5xl font-extrabold tracking-tight text-white xl:p-10 mb-10 text-center">
          Resume<span className="text-white-50">.</span>
        </h1>

        <Tabs defaultValue="education" className="flex flex-col xl:flex-row gap-10 ">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="education" className="w-full space-y-6">
            <div className="flex flex-col gap-4 text-center xl:text-left">
                <h3 className="text-4xl font-bold">My Education</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">A combination of formal education and continuous online learning has shaped my technical foundation. I've studied core computer science subjects and supplemented my learning with hands-on bootcamps and algorithm-focused courses.</p>
              </div>

              <ScrollArea className="h-[60vh] rounded-lg border border-white/10 p-4 bg-white/5 backdrop-blur-md">
                <div className="space-y-4 ">
                  {education.map((item) => (
                    <div
                      key={item.key}
                      className="bg-white/10 hover:bg-white/20 card card-bordr timeline-card transition rounded-lg p-4 shadow-sm border border-white/20"
                    >
                      <h1 className="text-lg font-semibold text-white/90">
                        {item.degree}
                      </h1>
                      <div className="flex justify-between text-sm text-muted-foreground mt-1 mb-2">
                        <span className="text-white flex items-center gap-2">
                          <span className="w-3 h-3 rounded-full bg-white/10 inline-block"></span>
                          {item.institution}
                        </span>
                        <span className="text-white/70">{item.duration}</span>
                      </div>
                      <p className="text-sm text-white/80">{item.description}</p>
                    </div>
                  ))}
                </div>
                <ScrollBar orientation="vertical" />
              </ScrollArea>
            </TabsContent>

            <TabsContent value="experience" className="w-full space-y-6">
              <div className="flex flex-col gap-4 text-center xl:text-left">
                <h3 className="text-4xl font-bold">Professional Experience</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">From internship to full-time development, I've worked on real backend systems that power everyday applications. These roles helped me build, optimize, and scale APIs using industry best practices.</p>
              </div>

              <ScrollArea className=" rounded-lg border border-white/10 p-4 bg-white/5 backdrop-blur-md">
                <div className="space-y-4">
                  {experience.map((item) => (
                    <div
                      key={item.key}
                      className="bg-white/10 hover:bg-white/20 card card-bordr timeline-card transition rounded-lg p-4 shadow-sm border border-white/20"
                    >
                      <h1 className="text-lg font-semibold text-white/90">
                        {item.role}
                      </h1>
                      <div className="flex justify-between text-sm text-muted-foreground mt-1 mb-2">
                        <span className="text-white flex items-center gap-2">
                          <span className="w-3 h-3 rounded-full bg-white/10 inline-block"></span>
                          {item.company}
                        </span>
                        <span className="text-white/70">{item.duration}</span>
                      </div>
                      <p className="text-sm text-white/80">{item.description}</p>
                    </div>
                  ))}
                </div>
                <ScrollBar orientation="vertical" />
              </ScrollArea>
            </TabsContent>

            <TabsContent value="skills" className="w-full space-y-6">
              <div className="flex flex-col gap-4 text-center xl:text-left">
                <h3 className="text-4xl font-bold">Tech Stacks</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  I work confidently across multiple technologies and frameworks as a software engineer — building, testing, and improving modern applications for real-world use cases.
                </p>
              </div>

              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 xl:gap-8">
                {techStacks.map((skill, index) => (
                  <li key={index} className="w-full card card-bordr timeline-card">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-full h-[100px] flex justify-center items-center rounded-xl bg-white/5 hover:bg-white/20 transition-colors duration-300">
                          <img
                            src={skill.imgPath}
                            alt={skill.name}
                            className="w-16 h-16 object-contain grayscale group-hover:grayscale-0 transition-all duration-300 "
                          />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="capitalize text-sm">{skill.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </li>
                ))}
              </ul>
            </TabsContent>

            <TabsContent value="about" className="w-full">
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-4 text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{aboutMe.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {aboutMe.description}
                  </p>
                </div>

                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 text-center xl:text-left">
                  {aboutMe.details.map((item, index) => (
                    <li key={index} className="flex flex-col sm:flex-row justify-center xl:justify-start gap-1 sm:gap-3">
                      <span className="text-white/60 font-medium">{item.label}:</span>
                      <span className="text-white text-lg">{item.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

          </div>
          
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
