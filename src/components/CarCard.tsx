import React from "react";
import { Link } from "react-router-dom";
import ChevronSmall from "../images/chevron-small.svg";

type Props = {
	id: string;
	modelName: string;
	bodyType: string;
	modelType: string;
	imageUrl: string;
};

const CarCard: React.FC<Props> = ({
	id,
	modelName,
	bodyType,
	modelType,
	imageUrl,
}) => {
	return (
		<div className="car-card">
			<p className="car-body-text">{bodyType}</p>
			<div className="car-name-type-text">
				<p className="mr-1">
					<strong>{modelName}</strong>
				</p>
				<p>{modelType}</p>
			</div>
			<img src={`${process.env.PUBLIC_URL}/${imageUrl}`} alt="" className="car-img" />
			<div className="car-buttons">
				<Link to={`/learn/${id}`} className="page-link">
					LEARN <img src={ChevronSmall} width="15" alt="" />
				</Link>
				<Link to={`/shop/${id}`} className="page-link">
					SHOP <img src={ChevronSmall} width="15" alt="" />
				</Link>
			</div>
		</div>
	);
};

export default CarCard;
