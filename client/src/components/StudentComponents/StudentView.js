import React, { useState, useEffect } from "react";
import StudentEdit from './StudentEdit'
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import StudentDetails from "./StudentDetails";

const styles = (theme) => ({
	container: {
		border: `1px solid ${theme.palette.secondary.main}`,
		...theme.mixins.gutters(),
		paddingTop: theme.spacing(4),
		paddingBottom: theme.spacing(8),
		marginTop: theme.spacing(6),
		marginBottom: theme.spacing(4),
		display: 'flex',
		flexFlow: 'column nowrap'
	},
});

const StudentView = ({ classes, students, match }) => {
	const id = match.params.id
	let [mode, setMode] = useState('view')
	console.log(students)
	return students.map((student, index) =>
		student.id == id ? (
			<Paper className={classes.container} key={student.id}>
				{mode === "edit" ? (
				<StudentEdit student={student} setMode={setMode} />
				) : (
				<StudentDetails student={student} setMode={setMode} />
				)}
			</Paper>
		) : null
	);

};

export default withStyles(styles)(StudentView);
