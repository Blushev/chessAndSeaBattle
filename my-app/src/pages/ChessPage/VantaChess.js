import React, {useEffect, useRef, useState} from 'react';
import FOG from 'vanta/dist/vanta.fog.min'
import * as THREE from 'three'

const VantaChess = () => {
    const [vantaEffect, setVantaEffect] = useState(null)
    const myRef = useRef(null)
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(FOG({
                el: myRef.current,
                THREE: THREE,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                highlightColor: 0x222222,
                midtoneColor: 0x6b4545,
                lowlightColor: 0xa7a7ca,
                baseColor: 0x934d4d,
                blurFactor: 0.56,
                speed: 1.70,
                zoom: 1.90
            }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])
    return <div ref={myRef} className="vanta">
    </div>
};

export default VantaChess;
