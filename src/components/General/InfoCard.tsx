import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const cardStyles = {
	width: "300px",
	margin: "1rem",
	borderRadius: "8px",
	border: "1px solid #efefef",
};

interface Props {
	header: string;
	subHeader?: string;
	label1?: string;
	label2?: string;
	content1?: string;
	content2?: string;
	image?: string;
	actions?: boolean | false;
}

const InfoCard: React.FC<Props> = ({
	header,
	subHeader,
	label1,
	label2,
	content1,
	content2,
	image,
	actions,
}) => {
	return (
		<Card sx={cardStyles}>
			<CardHeader title={header} subheader={subHeader} color="primary" />
			{image && <CardMedia component="img" image={image} alt={image} />}
			<CardContent>
				<Typography>
					{label1}
					{content1}
				</Typography>
				<Typography>
					{label2}
					{content2}
				</Typography>
			</CardContent>
			{actions && <CardActions />}
		</Card>
	);
};

export default InfoCard;
