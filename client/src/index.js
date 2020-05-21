import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import theme from "./styles/theme";
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";


ReactDOM.render(
	<MuiThemeProvider theme={theme}>
		<CssBaseline />
		<Router>
			<App />
		</Router>
	</MuiThemeProvider>,
	document.getElementById("root")
);
