import React from 'react';

const CampaignGrid = ({children,type="default"}) => {
    return (
        type==="default" ?
        <div className="grid grid-cols-4 gap-x-7">
            {children}
        </div>:  <div className="grid grid-cols-1 gap-y-10">{children}</div>
    );
};

export default CampaignGrid;