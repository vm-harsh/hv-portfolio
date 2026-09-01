import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaAws,
  FaDocker,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiRedis 
} from "react-icons/si";

const skills = [
  {
    tech: "Frontend",
    skills: [
      {
        name: "HTML",
        icon: FaHtml5,
      },
      {
        name: "CSS",
        icon: FaCss3Alt,
      },
      {
        name: "JavaScript",
        icon: FaJs,
      },
      {
        name: "React",
        icon: FaReact,
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
      },
    ],
  },

  {
    tech: "Backend",
    skills: [
      {
        name: "Node.js",
        icon: FaNodeJs,
      },
      {
        name: "Express.js",
        icon: SiExpress,
      },
      {
        name: "REST API",
        icon: null,
      },
    ],
  },

  {
    tech: "Database",
    skills: [
      {
        name: "MongoDB",
        icon: SiMongodb,
      },
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
      },
      {
        name: "MySQL",
        icon: SiMysql,
      },
      {
        name:"Redis",
        icon: SiRedis 
      }
    ],
  },

  {
    tech: "Tools & Cloud",
    skills: [
      {
        name: "Git",
        icon: FaGitAlt,
      },
      {
        name: "GitHub",
        icon: FaGithub,
      },
      {
        name: "AWS",
        icon: FaAws,
      },
      {
        name: "Docker",
        icon: FaDocker,
      },
    ],
  },
];

export default skills;