import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import CancelIcon from "@material-ui/icons/Cancel";
import DoneIcon from "@material-ui/icons/Done";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
	container: {
		border: `1px solid ${theme.palette.secondary.main}`,
		...theme.mixins.gutters(),
		paddingTop: theme.spacing(4),
		paddingBottom: theme.spacing(4),
		marginTop: theme.spacing(4),
		marginBottom: theme.spacing(4),
		display: "flex",
		flexFlow: "column nowrap",
	},
	buttonContainer: {
		display: "flex",
		flexFlow: "row nowrap",
		justifyContent: "space-between",
		alignItems: "center",
	},
	button: {
		border: `1px solid ${theme.palette.primary.main}`,
		width: 100,
		fontSize: "1rem",
		display: "flex",
		flexFlow: "row nowrap",
		justifyContent: "center",
		alignItems: "center",
	},
});

const StudentEdit = ({ student, setMode, classes }) => {
    return (
			<FormControl>
				<TextField id="standard-basic" label={student.firstname} />
				<TextField id="standard-basic" label={student.lastname} />
				<TextField id="standard-basic" label={student.student_email} />
				<TextField id="standard-basic" label={student.secondary_email} />
				<ButtonGroup
					size="small"
					className={classes.buttonContainer}
					variant="outlined"
					color="primary"
				>
					<Button
						className={classes.button}
						onClick={(e) => {
							e.preventDefault();
							setMode("view");
						}}
					>
						<CancelIcon />
						Cancel
					</Button>
					<Button className={classes.button}>
						<DoneIcon />
						Update
					</Button>
				</ButtonGroup>
			</FormControl>
		);
};

export default withStyles(styles)(StudentEdit);
