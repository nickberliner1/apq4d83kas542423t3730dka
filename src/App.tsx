import React, { useEffect, useState } from "react";
import "./App.css";

import SearchOrganizations from "./components/Protected/Organiztaions/SearchOrganizations";
import RepositoriesList from "./components/Protected/Repositories/RepositoriesList";

function App() {
	const [selectedOrg, setSelectedOrg] = useState<string | null>(null);

	return (
		<div className="App">
			<SearchOrganizations onOrgSelect={setSelectedOrg} />
			<RepositoriesList selectedOrg={selectedOrg} />
		</div>
	);
}

export default App;
