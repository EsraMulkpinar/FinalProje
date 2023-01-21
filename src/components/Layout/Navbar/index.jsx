import React from "react";
import { Link } from "react-router-dom";
import LinkButton from "./LinkButton";

const Layout = () => {
  return (
    <div className="h-[108px] fixed top-0 left-0 right-0 bg-navbar-gratient bg-opacity-50 z-50 p-10 flex justify-between items-center ">
      <div>
      <Link to="/">
        <span className="text-xl">HOME</span>
      </Link>
      </div>
      <div className="flex items-center justify-center gap-x-8 text-xl">
        <LinkButton to={'/TVSeries'} title='TV Series' />
        <LinkButton to={'/Movies'} title='Movies' />
      </div>
    </div>
  );
};

export default Layout;
