import ScoreProp from "../../interfaces/ScoreProp";
import './score.css'

export default function ScoreItem(props: ScoreProp) {
    return (
        <div className="score-item">
            <img className="score-logo" src={`icons/${props.name}.png`} alt="" />
            <h3>{props.name}</h3>
            <h3>{props.points}</h3>
        </div>
    )
}