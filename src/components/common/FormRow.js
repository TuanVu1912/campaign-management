import React from 'react';

const FormRow = (props) => {
    const {children}=props;

    return (
        <div className="grid grid-cols-2 gap-x-[45px]">
            {children}
        </div>
    );
};

export default FormRow;