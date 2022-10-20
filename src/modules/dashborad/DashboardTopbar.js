import { Button } from "components/button";
import React from "react";
import { Link } from "react-router-dom";
import DashboardFund from "./DashboardFund";
import DashboardSearch from "./DashboardSearch";

const DashboardTopbar = () => {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center flex-1 gap-x-10">
      <Link to="/" className="inline-block">
        <img className="w-[52px] h-[52px]" src="/logo_single.svg" alt="logo" />
        </Link>
        <div className=" max-w-[458px] w-full">
          <DashboardSearch></DashboardSearch>
        </div>
      </div>
      <div className="flex items-center justify-end flex-1 gap-x-10">
       <DashboardFund></DashboardFund>
        <Button className="px-7" type="button" kind="secondary" href="/start-campaign">Start a campaign</Button>
        <img
          src="/logo_single.svg"
          alt="user"
          className="rounded-full w-[52px] h-[52px] cursor-pointer object-cover"
        ></img>
      </div>
    </div>
  );
};

export default DashboardTopbar;
