import SchoolProp from "../../interfaces/SchoolProp";
import './score.css'

export default function ScoreItem(props: SchoolProp) {
    return (
        <div className="score-item">
            <img className="score-logo" src={`icons/${props.name}.png`} alt="" />
            <h3>{props.name}</h3>
            <h3>{props.points}</h3>
        </div>
    )
}