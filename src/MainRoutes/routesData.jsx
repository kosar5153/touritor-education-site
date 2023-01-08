import { Navigate } from "react-router-dom";

import SignUp from "../components/pages/SignUp/SignUp";
import Login from "../components/pages/Login/Login";
import ForgetPass from "../components/pages/ForgetPass/ForgetPass";
import ShoppingPage from "../components/pages/ShoppingCard/ShoppingPage";
import Teachers from "../components/pages/Teachers/Teachers";
import ContactUs from "../components/pages/ContactUs/ContactUs";
import AllCourses from "../components/pages/AllCourses/AllCourses";
import CourseDetail from "../components/pages/CourseDetail/CourseDetail";
import UDashboard from "../components/UserDashboard/UDashboard";
import UEdite from "../components/UserDashboard/UEdite";
import UFreeCourse from "../components/UserDashboard/UFreeCourse";
import UTicket from "../components/UserDashboard/UTicket";
import MainHomePage from "../components/pages/MainHomePage/MainHomePage";
import NewsPage from "../components/pages/NewsPage/NewsPage";
import NewsDetail from "../components/pages/NewsDetail/NewsDetail";
import AllCoursePage from "../components/UserDashboard/AllCoursePage";
import Logout from "../components/pages/Login/Logout";
import {
  Courses,
  Ecommerce,
  AddCourse,
  Employes,
  Lessons,
  Students,
} from "../components/AdminDashboard/pages";
import Teacher from "../components/pages/Teachers/Teacher";
import AddLesson from "../components/AdminDashboard/pages/Lessons/AddLesson";
import EditLesson from "../components/AdminDashboard/pages/Lessons/EditLesson";
import ShowLesson from "../components/AdminDashboard/pages/Lessons/ShowLesson";
import EditeCourse from "../components/AdminDashboard/pages/Courses/EditeCourse";
import ShowCourse from "../components/AdminDashboard/pages/Courses/ShowCourse";
import ShowEmploy from "../components/AdminDashboard/pages/Employes/ShowEmploy";
import AddEmploy from "../components/AdminDashboard/pages/Employes/AddEmploy/AddEmploy";
import ShowStudent from "../components/AdminDashboard/pages/Students/ShowStudent";
import News from "../components/AdminDashboard/pages/News/News";
import ShowNews from "../components/AdminDashboard/pages/News/ShowNews";
import EditNews from "../components/AdminDashboard/pages/News/EditNews";
import AddNews from "../components/AdminDashboard/pages/News/AddNews";
import AddStudent from "../components/AdminDashboard/pages/Students/AddStudent/AddStudent";
import StToCourse from "../components/AdminDashboard/pages/Courses/StToCourse";
import AdminLogout from "../components/AdminDashboard/items/Navbar/AdminLogout";
import UCoursePurchased from "../components/UserDashboard/UCoursePurchased";
import IncreaseCredit from "../components/UserDashboard/IncreaseCredit";

export const mainpageRoutes = [
  {
    component: <MainHomePage />,
    path: "/",
  },
  {
    component: <SignUp />,
    path: "signup",
  },
  {
    component: <Login />,
    path: "login",
  },
  {
    component: <Logout />,
    path: "logout",
  },
  {
    component: <ForgetPass />,
    path: "forgetpass",
  },
  {
    component: <ShoppingPage />,
    path: "shoppingpage",
  },
  {
    component: <Teachers />,
    path: "teachers",
  },
  {
    component: <Teacher />,
    path: "teachers/teacher/:tchId",
  },
  {
    component: <AllCourses />,
    path: "allcourse",
  },
  {
    component: <CourseDetail />,
    path: "allcourse/coursedetail/:courseId",
  },
  {
    component: <NewsPage />,
    path: "newspage",
  },
  {
    component: <NewsDetail />,
    path: "newspage/newsdetail/:newsId",
  },
  {
    component: <NewsDetail />,
    path: "newspage/newsdetail/:newsId",
  },
  {
    component: <ContactUs />,
    path: "/contactUs",
  },
];

// user dashboardRoutes
export const userDashboardRoutes = [
  {
    component: <Navigate replace to="udashboard" />,
    path: "/userdashboard",
  },
  {
    component: <UDashboard />,
    path: "udashboard",
  },
  {
    component: <UEdite />,
    path: "uedite",
  },
  {
    component: <AllCoursePage />,
    path: "allcoursepage",
  },
  {
    component: <UFreeCourse />,
    path: "freecourse",
  },
  {
    component: <IncreaseCredit />,
    path: "increasecredit",
  },
  {
    component: <UTicket />,
    path: "uticket",
  },
  {
    component: <UCoursePurchased />,
    path: "coursepurchase",
  },
];

// admin dashboard
export const adminDashboardRoutes = [
  {
    component: <Navigate replace to="ecommerce" />,
    path: "/admindashboard",
  },
  {
    component: <Ecommerce />,
    path: "ecommerce",
  },
  {
    component: <Courses />,
    path: "pages/courses",
  },
  {
    component: <ShowCourse />,
    path: "pages/courses/showcourse/:shId",
  },
  {
    component: <EditeCourse />,
    path: "pages/courses/editcourse/:edId",
  },
  {
    component: <AddCourse />,
    path: "adddata/courses",
  },
  {
    component: <StToCourse />,
    path: "adddata/studenttocourse",
  },
  {
    component: <Employes />,
    path: "pages/employes",
  },
  {
    component: <ShowEmploy />,
    path: "pages/employes/showemploy/:shId",
  },
  {
    component: <AddEmploy />,
    path: "adddata/employees",
  },
  {
    component: <Students />,
    path: "pages/students",
  },
  {
    component: <ShowStudent />,
    path: "pages/students/showstudent/:stId",
  },
  {
    component: <AddStudent />,
    path: "adddata/students",
  },
  {
    component: <Lessons />,
    path: "pages/lessons",
  },
  {
    component: <EditLesson />,
    path: "pages/lessons/editlesson/:lesId",
  },
  {
    component: <ShowLesson />,
    path: "pages/lessons/showlesson/:lesId",
  },
  {
    component: <AddLesson />,
    path: "adddata/lesson",
  },

  {
    component: <News />,
    path: "pages/news",
  },
  {
    component: <ShowNews />,
    path: "pages/news/shownews/:neId",
  },
  {
    component: <EditNews />,
    path: "pages/news/editnews/:neId",
  },
  {
    component: <AddNews />,
    path: "adddata/news",
  },
  {
    component: <AdminLogout />,
    path: "adminlogout",
  },
];
