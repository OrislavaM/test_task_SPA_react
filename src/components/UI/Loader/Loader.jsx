import React from "react";
import "..Loader/Loader.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

function Loader() {
    return (
        <Loader
            type="Triangle"
            color="#000000"
            height={80}
            width={80}
            timeout={3000} //3 secs
        />
    );
}

export default Loader;

// export default class Loader extends React.Component {
//     //other logic
//     render() {
//         return (
//             <Loader
//                 type="Puff"
//                 color="#000000"
//                 height={80}
//                 width={80}
//                 timeout={3000} //3 secs
//             />
//         );
//     }
// }
