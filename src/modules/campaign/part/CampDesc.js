import React from 'react';
import classNames from 'utils/classNames';

const CampDesc = ({children,className="mb-4 text-xs "}) => {
    return (
        <div>
            <p className={classNames(" font-normal text-text3",className)}>{children}</p>
        </div>
    );
};

export default CampDesc;