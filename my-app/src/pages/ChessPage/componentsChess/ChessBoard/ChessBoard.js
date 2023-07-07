import React from 'react';
import './ChessBoard.css'
import Tile from "../Tile/Tile";
import King from '../../../../images/bK.png'

const ChessBoard = () => {

    const axisY = ['1', '2', '3', '4', '5', '6', '7', '8']
    const axisX = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']


    let board = [];

    for (let j = axisY.length-1; j >= 0; j--) {
        for (let i = 0; i < axisX.length; i++) {
            const number = j + i + 2;
            board.push(<Tile number={number}/>)
        }
    }

    return (
        <div className="chessboard">
            {board}
        </div>
    );
};

export default ChessBoard;
