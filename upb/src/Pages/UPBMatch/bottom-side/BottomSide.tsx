import SchoolProp from "../../../interfaces/SchoolProp";
import score from "../../../db/score";
import ScoreItem from "../../../components/scoreItem/ScoreItem";
import Schedule from "../../../components/scheduler/Scheduler";
import './bottom.css'

export default function BottomSide() {
    const genScores = () => {
        let scores = []
        for(let i = 0; i<score.length; i++){
            scores.push(
                <ScoreItem 
                name={score[i].school}
                points={score[i].points}
                />
            )
        }
        return scores
    }

    return (
        <div className="bottom-side">
            <div className="score">
                {genScores()}
            </div>
            <div className="calendar">
                <h1>Próximos eventos</h1>
                <Schedule></Schedule>
            </div>
        </div>
    )
}