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

export interface Career {
  id: number;
  title: string;
  worktype : "job" | "internship" | "event" ;
  location: string;
  applicationTime : number;
  endDate : string;
  description ?: string;
  duration?: number;
  durationType?: "month" | "months" | "day" | "days" | "weeks" | "week";
}

