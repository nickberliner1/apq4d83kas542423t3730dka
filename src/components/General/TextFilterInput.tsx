import React from "react";
import TextField from "@mui/material/TextField";

const inputStyles = {
	margin: "1rem 1rem 0 0",
};

interface Props {
	text: string;
	label: string;
	onChange: (text: string) => void;
}

const TextFilterInput: React.FC<Props> = ({ text, label, onChange }) => {
	const handleFilterInputChange = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		onChange(e.target.value);
	};

	return (
		<TextField
			id="outlined-basic"
			label={label}
			variant="outlined"
			type="text"
			value={text}
			onChange={handleFilterInputChange}
			style={inputStyles}
		/>
	);
};

export default TextFilterInput;
