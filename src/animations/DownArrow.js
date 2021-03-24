import React from 'react';
import Lottie from "react-lottie";
import * as downArrow from "../lottie/downArrow.json";

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: downArrow.default,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
}


const DownArrow = () => {
    return (
        <div style={{ margin: "auto" }}>
            <Lottie options={defaultOptions} height={25} width={25} />
        </div>
    )
}

export default DownArrow
