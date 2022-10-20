import React from 'react';
import CampCategory from './part/CampCategory';
import CampDesc from './part/CampDesc';
import CampImage from './part/CampImage';
import CampMeta from './part/CampMeta';
import CampTiltle from './part/CampTiltle';

const CampaignFeature = () => {
    return (
        <div className="flex items-center gap-x-[30px] w-full max-w-[1048px]">
            <CampImage className='h-[266px] flex-1'></CampImage>
            <div className="flex-1 max-w-[435px]">
                <CampCategory text='Achitecture' className="text-sm"></CampCategory>
                <CampTiltle className="font-bold text-xl mb-4">Remake - We Make architecture exhibition</CampTiltle>
                <CampDesc className="mb-6 text-sm">Remake - We Make: an exhibition about architecture's social agency in the face of urbanisation</CampDesc>
                <div className="w-full rounded-full bg-[#EFEFEF] h-[5px] mb-6">
                    <div className="w-2/4 h-full rounded-full bg-primary"></div>
                </div>
                <div className="flex items-start justify-between gap-x-5 ">
                    <CampMeta size="big"></CampMeta>
                    <CampMeta size="big" price="173" text="Total backers"></CampMeta>
                    <CampMeta size="big" price="30" text="Days left"></CampMeta>
                </div>
            </div>
        </div>
    );
};

export default CampaignFeature;