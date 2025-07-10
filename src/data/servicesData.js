/* eslint-disable */
import { BiChip } from "react-icons/bi";
import { BsGear, BsCodeSlash } from "react-icons/bs";  // ✅ Fixed BsCpu → BsGear
import { AiOutlineProject } from "react-icons/ai";
import { FaPenFancy, FaLaptopCode, FaTools } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";

export const servicesData = [
  {
    id: 1,
    title: "Embedded Systems Design",
    icon: <BiChip />,
  },
  {
    id: 2,
    title: "Machine Learning on Edge Devices",
    icon: <GiArtificialIntelligence />,
  },
  {
    id: 3,
    title: "Software Optimization & Profiling",
    icon: <BsGear />,  // ✅ Valid icon used
  },
  {
    id: 4,
    title: "Technical Content Writing",
    icon: <FaPenFancy />,
  },
  {
    id: 5,
    title: "Full-Stack Application Development",
    icon: <FaLaptopCode />,
  },
  {
    id: 6,
    title: "System Integration & Testing",
    icon: <FaTools />,
  },
  {
    id: 7,
    title: "AI Project Architecture",
    icon: <AiOutlineProject />,
  },
  {
    id: 8,
    title: "UI/UX for Embedded Dashboards",
    icon: <BsCodeSlash />,
  },
];
