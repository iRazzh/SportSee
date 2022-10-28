import '../../css/stats/ActiviteQuotidienne.css';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
  { name: '1', uv: 300, pv: 456 },
  { name: '2', uv: -145, pv: 230 },
  { name: '3', uv: -100, pv: 345 },
  { name: '4', uv: -8, pv: 450 },
  { name: '5', uv: 100, pv: 321 },
  { name: '6', uv: 9, pv: 235 },
  { name: '7', uv: 53, pv: 267 },
  { name: '8', uv: 252, pv: -378 },
  { name: '9', uv: 79, pv: -210 },
  { name: '10', uv: 294, pv: -23 },
  { name: '12', uv: 43, pv: 45 },
  { name: '13', uv: -74, pv: 90 },
  { name: '14', uv: -71, pv: 130 },
  { name: '15', uv: -117, pv: 11 },
  { name: '16', uv: -186, pv: 107 },
  { name: '17', uv: -16, pv: 926 },
  { name: '18', uv: -125, pv: 653 },
  { name: '19', uv: 222, pv: 366 },
  { name: '20', uv: 372, pv: 486 },
];

export default function ActiviteQuotidienne() {
    return (
      <>
        <article className="activites">
            <h2 className="title-activites">Activité quotidienne</h2>
            <div className="legende-activites">
                <p>Poids (kg)</p>
                <p>Calories brûlées (kCal)</p>
            </div>
            <section>
            <BarChart width={500} height={300} data={data} barGap={5} barCategoryGap={25} strokeDasharray="1 4" >
              <CartesianGrid vertical={false} />
              <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{fontSize: 12}} stroke="#74798C"/>
              <YAxis type="number" tickCount={3} tickLine={false} axisLine={false} orientation="right" tick={{fontSize: 12}} stroke="#74798C" />
              <Tooltip wrapperStyle={{ top: -50, left: 10 }} />
              <Legend wrapperStyle={{paddingTop: "15px"}} height={50} iconSize={8} iconType="circle" align="right" verticalAlign="top" />
              <Bar dataKey="pv" fill="#8884d8" />
              <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
            </section>
        </article>
      </>
    );
}