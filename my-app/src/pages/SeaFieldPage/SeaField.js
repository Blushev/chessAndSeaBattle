import React, {useEffect} from 'react';
import '../../css/SeaField.css'
const SeaField = () => {
    return (
        <div>
            <div id="matrix"></div>
            <div className="wrap">
                <div className="battlefield">
                    <div id="text_top" className="flex text-top">Ship placement</div>
                    <div className="flex outer">
                        <div className="field field-human">
                            <div id="field_human" className="ships"></div>
                        </div>

                        <div id="instruction" className="instruction">
                            <div id="type_placement" className="type-placement-box">
                                1. <span className="link" data-target="random">Random generation</span>
                            </div>
                        </div>
                    </div>

                    <div className="service-row">
                        <div id="service_text" className="service-text"></div>
                        <button id="play" type="button" className="btn-play" hidden>Play</button>
                        <button id="newgame" type="button" className="btn-play btn-newgame" hidden>Continue</button>
                    </div>
                </div>
            </div>
        </div>

);
};

export default SeaField;
