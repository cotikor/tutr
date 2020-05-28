import React, { useState, useEffect } from "react";
import { Route, withRouter } from "react-router-dom";
import { Dashboard, StudentView } from "./components";

import axios from "axios";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
	container: {
		margin: 0,
		padding: 0,
		display: "flex",
		flexFlow: "column nowrap",
		alignItems: "center",
		justifyContent: "space-between",
	},
});

const App = (props) => {
	const { classes } = props;
	useEffect(() => {
		getStudents();
	}, []);

	/* STATE */
	const [students, setStudents] = useState([]);
	/* METHODS */

	/* STUDENTS */

	const getStudents = () => {
		axios({
			method: "get",
			url: `http://localhost:9000/students`,
		})
			.then((res) => {
				setStudents(res.data.students);
			})
			.catch((err) => console.log(err));
	};

	/*APPOINTMENTS */

	/* ROUTES */
	return (
		(
			<>
				<Grid container className={classes.container}>
					<Route
						path="/dashboard"
						render={(props) => <Dashboard students={students} />}
					/>
					<Route path="/students/:id" render={(props) => <StudentView students={students} match={props.match} />} />
				</Grid>
			</>
		)
	);
};

export default withRouter(withStyles(styles, { withTheme: true })(App));
