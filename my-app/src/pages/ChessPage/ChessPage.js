import React from 'react';
import Chess from "./Chess";
import VantaChess from "./VantaChess";
import './ChessPage.css'
import Navbar from "../../navbar/Navbar";

const ChessPage = () => {
    return (
        <div>
            <Navbar/>
            <div className="main">
                <Chess/>
                <VantaChess/>
            </div>
        </div>

    );
};

export default ChessPage;
