import React from 'react';
import SeaField from "./SeaField";
import VantaSea from "./VantaSea";
import './SeaFieldPage.css'
import Navbar from "../../navbar/Navbar";

const SeaFieldPage = () => {
    return (
        <div>
            <Navbar/>
            <div className="main">
                <SeaField/>
                <VantaSea/>
            </div>
        </div>


    );
};

export default SeaFieldPage;
