import React from "react";
import CircularProgress, {
	CircularProgressProps,
} from "@mui/material/CircularProgress";
import { OverridableStringUnion } from "@mui/types";

const loadingStyles = {
	margin: "2rem",
};

interface Props extends CircularProgressProps {
	color?: OverridableStringUnion<
		| "primary"
		| "secondary"
		| "error"
		| "info"
		| "success"
		| "warning"
		| "inherit",
		CircularProgressProps["color"]
	>;
}

const LoadingSpinner: React.FC<Props> = ({ color }) => (
	<CircularProgress style={loadingStyles} color={color} />
);

export default LoadingSpinner;
