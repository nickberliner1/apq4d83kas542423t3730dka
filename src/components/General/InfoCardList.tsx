import React from "react";
import InfoCard from "./InfoCard";

interface Props {
	items: Array<{
		itemHeader: string;
		itemSubHeader?: string;
		itemContent?: string;
		itemImage?: string;
		itemActions?: boolean | false;
	}>;
}

const InfoCardList: React.FC<Props> = ({ items }) => (
	<div>
		{items?.map((item) => (
			<InfoCard
				header={item.itemHeader}
				subHeader={item.itemSubHeader}
				content={item.itemContent}
				image={item.itemImage}
				actions={item.itemActions}
			/>
		))}
	</div>
);

export default InfoCardList;
