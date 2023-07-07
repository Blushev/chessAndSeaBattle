import React from 'react';
import Chess from "./Chess";
import VantaChess from "./VantaChess";
import './ChessPage.css'

const ChessPage = () => {
    return (
        <div className="main">
            <Chess/>
            <VantaChess/>
        </div>
    );
};

export default ChessPage;
