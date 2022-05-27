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
			<div className="Dmil">{props.diesnmil}</div>
			<div className="Umil">{props.unnmil}</div>
			<div className="centena">{props.cien}</div>
			<div className="decena">{props.dies}</div>
			<div className="Unidad">{props.uno}</div>
		</div>
	);
}

SimpleCounter.propTypes = {
	cienmil: propTypes.number,
	diesnmil: propTypes.number,
	unmil: propTypes.number,
	cien: propTypes.number,
	dies: propTypes.number,
	uno: propTypes.number,
};
export default SimpleCounter;
