import React from "react";
import logo from "/logo.jpg";
import { Link } from "react-router-dom";

function NavRoutes() {
  const routes = [
    {
      pageName: "Home",
      path: "/",
    },
    {
      pageName: "About",
      path: "/About",
    },
    {
      pageName: "Content",
      path: "/contact",
    },
  ];
  return (
    <>
      <nav>
        <div className="left">
          <ul>
            {routes.map(({ pageName, path }, index) => {
              return (
                <li key={index}>
                  <Link to={path}>{pageName}</Link>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="right">
          <img src={logo} alt="" height={70} />
        </div>
      </nav>
    </>
  );
}

export default NavRoutes;
