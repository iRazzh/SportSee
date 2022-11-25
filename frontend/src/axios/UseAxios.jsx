import { useEffect, useState } from 'react'
import axios from 'axios'


/**
 * Will allow communication between the back and the front by retrieving data
 * @param {*} endpoints The endpoints will retrieve the data with the different routes of the back
 * @returns "useAxios" component
 */

export default function useAxios(endpoints) {
	const [data, setData] = useState(null)
	const [error, setError] = useState(null)

	
	useEffect(() => {
		// The axios.all query returns an array as a response and the data in the array
		// are sorted according to our endpoint array
		axios.all(endpoints.map((endpoint) => axios.get(endpoint)))
			// The axios.spread method accepts a callback and can destructure our response array
			// which makes the code much more readable
			.then(axios.spread(({data: USER_MAIN_DATA}, {data: USER_AVERAGE_SESSIONS}, {data: USER_PERFORMANCE}, {data: USER_ACTIVITY}) => {
				// All this is added to the data const
				setData({USER_MAIN_DATA, USER_AVERAGE_SESSIONS, USER_PERFORMANCE, USER_ACTIVITY})
			}))
			// If there is an error
			.catch((err) => {
				setError(err)
			})
	}, [endpoints])

	return { data, error }
}