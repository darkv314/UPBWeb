import ScoreProp from "../../../interfaces/ScoreProp";
import ScoreItem from "../../../components/scoreItem/ScoreItem";
import Schedule from "../../../components/scheduler/Scheduler";
import "./bottom.css";
import { useEffect, useState } from "react";
import api from "../../../api/api";

export default function BottomSide() {
  const [scores, setScores] = useState([]);
  useEffect(() => {
    const fetchScores = async () => {
      try {
        const response = await api.get("/scores");
        response.data.sort(function (a: any, b: any) {
          return b.points - a.points;
        });
        setScores(response.data);
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
    fetchScores();
  }, []);

  return (
    <div className="bottom-side">
      <div className="score">
        {scores.map((score: any) => (
          <ScoreItem name={score.school} points={score.points} />
        ))}
      </div>
      <div className="calendar">
        <h1>Próximos eventos</h1>
        <Schedule></Schedule>
      </div>
    </div>
  );
}
