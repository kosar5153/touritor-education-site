import { FaPhone, FaUser } from "react-icons/fa";
import { HiIdentification } from "react-icons/hi";
import { MdEmail } from "react-icons/md";

export const registerData = [
  {
    icon: <FaUser />,
    placeholder: "نام کاربری ",
    id: "fullName",
    name: "fullName",
  },
  {
    icon: <HiIdentification />,
    placeholder: " شماره ملی ",
    id: "nationalId",
    name: "nationalId",
  },
  {
    icon: <FaPhone />,
    placeholder: " تلفن همراه ",
    id: "phoneNumber",
    name: "phoneNumber",
  },
  {
    icon: <MdEmail />,
    placeholder: "  ایمیل ",
    id: "email",
    name: "email",
  },
];
