import React, { useState, useEffect } from "react";
import Search from "../../General/Search";
import { fetchOrganizations } from "../../../queries/organizations";

interface Props {
	onOrgSelect: (orgName: string | null) => void;
}

const SearchOrganizations: React.FC<Props> = ({ onOrgSelect }) => {
	const [orgs, setOrgs] = useState<any[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			const data = await fetchOrganizations();
			setOrgs(data);
		};
		fetchData();
	}, []);

	return (
		<Search
			optionProps={orgs?.map((org) => org.login)}
			textLabel="Organizations"
			value=""
			onChange={onOrgSelect}
		/>
	);
};

export default SearchOrganizations;
