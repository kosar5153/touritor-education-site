import React from "react";

import { Route, Routes } from "react-router-dom";

import UserDashboard from "../components/UserDashboard/UserDashboard";

import { useContext } from "react";

import { AdminContext } from "../context/admin-context/AdminContext";

import { MainLayout } from "../components/AdminDashboard/pages";
import Layout from "../components/Layout/Layout";

import EmplSignup from "../components/AdminDashboard/pages/Authentication/EmplSignup/EmplSignup.jsx";
import EmplLogin from "../components/AdminDashboard/pages/Authentication/EmplLogin/EmplLogin.jsx";

import PrivateUserLayout from "./PrivateUserLayout";
import { UserInfoContext } from "../context/user-context/UserInfoContext";
import PrivateAdminLayout from "./PrivateAdminLayout";
import {
  adminDashboardRoutes,
  mainpageRoutes,
  userDashboardRoutes,
} from "./routesData";
import NotFound from "../components/pages/NotFound/NotFound";

const MainRoutes = () => {
  const { adminInfo } = useContext(AdminContext);
  const { userData } = useContext(UserInfoContext);

  return (
    <div>
      <Routes>
        {/* main page */}
        <Route element={<Layout />} path="/">
          {mainpageRoutes.map((rt) => (
            <Route element={rt.component} path={rt.path} />
          ))}

          {/* user dashboard */}
          <Route element={<PrivateUserLayout />}>
            <Route element={<UserDashboard />} path="userdashboard">
              {userDashboardRoutes.map((rt) => (
                <Route element={rt.component} path={rt.path} />
              ))}
            </Route>
          </Route>
        </Route>

        {/* Admin dashboard */}
        <Route element={<PrivateAdminLayout />}>
          <Route path="/admindashboard" element={<MainLayout />}>
            {adminDashboardRoutes.map((rt) => (
              <Route element={rt.component} path={rt.path} />
            ))}
          </Route>
        </Route>

        {/* login register */}
        <Route path="/admindashboard/signup" element={<EmplSignup />} />
        <Route path="/admindashboard/login" element={<EmplLogin />} />

        {/* Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
