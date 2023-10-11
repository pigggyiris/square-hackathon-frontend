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
} from "react-icons/md";

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
    name: "Sales Info",
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
    name: "Sign In",
    layout: "/auth",
    path: "sign-in",
    icon: <MdLock className="h-6 w-6" />,
    component: <SignIn />,
  },
];
export default routes;
