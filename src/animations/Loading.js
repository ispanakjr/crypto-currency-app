import React from 'react';
import Lottie from "react-lottie";
import * as loading from "../lottie/loading.json";

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading.default,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
}



const Loading = () => {

    return (
        <div style={{ margin: "auto" }}>
            <Lottie options={defaultOptions} height={200} width={200} />
        </div>
    )
}

export default Loading
