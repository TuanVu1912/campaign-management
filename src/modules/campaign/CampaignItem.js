import { IconFolder } from "components/icons";
import React from "react";
import { Link } from "react-router-dom";
import CampAuthor from "./part/CampAuthor";
import CampCategory from "./part/CampCategory";
import CampDesc from "./part/CampDesc";
import CampImage from "./part/CampImage";
import CampMeta from "./part/CampMeta";
import CampTiltle from "./part/CampTiltle";

const CampaignItem = () => {
  return (
    <div>
     <CampImage></CampImage>
      <div className="px-5 py-4 ">
        <CampCategory></CampCategory>
        <CampTiltle>Powered Kits Learning Boxes</CampTiltle>
        <CampDesc>Fun durable and reusable boxes with eco-friendly options.</CampDesc>
        <div className="flex items-start justify-between mb-5 gap-x-5">
        <CampMeta></CampMeta>
        <CampMeta price="173" text="Total backers"></CampMeta>
        
        </div>
       <CampAuthor></CampAuthor>
      </div>
    </div>
  );
};

export default CampaignItem;
