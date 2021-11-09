import React from "react";
import "./Loader.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

function MyLoader() {
    return (
        <Loader
            type="RevolvingDot"
            color="#022B32"
            height={100}
            width={100}
            timeout={5000}
        />
    );
}

export default MyLoader;
