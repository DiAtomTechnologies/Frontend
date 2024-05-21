import { IconType } from "react-icons";
import { TbCircleSquare } from "react-icons/tb";
import { FaHandshakeSimple } from "react-icons/fa6";
import { BsPersonWorkspace } from "react-icons/bs";

interface career {
  id: number;
  icon: IconType;
  heading: string;
  content: string;
}

export const careerData: career[] = [
  {
    id: 1,
    icon: BsPersonWorkspace,
    heading: "Our Values",
    content: `
      At Diatom Technologies, we are guided by a commitment to innovation, excellence, and compassion, fostering an environment for employees to thrive.
    `,
  },
  {
    id: 2,
    icon: FaHandshakeSimple,
    heading: "Professional Growth Opportunities",
    content: `
      We empower our team with comprehensive training, mentorship, and exposure to pioneering projects, nurturing their talents and advancing their careers.
    `,
  },
  {
    id: 3,
    icon: TbCircleSquare,
    heading: "Diversity and Inclusion",
    content: `
      We celebrate diversity, welcoming individuals from diverse backgrounds and experiences, driving creativity and enabling us to better serve global communities.
    `,
  },
];

export interface Jobs {
  id: number;
  title: string;
  location?: string;
  type?: "Full Time" | "Remote";
  href: string;
  duration?: number;
  durationType?: "month" | "months" | "day" | "days" | "weeks" | "week";
}

export const jobs: Jobs[] = [
  {
    id: 1,
    title: "Full Stack Developer",
    location: "chennai",
    type: "Full Time",
    href: "/careers",
  },
  {
    id: 2,
    title: "Testing Engineer",
    location: "chennai",
    type: "Full Time",
    href: "/careers",
  },
  {
    id: 3,
    title: "HR Manager",
    location: "chennai",
    type: "Full Time",
    href: "/careers",
  },
];

export const internships: Jobs[] = [
  {
    id: 1,
    title: "Web Development",
    type: "Remote",
    href: "/careers",
    duration: 8,
    durationType: "weeks",
  },
  {
    id: 2,
    title: "CAD Designer",
    type: "Remote",
    href: "/careers",
    duration: 8,
    durationType: "weeks",
  },
  {
    id :3,
    title : "IOT Engineer",
    type : "Full Time",
    location : "chennai",
    href: "/careers",
    duration : 4,
    durationType : "weeks"
  },
  {
    id :4,
    title : "Social Media Manager",
    type : "Remote",
    href : "/carrers",
    duration : 12,
    durationType : "weeks"
  }
];

export const training: Jobs[] = [
  {
    id: 1,
    title: "bioprinting mastery workshop",
    duration: 3,
    durationType: "days",
    href: "/careers",
    location: "chennai",
  },
  {
    id: 2,
    title: "Respiratory Care Simulation",
    duration: 5,
    durationType: "days",
    href: "/careers",
    location: "chennai",
  },
];
