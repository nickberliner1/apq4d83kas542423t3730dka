// NEED TO ADD TYPE DECLARATIONS

export const fetchOrganizations = async () => {
	const url = "https://api.github.com/organizations";
	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error("Failed to fetch organizations");
		}
		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Error fetching organizations:", error);
		throw error;
	}
};
