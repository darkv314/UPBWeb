import Paper from "@mui/material/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
    Scheduler,
    MonthView,
    Appointments,
    AppointmentTooltip,
} from "@devexpress/dx-react-scheduler-material-ui";
import { useEffect, useState } from "react";
import api from "../../api/api";

let currentDate = new Date().toLocaleDateString();

const Appointment = (props: any) => (
    <Appointments.Appointment
        {...props}
        style={{
            ...props.style,
            backgroundColor: "#9638c9",
        }}
    >
        {props.children}
    </Appointments.Appointment>
);

export default function Schedule() {
    const [appointments, setAppointments] = useState([]);
    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const response = await api.get("/events");
                setAppointments(response.data);
            } catch (err: any) {
                if (err.response) {
                    console.log(err.response.data);
                    console.log(err.response.status);
                    console.log(err.response.headers);
                } else {
                    console.log(`Error: ${err.message}`);
                }
            }
        };
        fetchAppointments();
    }, []);
    return (
        <Paper>
            <Scheduler 
            data={appointments}>
                <ViewState currentDate={currentDate} />
                <MonthView />
                <Appointments appointmentComponent={Appointment} />
                <AppointmentTooltip />
            </Scheduler>
        </Paper>
    );
}
