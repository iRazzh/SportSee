export default class FormattedDataAPI {
	constructor(data) {

		this.source = "api_data"

		this.main_data = {
			user_id: data?.USER_MAIN_DATA?.data?.userId,
			user_infos: data?.USER_MAIN_DATA?.data?.userInfos,
			today_score: data?.USER_MAIN_DATA?.data?.todayScore,
			key_data: data?.USER_MAIN_DATA?.data?.keyData
		}
		
		this.sessions = data?.USER_ACTIVITY?.data?.sessions?.map(session => ({
			day: session.day.toString().slice(-1),
			kilogram: session.kilogram,
			calories: session.calories,
		}))

		const formatted_day =  { 1: 'L', 2: 'M', 3: 'Me', 4: 'J', 5: 'V', 6: 'S', 7: 'D' } 
		this.averageSessions = data?.USER_AVERAGE_SESSIONS?.data?.sessions?.map(session => ({
			day: formatted_day[session.day],
			sessionLength: session.sessionLength
		}))
		
		const formatted_kind = { 1: 'Cardio', 2: 'Energie', 3: 'Endurance', 4: 'Force', 5: 'Vitesse', 6: 'Intensité' }
		this.perf =  data?.USER_PERFORMANCE?.data?.data?.map(data => ({
			value: data.value,
			kind: formatted_kind[data.kind],
		}))

	}
}


