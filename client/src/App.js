import React, { useState, useEffect } from "react";
import { Route, withRouter } from "react-router-dom";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
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
		getStudents()
		}, []);

	/* STATE */
	const [students, setStudents] = useState([])
/* METHODS */
	  const getStudents = () => {
			axios({
				method: "get",
				url: `http://localhost:9000/students`
			})
				.then((res) => {
					console.log(res.data)
					setStudents(res.data.students);
				})
				.catch((err) => console.log(err));
		};


	/* ROUTES */
	return (
		<>
			<Grid
				container
				className={classes.container}
			>
				<Paper>
					{students.map((student) => (
						<p>{student.firstname}</p>
					))}
				</Paper>
			</Grid>
		</>
	);
};

export default withRouter(withStyles(styles, { withTheme: true })(App));
