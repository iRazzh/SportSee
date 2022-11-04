import '../../css/stats/ActiviteQuotidienne.css';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'

export default function ActiviteQuotidienne(props) {

    return (
      <>
        <article className="activites">
            <h2 className="title-activites">Activité quotidienne</h2>
            <div className="legende-activites">
                <p>Poids (kg)</p>
                <p>Calories brûlées (kCal)</p>
            </div>
            <section>
            <BarChart width={500} height={300} data={props.data} barGap={5} barCategoryGap={25} strokeDasharray="1 4" >
              <CartesianGrid vertical={false} />
              <YAxis dataKey="calories" type="number" tickCount={3} tickLine={false} axisLine={false} orientation="right" tick={{fontSize: 12}} stroke="#74798C" />
              <XAxis tickLine={false} axisLine={false} tick={{fontSize: 12}} stroke="#74798C" />
              <Tooltip wrapperStyle={{ top: -50, left: 10 }} />
              <Bar dataKey="kilogram" name="Poids (kg)" radius={[10, 10, 0, 0]} stroke-linejoin={10} barSize={10} fill="#282D30" />
              <Bar dataKey="calories" name="Calories brûlées (kCal)" radius={[10, 10, 0, 0]} barSize={10} fill="#E60000" />
            </BarChart>
            </section>
        </article>
      </>
    );
}