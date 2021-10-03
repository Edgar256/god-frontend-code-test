import React, { useEffect, useState } from "react";
import cars from "../api/cars.json";
import CarCard from "../components/CarCard";
import ChevronCircled from "../images/chevron-circled.svg";

export type CarType = {
	id: string;
	modelName: string;
	bodyType: string;
	modelType: string;
	imageUrl: string;
};

export default function Listing() {
	const [carList, setCarList] = useState([] as CarType[]);
	const [current, setCurrent] = useState(0);

	useEffect(() => {
		setCarList(cars);
	}, []);

	const finiteAddOne = (current: number, finite: number) => {
		if (current >= finite) {
			return 0;
		} else {
			return current + 1;
		}
	};

	const finiteSubtractOne = (current: number, finite: number) => {
		if (current <= 0) {
			return finite;
		} else {
			return current - 1;
		}
	};

	const prevSlide = () => {
		let newCurrent = finiteSubtractOne(current, carList.length - 1);
		setCurrent(newCurrent);
	};

	const nextSlide = () => {
		let newCurrent = finiteAddOne(current, carList.length - 1);
		setCurrent(newCurrent);
	};

	const handleFilter = (filter: string) => {
		if (filter === "all") {
			return setCarList(cars);
		}
		const arrayCars = cars.filter((car) => {
			return car.bodyType === filter;
		});
		return setCarList(arrayCars);
	};

	const handleActiveShowCar = (id: string) => {
		const carPosition = carList.findIndex((car) => {
			return car.id === id;
		});
		setCurrent(carPosition);
	};

	const renderCars = () => {
		if (carList.length < 1 || carList === undefined)
			return (
				<div>
					<h1>No Cars found</h1>
				</div>
			);
		let arrCars = [...carList];
		let arrOne = arrCars.slice(0, current);
		let arrTwo = arrCars.slice(current);
		let combinedArray = [...arrTwo, ...arrOne];

		return combinedArray.map((car, index) => {
			return (
				<CarCard
					key={index}
					bodyType={car.bodyType}
					id={car.id}
					modelName={car.modelName}
					modelType={car.modelType}
					imageUrl={car.imageUrl}
				/>
			);
		});
	};

	return (
		<div className="container">
			<div>
				<div className="filters-container">
					<h4 className="">Sort by Body Types : </h4>
					<div className="d-flex">
						<button
							className="btn btn-filters "
							onClick={() => handleFilter("suv")}
							name="filter button"
						>
							SUV
						</button>
						<button
							className="btn btn-filters "
							onClick={() => handleFilter("sedan")}
							name="filter button"
						>
							SEDAN
						</button>
						<button
							className="btn btn-filters "
							onClick={() => handleFilter("estate")}
							name="filter button"
						>
							ESTATE
						</button>
						<button
							className="btn btn-filters "
							onClick={() => handleFilter("all")}
							name="filter button"
						>
							ALL
						</button>
					</div>
				</div>
			</div>
			<div className="body-container">{renderCars()}</div>
			<div className="dot-container">
				{carList.map((car, index) => {
					return (
						<div
							className={index === current ? "dot active" : "dot"}
							key={index}
							onClick={() => handleActiveShowCar(car.id)}
						></div>
					);
				})}
			</div>
			<div className="button-container">
				<button className="btn rotate-180" onClick={() => prevSlide()}>
					<img src={ChevronCircled} width="30" alt="" />
				</button>
				<button className="btn" onClick={() => nextSlide()}>
					<img src={ChevronCircled} width="30" alt="" />
				</button>
			</div>
		</div>
	);
}
