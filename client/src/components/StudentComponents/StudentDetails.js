import React from "react";
import Typography from "@material-ui/core/Typography";
import ButtonGroup from '@material-ui/core/ButtonGroup'
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Divider from "@material-ui/core/Divider";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Icon";
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
	content: {
		display: "flex",
		flexFlow: "column nowrap",
		justifyContent: "center",
		alignItems: "flex-start",
	},
	label: {
		border: "1px solid white",
	},
	detail: {
		color: "white",
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
		padding: theme.spacing(2),
		flexFlow: "row nowrap",
		justifyContent: "center",
		alignItems: "center",
	},
});

const StudentDetails = ({ student, setMode, classes }) => {
    return (
			<Card className={classes.container}>
				<CardContent className={classes.content}>
					<Typography className={classes.label} variant="h4">
						Name
					</Typography>
					<Typography className={classes.detail} variant="h5">
						{student.firstname} {student.lastname}
					</Typography>
				</CardContent>
				<Divider />
				<CardContent className={classes.content}>
					<Typography className={classes.label} variant="h4">
						Primary Email
					</Typography>
					<Typography className={classes.detail} variant="h5">
						{student.student_email}
					</Typography>
				</CardContent>
				<Divider />
				<CardContent className={classes.content}>
					<Typography className={classes.label} variant="h4">
						Secondary Email
					</Typography>
					<Typography className={classes.detail} variant="h5">
						{student.secondary_email}
					</Typography>
				</CardContent>
				<ButtonGroup
					size="small"
					className={classes.buttonContainer}
					variant="outlined"
					color="primary"
				>
                <Button className={classes.button} onClick={e => { e.preventDefault(); setMode('edit')}}>
						<EditIcon />
						Edit
					</Button>
					<Button className={classes.button}>
						<DeleteIcon />
						Delete
					</Button>
				</ButtonGroup>
			</Card>
		);};

export default withStyles(styles)(StudentDetails);
