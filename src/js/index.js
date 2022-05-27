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
	const six = Math.floor(counter / 100000);
	const five = Math.floor(counter / 10000);
	const four = Math.floor(counter / 1000);
	const three = Math.floor(counter / 100);
	const two = Math.floor(counter / 10);
	const one = Math.floor(counter / 1);
	console.log(six, five, four, three, two, one);
	counter++;

	ReactDOM.render(
		<SimpleCounter
			uno={one}
			dies={two}
			cien={three}
			unmil={four}
			diesmil={five}
			cienmil={six}
		/>,
		document.querySelector("#app")
	);
}, 1000);
