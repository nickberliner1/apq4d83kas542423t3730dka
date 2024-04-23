import React from "react";
import InfoCard from "./InfoCard";
import Pagination from "@mui/material/Pagination";

const listStyles = {
	display: "grid",
	gridTemplateColumns: "1fr 1fr",
	justifyItems: "center",
};

const paginationStyles = {
	margin: "1rem 0 0 1rem",
};

interface Props {
	items: Array<{
		itemHeader: string;
		itemSubHeader?: string;
		itemLabel1?: string;
		itemLabel2?: string;
		itemContent1?: string;
		itemContent2?: string;
		itemImage?: string;
		itemActions?: boolean | false;
	}>;
	currentPage: number;
	onPageChange: (page: number) => void;
}

const InfoCardList: React.FC<Props> = ({
	items,
	currentPage,
	onPageChange,
}) => {
	const pageSize = 6;

	const handlePageChange = (
		event: React.ChangeEvent<unknown>,
		page: number
	) => {
		onPageChange(page);
	};

	const startIndex = (currentPage - 1) * pageSize;
	const endIndex = Math.min(startIndex + pageSize, items.length);
	const paginatedItems = items.slice(startIndex, endIndex);

	return (
		<div>
			<Pagination
				count={Math.ceil(items.length / pageSize)}
				page={currentPage}
				onChange={handlePageChange}
				variant="outlined"
				shape="rounded"
				color="primary"
				sx={paginationStyles}
			/>
			<div style={listStyles}>
				{paginatedItems.map((item, index) => (
					<InfoCard
						key={index}
						header={item.itemHeader}
						subHeader={item.itemSubHeader}
						label1={item.itemLabel1}
						label2={item.itemLabel2}
						content1={item.itemContent1}
						content2={item.itemContent2}
						image={item.itemImage}
						actions={item.itemActions}
					/>
				))}
			</div>
		</div>
	);
};

export default InfoCardList;
