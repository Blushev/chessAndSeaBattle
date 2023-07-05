import React from 'react';
import SeaField from "./SeaField";
import VantaSea from "./VantaSea";

const SeaFieldPages = ({children}) => {
    return (
        <div>
            <SeaField/>
            <VantaSea/>
        </div>

    );
};

export default SeaFieldPages;
