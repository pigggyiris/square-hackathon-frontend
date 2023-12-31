/* eslint-disable */
import React from "react";
import { Link, useLocation } from "react-router-dom";
import DashIcon from "components/icons/DashIcon";

export function SidebarLinks(props) {
  let location = useLocation();
  const { routes, collapsed } = props;

  const activeRoute = (routeName) => {
    return location.pathname.includes(routeName);
  };

  const createLinks = (routes) => {
    return routes.map((route, index) => {
      const isNavigable = ["Dashboard"].includes(route.name);
      const linkContent = (
        <div className="relative mb-3 flex hover:cursor-pointer">
          <li
            className="my-[3px] flex cursor-pointer items-center px-8"
            key={index}
          >
            <span
              className={`${
                activeRoute(route.path) === true
                  ? "font-bold text-fall-900"
                  : "font-medium text-fall-600"
              }`}
            >
              {route.icon ? route.icon : <DashIcon />}{" "}
            </span>

            {!collapsed && (
              <p
                className={`leading-1 ml-4 flex ${
                  activeRoute(route.path) === true
                    ? "font-bold text-fall-900"
                    : "font-medium text-fall-600"
                }`}
              >
                {route.name}
              </p>
            )}
          </li>
          {activeRoute(route.path) ? (
            <div className="absolute right-0 top-px h-9 w-1 rounded-lg bg-fall-600 dark:bg-brand-400" />
          ) : null}
        </div>
      );

      return isNavigable ? (
        <Link key={index} to={route.layout + "/" + route.path}>
          {linkContent}
        </Link>
      ) : (
        <div key={index}>{linkContent}</div>
      );
    });
  };

  return createLinks(routes);
}

export default SidebarLinks;
