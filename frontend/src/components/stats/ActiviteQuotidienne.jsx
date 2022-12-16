import '../../css/stats/ActiviteQuotidienne.css';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'

import PropTypes from 'prop-types';

/**
 * Allows you to build everything that concerns the daily activity of the subject
 * @param {*} Props : Will pass in props all the values necessary for the daily activity of the subject
 * @returns 'ActiviteQuotidienne' Component
 */

export default function ActiviteQuotidienne(props) {
	/* Function attached to Tooltip
	 * When Tooltip active and payload available display the right information */
	function ManageAfterValue({ active, payload }) {
		if (active && payload) {
			return (
				<div className="valueAfter">
					<p>{`${payload[0].value}`}kg</p>
					<p>{`${payload[1].value}`}Kcal</p>
				</div>
			);
		}
		return null;
	}

  return (
    <>
      <article className="activites">
          <h2 className="title-activites">Activité quotidienne</h2>
          <div className="legende-activites">
              <p>Poids (kg)</p>
              <p>Calories brûlées (kCal)</p>
          </div>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={props.data} barGap={5} barCategoryGap={25} strokeDasharray="1 4" >
            <CartesianGrid strokeDasharray="3 3" />
              <YAxis dataKey="calories" type="number" tickCount={3} tickLine={false} axisLine={false} orientation="right" tick={{fontSize: 12}} stroke="#74798C" />
              <XAxis tickLine={false} axisLine={false} tick={{fontSize: 12}} stroke="#74798C" />
              <Tooltip content={<ManageAfterValue />} wrapperStyle={{ top: -50, left: 10 }} />
              <Bar dataKey="kilogram" radius={[10, 10, 0, 0]} stroke-linejoin={10} barSize={10} fill="#282D30" />
              <Bar dataKey="calories" radius={[10, 10, 0, 0]} barSize={10} fill="#E60000" />
            </BarChart>
          </ResponsiveContainer>
      </article>
    </>
  );
}
ActiviteQuotidienne.propTypes = {
  data: PropTypes.array,
};