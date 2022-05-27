import propTypes from "prop-types";
import React from "react";

//create your first component
function SimpleCounter(props) {
	return (
		<div className="SecCounter">
			<diV className="clock">
				<i className="far fa-clock"></i>
			</diV>
			<div className="Cmil">{props.cienmil}</div>
			<div className="Dmil">{props.diesmil}</div>
			<div className="Umil">{props.unmil}</div>
			<div className="centena">{props.cien}</div>
			<div className="decena">{props.dies}</div>
			<div className="Unidad">{props.uno}</div>
		</div>
	);
}

SimpleCounter.propTypes = {
	cienmil: propTypes.number,
	diesmil: propTypes.number,
	unmil: propTypes.number,
	cien: propTypes.number,
	dies: propTypes.number,
	uno: propTypes.number,
};
export default SimpleCounter;
