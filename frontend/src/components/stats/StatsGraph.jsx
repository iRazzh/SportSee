import '../../css/stats/StatsGraph.css';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts';
import { PieChart, Pie, Cell } from 'recharts';
import { LineChart, Line, XAxis, Tooltip } from 'recharts';

/**
 * Allows you to build everything that concerns the different graphic statistics of the subject
 * @param {*} Props : Will pass in props all the values necessary for the different graphic statistics of the subject 
 * @returns 'StatsGraph' Component
 */

export default function StatsGraph(props) {
    return (
      <>
        <article className="stats-graph">
            <section className="duree">
                <p className="duree-p">Durée moyenne des sessions</p>
                    <LineChart data={props.dataAverage} width={500} height={300} >
                        <Tooltip wrapperStyle={{left: -10 }} cursor={{ stroke: "rgba(0, 0, 0, 0.1)", strokeWidth: 100}} />
                        <XAxis dataKey="day" tick={{opacity: 0.8}} tickLine={false} axisLine={false} stroke="white" />
                        <Line dataKey="sessionLength" type="monotone" stroke="white" strokeOpacity="0.5" dot="" />
                    </LineChart>
            </section>
            <section className="intensite">
                <RadarChart data={props.dataPerf} cx="50%" cy="50%" outerRadius="70%" width={500} height={500} >
                    <PolarGrid />
                    <PolarAngleAxis dataKey="kind" tickLine={false} stroke="white" />
                    <Radar dataKey="value" fill="#FF0101" fillOpacity={0.6} />
                </RadarChart>
            </section>
            <section className="score">
                <p className="score-p">Score</p>
                <PieChart width={400} height={400}>
                    <Pie data={props.dataScore} dataKey="score" startAngle={0} endAngle={90 + (props.score * 360)} innerRadius="60%" outerRadius="70%" fill="#8884d8" paddingAngle={5} >
                        <Cell fill="red" />                    
                    </Pie>
                </PieChart>
                <div className="percentage-section">
                    <p className="percentage">{props.score * 100}%</p>
                    <p className="objectif">de votre objectif</p>
                </div>
            </section>
        </article>
      </>
    );
}