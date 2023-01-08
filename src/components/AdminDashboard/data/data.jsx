import {
  AiOutlineAreaChart,
  AiOutlineBarChart,
  AiOutlineStock,
  AiOutlineUserDelete,
  AiOutlineUsergroupAdd,
} from "react-icons/ai";
import { FiPieChart, FiShoppingBag } from "react-icons/fi";
import { IoMdContacts } from "react-icons/io";
import { RiContactsLine, RiPlayListAddFill, RiStockLine } from "react-icons/ri";
import { AiOutlineCalendar } from "react-icons/ai";
import {
  BsBarChart,
  BsBoxSeam,
  BsJournalBookmark,
  BsJournalPlus,
  BsKanban,
} from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { BiColorFill, BiUserPlus } from "react-icons/bi";
import { GiLouvrePyramid } from "react-icons/gi";
import { MdLeakAdd, MdOutlinePlayLesson } from "react-icons/md";
import { IoNewspaperOutline } from "react-icons/io5";
import { TbNewSection } from "react-icons/tb";

//admin dashboard data
// sidbar
export const links = [
  {
    title: "داشبورد",
    links: [
      {
        name: "فروشگاه",
        src: "ecommerce",
        icon: <FiShoppingBag />,
      },
    ],
  },

  {
    title: "صفحات",
    links: [
      {
        name: " ترم ها ",
        src: "pages/courses",

        icon: <MdOutlinePlayLesson />,
      },
      {
        name: " درس ها ",
        src: "pages/lessons",

        icon: <BsJournalBookmark />,
      },
      {
        name: "کارمندان",
        src: "pages/employes",

        icon: <IoMdContacts />,
      },
      {
        name: "دانشجویان",
        src: "pages/students",

        icon: <RiContactsLine />,
      },

      {
        name: "اخبار",
        src: "pages/news",

        icon: <IoNewspaperOutline />,
      },
    ],
  },
  {
    title: " افزودن داده های جدید",
    links: [
      {
        name: " ترم  ",
        src: "adddata/courses",

        icon: <RiPlayListAddFill />,
      },
      {
        name: " درس  ",
        src: "adddata/lesson",

        icon: <BsJournalPlus />,
      },
      {
        name: "خبر",
        src: "adddata/news",

        icon: <TbNewSection />,
      },
      {
        name: "کارمند",
        src: "adddata/employees",

        icon: <AiOutlineUsergroupAdd />,
      },
      {
        name: "دانشجو",
        src: "adddata/students",

        icon: <BiUserPlus />,
      },
      {
        name: " دانشجو و دوره",
        src: "adddata/studenttocourse",

        icon: <MdLeakAdd />,
      },
    ],
  },

  {
    title: "اپلیکیشن ها",
    links: [
      {
        name: "ماشین حساب",
        src: "calendar",
        icon: <AiOutlineCalendar />,
      },
      {
        name: "کانبان",
        src: "kanban",
        icon: <BsKanban />,
      },
      {
        name: "ادیتور",
        src: "editor",

        icon: <FiEdit />,
      },
      {
        name: "پالت-رنگ",
        src: "color-picker",

        icon: <BiColorFill />,
      },
    ],
  },
  {
    title: "نمودارها",
    links: [
      {
        name: "خطی",
        src: "line",

        icon: <AiOutlineStock />,
      },
      {
        name: "مستطیلی",
        src: "area",

        icon: <AiOutlineAreaChart />,
      },

      {
        name: "میله ای",
        src: "bar",

        icon: <AiOutlineBarChart />,
      },
      {
        name: "دایره ای",
        src: "pie",

        icon: <FiPieChart />,
      },
      {
        name: "تکنیکال",
        src: "financial",

        icon: <RiStockLine />,
      },
      {
        name: "color-mapping",
        src: "",

        icon: <BsBarChart />,
      },
      {
        name: "pyramid",
        src: "",

        icon: <GiLouvrePyramid />,
      },
      {
        name: "stacked",
        src: "",

        icon: <AiOutlineBarChart />,
      },
    ],
  },
];
