import { DiJava } from "react-icons/di";
import {
  SiTypescript,
  SiTailwindcss,
  SiMaterialdesignicons,
} from "react-icons/si";
import { ImHtmlFive } from "react-icons/im";
import { IoLogoCss3 } from "react-icons/io";
import { TbBrandReactNative } from "react-icons/tb";
import { GiPawFront, GiTeacher } from "react-icons/gi";
import {
  AiFillDatabase,
  AiFillFire,
  AiFillHome,
  AiFillPhone,
} from "react-icons/ai";
import { FaBook } from "react-icons/fa";
import { BsFillBrushFill } from "react-icons/bs";

export const navData = [
  {
    title: "خانه",
    id: 1,
    href: "",
    icon: <AiFillHome />,
  },
  {
    title: "اساتید ما",
    id: 2,
    href: "teachers",
    icon: <GiTeacher />,
  },
  {
    title: " دوره ها",
    id: 3,
    href: "allcourse",
    icon: <FaBook />,
    dropDown: [
      {
        logo: <AiFillFire />,
        id: 3.3,
        href: "allcourse",
        coursName: "همه دوره ها",
      },
      {
        logo: <DiJava />,
        id: 3.4,
        href: "allcourse",
        coursName: "جاوااسکریپت",
      },
      {
        logo: <SiTypescript />,
        id: 3.5,
        href: "allcourse",
        coursName: "تایپ اسکریپت",
      },
      {
        logo: <SiTailwindcss />,
        id: 3.6,
        href: "allcourse",
        coursName: " تلویند",
      },
      {
        logo: <ImHtmlFive />,
        id: 3.7,
        href: "allcourse",
        coursName: "اچ تی ام ال ",
      },
      {
        logo: <IoLogoCss3 />,
        id: 3.8,
        href: "allcourse",
        coursName: "css",
      },
      {
        logo: <TbBrandReactNative />,
        id: 3.9,
        href: "allcourse",
        coursName: "ری اکت",
      },
    ],
  },
  {
    title: "ارتباط با ما",
    id: 5,
    href: "contactUs",
    icon: <AiFillPhone />,
  },
];

export const categuryData = [
  {
    href: "/",
    logo: <GiPawFront />,
    id: 2.1,
    coursName: "فرانت اند",
  },
  {
    href: "/",
    logo: <AiFillDatabase />,
    id: 2.2,
    coursName: "بک اند",
  },
  {
    href: "/",
    logo: <SiMaterialdesignicons />,
    id: 2.3,
    coursName: "دیزاین ui-ux",
  },
];
