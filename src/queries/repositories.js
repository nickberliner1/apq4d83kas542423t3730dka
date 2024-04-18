// NEED TO ADD TYPE DECLARATIONS

export const fetchRepositories = async (org) => {
	const url = `https://api.github.com/orgs/${org}/repos?per_page=10`;

	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error("Failed to fetch repositories");
		}
		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Error fetching repositories:", error);
		throw error;
	}
};
