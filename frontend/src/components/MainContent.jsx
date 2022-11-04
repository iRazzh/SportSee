import '../css/MainContent.css';
import ActiviteQuotidienne from './stats/ActiviteQuotidienne'
import Calories from './stats/Calories.jsx'
import StatsGraph from './stats/StatsGraph'
import { useParams } from "react-router-dom"

import UseAxios from "../axios/UseAxios"

export default function MainContent() {

  // Récupère l'ID "/:id" de l'URL (12 ou 18) || 
  // parseInt va analyser une chaîne de caractère et renvoie un entier
    const params = useParams();
    const id = parseInt(params.id)

    let endpoints = [
      `http://localhost:3001/user/${id}`,
      `http://localhost:3001/user/${id}/average-sessions`,
      `http://localhost:3001/user/${id}/performance`,
      `http://localhost:3001/user/${id}/activity`,
    ]

	  const APIAxios = UseAxios(endpoints)
    const APIData = APIAxios.data

    const sessions = APIData?.USER_ACTIVITY?.data?.sessions?.map(session => ({
			day: session.day.toString().slice(-1),
			kilogram: session.kilogram,
			calories: session.calories,
		}))

    const formatted_day =  { 1: 'L', 2: 'M', 3: 'M', 4: 'J', 5: 'V', 6: 'S', 7: 'D' } 
    const averageSessions = APIData?.USER_AVERAGE_SESSIONS?.data?.sessions?.map(session => ({
			day: formatted_day[session.day],
			sessionLength: session.sessionLength
		}))

    const formatted_kind = { 1: 'Intensité', 2: 'Vitesse', 3: 'Force', 4: 'Endurance', 5: 'Energie', 6: 'Cardio' }
    const perf = APIData?.USER_PERFORMANCE?.data?.data?.map(data => ({
			value: data.value,
			kind: formatted_kind[data.kind],
		}))

    const dataScore = APIData?.USER_MAIN_DATA?.data;
    const score = APIData?.USER_MAIN_DATA?.data?.score;

    return (
      <main>
        <h1 className="hello">Bonjour <span>{APIData?.USER_MAIN_DATA?.data?.userInfos?.firstName}</span></h1>
        <p className="congrats">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
       
        <section className="stats">
          <ActiviteQuotidienne 
            data={sessions} 
          />
          <Calories 
            calorieCount={APIData?.USER_MAIN_DATA?.data?.keyData?.calorieCount} 
            proteinCount={APIData?.USER_MAIN_DATA?.data?.keyData?.proteinCount} 
            glucidesCount={APIData?.USER_MAIN_DATA?.data?.keyData?.carbohydrateCount} 
            lipidesCount={APIData?.USER_MAIN_DATA?.data?.keyData?.lipidCount} 
          />
          <StatsGraph 
            dataAverage={averageSessions} 
            dataPerf={perf}
            dataScore={dataScore}
            score={score}
          />
        </section>
      </main>

    );
}