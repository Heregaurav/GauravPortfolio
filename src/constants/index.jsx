import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";
import projectImage4 from "../assets/project4.jpeg";
import projectImage5 from "../assets/project5.jpeg";
import projectImage6 from "../assets/project6.jpeg";

import { FaJsSquare } from 'react-icons/fa'
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import{RiReactjsLine} from "react-icons/ri"
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "GAURAV ",
  greet: "Hello there! ",
  description:
  "Pursuing Electronics and Communication Engineering at Indian Institute of Information Technology Dharwad . | learning full stack Development | Have keen interest in cybersecurity and working on its fundamentals & Ethical Hacking skills",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Personal Portfolio",
    description:
      "A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and contact information.",
    image: projectImage1,
    githubLink: "https://github.com/user/personal-portfolio",
  },
  {
    id: 2,
    name: "E-Commerce Platform",
    description:
      "An e-commerce web application developed using Next.js and Stripe for payment integration, featuring a comprehensive product catalog, shopping cart, and checkout system.",
    image: projectImage2,
    githubLink: "https://github.com/user/ecommerce-platform",
  },
  {
    id: 3,
    name: "Task Management Tool",
    description:
      "A task management application built with React and Redux for efficient task tracking and team collaboration, including features like project boards, task assignment, and progress tracking.",
    image: projectImage3,
    githubLink: "https://github.com/user/task-management-tool",
  },
  {
    id: 4,
    name: "Weather App",
    description:
      "A weather application that uses the OpenWeatherMap API to fetch and display current weather data and forecasts for various locations, built with React and styled-components.",
    image: projectImage4,
    githubLink: "https://github.com/user/weather-app",
  },
  {
    id: 5,
    name: "Blog Platform",
    description:
      "A blogging platform developed with Next.js and Markdown for creating, editing, and publishing blog posts. It features a rich text editor, tag system, and user authentication.",
    image: projectImage5,
    githubLink: "https://github.com/user/blog-platform",
  },
  {
    id: 6,
    name: "Chat Application",
    description:
      "A real-time chat application using Firebase for backend services, including user authentication, chat rooms, and instant messaging features. Built with React and Firebase.",
    image: projectImage6,
    githubLink: "https://github.com/user/chat-application",
  },
];

export const BIO = [
  " I’m currently pursuing my B.Tech in Electronics and Communication at IIIT Dharwad, where I’m building a strong foundation in technology. I have a keen interest in Web Development and Cybersecurity, and I’m actively exploring these fields through hands-on projects and by being a part of technical communities like the MLSA Cybersecurity Technical Team. I'm a passionate and curious learner, always looking to grow my skills and gain experience as I work towards a future in the tech industry.",
  " Alongside my growing interest in Web Development and Cybersecurity,I currently serve as the Co-Lead of Dynamight, the official dance club of IIIT Dharwad, where I combine leadership with my passion for dance and creativity, I’m also member of the Art Club and a proud player on the college volleyball team. Whether it’s coding, choreographing, painting, or playing, I love expressing myself through different forms and constantly look for ways to blend creativity with innovation.",
   "As a passionate and growing developer, I bring a mix of skills in Web Development and Cybersecurity. I’m learning and working with frontend technologies and modern frameworks, focusing on creating efficient and user-friendly digital experiences. Beyond coding, I enjoy expressing my creativity and leadership through my roles in the dance and art clubs, which helps me bring a unique perspective to everything I do."
  ];
 
 

export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
   
  },
  {
    icon: <TbBrandNextjs className="text-4xl text-white lg:text-5xl" />,
    name: "Next.js",
    
  },
  {
    icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
    name: "MongoDB",

  },
  {
    icon: <FaJsSquare className="text-4xl text-yellow-600 lg:text-5xl" />,
    name: "JQuery",
    
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js",
   
  },
  {
    icon: <BiLogoPostgresql className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "PostgreSQL",
   
  },
];




export const EDUCATION = [
  {
    degree: "Minor Degree in Cybersecurity",
    institution: "Indian Institute of Information Technology , Dharwad",
    duration: "September 2024 - June 2026",
    description:
        "Pursuing a minor in Cybersecurity, I am actively learning about security measures and best practices to protect websites and digital systems. I have been exploring ethical hacking techniques to better understand vulnerabilities and how to safeguard against them. Alongside this, I am involved in projects focused on Web Development and enhancing user experience through efficient and secure coding practices."
  },
  {
    degree: "Bachelor of Technology in ELectronics and Commmunicaiton ",
    institution: "Indian Institute of Information Technology , Dharwad",
    duration: "August 2023 - June 2027",
    description:
      "Focused on electronics and embedded systems, I have gained practical experience with microcontrollers and circuit design at IIIT Dharwad. Alongside this, I am developing skills in web development and cybersecurity through projects and club activities."
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://x.com/",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://discord.com/",
    icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://instagram.com/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/gaurav-kumar-182710329.com/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
