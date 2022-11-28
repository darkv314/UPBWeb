import TopSide from "./top-side/TopSide"
import event from "../db/currentEvent"
import BottomSide from "./bottom-side/BottomSide"
export default function UPBMatch() {
    return (
        <>
            <TopSide title={event.title} description={event.description}/>
            <BottomSide />
        </>
    )
}