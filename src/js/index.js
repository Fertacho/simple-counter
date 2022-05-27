//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SimpleCounter from "./component/home.jsx";

//render your react application
let counter = 0;
setInterval(function () {
    

    ReactDOM.render(<SimpleCounter />, document.querySelector("#app"));
}, 1000);

