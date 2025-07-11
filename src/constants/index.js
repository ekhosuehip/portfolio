const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Resume",
    link: "#resume",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const stats = [
  { value: 1, suffix: "+", label: "Years of Experience" },
  { value: 5, suffix: "+", label: "Tech Stacks Mastered" },
  { value: 16, suffix: "+", label: "Completed Projects" },
  { value: 400, suffix: "+", label: "GitHub Contributions" },
];


const skills = {
  title: "Technical Skills",
  description:
    "I work confidently across multiple technologies and frameworks as a software engineer — building, testing, and improving modern applications for real-world use cases.",
  details: [
    {
      name: "JavaScript",
      imgPath: "/images/logos/javascript.svg",
    },
    {
      name: "Python",
      imgPath: "/images/logos/python.svg",
    },
    {
      name: "C++",
      imgPath: "/images/logos/cpp.svg",
    },
    {
      name: "Node js",
      imgPath: "/images/logos/node.png",
    },
    {
      name: "Express JS",
      imgPath: "/images/logos/express-js.svg",
    },
    {
      name: "React",
      imgPath: "/images/logos/react.png",
    },
    {
      name: "Next js",
      imgPath: "/images/logos/nextjs.svg",
    },
    {
      name: "TypeScript",
      imgPath: "/images/logos/typescript.svg",
    },
    {
      name: "MongoDB",
      imgPath: "/images/logos/mongodb.png",
    },
    {
      name: "PostgreSQL",
      imgPath: "/images/logos/postgresql.svg",
    },
    {
      name: "AWS",
      imgPath: "/images/logos/aws.svg",
    },
    {
      name: "Git",
      imgPath: "/images/logos/git.svg",
    },
  ],
};


const education = {
  title: "My Education",
  description:
    "A combination of formal education and continuous online learning has shaped my technical foundation. I've studied core computer science subjects and supplemented my learning with hands-on bootcamps and algorithm-focused courses.",
  details: [
    {
      key: 1,
      degree: "BSc Computer Science with Artificial Intelligence",
      institution: "Coventry University",
      duration: "2027 (Expected)",
      description:
        "Currently pursuing a Bachelor's degree in Computer Science with Artificial Intelligence at Coventry University, focusing on software engineering, machine learning, and intelligent systems.",
    },
    {
      key: 2,
      degree: "OND Computer Science",
      institution: "Delta State Polytechnic",
      duration: "2019 - 2021",
      description:
        "Completed Ordinary National Diploma (OND) in Computer Science, gaining foundational knowledge in programming, networking, and system analysis.",
    },
    {
      key: 3,
      degree: "The Complete Full-Stack Web Development Bootcamp",
      institution: "Udemy",
      duration: "Online · Completed",
      description:
        "Comprehensive bootcamp covering HTML, CSS, JavaScript, Node.js, React, and PostgreSQL for full-stack web development.",
    },
    {
      key: 4,
      degree: "Data Structures and Algorithms",
      institution: "Udemy",
      duration: "Online · Completed",
      description:
        "Learned essential algorithms, Big O notation, recursion, sorting, and data structures like trees, graphs, and hash maps.",
    },
    {
      key: 5,
      degree: "100 Days of Code: Python",
      institution: "Udemy",
      duration: "Online",
      description:
        "Daily Python programming challenges focused on automation, data handling, APIs, and building small apps.",
    },
  ],
};


const aboutMe = {
  title: "About Me",
  description: "I'm a passionate software engineer with a strong foundation in computer science and hands-on experience building real-world applications. From interning at a tech hub to working as a backend developer, I enjoy solving problems, writing clean code, and constantly learning new technologies.",
  details: [
    { label: "Name", value: "Promise Ekhosuehi" },
    { label: "Experience", value: "1+ Year" },
    { label: "Location", value: "United Kingdom" },
    { label: "Phone", value: "+44 (0) 7917 736725" },
    { label: "Languages", value: "English" },
    { label: "Email", value: "ekhosuehipromise8@gmail.com" }
  ],
};


const experience = {
  title: "Professional Experience",
  description:
    "From internship to full-time development, I've worked on real backend systems that power everyday applications. These roles helped me build, optimize, and scale APIs using industry best practices.",
  details: [
    {
      key: 1,
      role: "Backend Developer",
      company: "Smart Edge Inc",
      duration: "Jun 2025 - Present",
      description:
        "Currently working as a backend developer at Smart Edge, where I contribute to building scalable APIs and maintaining core backend systems.",
    },
    {
      key: 2,
      role: "Backend Intern",
      company: "Genesis Tech Hub",
      duration: "Nov 2024 - May 2025",
      description:
        "Completed a 7-month internship at Genesis Tech Hub, gaining hands-on experience in backend development, working on real-world projects, and learning industry best practices.",
    },
  ],
};


const socialImgs = [
  {
    name: "Github",
    url: "https://github.com/ekhosuehip",
    imgPath: "/images/logos/github.svg",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/promise-ekhosuehi/",
    imgPath: "/images/linkedin.png",
  },
];

const projects = {
  title: "Projects",
  description:
    "A selection of technical projects that showcase my backend, full-stack, IoT, and automation skills. Each project reflects real-world problem-solving using modern technologies.",
  details: [
    {
      name: 'TeachMate',
      description: "TeachMate is an AI-powered learning assistant that transforms educational content from PDF, PPTX, TXT, and DOCX files into summaries, quizzes, flashcards, and Q&A sessions. It supports multiple languages and adjusts difficulty levels to enhance personalized learning",
      imgPath: '/images/teachmatedash.png',
      href: 'https://github.com/ekhosuehip/TeachMate'
    },
    {
      name: 'Gbese',
      description: "Gbese is a TypeScript-based financial application that enables users to securely borrow and send money in a peer-to-peer ecosystem. It includes robust authentication, transaction tracking, and account verification features.",
      imgPath: '/images/gbese.png',
      href: 'https://gbese.vercel.app/'
    },
    {
      name: 'IoT-Powered Smart Home Surveillance & Location Tracker',
      description: "A complete IoT-based home security system with motion, sound, and GPS tracking using MQTT, Firebase, and Python GUI. Ideal for smart environments, mobile asset monitoring, or security research projects.",
      imgPath: '/images/project2.png',
      href: 'https://github.coventry.ac.uk/4005CMD2425MAYSEP/only_motion_detector'
    },
    {
      name: 'Flight_Search',
      description: "This Python program tracks flight prices from London to various cities using data from a Google Spreadsheet. It fetches real-time prices via the Amadeus API and sends SMS alerts through AWS SNS when prices fall within the user’s budget.",
      imgPath: '/images/project3.png',
      href: 'https://github.com/ekhosuehip/flight-search'
    },
    {
      name: 'Note',
      description: "A TypeScript-powered RESTful API for managing personal notes with full JWT-based user authentication. Users can register, log in, and manage notes organized by categories. Built with Express.js, MongoDB, Mongoose, and Joi for validation.",
      imgPath: '/images/project4.png',
      href: 'https://github.com/ekhosuehip/Note-api-with-authentication-'
    },
  ]
};


export {
  words,
  stats,
  education,
  aboutMe,
  experience,
  socialImgs,
  skills,
  navLinks,
  projects
};