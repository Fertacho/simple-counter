import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="SecCounter">
			<diV className="clock">
				<i className="far fa-clock"></i>
			</diV>
			<div className="Cmil">0</div>
			<div className="Dmil">0</div>
			<div className="Umil">0</div>
			<div className="centena">0</div>
			<div className="decena">0</div>
			<div className="Unidad">0</div>
		</div>
	);
};

export default Home;
