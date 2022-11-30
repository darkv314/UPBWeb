import EventProp from "../../../interfaces/EventProp";
import background from "../../../assets/homeback.jpg"
import './top.css'

export default function TopSide(props: EventProp){
    return (
        <div className="top-container">
            <div className="top-content">
                <h2>
                    {props.title}
                </h2>
                <h3>
                    {props.description}
                </h3>
            </div>
            <img src={background}/>
        </div>
    )
}