import React from 'react';
import './FieldBoard.css'

const FieldBoard = () => {
    const axisY = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
    const axisX = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

    let board = [];
    for (let j = axisY.length-1; j >= 0; j--) {
        for (let i = 0; i < axisX.length; i++) {
            const number = j + i + 2;

            if(number % 2 === 0){
                board.push(
                    <div className="cell"></div>
                );
            } else{
                board.push(
                    <div className="cell"></div>
                );
            }

        }
    }
    return (
        <div className="fieldboard">
            {board}
        </div>
    );
};

export default FieldBoard;
