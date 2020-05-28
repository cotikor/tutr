import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import StudentList from '../StudentComponents/StudentList'
import Calendar from "./Calendar";

const Dashboard = ({students, appointments}) => {   
    return (
        <>
            <StudentList students={students} />
            <Calendar appointments={appointments} />
            
        </>
	);
}


export default Dashboard;

