import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

interface Props {
	header: string;
	subHeader?: string;
	content?: string;
	image?: string;
	actions?: boolean | false;
}

const InfoCard: React.FC<Props> = ({
	header,
	subHeader,
	content,
	image,
	actions,
}) => {
	return (
		<Card sx={{ border: "1px solid red" }}>
			<CardHeader title={header} subheader={subHeader} />
			{image && <CardMedia component="img" image={image} alt={image} />}
			<CardContent>
				<Typography>{content}</Typography>
			</CardContent>
			{actions && <CardActions />}
		</Card>
	);
};

export default InfoCard;
