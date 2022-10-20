import { defaultImage } from 'constants/global';
import React from 'react';
import classNames from 'utils/classNames';

const CampImage = ({image=defaultImage,className="h-[158px]"}) => {
    return (
        <div className={classNames(className)}>
        <img
          src={image}
          className="object-cover w-full h-full rounded-2xl"
          alt="img"
        ></img>
      </div>
    );
};

export default CampImage;