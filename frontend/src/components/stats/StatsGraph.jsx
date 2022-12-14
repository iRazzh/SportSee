import '../../css/stats/StatsGraph.css';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { LineChart, Line, XAxis, Tooltip } from 'recharts';
import PropTypes from 'prop-types';

/**
 * Allows you to build everything that concerns the different graphic statistics of the subject
 * @param {*} Props : Will pass in props all the values necessary for the different graphic statistics of the subject 
 * @returns 'StatsGraph' Component
 */

export default function StatsGraph(props) {

    const pieDataCircle = [
        { name: "finished", value: props.score, fill: `red` },
        { name: "not-finished", value: 1 - props.score, fill: "transparent" },
    ];

	/* Function attached to Tooltip
	 * When Tooltip active and payload available display the right information */
    function CustomizedTooltip({ active, payload }) {
		if (active && payload) {
			return (
				<div className="custom-tooltip">
					<p>{`${payload[0].value}`} min</p>
				</div>
			);
		}
		return null;
	}

    return (
      <>
        <article className="stats-graph">
            <section className="duree">
                <p className="duree-p">Durée moyenne des sessions</p>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={props.dataAverage} width={500} height={300} >
                        <Tooltip content={<CustomizedTooltip />} wrapperStyle={{left: -10 }} cursor={{ stroke: "rgba(0, 0, 0, 0.1)", strokeWidth: 10}} />
                        <XAxis dataKey="day" tick={{opacity: 0.8}} tickLine={false} axisLine={false} stroke="white" />
                        <Line dataKey="sessionLength" type="monotone" stroke="white" strokeOpacity="0.5" dot="" />
                    </LineChart>
                </ResponsiveContainer>
            </section>
            <section className="intensite">
			<ResponsiveContainer width="100%" height="100%">
				<RadarChart cx="50%" cy="50%" innerRadius="10%" outerRadius={"70%"} data={props.dataPerf}>
					<PolarGrid radialLines={false} />
					<PolarAngleAxis dataKey="kind" tickLine={false} stroke={"#ffffff"} />
					<Radar dataKey="value" fill="#FF0101" fillOpacity={0.8} />
				</RadarChart>
			</ResponsiveContainer>
            </section>
            <section className="score">
                <p className="score-p">Score</p>
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie data={pieDataCircle} dataKey="value" startAngle={90} endAngle={450} innerRadius="70%" outerRadius="80%" >
                            {pieDataCircle.map((item, index) => (<Cell key={`cell-${index}`} fill={item.fill} cornerRadius="50%" />))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
                <div className="percentage-section">
                    <p className="percentage">{props.score * 100}%</p>
                    <p className="objectif">de votre objectif</p>
                    <div className="circle"></div>
                </div>
            </section>
        </article>
      </>
    );
}
StatsGraph.propTypes = {
    dataAverage: PropTypes.array,
    dataPerf: PropTypes.array,
    score: PropTypes.number
};