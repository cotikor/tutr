import React, { useState, useEffect, useCallback, memo } from "react";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import {
	ViewState,
	EditingState,
	IntegratedEditing,
} from "@devexpress/dx-react-scheduler";
import {
	Scheduler,
	WeekView,
	Appointments,
	AppointmentForm,
	AppointmentTooltip,
	DragDropProvider,
} from "@devexpress/dx-react-scheduler-material-ui";

import { appointments } from "./appointmentData";

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

const currentDate = "2018-06-27";

const Calendar = ({ options, onOptionsChange, classes }) => {
	const [data, setData] = useState(appointments);
	const [editingOptions, setEditingOptions] = useState({
		allowAdding: true,
		allowDeleting: true,
		allowUpdating: true,
		allowDragging: true,
		allowResizing: true,
	});
	const [addedAppointment, setAddedAppointment] = useState({});
	const [
		isAppointmentBeingCreated,
		setIsAppointmentBeingCreated,
	] = useState(false);

	const {
		allowAdding,
		allowDeleting,
		allowUpdating,
		allowResizing,
		allowDragging,
	} = editingOptions;

	const onCommitChanges = useCallback(
		({ added, changed, deleted }) => {
			if (added) {
				const startingAddedId =
					data.length > 0 ? data[data.length - 1].id + 1 : 0;
				setData([...data, { id: startingAddedId, ...added }]);
			}
			if (changed) {
				setData(
					data.map((appointment) =>
						changed[appointment.id]
							? { ...appointment, ...changed[appointment.id] }
							: appointment
					)
				);
			}
			if (deleted !== undefined) {
				setData(data.filter((appointment) => appointment.id !== deleted));
			}
			setIsAppointmentBeingCreated(false);
		},
		[setData, setIsAppointmentBeingCreated, data]
	);
	const onAddedAppointmentChange = useCallback((appointment) => {
		setAddedAppointment(appointment);
		setIsAppointmentBeingCreated(true);
	});

	const TimeTableCell = useCallback(
		memo(({ onDoubleClick, ...restProps }) => (
			<WeekView.TimeTableCell
				{...restProps}
				onDoubleClick={allowAdding ? onDoubleClick : undefined}
			/>
		)),
		[allowAdding]
	);

	const CommandButton = useCallback(
		({ id, ...restProps }) => {
			if (id === "deleteButton") {
				return (
					<AppointmentForm.CommandButton
						id={id}
						{...restProps}
						disabled={!allowDeleting}
					/>
				);
			}
			return <AppointmentForm.CommandButton id={id} {...restProps} />;
		},
		[allowDeleting]
	);

	const allowDrag = useCallback(() => allowDragging && allowUpdating, [
		allowDragging,
		allowUpdating,
	]);
	const allowResize = useCallback(() => allowResizing && allowUpdating, [
		allowResizing,
		allowUpdating,
	]);

	return (
		<Paper className={classes.container} elevation={24}>
			<Scheduler data={data} >
				<ViewState currentDate={currentDate} />
				<EditingState
					onCommitChanges={onCommitChanges}
					addedAppointment={addedAppointment}
					onAddedAppointmentChange={onAddedAppointmentChange}
				/>

				<IntegratedEditing />
				<WeekView
					startDayHour={9}
					endDayHour={19}
					timeTableCellComponent={TimeTableCell}
				/>

				<Appointments />

				<AppointmentTooltip showOpenButton showDeleteButton={allowDeleting} />
				<AppointmentForm
					commandButtonComponent={CommandButton}
					readOnly={isAppointmentBeingCreated ? false : !allowUpdating}
				/>
				<DragDropProvider allowDrag={allowDrag} allowResize={allowResize} />
			</Scheduler>
		</Paper>
	);
};

export default withStyles(styles)(Calendar);
