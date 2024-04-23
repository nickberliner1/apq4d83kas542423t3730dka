import React from "react";
import NumberFilterInput from "../../General/NumberFilterInput";
import TextFilterInput from "../../General/TextFilterInput";

interface Props {
	minOpenIssues: number | null;
	maxOpenIssues: number | null;
	minStars: number | null;
	maxStars: number | null;
	filterText: string;
	onMinOpenIssuesChange: (value: number | null) => void;
	onMaxOpenIssuesChange: (value: number | null) => void;
	onMinStarsChange: (value: number | null) => void;
	onMaxStarsChange: (value: number | null) => void;
	onFilterTextChange: (value: string) => void;
}

const RepositoriesFilterForm: React.FC<Props> = ({
	minOpenIssues,
	maxOpenIssues,
	minStars,
	maxStars,
	filterText,
	onMinOpenIssuesChange,
	onMaxOpenIssuesChange,
	onMinStarsChange,
	onMaxStarsChange,
	onFilterTextChange,
}) => {
	return (
		<div style={{ display: "flex", flexDirection: "column" }}>
			<TextFilterInput
				label="Repository Name"
				text={filterText}
				onChange={onFilterTextChange}
			/>
			<NumberFilterInput
				label="Minimum Open Issues"
				number={minOpenIssues}
				onChange={onMinOpenIssuesChange}
				min={0}
				max={maxOpenIssues}
			/>
			<NumberFilterInput
				label="Maximum Open Issues"
				number={maxOpenIssues}
				onChange={onMaxOpenIssuesChange}
				min={minOpenIssues}
				max={null}
			/>
			<NumberFilterInput
				label="Minimum Stars"
				number={minStars}
				onChange={onMinStarsChange}
				min={0}
				max={maxStars}
			/>
			<NumberFilterInput
				label="Maximum Stars"
				number={maxStars}
				onChange={onMaxStarsChange}
				min={minStars}
				max={null}
			/>
		</div>
	);
};

export default RepositoriesFilterForm;
