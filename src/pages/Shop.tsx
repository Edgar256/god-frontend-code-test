import React from "react";
import cars from "../api/cars.json";

export default function Shop() {
	const id = window.location.pathname.slice(6);
	const car = cars.find((car) => car.id === id);

	return (
		<div className="container">
			<h2>Shop {car?.modelName}</h2>
			<div className="w-100">
				<p className="car-body-text">{car?.bodyType}</p>
				<div className="car-name-type-text">
					<p className="mr-1">
						<strong>{car?.modelName}</strong>
					</p>
					<p>{car?.modelType}</p>
				</div>
				<img src={car?.imageUrl} alt="" className="car-img" />
			</div>
		</div>
	);
}
