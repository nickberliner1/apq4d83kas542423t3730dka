import React, { useState } from "react";
import "./App.css";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";

import SearchOrganizations from "./components/Protected/Organiztaions/SearchOrganizations";
import RepositoriesList from "./components/Protected/Repositories/RepositoriesList";

const headerStyles = {
	paddingLeft: "1rem",
};
const inputContainerStyles = {
	display: "flex",
};

function App() {
	const [selectedOrg, setSelectedOrg] = useState<string | null>(null);
	const [darkMode, setDarkMode] = useState<boolean>(true);

	const darkTheme = createTheme({
		palette: {
			mode: darkMode ? "dark" : "light",
			primary: {
				dark: "#00ffce",
				light: "#9e6bff",
				main: "#9e6bff",
			},
		},
		typography: {
			h5: {
				color: darkMode ? "#00ffce" : "#9e6bff",
			},
		},
	});

	const handleDarkModeChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setDarkMode(event.target.checked);
	};

	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<div className="App">
				<div style={headerStyles}>
					<Typography>
						<h2>Nick's Frequenz Challenge</h2>
					</Typography>
					<div style={inputContainerStyles}>
						<SearchOrganizations onOrgSelect={setSelectedOrg} />
						<Stack direction="row" spacing={1} alignItems="center">
							<Switch
								checked={darkMode}
								onChange={handleDarkModeChange}
							/>
							Dark Mode
						</Stack>
					</div>
				</div>
				<RepositoriesList selectedOrg={selectedOrg} />
			</div>
		</ThemeProvider>
	);
}

export default App;
