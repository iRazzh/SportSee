import '../css/MainContent.css';
import ActiviteQuotidienne from './stats/ActiviteQuotidienne'
import Calories from './stats/Calories.jsx'
import StatsGraph from './stats/StatsGraph'
import { useParams } from "react-router-dom"

import UseAxios from "../axios/UseAxios"

import mocked_data from "../axios/MockedData"
import formatMocked from "../axios/FormattedMockedData"
import formatAPI from "../axios/FormattedDataAPI"

export default function MainContent() {

  // Get ID "/id" of URL (12 or 18)
  // parseInt will analyze a string and return an integer of the specified base
  const params = useParams();
  const id = parseInt(params.id)

  // switch to false for use api data, or true to use mocked data
	const mockedData = true

  // Thoses endpoints were given in the topic
  let endpoints = [
    `http://localhost:3000/user/${id}`,
    `http://localhost:3000/user/${id}/average-sessions`,
    `http://localhost:3000/user/${id}/performance`,
    `http://localhost:3000/user/${id}/activity`,
  ]

  // the api response with api data only if "mockedData" is false
  const APIAxios = !mockedData && UseAxios(endpoints)

  const api_data = mockedData ? null : APIAxios.data

  // clean the data, mocked or fetched
	const formatted_data = mocked_data 
  ? new formatMocked(mocked_data, id)
  : new formatAPI(api_data)

  // enpoints, mocked or fetched
  const user_main_data = formatted_data.main_data
  const user_average_sessions = formatted_data.averageSessions
  const user_performance = formatted_data.perf
  const user_activity = formatted_data.sessions

  mockedData ? console.log("données mockées") : console.log("données de l'api")

  return(
    <main>
      <h1 className="hello">Bonjour <span>{user_main_data.user_infos.firstName}</span></h1>
      <p className="congrats">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      
      <section className="stats">
        <ActiviteQuotidienne 
          data={user_activity} 
        />
        <Calories 
          calorieCount={user_main_data?.key_data?.calorieCount} 
          proteinCount={user_main_data?.key_data?.proteinCount} 
          glucidesCount={user_main_data?.key_data?.carbohydrateCount} 
          lipidesCount={user_main_data?.key_data?.lipidCount} 
        />
        <StatsGraph 
          dataAverage={user_average_sessions} 
          dataPerf={user_performance}
          score={user_main_data?.today_score}
          />
      </section>
    </main>

  );
}