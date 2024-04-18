import React, { useEffect, useState } from "react";
import InfoCardList from "../../General/InfoCardList";
import { fetchRepositories } from "../../../queries/repositories";

interface Props {
	selectedOrg: string | null;
}

const RepositoriesList: React.FC<Props> = ({ selectedOrg }) => {
	const [repositories, setRepositories] = useState<any[]>([]);

	useEffect(() => {
		if (!selectedOrg) return;
		const fetchData = async () => {
			try {
				const data = await fetchRepositories(selectedOrg);
				setRepositories(data);
			} catch (error) {
				console.log("Error: ", error);
			}
		};
		fetchData();
	}, [selectedOrg]);

	const mappedRepos = repositories?.map((repo) => ({
		itemHeader: repo.name,
		itemSubHeader: repo.open_issues_count,
		itemContent: repo.stargazers_count,
	}));

	return <InfoCardList items={mappedRepos} />;
};

export default RepositoriesList;
