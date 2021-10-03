import React from "react";

type Props = {
	text: string;
	handleFilter: (text: string) => void;
};

const FilterButton: React.FC<Props> = ({ text, handleFilter }) => {
	return (
		<button
			className="btn btn-filters"
			onClick={() => handleFilter(text)}
			name="filter button"
		>
			{text}
		</button>
	);
};

export default FilterButton;
