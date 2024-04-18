import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

interface Props {
	optionProps: any[];
	textLabel: string;
	value?: string;
	onChange: (value: string | null) => void;
}

const Search: React.FC<Props> = ({
	optionProps,
	textLabel,
	value,
	onChange,
}) => {
	const [searchValue, setSearchValue] = useState<string | null>(
		value ?? null
	);

	const handleChange = (event: any, newValue: string | null) => {
		setSearchValue(newValue);
		onChange(newValue);
		console.log("value", value);
	};

	return (
		<Autocomplete
			options={optionProps}
			renderInput={(params) => (
				<TextField {...params} label={textLabel} variant="standard" />
			)}
			autoHighlight
			value={searchValue}
			onChange={handleChange}
		/>
	);
};

export default Search;
