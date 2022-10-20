import React from 'react';
import classNames from 'utils/classNames';

const Heading = ({children,className="",number=null}) => {
    return (
        <h2 className={classNames("text-lg font-semibold mb-5 text-text1",className)}>
            {children}
            {number&& <span className="text-secondary">{`(${number})`}</span>}
        </h2>
    );
};

export default Heading;