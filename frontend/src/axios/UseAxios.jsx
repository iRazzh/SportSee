import { useEffect, useState } from 'react'
import axios from 'axios'


/**
 * 
 * @param {*} endpoints 
 * @returns 
 */

export default function useAxios(endpoints) {
	const [data, setData] = useState(null)
	const [error, setError] = useState(null)

	
	useEffect(() => {
		// La requête d'axios.all retourne un tableau en tant que réponse et les datas du tableau
		// sont triées en fonction de notre tableau d'endpoints
		axios.all(endpoints.map((endpoint) => axios.get(endpoint)))
			// La méthode axios.spread accepte un callback et peut destructuré notre tableau de réponses
			// ce qui rend le code beaucoup plus lisible
			.then(axios.spread(({data: USER_MAIN_DATA}, {data: USER_AVERAGE_SESSIONS}, {data: USER_PERFORMANCE}, {data: USER_ACTIVITY}) => {
				// On ajoute tout ça dans la const data
				setData({USER_MAIN_DATA, USER_AVERAGE_SESSIONS, USER_PERFORMANCE, USER_ACTIVITY})
			}))
			// S'il y a erreur
			.catch((err) => {
				setError(err)
			})
	}, [])

	return { data, error }
}