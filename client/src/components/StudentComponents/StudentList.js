import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
	container: {
		border: `1px solid ${theme.palette.secondary.main}`,
		...theme.mixins.gutters(),
		paddingTop: theme.spacing(4),
		paddingBottom: theme.spacing(8),
		marginTop: theme.spacing(6),
		marginBottom: theme.spacing(4),
	},
});

const StudentList = ({ classes, students }) => {
	
    return (
			<Paper className={classes.container} elevation={24}>
			{students.map((student) => (
					<Typography
						key={student.id}
						variant="h6"
						color="secondary"
						style={{ textAlign: "center" }}
					>
						<Link to={`/students/${student.id}`}>{`${student.firstname} ${student.lastname}`}</Link>
					</Typography>
				))}
			</Paper>
		);
};

export default withStyles(styles)(StudentList);
