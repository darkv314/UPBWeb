import Paper from '@mui/material/Paper'
import { ViewState } from '@devexpress/dx-react-scheduler'
import {
    Scheduler, MonthView, Appointments, 
} from '@devexpress/dx-react-scheduler-material-ui'

const currentDate = '2022-11-28'

export default function Schedule() {
    return(
        <Paper>
            <Scheduler>
                <ViewState
                    currentDate={currentDate}
                />
                <MonthView />
                <Appointments />
            </Scheduler>
        </Paper>
    )
}