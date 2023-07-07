import React from 'react';
import './Tile.css'

const Tile = ({number}) => {
    if(number % 2 === 0){
        return <div className="tile black_tile"></div>
    } else{
        return (
            <div className="tile white_tile">

            </div>
        );
    }

};

export default Tile;
