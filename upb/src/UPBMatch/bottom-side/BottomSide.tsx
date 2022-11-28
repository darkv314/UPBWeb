import SchoolProp from "../../interfaces/SchoolProp";
import score from "../../db/score";
import ScoreItem from "../../modules/scoreItem/ScoreItem";
// import Schedule from "../../modules/scheduler/Scheduler";
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
                {/* <Schedule></Schedule> */}
            </div>
        </div>
    )
}