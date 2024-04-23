import React, { useEffect, useState } from "react";
import InfoCardList from "../../General/InfoCardList";
import OutlinedButton from "../../General/OutlinedButton";
import LoadingSpinner from "../../General/LoadingSpinner";
import { fetchRepositories } from "../../../queries/repositories";
import { fakeRepositories } from "../../../queries/repositories";

import RepositoriesFilterForm from "./RepositoriesFilterForm";

const containerStyles = {
	display: "flex",
};

interface Props {
	selectedOrg: string | null;
}

const RepositoriesList: React.FC<Props> = ({ selectedOrg }) => {
	const [repositories, setRepositories] = useState<any[]>([]);
	const [currentPage, setCurrentPage] = useState(1);

	const [filterText, setFilterText] = useState<string>("");

	const [minOpenIssues, setMinOpenIssues] = useState<number | null>(null);
	const [maxOpenIssues, setMaxOpenIssues] = useState<number | null>(null);
	const [minStars, setMinStars] = useState<number | null>(null);
	const [maxStars, setMaxStars] = useState<number | null>(null);

	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);
	const [retryCount, setRetryCount] = useState(0);

	useEffect(() => {
		if (!selectedOrg) return;
		const fetchData = async () => {
			setIsLoading(true);
			setError(null);
			try {
				const data = await fetchRepositories(selectedOrg, currentPage);
				setRepositories(data);
				setRetryCount(0);
			} catch (error) {
				setError("Failed to load repositories");
			} finally {
				setIsLoading(false);
			}
		};
		fetchData();
	}, [selectedOrg, currentPage, retryCount]);

	useEffect(() => {
		setCurrentPage(1);
	}, [selectedOrg]);

	const filteredRepos = repositories.filter(
		(repo) =>
			repo.name.toLowerCase().includes(filterText.toLowerCase()) &&
			(minOpenIssues === null ||
				repo.open_issues_count >= minOpenIssues) &&
			(maxOpenIssues === null ||
				repo.open_issues_count <= maxOpenIssues) &&
			(minStars === null || repo.stargazers_count >= minStars) &&
			(maxStars === null || repo.stargazers_count <= maxStars)
	);

	const mappedRepos = filteredRepos?.map((repo) => ({
		itemHeader: repo.name,
		itemLabel1: "Number of issues: ",
		itemLabel2: "Stars: ",
		itemContent1: repo.open_issues_count,
		itemContent2: repo.stargazers_count,
	}));

	const handleRetry = () => {
		setRetryCount(retryCount + 1);
	};

	const handleFilterChange = (value: string) => {
		setFilterText(value);
	};

	return (
		<div style={containerStyles}>
			{error ? (
				<div>
					<p>Error: {error}</p>
					<OutlinedButton
						color="error"
						onClick={handleRetry}
						text="Retry"
					/>
				</div>
			) : isLoading ? (
				<LoadingSpinner color="primary" />
			) : (
				<InfoCardList
					items={mappedRepos}
					currentPage={currentPage}
					onPageChange={setCurrentPage}
				/>
			)}
			{selectedOrg && !isLoading && (
				<div>
					<h2>{selectedOrg}'s Repository Filters</h2>
					<RepositoriesFilterForm
						minOpenIssues={minOpenIssues}
						maxOpenIssues={maxOpenIssues}
						minStars={minStars}
						maxStars={maxStars}
						filterText={filterText}
						onMinOpenIssuesChange={setMinOpenIssues}
						onMaxOpenIssuesChange={setMaxOpenIssues}
						onMinStarsChange={setMinStars}
						onMaxStarsChange={setMaxStars}
						onFilterTextChange={handleFilterChange}
					/>
				</div>
			)}
		</div>
	);
};

export default RepositoriesList;
