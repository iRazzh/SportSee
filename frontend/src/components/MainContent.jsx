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

  const APIData = mockedData ? null : APIAxios.data

  // clean the data, mocked or fetched
	const formattedData = mocked_data 
  ? new formatMocked(mocked_data, id)
  : new formatAPI(APIData)

  // enpoints, mocked or fetched
  const USER_MAIN_DATA = formattedData.main_data
  const USER_AVERAGE_SESSIONS = formattedData.averageSessions
  const USER_PERF = formattedData.perf
  const USER_SESSION = formattedData.sessions

  mockedData ? console.log("MOCK") : console.log("API")

  return(
    <main>
      <h1 className="hello">Bonjour <span>{USER_MAIN_DATA.user_infos.firstName}</span></h1>
      <p className="congrats">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      
      <section className="stats">
        <ActiviteQuotidienne 
          data={USER_SESSION} 
        />
        <Calories 
          calorieCount={USER_MAIN_DATA?.key_data?.calorieCount} 
          proteinCount={USER_MAIN_DATA?.key_data?.proteinCount} 
          glucidesCount={USER_MAIN_DATA?.key_data?.carbohydrateCount} 
          lipidesCount={USER_MAIN_DATA?.key_data?.lipidCount} 
        />
        <StatsGraph 
          dataAverage={USER_AVERAGE_SESSIONS} 
          dataPerf={USER_PERF}
          score={USER_MAIN_DATA?.today_score}
          />
      </section>
    </main>

  );
}