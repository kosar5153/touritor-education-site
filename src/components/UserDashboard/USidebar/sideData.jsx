import { AiFillDashboard, AiFillEdit } from "react-icons/ai";
import {
  RiIncreaseDecreaseLine,
  RiShoppingBasketLine,
  RiTicket2Fill,
} from "react-icons/ri";
import { SiFreecodecamp, SiOpenmined } from "react-icons/si";
import { FaSquarespace } from "react-icons/fa";
import { GiOvermind } from "react-icons/gi";

export const sideData = [
  {
    title: "داشبورد",
    href: "/userdashboard/udashboard",
    id: 1,
    icon: <AiFillDashboard />,
  },
  {
    title: "ویرایش حساب کاربری",
    href: "/userdashboard/uedite",
    id: 2,
    icon: <AiFillEdit />,
  },
  {
    title: " همه دوره ها  ",
    href: "/userdashboard/allcoursepage",
    id: 3,
    icon: <GiOvermind />,
  },
  {
    title: "دوره های خریداری شده",
    href: "/userdashboard/coursepurchase",
    id: 4,
    icon: <SiOpenmined />,
  },
  {
    title: "سبد خرید",
    href: "/shoppingpage",
    id: 7,
    icon: <RiShoppingBasketLine />,
  },
  {
    title: "  شارژ کیف پول",
    href: "/userdashboard/increasecredit",
    id: 5,
    icon: <RiIncreaseDecreaseLine />,
  },
  {
    title: "  تیکت",
    href: "/userdashboard/uticket",
    id: 5,
    icon: <RiTicket2Fill />,
  },
  {
    title: " خروج از حساب کاربری",
    href: "/logout",
    id: 6,
    icon: <FaSquarespace />,
  },
];
