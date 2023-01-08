import { FaPhone, FaUser } from "react-icons/fa";
import { HiIdentification } from "react-icons/hi";
import { MdAddLocation, MdAddLocationAlt, MdEmail } from "react-icons/md";

export const registerData = [
  {
    icon: <FaUser />,
    placeholder: "نام کاربری ",
    id: "fullName",
    name: "fullName",
    type: "",
  },
  {
    icon: <HiIdentification />,
    placeholder: " شماره ملی ",
    id: "nationalId",
    name: "nationalId",
    type: "",
  },
  {
    icon: <FaPhone />,
    placeholder: " تلفن همراه ",
    id: "phoneNumber",
    name: "phoneNumber",
    type: "",
  },
  {
    icon: <MdEmail />,
    placeholder: "  ایمیل ",
    id: "email",
    name: "email",
    type: "",
  },
];
