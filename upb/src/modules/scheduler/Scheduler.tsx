import Paper from '@mui/material/Paper'
import { ViewState } from '@devexpress/dx-react-scheduler'
import {
    Scheduler, MonthView, Appointments, AppointmentTooltip
} from '@devexpress/dx-react-scheduler-material-ui'
import { appointments } from '../../db/events';
import AppointmentsProps from '../../interfaces/AppointmentsProps';

let currentDate = new Date().toLocaleDateString();

const Appointment = (props: any) => (
    <Appointments.Appointment
        {...props}
        style={{
            ...props.style,
            backgroundColor: '#9638c9',
        }}
    >
            {props.children}
    </Appointments.Appointment>
)

export default function Schedule() {
    return(
        <Paper>
            <Scheduler
                data={appointments}>
                <ViewState
                    currentDate={currentDate}
                />
                <MonthView />
                <Appointments 
                appointmentComponent={Appointment} />
                <AppointmentTooltip/>
            </Scheduler>
        </Paper>
    )
}