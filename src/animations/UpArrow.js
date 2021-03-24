import React from 'react';
import Lottie from "react-lottie";
import * as upArrow from "../lottie/upArrow.json";

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: upArrow.default,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
}

const UpArrow = () => {
    return (
        <div>
            <Lottie options={defaultOptions} height={25} width={25} />
        </div>
    )
}

export default UpArrow
