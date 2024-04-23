import React from "react";
import Button, { ButtonProps } from "@mui/material/Button";
import { OverridableStringUnion } from "@mui/types";

interface Props extends ButtonProps {
	color?: OverridableStringUnion<
		| "primary"
		| "secondary"
		| "error"
		| "info"
		| "success"
		| "warning"
		| "inherit",
		ButtonProps["color"]
	>;
	onClick: () => void;
	text?: string;
}

const OutlinedButton: React.FC<Props> = ({ color, onClick, text }) => (
	<Button variant="outlined" color={color} onClick={onClick}>
		{text}
	</Button>
);

export default OutlinedButton;
