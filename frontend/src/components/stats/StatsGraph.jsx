import '../../css/stats/StatsGraph.css';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts';
import { PieChart, Pie, Cell } from 'recharts';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
      subject: 'Math',
      A: 120,
      B: 110,
      fullMark: 150,
    },
    {
      subject: 'Chinese',
      A: 98,
      B: 130,
      fullMark: 150,
    },
    {
      subject: 'English',
      A: 86,
      B: 130,
      fullMark: 150,
    },
    {
      subject: 'Geography',
      A: 99,
      B: 100,
      fullMark: 150,
    },
    {
      subject: 'Physics',
      A: 85,
      B: 90,
      fullMark: 150,
    },
    {
      subject: 'History',
      A: 65,
      B: 85,
      fullMark: 150,
    },
  ];

  const data01 = [
    { name: 'Group A', value: 400 },
  ];

  const dataLine = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

export default function StatsGraph() {
    return (
      <>
        <article className="stats-graph">
            <section className="duree">
                <p className="duree-p">Durée moyenne des sessions</p>
                    <LineChart width={500} height={300} data={dataLine} >
                        <Tooltip />
                        <XAxis dataKey="name" />
                        <Line type="monotone" dataKey="pv" stroke="#FFFF" strokeOpacity="0.5" dot="" />
                    </LineChart>
            </section>
            <section className="intensite">
                <RadarChart cx="50%" cy="50%" outerRadius="70%" width={500} height={500} data={data} >
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <Radar dataKey="A" fill="#FF0101" fillOpacity={0.6} />
                </RadarChart>
            </section>
            <section className="score">
                <p className="score-p">Score</p>
                <PieChart width={400} height={400}>
                    <Pie data={data01} dataKey="value" startAngle={90} innerRadius="60%" outerRadius="70%" fill="#8884d8" paddingAngle={5} >
                        <Cell fill="red" />                    
                    </Pie>
                </PieChart>
                <div className="percentage-section">
                    <p className="percentage">12%</p>
                    <p className="objectif">de votre objectif</p>
                </div>
            </section>
        </article>
      </>
    );
}