import '../css/MainContent.css';
import ActiviteQuotidienne from './stats/ActiviteQuotidienne'
import Calories from './stats/Calories.jsx'
import StatsGraph from './stats/StatsGraph'
import { useParams } from "react-router-dom"

import UseAxios from "../axios/UseAxios"

export default function MainContent() {

  // Get ID "/id" of URL (12 or 18)
  // parseInt will analyze a string and return an integer of the specified base
  const params = useParams();
  const id = parseInt(params.id)

  // Thoses endpoints were given in the topic
  let endpoints = [
    `http://localhost:3000/user/${id}`,
    `http://localhost:3000/user/${id}/average-sessions`,
    `http://localhost:3000/user/${id}/performance`,
    `http://localhost:3000/user/${id}/activity`,
  ]

  const APIAxios = UseAxios(endpoints)
  const APIData = APIAxios.data
  /**
   * sessions = Will recover everything related to the daily activity of the person
   * APIData = Allows you to retrieve datas from the Axios
   */
  const sessions = APIData?.USER_ACTIVITY?.data?.sessions?.map(session => ({
    day: session.day.toString().slice(-1),
    kilogram: session.kilogram,
    calories: session.calories,
  }))

  /**
   * formatted_day = Will allow to structure a date format to be used after
   * averageSessions = Will allow to recover all the data about the average session
   * APIData = Allows you to retrieve datas from the Axios
   */
  const formatted_day =  { 1: 'L', 2: 'M', 3: 'M', 4: 'J', 5: 'V', 6: 'S', 7: 'D' } 
  const averageSessions = APIData?.USER_AVERAGE_SESSIONS?.data?.sessions?.map(session => ({
    day: formatted_day[session.day],
    sessionLength: session.sessionLength
  }))

  /**
   * formatted_stats = Will allow to structure several datas format to be used after
   * perf = Will allow to recover all the performances of the user
   * APIData = Allows you to retrieve datas from the Axios
   */
  const formatted_stats = { 1: 'Intensité', 2: 'Vitesse', 3: 'Force', 4: 'Endurance', 5: 'Energie', 6: 'Cardio' }
  const perf = APIData?.USER_PERFORMANCE?.data?.data?.map(data => ({
    value: data.value,
    kind: formatted_stats[data.kind],
  }))

  /**
   * scoreUser = Will allow to recover the score
   * APIData = Allows you to retrieve datas from the Axios
   */

  const scoreUser = APIData?.USER_MAIN_DATA?.data?.score;

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
          score={scoreUser}
        />
      </section>
    </main>

  );
}