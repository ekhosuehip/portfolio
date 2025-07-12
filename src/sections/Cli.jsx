
import React, { useState, useEffect, useRef } from 'react';
import { education, aboutMe, experience, socialImgs, projects, skills } from '../constants'; 


const formatEducation = () =>{
    const details = education.details.map(e => `${e.degree} - ${e.institution} (${e.duration})`).join('\n');
    return `${education.title}\n\n${education.description}\n\n${details}`
  }
  const formatExperience = () =>{
    const details = experience.details.map(e => `${e.company} - ${e.role} (${e.duration})`).join('\n');
    return `${experience.title}\n\n${experience.description}\n\n${details}`
  }
  const formatAbout = () => {
    const details = aboutMe.details.map(d => `${d.label}: ${d.value}`).join('\n');
    return `${aboutMe.title}\n\n${aboutMe.description}\n\n${details}`;
  };
  
  const formatSkills = () => {
    const list = skills.details.map(s => s.name).join(', ');
    return `${skills.title}\n\n${skills.description}\n\n${list}`;
  };

  const formatProjects = () => {
    const list = projects.details
      .map(p => `${p.name}: ${p.description}\nLink: ${p.href}`)
      .join('\n\n');
    return `${projects.title}\n\n${projects.description}\n\n${list}`;
  };
  
  
  const commands = {
    about: formatAbout,
    skills: formatSkills,
    education: formatEducation,
    experience: formatExperience,
    projects: formatProjects,
    socials: () => socialImgs.map(s => `${s.name}: ${s.url}`).join('\n'),
    help: () => 'Available commands: about, skills, education, experience, projects, socials, clear, exit',
    clear: 'clear',
    exit: 'exit',
  };
  

const Cli = ({ onExit }) => {
  const [history, setHistory] = useState(["Hi there! Enter your first name?"]);
  const [input, setInput] = useState('');
  const [userName, setUserName] = useState(null);
  const terminalRef = useRef(null);

  useEffect(() => {
    terminalRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e) => {
    e.preventDefault();
    const trimmed = input.trim().toLowerCase();
  
    if (!userName) {
      setUserName(trimmed);
      setHistory(prev => [
        ...prev,
        `> ${trimmed}`,
        `Welcome, ${trimmed}!`,
        `Type "help" to get started.`
      ]);
      setInput('');
      return;
    }
  
    if (trimmed === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }
  
    if (trimmed === 'exit') {
      onExit?.();
      setInput('');
      return;
    }
  
    const command = commands[trimmed];
    if (!command) {
      setHistory(prev => [...prev, `> ${trimmed}`, `Command not found: ${trimmed}`]);
    } else {
      const output = typeof command === 'function' ? command() : command;
      setHistory(prev => [...prev, `> ${trimmed}`, output]);
    }
  
    setInput('');
  };
  
  

  return (
    <div className="w-full min-h-screen bg-black text-green-500 font-mono p-4 flex flex-col items-start">
      <div className="max-w-4xl w-full mx-auto">
        {history.map((line, index) => (
          <div key={index} className="whitespace-pre-wrap">{line}</div>
        ))}

        <form onSubmit={handleCommand} className="flex w-full items-center gap-2">
            <span className="text-green-500">
                {userName ?? 'guest'}@MacBookPro %
            </span>
            <input
                type="text"
                className="flex-1 bg-transparent border-none outline-none text-green-500"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                autoFocus
            />
        </form>
        <div ref={terminalRef} />
      </div>
    </div>
  );
};

export default Cli;
