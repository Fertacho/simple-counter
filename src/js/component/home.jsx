import propTypes from "prop-types";
import React from "react";

//create your first component
function SimpleCounter(props) {
	return (
		<div className="SecCounter">
			<diV className="clock">
				<i className="far fa-clock"></i>
			</diV>
			<div className="Cmil">{props.cienmil % 10}</div>
			<div className="Dmil">{props.diesmil % 10}</div>
			<div className="Umil">{props.unmil % 10}</div>
			<div className="centena">{props.cien % 10}</div>
			<div className="decena">{props.dies % 10}</div>
			<div className="Unidad">{props.uno % 10}</div>
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
