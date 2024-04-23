import React from "react";
import TextField from "@mui/material/TextField";

const inputStyles = {
	margin: "1rem 1rem 0 0",
};

interface Props {
	number: number | null;
	min: number | null;
	max: number | null;
	label: string;
	onChange: (number: number | null) => void;
}

const NumberFilterInput: React.FC<Props> = ({
	number,
	label,
	onChange,
	min,
	max,
}) => {
	const handleFilterInputChange = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		onChange(e.target.valueAsNumber || null);
	};

	const isInvalid = (
		value: number | null,
		min: number | null,
		max: number | null
	) => {
		if (value === null) return false;
		if (min !== null && value < min) return "Value must be above " + min;
		if (max !== null && value > max) return "Value must be below " + max;
		return false;
	};

	const error = isInvalid(number, min, max);
	const helperText = error ? error : "";

	return (
		<TextField
			id="outlined-basic"
			inputProps={{ type: "number", min: min, max: max }}
			label={label}
			variant="outlined"
			type="text"
			value={number ?? ""}
			onChange={handleFilterInputChange}
			error={!!error}
			helperText={helperText}
			style={inputStyles}
		/>
	);
};

export default NumberFilterInput;
