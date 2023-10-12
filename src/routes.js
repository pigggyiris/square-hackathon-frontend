import React from "react";

// Admin Imports
import MainDashboard from "views/admin/default";

// Auth Imports
import SignIn from "views/auth/SignIn";

// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  MdLock,
  MdOutlineInventory2,
  MdOutlinePeopleAlt,
  MdLogout,
  MdOutlineSettings,
} from "react-icons/md";

import { IconName } from "react-icons/ci";

const EmptyPage = () => <div></div>;

const routes = [
  {
    name: "Dashboard",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },
  {
    name: "Marketing",
    layout: "/admin",
    path: "marketing",
    icon: <MdOutlineShoppingCart className="h-6 w-6" />,
    component: <EmptyPage />,
  },
  {
    name: "Sales",
    layout: "/admin",
    path: "Sales",
    icon: <MdBarChart className="h-6 w-6" />,

    component: <EmptyPage />,
  },
  {
    name: "Inventory",
    layout: "/admin",
    path: "Inventory",
    icon: <MdOutlineInventory2 className="h-6 w-6" />,
    component: <EmptyPage />,
  },
  {
    name: "Hiring",
    layout: "/admin",
    path: "Hiring",
    icon: <MdOutlinePeopleAlt className="h-6 w-6" />,
    component: <EmptyPage />,
  },
  {
    name: "Profile",
    layout: "/admin",
    path: "profile",
    icon: <MdPerson className="h-6 w-6" />,
    component: <EmptyPage />,
  },
  {
    name: "LogOut",
    layout: "/admin",
    path: "LogOut",
    icon: <MdLock className="h-6 w-6" />,
    component: <EmptyPage />,
  },
];
export default routes;
