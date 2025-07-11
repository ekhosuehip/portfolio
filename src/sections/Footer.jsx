import { socialImgs } from "../constants";
import { Tooltip, TooltipContent, TooltipTrigger } from "../components/Tooltip";
import { TooltipProvider } from "@radix-ui/react-tooltip";

const Footer = () => {
  return (
    <footer className="w-full py-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-6 text-white">
        <a href="https://medium.com/@ekhosuehipromise8" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:underline text-white/70">
            Visit my blog
        </a>

        <ul className="flex flex-wrap justify-center items-center gap-5">
            {socialImgs.map((skill, index) => (
                <li key={index} className="hover:scale-110 transition-all duration-300">
                <TooltipProvider delayDuration={100}>
                    <Tooltip>
                    <a
                        href={skill.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex justify-center items-center rounded-full bg-white/10 hover:bg-white/20"
                    >
                        <TooltipTrigger asChild>
                        <img
                            src={skill.imgPath}
                            alt={skill.name}
                            className="w-6 h-6 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                        />
                        </TooltipTrigger>
                    </a>
                    <TooltipContent>
                        <p className="capitalize text-sm">{skill.name}</p>
                    </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                </li>
            ))}
        </ul>

        <p className="text-sm text-center text-white/60">
          © {new Date().getFullYear()} Promise Ekhosuehi. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
